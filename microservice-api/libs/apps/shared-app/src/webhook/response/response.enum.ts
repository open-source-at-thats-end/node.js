// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: WebhookResponse
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { WebhookResponseEntityMeta as meta } from "./entities/response.entity";

export enum WebhookResponseUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const WebhookResponseUploadFileFieldEnumResolver: Record<keyof typeof WebhookResponseUploadFileFieldEnum, any> = {
  FILE_: WebhookResponseUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlWebhookResponseUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(WebhookResponseUploadFileFieldEnum, {
      name: 'WebhookResponseUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'WebhookResponse upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `WebhookResponse upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({WebhookResponseUploadFileFieldEnum: WebhookResponseUploadFileFieldEnumResolver});
}
// call above function to register