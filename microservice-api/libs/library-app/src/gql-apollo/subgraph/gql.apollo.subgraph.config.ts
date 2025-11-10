import { ApolloFederationDriverConfig } from "@nestjs/apollo";
import { Injectable } from "@nestjs/common";
import { GqlOptionsFactory } from "@nestjs/graphql";
import { GqlApolloServerPluginConfig } from "../gql.apollo.server.plugin.config";
import { ConfService } from "../../conf/conf.service";
import { LogService } from "../../log/log.service";
import { getGrapaphQLExternalResolvers } from "../gql.apollo.graphql.external.resolvers";

@Injectable()
export class GqlApolloSubgraphConfig implements GqlOptionsFactory<ApolloFederationDriverConfig>{
    private gqlApolloServerPluginService: GqlApolloServerPluginConfig;

    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService
    ){
        this.logService.setContext(GqlApolloSubgraphConfig.name);
        this.gqlApolloServerPluginService = new GqlApolloServerPluginConfig(this.confService, this.logService);
    }

    createGqlOptions(): ApolloFederationDriverConfig{
        const config: ApolloFederationDriverConfig = {
            path: `/${this.confService.graphqlRootSlug}`,
            csrfPrevention: true,
            autoSchemaFile: {
                federation: 2,
                //path: this.confService.currentGraphqlSchemaFile,
            },
            resolvers: getGrapaphQLExternalResolvers(),
            /*context: (req: any) => ({
                headers: req.headers,
            }),*/
            context: ({ req, res }: any) => ({ req, res }), // Pass response to context
            introspection: this.confService.enableApolloServerIntrospection,
            playground: false,
            plugins: this.gqlApolloServerPluginService.getPlugins(this.confService.disableSubgraphPlayground),
        };

        return config;
    }
}