import { Module } from '@nestjs/common';
import { MasterService } from './master.service';
import { AuthorisationModule } from './authorisation/authorisation.module';
import { DeviceModule } from './device/device.module';
import { ThirdPartyPlatformModule } from './third-party-platform/third.party.platform.module';
import { IdentityCardTypeModule } from './identity-card-type/identity.card.type.module';
import { FormFieldModule } from './form-field/form.field.module';
import { AlertDurationModule } from './alert-duration/alert.duration.module';
import { WorkStatusModule } from './work-status/work.status.module';

@Module({
  imports: [
    ThirdPartyPlatformModule,
    AuthorisationModule,
    DeviceModule,
    IdentityCardTypeModule,
    FormFieldModule,
    AlertDurationModule,
    WorkStatusModule
  ],
  providers: [MasterService],
  exports: [
    MasterService,
    
    ThirdPartyPlatformModule,
    AuthorisationModule,
    DeviceModule,
    IdentityCardTypeModule,
    FormFieldModule,
    AlertDurationModule,
    WorkStatusModule
  ],
})
export class MasterModule {}