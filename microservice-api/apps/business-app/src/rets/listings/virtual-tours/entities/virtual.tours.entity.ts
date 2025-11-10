import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { RetsMlsProviderEntity } from "../../mls-provider/entities/mls.provider.entity";


/*
  id?: any;
  mlsp_id?: any;
  mls_num?: any;
  listing_key?: any;
  tour_url?: any;
  tour_last_modified?: any;
  created?: any;
  updated?: any;
  deleted?: any;
*/

const  RetsListingVirtualToursEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the listing office type, auto generated.',
        validation: {} 
    },
    mlsp_id: {
        desc: 'MLS Service Provider ID',
        validation:{}
    },
    mls_num: {
      desc: 'Mls Number',
      validation:{
          maxLength:255,
          maxLengthMsg: "Maximum length of Mls Number is 255 characters.",
      }
    },
    listing_key: {
      desc: 'Listing Key',
      validation:{
          maxLength:20,
          maxLengthMsg: "Maximum length of Listing Key is 20 characters.",
      }
    },
    tour_url: {
      desc: 'Tour Url',
      validation:{
          maxLength:255,
          maxLengthMsg: "Maximum length of Tour Url is 255 characters.",
      }
    },
    tour_last_modified: {
      desc: 'Tour Last Modified',
      validation:{
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

const  RetsListingVirtualToursVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the rets listing virtual tours.`,
    validation: {}
  },
}

export const RetsListingVirtualToursEntityMeta = {...RetsListingVirtualToursEntityFieldMeta, ...RetsListingVirtualToursVirtualFieldMeta};
const meta = RetsListingVirtualToursEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_listing_virtual_tours',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}rlvt_mlsp_id`,[`mlsp_id`, `mls_num`])
export class RetsListingVirtualToursEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rlvt_';
    static uploaddir: string = 'listing-virtual-tours';
    
    static metaname: string = (RetsListingVirtualToursEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide virtual tours of rets listing.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${RetsListingVirtualToursEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${RetsListingVirtualToursEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true, 
      comment: `FK(_rets_mls_provider => mlsp_id)`
    })
    @IsInt()
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.mls_num.desc})
    @Column({
      name: `${RetsListingVirtualToursEntity.colprefix}mls_num`, 
      type: 'varchar', 
      length: meta.mls_num.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
      comment: `FK(_rets_listing => mls_num)`,
    })
    @IsNotEmpty()
    @MaxLength(meta.mls_num.validation.maxLength as number, {message: meta.mls_num.validation.maxLengthMsg})
    mls_num?: string;

    @Field(() => String, {nullable: true, description: meta.listing_key.desc})
    @Column({
      name: `${RetsListingVirtualToursEntity.colprefix}listing_key`, 
      type: 'varchar', 
      length: meta.listing_key.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingVirtualToursEntity.colprefix}listing_key`, { unique: false })
    @IsNotEmpty()
    @MaxLength(meta.listing_key.validation.maxLength as number, {message: meta.listing_key.validation.maxLengthMsg})
    listing_key?: string;

    @Field(() => String, {nullable: true, description: meta.tour_url.desc})
    @Column({
      name: `${RetsListingVirtualToursEntity.colprefix}tour_url`, 
      type: 'varchar', 
      length: meta.tour_url.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingVirtualToursEntity.colprefix}tour_url`, { unique: false })
    @IsNotEmpty()
    @MaxLength(meta.tour_url.validation.maxLength as number, {message: meta.tour_url.validation.maxLengthMsg})
    tour_url?: string;

    @Field(() => DateTime, {nullable: true, description: meta.tour_last_modified.desc})
    @Column({
      name: `${RetsListingVirtualToursEntity.colprefix}tour_last_modified`, 
      type: 'date', 
    })
    @Index(`${InIndexPrefix}${RetsListingVirtualToursEntity.colprefix}tour_last_modified`, { unique: false })
    @IsNotEmpty()
    tour_last_modified?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${RetsListingVirtualToursEntity.colprefix}created`,
      update: false,
    })
    @Index(`${InIndexPrefix}${RetsListingVirtualToursEntity.colprefix}created`, { unique: false })
    @IsOptional()
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${RetsListingVirtualToursEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${RetsListingVirtualToursEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${RetsListingVirtualToursEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time: yes | null: no`,
    })
    @Index(`${InIndexPrefix}${RetsListingVirtualToursEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => RetsMlsProviderEntity, {nullable: true, description: meta.fr_mlsp_id.desc})
    @ManyToOne(() => RetsMlsProviderEntity, (entity: RetsMlsProviderEntity) => entity.fr_rets_list_virtual_tours_id)
    @JoinColumn({ name: `${RetsListingVirtualToursEntity.colprefix}mlsp_id` })
    fr_mlsp_id?: RetsMlsProviderEntity;
}
