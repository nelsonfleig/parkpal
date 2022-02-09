import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { graphqlUploadExpress } from 'graphql-upload';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsConfig: any = {
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  };
  console.log('CORS CONFIG', corsConfig);
  app.enableCors(corsConfig);

  app.use(cookieParser());
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
  await app.listen(5000);
}
bootstrap();
