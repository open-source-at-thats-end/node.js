import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { RetsMlsProviderEntity } from "../../mls-provider/entities/mls.provider.entity";


/*
id?: any;
mlsp_id?: any;
mls_num?: any;
oh_begins?: any;
oh_close?: any;
oh_display_time?: any;
oh_date?: any;
created?: any;
updated?: any;
deleted?: any;
*/

const  RetsListingOpenHouseEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the market type, auto generated.',
        validation: {} 
    },
    mlsp_id: {
        desc: 'MLS Service Provider ID',
        validation:{}
    },
    mls_num: {
        desc: 'Unique ID of Listing',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of mls_num is 255 characters.",
        }
    },
    oh_begins: {
        desc: 'Open house Start Time',
        validation:{

        }
    },
    oh_close: {
        desc: 'Open house Close Time',
        validation:{
          
        }
    },
    oh_display_time: {
        desc: 'Open house Display Time',
        validation:{
            
        }
    },
    oh_date: {
        desc: 'Open house Date',        
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

const  RetsListingOpenHouseVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the rets listing open house.`,
    validation: {}
  },
}

export const RetsListingOpenHouseEntityMeta = {...RetsListingOpenHouseEntityFieldMeta, ...RetsListingOpenHouseVirtualFieldMeta};
const meta = RetsListingOpenHouseEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_listing_open_house',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}rloh_mlsp_id`,[`mlsp_id`, `mls_num`])
export class RetsListingOpenHouseEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rloh_';
    static uploaddir: string = 'listing-open-house';
    
    static metaname: string = (RetsListingOpenHouseEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides open house details of rets listing.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${RetsListingOpenHouseEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${RetsListingOpenHouseEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true, 
      comment: `FK(_rets_mls_provider => mlsp_id)`,
    })
    @IsInt()
    @IsNotEmpty()
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.mls_num.desc})
    @Column({
      name: `${RetsListingOpenHouseEntity.colprefix}mls_num`, 
      type: 'varchar', 
      length: meta.mls_num.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
      comment: `FK(_rets_listing => mls_num)`,
    })
    @IsNotEmpty()
    @MaxLength(meta.mls_num.validation.maxLength as number, {message: meta.mls_num.validation.maxLengthMsg})
    mls_num?: string;

    @Field(() => DateTime, {nullable: true, description: meta.oh_begins.desc})
    @Column({
      name: `${RetsListingOpenHouseEntity.colprefix}oh_begins`, 
      type: 'datetime', 
      nullable: true
    })
    @Index(`${InIndexPrefix}${RetsListingOpenHouseEntity.colprefix}oh_begins`)
    @IsNotEmpty()
    oh_begins?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.oh_close.desc})
    @Column({
      name: `${RetsListingOpenHouseEntity.colprefix}oh_close`, 
      type: 'datetime', 
      nullable: true
    })
    @Index(`${InIndexPrefix}${RetsListingOpenHouseEntity.colprefix}oh_close`)
    @IsNotEmpty()
    oh_close?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.oh_display_time.desc})
    @Column({
      name: `${RetsListingOpenHouseEntity.colprefix}oh_display_time`, 
      type: 'datetime', 
      nullable: true
    })
    oh_display_time?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.oh_date.desc})
    @Column({
      name: `${RetsListingOpenHouseEntity.colprefix}oh_date`, 
      type: 'date', 
      nullable: true
    })
    @Index(`${InIndexPrefix}${RetsListingOpenHouseEntity.colprefix}oh_date`)
    oh_date?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${RetsListingOpenHouseEntity.colprefix}created`,
      update: false,
    })
    @Index(`${InIndexPrefix}${RetsListingOpenHouseEntity.colprefix}created`, { unique: false })
    @IsOptional()
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${RetsListingOpenHouseEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${RetsListingOpenHouseEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${RetsListingOpenHouseEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time: yes | null: no`,
    })
    @Index(`${InIndexPrefix}${RetsListingOpenHouseEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => RetsMlsProviderEntity, {nullable: true, description: meta.fr_mlsp_id.desc})
    @ManyToOne(() => RetsMlsProviderEntity, (entity: RetsMlsProviderEntity) => entity.fr_rets_list_open_house_id)
    @JoinColumn({ name: `${RetsListingOpenHouseEntity.colprefix}mlsp_id` })
    fr_mlsp_id?: RetsMlsProviderEntity;
}
