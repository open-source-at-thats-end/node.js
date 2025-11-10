// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: BusinessPrimaryCategory
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum BusinessPrimaryCategoryUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const BusinessPrimaryCategoryUploadFileFieldEnumResolver: Record<keyof typeof BusinessPrimaryCategoryUploadFileFieldEnum, any> = {
  FILE_: BusinessPrimaryCategoryUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlBusinessPrimaryCategoryUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(BusinessPrimaryCategoryUploadFileFieldEnum, {
      name: 'BusinessPrimaryCategoryUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'BusinessPrimaryCategory upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `BusinessPrimaryCategory upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({BusinessPrimaryCategoryUploadFileFieldEnum: BusinessPrimaryCategoryUploadFileFieldEnumResolver});
}
// call above function to register