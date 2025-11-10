// apps/ws-app/src/ws.gateway.ts
import { WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { PubSubService } from '@libs/library-app/pubsub/pubsub.service';
import { LogService, JwtAuthGuard } from '@libs/library-app';
import { WebsoketRoomEnum } from '@libs/library-app/pubsub/adapters/adapters.enum';

export interface WsGatewayOptions {
  cors: {
    origin: string[];
  };
  transports: string[];
  namespace: string;
  port: number;
}
@WebSocketGateway()
export class WsGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server!: Server;

  constructor(
    private readonly pubSub: PubSubService,
    private readonly logService: LogService,
    private readonly jwtAuthGuard: JwtAuthGuard,
  ) {}

  // Auth middleware
  
  async afterInit() {

    this.server.use(async (socket, next) => {
      try {
        const ctx = await this.jwtAuthGuard.WebsoketAuthGuard(socket);

        // Attach user context to socket for later access
        socket.data.apiuser = ctx.apiuser;
        socket.data.statefuluser = ctx.statefuluser;
        socket.data.auId = ctx.statefuluser?.au;
        socket.data.group = ctx.statefuluser?.group;

        this.logService.info(`[WS] ✅ Auth success for socket: ${socket.id}`);
        next();
      } catch (err: any) {
        this.logService.error('[WS] ❌ Auth failed:', err.message);
        next(new Error(`Authentication error: ${err.message}`));
      }
    });

    this.logService.info('✅ WS Gateway initialized');

    // Subscribe to all channels
    await this.pubSub.subscribeAll((channel, payload) => {
      const parts = channel.split(':'); // Split by colon
      const [type, id, event] = parts;

      switch (type) {
        case WebsoketRoomEnum.AUTH:
          this.server.to(`${WebsoketRoomEnum.AUTH}:${id}`).emit(event, payload);
          break;

        case WebsoketRoomEnum.GROUP:
          this.server.to(`${WebsoketRoomEnum.GROUP}:${id}`).emit(event, payload);
          break;

        default:
          // If no match — broadcast globally or handle as fallback
          this.server.emit(channel, payload[channel] ?? payload);
      }
    });
  }

  async handleConnection(socket: Socket) {
    try {
      // Join rooms safely (auth already passed)
      if (socket.data.auId) 
        socket.join(`${WebsoketRoomEnum.AUTH}:${socket.data.auId}`);
      
      if (socket.data.group) 
        socket.join(`${WebsoketRoomEnum.GROUP}:${socket.data.group}`);

      this.logService.info(`[WS] Connected socket: ${socket.id}, auId: ${socket.data.auId}, group:${socket.data.group} `);

      // Generic event handler
      socket.onAny(async (event, payload) => {
        await this.pubSub.publish(event, payload);

        if (socket.data.auId)
          await this.pubSub.publishToUser(socket.data.auId, event, payload);

        if (socket.data.group)
          await this.pubSub.publishToGroup(socket.data.group, event, payload);
        
      });

    } catch (err: any) {
      this.logService.error(`WS handleConnection error: ${err.message}`);
      socket.disconnect(true);
    }
  }
  handleDisconnect(socket: Socket) {
    this.logService.info(`[WS] Client disconnected: ${socket.id}`);
  }
}
