import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/models/abstract.service';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';

@Injectable()
export class ReservationService extends AbstractService<Reservation> {
  constructor(
    @InjectRepository(Reservation) reservationRepo: Repository<Reservation>
  ) {
    super(reservationRepo);
  }
}
