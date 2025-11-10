import { GraphQLRequestModuleConfig } from "@golevelup/nestjs-graphql-request";
import { ConfService, LogService } from "@libs/library-app";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ThatsendApiConfig {

    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService
    ){}

    async create(): Promise<GraphQLRequestModuleConfig> {
        const config: GraphQLRequestModuleConfig = {
            endpoint: "api-thatsend-work.thatsend.dev/graphql",//this.confService.thatsendGraphqlApiEndPoint,
            options: {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            }
        }
        return config;
    }
}
