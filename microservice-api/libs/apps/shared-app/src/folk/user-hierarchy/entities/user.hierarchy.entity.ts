import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, YesNoEnum, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsEmail, IsInt, IsLatitude, IsLongitude, IsMobilePhone, IsNotEmpty, IsNumber, IsOptional, IsString, Matches, Max, MaxLength, Min, MinLength, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "../../user/entities/user.entity";
import { AuthorisationEntity } from "../../../master/authorisation/entities/authorisation.entity";

const UserHierarchyEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
  id: {
      desc: `Unique ID of the entity, This is the same as user id`,
      validation: {}
  },
  parent_u_id: {
      desc: `Parent user ID of the user hierarchy.`,
      validation: {
        isNotEmpty: `Parent user ID is required.`,
      }
  },
  parent_ar_id: {
      desc: `Parent authorisation ID of the user hierarchy.`,
      validation: {
        isNotEmpty: `Parent authorisation ID is required.`,
      }
  },
  child_u_id: {
      desc: `Child user ID of the user hierarchy.`,
      validation: {
        isNotEmpty: `Child user ID is required.`,
      }
  },
  child_ar_id: {
      desc: `Child authorisation ID of the user hierarchy.`,
      validation: {
        isNotEmpty: `Child authorisation ID is required.`,
      }
  },
  created: {
      desc: `Date time when user hierarchy is created.`,
      validation:{}
  },
  updated: {
      desc: `Date time when user hierarchy is updated.`,
      validation:{}
  },
  deleted: {
    desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
    validation:{}
  }
};
const  UserHierarchyVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  
  fr_parent_user: {
    desc: `Parent user of the user hierarchy.`,
    validation: {}
  },
  fr_child_user: {
    desc: `Parent user of the user hierarchy.`,
    validation: {}
  },
  fr_parent_authorisation: {
    desc: `Parent authorisation of the user hierarchy.`,
    validation: {}
  },
  fr_child_authorisation: {
    desc: `Child authorisation of the user hierarchy.`,
    validation: {}
  }
}
export const UserHierarchyEntityMeta = {...UserHierarchyEntityFieldMeta, ...UserHierarchyVirtualFieldMeta};
const meta = UserHierarchyEntityMeta; // need to use in this file down the line

/*

id?: any
parent_u_id?: any
parent_ar_id?: any
child_u_id?: any
child_ar_id?: any
created?: any
updated?: any
deleted?: any

*/

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'user_hierarchy',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}uhirarcy_parent_u_id`,['parent_u_id','parent_ar_id','child_u_id','child_ar_id'])
export class UserHierarchyEntity implements EntityCRUDTypeDefinition {

  static colprefix: string = `uhirarcy_`;
  static uploaddir: string = `user-hierarchy`;

  static metaname: string = (UserHierarchyEntity.name).replace(EntitySuffix, '');
  static metadesc: string = 'UserHierarchy management module in application.';

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryGeneratedColumn({
    name: `${UserHierarchyEntity.colprefix}id`, 
    type: `int`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`,
  })
  id?: number;
  
  @Field(() => Int, {nullable: true, description: meta.parent_u_id.desc})
  @Column({
    name: `${UserHierarchyEntity.colprefix}parent_u_id`,
    type: `int`,
    unsigned: true,
    comment: `FK(_user=>u_id)`,
  })
  @IsInt()
  @Index(`${InIndexPrefix}${UserHierarchyEntity.colprefix}parent_u_id`, { unique: false })
  @IsNotEmpty({message: meta.parent_u_id.validation.isNotEmpty})
  parent_u_id?: number;

  @Field(() => Int, {nullable: true, description: meta.parent_ar_id.desc})
  @Column({
    name: `${UserHierarchyEntity.colprefix}parent_ar_id`,
    type: `smallint`,
    unsigned: true,
    comment: `FK(_authorisation=>ar_id)`,
  })
  @IsInt()
  @Index(`${InIndexPrefix}${UserHierarchyEntity.colprefix}parent_ar_id`, { unique: false })
  @IsNotEmpty({message: meta.parent_ar_id.validation.isNotEmpty})
  parent_ar_id?: number;

  @Field(() => Int, {nullable: true, description: meta.child_u_id.desc})
  @Column({
    name: `${UserHierarchyEntity.colprefix}child_u_id`,
    type: `smallint`,
    unsigned: true,
    comment: `FK(_user=>u_id)`,
  })
  @IsInt()
  @Index(`${InIndexPrefix}${UserHierarchyEntity.colprefix}child_u_id`, { unique: false })
  @IsNotEmpty({message: meta.child_u_id.validation.isNotEmpty})
  child_u_id?: number;

  @Field(() => Int, {nullable: true, description: meta.child_ar_id.desc})
  @Column({
    name: `${UserHierarchyEntity.colprefix}child_ar_id`,
    type: `smallint`,
    unsigned: true,
    comment: `FK(_authorisation => ar_id)`,
  })
  @IsInt()
  @Index(`${InIndexPrefix}${UserHierarchyEntity.colprefix}child_ar_id`, { unique: false })
  @IsNotEmpty({message: meta.child_ar_id.validation.isNotEmpty})
  child_ar_id?: number;

  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${UserHierarchyEntity.colprefix}created`,
    update: false,
    type: `datetime`,
  })
  @Index(`${InIndexPrefix}${UserHierarchyEntity.colprefix}created`, { unique: false })
  @IsOptional()
  created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${UserHierarchyEntity.colprefix}updated`, 
    type: `datetime`,
    nullable: true,
  })
  @Index(`${InIndexPrefix}${UserHierarchyEntity.colprefix}updated`, { unique: false })
  @IsOptional()
  updated?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${UserHierarchyEntity.colprefix}deleted`, 
    nullable: true,
    comment:`date-time: yes | null: no`,
    type: `datetime`,
  })
  @Index(`${InIndexPrefix}${UserHierarchyEntity.colprefix}deleted`, { unique: false })
  @IsOptional()
  deleted?: Date;



  // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

  @Field(() => UserEntity, {nullable: true, description: meta.fr_parent_user.desc})
  @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_parent_user_hierarchies)
  @JoinColumn({ name: `${UserHierarchyEntity.colprefix}parent_u_id` })
  fr_parent_user?: UserEntity;

  @Field(() => UserEntity, {nullable: true, description: meta.fr_child_user.desc})
  @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_child_user_hirarchies)
  @JoinColumn({ name: `${UserHierarchyEntity.colprefix}child_u_id` })
  fr_child_user?: UserEntity;

  @Field(() => AuthorisationEntity, {nullable: true, description: meta.fr_parent_authorisation.desc})
  @ManyToOne(() => AuthorisationEntity, (entity: AuthorisationEntity) => entity.fr_parent_user_hirarchies)
  @JoinColumn({ name: `${UserHierarchyEntity.colprefix}parent_ar_id` })
  fr_parent_authorisation?: AuthorisationEntity;

  @Field(() => AuthorisationEntity, {nullable: true, description: meta.fr_child_authorisation.desc})
  @ManyToOne(() => AuthorisationEntity, (entity: AuthorisationEntity) => entity.fr_child_user_hirarchies)
  @JoinColumn({ name: `${UserHierarchyEntity.colprefix}child_ar_id` })
  fr_child_authorisation?: AuthorisationEntity;

  

  // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}
