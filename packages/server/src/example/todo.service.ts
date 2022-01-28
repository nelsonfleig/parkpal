import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/models/abstract.service';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService extends AbstractService<Todo> {
  constructor(@InjectRepository(Todo) todoRepository: Repository<Todo>) {
    super(todoRepository);
  }
}
