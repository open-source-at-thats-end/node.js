// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: SettingPreference
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { SettingPreferenceEntityMeta as meta } from "./entities/preference.entity";

export enum SettingPreferenceUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const SettingPreferenceUploadFileFieldEnumResolver: Record<keyof typeof SettingPreferenceUploadFileFieldEnum, any> = {
  FILE_: SettingPreferenceUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlSettingPreferenceUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(SettingPreferenceUploadFileFieldEnum, {
      name: 'SettingPreferenceUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'SettingPreference upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `SettingPreference upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({SettingPreferenceUploadFileFieldEnum: SettingPreferenceUploadFileFieldEnumResolver});
}
// call above function to register