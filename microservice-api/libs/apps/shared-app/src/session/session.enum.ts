// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: Session
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { SessionEntityMeta as meta } from "./entities/session.entity";

export enum SessionUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const SessionUploadFileFieldEnumResolver: Record<keyof typeof SessionUploadFileFieldEnum, any> = {
  FILE_: SessionUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlSessionUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(SessionUploadFileFieldEnum, {
      name: 'SessionUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'Session upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Session upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({SessionUploadFileFieldEnum: SessionUploadFileFieldEnumResolver});
}
// call above function to register