// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: LeadFollowup
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { LeadFollowupEntityMeta as meta } from "./entities/lead.followup.entity";

export enum LeadFollowupUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const LeadFollowupUploadFileFieldEnumResolver: Record<keyof typeof LeadFollowupUploadFileFieldEnum, any> = {
  FILE_: LeadFollowupUploadFileFieldEnum.FILE_,
};

/*export enum LeadTypeEnum {
  CALL = 1,
  EMAIL = 2,
  MEETING = 3,
  WHATSAPP = 4
};

export const LeadTypeEnumResolver: Record<keyof typeof LeadTypeEnum, any> = {
  CALL: LeadTypeEnum.CALL,
  EMAIL: LeadTypeEnum.EMAIL,
  MEETING: LeadTypeEnum.MEETING,
  WHATSAPP: LeadTypeEnum.WHATSAPP
};
export function registerGraphqlEnumType(){
  // register new enum resolver
  registerEnumType(LeadTypeEnum, {
    name: 'LeadTypeEnum', // This registers the enum with GraphQL
    description: 'Used to define setting send by available for end user or internal use.',
    valuesMap:{
      CALL:{
        description: 'Call'
      },
      EMAIL:{
        description: 'Email'
      },
      MEETING:{
        description: 'Meeting'
      },
      WHATSAPP:{
        description: 'Whatsapp'
      }
    }
  });
  // add resolver to graphql
  addGrapaphQLExternalResolvers({LeadTypeEnum: LeadTypeEnumResolver});
}
registerGraphqlEnumType();*/
  
export function registerGraphqlLeadFollowupUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(LeadFollowupUploadFileFieldEnum, {
      name: 'LeadFollowupUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'LeadFollowup upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `LeadFollowup upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({LeadFollowupUploadFileFieldEnum: LeadFollowupUploadFileFieldEnumResolver});
}
// call above function to register