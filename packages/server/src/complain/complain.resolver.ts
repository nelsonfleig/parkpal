import { AbstractResolver } from 'src/common/models/abstract.resolver';
import { Complain } from './complain.entity';
import { ComplainService } from './complain.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ComplainInput } from './types/complain.input';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserJwt } from 'src/common/types/user-jwt.type';
import { FileUpload, GraphQLUpload } from 'graphql-upload';

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
  async create(
    @CurrentUser() user: UserJwt,
    @Args('input', { name: 'image', type: () => GraphQLUpload })
    input: ComplainInput,
    image?: FileUpload
  ) {
    console.log('yep');
    if (input.pictureUrl) {
      const savedPicture = await this.uploadService.upload(image, 'complaints');
      return this.complainService.create({
        ...input,
        pictureUrl: savedPicture,
        userId: user.id,
      });
    } else {
      return this.complainService.create({
        ...input,
        userId: user.id,
      });
    }
  }
}
