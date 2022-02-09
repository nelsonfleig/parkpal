import { Ctx } from 'src/common/types/context.type';

export function setCookie(context: Ctx, cookieName: string, payload: string) {
  const isProd = process.env.NODE_ENV === 'production';
  context.res.cookie(cookieName, payload, {
    httpOnly: true,
    domain: isProd ? 'nelsonfleig.com' : 'localhost',
    sameSite: isProd ? 'none' : 'strict',
    secure: isProd,
  });
}
