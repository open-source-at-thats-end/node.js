// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: Business
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum BusinessUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const BusinessUploadFileFieldEnumResolver: Record<keyof typeof BusinessUploadFileFieldEnum, any> = {
  FILE_: BusinessUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlBusinessUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(BusinessUploadFileFieldEnum, {
      name: 'BusinessUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'Business upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Business upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({BusinessUploadFileFieldEnum: BusinessUploadFileFieldEnumResolver});
}
// call above function to register