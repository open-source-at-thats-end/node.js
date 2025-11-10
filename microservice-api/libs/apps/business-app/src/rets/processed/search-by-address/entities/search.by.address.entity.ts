import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix } from "@libs/library-app";
import { IsNotEmpty, MaxLength, IsInt, IsOptional } from "class-validator";
import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn, Index, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, ManyToOne} from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { RetsMlsProviderEntity } from "../../../listings/mls-provider/entities/mls.provider.entity";

const  ProcessedSearchByAddressEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

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
    property_status: {
      desc: 'Property status of the processed search by address',
      validation:{
        maxLength:10,
        maxLengthMsg: "Maximum length of property status is 10 characters.",
      }
    },
    address: {
      desc: 'Address of the processed search by address',
      validation:{
        maxLength:128,
        maxLengthMsg: "Maximum length of address is 128 characters.",
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

const  ProcessedSearchByAddressVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the user favourite property.`,
    validation: {}
  }
}

export const ProcessedSearchByAddressEntityMeta = {...ProcessedSearchByAddressEntityFieldMeta, ...ProcessedSearchByAddressVirtualFieldMeta};
const meta = ProcessedSearchByAddressEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_processed_search_by_address',
  engine: 'InnoDB',
})
export class ProcessedSearchByAddressEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rpsaddr_';
    static uploaddir: string = 'rets-processed-search-by-address';
    
    static metaname: string = (ProcessedSearchByAddressEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provide processed search by address.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${ProcessedSearchByAddressEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${ProcessedSearchByAddressEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true, 
      comment: `FK(rets_mls_provider => mlsp_id)`
    })
    @IsNotEmpty()
    @IsInt()
    @Index(`${InIndexPrefix}${ProcessedSearchByAddressEntity.colprefix}mlsp_id`, { unique: false })
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.mls_num.desc})
    @Column({
      name: `${ProcessedSearchByAddressEntity.colprefix}mls_num`, 
      type: 'varchar', 
      length: meta.mls_num.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
      comment: `mls_num of rets listing`
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByAddressEntity.colprefix}mls_num`, { unique: false })
    @MaxLength(meta.mls_num.validation.maxLength as number, {message: meta.mls_num.validation.maxLengthMsg})
    mls_num?: string;

    @Field(() => String, {nullable: true, description: meta.property_type.desc})
    @Column({
      name: `${ProcessedSearchByAddressEntity.colprefix}property_type`, 
      type: 'varchar', 
      length: meta.property_type.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByAddressEntity.colprefix}property_type`, { unique: false })
    @MaxLength(meta.property_type.validation.maxLength as number, {message: meta.property_type.validation.maxLengthMsg})
    property_type?: string;

    @Field(() => String, {nullable: true, description: meta.property_status.desc})
    @Column({
      name: `${ProcessedSearchByAddressEntity.colprefix}property_status`, 
      type: 'varchar', 
      length: meta.property_status.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByAddressEntity.colprefix}property_status`, { unique: false })
    @MaxLength(meta.property_status.validation.maxLength as number, {message: meta.property_status.validation.maxLengthMsg})
    property_status?: string;

    @Field(() => String, {nullable: true, description: meta.address.desc})
    @Column({
      name: `${ProcessedSearchByAddressEntity.colprefix}address`, 
      type: 'varchar', 
      length: meta.address.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsNotEmpty()
    @Index(`${InIndexPrefix}${ProcessedSearchByAddressEntity.colprefix}address`, { unique: false })
    @MaxLength(meta.address.validation.maxLength as number, {message: meta.address.validation.maxLengthMsg})
    address?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${ProcessedSearchByAddressEntity.colprefix}created`,
      update: false,
    })
    @IsOptional()
    @Index(`${InIndexPrefix}${ProcessedSearchByAddressEntity.colprefix}created`, { unique: false })
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${ProcessedSearchByAddressEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${ProcessedSearchByAddressEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${ProcessedSearchByAddressEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${ProcessedSearchByAddressEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;

     // ████ INTERNAL RELATIONS ████████████████████████████████████████████████
     
      @Field(() => RetsMlsProviderEntity, {nullable: true, description: meta.fr_mlsp_id.desc})
      @ManyToOne(() => RetsMlsProviderEntity, (entity: RetsMlsProviderEntity) => entity.fr_search_by_addr_mlsp_id)
      @JoinColumn({ name: `${ProcessedSearchByAddressEntity.colprefix}mlsp_id` })
      fr_mlsp_id?: RetsMlsProviderEntity;


      // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████     
}

 
