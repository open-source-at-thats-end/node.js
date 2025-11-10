import { Module } from '@nestjs/common';
import { CrawlerLeadService } from './lead.service';
import { CrawlerLeadResolver } from './lead.resolver';
import { CrawlerLeadEntity } from './entities/lead.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { CrawlerLeadFactory } from './lead.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([CrawlerLeadEntity]),
  ],
  providers: [
    CrawlerLeadResolver, 
    CrawlerLeadService, 
    CrawlerLeadFactory
  ],
  exports : [
    CrawlerLeadResolver, 
    CrawlerLeadService
  ],
})
export class CrawlerLeadModule {}