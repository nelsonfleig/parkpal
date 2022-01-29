import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jw.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'supersecret',
      signOptions: { expiresIn: '60s' },
    }),
    UserModule,
  ],
  providers: [AuthService, AuthResolver, JwtStrategy],
})
export class AuthModule {}
