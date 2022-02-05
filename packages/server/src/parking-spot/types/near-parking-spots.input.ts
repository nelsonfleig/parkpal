import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NearParkingSpotsInput {
  @Field()
  lat: number;

  @Field()
  lng: number;
}
