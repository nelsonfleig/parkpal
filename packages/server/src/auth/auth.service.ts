import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserInputError } from 'apollo-server-express';
import { CookieOptions } from 'express';
// import argon2 from 'argon2';
import md5 from 'md5';
import { Ctx } from 'src/common/types/context.type';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { LoginInput } from './types/login.input';
import { RegisterInput } from './types/register.input';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  async login({ email, password }: LoginInput, context: Ctx) {
    const errorMsg = 'Invalid email or password';

    const user = await this.userService.findOne({ email });
    if (!user) {
      throw new UserInputError(errorMsg);
    }

    // validate password
    // const fwe = await argon2.verify(user.password, password);

    const passwordIsValid = md5(password) === user.password;

    if (!passwordIsValid) {
      throw new UserInputError(errorMsg);
    }

    const accessToken = this.jwtService.sign(
      {
        id: user.id,
        roles: user.roles,
      },
      {
        expiresIn: '30d',
      }
    );

    const isProd = process.env.NODE_ENV === 'production';

    const config: CookieOptions = {
      httpOnly: true,
      domain: isProd ? 'vercel.app' : 'localhost',
      sameSite: isProd ? 'none' : 'strict',
      secure: isProd,
    };
    console.log(config);

    context.res.cookie('accessToken', accessToken, config);
    // TODO: sign a refresh token to send to client

    return { accessToken, user };
  }
  register(input: RegisterInput) {
    return this.userService.create(input);
  }

  logout(context: Ctx): boolean {
    context.res.clearCookie('accessToken');
    return true;
  }

  reissueAccessToken(user: User, context: Ctx) {
    const accessToken = this.jwtService.sign(
      {
        id: user.id,
        roles: user.roles,
      },
      {
        expiresIn: '30d',
      }
    );

    const isProd = process.env.NODE_ENV === 'production';
    context.res.cookie('accessToken', accessToken, {
      httpOnly: true,
      domain: isProd ? 'vercel.app' : 'localhost',
      sameSite: isProd ? 'none' : 'strict',
      secure: isProd,
    });
    return accessToken;
  }
}
