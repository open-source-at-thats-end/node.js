import { Module } from "@nestjs/common";
import { TemplateEngineService } from "./template.engine.service";
import { LogModule } from "../log/log.module";
import { ConfModule } from "../conf/conf.module";

@Module({
    imports: [
        ConfModule,
        LogModule,
    ],
    providers: [TemplateEngineService],
    exports: [TemplateEngineService]
})
export class TemplateEngineModule { 
}