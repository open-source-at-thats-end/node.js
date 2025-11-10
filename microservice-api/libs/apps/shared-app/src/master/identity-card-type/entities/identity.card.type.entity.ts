import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, InIndexPrefix  } from "@libs/library-app";
import {IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { UserIdentityCardEntity } from "../../../folk/user-identity-card/entities/user.identity.card.entity";

const  IdentityCardTypeEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the user identity card type, auto generated.`,
      validation: {} 
  },
  name: {
      desc: `Name of the user identity card type.`,
      validation:{
        maxLength: 64,
        maxLengthMsg: `Name of the user identity card type length is only 64 characters.`,
      }
  },
  desc: {
      desc: `Description of the user identity card type.`,
      validation:{
        maxLength: 255,
        maxLengthMsg: `Description of the user identity card type length is only 255 characters.`,
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
const  IdentityCardTypeVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

  fr_user_identity_cards:{
    desc: `List of user identity cards for this user identity card type.`,
    validation: {}
  }
}
export const IdentityCardTypeEntityMeta = {...IdentityCardTypeEntityFieldMeta, ...IdentityCardTypeVirtualFieldMeta};
const meta = IdentityCardTypeEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'identity_card_type',
  engine: 'InnoDB',
})
export class IdentityCardTypeEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'idctype_';
    static uploaddir: string = 'identity-card-type';

    static metaname: string = (IdentityCardTypeEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of useridentitycardtypes in the world.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${IdentityCardTypeEntity.colprefix}id`, 
      type: `smallint`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.name.desc})
    @Column({
      name: `${IdentityCardTypeEntity.colprefix}name`, 
      type: `varchar`,
      length: meta.name.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${InIndexPrefix}${IdentityCardTypeEntity.colprefix}name`, { unique: false })
    @MaxLength(meta.name.validation.maxLength as number, {message: meta.name.validation.maxLengthMsg})
    @IsNotEmpty()
    name?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${IdentityCardTypeEntity.colprefix}desc`, 
      type: `varchar`,
      length: meta.desc.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    @IsOptional()
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${IdentityCardTypeEntity.colprefix}created`,
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${IdentityCardTypeEntity.colprefix}created`, { unique: false })
     created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${IdentityCardTypeEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true
    })
    @Index(`${InIndexPrefix}${IdentityCardTypeEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${IdentityCardTypeEntity.colprefix}deleted`, 
      type: `datetime`,
      nullable: true,
      comment:`date-time => Yes | null => No`,
    })
    @Index(`${InIndexPrefix}${IdentityCardTypeEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [UserIdentityCardEntity], {nullable: true, description: meta.fr_user_identity_cards.desc})
    @OneToMany(() => UserIdentityCardEntity, (entity: UserIdentityCardEntity) => entity.fr_user_identity_card_type)
    fr_user_identity_cards?: UserIdentityCardEntity[];


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}