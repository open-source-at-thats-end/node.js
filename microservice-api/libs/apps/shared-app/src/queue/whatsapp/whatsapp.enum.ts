// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: QueueWhatsapp
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { QueueWhatsappEntityMeta as meta } from "./entities/whatsapp.entity";

export enum QueueWhatsappUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const QueueWhatsappUploadFileFieldEnumResolver: Record<keyof typeof QueueWhatsappUploadFileFieldEnum, any> = {
  FILE_: QueueWhatsappUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlQueueWhatsappUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(QueueWhatsappUploadFileFieldEnum, {
      name: 'QueueWhatsappUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'QueueWhatsapp upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `QueueWhatsapp upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({QueueWhatsappUploadFileFieldEnum: QueueWhatsappUploadFileFieldEnumResolver});
}
// call above function to register