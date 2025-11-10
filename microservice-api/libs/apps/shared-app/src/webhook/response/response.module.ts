import { Module } from '@nestjs/common';
import { WebhookResponseService } from './response.service';
import { WebhookResponseResolver } from './response.resolver';
import { WebhookResponseEntity } from './entities/response.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { WebhookResponseFactory } from './response.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([WebhookResponseEntity]),
  ],
  providers: [
    WebhookResponseResolver, 
    WebhookResponseService, 
    WebhookResponseFactory
  ],
  exports : [
    WebhookResponseResolver, 
    WebhookResponseService
  ],
})
export class WebhookResponseModule {}