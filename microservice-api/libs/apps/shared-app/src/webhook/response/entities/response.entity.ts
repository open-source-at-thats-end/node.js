import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import {IsInt, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { string } from "joi";
import { WebhookResponseDataEntity } from "../../response-data/entities/response.data.entity";
import { QueueSmsEntity } from "apps/shared-app/src/queue/sms/entities/sms.entity";
import { QueueWhatsappEntity } from "apps/shared-app/src/queue/whatsapp/entities/whatsapp.entity";
import { ThirdPartyPlatformEntity } from "apps/shared-app/src/master/third-party-platform/entities/third.party.platform.entity";

/*
id?: any
tppltf_id?: any
resp_id?: any
ref_id?: any
ref_type?: any
created?: any
updated?: any
deleted?: any
*/

const  WebhookResponseEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the webhookresponse, auto generated.`,
      validation: {} 
  },
  tppltf_id: {
      desc: `Template ID of the webhookresponse.`,
      validation: {}
  },
  resp_id: {
      desc: `Response ID of the webhookresponse.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of Response ID is 128 characters.`
      }
  },
  ref_id: {
      desc: `Reference ID of the webhookresponse.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of Reference ID is 128 characters.`
      }
  },
  ref_type: {
      desc: `Reference type of the webhookresponse.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Maximum length of Reference type is 128 characters.`
      }
  },
  created: {
      desc: `When record is created, date-time will be saved.`,
      validation:{} 
  },
  updated: {
      desc: `If record is updated, then date time value will be saved otherwise null to indicate record is not updated.`,
      validation:{}
  },
  deleted: {
      desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
      validation:{}
  }
};
const  WebhookResponseVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_webhook_response_data:{
    desc: `Webhook response data.`,
    validation: {},
  },
  fr_queue_sms:{
    desc: `Queue sms.`,
    validation: {},
  },
  fr_queue_whatsapp:{
    desc: `Queue whatsapp messages.`,
    validation: {},

  },
  fr_third_party_platform:{
    desc: `Third party platform.`,
    validation: {},
  }

}
export const WebhookResponseEntityMeta = {...WebhookResponseEntityFieldMeta, ...WebhookResponseVirtualFieldMeta};
const meta = WebhookResponseEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")') // TODO: FEDERATION step 1 - add directive
@Entity({
  name: 'webhook_response',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}whresp_tppltf_id`,[`tppltf_id`, `resp_id`, `ref_id`, `ref_type`])
export class WebhookResponseEntity implements EntityCRUDTypeDefinition {

    static colprefix = `whresp_`;
    static uploaddir = `webhook-response`;

    static metaname: string = (WebhookResponseEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of webhookresponse';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${WebhookResponseEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.tppltf_id.desc})
    @Column({
      name: `${WebhookResponseEntity.colprefix}tppltf_id`, 
      type: `smallint`,
      unsigned: true,
      comment: `FK(third_party_platform=>tppltf_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${WebhookResponseEntity.colprefix}tppltf_id`, { unique: false })
    @IsNotEmpty()
    tppltf_id?: number;

    @Field(() => String, {nullable: true, description: meta.resp_id.desc})
    @Column({
      name: `${WebhookResponseEntity.colprefix}resp_id`, 
      type: `varchar`,
      length: meta.resp_id.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `Kind of FK to remote service. Unique id of response kind of transaction or action id of remote platform`,  
    })
    @MaxLength(meta.resp_id.validation.maxLength as number, {message: meta.resp_id.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${WebhookResponseEntity.colprefix}resp_id`, { unique: false })
    @IsNotEmpty()
    resp_id?: string;

    @Field(() => String, {nullable: true, description: meta.ref_id.desc})
    @Column({
      name: `${WebhookResponseEntity.colprefix}ref_id`, 
      type: `varchar`,
      length: meta.ref_id.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `FK (relevant table primary key)`,  
    })
    @MaxLength(meta.ref_id.validation.maxLength as number, {message: meta.ref_id.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${WebhookResponseEntity.colprefix}ref_id`, { unique: false })
    @IsNotEmpty()
    ref_id?: string;

    @Field(() => String, {nullable: true, description: meta.ref_type.desc})
    @Column({
      name: `${WebhookResponseEntity.colprefix}ref_type`, 
      type: `varchar`,
      length: meta.ref_type.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `FK (relevant table name)`,  
    })
    @MaxLength(meta.ref_type.validation.maxLength as number, {message: meta.ref_type.validation.maxLengthMsg})
    @Index(`${InIndexPrefix}${WebhookResponseEntity.colprefix}ref_type`, { unique: false })
    @IsNotEmpty()
    ref_type?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${WebhookResponseEntity.colprefix}created`, 
      type: `datetime`,
    })
    @Index(`${InIndexPrefix}${WebhookResponseEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${WebhookResponseEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${WebhookResponseEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${WebhookResponseEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${WebhookResponseEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████ 

    @Field(()=>[WebhookResponseDataEntity], {nullable: true, description: meta.fr_webhook_response_data.desc})
    @OneToMany(() => WebhookResponseDataEntity, (entity: WebhookResponseDataEntity) => entity.fr_webhook_response)
    fr_webhook_response_data?: WebhookResponseDataEntity[]

    @Field(()=>[QueueSmsEntity], {nullable: true, description: meta.fr_queue_sms.desc})
    @OneToMany(() => QueueSmsEntity, (entity: QueueSmsEntity) => entity.fr_webhook_response)
    fr_queue_sms?: WebhookResponseDataEntity[]

    @Field(()=>[QueueWhatsappEntity], {nullable: true, description: meta.fr_queue_whatsapp.desc})
    @OneToMany(() => QueueWhatsappEntity, (entity: QueueWhatsappEntity) => entity.fr_webhook_response)
    fr_queue_whatsapp?: WebhookResponseDataEntity[]

    @Field(() => ThirdPartyPlatformEntity, {nullable: true, description: meta.fr_third_party_platform.desc})
    @ManyToOne(() => ThirdPartyPlatformEntity, (entity: ThirdPartyPlatformEntity) => entity.fr_webhook_responses)
    @JoinColumn({ name: `${WebhookResponseEntity.colprefix}tppltf_id` })
    fr_third_party_platform?: ThirdPartyPlatformEntity;


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

}