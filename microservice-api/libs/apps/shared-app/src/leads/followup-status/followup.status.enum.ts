// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: LeadFollowupStatus
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum LeadFollowupStatusUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const LeadFollowupStatusUploadFileFieldEnumResolver: Record<keyof typeof LeadFollowupStatusUploadFileFieldEnum, any> = {
  FILE_: LeadFollowupStatusUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlLeadFollowupStatusUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(LeadFollowupStatusUploadFileFieldEnum, {
      name: 'LeadFollowupStatusUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'LeadFollowupStatus upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `LeadFollowupStatus upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({LeadFollowupStatusUploadFileFieldEnum: LeadFollowupStatusUploadFileFieldEnumResolver});
}
// call above function to register