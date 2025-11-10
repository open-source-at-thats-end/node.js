import { Module } from '@nestjs/common';
import { WebhookGatewayService } from './webhook.gateway.service';
import { WebhookGatewayController } from './webhook.gateway.controller';


@Module({
  imports: [],
  controllers: [WebhookGatewayController],
  providers: [WebhookGatewayService],
  exports: [
    WebhookGatewayService,
  ],
})
export class WebhookGatewayModule {}