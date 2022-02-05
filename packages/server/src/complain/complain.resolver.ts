import { AbstractResolver } from 'src/common/models/abstract.resolver';
import { Complain } from './complain.entity';
import { ComplainService } from './complain.service';
import { Query, Resolver } from '@nestjs/graphql';
import { ComplainInput } from './types/complain.input';

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
}
