import { Module } from '@nestjs/common';
import { CrawlerScheduleService } from './schedule.service';
import { CrawlerScheduleResolver } from './schedule.resolver';
import { CrawlerScheduleEntity } from './entities/schedule.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { CrawlerScheduleFactory } from './schedule.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([CrawlerScheduleEntity]),
  ],
  providers: [
    CrawlerScheduleResolver, 
    CrawlerScheduleService, 
    CrawlerScheduleFactory
  ],
  exports : [
    CrawlerScheduleResolver, 
    CrawlerScheduleService
  ],
})
export class CrawlerScheduleModule {}