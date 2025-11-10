// apps/ws-app/src/ws.module.ts
import { Module } from '@nestjs/common';
import { WsGateway, WsGatewayOptions } from './ws.app.gateway';
import { CONFPUVAL_APP_WEBSOCKET_PORT, ConfService, JwtAuthModule, LibraryAppModule } from '@libs/library-app';
import { PubSubModule } from '@libs/library-app/pubsub/pubsub.module';
import { WsAppRegister } from './ws.app.register';

@Module({
  imports: [
    PubSubModule,
    JwtAuthModule,
    LibraryAppModule
  ],
  providers: [
    WsGateway,
    {
      provide: 'GATEWAY_OPTIONS',
      inject: [ConfService],
      useFactory: (conf: ConfService): WsGatewayOptions => ({
        cors: {
          origin: [
            conf.appLocalWebHostDomain,
            conf.appHostWebDomain,
          ],
        },
        transports: ['websocket'],
        namespace: '/',
        port: CONFPUVAL_APP_WEBSOCKET_PORT,
      }),
    },
    WsAppRegister
  ]
})
export class WsAppModule {}
