import { Module } from '@nestjs/common';
import { LeadFollowupStatusService } from './followup.status.service';
import { LeadFollowupStatusResolver } from './followup.status.resolver';
import { LeadFollowupStatusEntity } from './entities/followup.status.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { LeadFollowupStatusFactory } from './followup.status.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([LeadFollowupStatusEntity]),
  ],
  providers: [
    LeadFollowupStatusResolver, 
    LeadFollowupStatusService, 
    LeadFollowupStatusFactory
  ],
  exports : [
    LeadFollowupStatusResolver, 
    LeadFollowupStatusService
  ],
})
export class LeadFollowupStatusModule {}