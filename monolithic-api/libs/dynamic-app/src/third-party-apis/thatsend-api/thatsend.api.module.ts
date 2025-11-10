import { Module } from "@nestjs/common";
import { ThatsendApiService } from "./thatsend.api.service";
import { GraphQLRequestModule } from "@golevelup/nestjs-graphql-request";
import { ConfModule, LogModule } from "@libs/library-app";
import { ThatsendApiConfig } from "./thatsend.api.config";
import { GraphModule } from "./graph/graph.module";

@Module({
    imports: [],
    providers: [ThatsendApiService],
    exports: [ThatsendApiService],
})
export class ThatsendApiModule {
}