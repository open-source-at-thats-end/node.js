import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, YesNoEnum, IsSameAs, EntitySuffix, InIndexPrefix  } from "@libs/library-app";
import { IsOptional,Matches, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Field, Int, ObjectType } from "@nestjs/graphql";
import { UserEntity } from "../../user/entities/user.entity";
import { UserAuthorisationEntity } from "../../user-authorisation/entities/user.authorisation.entity";
import { SessionEntity } from "apps/shared-app/src/session/entities/session.entity";

/*
create new const UserAuthenticationEntityFieldMeta_
identical to UserAuthenticationEntityFieldMeta

use below fields
id?: any;
identify?: any;
identify_last?: any;
last_changed?: any;
force_reset?: any;
otp?: any;
otp_expiry? any;
created?: any;
updated?: any;
deleted?: any;

*/


const UserAuthenticationEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
  id: {
      desc: `Unique ID of the entity, auto generated. This is is same with user id.`,
      validation: {
        isOptional: 'Can be empty or provide id to update existing record.'
      }
  },
  identify: {
      desc: `Identify string for the user.`,
      validation:{
        minLength: 8,
        minLengthMsg: `Password must be at least 8 characters long.`,
        matchRegEx: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\S{8,})(?!.*(\w)\1{2})/,
        matchRegExMsg: `Password should be combination of digit, uppercase, lowercase, special charector and no more than 3 consecutive identical characters.`,
      }
  },
  identify_last: {
      desc: `Last identify string of the user.`,
      validation:{}
  },
  last_changed: {
      desc: `Last changed identify string by the user.`,
      validation:{}
  },
  force_reset: {
      desc: `Force user to reset identify strig.`,
      validation:{}
  },
  otp: {
      desc: `One time password for the user signin.`,
      validation:{
        maxLength: 255,
        maxLengthMsg: `Maximum length of first name of the user address is 255 characters.`,
      }
  },
  otp_expiry: {
    desc: `One time password expiry datetime for the user signin.`,
    validation:{}
  },
  created: {
      desc: `Created datetime of the user auth.`,
      validation:{}
  },
  updated: {
      desc: `Updated datetime of the user auth.`,
      validation:{}
  },
  deleted: {
      desc: `Deleted datetime of the user auth.`,
      validation:{}
  },
};
const  UserAuthenticationVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  at_least_one_field_required: {
    desc: `At least one of the following fields must be provided: identify or otp.`,
    validation:{} 
  },
  identify_confirm: {
    desc: `Enter your password again.`,
    validation:{
      isSameAs: `Your [identify_confirm] and [identify] must be same.`,
    }
  },
  un_pe_pm: {
    desc: `Enter your username or primary email or primary mobile to sign in.`,
    validation:{}
  },
  pass_recover_url: {
    desc: `Password recover url.`,
    validation: {}
  },
  pass_recover_token:{
    desc: `Password recover token.`,
    validation: {}
  },
  session:{
    desc: `Authenticated user currect session.`,
    validation:{}
  },
  udevice: {
    desc: `Authenticated user registered device.`,
    validation:{}
  },
  device: {
    desc: `Authenticated user currect device.`,
    validation:{}
  },
  authenticated:{
    desc: `When user is authenticated (signin), basic user auth info of the user.`,
    validation:{}
  },
  authorisation: {
    desc: `Authenticated user currect authorisation (roles).`,
    validation:{}
  },
  uauthorisation: {
    desc: `Authorisations (roles) of the authenticated user.`,
    validation:{}
  },
  u_id:{
    desc: `user id for grant signup`,
    validation:{}
  },
  fr_user: {
      desc: `User info of the user.`,
      validation:{}
  },
  fr_user_authorisations:{
    desc: `Authorisations (roles) of the user.`,
    validation:{}
  },
  fr_user_sessions: {
    desc: `Sessions of the user.`,
    validation:{}
  }
}
export const UserAuthenticationEntityMeta = {...UserAuthenticationEntityFieldMeta, ...UserAuthenticationVirtualFieldMeta};
const meta = UserAuthenticationEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Entity({
  name: 'user_authentication',
  engine: 'InnoDB',
})
export class UserAuthenticationEntity implements EntityCRUDTypeDefinition {

  static colprefix: string = `au_`;
  static uploaddir: string = `user-authentication`;

