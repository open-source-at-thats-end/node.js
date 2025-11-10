import { Module } from '@nestjs/common';
import { RetsListingAgentService } from './agent.service';
import { RetsListingAgentResolver } from './agent.resolver';
import { RetsListingAgentEntity } from './entities/agent.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { RetsListingAgentFactory } from './agent.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([RetsListingAgentEntity]),
  ],
  providers: [
    RetsListingAgentResolver, 
    RetsListingAgentService, 
    RetsListingAgentFactory
  ],
  exports : [
    RetsListingAgentResolver, 
    RetsListingAgentService
  ],
})
export class RetsListingAgentModule {}