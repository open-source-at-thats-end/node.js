import { Module } from '@nestjs/common';
import { WebhookResponseDataService } from './response.data.service';
import { WebhookResponseDataResolver } from './response.data.resolver';
import { WebhookResponseDataEntity } from './entities/response.data.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { WebhookResponseDataFactory } from './response.data.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([WebhookResponseDataEntity]),
  ],
  providers: [
    WebhookResponseDataResolver, 
    WebhookResponseDataService, 
    WebhookResponseDataFactory
  ],
  exports : [
    WebhookResponseDataResolver, 
    WebhookResponseDataService
  ],
})
export class WebhookResponseDataModule {}