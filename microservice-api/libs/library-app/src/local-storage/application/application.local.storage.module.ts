import { Module } from "@nestjs/common";
import { ApplicationLocalStorageService } from "./application.local.storage.service";

@Module({
    imports: [],
    providers: [ApplicationLocalStorageService],
    exports: [ApplicationLocalStorageService],
})
export class ApplicationLocalStorageModule{

}