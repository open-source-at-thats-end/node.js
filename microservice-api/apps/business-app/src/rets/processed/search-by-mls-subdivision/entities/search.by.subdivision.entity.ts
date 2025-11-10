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
subdivision?: any;
created?: any;
updated?: any;
deleted?: any;
*/

const  ProcessedSearchBySubdivisionEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the processed search by subdivision, auto generated.',
        validation: {} 
    },
    mlsp_id: {
        desc: 'MLSP ID',
        validation:{}
    },
    mls_num: {
      desc: 'Mls num of the processed search by subdivision',
      validation:{
        maxLength:16,
        maxLengthMsg: "Maximum length of mls num is 16 characters.",
      }
    },
    property_type: {
      desc: 'Property type of the processed search by subdivision',
      validation:{
        maxLength:32,
        maxLengthMsg: "Maximum length of property type is 32 characters.",
      }
    },
    subdivision: {
      desc: 'Subdivision of the processed search by subdivision',
      validation:{
        maxLength:64,
        maxLengthMsg: "Maximum length of subdivision is 64 characters.",
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

const  ProcessedSearchBySubdivisionVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the processed search by subdivision.`,
    validation: {}
  }
}

export const ProcessedSearchBySubdivisionEntityMeta = {...ProcessedSearchBySubdivisionEntityFieldMeta, ...ProcessedSearchBySubdivisionVirtualFieldMeta};
const meta = ProcessedSearchBySubdivisionEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_processed_search_by_subdivision',
  engine: 'InnoDB',
})
export class ProcessedSearchBySubdivisionEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rpss_';
    static uploaddir: string = 'rets-processed-search-by-subdivision';
    
    static metaname: string = (ProcessedSearchBySubdivisionEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide processed search by subdivision.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${ProcessedSearchBySubdivisionEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${ProcessedSearchBySubdivisionEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true,
      comment: `FK(rets_mls_provider => mlsp_id)`
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchBySubdivisionEntity.colprefix}mlsp_id`, { unique: false })
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.mls_num.desc})
    @Column({
      name: `${ProcessedSearchBySubdivisionEntity.colprefix}mls_num`, 
      type: 'varchar', 
      length: meta.mls_num.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
      comment: `mls_num of rets listing`
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchBySubdivisionEntity.colprefix}mls_num`, { unique: false })
    @MaxLength(meta.mls_num.validation.maxLength as number, {message: meta.mls_num.validation.maxLengthMsg})
    mls_num?: string;

    @Field(() => String, {nullable: true, description: meta.property_type.desc})
    @Column({
      name: `${ProcessedSearchBySubdivisionEntity.colprefix}property_type`, 
      type: 'varchar', 
      length: meta.property_type.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchBySubdivisionEntity.colprefix}property_type`, { unique: false })
    @MaxLength(meta.property_type.validation.maxLength as number, {message: meta.property_type.validation.maxLengthMsg})
    property_type?: string;

    @Field(() => String, {nullable: true, description: meta.subdivision.desc})
    @Column({
      name: `${ProcessedSearchBySubdivisionEntity.colprefix}subdivision`, 
      type: 'varchar', 
      length: meta.subdivision.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchBySubdivisionEntity.colprefix}subdivision`, { unique: false })
    @MaxLength(meta.subdivision.validation.maxLength as number, {message: meta.subdivision.validation.maxLengthMsg})
    subdivision?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${ProcessedSearchBySubdivisionEntity.colprefix}created`,
      update: false,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchBySubdivisionEntity.colprefix}created`, { unique: false })
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${ProcessedSearchBySubdivisionEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${ProcessedSearchBySubdivisionEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${ProcessedSearchBySubdivisionEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time: yes | null: no`,
    })
    @Index(`${InIndexPrefix}${ProcessedSearchBySubdivisionEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;



    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => RetsMlsProviderEntity, {nullable: true, description: meta.fr_mlsp_id.desc})
    @ManyToOne(() => RetsMlsProviderEntity, (entity: RetsMlsProviderEntity) => entity.fr_search_by_subdivision_mlsp_id)
    @JoinColumn({ name: `${ProcessedSearchBySubdivisionEntity.colprefix}mlsp_id` })
    fr_mlsp_id?: RetsMlsProviderEntity;

  
    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
        
}

 
