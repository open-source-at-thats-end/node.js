import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix, YesNoEnum  } from "@libs/library-app";
import { IsEmail, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { MeasurementUnitEntity } from "../../unit/entities/unit.entity";
 
const  MeasurementCategoryEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

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
const  MeasurementCategoryVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  	fr_measurement_units: {
      desc: `Categories of the Measurement.`,
      validation: {}
  },
} 
export const MeasurementCategoryEntityMeta = {...MeasurementCategoryEntityFieldMeta, ...MeasurementCategoryVirtualFieldMeta};
const meta = MeasurementCategoryEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'measurement_category',
  engine: 'InnoDB',
})
export class MeasurementCategoryEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `mcat_`;
    static uploaddir: string = `measurement-category`;

    static metaname: string = (MeasurementCategoryEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of measurement categories.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${MeasurementCategoryEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${MeasurementCategoryEntity.colprefix}title`, 
      type: `varchar`,
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${MeasurementCategoryEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${MeasurementCategoryEntity.colprefix}desc`, 
      type: `varchar`,
      length: meta.desc.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @IsOptional()
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.active.desc})
    @Column({
      name: `${MeasurementCategoryEntity.colprefix}active`, 
      type: `datetime`,
      comment: `date-time => No | null => Yes`
    })
    @Index(`${InIndexPrefix}${MeasurementCategoryEntity.colprefix}active`, { unique: false })
    @IsOptional()
    active?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${MeasurementCategoryEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${MeasurementCategoryEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${MeasurementCategoryEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${MeasurementCategoryEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${MeasurementCategoryEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${MeasurementCategoryEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

   @Field(() => [MeasurementUnitEntity], {nullable: true, description: meta.fr_measurement_units.desc})
    @OneToMany(() => MeasurementUnitEntity, (entity: MeasurementUnitEntity) => entity.fr_mu_category)
    fr_measurement_units?: MeasurementUnitEntity[];
    
    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}