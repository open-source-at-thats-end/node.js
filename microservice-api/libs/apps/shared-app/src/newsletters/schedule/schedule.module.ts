import { Module } from '@nestjs/common';
import { NewsLetterScheduleService } from './schedule.service';
import { NewsLetterScheduleResolver } from './schedule.resolver';
import { NewsLetterScheduleEntity } from './entities/schedule.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { NewsLetterScheduleFactory } from './schedule.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([NewsLetterScheduleEntity]),
  ],
  providers: [
    NewsLetterScheduleResolver, 
    NewsLetterScheduleService, 
    NewsLetterScheduleFactory
  ],
  exports : [
    NewsLetterScheduleResolver, 
    NewsLetterScheduleService
  ],
})
export class NewsLetterScheduleModule {}