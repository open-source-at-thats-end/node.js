import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional, MaxLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Double, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { RetsListingEntity } from "../../listing/entities/listing.entity";
import { RetsMlsProviderEntity } from "../../mls-provider/entities/mls.provider.entity";


/*
 id?: any;
 agent_id?: any;
 mlsp_id?: any;
 agent_name?: any;
 agent_fname?: any;
 agent_lname?: any;
 agent_email?: any;
 agent_phone?: any;
 agent_office_id?: any;
 agent_home_phone?: any;
 agent_fax?: any;
 agent_license_number?: any;
 created?: any;
 updated?: any;
 deleted?: any;
*/

const  RetsListingAgentEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

    id: {
        desc: 'Unique ID of the listing agent type, auto generated.',
        validation: {} 
    },
    agent_id: {
      desc: 'Agent ID of Listing Agent',
      validation:{
          maxLength:25,
          maxLengthMsg: "Maximum length of  is 25 characters.",
      }
    },
    mlsp_id: {
        desc: 'MLS Service Provider ID',
        validation:{}
    },
    agent_name: {
        desc: 'Agent Name',
        validation:{
            maxLength:150,
            maxLengthMsg: "Maximum length of Agent Name is 150 characters.",
        }
    },
    agent_fname: {
      desc: 'Agent Fname',
      validation:{
          maxLength:50,
          maxLengthMsg: "Maximum length of Agent Fname is 50 characters.",
      }
    },
    agent_lname: {
      desc: 'Agent Lname',
      validation:{
          maxLength:50,
          maxLengthMsg: "Maximum length of Agent Lname is 50 characters.",
      }
    },
    agent_email: {
      desc: 'Agent Email',
      validation:{
          maxLength:80,
          maxLengthMsg: "Maximum length of Agent Email is 80 characters.",
      }
    },
    agent_phone: {
      desc: 'Agent Phone',
      validation:{
          maxLength:16,
          maxLengthMsg: "Maximum length of Agent Phone is 16 characters.",
      }
    },
    agent_office_id: {
      desc: 'Agent Office Id',
      validation:{
          maxLength:25,
          maxLengthMsg: "Maximum length of Agent Office Id is 25 characters.",
      }
    },
    agent_home_phone: {
      desc: 'Agent Home Phone',
      validation:{
          maxLength:16,
          maxLengthMsg: "Maximum length of Agent Home Phone is 16 characters.",
      }
    },
    agent_fax: {
      desc: 'Agent Fax',
      validation:{
          maxLength:16,
          maxLengthMsg: "Maximum length of Agent Fax is 16 characters.",
      }
    },
    agent_license_number: {
      desc: 'Agent License Name',
      validation:{
          maxLength:50,
          maxLengthMsg: "Maximum length of Agent License Name is 50 characters.",
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

const  RetsListingAgentVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_mlsp_id: {
    desc: `MLSP ID of the rets listing agent.`,
    validation: {}
  },
}

export const RetsListingAgentEntityMeta = {...RetsListingAgentEntityFieldMeta, ...RetsListingAgentVirtualFieldMeta};
const meta = RetsListingAgentEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'rets_listing_agent',
  engine: 'InnoDB',
})

