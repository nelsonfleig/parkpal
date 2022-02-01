import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProfileInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  phone: string;

  @Field()
  bankInfo: string;
}
