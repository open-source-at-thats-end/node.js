import { BadRequestException, Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from "@nestjs/graphql";
import { ConfService } from '../../conf/conf.service';
import { LogService } from '../../log/log.service';
import { IntrospectAndCompose, RemoteGraphQLDataSource } from "@apollo/gateway";
import { GqlApolloServerPluginConfig } from '../gql.apollo.server.plugin.config';
import { ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { MiddlewareUploadResponse } from '../../upload/upload.type';
import { UploadService } from '../../upload/upload.service';
import { JwtAuthGuard } from '../../jwt/jwt.auth.guard';

@Injectable()
export class GqlApolloSupergraphConfig implements GqlOptionsFactory<ApolloGatewayDriverConfig>{
    private gqlApolloServerPluginConfig: GqlApolloServerPluginConfig;
    
    constructor(
        private readonly jwtAuthGuard: JwtAuthGuard,
        private readonly uploadService: UploadService,
        private readonly confService: ConfService,
        private readonly logService: LogService
    ){
        this.logService.setContext(GqlApolloSupergraphConfig.name);
        this.gqlApolloServerPluginConfig = new GqlApolloServerPluginConfig(this.confService, this.logService);
    }
    async createGqlOptions(): Promise<ApolloGatewayDriverConfig>{
        const _this = this;
        const config: ApolloGatewayDriverConfig = {
            gateway: {
                supergraphSdl: new IntrospectAndCompose({
                    subgraphs: [
                        { 
                            name: this.confService.sharedAppName, 
                            url: this.confService.sharedAppBaseUrl, 
                        },
                        {
                            name: this.confService.businessAppName, 
                            url: this.confService.businessAppBaseUrl, 
                        }
                    ]
                }),
                
                // pass data from gateway to down stream microservices such as, pass authorised user info to down stream microservices
                //buildService: ({ name, url }) => (new GqlApolloGatewayBuildService({ url, useChunkedTransfer: true }, this.gConfigService, this.gLoggerService)),
                //buildService: ({name, url}) => (new FileUploadDataSource( { url, useChunkedTransfer: false } )),
                /*buildService: ({name, url}) =>  new FileUploadDataSource({
                    url,
                    useChunkedTransfer: true,
                    willSendRequest({ request, context }: { request: any; context: any; }) {
                        request?.http?.headers?.set('user', JSON.stringify(context.user ?? null));
                        request?.http?.headers?.set('authorization', context.auth ?? null);
                        request?.http?.headers?.set('set-cookie', context.passthrough_cookies ?? null);
                        request?.http?.session?.set('session', context.session ?? null);
                        request?.http?.sessionStore?.set('sessionStore', context.sessionStore ?? null);

                        // for file upload
                        if(context?.req?.headers['apollo-require-preflight']){
                            request?.http?.headers.set('apollo-require-preflight', context.req.headers['apollo-require-preflight'] ?? false);
                        }
                    },
                    didReceiveResponse({response, context}: {response: any; context: any;}) {
                        context.passthrough_cookies = response.http?.headers.get('set-cookie');
                        return response;
                    }
                  }),*/
                  buildService: ({name, url}: any) => {
                    return new RemoteGraphQLDataSource({
                        url,
                        async willSendRequest({ request, context }: any): Promise<void> {
                            // ##############################################################
                            // pass some basic info to downstream microservices
                            const req = context?.req;
                            const userAgent = req?.headers['user-agent'];
                            const remoteAddress = req?.headers['x-forwarded-for'] || req?.connection?.remoteAddress;

                            request?.http?.headers?.set('user-agent', userAgent);
                            request?.http?.headers?.set('x-forwarded-for', remoteAddress);

                            // ##############################################################
                            // all below are connected with 
                            // library-app/src/api-endpoint-auth/api.endpoint.auth.guard.ts => GraphQLEndPointAuthGuard() & CurrentUser()
                            // so, make usre what you set here need to adjust there
                            request?.http?.headers?.set(_this.confService.statefulAuthorizationHeaderName, req?.headers?.statefulauthorization ?? null);
                            request?.http?.headers?.set(_this.confService.reqHeaderKeyStatefulUser, JSON.stringify(context.statefuluser ?? null));
                            
                            request?.http?.headers?.set(_this.confService.reqHeaderKeyAuth, req?.headers?.authorization ?? null);
                            request?.http?.headers?.set(_this.confService.reqHeaderKeyApiUser, JSON.stringify(context.apiuser ?? null));
                            
                            request?.http?.headers?.set(_this.confService.reqHeaderKeyCookie, context.cookies ?? null);
                            request?.http?.session?.set(_this.confService.reqHeaderKeySession, context.session ?? null);
                            request?.http?.sessionStore?.set(_this.confService.reqHeaderKeySessionStore, context.sessionStore ?? null);

                            // ##############################################################
                            // as it is gateway, process file upload here and save in /tmp as sending file buffer to down stream is not good at all 
                            if(context?.req?.headers[_this.confService.reqHeaderKeyPreflight] && request?.variables?.attachment ){
                                // File upload handling
                                // perform real time file upload in tmp
                                const upResponse = await _this.uploadService.middlewareUpload({ request, context }) as any as MiddlewareUploadResponse[];

                                // loop through all files for upload process and update request
                                for (let i = 0; i < upResponse.length; i++) {
                                    // set new name an path of file with temp location to down stream microservice
                                    if(request.variables?.attachment?.file && i === 0){
                                        // if single file
                                        request.variables.attachment.file.tmpFileName = upResponse[i].tmpFileName;
                                        request.variables.attachment.file.tmpFileSize = upResponse[i].tmpFileSize;
                                        request.variables.attachment.file.tmpFilePath = upResponse[i].tmpFilePath;
                                    } else if(request.variables?.attachment[i] && request.variables?.attachment[i]?.file){
                                        // if multiple files
                                        request.variables.attachment[i].file.tmpFileName = upResponse[i].tmpFileName;
                                        request.variables.attachment[i].file.tmpFileSize = upResponse[i].tmpFileSize;
                                        request.variables.attachment[i].file.tmpFilePath = upResponse[i].tmpFilePath;
                                    } else {
                                        throw new BadRequestException(`Corrupted attachment(s), please try again`);
                                    }
                                }
                            }
                        },
                        didReceiveResponse({response, context} : any) {
                            context.cookies = response.http?.headers.get(_this.confService.reqHeaderKeyCookie);
                            return response;
                        },
                    })
                },
            },
            server: {
                path: `/${this.confService.graphqlRootSlug}`,
                csrfPrevention: true,
                context: async ({req, res}: any) => (
                    // authorisation checking
                    await _this.jwtAuthGuard.GraphQLEndPointAuthGuard({req, res})
                ),
                introspection: this.confService.enableApolloServerIntrospection,
                playground: false, // `${this.confService.projectName} - GraphQL API`
                plugins: this.gqlApolloServerPluginConfig.getPlugins(this.confService.disableSupergraphPlayground),
                
            },
            
        }
        return config;
    }
}