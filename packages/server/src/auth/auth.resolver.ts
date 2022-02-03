import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Role } from 'src/common/constants/role.enum';
import { Ctx } from 'src/common/types/context.type';
import { UserJwt } from 'src/common/types/user-jwt.type';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { CurrentUser } from './decorators/current-user.decorator';
import { AuthService } from './auth.service';
import { Roles } from './decorators/roles.decorator';
import { AuthResponse } from './types/auth.response';
import { LoginInput } from './types/login.input';
import { RegisterInput } from './types/register.input';
import { ProfileInput } from 'src/user/types/profile.input';

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

  @Query(() => User, { description: 'Get logged in user', nullable: true })
  me(@CurrentUser() user: UserJwt) {
    if (!user) return null;
    return this.userService.findOne({ id: user.id });
  }

  @Mutation(() => Boolean, { description: 'Logout user' })
  logout(@Context() context: Ctx) {
    return this.authService.logout(context);
  }

  /**
   * Upgrade a User to Renter if he submits his profile information
   *
   * Also allow a Renter to change his profile info
   */
  @Roles(Role.USER, Role.RENTER)
  @Mutation(() => AuthResponse, { description: 'Logout user' })
  async updateProfile(
    @CurrentUser() user: UserJwt,
    @Args('input') input: ProfileInput,
    @Context() context: Ctx
  ) {
    const updatedUser = await this.userService.update(user.id, {
      ...input,
      roles: [Role.USER, Role.RENTER],
    });
    const accessToken = this.authService.reissueAccessToken(
      updatedUser,
      context
    );
    return {
      user: updatedUser,
      accessToken,
    };
  }
}
