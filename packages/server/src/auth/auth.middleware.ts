import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NextFunction, Request, Response } from 'express';
import { UserJwt } from 'src/common/types/user-jwt.type';

/** The AuthMiddleware is used to
 * (1) read the request header bearer token/user access token
 * (2) decrypt the access token to get the user object
 */
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: Request | any, res: Response, next: NextFunction) {
    const bearerHeader = req.headers.authorization;
    const accessToken = bearerHeader && bearerHeader.split(' ')[1];
    if (!bearerHeader || !accessToken) {
      return next();
    }

    const decodedUser = this.jwtService.verify<UserJwt>(accessToken);

    if (decodedUser) {
      req.user = decodedUser;
    }
    next();
  }
}
