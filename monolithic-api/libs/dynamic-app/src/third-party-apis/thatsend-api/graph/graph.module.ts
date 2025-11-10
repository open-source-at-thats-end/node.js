import { Module } from "@nestjs/common";
import { GraphService } from "./graph.service";
import { GraphQLRequestModule } from "@golevelup/nestjs-graphql-request";
import { ConfModule, LogModule } from "@libs/library-app";
import { ThatsendApiConfig } from "../thatsend.api.config";

@Module({
  imports: [
    GraphQLRequestModule.forRootAsync({
      imports: [ConfModule, LogModule],
      useClass: ThatsendApiConfig,
    }),
  ],
  providers: [GraphService],
  exports: [GraphService],
})
export class GraphModule {}
