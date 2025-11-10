import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "../../../folk/user/entities/user.entity";
import { LeadFollowupEntity } from "../../followup/entities/lead.followup.entity";
 
const  LeadEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the lead, auto generated.`,
    validation: {} 
},
from_u_id: {
    desc: `From user id of the lead.`,
    validation:{}
},
to_u_id: {
  desc: `To user id of the lead.`,
  validation:{}
},
ref_id: {
  desc: `Reference id of the lead.`,
  validation:{
    maxLength: 128,
    maxLengthMsg: `Reference id length is only 128 characters.`,
  }
},
ref_type: {
  desc: `Reference type of the lead.`,
  validation:{
    maxLength: 128,
    maxLengthMsg: `Reference type length is only 128 characters.`,
  }
},
concern_issue: {
  desc: `Concern issue of the lead.`,
  validation:{
    maxLength: 255,
    maxLengthMsg: `Concern issue is only 255 characters.`,
  }
},
preferred_contact_method: {
  desc: `Preferred contact method of the lead.`,
  validation:{
    maxLength: 16,
    maxLengthMsg: `Preferred contact method of the lead is only 16 characters.`,
  }
},
subject: {
  desc: `Subject of the lead.`,
  validation:{
    maxLength: 128,
    maxLengthMsg: `Subject of the lead is only 128 characters.`,
  }
},
comment: {
  desc: `Comment of the lead.`,
  validation:{}
},
initial_findings : {
  desc: `Initial findings of the lead.`,
  validation:{}
},
first_incoming_message_dt: {
    desc: `The date and time when the first incoming message was received.`,
    validation:{}
},
created: {
    desc: `When record is created, date-time will be saved.`,
    validation:{}
},
updated: {
    desc: `When record is updated, date-time will be saved.`,
    validation:{}
},
deleted: {
    desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
    validation:{}
}

};
const  LeadVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_from_user: {
    desc: `From user of the lead.`,
    validation: {}
  },
  fr_to_user: {
    desc: `To user of the lead.`,
    validation: {}
  },
  fr_lead_followups: {
    desc: `Lead source of the lead.`,
    validation: {}
  },
} 
export const LeadEntityMeta = {...LeadEntityFieldMeta, ...LeadVirtualFieldMeta};
const meta = LeadEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'lead',
  engine: 'InnoDB',
})
export class LeadEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `lead_`;
    static uploaddir: string = `lead`;

    static metaname: string = (LeadEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of leads.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${LeadEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.from_u_id.desc})
    @Column({
      name: `${LeadEntity.colprefix}from_u_id`, 
      type: `int`,
      unsigned: true, 
      comment: `FK(user=>u_id)`,
      nullable: true,
      default: null,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${LeadEntity.colprefix}from_u_id`, { unique: false })
    @IsOptional()
    from_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.to_u_id.desc})
    @Column({
      name: `${LeadEntity.colprefix}to_u_id`, 
      type: `int`,
      unsigned: true, 
      comment: `	FK(user=>u_id)`,
      nullable: true,
      default: null,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${LeadEntity.colprefix}to_u_id`, { unique: false })
    @IsOptional()
    to_u_id?: number;

    @Field(() => String, {nullable: true, description: meta.ref_id.desc})
    @Column({
      name: `${LeadEntity.colprefix}ref_id`, 
      type: `varchar`, 
      length: meta.ref_id.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `FK (relevant table primary key)`,
    })
    @Index(`${InIndexPrefix}${LeadEntity.colprefix}ref_id`, { unique: false })
    @MaxLength(meta.ref_id.validation.maxLength as number, {message: meta.ref_id.validation.maxLengthMsg})
    @IsNotEmpty()
    ref_id?: string;

    @Field(() => String, {nullable: true, description: meta.ref_type.desc})
    @Column({
      name: `${LeadEntity.colprefix}ref_type`, 
      type: `varchar`,
      length: meta.ref_type.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      comment: `FK (relevant table primary key)`,
    })
    @Index(`${InIndexPrefix}${LeadEntity.colprefix}ref_type`, { unique: false })
    @MaxLength(meta.ref_type.validation.maxLength as number, {message: meta.ref_type.validation.maxLengthMsg})
    @IsNotEmpty()
    ref_type?: string;

    @Field(() => String, {nullable: true, description: meta.concern_issue.desc})
    @Column({
      name: `${LeadEntity.colprefix}concern_issue`, 
      type: `varchar`,
      length: meta.concern_issue.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.concern_issue.validation.maxLength as number, {message: meta.concern_issue.validation.maxLengthMsg})
    @IsOptional()
    concern_issue?: string;

    @Field(() => String, {nullable: true, description: meta.preferred_contact_method.desc})
    @Column({
      name: `${LeadEntity.colprefix}preferred_contact_method`, 
      type: `varchar`,
      length: meta.preferred_contact_method.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.preferred_contact_method.validation.maxLength as number, {message: meta.preferred_contact_method.validation.maxLengthMsg})
    @IsOptional()
    preferred_contact_method?: string;

    @Field(() => String, {nullable: true, description: meta.subject.desc})
    @Column({
      name: `${LeadEntity.colprefix}subject`, 
      type: `varchar`,
      length: meta.subject.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${LeadEntity.colprefix}subject`, { unique: false })
    @MaxLength(meta.subject.validation.maxLength as number, {message: meta.subject.validation.maxLengthMsg})
    @IsNotEmpty()
    subject?: string;

    @Field(() => String, {nullable: true, description: meta.comment.desc})
    @Column({
      name: `${LeadEntity.colprefix}comment`, 
      type: `text`,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @IsOptional()
    comment?: string;

    @Field(() => String, {nullable: true, description: meta.initial_findings.desc})
    @Column({
      name: `${LeadEntity.colprefix}initial_findings`, 
      type: `text`,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @IsOptional()
    initial_findings?: string;

    @Field(() => DateTime, {nullable: true, description: meta.first_incoming_message_dt.desc})
    @Column({
      name: `${LeadEntity.colprefix}first_incoming_message_dt`, 
      type: `datetime`,
      nullable: true
    })
    @Index(`${InIndexPrefix}${LeadEntity.colprefix}first_incoming_message_dt`, { unique: false })
    first_incoming_message_dt?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${LeadEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${LeadEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${LeadEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${LeadEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${LeadEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${LeadEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████
    @Field(() => UserEntity, {
      nullable: true, 
      description: meta.fr_from_user.desc,
    })
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_lead_from_users)
    @JoinColumn({ name: `${LeadEntity.colprefix}from_u_id` })
    fr_from_user?: UserEntity;

    @Field(() => UserEntity, {
      nullable: true, 
      description: meta.fr_to_user.desc,
    })
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_lead_to_users)
    @JoinColumn({ name: `${LeadEntity.colprefix}to_u_id` })
    fr_to_user?: UserEntity;

    @Field(() => [LeadFollowupEntity], {nullable: true, description: meta.fr_lead_followups.desc})
    @OneToMany(() => LeadFollowupEntity, (entity: LeadFollowupEntity) => entity.fr_leads)
    fr_lead_followups?: LeadFollowupEntity[]; 

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}