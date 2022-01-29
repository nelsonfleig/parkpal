import { registerEnumType } from '@nestjs/graphql';

export enum ReservationStatus {
  RESERVED = 'RESERVED',
  ONGOING = 'ONGOING',
  FINISHED = 'FINISHED',
}

registerEnumType(ReservationStatus, {
  name: 'ReservationStatus',
});
