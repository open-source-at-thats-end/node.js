// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: NewsLetterUser
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";



export enum NewsLetterUserUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const NewsLetterUserUploadFileFieldEnumResolver: Record<keyof typeof NewsLetterUserUploadFileFieldEnum, any> = {
  FILE_: NewsLetterUserUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlNewsLetterUserUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(NewsLetterUserUploadFileFieldEnum, {
      name: 'NewsLetterUserUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'NewsLetterUser upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `NewsLetterUser upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({NewsLetterUserUploadFileFieldEnum: NewsLetterUserUploadFileFieldEnumResolver});
}
// call above function to register