@Unique(`${UnIndexPrefix}rla_agent_id`,[`agent_id`, `mlsp_id`])
export class RetsListingAgentEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'rla_';
    static uploaddir: string = 'listing-agent';
    
    static metaname: string = (RetsListingAgentEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides agent details of rets listing.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${RetsListingAgentEntity.colprefix}id`, 
      type: 'int', 
      unsigned: true, 
      primaryKeyConstraintName: 'PRIMARY',
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.agent_id.desc})
    @Column({
      name: `${RetsListingAgentEntity.colprefix}agent_id`, 
      type: 'varchar', 
      length: meta.agent_id.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
      comment: `FK(rets_listing => agent_id)`,
      nullable: true,
    })
    @IsOptional()
    @MaxLength(meta.agent_id.validation.maxLength as number, {message: meta.agent_id.validation.maxLengthMsg})
    agent_id?: string;

    @Field(() => Int, {nullable: true, description: meta.mlsp_id.desc})
    @Column({
      name: `${RetsListingAgentEntity.colprefix}mlsp_id`, 
      type: 'tinyint', 
      unsigned: true, 
      comment: `FK(rets_mls_provider => mlsp_id)`
    })
    @IsInt()
    mlsp_id?: number;

    @Field(() => String, {nullable: true, description: meta.agent_name.desc})
    @Column({
      name: `${RetsListingAgentEntity.colprefix}agent_name`, 
      type: 'varchar', 
      length: meta.agent_name.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAgentEntity.colprefix}agent_name`, { unique: false })
    @IsNotEmpty()
    @MaxLength(meta.agent_name.validation.maxLength as number, {message: meta.agent_name.validation.maxLengthMsg})
    agent_name?: string;

    @Field(() => String, {nullable: true, description: meta.agent_fname.desc})
    @Column({
      name: `${RetsListingAgentEntity.colprefix}agent_fname`, 
      type: 'varchar', 
      nullable: true,
      length: meta.agent_fname.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.agent_fname.validation.maxLength as number, {message: meta.agent_fname.validation.maxLengthMsg})
    agent_fname?: string;

    @Field(() => String, {nullable: true, description: meta.agent_lname.desc})
    @Column({
      name: `${RetsListingAgentEntity.colprefix}agent_lname`, 
      type: 'varchar', 
      nullable: true,
      length: meta.agent_lname.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @IsOptional()
    @MaxLength(meta.agent_lname.validation.maxLength as number, {message: meta.agent_lname.validation.maxLengthMsg})
    agent_lname?: string;

    @Field(() => String, {nullable: true, description: meta.agent_email.desc})
    @Column({
      name: `${RetsListingAgentEntity.colprefix}agent_email`, 
      type: 'varchar', 
      nullable: true,
      length: meta.agent_email.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAgentEntity.colprefix}agent_email`, { unique: false })
    @IsOptional()
    @MaxLength(meta.agent_email.validation.maxLength as number, {message: meta.agent_email.validation.maxLengthMsg})
    agent_email?: string;

    @Field(() => String, {nullable: true, description: meta.agent_phone.desc})
    @Column({
      name: `${RetsListingAgentEntity.colprefix}agent_phone`, 
      type: 'varchar', 
      nullable: true,
      length: meta.agent_phone.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAgentEntity.colprefix}agent_phone`, { unique: false })
    @IsOptional()
    @MaxLength(meta.agent_phone.validation.maxLength as number, {message: meta.agent_phone.validation.maxLengthMsg})
    agent_phone?: string;

    @Field(() => String, {nullable: true, description: meta.agent_office_id.desc})
    @Column({
      name: `${RetsListingAgentEntity.colprefix}agent_office_id`, 
      type: 'varchar', 
      nullable: true,
      length: meta.agent_office_id.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    @Index(`${InIndexPrefix}${RetsListingAgentEntity.colprefix}agent_office_id`, { unique: false })
    @IsOptional()
    @MaxLength(meta.agent_office_id.validation.maxLength as number, {message: meta.agent_office_id.validation.maxLengthMsg})
    agent_office_id?: string;
    
    @Field(() => String, {nullable: true, description: meta.agent_home_phone.desc})
    @Column({
      name: `${RetsListingAgentEntity.colprefix}agent_home_phone`, 
      type: 'varchar', 
      nullable: true,
      length: meta.agent_home_phone.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    
    @IsOptional()
    @MaxLength(meta.agent_home_phone.validation.maxLength as number, {message: meta.agent_home_phone.validation.maxLengthMsg})
    agent_home_phone?: string;

    @Field(() => String, {nullable: true, description: meta.agent_fax.desc})
    @Column({
      name: `${RetsListingAgentEntity.colprefix}agent_fax`, 
      type: 'varchar', 
      nullable: true,
      length: meta.agent_fax.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    
    @IsOptional()
    @MaxLength(meta.agent_fax.validation.maxLength as number, {message: meta.agent_fax.validation.maxLengthMsg})
    agent_fax?: string;

    @Field(() => String, {nullable: true, description: meta.agent_license_number.desc})
    @Column({
      name: `${RetsListingAgentEntity.colprefix}agent_license_number`, 
      type: 'varchar', 
      nullable: true,
      length: meta.agent_license_number.validation.maxLength, 
      collation: 'utf8mb4_general_ci',
    })
    
    @IsOptional()
    @MaxLength(meta.agent_license_number.validation.maxLength as number, {message: meta.agent_license_number.validation.maxLengthMsg})
    agent_license_number?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${RetsListingAgentEntity.colprefix}created`,
      update: false,
    })
    @Index(`${InIndexPrefix}${RetsListingAgentEntity.colprefix}created`, { unique: false })
    @IsOptional()
    created?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${RetsListingAgentEntity.colprefix}updated`, 
      nullable: true
    })
    @Index(`${InIndexPrefix}${RetsListingAgentEntity.colprefix}updated`, { unique: false })
    updated?: Date;
  
    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${RetsListingAgentEntity.colprefix}deleted`, 
      nullable: true,
      comment:`date-time => Yes | null: No`,
    })
    @Index(`${InIndexPrefix}${RetsListingAgentEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => RetsMlsProviderEntity, {nullable: true, description: meta.fr_mlsp_id.desc})
    @ManyToOne(() => RetsMlsProviderEntity, (entity: RetsMlsProviderEntity) => entity.fr_rets_list_agent_id)
    @JoinColumn({ name: `${RetsListingAgentEntity.colprefix}mlsp_id` })
    fr_mlsp_id?: RetsMlsProviderEntity;
}
