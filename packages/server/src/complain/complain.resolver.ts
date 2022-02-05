import { AbstractResolver } from 'src/common/models/abstract.resolver';
import { Complain } from './complain.entity';
import { ComplainService } from './complain.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ComplainInput } from './types/complain.input';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserJwt } from 'src/common/types/user-jwt.type';

@Resolver()
export class ComplainResolver extends AbstractResolver(
  Complain,
  ComplainInput
) {
  constructor(private complainService: ComplainService) {
    super(complainService);
  }

  @Query(() => [Complain], {
    name: 'findAllComplains',
    description: 'Find all Complains',
  })
  findAll() {
    return this.complainService.find({}, ['parkingSpot', 'user']);
  }

  @Query(() => [Complain], {
    name: 'findMyComplains',
    description: 'Find Complains about renters parking spaces',
  })
  findMyReservations(@CurrentUser() user: UserJwt) {
    return this.complainService.find({ userId: user.id }, [
      'user',
      'parkingSpot',
    ]);
  }

  @Mutation(() => Complain, {
    name: 'createComplain',
    description: 'Create Complain',
  })
  create(@CurrentUser() user: UserJwt, @Args('input') input: ComplainInput) {
    return this.complainService.create({
      ...input,
      userId: user.id,
    });
  }
}
