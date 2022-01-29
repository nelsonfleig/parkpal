import { Field, ObjectType } from '@nestjs/graphql';
import { Role } from 'src/common/constants/role.enum';
import { AbstractEntity } from 'src/common/models/abstract.entity';
import { Complain } from 'src/complain/complain.entity';
import { ParkingSpot } from 'src/parking-spot/parkingSpot.entity';
import { Reservation } from 'src/reservation/reservation.entity';
import { Column, Entity, OneToMany } from 'typeorm';

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

  @Field()
  @Column()
  pictureUrl: string;

  @Field(() => [Role])
  @Column('simple-array', { default: Role.USER })
  roles: Role[];

  @Field(() => [Reservation], { nullable: true })
  @OneToMany(() => Reservation, (Reservation) => Reservation.id, {
    nullable: true,
  })
  reservations: Reservation[];

  @Field(() => [Complain], { nullable: true })
  @OneToMany(() => Complain, (complain) => complain.user, { nullable: true })
  complains: Complain[];

  ////////////// FOR RENTER /////////////////

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  bankInfo: string;

  @Field(() => [ParkingSpot], { nullable: true })
  @OneToMany(() => ParkingSpot, (ParkingSpot) => ParkingSpot.id, {
    nullable: true,
  })
  parkingSpots: ParkingSpot[];
}
