import { Module } from '@nestjs/common';
import { UserNewsLetterSubscriptionService } from './user.subscription.service';
import { UserNewsLetterSubscriptionResolver } from './user.subscription.resolver';
import { UserNewsLetterSubscriptionEntity } from './entities/user.subscription.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { UserNewsLetterSubscriptionFactory } from './user.subscription.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([UserNewsLetterSubscriptionEntity]),
  ],
  providers: [
    UserNewsLetterSubscriptionResolver, 
    UserNewsLetterSubscriptionService, 
    UserNewsLetterSubscriptionFactory
  ],
  exports : [
    UserNewsLetterSubscriptionResolver, 
    UserNewsLetterSubscriptionService
  ],
})
export class UserNewsLetterSubscriptionModule {}