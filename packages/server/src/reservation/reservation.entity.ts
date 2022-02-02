import { Field, ObjectType } from '@nestjs/graphql';
import { ReservationStatus } from 'src/common/constants/reservationStatus.enum';
import { AbstractEntity } from 'src/common/models/abstract.entity';
import { ParkingSpot } from 'src/parking-spot/parking-spot.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@ObjectType()
@Entity('reservations')
export class Reservation extends AbstractEntity {
  @Field()
  @Column()
  reservedDate: string;

  @Field()
  @Column()
  duration: number;

  @Field()
  @Column()
  amount: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  stripeChargeId?: string;

  @Field(() => [ReservationStatus])
  @Column('simple-array', { default: ReservationStatus.RESERVED })
  status: ReservationStatus[];

  @Field(() => User)
  @ManyToOne(() => User, (user: User) => user.reservations)
  user: User;

  @Field(() => ParkingSpot)
  @ManyToOne(() => ParkingSpot, (spot: ParkingSpot) => spot.reservations)
  parkingSpot: ParkingSpot;
}
