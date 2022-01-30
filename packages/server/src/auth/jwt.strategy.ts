import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserJwt } from 'src/common/types/user-jwt.type';

function jwtExtractor(req: Request) {
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

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([jwtExtractor]),
      ignoreExpiration: false,
      secretOrKey: 'supersecret',
    });
  }

  validate(payload: any): UserJwt {
    return { id: payload.id, roles: payload.roles };
  }
}
