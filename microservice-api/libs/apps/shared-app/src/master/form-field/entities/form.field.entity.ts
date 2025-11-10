import { EntityMetaCRUDTypeDefinition, EntityCRUDTypeDefinition, DateTime, EntitySuffix, UnIndexPrefix, InIndexPrefix  } from "@libs/library-app";
import { IsJSON, IsNotEmpty, IsOptional, MaxLength, MinLength } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, Unique } from "typeorm";
import { Directive, Field, Int, ObjectType } from "@nestjs/graphql";
import { SettingEntity } from "../../../settings/setting/entities/setting.entity";

const  FormFieldEntityFieldMeta: EntityMetaCRUDTypeDefinition = {

  id: {
      desc: `Unique ID of the settingformcontroltype, auto generated.`,
      validation: {} 
  },
  title: {
      desc: `Title of the settingformcontroltype.`,
      validation:{
        maxLength: 128,
        maxLengthMsg: `Title of the settingformcontroltype length is only 128 characters.`,
      }
  },
  desc: {
      desc: `Description of the settingformcontroltype.`,
      validation:{
        maxLength: 255,
        maxLengthMsg: `Description of the settingformcontroltype length is only 255 characters.`,
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
const  FormFieldVirtualFieldMeta: EntityMetaCRUDTypeDefinition = {

  fr_setting: {
    desc: `Form field type`,
    validation: {}
  },

}
export const FormFieldEntityMeta = {...FormFieldEntityFieldMeta, ...FormFieldVirtualFieldMeta};
const meta = FormFieldEntityMeta; // need to use in this file down the line

@ObjectType({ isAbstract: true })
@Directive('@key(fields: "id")')
@Entity({
  name: 'form_field',
  engine: 'InnoDB',
})

export class FormFieldEntity implements EntityCRUDTypeDefinition {

    static colprefix: string = 'frmfield_';
    static uploaddir: string = 'form-field';

    static metaname: string = (FormFieldEntity.name).replace(EntitySuffix, '');
    static metadesc: string = 'Provides list of HTML form fields.';

    @Field(() => Int, {nullable: true, description: meta.id.desc})
    @PrimaryGeneratedColumn({
      name: `${FormFieldEntity.colprefix}id`, 
      type: `tinyint`, 
      unsigned: true, 
      primaryKeyConstraintName: `PRIMARY`,
    })
    id?: number;

    @Field(() => String, {nullable: true, description: meta.title.desc})
    @Column({
      name: `${FormFieldEntity.colprefix}title`, 
      type: `varchar`,
      length: meta.title.validation.maxLength,
      collation: `utf8mb4_general_ci`,
    })
    @Index(`${UnIndexPrefix}${FormFieldEntity.colprefix}title`, { unique: true })
    @MaxLength(meta.title.validation.maxLength as number, {message: meta.title.validation.maxLengthMsg})
    @IsNotEmpty()
    title?: string;

    @Field(() => String, {nullable: true, description: meta.desc.desc})
    @Column({
      name: `${FormFieldEntity.colprefix}desc`, 
      type: `varchar`,
      length: meta.desc.validation.maxLength,
      collation: `utf8mb4_general_ci`,
      nullable: true,
      default: null,
    })
    @Index(`${InIndexPrefix}${FormFieldEntity.colprefix}desc`, { unique: false })
    @MaxLength(meta.desc.validation.maxLength as number, {message: meta.desc.validation.maxLengthMsg})
    @IsOptional()
    desc?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    @CreateDateColumn({
      name: `${FormFieldEntity.colprefix}created`,
      type: `datetime`,
      update: false,
    })
    @Index(`${InIndexPrefix}${FormFieldEntity.colprefix}created`, { unique: false })
     created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    @UpdateDateColumn({
      name: `${FormFieldEntity.colprefix}updated`, 
      type: `datetime`,
      nullable: true
    })
    @Index(`${InIndexPrefix}${FormFieldEntity.colprefix}updated`, { unique: false })
    updated?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.deleted.desc})
    @DeleteDateColumn({
      name: `${FormFieldEntity.colprefix}deleted`, 
      type: `datetime`,
      nullable: true,
      comment:`date-time: yes | null: no`,
    })
    @Index(`${InIndexPrefix}${FormFieldEntity.colprefix}deleted`, { unique: false })
    deleted?: Date;
    


    // ████ INTERNAL RELATIONS ████████████████████████████████████████████████

    @Field(() => [SettingEntity], {nullable: true, description: meta.fr_setting.desc})
    @OneToMany(() => SettingEntity, (entity: SettingEntity) => entity.fr_form_fields)
    fr_setting?: SettingEntity[];


    // ████ EXTERNAL RELATIONS ████████████████████████████████████████████████
    
}