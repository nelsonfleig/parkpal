import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class RenterCalendarResponse {
  @Field()
  spot: number;

  @Field()
  startHour: number;

  @Field()
  endHour: number;

  @Field()
  name: string;
}
