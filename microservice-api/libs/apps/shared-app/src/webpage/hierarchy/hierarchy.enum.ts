// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: WebPageHierarchy
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum WebPageHierarchyUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const WebPageHierarchyUploadFileFieldEnumResolver: Record<keyof typeof WebPageHierarchyUploadFileFieldEnum, any> = {
  FILE_: WebPageHierarchyUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlWebPageHierarchyUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(WebPageHierarchyUploadFileFieldEnum, {
      name: 'WebPageHierarchyUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'WebPageHierarchy upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `WebPageHierarchy upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({WebPageHierarchyUploadFileFieldEnum: WebPageHierarchyUploadFileFieldEnumResolver});
}
// call above function to register