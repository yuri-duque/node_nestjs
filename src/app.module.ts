import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AccountModule } from './account/account.module';
import { AccountEntity } from './account/account.endity';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@gym.jthfudt.mongodb.net/?retryWrites=true&w=majority`,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [AccountEntity],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      sortSchema: true,
    }),
    AccountModule,
  ],
})
export class AppModule {}
