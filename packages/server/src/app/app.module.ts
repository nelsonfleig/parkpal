import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { AuthModule } from 'src/auth/auth.module';
import { Ctx } from 'src/common/types/context.type';
import { ExampleModule } from 'src/example/example.module';
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
      playground: true,
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
    AuthModule,
    UserModule,
    ExampleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
