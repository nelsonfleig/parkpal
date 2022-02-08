import { NestFactory } from '@nestjs/core';
import cookieParser from 'cookie-parser';
import { graphqlUploadExpress } from 'graphql-upload';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: process.env.NODE_ENV === 'production',
  });
  app.use(cookieParser());
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));
  await app.listen(5000);
}
bootstrap();
