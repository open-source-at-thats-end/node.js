// libs/library-app/pubsub/pubsub.service.ts
import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { RedisPubSubAdapter } from './adapters/redis.adapter';
import { PubSubAdapter } from './adapters/base.adapter';
import { ConfService } from '../conf/conf.service';

@Injectable()
export class PubSubService implements OnModuleDestroy {
  private adapter: PubSubAdapter;

  constructor(private readonly confService: ConfService) {
    // Adapter always constructed, lazy initialization
    this.adapter = new RedisPubSubAdapter(this.confService);
  }

  /** Optional pre-initialize (ws-app can call this on startup) */
  async initialize(app:any) {
    await this.adapter.initialize(app);
  }

  private getAdapter() {
    return this.adapter;
  }

  async publish(channel: string, payload: any) {
    await this.getAdapter().publish(channel, payload);
  }

  async publishToUser(auId: string | number, event: string, payload: any) {
    await this.getAdapter().publishToUser(auId, event, payload);
  }

  async publishToGroup(groupId: string | number, event: string, payload: any) {
    await this.getAdapter().publishToGroup(groupId, event, payload);
  }

  async subscribe(channel: string, callback: (payload: any) => void) {
    await this.getAdapter().subscribe(channel, callback);
  }

  async subscribeAll(callback: (channel: string, payload: any) => void) {
    await this.getAdapter().subscribeAll(callback);
  }

  async onModuleDestroy() {
    await this.adapter.destroy();
  }

  getAllChannels(): Record<string, any> {
    // Return all events in AsyncAPI-compatible shape
    return {
      'auth:123:connected': {
        description: 'Auth connected event',
        publish: {
          message: {
            payload: { type: 'object', properties: { auId: { type: 'string' } } },
          },
        },
      },
      'group:456:message': {
        description: 'Group message event',
        publish: {
          message: {
            payload: { type: 'object', properties: { message: { type: 'string' } } },
          },
        },
      },
    };
  }
}
