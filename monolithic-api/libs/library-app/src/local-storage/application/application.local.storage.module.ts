import { Module } from "@nestjs/common";
import { ApplicationLocalStorageService } from "./application.local.storage.service";
import { ConfModule } from "../../conf/conf.module";
import { LogModule } from "../../log/log.module";

@Module({
    imports: [
        ConfModule,
        LogModule,
    ],
    providers: [ApplicationLocalStorageService],
    exports: [ApplicationLocalStorageService],
})
export class ApplicationLocalStorageModule{

}