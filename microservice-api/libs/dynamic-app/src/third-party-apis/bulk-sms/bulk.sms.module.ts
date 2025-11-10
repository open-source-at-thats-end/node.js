import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BulkSmsService } from './bulk.sms.service';
import { BulkSmsConfig } from './bulk.sms.config';
import { LogModule, ConfModule, LibraryAppModule } from '@libs/library-app';

@Module({
    imports: [
        HttpModule.registerAsync({
            imports: [
                ConfModule,
                LogModule
            ],
            useClass: BulkSmsConfig,
        }),
        LibraryAppModule,
    ],
    providers: [BulkSmsService],
    exports: [BulkSmsService],
})
export class BulkSmsModule{

}