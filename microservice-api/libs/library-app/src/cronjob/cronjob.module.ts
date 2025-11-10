import { Global, Module } from "@nestjs/common";
import { LogModule } from "../log/log.module";
import { ConfModule } from "../conf/conf.module";
import { CronjobService } from "./cronjob.service";
import { ScheduleModule } from "@nestjs/schedule";

@Module({
    imports: [
        ScheduleModule.forRoot({
            cronJobs: true,
            intervals: true,
            timeouts: true,
        }),
        ConfModule,
        LogModule,
    ],
    providers: [CronjobService],
    exports: [],
})
export class CronjobModule {

}