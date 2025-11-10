// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: WebhookResponseData
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { WebhookResponseDataEntityMeta as meta } from "./entities/response.data.entity";

export enum WebhookResponseDataUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const WebhookResponseDataUploadFileFieldEnumResolver: Record<keyof typeof WebhookResponseDataUploadFileFieldEnum, any> = {
  FILE_: WebhookResponseDataUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlWebhookResponseDataUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(WebhookResponseDataUploadFileFieldEnum, {
      name: 'WebhookResponseDataUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'WebhookResponseData upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `WebhookResponseData upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({WebhookResponseDataUploadFileFieldEnum: WebhookResponseDataUploadFileFieldEnumResolver});
}
// call above function to register