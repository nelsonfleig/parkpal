import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { AbstractResolver } from 'src/common/models/abstract.resolver';
import { UserJwt } from 'src/common/types/user-jwt.type';
import { Reservation } from './reservation.entity';
import { ReservationService } from './reservation.service';
import { ReservationInput } from './types/reservation.input';

@Resolver()
export class ReservationResolver extends AbstractResolver(
  Reservation,
  ReservationInput
) {
  constructor(private resService: ReservationService) {
    super(resService);
  }

  @Query(() => [Reservation], {
    name: 'findAllReservations',
    description: 'Find all Reservations',
  })
  findAll() {
    return this.resService.find({}, ['parkingSpot', 'user']);
  }

  @Query(() => [Reservation], {
    name: 'findMyReservations',
    description: 'Find Drivers reservations',
  })
  findMyReservations(@CurrentUser() user: UserJwt) {
    return this.resService.find({ userId: user.id });
  }

  @Mutation(() => Reservation, {
    name: 'createReservation',
    description: 'Create Reservation',
  })
  create(@CurrentUser() user: UserJwt, @Args('input') input: ReservationInput) {
    return this.resService.create({
      ...input,
      userId: user.id,
    });
  }
}
