// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: ConnectionSource
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { ConnectionSourceEntityMeta as meta } from "./entities/source.entity";

export enum ConnectionSourceUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const ConnectionSourceUploadFileFieldEnumResolver: Record<keyof typeof ConnectionSourceUploadFileFieldEnum, any> = {
  FILE_: ConnectionSourceUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlConnectionSourceUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(ConnectionSourceUploadFileFieldEnum, {
      name: 'ConnectionSourceUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'ConnectionSource upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `ConnectionSource upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({ConnectionSourceUploadFileFieldEnum: ConnectionSourceUploadFileFieldEnumResolver});
}
// call above function to register