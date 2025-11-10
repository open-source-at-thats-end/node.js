import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, ResolveGraphFieldRelation } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, OneToMany, OneToOne, JoinColumn, PrimaryGeneratedColumn, Unique, UpdateDateColumn, ManyToOne } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { RetsMlsProviderEntity } from "../../../listings/mls-provider/entities/mls.provider.entity";

/*
id?: any;
mlsp_id?: any;
mls_num?: any;
property_type?: any;
zipcode?: any;
created?: any;
updated?: any;
deleted?: any;
*/

const  ProcessedSearchByZipcodeEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the processed search by zipcode, auto generated.',
        validation: {} 
    },
    mlsp_id: {
        desc: 'MLSP ID',
        validation:{}
    },
    mls_num: {
      desc: 'Mls num of the processed search by zipcode',
      validation:{
        maxLength:16,
        maxLengthMsg: "Maximum length of mls num is 16 characters.",
      }
    },
    property_type: {
      desc: 'Property type of the processed search by zipcode',
      validation:{
        maxLength:32,
        maxLengthMsg: "Maximum length of property type is 32 characters.",
      }
    },
    zipcode: {
      desc: 'zipcode of the processed search by zipcode',
      validation:{
        maxLength:16,
        maxLengthMsg: "Maximum length of zipcode is 16 characters.",
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

const  ProcessedSearchByZipcodeVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the processed search by zipcode.`,
    validation: {}
  }
}

export const ProcessedSearchByZipcodeEntityMeta = {...ProcessedSearchByZipcodeEntityFieldMeta, ...ProcessedSearchByZipcodeVirtualFieldMeta};
const meta = ProcessedSearchByZipcodeEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_processed_search_by_zipcode',
  engine: 'InnoDB',
})
export class ProcessedSearchByZipcodeEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rpsz_';
    static uploaddir: string = 'rets-processed-search-by-zipcode';
    
    static metaname: string = (ProcessedSearchByZipcodeEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide processed search by zipcode.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${ProcessedSearchByZipcodeEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${ProcessedSearchByZipcodeEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true,
      comment: `FK(rets_mls_provider => mlsp_id)`
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByZipcodeEntity.colprefix}mlsp_id`, { unique: false })
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.mls_num.desc})
    @Column({
      name: `${ProcessedSearchByZipcodeEntity.colprefix}mls_num`, 
      type: 'varchar', 
      length: meta.mls_num.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
      comment: `mls_num of rets listing`
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByZipcodeEntity.colprefix}mls_num`, { unique: false })
    @MaxLength(meta.mls_num.validation.maxLength as number, {message: meta.mls_num.validation.maxLengthMsg})
    mls_num?: string;

    @Field(() => String, {nullable: true, description: meta.property_type.desc})
    @Column({
      name: `${ProcessedSearchByZipcodeEntity.colprefix}property_type`, 
      type: 'varchar', 
      length: meta.property_type.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByZipcodeEntity.colprefix}property_type`, { unique: false })
    @MaxLength(meta.property_type.validation.maxLength as number, {message: meta.property_type.validation.maxLengthMsg})
    property_type?: string;

    @Field(() => String, {nullable: true, description: meta.zipcode.desc})
    @Column({
      name: `${ProcessedSearchByZipcodeEntity.colprefix}zipcode`, 
      type: 'varchar', 
      length: meta.zipcode.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByZipcodeEntity.colprefix}zipcode`, { unique: false })
    @MaxLength(meta.zipcode.validation.maxLength as number, {message: meta.zipcode.validation.maxLengthMsg})
    zipcode?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${ProcessedSearchByZipcodeEntity.colprefix}created`,
      update: false,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByZipcodeEntity.colprefix}created`, { unique: false })
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${ProcessedSearchByZipcodeEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${ProcessedSearchByZipcodeEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${ProcessedSearchByZipcodeEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time: yes | null: no`,
    })
    @Index(`${InIndexPrefix}${ProcessedSearchByZipcodeEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;



    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => RetsMlsProviderEntity, {nullable: true, description: meta.fr_mlsp_id.desc})
    @ManyToOne(() => RetsMlsProviderEntity, (entity: RetsMlsProviderEntity) => entity.fr_search_by_zipcode_mlsp_id)
    @JoinColumn({ name: `${ProcessedSearchByZipcodeEntity.colprefix}mlsp_id` })
    fr_mlsp_id?: RetsMlsProviderEntity;
  
    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
        
}

 
