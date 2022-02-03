import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ReservationInput {
  @Field()
  date: string;

  @Field()
  startTime: string;

  @Field()
  endTime: string;

  @Field()
  parkingSpotId: number;
}
