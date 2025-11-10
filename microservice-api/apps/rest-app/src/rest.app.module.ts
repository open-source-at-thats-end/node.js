import { RouterModule } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { CONFPUVAL_REST_ROOT_SLUG, LibraryAppModule } from '@libs/library-app';
import { RestAppController } from './rest.app.controller';
import { RestAppService } from './rest.app.service';
import { WebhookGatewayModule } from './webhook-gateway/webhook.gateway.module';
import { CdnModule } from './cdn/cdn.module';
import { DynamicAppModule } from '@libs/dynamic-app';

@Module({
  imports: [
    RouterModule.register([
      {
        path: process.env.CONFPUVAL_REST_ROOT_SLUG || CONFPUVAL_REST_ROOT_SLUG,
        module: RestAppModule,
        children: [
          WebhookGatewayModule,
          CdnModule,
        ],
      },
    ]),
    
    LibraryAppModule,
    DynamicAppModule,

    WebhookGatewayModule,
    CdnModule,
  ],
  controllers: [RestAppController],
  providers: [RestAppService],
  exports: [],
})
export class RestAppModule {}
