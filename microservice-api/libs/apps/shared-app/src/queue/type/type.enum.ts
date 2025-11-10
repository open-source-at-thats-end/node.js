// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: QueueType
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { QueueTypeEntityMeta as meta } from "./entities/type.entity";

export enum QueueTypeUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const QueueTypeUploadFileFieldEnumResolver: Record<keyof typeof QueueTypeUploadFileFieldEnum, any> = {
  FILE_: QueueTypeUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlQueueTypeUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(QueueTypeUploadFileFieldEnum, {
      name: 'QueueTypeUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'QueueType upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `QueueType upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({QueueTypeUploadFileFieldEnum: QueueTypeUploadFileFieldEnumResolver});
}
// call above function to register