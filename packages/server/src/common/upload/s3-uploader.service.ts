import { Injectable } from '@nestjs/common';
import AWS from 'aws-sdk';
import { PutObjectRequest } from 'aws-sdk/clients/s3';
import { FileUpload } from 'graphql-upload';

@Injectable()
export class AWSUploadService {
  private s3: AWS.S3;

  constructor() {
    AWS.config = new AWS.Config();
    AWS.config.update({
      region: process.env.S3_REGION,
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    });
    this.s3 = new AWS.S3();
  }

  /**
   * Upload a file to an AWS S3 bucket
   *
   * @param fileUpload FileUpload type
   * @returns a url
   */
  upload(
    { createReadStream, filename }: FileUpload,
    folder = ''
  ): Promise<string> {
    const fileStream = createReadStream();

    fileStream.on('error', (error) => {
      throw error;
    });

    const filePath = folder ? `${folder}/${filename}` : filename;

    const params: PutObjectRequest = {
      Bucket: process.env.S3_BUCKET,
      Key: filePath,
      Body: fileStream,
    };

    return new Promise((resolve, reject) => {
      this.s3.upload(params, (err, data) => {
        if (err) reject(err);

        resolve(data.Location);
      });
    });
  }
}
