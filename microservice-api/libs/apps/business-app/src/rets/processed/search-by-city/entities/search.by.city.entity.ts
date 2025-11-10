import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, ResolveGraphFieldRelation } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, OneToMany, OneToOne, JoinColumn, PrimaryGeneratedColumn, Unique, UpdateDateColumn, ManyToOne } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { RetsMlsProviderEntity } from "../../../listings/mls-provider/entities/mls.provider.entity";

const  ProcessedSearchByCityEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the processed search by address, auto generated.',
        validation: {} 
    },
    mlsp_id: {
        desc: 'MLSP ID',
        validation:{}
    },
    mls_num: {
      desc: 'Mls num of the processed search by address',
      validation:{
        maxLength:16,
        maxLengthMsg: "Maximum length of mls num is 16 characters.",
      }
    },
    property_type: {
      desc: 'Property type of the processed search by address',
      validation:{
        maxLength:32,
        maxLengthMsg: "Maximum length of property type is 32 characters.",
      }
    },
    city_state: {
      desc: 'City state of the processed search by address',
      validation:{
        maxLength:128,
        maxLengthMsg: "Maximum length of city state is 128 characters.",
      }
    },
    city: {
      desc: 'City of the processed search by address',
      validation:{
        maxLength:64,
        maxLengthMsg: "Maximum length of city is 64 characters.",
      }
    },
    state: {
      desc: 'State of the processed search by address',
      validation:{
        maxLength:64,
        maxLengthMsg: "Maximum length of state is 64 characters.",
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

const  ProcessedSearchByCityVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the processed search by city.`,
    validation: {}
  }
}

export const ProcessedSearchByCityEntityMeta = {...ProcessedSearchByCityEntityFieldMeta, ...ProcessedSearchByCityVirtualFieldMeta};
const meta = ProcessedSearchByCityEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_processed_search_by_city',
  engine: 'InnoDB',
})
export class ProcessedSearchByCityEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rpscity_';
    static uploaddir: string = 'rets-processed-search-by-city';
    
    static metaname: string = (ProcessedSearchByCityEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide processed search by city.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${ProcessedSearchByCityEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${ProcessedSearchByCityEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true,
      comment: `FK(rets_mls_provider => mlsp_id)`
    })
    @IsInt()
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByCityEntity.colprefix}mlsp_id`, { unique: false })
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.mls_num.desc})
    @Column({
      name: `${ProcessedSearchByCityEntity.colprefix}mls_num`, 
      type: 'varchar', 
      length: meta.mls_num.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
      comment: `mls_num of rets listing`
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByCityEntity.colprefix}mls_num`, { unique: false })
    @MaxLength(meta.mls_num.validation.maxLength as number, {message: meta.mls_num.validation.maxLengthMsg})
    mls_num?: string;

    @Field(() => String, {nullable: true, description: meta.property_type.desc})
    @Column({
      name: `${ProcessedSearchByCityEntity.colprefix}property_type`, 
      type: 'varchar', 
      length: meta.property_type.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByCityEntity.colprefix}property_type`, { unique: false })
    @MaxLength(meta.property_type.validation.maxLength as number, {message: meta.property_type.validation.maxLengthMsg})
    property_type?: string;

    @Field(() => String, {nullable: true, description: meta.city_state.desc})
    @Column({
      name: `${ProcessedSearchByCityEntity.colprefix}city_state`, 
      type: 'varchar', 
      length: meta.city_state.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByCityEntity.colprefix}city_state`, { unique: false })
    @MaxLength(meta.city_state.validation.maxLength as number, {message: meta.city_state.validation.maxLengthMsg})
    city_state?: string;

    @Field(() => String, {nullable: true, description: meta.city.desc})
    @Column({
      name: `${ProcessedSearchByCityEntity.colprefix}city`, 
      type: 'varchar', 
      length: meta.city.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByCityEntity.colprefix}city`, { unique: false })
    @MaxLength(meta.city.validation.maxLength as number, {message: meta.city.validation.maxLengthMsg})
    city?: string;

    @Field(() => String, {nullable: true, description: meta.state.desc})
    @Column({
      name: `${ProcessedSearchByCityEntity.colprefix}state`, 
      type: 'varchar', 
      length: meta.state.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByCityEntity.colprefix}state`, { unique: false })
    @MaxLength(meta.state.validation.maxLength as number, {message: meta.state.validation.maxLengthMsg})
    state?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${ProcessedSearchByCityEntity.colprefix}created`,
      update: false,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByCityEntity.colprefix}created`, { unique: false })
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${ProcessedSearchByCityEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${ProcessedSearchByCityEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${ProcessedSearchByCityEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time: yes | null: no`,
    })
    @Index(`${InIndexPrefix}${ProcessedSearchByCityEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => RetsMlsProviderEntity, {nullable: true, description: meta.fr_mlsp_id.desc})
    @ManyToOne(() => RetsMlsProviderEntity, (entity: RetsMlsProviderEntity) => entity.fr_search_by_city_mlsp_id)
    @JoinColumn({ name: `${ProcessedSearchByCityEntity.colprefix}mlsp_id` })
    fr_mlsp_id?: RetsMlsProviderEntity;

  
    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
     
        
}

 
