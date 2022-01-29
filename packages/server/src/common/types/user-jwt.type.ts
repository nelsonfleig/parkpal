import { Role } from '../constants/role.enum';

export type UserJwt = {
  id: number;
  roles: Role[];
};
