import { Request, Response } from 'express';
import { UserJwt } from './user-jwt.type';

export type Ctx = {
  req: Request & { user?: UserJwt };
  res: Response;
};
