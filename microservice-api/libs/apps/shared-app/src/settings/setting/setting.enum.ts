// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: Setting
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { SettingEntityMeta as meta } from "./entities/setting.entity";

export enum AccessTypeEnum {
  PUBLIC = 1,
  PRIVATE = 2
};

export const AccessTypeEnumResolver: Record<keyof typeof AccessTypeEnum, any> = {
  PUBLIC: AccessTypeEnum.PUBLIC,
  PRIVATE: AccessTypeEnum.PRIVATE,
  
};
export function registerGraphqlEnumAccessType(){
  // register new enum resolver
  registerEnumType(AccessTypeEnum, {
    name: 'AccessTypeEnum', // This registers the enum with GraphQL
    description: 'Used to define setting access type available for end user or internal use.',
    valuesMap:{
      PUBLIC:{
        description: 'Public'
      },
      PRIVATE:{
        description: 'Private'
      },
    }
  });
  // add resolver to graphql
  addGrapaphQLExternalResolvers({AccessTypeEnum: AccessTypeEnumResolver});
}
registerGraphqlEnumAccessType();

// █████████████████████████████████████████████████████████████████████████████████████████████

export enum SettingUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const SettingUploadFileFieldEnumResolver: Record<keyof typeof SettingUploadFileFieldEnum, any> = {
  FILE_: SettingUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlSettingUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(SettingUploadFileFieldEnum, {
      name: 'SettingUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'Setting upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Setting upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({SettingUploadFileFieldEnum: SettingUploadFileFieldEnumResolver});
}
// call above function to register

// █████████████████████████████████████████████████████████████████████████████████████████████
// when any new setting type is added in database table need to add enmum here
export enum SettingJsonTypeEnum {
  RAW = 1,
  BY_SETTYPE = 2,
  BY_CATEGORY = 3,
};

export const SettingJsonTypeEnumResolver: Record<keyof typeof SettingJsonTypeEnum, any> = {
  RAW: SettingJsonTypeEnum.RAW,
  BY_SETTYPE: SettingJsonTypeEnum.BY_SETTYPE,
  BY_CATEGORY: SettingJsonTypeEnum.BY_CATEGORY,
};

export function registerGraphqlSettingJsonTypeEnum(){
  // register new enum resolver
  registerEnumType(SettingJsonTypeEnum, {
    name: 'SettingJsonTypeEnum', // This registers the enum with GraphQL
    description: 'SettingType to retrive specific settings with specific format of JSON',
    valuesMap:{
      RAW: {
        description: `Single dymential setting. Response json will be single dimensional { key: setting }. This is default.`
      },
      BY_SETTYPE: {
        description: `All settings grouped by setting type. Response json will be two dimensional {settype: { key: setting }}.`
      },
      BY_CATEGORY: {
        description: `All settings grouped by setting category. Setting type will be added by default so response will be three dimensional {settype: { categoty: { key: setting }}}.`
      },
    }
  });
  // add resolver to graphql
  addGrapaphQLExternalResolvers({SettingJsonTypeEnum: SettingJsonTypeEnumResolver});
}
// call above function to register
registerGraphqlSettingJsonTypeEnum();
