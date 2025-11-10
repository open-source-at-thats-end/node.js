import { Module } from '@nestjs/common';
import { ThirdPartyApisService } from './third.party.apis.service';
import { BulkSmsModule } from './bulk-sms/bulk.sms.module';

@Module({
    imports: [
        BulkSmsModule,
    ],
    providers: [ThirdPartyApisService],
    exports: [
        ThirdPartyApisService,

        BulkSmsModule,
    ],
})
export class ThirdPartyApisModule{

}
