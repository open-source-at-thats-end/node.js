import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsJSON, IsMobilePhone, IsNotEmpty, IsOptional, MaxLength, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { NewsLetterEntity } from "../../newsletter/entities/newsletter.entity";
import { UserEntity } from "apps/shared-app/src/folk/user/entities/user.entity";
import { NewsLetterTrackLogEntity } from "../../track-log/entities/track.log.entity";
import { NewsLetterScheduleEntity } from "../../schedule/entities/schedule.entity";
import { NewsLetterCategoryEntity } from "../../category/entities/category.entity";

 
const  UserNewsLetterSubscriptionEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

id: {
    desc: `Unique ID of the user newsletter subscription, auto generated.`,
    validation: {} 
},
u_id: {
    desc: `User Id of the user newsletter subscription.`,
    validation:{}
},
nlcat_id: {
    desc: `Newsletter category Id of the user newsletter subscription.`,
    validation:{}
},
subscribed: {
    desc: `Subscribed of the user newsletter subscription.`,
    validation:{}
},
unsubscribed: {
    desc: `Unsubscribed of the user newsletter subscription.`,
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
const  UserNewsLetterSubscriptionVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

  fr_users: {
    desc: `Newsletters of user newsletter subscription.`,
    validation: {}
  },

  fr_categories: {
    desc: `Newsletters Schedules of user newsletter subscription.`,
    validation: {}
  },
  
} 
export const UserNewsLetterSubscriptionEntityMeta = {...UserNewsLetterSubscriptionEntityFieldMeta, ...UserNewsLetterSubscriptionVirtualFieldMeta};
const meta = UserNewsLetterSubscriptionEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'user_newsletter_subscription',
  engine: 'InnoDB',
})
export class UserNewsLetterSubscriptionEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = `usrnlsub_`;
    static uploaddir: string = `user-newsletter-subscription`;

    static metaname: string = (UserNewsLetterSubscriptionEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of user newsletter subscriptions.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${UserNewsLetterSubscriptionEntity.colprefix}id`, 
      type: `int`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => Int, {nullable: true, description: meta.u_id.desc})
    @Column({
      name: `${UserNewsLetterSubscriptionEntity.colprefix}u_id`, 
      type: `int`,
      unsigned: true, 
      comment: `(user => u_id)`,
      default: 0,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${UserNewsLetterSubscriptionEntity.colprefix}u_id`, { unique: false })
    @IsNotEmpty()
    u_id?: number;

    @Field(() => Int, {nullable: true, description: meta.nlcat_id.desc})
    @Column({
      name: `${UserNewsLetterSubscriptionEntity.colprefix}nlcat_id`, 
      type: `int`,
      unsigned: true, 
      comment: `(newsletter_category=>nlcat_id)`,
      default: 0,
    })
    @IsInt()
    @Index(`${InIndexPrefix}${UserNewsLetterSubscriptionEntity.colprefix}nlcat_id`, { unique: false })
    @IsNotEmpty()
    nlcat_id?: number;

    @Field(() => DateTime, {nullable: true, description: meta.subscribed.desc})
    @Column({
      name: `${UserNewsLetterSubscriptionEntity.colprefix}subscribed`, 
      type: `datetime`,
      nullable: true,
      comment: `date-time => No | null => Yes`
    })
    @Index(`${InIndexPrefix}${UserNewsLetterSubscriptionEntity.colprefix}subscribed`, { unique: false })
    @IsOptional()
    subscribed?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.unsubscribed.desc})
    @Column({
      name: `${UserNewsLetterSubscriptionEntity.colprefix}unsubscribed`, 
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`
    })
    @Index(`${InIndexPrefix}${UserNewsLetterSubscriptionEntity.colprefix}unsubscribed`, { unique: false })
    @IsOptional()
    unsubscribed?: Date;
    
    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${UserNewsLetterSubscriptionEntity.colprefix}created`, 
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${UserNewsLetterSubscriptionEntity.colprefix}created`, { unique: false })
    created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${UserNewsLetterSubscriptionEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true,
    })
    @Index(`${InIndexPrefix}${UserNewsLetterSubscriptionEntity.colprefix}updated`, { unique: false })
    @IsOptional()
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${UserNewsLetterSubscriptionEntity.colprefix}deleted`,
      type: `datetime`,
      nullable: true,
      comment: `date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${UserNewsLetterSubscriptionEntity.colprefix}deleted`, { unique: false })
    @IsOptional()
    deleted?: Date; 

    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => UserEntity, {nullable: true, description: meta.fr_users.desc})
    @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_user_newsletters_subscription)
    @JoinColumn({ name: `${UserNewsLetterSubscriptionEntity.colprefix}u_id`})
    fr_users?: UserEntity;

    @Field(() => NewsLetterCategoryEntity, {nullable: true, description: meta.fr_categories.desc})
    @ManyToOne(() => NewsLetterCategoryEntity, (entity: NewsLetterCategoryEntity) => entity.fr_user_newsletters_subscriptions)
    @JoinColumn({ name: `${UserNewsLetterSubscriptionEntity.colprefix}nlcat_id`})
    fr_categories?: NewsLetterCategoryEntity;

    

    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}