import { Query, Resolver } from '@nestjs/graphql';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/common/constants/role.enum';
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

  @Roles(Role.USER)
  @Query(() => String)
  protect() {
    return 'Cool beans! You accessed a protected route!';
  }
}
