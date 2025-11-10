// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: SettingType
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { SettingTypeEntityMeta as meta } from "./entities/type.entity";

export enum SettingTypeUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const SettingTypeUploadFileFieldEnumResolver: Record<keyof typeof SettingTypeUploadFileFieldEnum, any> = {
  FILE_: SettingTypeUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlSettingTypeUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(SettingTypeUploadFileFieldEnum, {
      name: 'SettingTypeUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'SettingType upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `SettingType upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({SettingTypeUploadFileFieldEnum: SettingTypeUploadFileFieldEnumResolver});
}
// call above function to register


// █████████████████████████████████████████████████████████████████████████████████████████████
// when any new setting type is added in database table need to add enmum here
export enum SettingTypeEnum {
  SYSTEM_SETTINGS = 1,
  DEVELOPER_SETTINGS = 2,
  BACK_OFFICE_SETTINGS = 3,
  USER_SETTINGS = 4,
  USER_AUTHORISATION_SETTINGS = 5, 
};

export const SettingTypeEnumResolver: Record<keyof typeof SettingTypeEnum, any> = {
  SYSTEM_SETTINGS: SettingTypeEnum.SYSTEM_SETTINGS,
  DEVELOPER_SETTINGS: SettingTypeEnum.DEVELOPER_SETTINGS,
  BACK_OFFICE_SETTINGS: SettingTypeEnum.BACK_OFFICE_SETTINGS,
  USER_SETTINGS: SettingTypeEnum.USER_SETTINGS,
  USER_AUTHORISATION_SETTINGS: SettingTypeEnum.USER_AUTHORISATION_SETTINGS,
};

export function registerGraphqlSettingTypeEnum(){
  // register new enum resolver
  registerEnumType(SettingTypeEnum, {
    name: 'SettingTypeEnum', // This registers the enum with GraphQL
    description: 'SettingType to retrive specific settings',
    valuesMap:{
      SYSTEM_SETTINGS: {
        description: `These are global settings of the application.`
      },
      DEVELOPER_SETTINGS: {
        description: `These settings are used for development purpose and not applicable to end user or admin.`
      },
      BACK_OFFICE_SETTINGS: {
        description: `These settings are for administrative panle and will be maanged by super admin, admin or webmaster as per access permission.`
      },
      USER_SETTINGS: {
        description: `These settings are for end user and will be maanged by end user after signup. Need to send user id in record_id if you choose this setting type.`
      },
      USER_AUTHORISATION_SETTINGS: {
        description: `These settings are for end user role/authorisation maanged by end user after signup. Need to send user authorisation id in record_id if you choose this setting type.`
      }
    }
  });
  // add resolver to graphql
  addGrapaphQLExternalResolvers({SettingTypeEnum: SettingTypeEnumResolver});
}
// call above function to register
registerGraphqlSettingTypeEnum();