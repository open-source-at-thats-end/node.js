import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { LeadEntity } from "../../lead/entities/lead.entity";
import { UserEntity } from "apps/shared-app/src/folk/user/entities/user.entity";
import { LeadFollowupStatusEntity } from "../../followup-status/entities/followup.status.entity";
import { LeadFollowupViaEntity } from "../../followup-via/entities/followup.via.entity";
import { LeadPotentialEntity } from "../../potential/entities/potential.entity";
 
const  LeadFollowupEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the lead, auto generated.`,
    validation: {} 
},
lead_id: {
    desc: `Lead of the lead followup.`,
    validation:{}
},
u_id: {
    desc: `User id of the lead followup.`,
    validation:{}
},
leadpot_id: {
  desc: `Lead potential of the lead followup.`,
  validation:{}
},
leadfst_id: {
  desc: `Lead follow up status id of the lead followup.`,
  validation:{}
},
leadfupvia_id: {
  desc: `Type of the lead followup.`,
  validation:{}
},
note: {
  desc: `Note of the lead followup.`,
  validation:{
    maxLength: 255,
    maxLengthMsg: `Note length is only 255 characters.`,
  }
},
competitor_note: {
  desc: `Competitor note of the lead followup.`,
  validation:{
    maxLength: 255,
    maxLengthMsg: `competitor note length is only 255 characters.`,
  }
},
next_followup: {
    desc: `Next followup date of the lead followup.`,
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
const  LeadFollowupVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_leads: {
    desc: `Lead of the lead followup.`,
    validation: {}
  },
  fr_user: {
    desc: `User of the lead followup.`,
    validation: {}
  },
  fr_lead_followupsts: {
    desc: `Followup status of the lead followup.`,
    validation: {}
  },
  fr_lead_followup_via: {
    desc: `Followup via of the lead followup.`,
    validation: {}
  },
  fr_lead_potential: {
    desc: `Potential of the lead followup.`,
    validation: {}
  },
} 
export const LeadFollowupEntityMeta = {...LeadFollowupEntityFieldMeta, ...LeadFollowupVirtualFieldMeta};
const meta = LeadFollowupEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'lead_followup',
  engine: 'InnoDB',
})
export class LeadFollowupEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `leadfup_`;
    static uploaddir: string = `lead-followup`;

    static metaname: string = (LeadFollowupEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of lead followups.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${LeadFollowupEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.lead_id.desc})
    @Column({
      name: `${LeadFollowupEntity.colprefix}lead_id`, 
      type: `int`,
      unsigned: true, 
      comment: `FK ( lead=> lead_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${LeadFollowupEntity.colprefix}lead_id`, { unique: false })
    @IsNotEmpty()
    lead_id?: number;

    @Field(() => Int, {nullable: true, description: meta.u_id.desc})
    @Column({
      name: `${LeadFollowupEntity.colprefix}u_id`, 
      type: `int`,
      unsigned: true, 
      comment: `FK ( user => u_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${LeadFollowupEntity.colprefix}u_id`, { unique: false })
    @IsNotEmpty()
    u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.leadpot_id.desc})
    @Column({
      name: `${LeadFollowupEntity.colprefix}leadpot_id`, 
      type: `tinyint`,
      unsigned: true, 
      comment: `FK ( te_lead_potential => leadpot_id)`,
      nullable: true,
      default: null,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${LeadFollowupEntity.colprefix}leadpot_id`, { unique: false })
    @IsNotEmpty()
    leadpot_id?: number;

    @Field(() => Int, {nullable: true, description: meta.leadfst_id.desc})
    @Column({
      name: `${LeadFollowupEntity.colprefix}leadfst_id`, 
      type: `tinyint`,
      unsigned: true, 
      comment: `FK ( lead_followup_status => leadfst_id)`,
      nullable: true,
      default: null,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${LeadFollowupEntity.colprefix}leadfst_id`, { unique: false })
    @IsNotEmpty()
    leadfst_id?: number;

    @Field(() => Int, {nullable: true, description: meta.leadfupvia_id.desc})
    @Column({
      name: `${LeadFollowupEntity.colprefix}leadfupvia_id`, 
      type: `smallint`,
      unsigned: true, 
      comment: `FK ( lead_followup_via=> leadfupvia_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${LeadFollowupEntity.colprefix}leadfupvia_id`, { unique: false })
    @IsNotEmpty()
    leadfupvia_id?: number;

    @Field(() => String, {nullable: true, description: meta.note.desc})
    @Column({
      name: `${LeadFollowupEntity.colprefix}note`, 
      type: `varchar`,
      length: meta.note.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.note.validation.maxLength as number, {message: meta.note.validation.maxLengthMsg})
    @IsNotEmpty()
    note?: string;

    @Field(() => String, {nullable: true, description: meta.competitor_note.desc})
    @Column({
      name: `${LeadFollowupEntity.colprefix}competitor_note`, 
      type: `varchar`,
      length: meta.competitor_note.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.competitor_note.validation.maxLength as number, {message: meta.competitor_note.validation.maxLengthMsg})
    @IsOptional()
    competitor_note?: string;

    @Field(() => DateTime, {nullable: true, description: meta.next_followup.desc})
    @CreateDateColumn({
      name: `${LeadFollowupEntity.colprefix}next_followup`, 
      type: `datetime`,
    })
    @Index(`${InIndexPrefix}${LeadFollowupEntity.colprefix}next_followup`, { unique: false })
    @IsOptional()
    next_followup?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${LeadFollowupEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${LeadFollowupEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${LeadFollowupEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${LeadFollowupEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${LeadFollowupEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${LeadFollowupEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => LeadEntity, {
        nullable: true, 
        description: meta.fr_leads.desc,
    })
    @ManyToOne(() => LeadEntity, (entity: LeadEntity) => entity.fr_lead_followups)
    @JoinColumn({ name: `${LeadFollowupEntity.colprefix}lead_id` })
    fr_leads?: LeadEntity;

    @Field(() => UserEntity, {
      nullable: true, 
      description: meta.fr_user.desc,
    })
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_lead_from_users)
    @JoinColumn({ name: `${LeadFollowupEntity.colprefix}u_id` })
    fr_user?: UserEntity;

    @Field(() => LeadFollowupStatusEntity, {
      nullable: true, 
      description: meta.fr_lead_followupsts.desc,
    })
    @ManyToOne(() => LeadFollowupStatusEntity, (entity: LeadFollowupStatusEntity) => entity.fr_lead_followups_status)
    @JoinColumn({ name: `${LeadFollowupEntity.colprefix}leadfst_id` })
    fr_lead_followupsts?: LeadFollowupStatusEntity;

    @Field(() => LeadFollowupViaEntity, {
      nullable: true, 
      description: meta.fr_lead_followup_via.desc,
    })
    @ManyToOne(() => LeadFollowupViaEntity, (entity: LeadFollowupViaEntity) => entity.fr_lead_followups)
    @JoinColumn({ name: `${LeadFollowupEntity.colprefix}leadfupvia_id` })
    fr_lead_followup_via?: LeadFollowupViaEntity;

    @Field(() => LeadPotentialEntity, {
      nullable: true, 
      description: meta.fr_lead_potential.desc,
    })
    @ManyToOne(() => LeadPotentialEntity, (entity: LeadPotentialEntity) => entity.fr_lead_followup)
    @JoinColumn({ name: `${LeadFollowupEntity.colprefix}leadpot_id` })
    fr_lead_potential?: LeadPotentialEntity;

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}