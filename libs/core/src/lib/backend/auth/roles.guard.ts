import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable, UnauthorizedException, mixin } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ClsService } from 'nestjs-cls';
import { User } from '@prisma/client';
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

/**
 * A guard that takes a list of roles for its parameters and checks if the user has at least
 * one of them. Works with either HTTP or GraphQL requests. The following will require the
 * user to have either the `Admin` or `Moderator` roles.
 * ```ts
 * ＠UseGuards(RolesGuard('Admin', 'Moderator'))
 * ```
 * The following will require the user to have both the `Admin` and `Moderator` roles.
 * ```ts
 * ＠UseGuards(RolesGuard('Admin'), RolesGuard('Moderator'))
 * ```
 * If no roles are passed as parameters, it will only verify that the request has a valid JWT
 * and extracts the `RequestUser` to be injected via the `＠CurrentUser` decorator.
 * ```ts
 * ＠UseGuards(RolesGuard())
 * accountInfo(＠CurrentUser() user: RequestUser) { ... }
 * ```
 */
export function RolesGuard<R extends string>(...roles: Array<R>) {
  if (new.target !== undefined)
    throw new Error('RolesGuard cannot be instantiated directly. Use RolesGuard() instead.');

  @Injectable()
  class MixinRolesGuard extends AuthGuard('bearer') {
    constructor(
      readonly reflector: Reflector,
      readonly authClsStore: ClsService<{currentUser: User}>,) {
      super({
        tokenHeader: 'Authorization'
      })
    }

    override async canActivate(context: ExecutionContext) {
      let req;
      const type = context.getType();

      if (type === 'http') {
        req = context.switchToHttp().getRequest();
      } else {
        throw new UnauthorizedException(`Context ${type} not supported`);
      }

      const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      if (isPublic) {
        return true;
      }

      if (!req.user) await super.canActivate(context);
      this.authClsStore.set('currentUser', req.user as User)
      if (roles.length === 0) return true;

      return rbacLogic(req.user.roles, roles);
    }

    override getRequest(context: ExecutionContext) {
      const type = context.getType();
      if (type === 'http') {
        return context.switchToHttp().getRequest();
      } else {
        throw new UnauthorizedException(`Context ${type} not supported`);
      }
    }
  }

  return mixin(MixinRolesGuard);
}

export function rbacLogic(userRoles: string[], definedRoles: string[]) {
  return (
    userRoles.includes('Super') || definedRoles.some(definedRole => userRoles.includes(definedRole))
  );
}
