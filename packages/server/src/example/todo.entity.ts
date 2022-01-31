import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractEntity } from 'src/common/models/abstract.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';

@ObjectType()
@Entity('todos')
export class Todo extends AbstractEntity {
  @Field()
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column({ default: false })
  completed: boolean;

  @Field(() => User)
  @ManyToOne(() => User, (user: User) => user.todos)
  user: User;

  @Field()
  @RelationId((todo: Todo) => todo.user) // you need to specify target relation on a ManyToOne
  @Column()
  userId: number;
}
