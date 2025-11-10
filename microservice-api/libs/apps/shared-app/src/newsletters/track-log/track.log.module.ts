import { Module } from '@nestjs/common';
import { NewsLetterTrackLogService } from './track.log.service';
import { NewsLetterTrackLogResolver } from './track.log.resolver';
import { NewsLetterTrackLogEntity } from './entities/track.log.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { NewsLetterTrackLogFactory } from './track.log.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([NewsLetterTrackLogEntity]),
  ],
  providers: [
    NewsLetterTrackLogResolver, 
    NewsLetterTrackLogService, 
    NewsLetterTrackLogFactory
  ],
  exports : [
    NewsLetterTrackLogResolver, 
    NewsLetterTrackLogService
  ],
})
export class NewsLetterTrackLogModule {}