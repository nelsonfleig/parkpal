import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/common/constants/role.enum';
import { AbstractResolver } from 'src/common/models/abstract.resolver';
import { UserJwt } from 'src/common/types/user-jwt.type';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { TodoInput } from './types/todo.input';
import { UserLoader } from '../common/dataloaders/user.loader';
import { Loader } from '@tracworx/nestjs-dataloader';
import DataLoader from 'dataloader';

/**
 * Use this Resolver only for experimenting and testing out functionality
 */
@Resolver(() => Todo)
export class ExampleResolver extends AbstractResolver(Todo, TodoInput) {
  constructor(
    protected todoService: TodoService,
    protected userService: UserService
  ) {
    super(todoService);
  }

  @Roles(Role.USER)
  @Query(() => String)
  protect() {
    return 'Cool beans! You accessed a protected route!';
  }

  @Roles(Role.USER)
  @Mutation(() => Todo, {
    name: 'createTodo',
    description: 'Custom Create Todo',
  })
  create(@CurrentUser() user: UserJwt, @Args('input') input: TodoInput) {
    return this.todoService.create({
      ...input,
      userId: user.id,
    });
  }

  @ResolveField(() => User)
  user(
    @Parent() todo: Todo,
    @Loader(UserLoader) userLoader: DataLoader<number, User>
  ) {
    return userLoader.load(todo.userId);
    // With N+1 Problem
    // console.log(todo);
    // const { userId } = todo;
    // return this.userService.findOne({ id: userId });
  }
}
