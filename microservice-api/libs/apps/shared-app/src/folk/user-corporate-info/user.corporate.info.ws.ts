// apps/shared-app/src/user/user.ws.ts

import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent } from 'typeorm';
import { PubSubService } from '@libs/library-app/pubsub/pubsub.service';
import { SubscribeEvent } from '@libs/library-app/pubsub/pubsub.decorator';
import { GraphQLResolveInfo } from 'graphql';
import { PubSubBase } from '@libs/library-app/pubsub/pubsub.base';
import { Reflector } from '@nestjs/core';
import { UserAuthenticationJwtService } from '@libs/library-app';
import { UserCorporateInfoService } from './user.corporate.info.service';
import { UserCorporateInfoEntity } from './entities/user.corporate.info.entity';

@Injectable()
export class UserCorporateInfoWs extends PubSubBase{
  constructor(
    pubSubService: PubSubService,
    reflector: Reflector,
    private readonly service: UserCorporateInfoService,
    private readonly UserAuthenticationJwtService: UserAuthenticationJwtService
    
  ) {
    super(pubSubService, reflector);
  }

  async afterInsert(event: InsertEvent<UserCorporateInfoEntity>) {
    const usercorpInfo = event.entity;
    console.log('[UserSubscriber] afterInsert fired', usercorpInfo?.id);

    if (usercorpInfo) {
      await this.pubSubService.publishToGroup(
        await UserAuthenticationJwtService.encData(usercorpInfo.u_id as number),
        'userCorpInfo.lastInsertedId',
        usercorpInfo.id, 
      );
    }

  }
}
