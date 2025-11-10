// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: FaqCategory
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum FaqCategoryUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const FaqCategoryUploadFileFieldEnumResolver: Record<keyof typeof FaqCategoryUploadFileFieldEnum, any> = {
  FILE_: FaqCategoryUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlFaqCategoryUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(FaqCategoryUploadFileFieldEnum, {
      name: 'FaqCategoryUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'FaqCategory upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `FaqCategory upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({FaqCategoryUploadFileFieldEnum: FaqCategoryUploadFileFieldEnumResolver});
}
// call above function to register