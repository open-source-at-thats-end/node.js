import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ConfService } from '../../conf/conf.service';
import { LogService } from '../../log/log.service';
import { join } from 'path';
import { GqlApolloServerPluginConfig } from '../gql.apollo.server.plugin.config';

@Injectable()
export class GqlApolloMonolithicConfig implements GqlOptionsFactory<ApolloDriverConfig> {
  private gqlApolloServerPluginConfig: GqlApolloServerPluginConfig;

  constructor(
    private readonly confService: ConfService,
    private readonly logService: LogService
  ) {
    this.logService.setContext(GqlApolloMonolithicConfig.name);
    this.gqlApolloServerPluginConfig = new GqlApolloServerPluginConfig(
      this.confService,
      this.logService
    );
  }

  createGqlOptions(): ApolloDriverConfig {
  const config: ApolloDriverConfig = {
    // ✅ GraphQL path
    path: `/${this.confService.graphqlRootSlug}`,

    // ✅ Auto-generate schema file
    autoSchemaFile: join(process.cwd(), 'schema.gql'),

    // ✅ Enable NEW Apollo Sandbox (not old playground)
    playground: false, // disable legacy GraphQL Playground
    introspection: this.confService.enableApolloServerIntrospection,
    persistedQueries: false,
    csrfPrevention: false,

    // ✅ Use Apollo Sandbox through a plugin
    plugins: this.gqlApolloServerPluginConfig.getPlugins(false),

    // ✅ Context — make request/response available
    context: ({ req, res }) => ({ req, res }),
  };

    return config;
  }
}
