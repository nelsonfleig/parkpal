import { Field, ObjectType } from '@nestjs/graphql';

import { AbstractEntity } from 'src/common/models/abstract.entity';
import { ParkingSpot } from 'src/parking-spot/parking-spot.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';

@ObjectType()
@Entity('reservations')
export class Reservation extends AbstractEntity {
  @Field()
  @Column()
  startDate: string;

  @Field()
  @Column()
  endDate: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  stripeChargeId?: string;

  @Field()
  @Column()
  total: number;

  @Field(() => User)
  @ManyToOne(() => User, (user: User) => user.reservations)
  user: User;

  @Field()
  @RelationId((reservation: Reservation) => reservation.user)
  @Column()
  userId: number;

  @Field(() => ParkingSpot)
  @ManyToOne(() => ParkingSpot, (spot: ParkingSpot) => spot.reservations)
  parkingSpot: ParkingSpot;

  @Field()
  @RelationId((reservation: Reservation) => reservation.parkingSpot)
  @Column()
  parkingSpotId: number;
}
