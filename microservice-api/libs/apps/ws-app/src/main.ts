// apps/ws-app/src/main.ts
/*import { NestFactory } from '@nestjs/core';
import { WsAppModule } from './ws.module';
import { CONFPUVAL_SHARED_APP_WEBSOCKET_PORT } from '@libs/library-app';

async function bootstrap() {
  const app = await NestFactory.create(WsAppModule);
  await app.listen(CONFPUVAL_SHARED_APP_WEBSOCKET_PORT); // The main NestJS app still runs on 3000, but WebSocket listens on 81
  console.log(`WS-App is running on port ${CONFPUVAL_SHARED_APP_WEBSOCKET_PORT}`);
}
bootstrap();*/

// apps/ws-app/src/main.ts
import { NestFactory } from '@nestjs/core';
import { WsAppModule } from './ws.app.module';
import { PubSubService } from '@libs/library-app/pubsub/pubsub.service';
import { CONFPUVAL_SHARED_APP_WEBSOCKET_PORT } from '@libs/library-app';

async function bootstrap() {
  const app = await NestFactory.create(WsAppModule);

  const pubSub = app.get(PubSubService);
  await pubSub.initialize(app); // initialize adapter

  await app.listen(CONFPUVAL_SHARED_APP_WEBSOCKET_PORT);
  console.log(`🚀 WS Gateway running on port ${CONFPUVAL_SHARED_APP_WEBSOCKET_PORT}`);
}

bootstrap();
