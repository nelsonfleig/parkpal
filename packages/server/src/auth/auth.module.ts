import { forwardRef, Module } from '@nestjs/common';
import { AppModule } from 'src/app/app.module';
import { UserModule } from 'src/user/user.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  imports: [forwardRef(() => AppModule), UserModule],
  providers: [AuthService, AuthResolver],
})
export class AuthModule {}
