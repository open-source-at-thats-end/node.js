// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: LeadPotential
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum LeadPotentialUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const LeadPotentialUploadFileFieldEnumResolver: Record<keyof typeof LeadPotentialUploadFileFieldEnum, any> = {
  FILE_: LeadPotentialUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlLeadPotentialUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(LeadPotentialUploadFileFieldEnum, {
      name: 'LeadPotentialUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'LeadPotential upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `LeadPotential upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({LeadPotentialUploadFileFieldEnum: LeadPotentialUploadFileFieldEnumResolver});
}
// call above function to register