import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/models/abstract.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import argon2 from 'argon2';
import { UserInput } from './types/user.input';

@Injectable()
export class UserService extends AbstractService<User> {
  constructor(@InjectRepository(User) userRepo: Repository<User>) {
    super(userRepo);
  }

  async create(input: UserInput): Promise<User> {
    const hashedPassword = await argon2.hash(input.password);
    return super.create({
      ...input,
      password: hashedPassword,
    });
  }
}
