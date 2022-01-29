import { Query } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';
import { Reservation } from './reservation.entity';
import { ReservationService } from './reservation.service';

@Resolver()
export class ReservationResolver {
  constructor(private resService: ReservationService) {}
}
