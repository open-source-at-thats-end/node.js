import { Module } from '@nestjs/common';
import { CrawlerLeadModule } from './lead/lead.module';
import { CrawlerService } from './crawler.service';
import { CrawlerScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    CrawlerLeadModule,
    CrawlerScheduleModule
  ],
  providers: [CrawlerService],
  exports: [
    CrawlerLeadModule,
    CrawlerScheduleModule
  ],
})
export class CrawlerModule {}