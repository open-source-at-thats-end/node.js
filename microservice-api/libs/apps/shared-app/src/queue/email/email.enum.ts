// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: QueueEmail
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { QueueEmailEntityMeta as meta } from "./entities/email.entity";

export enum QueueEmailUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const QueueEmailUploadFileFieldEnumResolver: Record<keyof typeof QueueEmailUploadFileFieldEnum, any> = {
  FILE_: QueueEmailUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlQueueEmailUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(QueueEmailUploadFileFieldEnum, {
      name: 'QueueEmailUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'QueueEmail upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `QueueEmail upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({QueueEmailUploadFileFieldEnum: QueueEmailUploadFileFieldEnumResolver});
}
// call above function to register