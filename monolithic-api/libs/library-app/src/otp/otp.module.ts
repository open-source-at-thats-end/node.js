import { Module } from "@nestjs/common";
import { ConfModule } from "../conf/conf.module";
import { LogModule } from "../log/log.module";
import { OtpService } from "./otp.service";

@Module({
    imports: [
        ConfModule,
        LogModule
    ],
    providers: [OtpService],
    exports: [OtpService],
})
export class OtpModule { 

}