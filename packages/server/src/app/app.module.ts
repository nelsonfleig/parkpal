import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataloaderModule } from '@tracworx/nestjs-dataloader';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { AuthModule } from 'src/auth/auth.module';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { AuthMiddleware } from 'src/auth/middleware/auth.middleware';
import { dataloaders } from 'src/common/dataloaders';
import { Ctx } from 'src/common/types/context.type';
import { ExampleModule } from 'src/example/example.module';
import { ParkingSpotModule } from 'src/parking-spot/parking-spot.module';
import { ReservationModule } from 'src/reservation/reservation.module';
import { UserModule } from 'src/user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST, // dev: localhost, prod: postgres
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'parkpaldb',
      entities: [__dirname + '../../**/*.entity.{ts,js}'],
      synchronize: false,
    }),
    DataloaderModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
      introspection: true,
      cors: { origin: true, credentials: true },
      context: ({ req, res }: Ctx) => ({ req, res }),
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message:
            error.extensions?.exception?.response?.message || error.message,
        };
        return graphQLFormattedError;
      },
    }),
    JwtModule.register({
      secret: 'supersecret',
      signOptions: { expiresIn: '60s' },
    }),
    AuthModule,
    UserModule,
    ReservationModule,
    ParkingSpotModule,
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...dataloaders,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [JwtModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
