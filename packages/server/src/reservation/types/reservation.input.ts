import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class ReservationInput {
  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field()
  total: number;

  @Field(() => ID)
  parkingSpotId: number;
}
