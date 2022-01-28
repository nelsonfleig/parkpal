import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleResolver } from './example.resolver';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

/**
 * Use this module only for experimenting and testing out functionality
 */
@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [ExampleResolver, TodoService],
})
export class ExampleModule {}
