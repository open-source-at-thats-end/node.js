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
  media_type?: any;
  media_item_number?: any;
  media_display_order?: any;
  media_caption?: any;
  media_description?: any;
  media_url?: any;
  media_last_update?: any;
  created?: any;
  updated?: any;
  deleted?: any;
*/

const  RetsListingPhotosEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the listing office type, auto generated.',
        validation: {} 
    },
    mlsp_id: {
        desc: 'MLS Service Provider ID',
        validation:{}
    },
    mls_num: {
        desc: 'MLS Number',
        validation:{
          maxLength:255,
          maxLengthMsg: "Maximum length of MLS Number is 255 characters.",
        }
    },
    listing_key: {
      desc: 'Listing Key',
      validation:{
          maxLength:32,
          maxLengthMsg: "Maximum length of Listing Key is 32 characters.",
      }
    },
    media_type: {
      desc: 'Media Type',
      validation:{
          maxLength:20,
          maxLengthMsg: "Maximum length of Media Type is 20 characters.",
      }
    },
    media_item_number: {
      desc: 'Media Item Number',
      validation:{
          maxLength:20,
          maxLengthMsg: "Maximum length of Media Item Number is 20 characters.",
      }
    },
    media_display_order: {
      desc: 'Media Display Order',
      validation:{
      }
    },
    media_caption: {
      desc: 'Media Caption',
      validation:{
          maxLength:50,
          maxLengthMsg: "Maximum length of Media Caption is 50 characters.",
      }
    },
    media_description: {
      desc: 'Media Description',
      validation:{
      }
    },
    media_url: {
      desc: 'Media Url',
      validation:{
      }
    },
    media_last_update: {
      desc: 'Media Last Update',
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

const  RetsListingPhotosVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the rets listing photos.`,
    validation: {}
  },
}

export const RetsListingPhotosEntityMeta = {...RetsListingPhotosEntityFieldMeta, ...RetsListingPhotosVirtualFieldMeta};
const meta = RetsListingPhotosEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_listing_photos',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}rlp_mlsp_id`,[`mlsp_id`, `mls_num`])
export class RetsListingPhotosEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rlp_';
    static uploaddir: string = 'listing-photos';
    
    static metaname: string = (RetsListingPhotosEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide photos of rets listing.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${RetsListingPhotosEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${RetsListingPhotosEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true, 
      comment: `FK(rets_mls_provider => mlsp_id)`
    })
    @IsInt()
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.mls_num.desc})
    @Column({
      name: `${RetsListingPhotosEntity.colprefix}mls_num`, 
      type: 'varchar', 
      length: meta.mls_num.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
      comment: `FK(rets_listing => mls_num)`,
    })
    @IsNotEmpty()
    @MaxLength(meta.mls_num.validation.maxLength as number, {message: meta.mls_num.validation.maxLengthMsg})
    mls_num?: string;

    @Field(() => String, {nullable: true, description: meta.listing_key.desc})
    @Column({
      name: `${RetsListingPhotosEntity.colprefix}listing_key`, 
      type: 'varchar', 
      length: meta.listing_key.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingPhotosEntity.colprefix}listing_key`, { unique: false })
    @IsNotEmpty()
    @MaxLength(meta.listing_key.validation.maxLength as number, {message: meta.listing_key.validation.maxLengthMsg})
    listing_key?: string;

    @Field(() => String, {nullable: true, description: meta.media_type.desc})
    @Column({
      name: `${RetsListingPhotosEntity.colprefix}media_type`, 
      type: 'varchar', 
      nullable: true,
      length: meta.media_type.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.media_type.validation.maxLength as number, {message: meta.media_type.validation.maxLengthMsg})
    media_type?: string;

    @Field(() => String, {nullable: true, description: meta.media_item_number.desc})
    @Column({
      name: `${RetsListingPhotosEntity.colprefix}media_item_number`, 
      type: 'varchar', 
      nullable: true,
      length: meta.media_item_number.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.media_item_number.validation.maxLength as number, {message: meta.media_item_number.validation.maxLengthMsg})
    media_item_number?: string;

    @Field(() => Int, {nullable: true, description: meta.media_display_order.desc})
    @Column({
      name: `${RetsListingPhotosEntity.colprefix}media_display_order`, 
      type: 'int', 
      nullable: true,
      unsigned:true
    })
    @IsOptional()
    @IsInt()
    media_display_order?: number;

    @Field(() => String, {nullable: true, description: meta.media_caption.desc})
    @Column({
      name: `${RetsListingPhotosEntity.colprefix}media_caption`, 
      type: 'varchar', 
      nullable: true,
      length: meta.media_caption.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.media_caption.validation.maxLength as number, {message: meta.media_caption.validation.maxLengthMsg})
    media_caption?: string;

    @Field(() => String, {nullable: true, description: meta.media_description.desc})
    @Column({
      name: `${RetsListingPhotosEntity.colprefix}media_description`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    media_description?: string; 

    @Field(() => String, {nullable: true, description: meta.media_url.desc})
    @Column({
      name: `${RetsListingPhotosEntity.colprefix}media_url`, 
      type: 'text', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    media_url?: string; 

    @Field(() => DateTime, {nullable: true, description: meta.media_last_update.desc})
    @Column({
      name: `${RetsListingPhotosEntity.colprefix}media_last_update`, 
      type: 'date', 
      nullable: true, 
    })
    @Index(`${InIndexPrefix}${RetsListingPhotosEntity.colprefix}media_last_update`, { unique: false })
    @IsOptional()
    media_last_update?: Date; 

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${RetsListingPhotosEntity.colprefix}created`,
      update: false,
    })
    @Index(`${InIndexPrefix}${RetsListingPhotosEntity.colprefix}created`, { unique: false })
    @IsOptional()
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${RetsListingPhotosEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${RetsListingPhotosEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${RetsListingPhotosEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${RetsListingPhotosEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;
    
    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████
    
    @Field(() => RetsMlsProviderEntity, {nullable: true, description: meta.fr_mlsp_id.desc})
    @ManyToOne(() => RetsMlsProviderEntity, (entity: RetsMlsProviderEntity) => entity.fr_rets_list_photos_id)
    @JoinColumn({ name: `${RetsListingPhotosEntity.colprefix}mlsp_id` })
    fr_mlsp_id?: RetsMlsProviderEntity;
    
}
