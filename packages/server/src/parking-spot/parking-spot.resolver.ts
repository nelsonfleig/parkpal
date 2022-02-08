import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/common/constants/role.enum';
import { AbstractResolver } from 'src/common/models/abstract.resolver';
import { UserJwt } from 'src/common/types/user-jwt.type';
import { ParkingSpot } from './parking-spot.entity';
import { ParkingSpotService } from './parking-spot.service';
import { RenterCalendarResponse } from './types/calendar.response';
import { RenterComplainResponse } from './types/complain.response';
import { NearParkingSpotsInput } from './types/near-parking-spots.input';
import { ParkingSpotInput } from './types/parking-spot.input';
ID;

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

  @Query(() => ParkingSpot, {
    name: `findOneParkingSpot`,
    description: `Find one parking spot for reservations`,
  })
  findOne(@Args('id', { type: () => ID }) id: number) {
    return this.parkingSpotService.findOne({ id }, ['reservations']);
  }

  @Roles(Role.RENTER)
  @Query(() => [ParkingSpot], {
    name: 'findMyParkingSpots',
    description: "Find logged in user's ParkingSpots",
  })
  findMyParkingSpots(@CurrentUser() user: UserJwt) {
    return this.parkingSpotService.find({ userId: user.id });
  }

  @Roles(Role.USER)
  @Query(() => [ParkingSpot], {
    name: 'findNearParkingSpots',
    description: 'Find parking spots near coords',
  })
  findNearParkingSpots(@Args('input') input: NearParkingSpotsInput) {
    return this.parkingSpotService.findNearParkingSpots(input, [
      'user',
      'reservations',
    ]);
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
      'complains',
    ]);
  }

  @Roles(Role.RENTER)
  @Query(() => [RenterComplainResponse], {
    name: 'findComplainInfo',
    description: "Find user's Complains",
  })
  findComplainInfo(@CurrentUser() user: UserJwt) {
    return this.parkingSpotService.findComplainInfo({ userId: user.id }, [
      'user',
      'complains',
    ]);
  }
}
