import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";

const  RetsMlsProviderConfigEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the listing office type, auto generated.',
        validation: {} 
    },
    mlsp_id: {
        desc: 'MLS Service Provider ID',
        validation:{}
    },
    resource: {
      desc: 'Resource associated with the MLS provider configuration.',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Resource is 64 characters.",
      }
    },
    class: {
      desc: 'Class of the MLS provider configuration.',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Class is 64 characters.",
      }
    },
    select_query: {
        desc: 'Select query of MLS provider configuration.',
        validation:{}
    },
    field_list: {
      desc: 'Field list of MLS provider configuration.',
        validation:{}
    },
    lookup_list: {
        desc: 'Lookup list of MLS provider configuration.',
        validation:{}
    },
    lookup_field_list: {
      desc: 'Look up field list of MLS provider configuration.',
      validation:{}
    },
    mapped_list: {
      desc: 'Mapped list of MLS provider configuration.',
      validation:{}
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

const  RetsMlsProviderConfigVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
}

export const RetsMlsProviderConfigEntityMeta = {...RetsMlsProviderConfigEntityFieldMeta, ...RetsMlsProviderConfigVirtualFieldMeta};
const meta = RetsMlsProviderConfigEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_mls_provider_config',
  engine: 'InnoDB',
})
export class RetsMlsProviderConfigEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'mlspc_';
    static uploaddir: string = 'rets-mls-provider-config';
    
    static metaname: string = (RetsMlsProviderConfigEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide mls provider config of rets listing.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${RetsMlsProviderConfigEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${RetsMlsProviderConfigEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true, 
      comment: `FK (rets_mls_provider => mlsp_id)`
    })
    @IsInt()
    @Index(`${InIndexPrefix}${RetsMlsProviderConfigEntity.colprefix}mlsp_id`, { unique: false })
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.resource.desc})
    @Column({
      name: `${RetsMlsProviderConfigEntity.colprefix}resource`, 
      type: 'varchar', 
      length: meta.resource.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${RetsMlsProviderConfigEntity.colprefix}resource`, { unique: false })
    @MaxLength(meta.resource.validation.maxLength as number, {message: meta.resource.validation.maxLengthMsg})
    resource?: string;

    @Field(() => String, {nullable: true, description: meta.class.desc})
    @Column({
      name: `${RetsMlsProviderConfigEntity.colprefix}class`, 
      type: 'varchar', 
      length: meta.class.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${RetsMlsProviderConfigEntity.colprefix}class`, { unique: false })
    @MaxLength(meta.class.validation.maxLength as number, {message: meta.class.validation.maxLengthMsg})
    class?: string;

    @Field(() => String, {nullable: true, description: meta.select_query.desc})
    @Column({
      name: `${RetsMlsProviderConfigEntity.colprefix}select_query`, 
      type: 'mediumtext', 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    select_query?: string;

    @Field(() => String, {nullable: true, description: meta.field_list.desc})
    @Column({
      name: `${RetsMlsProviderConfigEntity.colprefix}field_list`, 
      type: 'mediumtext', 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    field_list?: string;

    @Field(() => String, {nullable: true, description: meta.lookup_list.desc})
    @Column({
      name: `${RetsMlsProviderConfigEntity.colprefix}lookup_list`, 
      type: 'mediumtext', 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    lookup_list?: string;

    @Field(() => String, {nullable: true, description: meta.lookup_field_list.desc})
    @Column({
      name: `${RetsMlsProviderConfigEntity.colprefix}lookup_field_list`, 
      type: 'mediumtext', 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    lookup_field_list?: string;

    @Field(() => String, {nullable: true, description: meta.mapped_list.desc})
    @Column({
      name: `${RetsMlsProviderConfigEntity.colprefix}mapped_list`, 
      type: 'mediumtext', 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    mapped_list?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${RetsMlsProviderConfigEntity.colprefix}created`,
      update: false,
    })
    @Index(`${InIndexPrefix}${RetsMlsProviderConfigEntity.colprefix}created`, { unique: false })
    @IsOptional()
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${RetsMlsProviderConfigEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${RetsMlsProviderConfigEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${RetsMlsProviderConfigEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${RetsMlsProviderConfigEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;
}
