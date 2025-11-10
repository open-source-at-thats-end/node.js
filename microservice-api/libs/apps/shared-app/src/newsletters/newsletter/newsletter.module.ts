import { Module } from '@nestjs/common';
import { NewsLetterService } from './newsletter.service';
import { NewsLetterResolver } from './newsletter.resolver';
import { NewsLetterEntity } from './entities/newsletter.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { NewsLetterFactory } from './newsletter.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([NewsLetterEntity]),
  ],
  providers: [
    NewsLetterResolver, 
    NewsLetterService, 
    NewsLetterFactory
  ],
  exports : [
    NewsLetterResolver, 
    NewsLetterService
  ],
})
export class NewsLetterModule {}