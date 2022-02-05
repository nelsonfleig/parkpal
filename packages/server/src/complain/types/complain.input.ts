import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class ComplainInput {
  @Field()
  description: string;

  @Field({ nullable: true })
  pictureUrl: string;

  @Field(() => ID)
  parkingSpotId: number;

  @Field(() => ID)
  userId: number;
}
