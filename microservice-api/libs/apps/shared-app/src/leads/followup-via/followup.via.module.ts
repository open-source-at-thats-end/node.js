import { Module } from '@nestjs/common';
import { LeadFollowupViaService } from './followup.via.service';
import { LeadFollowupViaResolver } from './followup.via.resolver';
import { LeadFollowupViaEntity } from './entities/followup.via.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { LeadFollowupViaFactory } from './followup.via.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([LeadFollowupViaEntity]),
  ],
  providers: [
    LeadFollowupViaResolver, 
    LeadFollowupViaService, 
    LeadFollowupViaFactory
  ],
  exports : [
    LeadFollowupViaResolver, 
    LeadFollowupViaService
  ],
})
export class LeadFollowupViaModule {}