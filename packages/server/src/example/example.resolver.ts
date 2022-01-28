import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { TodoInput } from './types/todo.input';

/**
 * Use this Resolver only for experimenting and testing out functionality
 */
@Resolver()
export class ExampleResolver {
  constructor(private todoService: TodoService) {}

  @Query(() => [Todo])
  findTodos() {
    return this.todoService.find();
  }

  @Query(() => [Todo])
  findOneTodo(@Args('id', { type: () => ID }) id: number) {
    return this.todoService.find({ id });
  }

  @Mutation(() => Todo)
  createTodo(@Args('input') input: TodoInput) {
    return this.todoService.create(input);
  }

  @Mutation(() => Todo)
  updateTodo(
    @Args('id', { type: () => ID }) id: number,
    @Args('input') input: TodoInput
  ) {
    return this.todoService.update(id, input);
  }

  @Mutation(() => Boolean)
  deleteTodo(@Args('id', { type: () => ID }) id: number) {
    return this.todoService.delete(id);
  }
}
