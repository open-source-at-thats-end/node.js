// libs/library-app/pubsub/adapters/redis.adapter.ts
import { Logger } from '@nestjs/common';
import Redis, { RedisOptions } from 'ioredis';
import { PubSubAdapter } from './base.adapter';
import { ConfService } from '@libs/library-app/conf/conf.service';
import { WebsoketRoomEnum } from './adapters.enum';

export class RedisPubSubAdapter extends PubSubAdapter {
  private readonly logger = new Logger(RedisPubSubAdapter.name);
  private publisher?: Redis;
  private subscriber?: Redis;
  private initialized = false;

  constructor(private readonly confService: ConfService) {
    super();
  }

  /** Lazy initialization */
  private async ensureInitialized() {
    if (this.initialized) return;

    const options: RedisOptions = {
      host: this.confService.redisHost,
      port: this.confService.redisPort,
      retryStrategy: (times) => Math.min(times * 50, 2000),
    };

    this.publisher = new Redis(options);
    this.subscriber = new Redis(options);

    this.initialized = true;
    this.logger.log('✅ Redis adapter initialized (lazy)');
  }

  async initialize() {
    await this.ensureInitialized();
  }

  async publish(channel: string, payload: any) {
    await this.ensureInitialized();
    await this.publisher!.publish(channel, JSON.stringify(payload));
  }

  async publishToUser(auId: string | number, event: string, payload: any) {
    await this.publish(`${WebsoketRoomEnum.AUTH}:${auId}:${event}`, payload);
  }

  async publishToGroup(groupId: string | number, event: string, payload: any) {
    await this.publish(`${WebsoketRoomEnum.GROUP}:${groupId}:${event}`, payload);
  }

  async subscribe(channel: string, callback: (payload: any) => void) {
    await this.ensureInitialized();
    await this.subscriber!.subscribe(channel);
    this.subscriber!.on('message', (_chan, message) => {
      try {
        callback(JSON.parse(message));
      } catch {
        callback(message);
      }
    });
    this.logger.log(`Subscribed to channel: ${channel}`);
  }

  async subscribeAll(callback: (channel: string, payload: any) => void) {
    await this.ensureInitialized();
    await this.subscriber!.psubscribe('*');
    this.subscriber!.on('pmessage', (_pattern, channel, message) => {
      try {
        callback(channel, JSON.parse(message));
      } catch {
        callback(channel, message);
      }
    });
    this.logger.log('Subscribed to all channels (*)');
  }

  async destroy() {
    if (!this.initialized) return;
    await Promise.all([this.publisher!.quit(), this.subscriber!.quit()]);
    this.initialized = false;
    this.logger.log('🧹 Redis connections closed');
  }
}
