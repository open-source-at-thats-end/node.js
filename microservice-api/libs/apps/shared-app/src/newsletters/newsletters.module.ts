import { Module } from '@nestjs/common';
import { NewsLetterModule } from './newsletter/newsletter.module';
import { NewsLetterScheduleModule } from './schedule/schedule.module';
import { NewsLetterTrackLogModule } from './track-log/track.log.module';
import { NewsLetterUserModule } from './user/user.module';
import { NewsLetterCategoryModule } from './category/category.module';
import { UserNewsLetterSubscriptionModule } from './user-subscription/user.subscription.module';

@Module({
  imports: [
    NewsLetterModule,
    NewsLetterScheduleModule,
    NewsLetterTrackLogModule,
    NewsLetterUserModule,
    NewsLetterCategoryModule,
    UserNewsLetterSubscriptionModule    
  ],
  providers: [],
  exports: [
    NewsLetterModule,
    NewsLetterScheduleModule,
    NewsLetterTrackLogModule,
    NewsLetterUserModule,
    NewsLetterCategoryModule,
    UserNewsLetterSubscriptionModule
  ],
})
export class NewsLettersModule {}
