import { Module } from '@nestjs/common';
import { NewsLetterUserService } from './user.service';
import { NewsLetterUserResolver } from './user.resolver';
import { NewsLetterUserEntity } from './entities/user.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { NewsLetterUserFactory } from './user.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([NewsLetterUserEntity]),
  ],
  providers: [
    NewsLetterUserResolver, 
    NewsLetterUserService, 
    NewsLetterUserFactory
  ],
  exports : [
    NewsLetterUserResolver, 
    NewsLetterUserService
  ],
})
export class NewsLetterUserModule {}