import { Module } from '@nestjs/common';
import { WebhookResponseDataModule } from './response-data/response.data.module';
import { WebhookService } from './webhook.service';
import { WebhookResponseModule } from './response/response.module';

@Module({
  imports: [
    WebhookResponseModule,
    WebhookResponseDataModule
  ],
  providers: [WebhookService],
  exports: [
    WebhookResponseModule,
    WebhookResponseDataModule
  ],
})
export class WebhookModule {}
