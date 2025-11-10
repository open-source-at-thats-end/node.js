// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: SessionMeta
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { SessionMetaEntityMeta as meta } from "./entities/session.meta.entity";

export enum SessionMetaUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const SessionMetaUploadFileFieldEnumResolver: Record<keyof typeof SessionMetaUploadFileFieldEnum, any> = {
  FILE_: SessionMetaUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlSessionMetaUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(SessionMetaUploadFileFieldEnum, {
      name: 'SessionMetaUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'SessionMeta upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `SessionMeta upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({SessionMetaUploadFileFieldEnum: SessionMetaUploadFileFieldEnumResolver});
}
// call above function to register