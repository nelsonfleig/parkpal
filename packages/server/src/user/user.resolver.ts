import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { AbstractResolver } from 'src/common/models/abstract.resolver';
import { Todo } from 'src/example/todo.entity';
import { TodoService } from 'src/example/todo.service';
import { UserInput } from './types/user.input';
import { User } from './user.entity';
import { UserService } from './user.service';
import DataLoader from 'dataloader';
import { Loader } from '@tracworx/nestjs-dataloader';
import { TodoLoader } from '../common/dataloaders/todo.loader';

@Resolver(() => User)
export class UserResolver extends AbstractResolver(User, UserInput) {
  constructor(
    protected userService: UserService,
    protected todoService: TodoService
  ) {
    super(userService);
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
