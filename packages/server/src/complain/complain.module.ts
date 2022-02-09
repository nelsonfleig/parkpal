import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Complain } from './complain.entity';
import { ComplainResolver } from './complain.resolver';
import { ComplainService } from './complain.service';
import { AWSUploadService } from 'src/common/upload/s3-uploader.service';

@Module({
  imports: [TypeOrmModule.forFeature([Complain])],
  providers: [ComplainResolver, ComplainService, AWSUploadService],
  exports: [ComplainService],
})
export class ComplainModule {}
