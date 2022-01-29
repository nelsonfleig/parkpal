import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { ExampleModule } from 'src/example/example.module';
import { ParkingSpotModule } from 'src/parking-spot/parking-spot.module';
import { ReservationModule } from 'src/reservation/reservation.module';
import { UserModule } from 'src/user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'parkpaldb',
      entities: [__dirname + '../../**/*.entity.{ts,js}'],
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message:
            error.extensions?.exception?.response?.message || error.message,
        };
        return graphQLFormattedError;
      },
    }),

    UserModule,
    ReservationModule,
    ParkingSpotModule,
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
