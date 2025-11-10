import { Module } from '@nestjs/common';
import { LeadPotentialService } from './potential.service';
import { LeadPotentialResolver } from './potential.resolver';
import { LeadPotentialEntity } from './entities/potential.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { LeadPotentialFactory } from './potential.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([LeadPotentialEntity]),
  ],
  providers: [
    LeadPotentialResolver, 
    LeadPotentialService, 
    LeadPotentialFactory
  ],
  exports : [
    LeadPotentialResolver, 
    LeadPotentialService
  ],
})
export class LeadPotentialModule {}