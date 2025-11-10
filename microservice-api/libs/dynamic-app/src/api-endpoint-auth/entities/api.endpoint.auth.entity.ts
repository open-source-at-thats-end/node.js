import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Allow, IsEmail, IsJWT, IsNotEmpty, IsOptional, Matches, MinLength } from 'class-validator';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, IsNull, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiUserRoleEnum } from '../api.endpoint.auth.enum';
import { GraphQLEmailAddress, GraphQLJWT } from 'graphql-scalars';
import { DateTime, EntityCRUDTypeDefinition, EntityMetaCRUDTypeDefinition, EntitySuffix } from '@libs/library-app';

// for data validation check documentation: https://github.com/typestack/class-validator

const  ApiEndpointAuthEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
  id: {
      desc: `Unique ID of the user, auto generated.`,
      validation:{
        isOptional: `Can be empty or provide id to update existing record.`
      }
  },
  role_id: {
      desc: `Required to gain access permission to restricted data.`,
      validation:{}
  },
  username: {
      desc: `Required to gain access to API endpoint.`,
      validation:{
        isNotEmpty: `Username is required for login.`,
        minLength: 5,
        minLengthMsg: `Username must be at least 5 characters long.`
      }
  },
  email: {
      desc: `Email is required for varification and communication.`,
      validation:{
        isMustBe: `Must be a valid email address.`
      }
  },
  identify: {
      desc: `Required to gain access to API endpoint using JWT token.`,
      validation:{
        matchRegExMsg: `Password should be combination of digit, uppercase, lowercase, special charector !@#$%^&* and no more than 3 consecutive identical characters.`,
        minLength: 8,
        minLengthMsg: `Password must be at least 8 characters long.`,
        matchRegEx: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\S{8,})(?!.*(\w)\1{2})/
      }
  },
  jwt_access_token: {
      desc: `Used for authentication using jwt bearer token. Life span is shorter.`,
      validation:{}
  },
  jwt_refresh_token: {
      desc: `Required to refresh jwt access token. Life span is bit longer.`,
      validation:{}
  },
  suspended: {
      desc: `If record is suspended, then date-time will be saved when record is suspended otherwise null to indicate record is not suspended.`,
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
const  ApiEndpointAuthVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  upsert_status: {
      desc: `Action type performed during upsert process, because upsert can create or update.`,
      validation:{}
  }
}
export const ApiEndpointAuthEntityMeta = {...ApiEndpointAuthEntityFieldMeta, ...ApiEndpointAuthVirtualFieldMeta};
const meta = ApiEndpointAuthEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@shareable')
@Directive('@key(fields: "id")')
@Entity({
  name: 'api_endpoint_auth',
  engine: 'InnoDB',
})
export class ApiEndpointAuthEntity implements EntityCRUDTypeDefinition {
  static colprefix: string = `aepu_`;
  static uploaddir: string = `api-end-point-auth`;

  static metaname: string = (ApiEndpointAuthEntity.name).replace(EntitySuffix, '');
  static metadesc: string = 'API acceess users, managed by API webmaster.';

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryGeneratedColumn({
    name: `${ApiEndpointAuthEntity.colprefix}id`, 
    type: `int`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`,
  })
  id?: number;
  
  @Field(() => ApiUserRoleEnum, {nullable: true, description: meta.role_id.desc})
  @Column({
    name: `${ApiEndpointAuthEntity.colprefix}role_id`, 
    type: `int`, 
    unsigned: true,
    default: 0,
  })
  @Allow()
  @Index()
  role_id?: ApiUserRoleEnum;

  @Field(() => String, {nullable: true, description: meta.username.desc})
  @Column({
    name: `${ApiEndpointAuthEntity.colprefix}username`, 
    type: `varchar`, 
    length: 128,
    unique: true,
  })
  @MinLength(meta.username.validation.minLength as number, { message: meta.username.validation.minLengthMsg })
  @IsNotEmpty({ message: meta.username.validation.isNotEmpty })
  @Index()
  username?: string;
  
  @Field(() => GraphQLEmailAddress, {nullable: true, description: meta.email.desc})
  @Column({
    name: `${ApiEndpointAuthEntity.colprefix}email`, 
    type: `varchar`, 
    length: 128,
  })
  @IsEmail({}, { message: meta.email.validation.isMustBe })
  @IsOptional()
  @Index()
  email?: string;
  
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
    name: `${ApiEndpointAuthEntity.colprefix}identify`, 
    type: `text`, 
    select: false
  })
  @MinLength(meta.identify.validation.minLength as number, { message: meta.identify.validation.minLengthMsg })
  @Matches(meta.identify.validation.matchRegEx as RegExp, {
    //#pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\S{8,})(?!.*(\w)\1{2})/
    message: meta.identify.validation?.matchRegExMsg
  })
  identify?: string;
  
  @Field(() => GraphQLJWT, {nullable: true, description: meta.jwt_access_token.desc})
  @Column({
    name: `${ApiEndpointAuthEntity.colprefix}jwt_access_token`, 
    type: `text`, 
    nullable: true,
  })
  @IsOptional()
  @IsJWT()
  jwt_access_token?: string | null; 
  
  @Field(() => GraphQLJWT, {nullable: true, description: meta.jwt_refresh_token.desc})
  @Column({
    name: `${ApiEndpointAuthEntity.colprefix}jwt_refresh_token`, 
    type: `text`, 
    nullable: true
  })
  @IsOptional()
  @IsJWT()
  jwt_refresh_token?: string | null;
  
  @Field(() => DateTime, {nullable: true, description: meta.suspended.desc})
  @Column({
    name: `${ApiEndpointAuthEntity.colprefix}suspended`, 
    type: `datetime`, 
    nullable: true,
    select: false,
    default: null,
  })
  @Index()
  suspended?: Date;
  
  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${ApiEndpointAuthEntity.colprefix}created`,
    update: false,
  })
  @Index()
  created?: Date;
  
  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${ApiEndpointAuthEntity.colprefix}updated`, 
    nullable: true
  })
  @Index()
  updated?: Date;
  
  @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${ApiEndpointAuthEntity.colprefix}deleted`, 
    nullable: true,
  })
  @Index()
  deleted?: Date;
}