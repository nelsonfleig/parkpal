import { Resolver } from '@nestjs/graphql';
import { AbstractResolver } from 'src/common/models/abstract.resolver';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';
import { TodoInput } from './types/todo.input';

/**
 * Use this Resolver only for experimenting and testing out functionality
 */
@Resolver()
export class ExampleResolver extends AbstractResolver(Todo, TodoInput) {
  constructor(protected todoService: TodoService) {
    super(todoService);
  }
}
