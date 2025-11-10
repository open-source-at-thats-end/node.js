import { Module } from '@nestjs/common';
import { CrawlerLeadService } from './crawler.lead.service';
import { GraphModule } from '../graph/graph.module';

@Module({
    imports: [GraphModule],
    providers: [CrawlerLeadService],
    exports: [CrawlerLeadService],
})
export class CrawlerLeadModule {}
