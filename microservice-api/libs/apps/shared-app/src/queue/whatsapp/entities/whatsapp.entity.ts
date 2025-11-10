import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, AnyOneRequired, InIndexPrefix } from "@libs/library-app";
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

const  QueueWhatsappEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the queuewhatsapp, auto generated.`,
      validation: {} 
  },
  from_u_id: {
      desc: `From user ID of the queuewhatsapp.`,
      validation: {
        any_one_required: `At least one of to_u_id, or to_mobile number must be provided.`,
      }
  },
  to_u_id: {
      desc: `To user ID of the queuewhatsapp.`,
      validation: {}
  },
  quetype_id: {
      desc: `Queue type ID of the queuewhatsapp.`,
      validation: {}
  },
  whresp_id: {
      desc: `Who response ID of the queuewhatsapp.`,
      validation: {
      }
  },
  ref_id: {
      desc: `Reference ID of the queuewhatsapp.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Reference ID must be no more than 128 characters long.`,
      }
  },
  ref_type: {
      desc: `Reference type of the queuewhatsapp.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Reference Type must be no more than 128 characters long.`,
      }
  },
  from_mobile: {
      desc: `From mobile of the queuewhatsapp.`,
      validation: {
        maxLength: 16,
        maxLengthMsg: `From mobile of the queuewhatsapp no more than 16 characters long.`,
        isMustBeMsg: `Must be a valid mobile number`,
      }
  },
  from_mobile_cc: {
      desc: `From mobile country code of the queuewhatsapp.`,
      validation: {
        maxLength: 8,
        maxLengthMsg: `From mobile country code must be no more than 8 numbers long.`,
        validateIf: `'From mobile country code is required if from mobile is provided.'`,
      }
  },
  to_mobile: {
      desc: `To mobile of the queuewhatsapp.`,
      validation: {
        maxLength: 16,
        maxLengthMsg: `To mobile of the queuewhatsapp no more than 16 characters long.`,
        isMustBeMsg: `Must be a valid mobile number`,
        validateIf: 'Mobile is required.',
      }
  },
  to_mobile_cc: {
      desc: `To mobile country code of the queuewhatsapp.`,
      validation: {
        maxLength: 8,
        maxLengthMsg: `to mobile country code must be no more than 8 numbers long.`,
        validateIf: `To mobile country code is required if to mobile is provided.`,
      }
  },
  subject: {
      desc: `Subject of the queuewhatsapp.`,
      validation: {
        maxLength: 32,
        maxLengthMsg: `Subject of the queuewhatsapp no more than 32 characters long.`,
      }
  },
  msg: {
      desc: `Message of the queuewhatsapp.`,
      validation: {
        maxLength: 156,
        maxLengthMsg: `Msg must be no more than 156 characters long.`,
        validateIf: `Msg is required.`,
      }
  },
  sent: {
      desc: `Whether the queuewhatsapp is sent or not.`,
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
const  QueueWhatsappVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
    fr_from_user: {
        desc: `From user of the queuewhatsapp`,
        validation: {}
    },
    fr_to_user: {
        desc: `To user of the queuewhatsapp`,
        validation: {}
    },
    fr_queue_type: {
        desc: `Queue type of the queuewhatsapp`,
        validation: {}
    },
    fr_webhook_response: {
        desc: `Webhook response of the queuewhatsapp`,
        validation: {}
    }
}
export const QueueWhatsappEntityMeta = {...QueueWhatsappEntityFieldMeta, ...QueueWhatsappVirtualFieldMeta};
const meta = QueueWhatsappEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")') // TODO: FEDERATION step 1 - add directive
@Entity({
  name: 'queue_whatsapp',
  engine: 'InnoDB',
})
export class QueueWhatsappEntity implements EntityCRUDTypeDefinition {

    static colprefix = `quewa_`;
    static uploaddir = `queue-whatsapp`;

    static metaname: string = 'QueueWhatsapp';
    static metadesc: string = 'Provides list of queuewhatsapp';

    @Validate(AnyOneRequired, [['to_u_id', 'to_mobile']], { message: meta.to_u_id.validation.any_one_required }) // class-level validation to check that at least one of the fields is present
    any_one_required?: any

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${QueueWhatsappEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.from_u_id.desc})
    @Column({
      name: `${QueueWhatsappEntity.colprefix}from_u_id`,
      type: `int`,
      unsigned: true,
      comment: `FK(user => u_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${QueueWhatsappEntity.colprefix}from_u_id`, { unique: false })
    @IsNotEmpty()
    from_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.to_u_id.desc})
    @Column({
      name: `${QueueWhatsappEntity.colprefix}to_u_id`, 
      type: `int`, 
      unsigned: true, 
      comment: `FK(user => u_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${QueueWhatsappEntity.colprefix}to_u_id`, { unique: false })
    @IsNotEmpty()
    to_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.quetype_id.desc})
    @Column({
      name: `${QueueWhatsappEntity.colprefix}quetype_id`, 
      type: `smallint`, 
      unsigned: true, 
      comment: `FK(queue_type => quetype_id)`,
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${QueueWhatsappEntity.colprefix}quetype_id`, { unique: false })
    quetype_id?: number;

    @Field(() => Int, {nullable: true, description: meta.whresp_id.desc})
    @Column({
      name: `${QueueWhatsappEntity.colprefix}whresp_id`, 
      type: `int`, 
      unsigned: true,
      nullable: true, 
      default: null,
      comment: `FK(webhook_response => whresp_id )`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${QueueWhatsappEntity.colprefix}whresp_id`, { unique: false })
    @IsOptional()
    whresp_id?: number;

    @Field(() => String, {nullable: true, description: meta.ref_id.desc})
    @Column({
      name: `${QueueWhatsappEntity.colprefix}ref_id`, 
      type: `varchar`, 
      length: meta.ref_id.validation.maxLength as number, 
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `FK (relevant table primary key)`,
    })
    @Index(`${InIndexPrefix}${QueueWhatsappEntity.colprefix}ref_id`, { unique: false })
    @IsOptional()
    @MaxLength(meta.ref_id.validation.maxLength as number , { message:meta.ref_id.validation.maxLengthMsg })
    ref_id?: string;

    @Field(() => String, {nullable: true, description: meta.ref_type.desc})
    @Column({
      name: `${QueueWhatsappEntity.colprefix}ref_type`, 
      type: `varchar`, 
      length: meta.ref_type.validation.maxLength as number, 
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `FK (relevant table primary key)`,
    })
    @Index(`${InIndexPrefix}${QueueWhatsappEntity.colprefix}ref_type`, { unique: false })
    @IsOptional()
    ref_type?: string;

    @Field(() => String, {nullable: true, description: meta.from_mobile.desc})
    @Column({
      name: `${QueueWhatsappEntity.colprefix}from_mobile`, 
      type: `varchar`, 
      length: meta.from_mobile.validation.maxLength as number,
      collation: `utf8mb4_general_ci`,
    })
    @IsNotEmpty()
    @IsMobilePhone(`en-US`,{strictMode: false}, { message: meta.from_mobile.validation.isMustBeMsg })
    @Index(`${InIndexPrefix}${QueueWhatsappEntity.colprefix}from_mobile`, { unique: false })
    from_mobile?: string;

    @Field(() => String, {nullable: true, description: meta.from_mobile_cc.desc})
    @Column({
      name: `${QueueWhatsappEntity.colprefix}from_mobile_cc`, 
      type: `varchar`, 
      length: meta.from_mobile_cc.validation.maxLength as number, 
      nullable: true,
      default:  1,
      collation: `utf8mb4_general_ci`,
      comment: `FK (geo_country => country_phone_code)`,
    })
    @ValidateIf((entity) => entity.from_mobile !== undefined && entity.from_mobile !== null) // Only validate if from_mobile is provided
    @MaxLength(meta.from_mobile_cc.validation.maxLength as number, { message: meta.from_mobile_cc.validation.maxLengthMsg })
    @IsNotEmpty({ message: meta.from_mobile_cc.validation.validateIf })
    @Index(`${InIndexPrefix}${QueueWhatsappEntity.colprefix}from_mobile_cc`, { unique: false })
    from_mobile_cc?: string;

    @Field(() => String, {nullable: true, description: meta.to_mobile.desc})
    @Column({
      name: `${QueueWhatsappEntity.colprefix}to_mobile`, 
      type: `varchar`, 
      length: meta.to_mobile.validation.maxLength as number,
      nullable: true,
      collation: `utf8mb4_general_ci`,
    })
    @IsMobilePhone(`en-US`,{strictMode: false}, { message: meta.to_mobile.validation.isMustBeMsg })
    @IsNotEmpty({ message: meta.to_mobile.validation.validateIf })
    @Index(`${InIndexPrefix}${QueueWhatsappEntity.colprefix}to_mobile`, { unique: false })
    to_mobile?: string;

    @Field(() => String, {nullable: true, description: meta.to_mobile_cc.desc})
    @Column({
      name: `${QueueWhatsappEntity.colprefix}to_mobile_cc`, 
      type: `varchar`, 
      length: meta.to_mobile_cc.validation.maxLength as number,
      nullable: true,
      default:  1,
      collation: `utf8mb4_general_ci`,
    })
    @ValidateIf((entity) => entity.to_mobile !== undefined && entity.to_mobile !== null) // Only validate if to_mobile is provided
    @MaxLength(meta.to_mobile_cc.validation.maxLength as number, { message: meta.to_mobile_cc.validation.maxLengthMsg })
    @IsNotEmpty({ message: meta.to_mobile_cc.validation.validateIf })
    @Index(`${InIndexPrefix}${QueueWhatsappEntity.colprefix}to_mobile_cc`, { unique: false })
    to_mobile_cc?: string;

    @Field(()=> String, {nullable: true, description: meta.subject.desc})
    @Column({
      name: `${QueueWhatsappEntity.colprefix}subject`, 
      type: `varchar`, 
      length: meta.subject.validation.maxLength as number,
      nullable: true,
      default: null,
      collation: `utf8mb4_general_ci`,
    })
    @IsOptional()
    subject?: string;

    @Field(() => String, {nullable: true, description: meta.msg.desc})
    @Column({
      name: `${QueueWhatsappEntity.colprefix}msg`, 
      type: `varchar`, 
      length: meta.msg.validation.maxLength as number,
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.msg.validation.maxLength as number, { message: meta.msg.validation.maxLengthMsg })
    @IsNotEmpty({ message: meta.msg.validation.validateIf })
    msg?: string;

    @Field(() => DateTime, {nullable: true, description: meta.sent.desc})
    @Column({
      name: `${QueueWhatsappEntity.colprefix}sent`, 
      type: `datetime`, 
      nullable: true,
      comment: `date-time => No | null => Yes`,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${QueueWhatsappEntity.colprefix}sent`, { unique: false })
    sent?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${QueueWhatsappEntity.colprefix}created`, 
      type: `datetime`,
    })
    @Index(`${InIndexPrefix}${QueueWhatsappEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${QueueWhatsappEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${QueueWhatsappEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${QueueWhatsappEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${QueueWhatsappEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;

    
    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████ 

    @Field(() => UserEntity, {nullable: true, description: meta.fr_from_user.desc})
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_queue_whatsapp_from_users)
    @JoinColumn({ name: `${QueueWhatsappEntity.colprefix}from_u_id` })
    fr_from_user?: UserEntity;
 
    @Field(() => UserEntity, {nullable: true, description: meta.fr_to_user.desc})
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_queue_whatsapp_to_users)
    @JoinColumn({ name: `${QueueWhatsappEntity.colprefix}to_u_id` })
    fr_to_user?: UserEntity;

    @Field(() => QueueTypeEntity, {nullable: true, description: meta.fr_queue_type.desc})
    @ManyToOne(() => QueueTypeEntity, (entity: QueueTypeEntity) => entity.fr_queue_whatsapp)
    @JoinColumn({ name: `${QueueWhatsappEntity.colprefix}quetype_id` })
    fr_queue_type?: QueueTypeEntity;

    @Field(() => WebhookResponseEntity, {nullable: true, description: meta.fr_webhook_response.desc})
    @ManyToOne(() => WebhookResponseEntity, (entity: WebhookResponseEntity) => entity.fr_queue_whatsapp)
    @JoinColumn({ name: `${QueueWhatsappEntity.colprefix}whresp_id` })
    fr_webhook_response?: WebhookResponseEntity;


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}