// libs/library-app/pubsub/adapters/base.adapter.ts
import { INestApplication } from '@nestjs/common';

export abstract class PubSubAdapter {
  abstract initialize(app: INestApplication): Promise<void>;
  abstract publish(channel: string, payload: any): Promise<void>;
  abstract publishToUser(auId: string | number, event: string, payload: any): Promise<void>;
  abstract publishToGroup(groupId: string | number, event: string, payload: any): Promise<void>;
  abstract subscribe(channel: string, callback: (payload: any) => void): Promise<void>;
  abstract subscribeAll(callback: (channel: string, payload: any) => void): Promise<void>;
  abstract destroy(): Promise<void>;
}
