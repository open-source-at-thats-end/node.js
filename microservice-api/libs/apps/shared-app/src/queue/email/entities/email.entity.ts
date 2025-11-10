import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, AnyOneRequired, InIndexPrefix } from "@libs/library-app";
import { IsOptional, MaxLength, Validate, IsEmail, IsNotEmpty, IsInt } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "../../../folk/user/entities/user.entity";
import { QueueTypeEntity } from "../../type/entities/type.entity";
import { AuthorisationEntity } from "apps/shared-app/src/master/authorisation/entities/authorisation.entity";
import { GraphQLJSON } from "graphql-scalars";

/*
id?: any;
from_u_id?: any;
to_u_id?: any;
quetype_id?: any;
whresp_id?: any;
ref_id?: any;
ref_type?: any;
created_u_id?: any;
created_ar_id?: any;
from_email?: any;
to_email?: any;
cc?: any;
ccother?: any;
bcc?: any;
subject?: any;
body?: any;
sent?: any;
created?: any;
updated?: any;
deleted?: any;
*/

const  QueueEmailEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the queueemail, auto generated.`,
      validation: {} 
  },
  from_u_id: {
      desc: `From user ID of the queueemail.`,
      validation: {}
  },
  to_u_id: {
      desc: `To user ID of the queueemail.`,
      validation: {}
  },
  quetype_id: {
      desc: `Queue type ID of the queueemail.`,
      validation: {}
  },
  whresp_id: {
      desc: `Who response ID of the queueemail.`,
      validation: {}
  },
  ref_id: {
      desc: `Reference ID of the queueemail.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Reference ID of the queueemail length is only 128 characters.`,
      }
  },
  ref_type: {
      desc: `Reference type of the queueemail.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `Reference type of the queueemail length is only 128 characters.`,
      }
  },
  created_u_id: {
      desc: `User Id of the queueemail added by.`,
      validation: {}
  },
  created_ar_id: {
      desc: `Authorisation role id of the user.`,
      validation: { }
  },
  from_email: {
      desc: `From email of the queueemail.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `From Email must be at most 128 characters long.`,
        isMustBeMsg: `Must be a valid email address.`,
      }
  },
  to_email: {
      desc: `To email of the queueemail.`,
      validation: {
        maxLength: 128,
        maxLengthMsg: `To Email must be at most 128 characters long.`,
        any_one_required: `At least one of to_u_id, or to_email must be provided.`,
        isMustBeMsg: `Must be a valid email address.`,
      }
  },
  cc: {
      desc: `CC email of the queueemail.`,
      validation: {}
  },
  ccother: {
      desc: `CC Other email of the queueemail.`,
      validation: {}
  },
  bcc: {
      desc: `BCC email of the queueemail.`,
      validation: {}
  },
  subject: {
      desc: `Subject of the queueemail.`,
      validation: {
        maxLength: 64,
        maxLengthMsg: `Reference type of the queueemail length is only 64 characters.`,
      }
  },
  body: {
      desc: `Body of the queueemail.`,
      validation: {}
  },
  raw_data: {
      desc: `Raw json data of the queue process.`,
      validation: {}
  },
  sent: {
    desc: `Whether the queueemail is sent or not.`,
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
const  QueueEmailVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
    fr_from_user: {
        desc: `From user of the queueemail`,
        validation: {}
    },
    fr_to_user: {
        desc: `To user of the queueemail`,
        validation: {}
    },
    fr_queue_type: {
        desc: `Queue type of the queueemail`,
        validation: {}
    },
    fr_created_user:{
      desc: `User id of the queueemail added by`,
      validation: {}
    },
    fr_created_authorisation: {
      desc: `Authorisation info of the user role who created email.`,
      validation: {}
    },
}
export const QueueEmailEntityMeta = {...QueueEmailEntityFieldMeta, ...QueueEmailVirtualFieldMeta};
const meta = QueueEmailEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")') // TODO: FEDERATION step 1 - add directive
@Entity({
  name: 'queue_email',
  engine: 'InnoDB',
})
export class QueueEmailEntity implements EntityCRUDTypeDefinition {

    static colprefix = `queemail_`;
    static uploaddir = `queue-email`;

    static metaname: string = 'QueueEmail';
    static metadesc: string = 'Provides list of queueemail';

    @Validate(AnyOneRequired, [['to_u_id', 'to_email']],{ message: meta.to_u_id.validation.any_one_required })
    any_one_required?: any;

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${QueueEmailEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;  

    @Field(() => Int, {nullable: true, description: meta.from_u_id.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}from_u_id`, 
      type: `int`, 
      unsigned: true, 
      comment: `FK(user => u_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${QueueEmailEntity.colprefix}from_u_id`, { unique: false })
    @IsNotEmpty()
    from_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.to_u_id.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}to_u_id`, 
      type: `int`, 
      unsigned: true, 
      comment: `FK(user => u_id)`,
      nullable: true,
      default: null,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${QueueEmailEntity.colprefix}to_u_id`, { unique: false })
    @IsOptional()
    to_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.quetype_id.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}quetype_id`, 
      type: `smallint`, 
      unsigned: true, 
      comment: `FK(queue_type => quetype_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${QueueEmailEntity.colprefix}quetype_id`, { unique: false })
    @IsNotEmpty()
    quetype_id?: number;

    @Field(() => Int, {nullable: true, description: meta.whresp_id.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}whresp_id`, 
      type: `int`, 
      unsigned: true, 
      comment: `FK(webhook_response => whresp_id)`,
      nullable: true,
      default: null,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${QueueEmailEntity.colprefix}whresp_id`, { unique: false })
    @IsOptional()
    whresp_id?: number;

    @Field(() => String, {nullable: true, description: meta.ref_id.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}ref_id`, 
      type: `varchar`,
      length: meta.ref_id.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `FK (relevant table primary key)`,
    })
    @Index(`${InIndexPrefix}${QueueEmailEntity.colprefix}ref_id`, { unique: false })
    @MaxLength(meta.ref_id.validation.maxLength as number, {message: meta.ref_id.validation.maxLengthMsg})
    @IsOptional()
    ref_id?: string;

    @Field(() => String, {nullable: true, description: meta.ref_type.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}ref_type`, 
      type: `varchar`,
      length: meta.ref_type.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
      comment: `FK (relevant table primary key)`,
    })
    @Index(`${InIndexPrefix}${QueueEmailEntity.colprefix}ref_type`, { unique: false })
    @MaxLength(meta.ref_type.validation.maxLength as number, {message: meta.ref_type.validation.maxLengthMsg})
    @IsOptional()
    ref_type?: string;

    @Field(() => Int, {nullable: true, description: meta.created_u_id.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}created_u_id`, 
      type: `int`, 
      unsigned: true, 
      comment: `FK(user => u_id)`,
      nullable: true,
      default: null,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${QueueEmailEntity.colprefix}created_u_id`, { unique: false })
    @IsOptional()
    created_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.created_ar_id.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}created_ar_id`, 
      type: `smallint`, 
      unsigned: true, 
      comment: `FK(authorisation => ar_id)`,
      nullable: true,
      default: null,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${QueueEmailEntity.colprefix}created_ar_id`, { unique: false })
    @IsOptional()
    created_ar_id?: number;
 
    @Field(() => String, {nullable: true, description: meta.from_email.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}from_email`, 
      type: `varchar`,
      length: meta.from_email.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${QueueEmailEntity.colprefix}from_email`, { unique: false })
    @MaxLength(meta.from_email.validation.maxLength as number, {message: meta.from_email.validation.maxLengthMsg})
    @IsNotEmpty()
    from_email?: string;
 
    @Field(() => String, {nullable: true, description: meta.to_email.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}to_email`, 
      type: `varchar`,
      length: meta.to_email.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @IsEmail({}, { message: meta.to_email.validation.isMustBeMsg })
    @Index(`${InIndexPrefix}${QueueEmailEntity.colprefix}to_email`, { unique: false })
    @MaxLength(meta.to_email.validation.maxLength as number, {message: meta.to_email.validation.maxLengthMsg})
    @IsOptional()
    to_email?: string;

    @Field(() => String, {nullable: true, description: meta.cc.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}cc`, 
      type: `text`, 
      nullable: true,
      default: null,
      collation: `utf8mb4_general_ci`,
    })
    @IsOptional()
    cc?: string;
   
    @Field(() => String, {nullable: true, description: meta.ccother.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}ccother`, 
      type: `text`, 
      nullable: true,
      default: null,
      collation: `utf8mb4_general_ci`,
    })
    @IsOptional()
    ccother?: string;

    @Field(() => String, {nullable: true, description: meta.bcc.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}bcc`, 
      type: `text`, 
      nullable: true,
      default: null,
      collation: `utf8mb4_general_ci`,
    })
    @IsOptional()
    bcc?: string;

    @Field(() => String, {nullable: true, description: meta.subject.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}subject`, 
      type: `varchar`, 
      length: meta.subject.validation.maxLength as number, 
      nullable: true,
      default: null,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${QueueEmailEntity.colprefix}subject`, { unique: false })
    @MaxLength(meta.subject.validation.maxLength as number, {message: meta.subject.validation.maxLengthMsg})  
    @IsOptional()
    subject?: string;

    @Field(() => String, {nullable: true, description: meta.body.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}body`, 
      type: `text`, 
      collation: `utf8mb4_general_ci`,
    })
    @IsNotEmpty()
    body?: string;

    @Field(() => GraphQLJSON, {nullable: true, description: meta.raw_data.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}raw_data`, 
      type: `json`, 
      nullable: true,
      default: null,
    })
    @IsOptional()
    raw_data?: JSON;

    @Field(() => DateTime, {nullable: true, description: meta.sent.desc})
    @Column({
      name: `${QueueEmailEntity.colprefix}sent`, 
      type: `datetime`, 
      nullable: true,
      comment: `date-time => No | null => Yes`,
    })
    @IsOptional()
    sent?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${QueueEmailEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${QueueEmailEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${QueueEmailEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${QueueEmailEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${QueueEmailEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${QueueEmailEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    
    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████ 

    @Field(() => UserEntity, {nullable: true, description: meta.fr_from_user.desc})
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_queue_email_from_users)
    @JoinColumn({ name: `${QueueEmailEntity.colprefix}from_u_id` })
    fr_from_user?: UserEntity;

    @Field(() => UserEntity, {nullable: true, description: meta.fr_to_user.desc})
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_queue_email_to_users)
    @JoinColumn({ name: `${QueueEmailEntity.colprefix}to_u_id` })
    fr_to_user?: UserEntity;

    @Field(() => QueueTypeEntity, {nullable: true, description: meta.fr_queue_type.desc})
    @ManyToOne(() => QueueTypeEntity, (entity: QueueTypeEntity) => entity.fr_queue_email)
    @JoinColumn({ name: `${QueueEmailEntity.colprefix}quetype_id` })
    fr_queue_type?: QueueTypeEntity;

    @Field(() => UserEntity, {nullable: true, description: meta.fr_created_user.desc})
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_queue_email_created_users)
    @JoinColumn({ name: `${QueueEmailEntity.colprefix}created_u_id` })
    fr_created_user?: UserEntity;

    /* @Field(() => AuthorisationEntity, {nullable: true, description: meta.fr_created_authorisation.desc})
    @ManyToOne(() => AuthorisationEntity, (entity: AuthorisationEntity) => entity.fr_created_user_authorisations)
    @JoinColumn({ name: `${QueueEmailEntity.colprefix}created_ar_id` })
    fr_created_authorisation?: AuthorisationEntity; */


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

}