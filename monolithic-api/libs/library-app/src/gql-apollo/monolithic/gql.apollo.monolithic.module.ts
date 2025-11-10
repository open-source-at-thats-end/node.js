import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfModule } from '../../conf/conf.module';
import { LogModule } from '../../log/log.module';
import { GqlApolloMonolithicConfig } from './gql.apollo.monolithic.config';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlApolloMonolithicConfig,
      imports: [ConfModule, LogModule],
      inject: [],
    }),
    ConfModule,
    LogModule,
  ],
  exports: [GraphQLModule],
})
export class GqlApolloMonolithModule {}
