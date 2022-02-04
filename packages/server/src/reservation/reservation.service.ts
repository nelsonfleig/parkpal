import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/models/abstract.service';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';

@Injectable()
export class ReservationService extends AbstractService<Reservation> {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepo: Repository<Reservation>
  ) {
    super(reservationRepo);
  }

  chart(id: number) {
    return this.reservationRepo.query(
      `SELECT to_char("createdAt", 'YYYY-MM-DD') as date, sum(r.total) as sum FROM reservations r WHERE r."userId" = ${id} GROUP BY date`
    );
  }
}
