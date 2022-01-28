import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TodoInput {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  completed?: boolean;
}
