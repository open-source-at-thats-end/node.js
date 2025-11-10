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
  unit_type?: any;
  actual_rent?: any;
  baths?: any;
  beds?: any;
  garage_spaces?: any;
  pro_forma_rent?: any;
  created?: any;
  updated?: any;
  deleted?: any;
*/

const  RetsListingUnitEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the listing office type, auto generated.',
        validation: {} 
    },
    mlsp_id: {
        desc: 'MLS Service Provider ID',
        validation:{}
    },
    mls_num: {
      desc: 'Mls Num',
      validation:{
          maxLength:255,
          maxLengthMsg: "Maximum length of Mls Num is 255 characters.",
      }
    },
    listing_key: {
      desc: 'Listing Key',
      validation:{
          maxLength:20,
          maxLengthMsg: "Maximum length of Listing Key is 20 characters.",
      }
    },
    unit_type: {
      desc: 'Unit Type',
      validation:{
        maxLength:20,
        maxLengthMsg: "Maximum length of unit type is 20 characters.",
      }
    },
    actual_rent: {
      desc: 'Actual Rent',
      validation:{
      }
    },
    baths: {
      desc: 'Baths',
      validation:{}
    },
    beds: {
      desc: 'Beds',
      validation:{}
    },
    garage_spaces: {
      desc: 'Garage Spaces',
      validation:{
      }
    },
    pro_forma_rent: {
      desc: 'Pro Forma Rent',
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

const  RetsListingUnitVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the rets listing unit.`,
    validation: {}
  },
}

export const RetsListingUnitEntityMeta = {...RetsListingUnitEntityFieldMeta, ...RetsListingUnitVirtualFieldMeta};
const meta = RetsListingUnitEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_listing_unit',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}rlu_mlsp_id`,[`mlsp_id`, `mls_num`])
export class RetsListingUnitEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rlu_';
    static uploaddir: string = 'listing-unit';
    
    static metaname: string = (RetsListingUnitEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide unit of rets listing.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${RetsListingUnitEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${RetsListingUnitEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true, 
      comment: `FK(rets_mls_provider => mlsp_id)`
    })
    @IsInt()
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.mls_num.desc})
    @Column({
      name: `${RetsListingUnitEntity.colprefix}mls_num`, 
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
      name: `${RetsListingUnitEntity.colprefix}listing_key`, 
      type: 'varchar', 
      length: meta.listing_key.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingUnitEntity.colprefix}listing_key`, { unique: false })
    @IsNotEmpty()
    @MaxLength(meta.listing_key.validation.maxLength as number, {message: meta.listing_key.validation.maxLengthMsg})
    listing_key?: string;

    @Field(() => String, {nullable: true, description: meta.unit_type.desc})
    @Column({
      name: `${RetsListingUnitEntity.colprefix}unit_type`, 
      type: 'varchar', 
      length: meta.unit_type.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingUnitEntity.colprefix}unit_type`, { unique: false })
    @IsNotEmpty()
    unit_type?: string;

    @Field(() => Float, {nullable: true, description: meta.actual_rent.desc})
    @Column({
      name: `${RetsListingUnitEntity.colprefix}actual_rent`, 
      type: 'decimal', 
      nullable: true,
      precision: 12,
      scale: 8,
    })
    @Index(`${InIndexPrefix}${RetsListingUnitEntity.colprefix}actual_rent`, { unique: false })
    @IsOptional()
    actual_rent?: number;

    @Field(() => Int, {nullable: true, description: meta.baths.desc})
    @Column({
      name: `${RetsListingUnitEntity.colprefix}baths`, 
      type: 'varchar', 
      nullable: true,
    })
    @Index(`${InIndexPrefix}${RetsListingUnitEntity.colprefix}baths`, { unique: false })
    @IsOptional()
    baths?: number;

    @Field(() => Int, {nullable: true, description: meta.beds.desc})
    @Column({
      name: `${RetsListingUnitEntity.colprefix}beds`, 
      type: 'varchar', 
      nullable: true,
    })
    @Index(`${InIndexPrefix}${RetsListingUnitEntity.colprefix}beds`, { unique: false })
    @IsOptional()
    beds?: number;

    @Field(() => Float, {nullable: true, description: meta.garage_spaces.desc})
    @Column({
      name: `${RetsListingUnitEntity.colprefix}garage_spaces`, 
      type: 'decimal', 
      nullable: true,
      precision: 12,
      scale: 8,
    })
    @IsOptional()
    garage_spaces?: number;

    @Field(() => Int, {nullable: true, description: meta.pro_forma_rent.desc})
    @Column({
      name: `${RetsListingUnitEntity.colprefix}pro_forma_rent`, 
      type: 'int', 
      nullable: true,
      unsigned:true
    })
    @IsOptional()
    @IsInt()
    pro_forma_rent?: number; 

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${RetsListingUnitEntity.colprefix}created`,
      update: false,
    })
    @Index(`${InIndexPrefix}${RetsListingUnitEntity.colprefix}created`, { unique: false })
    @IsOptional()
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${RetsListingUnitEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${RetsListingUnitEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${RetsListingUnitEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${RetsListingUnitEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => RetsMlsProviderEntity, {nullable: true, description: meta.fr_mlsp_id.desc})
    @ManyToOne(() => RetsMlsProviderEntity, (entity: RetsMlsProviderEntity) => entity.fr_rets_list_unit_id)
    @JoinColumn({ name: `${RetsListingUnitEntity.colprefix}mlsp_id` })
    fr_mlsp_id?: RetsMlsProviderEntity;
}
