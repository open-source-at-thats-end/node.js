import { Module } from "@nestjs/common";
import { LocalStorageService } from "./local.storage.service";
import { RequestLocalStorageModule } from "./request/request.local.storage.module";
import { ApplicationLocalStorageModule } from "./application/application.local.storage.module";

@Module({
    imports: [
        RequestLocalStorageModule,
        ApplicationLocalStorageModule,
    ],
    providers: [LocalStorageService],
    exports: [
        LocalStorageService,

        RequestLocalStorageModule,
        ApplicationLocalStorageModule,
    ],
})
export class LocalStorageModule{

}