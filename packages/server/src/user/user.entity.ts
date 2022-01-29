import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from 'src/common/constants/role.enum';
import { AbstractEntity } from 'src/common/models/abstract.entity';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity('users')
export class User extends AbstractEntity {
  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;

  @Field()
  @Column()
  phone: string;

  @Field(() => [Role])
  @Column('simple-array', { default: Role.USER })
  roles: Role[];

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  bankInfo: string;
}
