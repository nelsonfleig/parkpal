import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  phone?: string;

  @Field({ nullable: true })
  pictureUrl?: string;
}
