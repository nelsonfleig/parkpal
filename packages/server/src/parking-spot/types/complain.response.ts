import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class RenterComplainResponse {
  @Field()
  id: number;

  @Field()
  city: string;

  @Field()
  street: string;

  @Field()
  createdAt: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  pictureUrl: string;
}
