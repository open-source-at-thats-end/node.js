import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { RetsMlsProviderEntity } from "../../mls-provider/entities/mls.provider.entity";


/*
 	id?: any;
  office_id?: any;
  mlsp_id?: any;
  office_name?: any;
  office_email?: any;
  office_phone?: any;
  office_last_updated_date?: any;
  created?: any;
  updated?: any;
  deleted?: any;
*/

const  RetsListingOfficeEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the listing office type, auto generated.',
        validation: {} 
    },
    office_id: {
      desc: 'Office ID of Listing Agent',
      validation:{
          maxLength:25,
          maxLengthMsg: "Maximum length of  is 25 characters.",
      }
    },
    mlsp_id: {
        desc: 'MLS Service Provider ID',
        validation:{}
    },
    office_name: {
        desc: 'Office Name',
        validation:{
            maxLength:255,
            maxLengthMsg: "Maximum length of Office Name is 255 characters.",
        }
    },
    office_email: {
      desc: 'Office Email',
      validation:{
          maxLength:80,
          maxLengthMsg: "Maximum length of Office Email is 80 characters.",
      }
    },
    office_phone: {
      desc: 'Office Phone',
      validation:{
          maxLength:16,
          maxLengthMsg: "Maximum length of Office Phone is 16 characters.",
      }
    },
    office_last_updated_date: {
      desc: 'Office Last Updated Date',
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

const  RetsListingOfficeVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the rets listing office.`,
    validation: {}
  },
}

export const RetsListingOfficeEntityMeta = {...RetsListingOfficeEntityFieldMeta, ...RetsListingOfficeVirtualFieldMeta};
const meta = RetsListingOfficeEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_listing_office',
  engine: 'InnoDB',
})

@Unique(`${UnIndexPrefix}rlo_office_id`,[`office_id`, `mlsp_id`])
export class RetsListingOfficeEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rlo_';
    static uploaddir: string = 'listing-office';
    
    static metaname: string = (RetsListingOfficeEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides office details of rets listing.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${RetsListingOfficeEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.office_id.desc})
    @Column({
      name: `${RetsListingOfficeEntity.colprefix}office_id`, 
      type: 'varchar', 
      length: meta.office_id.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
      comment: `FK(rets_listing => office_id)`,
      nullable: true,
    })
    @IsOptional()
    @MaxLength(meta.office_id.validation.maxLength as number, {message: meta.office_id.validation.maxLengthMsg})
    office_id?: string;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${RetsListingOfficeEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true, 
      comment: `FK(rets_mls_provider => mlsp_id)`
    })
    @IsInt()
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.office_name.desc})
    @Column({
      name: `${RetsListingOfficeEntity.colprefix}office_name`, 
      type: 'varchar', 
      length: meta.office_name.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingOfficeEntity.colprefix}office_name`, { unique: false })
    @IsNotEmpty()
    @MaxLength(meta.office_name.validation.maxLength as number, {message: meta.office_name.validation.maxLengthMsg})
    office_name?: string;

    @Field(() => String, {nullable: true, description: meta.office_email.desc})
    @Column({
      name: `${RetsListingOfficeEntity.colprefix}office_email`, 
      type: 'varchar', 
      nullable: true,
      length: meta.office_email.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingOfficeEntity.colprefix}office_email`, { unique: false })
    @IsOptional()
    @MaxLength(meta.office_email.validation.maxLength as number, {message: meta.office_email.validation.maxLengthMsg})
    office_email?: string;

    @Field(() => String, {nullable: true, description: meta.office_phone.desc})
    @Column({
      name: `${RetsListingOfficeEntity.colprefix}office_phone`, 
      type: 'varchar', 
      nullable: true,
      length: meta.office_phone.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingOfficeEntity.colprefix}office_phone`, { unique: false })
    @IsOptional()
    @MaxLength(meta.office_phone.validation.maxLength as number, {message: meta.office_phone.validation.maxLengthMsg})
    office_phone?: string;

    @Field(() => DateTime, {nullable: true, description: meta.office_last_updated_date.desc})
    @Column({
      name: `${RetsListingOfficeEntity.colprefix}office_last_updated_date`, 
      type: 'datetime', 
      nullable: true,
    })
    @Index(`${InIndexPrefix}${RetsListingOfficeEntity.colprefix}office_last_updated_date`, { unique: false })
    @IsOptional()
    office_last_updated_date?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${RetsListingOfficeEntity.colprefix}created`,
      update: false,
    })
    @Index(`${InIndexPrefix}${RetsListingOfficeEntity.colprefix}created`, { unique: false })
    @IsOptional()
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${RetsListingOfficeEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${RetsListingOfficeEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${RetsListingOfficeEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time => Yes | null: No`,
    })
    @Index(`${InIndexPrefix}${RetsListingOfficeEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => RetsMlsProviderEntity, {nullable: true, description: meta.fr_mlsp_id.desc})
    @ManyToOne(() => RetsMlsProviderEntity, (entity: RetsMlsProviderEntity) => entity.fr_rets_list_office_id)
    @JoinColumn({ name: `${RetsListingOfficeEntity.colprefix}mlsp_id` })
    fr_mlsp_id?: RetsMlsProviderEntity;
}
