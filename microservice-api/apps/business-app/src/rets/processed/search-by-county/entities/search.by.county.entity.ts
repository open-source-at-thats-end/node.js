import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, ResolveGraphFieldRelation } from "@libs/library-app";
import { IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, OneToMany, OneToOne, JoinColumn, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";

const  ProcessedSearchByCountyEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the processed search by address, auto generated.',
        validation: {} 
    },
    mls_num: {
      desc: 'Mls num of the processed search by address',
      validation:{
        maxLength:255,
        maxLengthMsg: "Maximum length of mls num is 255 characters.",
      }
    },
    county: {
      desc: 'County of the processed search by address',
      validation:{
        maxLength:50,
        maxLengthMsg: "Maximum length of county is 50 characters.",
      }
    },
    city: {
      desc: 'City of the processed search by address',
      validation:{
        maxLength:50,
        maxLengthMsg: "Maximum length of city is 50 characters.",
      }
    },
    state: {
      desc: 'State of the processed search by address',
      validation:{
        maxLength:50,
        maxLengthMsg: "Maximum length of state is 50 characters.",
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

const  ProcessedSearchByCountyVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the processed.search.by.county.`,
    validation: {}
  }
}

export const ProcessedSearchByCountyEntityMeta = {...ProcessedSearchByCountyEntityFieldMeta, ...ProcessedSearchByCountyVirtualFieldMeta};
const meta = ProcessedSearchByCountyEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_processed_search_by_county',
  engine: 'InnoDB',
})
export class ProcessedSearchByCountyEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rpsco_';
    static uploaddir: string = 'rets-processed-search-by-county';
    
    static metaname: string = (ProcessedSearchByCountyEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide processed search by county.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${ProcessedSearchByCountyEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.mls_num.desc})
    @Column({
      name: `${ProcessedSearchByCountyEntity.colprefix}mls_num`, 
      type: 'varchar', 
      length: meta.mls_num.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
      comment: `mls_num of rets listing`
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByCountyEntity.colprefix}mls_num`, { unique: false })
    @MaxLength(meta.mls_num.validation.maxLength as number, {message: meta.mls_num.validation.maxLengthMsg})
    mls_num?: string;

    @Field(() => String, {nullable: true, description: meta.county.desc})
    @Column({
      name: `${ProcessedSearchByCountyEntity.colprefix}county`, 
      type: 'varchar', 
      length: meta.county.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByCountyEntity.colprefix}county`, { unique: false })
    @MaxLength(meta.county.validation.maxLength as number, {message: meta.county.validation.maxLengthMsg})
    county?: string;

    @Field(() => String, {nullable: true, description: meta.city.desc})
    @Column({
      name: `${ProcessedSearchByCountyEntity.colprefix}city`, 
      type: 'varchar', 
      length: meta.city.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByCountyEntity.colprefix}city`, { unique: false })
    @MaxLength(meta.city.validation.maxLength as number, {message: meta.city.validation.maxLengthMsg})
    city?: string;

    @Field(() => String, {nullable: true, description: meta.state.desc})
    @Column({
      name: `${ProcessedSearchByCountyEntity.colprefix}state`, 
      type: 'varchar', 
      length: meta.state.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByCountyEntity.colprefix}state`, { unique: false })
    @MaxLength(meta.state.validation.maxLength as number, {message: meta.state.validation.maxLengthMsg})
    state?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${ProcessedSearchByCountyEntity.colprefix}created`,
      update: false,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByCountyEntity.colprefix}created`, { unique: false })
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${ProcessedSearchByCountyEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${ProcessedSearchByCountyEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${ProcessedSearchByCountyEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${ProcessedSearchByCountyEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;

     // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

  
      // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
     
        
}

 
