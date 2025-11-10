import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix, YesNoEnum  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
 
const  AlertDurationEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
 
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
const  AlertDurationVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

} 
export const AlertDurationEntityMeta = {...AlertDurationEntityFieldMeta, ...AlertDurationVirtualFieldMeta};
const meta = AlertDurationEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")') // TODO: SUPERGRAPH_FOREIGN_RELATION step 1 - add directive
@Entity({
  name: 'alert_duration',
  engine: 'InnoDB',
})
export class AlertDurationEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `alertdur_`;
    static uploaddir: string = `alert-duration`;

    static metaname: string = (AlertDurationEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of Alert duration.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${AlertDurationEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${AlertDurationEntity.colprefix}title`, 
      type: `varchar`,
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${AlertDurationEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${AlertDurationEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${AlertDurationEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${AlertDurationEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${AlertDurationEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${AlertDurationEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${AlertDurationEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    
    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

    
}