import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PaymentInput {

  @Field()
  total: number;

}
