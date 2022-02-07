import { Field, ObjectType } from '@nestjs/graphql';
import { AbstractEntity } from 'src/common/models/abstract.entity';
import { ParkingSpot } from 'src/parking-spot/parking-spot.entity';
import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, RelationId } from 'typeorm';

@ObjectType()
@Entity('complains')
export class Complain extends AbstractEntity {
  @Field()
  @Column()
  description: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  pictureUrl: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.complains)
  user: User;

  @Field()
  @RelationId((comp: Complain) => comp.user)
  @Column()
  userId: number;

  @Field(() => ParkingSpot)
  @ManyToOne(() => ParkingSpot, (parkingSpot) => parkingSpot.complains)
  parkingSpot: ParkingSpot;

  @Field()
  @RelationId((complain: Complain) => complain.parkingSpot)
  @Column()
  parkingSpotId: number;
}
