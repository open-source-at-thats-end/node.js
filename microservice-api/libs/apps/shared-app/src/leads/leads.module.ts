import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadModule } from './lead/lead.module';
import { ConnectionSourceModule } from './connection/source/source.module';
import { ConnectionSourceCategoriesModule } from './connection/source-categories/source.categories.module';
import { LeadFollowupModule } from './followup/followup.module';
import { LeadFollowupStatusModule } from './followup-status/followup.status.module';
import { LeadFollowupViaModule } from './followup-via/followup.via.module';
import { LeadPotentialModule } from './potential/potential.module';

@Module({
  imports: [
    LeadModule,
    ConnectionSourceModule,
    ConnectionSourceCategoriesModule,
    LeadFollowupModule,
    LeadFollowupStatusModule,
    LeadFollowupViaModule,
    LeadPotentialModule
  ],
  providers: [LeadsService],
  exports: [
    LeadModule,
    ConnectionSourceModule,
    ConnectionSourceCategoriesModule,
    LeadFollowupModule,
    LeadFollowupStatusModule,
    LeadFollowupViaModule,
    LeadPotentialModule
  ],
})
export class LeadsModule {}