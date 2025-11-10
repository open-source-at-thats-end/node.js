// libs/library-app/pubsub/pubsub.module.ts
import { Module } from "@nestjs/common";
import { ConfModule } from "../conf/conf.module";
import { LogModule } from "../log/log.module";
import { PubSubService } from "./pubsub.service";


@Module({
  imports: [
    ConfModule,
    LogModule,
  ],
  providers: [
    PubSubService
  ],
  exports: [
    PubSubService
  ]
})
export class PubSubModule
{

}