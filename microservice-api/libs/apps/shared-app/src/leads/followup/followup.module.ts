import { Module } from '@nestjs/common';
import { LeadFollowupService } from './followup.service';
import { LeadFollowupResolver } from './followup.resolver';
import { LeadFollowupEntity } from './entities/lead.followup.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { LeadFollowupFactory } from './followup.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([LeadFollowupEntity]),
  ],
  providers: [
    LeadFollowupResolver, 
    LeadFollowupService, 
    LeadFollowupFactory
  ],
  exports : [
    LeadFollowupResolver, 
    LeadFollowupService
  ],
})
export class LeadFollowupModule {}