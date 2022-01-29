import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  USER = 'USER',
  RENTER = 'RENTER',
  ADMIN = 'ADMIN',
}

registerEnumType(Role, {
  name: 'Role',
});
