import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleResolver } from './example.resolver';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { UserModule } from 'src/user/user.module';
import { AppModule } from 'src/app/app.module';

/**
 * Use this module only for experimenting and testing out functionality
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([Todo]),
    forwardRef(() => UserModule),
    forwardRef(() => AppModule),
  ],
  providers: [ExampleResolver, TodoService],
  exports: [TodoService],
})
export class ExampleModule {}
