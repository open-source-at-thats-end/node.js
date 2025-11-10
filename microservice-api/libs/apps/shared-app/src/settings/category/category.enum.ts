// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: SettingCategory
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { SettingCategoryEntityMeta as meta } from "./entities/category.entity";

export enum SettingCategoryUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const SettingCategoryUploadFileFieldEnumResolver: Record<keyof typeof SettingCategoryUploadFileFieldEnum, any> = {
  FILE_: SettingCategoryUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlSettingCategoryUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(SettingCategoryUploadFileFieldEnum, {
      name: 'SettingCategoryUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'SettingCategory upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `SettingCategory upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({SettingCategoryUploadFileFieldEnum: SettingCategoryUploadFileFieldEnumResolver});
}
// call above function to register