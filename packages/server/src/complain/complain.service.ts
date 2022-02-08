import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/models/abstract.service';
import { Repository } from 'typeorm';
import { Complain } from './complain.entity';

@Injectable()
export class ComplainService extends AbstractService<Complain> {
  constructor(@InjectRepository(Complain) complainRepo: Repository<Complain>) {
    super(complainRepo);
  }
}
