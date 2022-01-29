import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractEntity } from 'src/common/models/abstract.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { User } from 'src/user/user.entity';
import { Reservation } from 'src/reservation/reservation.entity';
import { Complain } from 'src/complain/complain.entity';
import {
  TypeormLoaderExtension,
  TypeormLoaderMiddleware,
} from '@webundsoehne/nestjs-graphql-typeorm-dataloader';

@ObjectType()
@Entity('parkingSpots')
export class ParkingSpot extends AbstractEntity {
  @Field()
  @Column({ type: 'float' })
  latitude: number;

  @Field()
  @Column({ type: 'float' })
  longitude: number;

  @Field()
  @Column()
  price: number;

  @Column()
  @Field()
  picture_url: string;

  @Field(() => User)
  @ManyToOne(() => User, (user: User) => user.parkingSpots)
  user: User;

  @Field(() => [Reservation])
  @OneToMany(() => Reservation, (reservation) => reservation.parkingSpot, {
    nullable: true,
  })
  reservations: Reservation[];

  @Field(() => User)
  @OneToMany(() => Complain, (complain) => complain.complain, {
    nullable: true,
  })
  complains: Complain[];
}
