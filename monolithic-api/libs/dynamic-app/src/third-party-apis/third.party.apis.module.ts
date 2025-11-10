import { Module } from '@nestjs/common';
import { ThirdPartyApisService } from './third.party.apis.service';
import { BulkSmsModule } from './bulk-sms/bulk.sms.module';
import { ThatsendApiModule } from './thatsend-api/thatsend.api.module';

@Module({
    imports: [
        BulkSmsModule,
        ThatsendApiModule,
    ],
    providers: [ThirdPartyApisService],
    exports: [
        ThirdPartyApisService,

        BulkSmsModule,
        ThatsendApiModule,
    ],
})
export class ThirdPartyApisModule{

}
