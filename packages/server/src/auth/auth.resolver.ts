import { Req, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Request } from 'express';
import { Ctx } from 'src/common/types/context.type';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { GqlAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AuthResponse } from './types/auth.response';
import { LoginInput } from './types/login.input';
import { RegisterInput } from './types/register.input';

@Resolver()
export class AuthResolver {
  constructor(
    protected authService: AuthService,
    protected userService: UserService
  ) {}

  @Mutation(() => AuthResponse, { description: 'Login user' })
  login(@Args('input') input: LoginInput, @Context() context: Ctx) {
    return this.authService.login(input, context);
  }

  @Mutation(() => User, { description: 'Register user' })
  register(@Args('input') input: RegisterInput) {
    return this.authService.register(input);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User, { description: 'Get logged in user', nullable: true })
  me(@Req() req: Request) {
    console.log(req);
    return null;
  }

  @Mutation(() => Boolean, { description: 'Logout user' })
  logout(@Context() context: Ctx) {
    return this.authService.logout(context);
  }
}
