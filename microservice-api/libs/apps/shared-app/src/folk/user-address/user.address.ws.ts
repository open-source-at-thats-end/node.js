// apps/shared-app/src/user/user.ws.ts

import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { PubSubService } from '@libs/library-app/pubsub/pubsub.service';
import { SubscribeEvent } from '@libs/library-app/pubsub/pubsub.decorator';
import { GraphQLResolveInfo } from 'graphql';
import { PubSubBase } from '@libs/library-app/pubsub/pubsub.base';
import { Reflector } from '@nestjs/core';
import { UserAddressService } from './user.address.service';
import { UserAuthenticationJwtService } from '@libs/library-app';
import { UserAddressEntity } from './entities/user.address.entity';

@Injectable()
export class UserAddressWs extends PubSubBase{
  constructor(
    pubSubService: PubSubService,
    reflector: Reflector,
    private readonly service: UserAddressService,
    private readonly UserAuthenticationJwtService: UserAuthenticationJwtService
    
  ) {
    super(pubSubService, reflector);
  }

  async afterInsert(event: InsertEvent<UserAddressEntity>) {
    const userAddr = event.entity;
    console.log('[UserSubscriber] afterInsert fired', userAddr?.id);

    if (userAddr) {
      await this.pubSubService.publishToUser(
        await UserAuthenticationJwtService.encData(userAddr.u_id as number),
        'userAddress.lastInsertedId',
        userAddr.id, 
      );
    }

  }
}
