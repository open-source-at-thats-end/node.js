import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";


/*
 	id?: any;
  mlsp_id?: any;
  resource?: any;
  class?: any;
  lookup_name?: any;
  lookup_field?: any;
  field_name?: any;
  long_value?: any;
  short_value?: any;
  id_value?: any;
  created?: any;
  updated?: any;
  deleted?: any;
*/

const  RetsListingMetadataEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the listing office type, auto generated.',
        validation: {} 
    },
    mlsp_id: {
        desc: 'MLS Service Provider ID',
          validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of MLS Service Provider is 64 characters.",
        }
    },
    resource: {
        desc: 'Resource',
        validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Resource is 64 characters.",
        }
    },
    class: {
      desc: 'Class',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Class is 64 characters.",
      }
    },
    lookup_name: {
      desc: 'Lookup Name',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Lookup Name is 64 characters.",
      }
    },
    lookup_field: {
      desc: 'Lookup field',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Lookup field is 64 characters.",
      }
    },
    field_name: {
      desc: 'Field Name',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Field Name is 64 characters.",
      }
    },
    long_value: {
      desc: 'Long Value',
      validation:{
          maxLength:255,
          maxLengthMsg: "Maximum length of Long Value is 255 characters.",
      }
    },
    short_value: {
      desc: 'Short Value',
      validation:{
          maxLength:255,
          maxLengthMsg: "Maximum length of Short Value is 255 characters.",
      }
    },
    id_value: {
      desc: 'Id Value',
      validation:{
          maxLength:128,
          maxLengthMsg: "Maximum length of Id Value is 128 characters.",
      }
    },
    created: {
        desc: 'When record is created, date-time will be saved.',
        validation:{}
    },
    updated: {
        desc: 'When record is updated, date-time will be saved.',
        validation:{}
    },
    deleted: {
        desc: 'When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.',
        validation:{}
    }
  };

const  RetsListingMetadataVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
}

export const RetsListingMetadataEntityMeta = {...RetsListingMetadataEntityFieldMeta, ...RetsListingMetadataVirtualFieldMeta};
const meta = RetsListingMetadataEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_listing_metadata',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}rlmd_mlsp_id`, [`mlsp_id`,`resource`,`lookup_name`,`lookup_field`,`field_name`,`id_value`,`class`])
export class RetsListingMetadataEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rlmd_';
    static uploaddir: string = 'listing-metadata';
    
    static metaname: string = (RetsListingMetadataEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide metadata of rets listing.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${RetsListingMetadataEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${RetsListingMetadataEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true, 
    })
    @IsNotEmpty()
    @IsInt()
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.resource.desc})
    @Column({
      name: `${RetsListingMetadataEntity.colprefix}resource`, 
      type: 'varchar', 
      length: meta.resource.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @MaxLength(meta.resource.validation.maxLength as number, {message: meta.resource.validation.maxLengthMsg})
    resource?: string;

    @Field(() => String, {nullable: true, description: meta.class.desc})
    @Column({
      name: `${RetsListingMetadataEntity.colprefix}class`, 
      type: 'varchar', 
      length: meta.class.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @MaxLength(meta.class.validation.maxLength as number, {message: meta.class.validation.maxLengthMsg})
    class?: string;

    @Field(() => String, {nullable: true, description: meta.lookup_name.desc})
    @Column({
      name: `${RetsListingMetadataEntity.colprefix}lookup_name`, 
      type: 'varchar', 
      length: meta.lookup_name.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @MaxLength(meta.lookup_name.validation.maxLength as number, {message: meta.lookup_name.validation.maxLengthMsg})
    lookup_name?: string;

    @Field(() => String, {nullable: true, description: meta.lookup_field.desc})
    @Column({
      name: `${RetsListingMetadataEntity.colprefix}lookup_field`, 
      type: 'varchar', 
      length: meta.lookup_field.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @MaxLength(meta.lookup_field.validation.maxLength as number, {message: meta.lookup_field.validation.maxLengthMsg})
    lookup_field?: string;

    @Field(() => String, {nullable: true, description: meta.field_name.desc})
    @Column({
      name: `${RetsListingMetadataEntity.colprefix}field_name`, 
      type: 'varchar', 
      length: meta.field_name.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @MaxLength(meta.field_name.validation.maxLength as number, {message: meta.field_name.validation.maxLengthMsg})
    field_name?: string;

    @Field(() => String, {nullable: true, description: meta.long_value.desc})
    @Column({
      name: `${RetsListingMetadataEntity.colprefix}long_value`, 
      type: 'varchar', 
      nullable: true,
      length: meta.long_value.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingMetadataEntity.colprefix}long_value`, { unique: false })
    @IsOptional()
    @MaxLength(meta.long_value.validation.maxLength as number, {message: meta.long_value.validation.maxLengthMsg})
    long_value?: string;

    @Field(() => String, {nullable: true, description: meta.short_value.desc})
    @Column({
      name: `${RetsListingMetadataEntity.colprefix}short_value`, 
      type: 'varchar', 
      nullable: true,
      length: meta.short_value.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.short_value.validation.maxLength as number, {message: meta.short_value.validation.maxLengthMsg})
    short_value?: string;

    @Field(() => String, {nullable: true, description: meta.id_value.desc})
    @Column({
      name: `${RetsListingMetadataEntity.colprefix}id_value`, 
      type: 'varchar', 
      length: meta.id_value.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @MaxLength(meta.id_value.validation.maxLength as number, {message: meta.id_value.validation.maxLengthMsg})
    id_value?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${RetsListingMetadataEntity.colprefix}created`,
      update: false,
    })
    @Index(`${InIndexPrefix}${RetsListingMetadataEntity.colprefix}created`, { unique: false })
    @IsOptional()
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${RetsListingMetadataEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${RetsListingMetadataEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${RetsListingMetadataEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time=> Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${RetsListingMetadataEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;
}
