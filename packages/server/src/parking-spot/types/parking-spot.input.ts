import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ParkingSpotInput {
  @Field({ nullable: true })
  price: number;

  @Field({ nullable: true })
  lat: number;

  @Field({ nullable: true })
  lng: number;
}
