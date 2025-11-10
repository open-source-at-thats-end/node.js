// libs/library-app/pubsub/pubsub.decorator.ts
import { SetMetadata } from '@nestjs/common';

export const SUBSCRIBE_EVENT = 'SUBSCRIBE_EVENT';
export const PUBLISH_EVENT = 'PUBLISH_EVENT';

export function SubscribeEvent(eventName: string): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    SetMetadata(SUBSCRIBE_EVENT, eventName)(target, propertyKey, descriptor);
  };
}