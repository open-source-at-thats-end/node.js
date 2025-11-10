import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, AnyOneRequired, InIndexPrefix  } from "@libs/library-app";
import { IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, Validate, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "../../../folk/user/entities/user.entity";
import { QueueTypeEntity } from "../../type/entities/type.entity";
import { WebhookResponseEntity } from "../../../webhook/response/entities/response.entity";
import { GraphQLJSON } from "graphql-scalars";

/*
id?: any;
from_u_id?: any;
to_u_id?: any;
quetype_id?: any;
whresp_id?: any;
ref_id?: any;
ref_type?: any;
from_mobile?: any;
from_mobile_cc?: any;
to_mobile?: any;
to_mobile_cc?: any;
subject?: any;
msg?: any;
sent?: any;
created?: any;
updated?: any;
deleted?: any;
*/

const  QueueSmsEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the queuesms, auto generated.`,
      validation: {} 
  },
  from_u_id: {
      desc: `From user ID of the queuesms.`,
      validation: {}
  },
  to_u_id: {
      desc: `To user ID of the queuesms.`,
      validation: {
        any_one_required: `At least one of to_u_id, or to_mobile number must be provided.`,
      }
  },
  quetype_id: {
      desc: `Queue type ID of the queuesms.`,
      validation: {}
  },
  whresp_id: {
      desc: `Who response ID of the queuesms.`,
      validation: {}
  },
  ref_id: {
      desc: `Reference ID of the queuesms.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Reference ID of the queuesms length is only 128 characters.`,
      }
  },
  ref_type: {
      desc: `Reference type of the queuesms.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Reference type of the queuesms length is only 128 characters.`,
      }
  },
  from_mobile: {
      desc: `From mobile of the queuesms.`,
      validation: {
        isMustBeMsg: `Must be a valid mobile number.`,
        maxLength: 16,
        maxLengthMsg: `From mobile of the queuesms length is only 16 characters.`,
      }
  },
  from_mobile_cc: {
      desc: `From mobile country code of the queuesms.`,
      validation: {
        isNotEmpty: `From mobile country code is required if from mobile is provided.`,
        maxLength: 8,
        maxLengthMsg: `From mobile country code must be no more than 8 numbers long.`,
      }
  },
  to_mobile: {
      desc: `To mobile of the queuesms.`,
      validation: {
        isMustBeMsg: `Must be a valid mobile number.`,
        isNotEmpty: `Mobile is required.`,
        maxLength: 16,
        maxLengthMsg: `To mobile must be no more than 16 numbers long.`,
      }
  },
  to_mobile_cc: {
      desc: `To mobile country code of the queuesms.`,
      validation: {
        isNotEmpty: `To mobile country code is required if to mobile is provided.`,
        maxLength: 8,
        maxLengthMsg: `To mobile country code must be no more than 8 numbers long.`,
      }
  },
  subject: {
      desc: `Subject of the queuesms.`,
      validation: { 
        maxLength: 32,
        maxLengthMsg: `To mobile country code must be no more than 32 numbers long.`,
      }
  },
  msg: {
      desc: `Message of the queuesms.`,
      validation: {
        isNotEmpty: `Msg is required.`,
        maxLength: 156,
        maxLengthMsg: `Msg must be no more than 156 characters long.`,
      }
  },
  sent: {
      desc: `Whether the queuesms is sent or not.`,
      validation: {}
  },
  raw_data: {
      desc: `Raw json data of the queue process.`,
      validation: {}
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
const  QueueSmsVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
    fr_from_user: {
        desc: `From user of the queuesms`,
        validation: {}
    },
    fr_to_user: {
        desc: `To user of the queuesms`,
        validation: {}
    },
    fr_queue_type: {
        desc: `Queue type of the queuesms`,
        validation: {}
    },
    fr_webhook_response: {
        desc: `Webhook response of the queuesms`,
        validation: {}
    }
}
export const QueueSmsEntityMeta = {...QueueSmsEntityFieldMeta, ...QueueSmsVirtualFieldMeta};
const meta = QueueSmsEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")') // TODO: FEDERATION step 1 - add directive
@Entity({
  name: 'queue_sms',
  engine: 'InnoDB',
})
export class QueueSmsEntity implements EntityCRUDTypeDefinition {

    static colprefix = `quesms_`;
    static uploaddir = `queue-sms`;

    static metaname: string = (QueueSmsEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of queuesms';

    @Validate(AnyOneRequired,[['to_u_id', 'to_mobile']], { message: meta.to_u_id.validation.any_one_required }) // class-level validation to check that at least one of the fields is present
    any_one_required?: any;

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${QueueSmsEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.from_u_id.desc})
    @Column({
      name: `${QueueSmsEntity.colprefix}from_u_id`, 
      type: `int`, 
      unsigned: true, 
      nullable: true,
      default: null,
      comment: `FK(user => u_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}from_u_id`, { unique: false })
    @IsOptional()
    from_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.to_u_id.desc})
    @Column({
      name: `${QueueSmsEntity.colprefix}to_u_id`, 
      type: `int`, 
      unsigned: true, 
      nullable: true,
      default: null,
      comment: `FK(user => u_id) any one is required to_u_id or to_mobile`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}to_u_id`, { unique: false })
    @IsOptional()
    to_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.quetype_id.desc})
    @Column({
      name: `${QueueSmsEntity.colprefix}quetype_id`, 
      type: `smallint`, 
      unsigned: true, 
      comment: `FK( queue_type => quetype_id)`,
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}quetype_id`, { unique: false })
    quetype_id?: number;

    @Field(() => Int, {nullable: true, description: meta.whresp_id.desc})
    @Column({
      name: `${QueueSmsEntity.colprefix}whresp_id`, 
      type: `int`, 
      unsigned: true,
      nullable: true,
      default: null,
      comment: `FK( webhook_response => whresp_id )`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}whresp_id`, { unique: false })
    @IsOptional()
    whresp_id?: number;

    @Field(() => String, {nullable: true, description: meta.ref_id.desc})
    @Column({
      name: `${QueueSmsEntity.colprefix}ref_id`, 
      type: `varchar`, 
      length: meta.ref_id.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `FK (relevant table primary key)`,
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}ref_id`, { unique: false })
    @MaxLength(meta.ref_id.validation.maxLength as number, {message: meta.ref_id.validation.maxLengthMsg})
    ref_id?: string;

    @Field(() => String, {nullable: true, description: meta.ref_type.desc})
    @Column({
      name: `${QueueSmsEntity.colprefix}ref_type`, 
      type: `varchar`,
      length: meta.ref_type.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `FK (relevant table primary key)`,
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}ref_type`, { unique: false })
    @MaxLength(meta.ref_type.validation.maxLength as number, {message: meta.ref_type.validation.maxLengthMsg})
    ref_type?: string;

    @Field(() => String, {nullable: true, description: meta.from_mobile.desc})
    @Column({
      name: `${QueueSmsEntity.colprefix}from_mobile`, 
      type: `varchar`, 
      length: meta.from_mobile.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @IsOptional()
    @IsMobilePhone(`en-US`,{strictMode: false}, { message: meta.from_mobile.validation.isMustBeMsg })
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}from_mobile`, { unique: false })
    @MaxLength(meta.from_mobile.validation.maxLength as number, {message: meta.from_mobile.validation.maxLengthMsg})
    from_mobile?: string;

    @Field(() => String, {nullable: true, description: meta.from_mobile_cc.desc})
    @Column({
      name: `${QueueSmsEntity.colprefix}from_mobile_cc`, 
      type: `varchar`, 
      length: meta.from_mobile_cc.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `FK (geo_country => country_phone_code)`,
    })
    @ValidateIf((entity) => entity.from_mobile !== undefined && entity.from_mobile !== null) // Only validate if from_mobile is provided
    @MaxLength(meta.from_mobile_cc.validation.maxLength as number, {message: meta.from_mobile_cc.validation.maxLengthMsg})
    @IsOptional()
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}from_mobile_cc`, { unique: false })
    from_mobile_cc?: string;

    @Field(() => String, {nullable: true, description: meta.to_mobile.desc})
    @Column({
      name: `${QueueSmsEntity.colprefix}to_mobile`, 
      type: `varchar`, 
      length: meta.to_mobile.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `any one is required to_u_id or to_mobile`,
    })
    @IsMobilePhone(`en-US`,{strictMode: false}, { message: meta.to_mobile.validation.isMustBeMsg })
    @IsOptional()
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}to_mobile`, { unique: false })
    to_mobile?: string;

    @Field(() => String, {nullable: true, description: meta.to_mobile_cc.desc})
    @Column({
      name: `${QueueSmsEntity.colprefix}to_mobile_cc`, 
      type: `varchar`, 
      default: null,
      length: meta.to_mobile_cc.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
    })
    @ValidateIf((entity) => entity.to_mobile !== undefined && entity.to_mobile !== null) // Only validate if to_mobile is provided
    @MaxLength(meta.to_mobile_cc.validation.maxLength as number, { message: meta.to_mobile_cc.validation.maxLengthMsg })
    @IsOptional()
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}to_mobile_cc`, { unique: false })
    to_mobile_cc?: string;

    @Field(()=> String, {nullable: true, description: meta.subject.desc})
    @Column({
      name: `${QueueSmsEntity.colprefix}subject`, 
      type: `varchar`, 
      default: null,
      length: meta.subject.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
    })
    @MaxLength(meta.subject.validation.maxLength as number, {message: meta.subject.validation.maxLengthMsg})
    @IsOptional()
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}subject`, { unique: false })
    subject?: string;

    @Field(() => String, {nullable: true, description: meta.msg.desc})
    @Column({
      name: `${QueueSmsEntity.colprefix}msg`, 
      collation: `utf8mb4_general_ci`,
      type: `varchar`,
      length: meta.msg.validation.maxLength,
    })
    @MaxLength(meta.msg.validation.maxLength as number, {message: meta.msg.validation.maxLengthMsg})
    @IsNotEmpty()
    msg?: string;

    @Field(() => GraphQLJSON, {nullable: true, description: meta.raw_data.desc})
    @Column({
      name: `${QueueSmsEntity.colprefix}raw_data`, 
      type: `json`, 
      nullable: true,
      default: null,
    })
    @IsOptional()
    raw_data?: JSON;

    @Field(() => DateTime, {nullable: true, description: meta.sent.desc})
    @Column({
      name: `${QueueSmsEntity.colprefix}sent`, 
      type: `datetime`, 
      nullable: true,
      comment: `date-time => No | null => Yes`,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}sent`, { unique: false })
    sent?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${QueueSmsEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${QueueSmsEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${QueueSmsEntity.colprefix}deleted`, 
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${QueueSmsEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████ 

    @Field(() => UserEntity, {nullable: true, description: meta.fr_from_user.desc})
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_queue_sms_from_users)
    @JoinColumn({ name: `${QueueSmsEntity.colprefix}from_u_id` })
    fr_from_user?: UserEntity;

    @Field(() => UserEntity, {nullable: true, description: meta.fr_to_user.desc})
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_queue_sms_to_users)
    @JoinColumn({ name: `${QueueSmsEntity.colprefix}to_u_id` })
    fr_to_user?: UserEntity;

    @Field(() => QueueTypeEntity, {nullable: true, description: meta.fr_queue_type.desc})
    @ManyToOne(() => QueueTypeEntity, (entity: QueueTypeEntity) => entity.fr_queue_sms)
    @JoinColumn({ name: `${QueueSmsEntity.colprefix}quetype_id` })
    fr_queue_type?: QueueTypeEntity;

    @Field(() => WebhookResponseEntity, {nullable: true, description: meta.fr_webhook_response.desc})
    @ManyToOne(() => WebhookResponseEntity, (entity: WebhookResponseEntity) => entity.fr_queue_sms)
    @JoinColumn({ name: `${QueueSmsEntity.colprefix}whresp_id` })
    fr_webhook_response?: WebhookResponseEntity;


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
    
}