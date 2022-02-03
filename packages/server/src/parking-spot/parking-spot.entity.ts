import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractEntity } from 'src/common/models/abstract.entity';
import { Complain } from 'src/complain/complain.entity';
import { Reservation } from 'src/reservation/reservation.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, OneToMany, RelationId } from 'typeorm';

@ObjectType()
@Entity('parking_spots')
export class ParkingSpot extends AbstractEntity {
  @Field()
  @Column({ type: 'float' })
  lat: number;

  @Field()
  @Column({ type: 'float' })
  lng: number;

  @Field()
  @Column()
  price: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  picture_url: string;

  @Field(() => [Number])
  @Column('simple-array')
  daysAvailable: number[];

  @Field()
  @Column()
  startHour: number;

  @Field()
  @Column()
  endHour: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  street: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  zipCode: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  country: string;

  @Field(() => User)
  @ManyToOne(() => User, (user: User) => user.parkingSpots)
  user: User;

  @Field()
  @RelationId((parkingSpot: ParkingSpot) => parkingSpot.user) // you need to specify target relation on a ManyToOne
  @Column()
  userId: number;

  @Field(() => [Reservation], { nullable: true })
  @OneToMany(() => Reservation, (reservation) => reservation.parkingSpot, {
    nullable: true,
  })
  reservations: Reservation[];

  @Field(() => User, { nullable: true })
  @OneToMany(() => Complain, (complain) => complain.parkingSpot, {
    nullable: true,
  })
  complains: Complain[];
}
