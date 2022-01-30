import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractEntity } from 'src/common/models/abstract.entity';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity('todos')
export class Todo extends AbstractEntity {
  @Field()
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column({ default: false })
  completed: boolean;
}
