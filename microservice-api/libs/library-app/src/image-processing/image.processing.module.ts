import { Module } from "@nestjs/common"
import { ImageProcessingService } from "./image.processing.service";
import { ConfModule } from "../conf/conf.module";
import { LogModule } from "../log/log.module";


@Module({
    imports: [
        ConfModule, 
        LogModule,
    ],
    providers: [ImageProcessingService],
    exports: [ImageProcessingService],
})
export class ImageProcessingModule { 

}