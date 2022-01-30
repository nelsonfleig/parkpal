import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractEntity } from 'src/common/models/abstract.entity';
import { Complain } from 'src/complain/complain.entity';
import { Reservation } from 'src/reservation/reservation.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

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
  @OneToMany(() => Complain, (complain) => complain.parkingSpot, {
    nullable: true,
  })
  complains: Complain[];
}
