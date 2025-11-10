import { Module } from '@nestjs/common';
import { LeadService } from './lead.service';
import { LeadResolver } from './lead.resolver';
import { LeadEntity } from './entities/lead.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { LeadFactory } from './lead.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([LeadEntity]),
  ],
  providers: [
    LeadResolver, 
    LeadService, 
    LeadFactory
  ],
  exports : [
    LeadResolver, 
    LeadService
  ],
})
export class LeadModule {}