import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthenticationError } from 'apollo-server-express';
import { NextFunction, Request, Response } from 'express';
import { UserJwt } from 'src/common/types/user-jwt.type';
import { extractJwtFromRequest } from '../helpers/extract-jwt.helper';

/** The AuthMiddleware is used to
 * (1) read the request cookie or header bearer access token
 * (2) decrypt the access token to get the payload object
 */
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  async use(req: Request | any, res: Response, next: NextFunction) {
    const accessToken = extractJwtFromRequest(req);
    if (!accessToken) {
      return next();
    }

    try {
      const decodedUser = this.jwtService.verify<UserJwt>(accessToken);
      if (decodedUser) {
        req.user = decodedUser;
      }
    } catch (e) {
      throw new AuthenticationError('Please register on login');
    }
    next();
  }
}
