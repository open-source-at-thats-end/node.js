import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, UnIndexPrefix, InIndexPrefix } from "@libs/library-app";
import {IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { WebhookResponseEntity } from "../../../webhook/response/entities/response.entity";
import { NewsLetterEntity } from "apps/shared-app/src/newsletters/newsletter/entities/newsletter.entity";

/*
id?: any;
name?: any;
desc?: any;
created?: any;
updated?: any;
deleted?: any;
*/

const  ThirdPartyPlatformEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the thirdparty platform, auto generated.`,
      validation: {} 
  },
  slug: {
    desc: `Description of the thirdparty platform.`,
    validation:{
      maxLength: 255,
      maxLengthMsg: `Description of the thirdparty platform length is only 255 characters.`,
    }
  },
  name: {
      desc: `Name of the thirdparty platform.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Name of the thirdparty platform length is only 128 characters.`,
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
const  ThirdPartyPlatformVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

  fr_webhook_responses: {
    desc: `Provides list of webhook responses.`,
    validation: {},
  },

  fr_newsletter_third_party_platforms: {
    desc: `Newsletter of third party platform.`,
    validation: {}
  }, 
}
export const ThirdPartyPlatformEntityMeta = {...ThirdPartyPlatformEntityFieldMeta, ...ThirdPartyPlatformVirtualFieldMeta};
const meta = ThirdPartyPlatformEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")') // TODO: SUPERGRAPH_FOREIGN_RELATION step 1 - add directive
@Entity({
  name: 'third_party_platform',
  engine: 'InnoDB',
})
export class ThirdPartyPlatformEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'tppltf_';
    static uploaddir: string = 'third-party-platform';

    static metaname: string = 'ThirdPartyPlatform';
    static metadesc: string = 'Provides list of useridentitycardtypes in the world.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${ThirdPartyPlatformEntity.colprefix}id`, 
      type: `smallint`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.slug.desc})
    @Column({
      name: `${ThirdPartyPlatformEntity.colprefix}slug`, 
      type: `varchar`,
      length: meta.slug.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${UnIndexPrefix}${ThirdPartyPlatformEntity.colprefix}slug`, { unique: true })
    @MaxLength(meta.slug.validation.maxLength as number, {message: meta.slug.validation.maxLengthMsg})
    @IsNotEmpty()
    slug?: string;

    @Field(() => String, {nullable: true, description: meta.name.desc})
    @Column({
      name: `${ThirdPartyPlatformEntity.colprefix}name`, 
      type: `varchar`,
      length: meta.name.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${ThirdPartyPlatformEntity.colprefix}name`, { unique: false })
    @MaxLength(meta.name.validation.maxLength as number, {message: meta.name.validation.maxLengthMsg})
    @IsNotEmpty()
    name?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${ThirdPartyPlatformEntity.colprefix}created`,
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${ThirdPartyPlatformEntity.colprefix}created`, { unique: false })
     created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${ThirdPartyPlatformEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true
    })
    @Index(`${InIndexPrefix}${ThirdPartyPlatformEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${ThirdPartyPlatformEntity.colprefix}deleted`, 
      type: `datetime`,
      nullable: true,
      comment:`date-time => yes | null => no`,
    })
    @Index(`${InIndexPrefix}${ThirdPartyPlatformEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;
    
    
    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [WebhookResponseEntity], {nullable: true, description: meta.fr_webhook_responses.desc})
    @OneToMany(() => WebhookResponseEntity, (entity: WebhookResponseEntity) => entity.fr_third_party_platform) 
    fr_webhook_responses?: WebhookResponseEntity[];

    @Field(() => [NewsLetterEntity], {nullable: true, description: meta.fr_newsletter_third_party_platforms.desc})
    @OneToMany(() => NewsLetterEntity, (entity: NewsLetterEntity) => entity.fr_nl_third_party_platform)
    fr_newsletter_third_party_platforms?: NewsLetterEntity[]; 

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

}