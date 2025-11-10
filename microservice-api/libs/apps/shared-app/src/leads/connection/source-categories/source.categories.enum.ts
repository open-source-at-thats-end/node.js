// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: ConnectionSourceCategories
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { ConnectionSourceCategoriesEntityMeta as meta } from "./entities/source.categories.entity";

export enum ConnectionSourceCategoriesUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const ConnectionSourceCategoriesUploadFileFieldEnumResolver: Record<keyof typeof ConnectionSourceCategoriesUploadFileFieldEnum, any> = {
  FILE_: ConnectionSourceCategoriesUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlConnectionSourceCategoriesUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(ConnectionSourceCategoriesUploadFileFieldEnum, {
      name: 'ConnectionSourceCategoriesUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'Connection Source Categories upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `ConnectionSourceCategories upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({ConnectionSourceCategoriesUploadFileFieldEnum: ConnectionSourceCategoriesUploadFileFieldEnumResolver});
}
// call above function to register