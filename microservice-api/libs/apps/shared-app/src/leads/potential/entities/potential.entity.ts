import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { LeadFollowupEntity } from "../../followup/entities/lead.followup.entity";
 
const  LeadPotentialEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the lead, auto generated.`,
    validation: {} 
},
title: {
  desc: `Title of the lead potential.`,
  validation:{
    maxLength: 64,
    maxLengthMsg: `Title length is only 64 characters.`,
  }
},
desc: {
  desc: `Description of the lead potential.`,
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
const  LeadPotentialVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_lead_followup: {
      desc: `Lead followup of the lead potential.`,
      validation: {}
  },
 
} 
export const LeadPotentialEntityMeta = {...LeadPotentialEntityFieldMeta, ...LeadPotentialVirtualFieldMeta};
const meta = LeadPotentialEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'lead_potential',
  engine: 'InnoDB',
})
export class LeadPotentialEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `leadpot_`;
    static uploaddir: string = `lead-potential`;

    static metaname: string = (LeadPotentialEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of lead potential.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${LeadPotentialEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: false, description: meta.title.desc})
    @Column({
      name: `${LeadPotentialEntity.colprefix}title`, 
      type: `varchar`, 
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${LeadPotentialEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${LeadPotentialEntity.colprefix}desc`, 
      type: `varchar`,
      length: meta.desc.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    @IsOptional()
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${LeadPotentialEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${LeadPotentialEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${LeadPotentialEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${LeadPotentialEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${LeadPotentialEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${LeadPotentialEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [LeadFollowupEntity], {nullable: true, description: meta.fr_lead_followup.desc})
    @OneToMany(() => LeadFollowupEntity, (entity: LeadFollowupEntity) => entity.fr_lead_potential)
    fr_lead_followup?: LeadFollowupEntity[];

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}