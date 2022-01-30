import { DataloaderProvider } from '@tracworx/nestjs-dataloader';
import DataLoader from 'dataloader';
import { Todo } from 'src/example/todo.entity';
import { TodoService } from 'src/example/todo.service';
import { In } from 'typeorm';

@DataloaderProvider()
export class TodoLoader {
  constructor(private readonly todoService: TodoService) {}

  createDataloader(/*ctx: GqlExecutionContext*/) {
    // Fetch request-scoped context data if needed

    // Replace this with your actual dataloader implementation
    return new DataLoader<number, Todo[]>((keys: number[]) => {
      // You must use this method to return an array of arrays for OneToMany relations
      return this.todoService
        .find({ user: In(keys) })
        .then((rows) => keys.map((id) => rows.filter((x) => x.userId === id)));
    });
  }
}
