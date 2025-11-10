import { Module, OnModuleInit } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { ConfModule } from '../../conf/conf.module'
import { ConfService } from '../../conf/conf.service';
import { LogModule } from '../../log/log.module'
import { LogService } from '../../log/log.service'
import { GqlApolloSubgraphService } from './gql.apollo.subgraph.service';
import { GqlApolloSubgraphConfig } from './gql.apollo.subgraph.config';
import { resetGrapaphQLExternalResolvers } from '../gql.apollo.graphql.external.resolvers';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      useClass: GqlApolloSubgraphConfig,
      imports: [ConfModule, LogModule],
      inject: [ConfService, LogService],
    }),
    ConfModule,
    LogModule
  ],
  providers: [GqlApolloSubgraphService],
  exports: [GqlApolloSubgraphService],
})
export class GqlApolloSubgraphModule {
  constructor(){
  }
}