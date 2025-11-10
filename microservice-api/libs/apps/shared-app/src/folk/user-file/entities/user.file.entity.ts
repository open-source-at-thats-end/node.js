import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, YesNoEnum, UploadField, EntitySuffix, ResolveGraphFieldRelation, IsNotEntityField, UploadFileAccessUrlDto, AllowedFiles, InIndexPrefix, RecordPositionField  } from "@libs/library-app";
import { IsEmail, IsInt, IsMobilePhone, IsNotEmpty, IsOptional, Max, MaxLength, Min, MinLength, Validate, ValidateIf } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { GraphQLEmailAddress } from "graphql-scalars";
import path from 'path';
import { UserEntity } from "../../user/entities/user.entity";



const UserFileEntityFieldMeta: EntityMetaCRUDTypeDefinition = {
  id: {
      desc: `Unique ID of the entity, auto generated.`,
      validation: {}
  },
  u_id: {
      desc: `User ID of the user file`,
      validation:{},
  },
  file: {
    desc: `User additional files.`,
    validation:{
      validFileFormat: AllowedFiles.validFileFormat,
      validFileFormatMsg: AllowedFiles.validFileFormatMsg,
      validMimeType: AllowedFiles.validMimeType,
      maxFileSize: 10 * 1024 * 1024, // 5 mb
      maxFileSizeMsg: 'Maximum file size is 10 MB.',
      maxCount: 5,
      maxCountMsg: '5 files are allowed to upload at a time.',
      maxLength: 255,
      maxLengthMsg: `Maximum length of file is 255 characters..`,
    }
  },
  record_position:{
    desc: `User file record position`,
    validation:{}
  },
  created: {
    desc: `Date time when user file is created.`,
    validation:{}
  },
  updated: {
      desc: `Date time when user file is updated.`,
      validation:{}
  },
  deleted: {
    desc: `When record is soft deleted or soft removed, date-time will be saved otherwise null to indicate record is not deleted.`,
    validation:{}
  },
};
const  UserFileVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {
  file_url: {
    desc: `User attachment file url.`,
    validation: {}
  },
  fr_user: {
    desc: `User of the user identity card.`,
    validation: {}
  },

}
export const UserFileEntityMeta = {...UserFileEntityFieldMeta, ...UserFileVirtualFieldMeta};
const meta = UserFileEntityMeta; // need to use in this file down the line

/*
id?: any;
u_id?: any;
file?: any;
created?: any;
updated?: any;
deleted?: any;
*/

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")') // TODO: SUPERGRAPH_FOREIGN_RELATION step 1 - add directive
@Entity({
  name: 'user_file',
  engine: 'InnoDB',
})
export class UserFileEntity implements EntityCRUDTypeDefinition {

  static colprefix: string = `ufile_`;
  static uploaddir: string = `user-file`;
  static recorddir: string = `{{u_id}}`;

  static metaname: string = (UserFileEntity.name).replace(EntitySuffix, '');
  static metadesc: string = `User additional files management module.`;

  

  @Field(() => Int, {nullable: true, description: meta.id.desc})
  @PrimaryGeneratedColumn({
    name: `${UserFileEntity.colprefix}id`, 
    type: `int`, 
    unsigned: true, 
    primaryKeyConstraintName: `PRIMARY`,
  })
  id?: number;

  @Field(() => Int, {nullable: true, description: meta.u_id.desc})
  @Column({
    name: `${UserFileEntity.colprefix}u_id`,
    type: `int`,
    unsigned: true,
    comment:`FK(user => u_id)`,
  })
  @IsInt()
  @IsNotEmpty()
  @Index(`${InIndexPrefix}${UserFileEntity.colprefix}u_id`, { unique: false })
  u_id?: number;

  @Field(() => String, {nullable: true, description: meta.file.desc})
  @Column({
    name: `${UserFileEntity.colprefix}file`, 
    type: `varchar`, 
    nullable: true,
    collation: `utf8mb4_general_ci`,
    length: meta.file.validation.maxLength,
  })
  @MaxLength(meta.file.validation.maxLength as number, {message: meta.file.validation.maxLengthMsg})
  @IsOptional({ message: `${meta.file.validation.validFileFormatMsg} ${meta.file.validation.maxFileSizeMsg} ${meta.file.validation.maxCountMsg}` })
  @UploadField({
    ref_id_field: `u_id`,
    ref_relation_field: `fr_user`,
    access_url_field: `file_url`,
    upload_dir: path.join(`{{ref_id}}`),
    valid_file_format: meta.file.validation.validFileFormat as string[],
    valid_mime_type: meta.file.validation.validMimeType as string[],
    max_file_size: meta.file.validation.maxFileSize as number,
    req_max_count: meta.file.validation.maxCount as number,
  })
  file?: string;

  @Field(() => UploadFileAccessUrlDto, {nullable: true, description: meta.file_url.desc})
  @IsNotEntityField(() => String)
  file_url?: UploadFileAccessUrlDto;

  @Field(()=> Int, {nullable: true, description: meta.record_position.desc})
  @Column({
    name: `${UserFileEntity.colprefix}record_position`, 
    type: `int`, 
    nullable: false,
  })
  @RecordPositionField()
  record_position?:number;

  @Field(() => DateTime, {nullable: true, description: meta.created.desc})
  @CreateDateColumn({
    name: `${UserFileEntity.colprefix}created`,
    type: `datetime`,
    update: false,
  })
  @Index(`${InIndexPrefix}${UserFileEntity.colprefix}created`, { unique: false })
  @IsOptional()
  created?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
  @UpdateDateColumn({
    name: `${UserFileEntity.colprefix}updated`, 
    type: `datetime`,
    nullable: true
  })
  @Index(`${InIndexPrefix}${UserFileEntity.colprefix}updated`, { unique: false })
  updated?: Date;

  @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
  @DeleteDateColumn({
    name: `${UserFileEntity.colprefix}deleted`, 
    type: `datetime`,
    nullable: true,
    comment:`date-time => Yes | null => No`,
  })
  @Index(`${InIndexPrefix}${UserFileEntity.colprefix}deleted`, { unique: false })
  deleted?: Date;



  // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

  @Field(() => UserEntity, {nullable: true, description: meta.fr_user.desc})
  @ManyToOne(() => UserEntity, (entity: UserEntity) => entity.fr_user_files)
  @JoinColumn({ name: `${UserFileEntity.colprefix}u_id` })
  fr_user?: UserEntity;


  // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
  
}