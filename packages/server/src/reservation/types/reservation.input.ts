import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ReservationInput {
  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field()
  parkingSpotId: number;
}
