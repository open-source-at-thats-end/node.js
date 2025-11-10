import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix, YesNoEnum, AnyOneRequired  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, Validate, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "apps/shared-app/src/folk/user/entities/user.entity";
import { NewsLetterScheduleEntity } from "../../schedule/entities/schedule.entity";
import { AuthorisationEntity } from "apps/shared-app/src/master/authorisation/entities/authorisation.entity";
import { EmailTemplateEntity } from "apps/shared-app/src/queue/email-template/entities/email.template.entity";
import { NewsLetterTrackLogEntity } from "../../track-log/entities/track.log.entity";
import { NewsLetterUserEntity } from "../../user/entities/user.entity";
import { ThirdPartyPlatformEntity, ThirdPartyPlatformEntityMeta } from "apps/shared-app/src/master/third-party-platform/entities/third.party.platform.entity";
import { NewsLetterCategoryEntity } from "../../category/entities/category.entity";
 
const  NewsLetterEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the newsletter, auto generated.`,
    validation: {} 
},
etmpl_id: {
    desc: `Template id of the newsletter.`,
    validation: {
      any_one_required: `At least one of etmpl_id, or content must be provided.`,
    }
},
nlcat_id: {
  desc: `Categories for newsletter.`,
  validation:{}
},
tppltf_id: {
  desc: `Third Party ID of the newsletter.`,
  validation:{}
},
title: {
  desc: `Title of the newsletter.`,
  validation:{
    maxLength: 64,
    maxLengthMsg: `Title length is only 64 characters.`,
  }
},

subject: {
  desc: `Subject of the newsletter.`,
  validation:{
    maxLength: 128,
    maxLengthMsg: `Subject length is only 128 characters.`,
  }
},
content: {
  desc: `Content body of the newsletter.`,
  validation: {}
},

use_default: {
    desc: `Indicates if the header and footer are included or not in the newsletter.`,
    validation:{}
},
created_u_id: {
  desc: `The ID of the user who added the entry.`,
  validation:{}
},
created_ar_id: {
  desc: `The AR ID of the user who added the entry.`,
  validation:{}
}, 
active: {
  desc: `Indicates if the active or not in the newsletter.`,
  validation:{}
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
const  NewsLetterVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

  fr_email_templates: {
    desc: `Email Templates of NewsLetter.`,
    validation: {}
  },

  fr_users: {
    desc: `Users of NewsLetter.`,
    validation: {}
  },

  fr_nl_third_party_platform: {
    desc: `Third party platform of NewsLetter.`,
    validation: {}
  },

  fr_authorization_roles: {
    desc: `Authorization roles of NewsLetter.`,
    validation: {}
  },

  fr_nl_schedule:{
    desc: `News letter schedule for this news letter.`,
    validation: {}
  },

  fr_nl_tracking_log:{
    desc: `News letter tracking log for this news letter.`,
    validation: {}
  },
  fr_nl_user:{
    desc: `News letter user for this news letter.`,
    validation: {}
  },
  fr_nl_category:{
    desc: `Categories for this news letter.`,
    validation: {}
  }
  
} 
export const NewsLetterEntityMeta = {...NewsLetterEntityFieldMeta, ...NewsLetterVirtualFieldMeta};
const meta = NewsLetterEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'newsletter',
  engine: 'InnoDB',
})
export class NewsLetterEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `nl_`;
    static uploaddir: string = `newsletter`;

    static metaname: string = (NewsLetterEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of newsletters.';

     @Validate(AnyOneRequired,[['etmpl_id', 'content']], { message: meta.etmpl_id.validation.any_one_required }) 
     any_one_required?: any;

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${NewsLetterEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.etmpl_id.desc})
    @Column({
      name: `${NewsLetterEntity.colprefix}etmpl_id`, 
      type: `smallint`,
      unsigned: true, 
      comment: `FK(email_template => etmpl_id)`,
      default: 0,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterEntity.colprefix}etmpl_id`, { unique: false })
    @IsNotEmpty()
    etmpl_id?: number;
    
    @Field(() => Int, {nullable: true, description: meta.nlcat_id.desc})
    @Column({
      name: `${NewsLetterEntity.colprefix}nlcat_id`, 
      type: `smallint`,
      unsigned: true, 
      comment: `FK(newsletter_category=> nlcat_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterEntity.colprefix}nlcat_id`, { unique: false })
    @IsOptional()
    nlcat_id?: number;

    @Field(() => Int, {nullable: true, description: meta.tppltf_id.desc})
    @Column({
      name: `${NewsLetterEntity.colprefix}tppltf_id`, 
      type: `smallint`,
      unsigned: true, 
      comment: `FK(third_party_platform=>tppltf_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterEntity.colprefix}tppltf_id`, { unique: false })
    @IsNotEmpty()
    tppltf_id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${NewsLetterEntity.colprefix}title`, 
      type: `varchar`,
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${NewsLetterEntity.colprefix}title`, { unique: false })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.subject.desc})
    @Column({
      name: `${NewsLetterEntity.colprefix}subject`, 
      type: `varchar`,
      length: meta.subject.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${NewsLetterEntity.colprefix}subject`, { unique: false })
    @MaxLength(meta.subject.validation.maxLength as number, {message: meta.subject.validation.maxLengthMsg})
    @IsOptional()
    subject?: string;

    @Field(() => String, {nullable: true, description: meta.content.desc})
    @Column({
      name: `${NewsLetterEntity.colprefix}content`, 
      type: `varchar`,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @IsOptional()
    content?: string;

    @Field(() => YesNoEnum, {nullable: true, description: meta.use_default.desc})
    @Column({
      name: `${NewsLetterEntity.colprefix}use_default`, 
      type: `tinyint`,
      nullable: false,
      default: 1,
      comment: `1 => yes | 0 => no (If yes it will use default header and footer.)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterEntity.colprefix}use_default`, { unique: false })
    @IsNotEmpty()
    use_default?: number;

    @Field(() => Int, {nullable: true, description: meta.created_u_id.desc})
    @Column({
      name: `${NewsLetterEntity.colprefix}created_u_id`, 
      type: `int`,
      unsigned: true, 
      comment: `FK(user => u_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterEntity.colprefix}created_u_id`, { unique: false })
    @IsNotEmpty()
    created_u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.created_ar_id.desc})
    @Column({
      name: `${NewsLetterEntity.colprefix}created_ar_id`, 
      type: `tinyint`,
      unsigned: true, 
      comment: `FK(authorisation => ar_id)`,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${NewsLetterEntity.colprefix}created_ar_id`, { unique: false })
    @IsNotEmpty()
    created_ar_id?: number;

    @Field(() => DateTime, {nullable: true, description: meta.active.desc})
    @Column({
      name: `${NewsLetterEntity.colprefix}active`, 
      type: `datetime`,
      comment: `date-time => No | null => Yes`
    })
    @Index(`${InIndexPrefix}${NewsLetterEntity.colprefix}active`, { unique: false })
    @IsOptional()
    active?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${NewsLetterEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${NewsLetterEntity.colprefix}created`, { unique: false })
   created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${NewsLetterEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${NewsLetterEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${NewsLetterEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${NewsLetterEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date;

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████


    @Field(() => EmailTemplateEntity, {nullable: true, description: meta.fr_email_templates.desc})
    @ManyToOne(() => EmailTemplateEntity, (entity: EmailTemplateEntity) => entity.fr_newsletters)
    @JoinColumn({ name: `${NewsLetterEntity.colprefix}etmpl_id` })
    fr_email_templates?: EmailTemplateEntity;

    @Field(() => UserEntity, {nullable: true, description: meta.fr_users.desc})
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_newsletter_users)
    @JoinColumn({ name: `${NewsLetterEntity.colprefix}created_u_id` })
    fr_users?: UserEntity;

    @Field(() => ThirdPartyPlatformEntity, {nullable: true, description: meta.fr_nl_third_party_platform.desc})
    @ManyToOne(() => ThirdPartyPlatformEntity, (entity: ThirdPartyPlatformEntity) => entity.fr_newsletter_third_party_platforms)
    @JoinColumn({ name: `${NewsLetterEntity.colprefix}tppltf_id` })
    fr_nl_third_party_platform?: ThirdPartyPlatformEntity; 

    @Field(() => AuthorisationEntity, {nullable: true, description: meta.fr_authorization_roles.desc})
    @ManyToOne(() => AuthorisationEntity, (entity: AuthorisationEntity) => entity.fr_newsletters)
    @JoinColumn({ name: `${NewsLetterEntity.colprefix}created_ar_id` })
    fr_authorization_roles?: AuthorisationEntity;

    @Field(() => [NewsLetterScheduleEntity], {nullable: true, description: meta.fr_nl_schedule.desc})
    @OneToMany(() => NewsLetterScheduleEntity, (entity: NewsLetterScheduleEntity) => entity.fr_newsletters)
    fr_nl_schedule?: NewsLetterScheduleEntity[]; 

    @Field(() => [NewsLetterTrackLogEntity], {nullable: true, description: meta.fr_nl_tracking_log.desc})
    @OneToMany(() => NewsLetterTrackLogEntity, (entity: NewsLetterTrackLogEntity) => entity.fr_newsletters)
    fr_nl_tracking_log?: NewsLetterTrackLogEntity[]; 

    @Field(() => [NewsLetterUserEntity], {nullable: true, description: meta.fr_nl_user.desc})
    @OneToMany(() => NewsLetterUserEntity, (entity: NewsLetterUserEntity) => entity.fr_newsletters)
    fr_nl_user?: NewsLetterUserEntity[]; 

    @Field(() => NewsLetterCategoryEntity, {nullable: true, description: meta.fr_nl_category.desc})
    @ManyToOne(() => NewsLetterCategoryEntity, (entity: NewsLetterCategoryEntity) => entity.fr_newsletters)
    @JoinColumn({ name: `${NewsLetterEntity.colprefix}nlcat_id` })
    fr_nl_category?: NewsLetterCategoryEntity;

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}