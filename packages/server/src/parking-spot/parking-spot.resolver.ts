import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/common/constants/role.enum';
import { AbstractResolver } from 'src/common/models/abstract.resolver';
import { UserJwt } from 'src/common/types/user-jwt.type';
import { ParkingSpot } from './parking-spot.entity';
import { ParkingSpotService } from './parking-spot.service';
import { RenterCalendarResponse } from './types/calendar.response';
import { ParkingSpotInput } from './types/parking-spot.input';

@Resolver()
export class ParkingSpotResolver extends AbstractResolver(
  ParkingSpot,
  ParkingSpotInput
) {
  constructor(protected parkingSpotService: ParkingSpotService) {
    super(parkingSpotService);
  }

  @Query(() => [ParkingSpot], {
    name: 'findAllParkingSpots',
    description: 'Find all ParkingSpots',
  })
  findAll() {
    return this.parkingSpotService.find({}, ['user']);
  }

  @Roles(Role.RENTER)
  @Query(() => [ParkingSpot], {
    name: 'findMyParkingSpots',
    description: "Find logged in user's ParkingSpots",
  })
  findMyParkingSpots(@CurrentUser() user: UserJwt) {
    return this.parkingSpotService.find({ userId: user.id });
  }

  @Roles(Role.RENTER)
  @Mutation(() => ParkingSpot, {
    name: 'createParkingSpot',
    description: 'Create ParkingSpot',
  })
  create(@CurrentUser() user: UserJwt, @Args('input') input: ParkingSpotInput) {
    return this.parkingSpotService.create({
      ...input,
      userId: user.id,
    });
  }

  @Roles(Role.RENTER)
  @Query(() => [RenterCalendarResponse], {
    name: 'findCalendarInfo',
    description: "Find user's ParkingSpots reservations and profit",
  })
  findCalendarInfo(@CurrentUser() user: UserJwt) {
    return this.parkingSpotService.findCalendarInfo({ userId: user.id }, [
      'reservations',
      'user',
    ]);
  }
}
