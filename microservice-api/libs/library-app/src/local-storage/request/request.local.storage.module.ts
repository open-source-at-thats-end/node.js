import { Module } from "@nestjs/common";
import { RequestLocalStorageService } from "./request.local.storage.service";
import { ClsModule } from "nestjs-cls";
import { ConfModule } from "../../conf/conf.module";
import { ConfService } from "../../conf/conf.service";
import { LogModule } from "../../log/log.module";


@Module({
    imports: [
        ClsModule.forRootAsync({
            imports: [ConfModule],
            useFactory: (confService: ConfService) => ({
                middleware: {
                    mount: true, // Set up middleware based on the config
                },
            }),
            inject: [ConfService],
            global: true
        }),

        ConfModule,
        LogModule,
    ],
    providers: [RequestLocalStorageService],
    exports: [RequestLocalStorageService],
})
export class RequestLocalStorageModule{

}