import { Resolver } from '@nestjs/graphql';
import { AbstractResolver } from 'src/common/models/abstract.resolver';
import { UserInput } from './types/user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver extends AbstractResolver(User, UserInput) {
  constructor(protected userService: UserService) {
    super(userService);
  }
}
