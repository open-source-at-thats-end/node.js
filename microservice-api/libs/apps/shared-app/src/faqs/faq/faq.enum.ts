// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: Faq
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum FaqUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const FaqUploadFileFieldEnumResolver: Record<keyof typeof FaqUploadFileFieldEnum, any> = {
  FILE_: FaqUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlFaqUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(FaqUploadFileFieldEnum, {
      name: 'FaqUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'Faq upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Faq upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({FaqUploadFileFieldEnum: FaqUploadFileFieldEnumResolver});
}
// call above function to register