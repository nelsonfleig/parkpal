import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AWSUploadService } from 'src/common/upload/s3-uploader.service';
import { ExampleModule } from 'src/example/example.module';
import { ReservationModule } from 'src/reservation/reservation.module';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ExampleModule, ReservationModule],
  providers: [UserResolver, UserService, AWSUploadService],
  exports: [UserService],
})
export class UserModule {}
