import { Request } from 'express';

export function extractJwtFromRequest(req: Request) {
  let token = null;

  if (req.cookies && req.cookies['accessToken']) {
    token = req.cookies['accessToken'];
  } else if (
    req.headers.authorization &&
    req.headers.authorization.includes('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  return token;
}
