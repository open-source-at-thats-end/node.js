import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { RetsMlsProviderEntity } from "../../mls-provider/entities/mls.provider.entity";


/*
  id?: any;
  mlsp_id?: any;
  listing_key?: any;
  floor_covering?: any;
  input_entry_order?: any;
  matrix_modified_date?: any;
  room_comments?: any;
  room_depth?: any;
  room_dimensions?: any;
  room_level?: any;
  room_type?: any;
  room_width?: any;
  created?: any;
  updated?: any;
  deleted?: any;
*/

const  RetsListingRoomEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the listing office type, auto generated.',
        validation: {} 
    },
    mlsp_id: {
        desc: 'MLS Service Provider ID',
        validation:{}
    },
    listing_key: {
      desc: 'Listing Key',
      validation:{
          maxLength:20,
          maxLengthMsg: "Maximum length of Listing Key is 20 characters.",
      }
    },
    floor_covering: {
      desc: 'Floor Covering',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Floor Covering is 64 characters.",
      }
    },
    input_entry_order: {
      desc: 'Input Entry Order',
      validation:{
          maxLength:64,
          maxLengthMsg: "Maximum length of Input Entry Order is 64 characters.",
      }
    },
    matrix_modified_date: {
      desc: 'Matrix Modified Dater',
      validation:{
      }
    },
    room_comments: {
      desc: 'Room Comments',
      validation:{
      }
    },
    room_depth: {
      desc: 'Room Depth',
      validation:{
          maxLength:8,
          maxLengthMsg: "Maximum length of Room Depth is 8 characters.",
      }
    },
    room_dimensions: {
      desc: 'Room Dimensions',
      validation:{
          maxLength:20,
          maxLengthMsg: "Maximum length of Room Dimensions is 20 characters.",
      }
    },
    room_level: {
      desc: 'Room Level',
      validation:{
          maxLength:10,
          maxLengthMsg: "Maximum length of Room Level is 10 characters.",
      }
    },
    room_type: {
      desc: 'Room Type',
      validation:{
          maxLength:25,
          maxLengthMsg: "Maximum length of Room Type is 25 characters.",
      }
    },
    room_width: {
      desc: 'Room Width',
      validation:{
          maxLength:8,
          maxLengthMsg: "Maximum length of Room Width is 8 characters.",
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

const  RetsListingRoomVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the rets listing room.`,
    validation: {}
  },
}

export const RetsListingRoomEntityMeta = {...RetsListingRoomEntityFieldMeta, ...RetsListingRoomVirtualFieldMeta};
const meta = RetsListingRoomEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_listing_room',
  engine: 'InnoDB',
})
@Unique([`mlsp_id`,`listing_key`])
@Unique(`${UnIndexPrefix}rlr_mlsp_id`,[`mlsp_id`, `listing_key`])
export class RetsListingRoomEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rlr_';
    static uploaddir: string = 'listing-room';
    
    static metaname: string = (RetsListingRoomEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide room of rets listing.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${RetsListingRoomEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${RetsListingRoomEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true, 
      comment: `FK(rets_mls_provider => mlsp_id)`
    })
    @IsInt()
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.listing_key.desc})
    @Column({
      name: `${RetsListingRoomEntity.colprefix}listing_key`, 
      type: 'varchar', 
      length: meta.listing_key.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
      comment: `FK(rets_listing => mls_num)`,
    })
    @IsNotEmpty()
    @MaxLength(meta.listing_key.validation.maxLength as number, {message: meta.listing_key.validation.maxLengthMsg})
    listing_key?: string;

    @Field(() => String, {nullable: true, description: meta.floor_covering.desc})
    @Column({
      name: `${RetsListingRoomEntity.colprefix}floor_covering`, 
      type: 'varchar', 
      nullable: true,
      length: meta.floor_covering.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.floor_covering.validation.maxLength as number, {message: meta.floor_covering.validation.maxLengthMsg})
    floor_covering?: string;

    @Field(() => String, {nullable: true, description: meta.input_entry_order.desc})
    @Column({
      name: `${RetsListingRoomEntity.colprefix}input_entry_order`, 
      type: 'varchar', 
      nullable: true,
      length: meta.input_entry_order.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.input_entry_order.validation.maxLength as number, {message: meta.input_entry_order.validation.maxLengthMsg})
    input_entry_order?: string;

    @Field(() => DateTime, {nullable: true, description: meta.matrix_modified_date.desc})
    @Column({
      name: `${RetsListingRoomEntity.colprefix}matrix_modified_date`, 
      type: 'datetime', 
      nullable: true,
    })
    @IsOptional()
    matrix_modified_date?: Date;

    @Field(() => String, {nullable: true, description: meta.room_comments.desc})
    @Column({
      name: `${RetsListingRoomEntity.colprefix}room_comments`, 
      type: 'varchar', 
      nullable: true,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    room_comments?: string;

    @Field(() => String, {nullable: true, description: meta.room_depth.desc})
    @Column({
      name: `${RetsListingRoomEntity.colprefix}room_depth`, 
      type: 'varchar', 
      nullable: true,
      length: meta.room_depth.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.room_depth.validation.maxLength as number, {message: meta.room_depth.validation.maxLengthMsg})
    room_depth?: string;

    @Field(() => String, {nullable: true, description: meta.room_dimensions.desc})
    @Column({
      name: `${RetsListingRoomEntity.colprefix}room_dimensions`, 
      type: 'varchar', 
      nullable: true,
      length: meta.room_dimensions.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.room_dimensions.validation.maxLength as number, {message: meta.room_dimensions.validation.maxLengthMsg})
    room_dimensions?: string; 

    @Field(() => String, {nullable: true, description: meta.room_level.desc})
    @Column({
      name: `${RetsListingRoomEntity.colprefix}room_level`, 
      type: 'varchar', 
      nullable: true,
      length: meta.room_level.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.room_level.validation.maxLength as number, {message: meta.room_level.validation.maxLengthMsg})
    room_level?: string; 

    @Field(() => String, {nullable: true, description: meta.room_type.desc})
    @Column({
      name: `${RetsListingRoomEntity.colprefix}room_type`, 
      type: 'varchar', 
      nullable: true, 
      length: meta.room_type.validation.maxLength,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.room_type.validation.maxLength as number, {message: meta.room_type.validation.maxLengthMsg})
    room_type?: string; 

    @Field(() => String, {nullable: true, description: meta.room_width.desc})
    @Column({
      name: `${RetsListingRoomEntity.colprefix}room_width`, 
      type: 'varchar', 
      nullable: true, 
      length: meta.room_width.validation.maxLength,
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.room_width.validation.maxLength as number, {message: meta.room_width.validation.maxLengthMsg})
    room_width?: string; 

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${RetsListingRoomEntity.colprefix}created`,
      update: false,
    })
    @Index(`${InIndexPrefix}${RetsListingRoomEntity.colprefix}created`, { unique: false })
    @IsOptional()
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${RetsListingRoomEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${RetsListingRoomEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${RetsListingRoomEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${RetsListingRoomEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;

    
    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => RetsMlsProviderEntity, {nullable: true, description: meta.fr_mlsp_id.desc})
    @ManyToOne(() => RetsMlsProviderEntity, (entity: RetsMlsProviderEntity) => entity.fr_rets_list_room_id)
    @JoinColumn({ name: `${RetsListingRoomEntity.colprefix}mlsp_id` })
    fr_mlsp_id?: RetsMlsProviderEntity;
    
}
