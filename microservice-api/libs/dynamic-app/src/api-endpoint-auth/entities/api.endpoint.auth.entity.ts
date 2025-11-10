import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';
import { Allow, IsEmail, IsJWT, IsNotEmpty, IsOptional, Matches, MinLength } from 'class-validator';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, IsNull, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ApiUserRoleEnum } from '../api.endpoint.auth.enum';
import { GraphQLEmailAddress, GraphQLJWT } from 'graphql-scalars';
import { DateTime, EntityCRUDTypeDefinition, EntityMetaCRUDTypeDefinition, EntitySuffix } from '@libs/library-app';

@ObjectType({ isAbstract: true })
@Directive('@shareable')
@Directive('@key(fields: "id")')
@Entity({
  name: 'api_endpoint_auth',
  engine: 'InnoDB',
})
export class ApiEndpointAuthEntity implements EntityCRUDTypeDefinition {
  static colprefix: string = ``;
  static uploaddir: string = ``;

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