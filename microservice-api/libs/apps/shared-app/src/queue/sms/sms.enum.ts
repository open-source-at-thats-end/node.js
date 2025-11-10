// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: QueueSms
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { QueueSmsEntityMeta as meta } from "./entities/sms.entity";

export enum QueueSmsUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const QueueSmsUploadFileFieldEnumResolver: Record<keyof typeof QueueSmsUploadFileFieldEnum, any> = {
  FILE_: QueueSmsUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlQueueSmsUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(QueueSmsUploadFileFieldEnum, {
      name: 'QueueSmsUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'QueueSms upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `QueueSms upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({QueueSmsUploadFileFieldEnum: QueueSmsUploadFileFieldEnumResolver});
}
// call above function to register