import { Injectable } from '@nestjs/common';
import { ApolloServerPluginLandingPageDisabled } from '@apollo/server/plugin/disabled';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default';
import { ConfService } from '../conf/conf.service';
import { LogService } from '../log/log.service';
import { ApolloServerPlugin } from '@apollo/server';

@Injectable()
export class GqlApolloServerPluginConfig {
    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService
    ){
        this.logService.setContext(GqlApolloServerPluginConfig.name);
    }
    
    getPlugins(disableLPlayground?: boolean): [any,any]{
        // Install a landing page plugin based on NODE_ENV
        //ApolloServerPluginLandingPageGraphQLPlayground()
        // to disable complete
        //ApolloServerPluginLandingPageDisabled()
        const landingPage = 
        (this.confService.isProductionEnv)
            ? ApolloServerPluginLandingPageProductionDefault({
                graphRef: 'my-graph-id@my-graph-variant',
                footer: false
            })
            : ApolloServerPluginLandingPageLocalDefault({ 
                footer: false
            });

        const disableLandingPage = ApolloServerPluginLandingPageDisabled();

        // remove sensitive information from error to expose
        const regex = /^[^_]*_/;
        const inLineTrace = ApolloServerPluginInlineTrace({
            includeErrors: { transform: (err: any) => (err.message.match(regex) ? null : err) },
        });

        return [(disableLPlayground ? disableLandingPage : landingPage), inLineTrace];
    }
}