import { Module } from "@nestjs/common";
import { UploadService } from "./upload.service";
import { ConfModule } from '../conf/conf.module'
import { LogModule } from '../log/log.module'

@Module({
    imports: [
        ConfModule, 
        LogModule,
    ],
    providers: [UploadService],
    exports: [UploadService],
})
export class UploadModule{

}