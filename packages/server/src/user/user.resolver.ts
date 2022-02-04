import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Loader } from '@tracworx/nestjs-dataloader';
import DataLoader from 'dataloader';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/common/constants/role.enum';
import { AbstractResolver } from 'src/common/models/abstract.resolver';
import { UserJwt } from 'src/common/types/user-jwt.type';
import { Todo } from 'src/example/todo.entity';
import { TodoService } from 'src/example/todo.service';
import { ReservationService } from 'src/reservation/reservation.service';
import { TodoLoader } from '../common/dataloaders/todo.loader';
import { BusinessStatsResponse } from './types/business-info.response';
import { UserInput } from './types/user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver extends AbstractResolver(User, UserInput) {
  constructor(
    protected userService: UserService,
    protected todoService: TodoService,
    protected resService: ReservationService
  ) {
    super(userService);
  }

  @Roles(Role.RENTER)
  @Query(() => BusinessStatsResponse)
  async getMyBusinessStats(@CurrentUser() user: UserJwt) {
    return this.userService.getMyBusinessStats(user.id);
  }

  @ResolveField(() => [Todo])
  async todos(
    @Parent() user: User,
    @Loader(TodoLoader) todoLoader: DataLoader<Todo['id'], Todo>
  ) {
    return todoLoader.load(user.id);

    // With N+1 Problem
    // const { id } = user;
    // return this.todoService.find({ user: id });
  }
}
