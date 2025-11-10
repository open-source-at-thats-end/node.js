// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: Lead
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { LeadEntityMeta as meta } from "./entities/lead.entity";

export enum LeadUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const LeadUploadFileFieldEnumResolver: Record<keyof typeof LeadUploadFileFieldEnum, any> = {
  FILE_: LeadUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlLeadUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(LeadUploadFileFieldEnum, {
      name: 'LeadUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'Lead upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Lead upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({LeadUploadFileFieldEnum: LeadUploadFileFieldEnumResolver});
}
// call above function to register