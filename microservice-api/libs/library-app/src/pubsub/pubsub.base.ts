// libs/library-app/pubsub/pubsub.base.ts
import { OnModuleInit, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PubSubService } from './pubsub.service';
import { SUBSCRIBE_EVENT } from './pubsub.decorator';

@Injectable()
export abstract class PubSubBase implements OnModuleInit {
  constructor(
    protected readonly pubSubService: PubSubService,
    protected readonly reflector: Reflector
  ) {}

  onModuleInit() {
    const prototype = Object.getPrototypeOf(this);
    const methodNames = Object.getOwnPropertyNames(prototype);

    for (const methodName of methodNames) {
      const method = prototype[methodName];
      if (typeof method !== 'function') continue;

      const eventName = this.reflector.get<string>(SUBSCRIBE_EVENT, method);
      if (eventName) {
        this.pubSubService.subscribe(eventName, async (payload) => {
          await (this as any)[methodName](payload);
        });

        console.log(`[EventSubscriberBase] Registered handler for "${eventName}"`);
      }
    }
  }
}


