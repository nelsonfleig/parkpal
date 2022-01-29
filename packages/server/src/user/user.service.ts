import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/models/abstract.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService extends AbstractService<User> {
  constructor(@InjectRepository(User) userRepo: Repository<User>) {
    super(userRepo);
  }
}
