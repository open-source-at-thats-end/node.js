import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix  } from "@libs/library-app";
import {IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { string } from "joi";
import { WebhookResponseEntity } from "../../response/entities/response.entity";
import { GraphQLJSONObject } from "graphql-scalars";

/*
id?: any
whresp_id?: any
raw?: any
created?: any
deleted?: any
*/

const  WebhookResponseDataEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the webhookresponse, auto generated.`,
      validation: {} 
  },
  whresp_id: {
      desc: `Who response ID of the webhookresponse.`,
      validation: {}
  },
  raw: {
      desc: `Raw data of the webhookresponse.`,
      validation: {}
  },
  created: {
      desc: `When record is created, date-time will be saved.`,
      validation:{} 
  },
  deleted: {
      desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
      validation:{}
  }
  
};
const  WebhookResponseDataVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_webhook_response: {
    desc: `Webhook response.`,
    validation: {},
  }
}
export const WebhookResponseDataEntityMeta = {...WebhookResponseDataEntityFieldMeta, ...WebhookResponseDataVirtualFieldMeta};
const meta = WebhookResponseDataEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'webhook_response_data',
  engine: 'InnoDB',
})

export class WebhookResponseDataEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'whrdata_';
    static uploaddir: string = 'webhook-response-data';

    static metaname: string = (WebhookResponseDataEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of webhookresponse';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${WebhookResponseDataEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.whresp_id.desc})
    @Column({
      name: `${WebhookResponseDataEntity.colprefix}whresp_id`, 
      type: `int`,
      unsigned: true,
      comment: `FK (webhook_response => _whresp_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${WebhookResponseDataEntity.colprefix}whresp_id`, { unique: false })
    @IsNotEmpty()
    whresp_id?: number;

    @Field(() => GraphQLJSONObject, {nullable: true, description: meta.raw.desc})
    @Column({
      name: `${WebhookResponseDataEntity.colprefix}raw`, 
      type: `json`, 
      nullable: true,
      comment: `JSON raw data got from webhook`,
      default: null,
    })
    @IsOptional()
    @IsJSON()
    raw?: JSON;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${WebhookResponseDataEntity.colprefix}created`, 
      type: `datetime`,
    })
    @Index(`${InIndexPrefix}${WebhookResponseDataEntity.colprefix}created`, { unique: false })
     created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${WebhookResponseDataEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${WebhookResponseDataEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████ 

    @Field(() => WebhookResponseEntity, {nullable: true, description: meta.fr_webhook_response.desc})
    @ManyToOne(() => WebhookResponseEntity, (entity: WebhookResponseEntity) => entity.fr_webhook_response_data)
    @JoinColumn({ name: `${WebhookResponseDataEntity.colprefix}whresp_id` })
    fr_webhook_response?: WebhookResponseEntity;


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

}