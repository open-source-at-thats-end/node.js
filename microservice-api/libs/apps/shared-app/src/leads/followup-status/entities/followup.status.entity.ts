import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { LeadFollowupEntity } from "../../followup/entities/lead.followup.entity";
 
const  LeadFollowupStatusEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the lead, auto generated.`,
    validation: {} 
},
title: {
  desc: `Title of the lead followup status.`,
  validation:{
    maxLength: 64,
    maxLengthMsg: `Title length is only 64 characters.`,
  }
},
desc: {
  desc: `Description of the lead followup status.`,
  validation:{
    maxLength: 255,
    maxLengthMsg: `Description length is only 255 characters.`,
  }
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
const  LeadFollowupStatusVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_lead_followups_status: {
    desc: `Lead followup of the lead followup status.`,
    validation: {}
  },
} 
export const LeadFollowupStatusEntityMeta = {...LeadFollowupStatusEntityFieldMeta, ...LeadFollowupStatusVirtualFieldMeta};
const meta = LeadFollowupStatusEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'lead_followup_status',
  engine: 'InnoDB',
})
export class LeadFollowupStatusEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `leadfst_`;
    static uploaddir: string = `lead-followup-status`;

    static metaname: string = (LeadFollowupStatusEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of lead followup status.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${LeadFollowupStatusEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: false, description: meta.title.desc})
    @Column({
      name: `${LeadFollowupStatusEntity.colprefix}title`, 
      type: `varchar`, 
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${LeadFollowupStatusEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${LeadFollowupStatusEntity.colprefix}desc`, 
      type: `varchar`,
      length: meta.desc.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    @IsOptional()
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${LeadFollowupStatusEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${LeadFollowupStatusEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${LeadFollowupStatusEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${LeadFollowupStatusEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${LeadFollowupStatusEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${LeadFollowupStatusEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [LeadFollowupEntity], {nullable: true, description: meta.fr_lead_followups_status.desc})
    @OneToMany(() => LeadFollowupEntity, (entity: LeadFollowupEntity) => entity.fr_lead_followupsts)
    fr_lead_followups_status?: LeadFollowupEntity[];
    

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}