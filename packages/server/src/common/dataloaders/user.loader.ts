import { DataloaderProvider } from '@tracworx/nestjs-dataloader';
import DataLoader from 'dataloader';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { In } from 'typeorm';

@DataloaderProvider()
export class UserLoader {
  constructor(private readonly userService: UserService) {}

  createDataloader(/*ctx: GqlExecutionContext*/) {
    // Fetch request-scoped context data if needed

    // Replace this with your actual dataloader implementation
    return new DataLoader<number, User>((keys: number[]) =>
      this.userService.find({ id: In(keys) })
    );
  }
}
