import { Module } from '@nestjs/common';
import { GqlApolloSupergraphService } from './gql.apollo.supergraph.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { GqlApolloSupergraphConfig } from './gql.apollo.supergraph.config';
import { ConfModule } from '../../conf/conf.module'
import { LogModule } from '../../log/log.module'
import { UploadModule } from '../../upload/upload.module';
import { JwtAuthModule } from '../../jwt/jwt.auth.module';

@Module({
  imports: [
    /**
     * About module: ApiEndpointAuthGraphqlModule & ApiEndpointAuthModule
     * ApiEndpointAuthGraphqlModule: manages authentication
     * ApiEndpointAuthModule: manages graphql endpoint
     * 
     * this module is availabe in library-app/src/api-endpoint-auth/api.endpoint.auth.module.ts
     * this module has datbase table to manage authentication, so need database connection
     * 
     * this module can be loaded from any place that means you can also import in shared-app
     * or business-app and in fact in business-app it's already impoerted because module has api access user related operation
     * that means it matches core nature of this microservice business-app as we have graphql enpoints 
     * we need to make it availabe as api end point, which will be created by subgraph only
     * so, importing ApiEndpointAuthModule to make it available for api call in business-app microservice
     * it's imported in apps/business-app/src/shared.app.module.ts
     * 
     * now, here module ApiEndpointAuthModule full fill different purpose. it manages authentication for graphql endpoint.
     * GqlApoppoSubgraphModule (this module) manages subgraph and imported in root app directly
     * so, ApiEndpointAuthModule is also availabe in root app but it will not load api end points.
     * 
     * at this place moudle ApiEndpointAuthModule manages authentication for graphql endpoint
     * directly from super graph, as all requests are transferred/passed from supergraph 
     * 
     * this is very crucial to understand how supergraph and subgraph works
     * and how application architecture is managed as per moduler architecture rules
     * 
     * do not get confused about import at 2 places.
     * in addition module ApiEndpointAuthModule also has dependences 
     **/
    GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      useClass: GqlApolloSupergraphConfig,
      imports: [JwtAuthModule, UploadModule, ConfModule, LogModule],
      inject: [],
    }),
    ConfModule,
    LogModule
  ],
  providers: [GqlApolloSupergraphService],
  exports: [GqlApolloSupergraphService],
})
export class GqlApolloSupergraphModule {}