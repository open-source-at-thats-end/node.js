import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, UnIndexPrefix, InIndexPrefix  } from "@libs/library-app";
import { IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, OneToOne, Unique } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { UserAuthorisationEntity } from "../../../folk/user-authorisation/entities/user.authorisation.entity";
import { UserHierarchyEntity } from "../../../folk/user-hierarchy/entities/user.hierarchy.entity";
import { NewsLetterEntity } from "apps/shared-app/src/newsletters/newsletter/entities/newsletter.entity";
import { NewsLetterScheduleEntity } from "apps/shared-app/src/newsletters/schedule/entities/schedule.entity";
import { UserFavEntity } from "apps/shared-app/src/folk/user-favourite/user-fav/entities/user.fav.entity";


const  AuthorisationEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the authorisation, auto generated.`,
      validation: {} 
  },
  role_title: {
      desc: `Title of the authorisation.`,
      validation:{
        maxLength: 64,
        maxLengthMsg: `Name of the region length is only 64 characters.`,
      }
  },
  privileges: {
      desc: `Privileges of the authorisation, encrypted string.`,
      validation:{}
  },
  created: {
      desc: `Record created date time.`,
      validation:{}
  },
  updated: {
      desc: `Record last updated date time. Update can be any.`,
      validation:{}
  },
  deleted: {
      desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
      validation:{}
  }
};
const  AuthorisationVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  fr_user_authorisations: {
      desc: `List of user authorisations for given role.`,
      validation: {}
  },
  fr_parent_user_hirarchies: {
    desc: `List of parent user hierarchies for given role.`,
    validation: {}
  },
  fr_child_user_hirarchies: {
    desc: `List of parent user hierarchies for given role.`,
    validation: {}
  },
  fr_created_user_authorisations: {
    desc: `List of created user authorisations for given role.`,
    validation: {}
  },
  fr_newsletters:{
    desc: `User auth roles for this newsletter.`,
    validation: {}
  },
  fr_newsletter_schedules:{
    desc: `User auth roles for this newsletter schedule.`,
    validation: {}
  },
  fr_user_favouries:{
    desc: `User auth roles for user favourite.`,
    validation: {}
  },
  fr_user_savesearch_auth_roles:{
    desc: `User auth roles for save search.`,
    validation: {}
  } ,


}
export const AuthorisationEntityMeta = {...AuthorisationEntityFieldMeta, ...AuthorisationVirtualFieldMeta};
const meta = AuthorisationEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")') // TODO: SUPERGRAPH_FOREIGN_RELATION step 1 - add directive
@Entity({
  name: 'authorisation',
  engine: 'InnoDB',
})

export class AuthorisationEntity implements EntityCRUDTypeDefinition {

  static colprefix: string = `ar_`;
  static uploaddir: string = `authorisation`;

  static metaname: string = (AuthorisationEntity.name).replace(EntitySuffix, '');
  static metadesc: string = 'Provides list of authorisations in application.';

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryGeneratedColumn({
    name: `${AuthorisationEntity.colprefix}id`, 
    type: `smallint`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`,
  })
  id?: number;

  @Field(() => String, {nullable: true, description: meta.role_title.desc})
  @Column({
    name: `${AuthorisationEntity.colprefix}role_title`, 
    type: `varchar`,
    length: meta.role_title.validation.maxLength,
    collation: `utf8mb4_general_ci`,
  })
  @Index(`${UnIndexPrefix}${AuthorisationEntity.colprefix}role_title`, { unique: true })
  @MaxLength(meta.role_title.validation.maxLength as number, {message: meta.role_title.validation.maxLengthMsg})
  @IsNotEmpty()
  role_title?: string;

  @Field(() => String, {nullable: true, description: meta.privileges.desc})
  @Column({
    name: `${AuthorisationEntity.colprefix}privileges`, 
    type: `mediumtext`, 
    nullable: true,
    collation: `utf8mb4_general_ci`,
    default: null,
  })
  @IsOptional()
  privileges?: string;

  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${AuthorisationEntity.colprefix}created`,
    type: `datetime`,
    update: false,
  })
  @Index(`${InIndexPrefix}${AuthorisationEntity.colprefix}created`, { unique: false })
  created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${AuthorisationEntity.colprefix}updated`, 
    type: `datetime`,
    nullable: true
  })
  @Index(`${InIndexPrefix}${AuthorisationEntity.colprefix}updated`, { unique: false })
  updated?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${AuthorisationEntity.colprefix}deleted`, 
    type: `datetime`,
    nullable: true,
    comment:`date-time => yes | null => no`,
  })
  @Index(`${InIndexPrefix}${AuthorisationEntity.colprefix}deleted`, { unique: false })
  deleted?: Date;


  // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

  @Field(() => [UserAuthorisationEntity], {nullable: true, description: meta.fr_user_authorisations.desc})
  @OneToMany(() => UserAuthorisationEntity, (entity: UserAuthorisationEntity) => entity.fr_authorisation)
  fr_user_authorisations?: UserAuthorisationEntity[];

  @Field(() => [UserHierarchyEntity], {nullable: true, description: meta.fr_parent_user_hirarchies.desc})
  @OneToMany(() => UserHierarchyEntity, (entity: UserHierarchyEntity) => entity.fr_parent_authorisation)
  fr_parent_user_hirarchies?: UserHierarchyEntity[];

  @Field(() => [UserHierarchyEntity], {nullable: true, description: meta.fr_child_user_hirarchies.desc})
  @OneToMany(() => UserHierarchyEntity, (entity: UserHierarchyEntity) => entity.fr_child_authorisation)
  fr_child_user_hirarchies?: UserHierarchyEntity[];

  @Field(() => [NewsLetterEntity], {nullable: true, description: meta.fr_newsletters.desc})
  @OneToMany(() => NewsLetterEntity, (entity: NewsLetterEntity) => entity.fr_authorization_roles)
  fr_newsletters?: NewsLetterEntity[];

  @Field(() => [NewsLetterScheduleEntity], {nullable: true, description: meta.fr_newsletter_schedules.desc})
  @OneToMany(() => NewsLetterScheduleEntity, (entity: NewsLetterScheduleEntity) => entity.fr_authorization_roles)
  fr_newsletter_schedules?: NewsLetterScheduleEntity[];

  @Field(() => UserFavEntity, {nullable: true, description: meta.fr_user_favouries.desc})
  @OneToMany(() => UserFavEntity, (entity: UserFavEntity) => entity.fr_created_authorisation)
  fr_user_favouries?: UserFavEntity;
  
  // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
}