// apps/shared-app/src/user/user.ws.ts

import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { PubSubService } from '@libs/library-app/pubsub/pubsub.service';
import { SubscribeEvent } from '@libs/library-app/pubsub/pubsub.decorator';
import { UserService } from './user.service';
import { GraphQLResolveInfo } from 'graphql';
import { PubSubBase } from '@libs/library-app/pubsub/pubsub.base';
import { Reflector } from '@nestjs/core';

@Injectable()
export class UserWs extends PubSubBase{
  constructor(
    pubSubService: PubSubService,
    reflector: Reflector,
    private readonly service: UserService
    
  ) {
    super(pubSubService, reflector);
  }

  @SubscribeEvent('user.add')
  async handleUserAdd(payload: any) {
    console.log('[UserSubscriber] Received user.add', payload);
    await this.service.createEngine.create(payload.input, {}, {} as GraphQLResolveInfo, {});
  }
  async afterInsert(event: InsertEvent<UserEntity>) {
    const user = event.entity;
    console.log('[UserSubscriber] afterInsert fired', user?.id);

    if (user) {
      await this.pubSubService.publish('user.lastInsertedId', {
        userLastInsertedId: user.id,
      });
    }
  }
}
