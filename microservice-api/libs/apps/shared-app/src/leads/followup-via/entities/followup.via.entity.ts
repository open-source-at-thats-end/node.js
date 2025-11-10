import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix, YesNoEnum  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { LeadFollowupEntity } from "../../followup/entities/lead.followup.entity";
 
const  LeadFollowupViaEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the email template, auto generated.`,
    validation: {} 
},
title: {
  desc: `Title of the email template.`,
  validation:{
    maxLength: 128,
    maxLengthMsg: `Title length is only 128 characters.`,
  }
},
desc: {
  desc: `Description of the email template.`,
  validation:{
    maxLength: 255,
    maxLengthMsg: `Subject length is only 255 characters.`,
  }
},
active: {
  desc: `Indicates if email template active or not.`,
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
const  LeadFollowupViaVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  	fr_lead_followups: {
      desc: `Lead followup of the lead followup via.`,
      validation: {}
  },
} 
export const LeadFollowupViaEntityMeta = {...LeadFollowupViaEntityFieldMeta, ...LeadFollowupViaVirtualFieldMeta};
const meta = LeadFollowupViaEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'lead_followup_via',
  engine: 'InnoDB',
})
export class LeadFollowupViaEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `leadfupvia_`;
    static uploaddir: string = `lead-followup-via`;

    static metaname: string = (LeadFollowupViaEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of lead followup via.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${LeadFollowupViaEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${LeadFollowupViaEntity.colprefix}title`, 
      type: `varchar`,
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${LeadFollowupViaEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${LeadFollowupViaEntity.colprefix}desc`, 
      type: `varchar`,
      length: meta.desc.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    @IsNotEmpty()
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.active.desc})
    @Column({
      name: `${LeadFollowupViaEntity.colprefix}active`, 
      type: `datetime`,
      comment: `date-time => No | null => Yes`
    })
    @Index(`${InIndexPrefix}${LeadFollowupViaEntity.colprefix}active`, { unique: false })
    @IsOptional()
    active?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${LeadFollowupViaEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${LeadFollowupViaEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${LeadFollowupViaEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${LeadFollowupViaEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${LeadFollowupViaEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${LeadFollowupViaEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [LeadFollowupEntity], {nullable: true, description: meta.fr_lead_followups.desc})
    @OneToMany(() => LeadFollowupEntity, (entity: LeadFollowupEntity) => entity.fr_lead_followup_via)
    fr_lead_followups?: LeadFollowupEntity[];
   

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}