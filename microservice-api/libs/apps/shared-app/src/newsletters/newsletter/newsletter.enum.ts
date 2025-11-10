// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: NewsLetter
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

/*export enum NewsLetterTypeEnum {
  PROMOTIONAL = 1,
  TRANSACTIONAL = 2,
  UPDATE = 3,
  EVENT = 4,
  ALERT = 5
};

export const NewsLetterTypeEnumResolver: Record<keyof typeof NewsLetterTypeEnum, any> = {
  PROMOTIONAL: NewsLetterTypeEnum.PROMOTIONAL,
  TRANSACTIONAL: NewsLetterTypeEnum.TRANSACTIONAL,
  UPDATE: NewsLetterTypeEnum.UPDATE,
  EVENT: NewsLetterTypeEnum.EVENT,
  ALERT: NewsLetterTypeEnum.ALERT,
};
export function registerGraphqlEnumType(){
  // register new enum resolver
  registerEnumType(NewsLetterTypeEnum, {
    name: 'NewsLetterTypeEnum', // This registers the enum with GraphQL
    description: 'Used to define setting send by available for end user or internal use.',
    valuesMap:{
      PROMOTIONAL:{
        description: 'Promotional'
      },
      TRANSACTIONAL:{
        description: 'Transactional'
      },
      UPDATE:{
        description: 'Update'
      },
      EVENT:{
        description: 'Event'
      },
      ALERT:{
        description: 'Alert'
      },
    }
  });
  // add resolver to graphql
  addGrapaphQLExternalResolvers({NewsLetterTypeEnum: NewsLetterTypeEnumResolver});
}
registerGraphqlEnumType();*/

export enum NewsLetterUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const NewsLetterUploadFileFieldEnumResolver: Record<keyof typeof NewsLetterUploadFileFieldEnum, any> = {
  FILE_: NewsLetterUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlNewsLetterUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(NewsLetterUploadFileFieldEnum, {
      name: 'NewsLetterUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'NewsLetter upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `NewsLetter upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({NewsLetterUploadFileFieldEnum: NewsLetterUploadFileFieldEnumResolver});
}
// call above function to register