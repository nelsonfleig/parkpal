import { InputType, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class RegisterInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}
