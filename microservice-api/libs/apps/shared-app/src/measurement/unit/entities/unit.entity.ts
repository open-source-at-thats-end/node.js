import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix, YesNoEnum, AnyOneRequired  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, Validate, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { MeasurementCategoryEntity } from "../../category/entities/measurement.category.entity";
 
const  MeasurementUnitEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the measurement unit, auto generated.`,
    validation: {} 
},
mcat_id: {
  desc: `Measurement category of the measurement unit.`,
  validation:{}
},
name: {
  desc: `Name of the measurement unit.`,
  validation:{
    maxLength: 64,
    maxLengthMsg: `Name length is only 64 characters.`,
  }
},
abbreviation: {
  desc: `Abbreviation of the measurement unit.`,
  validation:{
    maxLength: 32,
    maxLengthMsg: `Abbreviation length is only 32 characters.`,
  }
},
short_desc: {
  desc: `Short description of the measurement unit.`,
  validation: {}
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
const  MeasurementUnitVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

  fr_mu_category:{
    desc: `Categories for this measurement.`,
    validation: {}
  }
  
} 
export const MeasurementUnitEntityMeta = {...MeasurementUnitEntityFieldMeta, ...MeasurementUnitVirtualFieldMeta};
const meta = MeasurementUnitEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'measurement_unit',
  engine: 'InnoDB',
})
export class MeasurementUnitEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `mu_`;
    static uploaddir: string = `measurement-unit`;

    static metaname: string = (MeasurementUnitEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of measurement units.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${MeasurementUnitEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;
   
    @Field(() => Int, {nullable: true, description: meta.mcat_id.desc})
    @Column({
      name: `${MeasurementUnitEntity.colprefix}mcat_id`, 
      type: `tinyint`,
      unsigned: true, 
      comment: `FK( measurement_category => mcat_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${MeasurementUnitEntity.colprefix}mcat_id`, { unique: false })
    @IsOptional()
    mcat_id?: number;

    @Field(() => String, {nullable: true, description: meta.name.desc})
    @Column({
      name: `${MeasurementUnitEntity.colprefix}name`, 
      type: `varchar`,
      length: meta.name.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${MeasurementUnitEntity.colprefix}name`, { unique: false })
    @MaxLength(meta.name.validation.maxLength as number, {message: meta.name.validation.maxLengthMsg})
    @IsNotEmpty()
    name?: string;

    @Field(() => String, {nullable: true, description: meta.abbreviation.desc})
    @Column({
      name: `${MeasurementUnitEntity.colprefix}abbreviation`, 
      type: `varchar`,
      length: meta.abbreviation.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @MaxLength(meta.abbreviation.validation.maxLength as number, {message: meta.abbreviation.validation.maxLengthMsg})
    @IsNotEmpty()
    abbreviation?: string;

    @Field(() => String, {nullable: true, description: meta.short_desc.desc})
    @Column({
      name: `${MeasurementUnitEntity.colprefix}short_desc`, 
      type: `varchar`,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @IsNotEmpty()
    short_desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${MeasurementUnitEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${MeasurementUnitEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${MeasurementUnitEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${MeasurementUnitEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${MeasurementUnitEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${MeasurementUnitEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => MeasurementCategoryEntity, {nullable: true, description: meta.fr_mu_category.desc})
    @ManyToOne(() => MeasurementCategoryEntity, (entity: MeasurementCategoryEntity) => entity.fr_measurement_units)
    @JoinColumn({ name: `${MeasurementUnitEntity.colprefix}mcat_id` })
    fr_mu_category?: MeasurementCategoryEntity;

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}