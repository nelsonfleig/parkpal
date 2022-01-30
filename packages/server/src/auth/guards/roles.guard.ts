import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { Role } from 'src/common/constants/role.enum';
import { UserJwt } from 'src/common/types/user-jwt.type';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // If no roles are required, allow access
    if (!requiredRoles) {
      return true;
    }

    // Roles are required, check if user is logged in
    const ctx = GqlExecutionContext.create(context);
    const { user }: { user: UserJwt } = ctx.getContext().req;
    if (!user) return false;

    // Check if user has role(s) required
    return requiredRoles.some((role) => user.roles.includes(role));
  }
}
