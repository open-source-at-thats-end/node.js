import { Module } from "@nestjs/common";
import { DataValidationPipe } from "./data.validation.pipe";
import { LogModule } from "../log/log.module";
import { ConfModule } from "../conf/conf.module";


@Module({
    imports: [
        ConfModule,
        LogModule
    ],
    providers: [DataValidationPipe],
    exports: [DataValidationPipe],
})
export class DataValidationModule {}