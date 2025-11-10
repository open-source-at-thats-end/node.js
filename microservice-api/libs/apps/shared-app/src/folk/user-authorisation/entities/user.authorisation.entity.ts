import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, YesNoEnum, IsSameAs, EntitySuffix, InIndexPrefix, UnIndexPrefix  } from "@libs/library-app";
import { IsInt, IsNotEmpty, IsOptional,Matches, Max, MaxLength, Min, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, IsNull, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { AuthorisationRoleEnum } from "../../../master/authorisation/authorisation.enum";
import { AuthorisationEntity } from "apps/shared-app/src/master/authorisation/entities/authorisation.entity";
import { UserAuthenticationEntity } from "../../user-auth/entities/user.auth.entity";
import { UserEntity } from "../../user/entities/user.entity";

const UserAuthorisationEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
  id: {
      desc: `Unique ID of the entity, auto generated. This is is same with user id.`,
      validation: {
        isOptional: 'Can be empty or provide id to update existing record.'
      }
  },
  u_id: {
      desc: `User id of the user.`,
      validation: {}
  },
  au_id: {
      desc: `Authentication id of the user.`,
      validation: {}
  },
  ar_id: {
      desc: `Authorisation role id of the user.`,
      validation: {}
  },
  role_title: {
      desc: `Role title of the user. Overwrite default authorisation role title. Custom name which makes it easy to identify.`,
      validation: {
        maxLength: 16,
        maxLengthMsg: `Role title can be 16 characters long.`
      }
  },
  privileges: {
      desc: `Privileges of the user. This is overwrite default authorisation permission and privileges this provide highly flexible integration`,
      validation: {}
  },
  created: {
      desc: `Created datetime of the user auth.`,
      validation: {}
  },
  updated: {
      desc: `Updated datetime of the user auth.`,
      validation: {}
  },
  deleted: {
      desc: `Deleted datetime of the user auth.`,
      validation: {}
  },
};

const  UserAuthorisationVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_user_auth:{
    desc: `Authentication info of the user.`,
    validation: {}
  },
  fr_authorisation: {
    desc: `Authorisation info of the user role.`,
    validation: {}
  },
  fr_user:{
    desc: `User info of the user.`,
    validation: {}
  },
  
} 
export const UserAuthorisationEntityMeta = {...UserAuthorisationEntityFieldMeta, ...UserAuthorisationVirtualFieldMeta};
const meta = UserAuthorisationEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")') // TODO: SUPERGRAPH_FOREIGN_RELATION step 1 - add directive
@Entity({
  name: 'user_authorisation',
  engine: 'InnoDB',
})
@Unique(`${UnIndexPrefix}uar_au_id`,[`u_id`, `au_id`, `ar_id`])
export class UserAuthorisationEntity implements EntityCRUDTypeDefinition {
  static colprefix: string = `uar_`;
  static uploaddir: string = `user-authorisation`;

  static metaname: string = (UserAuthorisationEntity.name).replace(EntitySuffix, '');
  static metadesc: string = 'User authentication management module in application.';

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryGeneratedColumn({
    name: `${UserAuthorisationEntity.colprefix}id`, 
    type: `int`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`,
  })
  id?: number;

  @Field(() => Int, {nullable: true, description: meta.u_id.desc})
  @Column({
      name: `${UserAuthorisationEntity.colprefix}u_id`, 
      type: `int`, 
      unsigned: true,
      comment: `FK(user=>u_id)`,
  })
  @IsInt()
  @Index(`${InIndexPrefix}${UserAuthorisationEntity.colprefix}u_id`, { unique: false })
  @IsNotEmpty()
  u_id?: number;

  @Field(() => Int, {nullable: true, description: meta.au_id.desc})
  @Column({
      name: `${UserAuthorisationEntity.colprefix}au_id`, 
      type: `int`, 
      unsigned: true,
      comment: `FK(user_authentication => au_id)`,
  })
  @IsInt()
  @Index(`${InIndexPrefix}${UserAuthorisationEntity.colprefix}au_id`, { unique: false })
  @IsOptional()
  au_id?: number;

  @Field(() => Int, {nullable: true, description: meta.ar_id.desc})
  @Column({
      name: `${UserAuthorisationEntity.colprefix}ar_id`, 
      type: `smallint`, 
      unsigned: true,
      comment: `FK(authorisation => ar_id)`,
  })
  @IsInt()
  @Index(`${InIndexPrefix}${UserAuthorisationEntity.colprefix}ar_id`, { unique: false })
  @IsNotEmpty()
  ar_id?: number; 
  
  @Field(() => String, {nullable: true, description: meta.role_title.desc})
  @Column({
      name: `${UserAuthorisationEntity.colprefix}role_title`, 
      type: `varchar`, 
      nullable: true,
      default: null,
      length: meta.role_title.validation.maxLength,
      collation: 'utf8mb4_general_ci',
      comment: `Overwrite default authorisation role title. Custom name which makes it easy to manage and remember`,
  })
  @MaxLength(meta.role_title.validation.maxLength as number, { message: meta.role_title.validation.maxLengthMsg })
  @IsOptional()
  role_title?: string;
  
  @Field(() => String, {nullable: true, description: meta.role_title.desc})
  @Column({
      name: `${UserAuthorisationEntity.colprefix}privileges`, 
      type: `mediumtext`, 
      nullable: true,
      default: null,
      collation: 'utf8mb4_general_ci',
      comment: `Overwrite default authorisation permission and privileges this provide highly flexible integration`,
  })
  @IsOptional()
  privileges?: string;

  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${UserAuthorisationEntity.colprefix}created`,
    type: `datetime`,
    update: false,
  })
  @Index(`${InIndexPrefix}${UserAuthorisationEntity.colprefix}created`, { unique: false })
  @IsOptional()
  created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${UserAuthorisationEntity.colprefix}updated`, 
    type: `datetime`,
    nullable: true
  })
  @Index(`${InIndexPrefix}${UserAuthorisationEntity.colprefix}updated`, { unique: false })
  updated?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${UserAuthorisationEntity.colprefix}deleted`, 
    type: `datetime`,
    nullable: true,
    comment:`date-time => Yes | null => No`,
  })
  @Index(`${InIndexPrefix}${UserAuthorisationEntity.colprefix}deleted`, { unique: false })
  deleted?: Date;


  
  // ████ INTERNAL RELATIONS ████████████████████████████████████████████████
  
  @Field(() => UserAuthenticationEntity, {nullable: true, description: meta.fr_user_auth.desc})
  @ManyToOne(() => UserAuthenticationEntity, (entity: UserAuthenticationEntity) => entity.fr_user_authorisations)
  @JoinColumn({ name: `${UserAuthorisationEntity.colprefix}au_id` })
  fr_user_auth?: UserAuthenticationEntity;

  @Field(() => AuthorisationEntity, {nullable: true, description: meta.fr_authorisation.desc})
  @ManyToOne(() => AuthorisationEntity, (entity: AuthorisationEntity) => entity.fr_user_authorisations)
  @JoinColumn({ name: `${UserAuthorisationEntity.colprefix}ar_id` })
  fr_authorisation?: AuthorisationEntity;

  @Field(() => UserEntity, {nullable: true, description: meta.fr_user.desc})
  @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_user_authorisations)
  @JoinColumn({ name: `${UserAuthorisationEntity.colprefix}u_id` })
  fr_user?: UserEntity;

  // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
  
}