  static metaname: string = (UserAuthenticationEntity.name).replace(EntitySuffix, '');
  static metadesc: string = 'User authentication management module in application.';

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryGeneratedColumn({
    name: `${UserAuthenticationEntity.colprefix}id`, 
    type: `int`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`,
    comment: `FK(user => u_id)`,
  })
  id?: number;

  /**
   * Minimum 8 charector long
   * At least one digit 
   * At least one special character 
   * At least one uppercase letter
   * At least one lowercase letter
   * No leading period or newline
   * No spaces
   * Prevents three or more consecutive identical characters.
   * **/
  //@Field(() => String, {nullable: true, description: meta.identify.desc})
  @Column({
    name: `${UserAuthenticationEntity.colprefix}identify`, 
    type: `text`, 
    nullable: true,
    default: null,
    collation: `utf8mb4_general_ci`,
    comment: `If null, user is not allowed to logged in`,
  })
  @MinLength(meta.identify.validation?.minLength as number, { message: meta.identify.validation?.minLengthMsg })
  @Matches(meta.identify.validation?.matchRegEx as RegExp, { message: meta.identify.validation?.matchRegExMsg })
  @IsOptional()
  identify?: string;

  /**
   * same as identify
   * **/
  //@Field(() => String, {nullable: true, description: meta.identify_last.desc})
  @Column({
    name: `${UserAuthenticationEntity.colprefix}identify_last`, 
    type: `text`, 
    nullable: true,
    default: null,
    collation: `utf8mb4_general_ci`,
    comment: `save previous auth identification`,
  })
  @MinLength(meta.identify.validation?.minLength as number, { message: meta.identify.validation?.minLengthMsg })
  @Matches(meta.identify.validation?.matchRegEx as RegExp, {
    message: meta.identify.validation?.matchRegExMsg
  })
  @IsOptional()
  identify_last?: string;

  //@Field(() => DateTime, {nullable: true, description: meta.last_changed.desc})
  @Column({
    name: `${UserAuthenticationEntity.colprefix}last_changed`, 
    type: `datetime`, 
    nullable: true,
    default: null,
  })
  @IsOptional()
  @Index(`${InIndexPrefix}${UserAuthenticationEntity.colprefix}last_changed`, { unique: false })
  last_changed?: Date;

  //@Field(() => DateTime, {nullable: true, description: meta.force_reset.desc})
  @Column({
    name: `${UserAuthenticationEntity.colprefix}force_reset`, 
    type: `datetime`, 
    nullable: true,
    default: null,
    comment: `date-time => Yes | null => No`,
  })
  @IsOptional()
  @Index(`${InIndexPrefix}${UserAuthenticationEntity.colprefix}force_reset`, { unique: false })
  force_reset?: Date;

  @Field(() => String, {nullable: true, description: meta.otp.desc})
  @Column({
    name: `${UserAuthenticationEntity.colprefix}otp`,
    type: `varchar`,
    nullable: true,
    default: null,
    collation: `utf8mb4_general_ci`,
    comment: `used for signin using opt`,
    length: meta.otp.validation.maxLength,
  })
  @IsOptional()
  @MaxLength(meta.otp.validation.maxLength as number, {message: meta.otp.validation.maxLengthMsg})
  otp?: string;

  @Field(() => DateTime, {nullable: true, description: meta.otp_expiry.desc})
  @Column({
    name: `${UserAuthenticationEntity.colprefix}otp_expiry`,
    type: `datetime`,
    nullable: true,
    default: null,
    comment: `Expiry date of OTP`,
  })
  @IsOptional()
  otp_expiry?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${UserAuthenticationEntity.colprefix}created`,
    type: `datetime`,
    update: false,
  })
  @Index(`${InIndexPrefix}${UserAuthenticationEntity.colprefix}created`, { unique: false })
  @IsOptional()
  created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${UserAuthenticationEntity.colprefix}updated`, 
    type: `datetime`,
    nullable: true
  })
  @Index(`${InIndexPrefix}${UserAuthenticationEntity.colprefix}updated`, { unique: false })
  updated?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${UserAuthenticationEntity.colprefix}deleted`, 
    type: `datetime`,
    nullable: true,
    comment:`date-time => Yes | null => No`,
  })
  @Index(`${InIndexPrefix}${UserAuthenticationEntity.colprefix}deleted`, { unique: false })
  deleted?: Date;



  // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

  @Field(() => UserEntity, {nullable: true, description: meta.fr_user.desc})
  @OneToOne(() => UserEntity, (entity: UserEntity) => entity.fr_user_auth)
  @JoinColumn({ name: `${UserAuthenticationEntity.colprefix}id` })
  fr_user?: UserEntity;

  @Field(() => [UserAuthorisationEntity], {nullable: true, description: meta.fr_user_authorisations.desc})
  @OneToMany(() => UserAuthorisationEntity, (entity: UserAuthorisationEntity) => entity.fr_user_auth)
  fr_user_authorisations?: UserAuthorisationEntity[];

  @Field(() => [SessionEntity], {nullable: true, description: meta.fr_user_sessions.desc})
  @OneToMany(() => SessionEntity, (entity: SessionEntity) => entity.fr_user_auth)
  fr_user_sessions?: SessionEntity[]


  
  // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████

}
