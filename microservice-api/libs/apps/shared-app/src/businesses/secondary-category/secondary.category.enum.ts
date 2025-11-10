// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: BusinessSecondaryCategory
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum BusinessSecondaryCategoryUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const BusinessSecondaryCategoryUploadFileFieldEnumResolver: Record<keyof typeof BusinessSecondaryCategoryUploadFileFieldEnum, any> = {
  FILE_: BusinessSecondaryCategoryUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlBusinessSecondaryCategoryUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(BusinessSecondaryCategoryUploadFileFieldEnum, {
      name: 'BusinessSecondaryCategoryUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'BusinessSecondaryCategory upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `BusinessSecondaryCategory upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({BusinessSecondaryCategoryUploadFileFieldEnum: BusinessSecondaryCategoryUploadFileFieldEnumResolver});
}
// call above function to register