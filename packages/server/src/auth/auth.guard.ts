import {
  createParamDecorator,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private jwtService: JwtService) {}

//   canActivate(context: ExecutionContext) {
//     const ctx = GqlExecutionContext.create(context);
//     const request = ctx.getContext().req;
//     try {
//       const jwt = request.cookies['accessToken'];
//       return this.jwtService.verify(jwt);
//     } catch (error) {
//       return false;
//     }
//   }
// }

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
}

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req.user;
  }
);
