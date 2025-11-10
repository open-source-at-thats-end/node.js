// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: NewsLetterTrackLog
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum BounceTypeEnum {
  SOFT = 1,
  HARD = 2
};

export const BounceTypeEnumResolver: Record<keyof typeof BounceTypeEnum, any> = {
  SOFT: BounceTypeEnum.SOFT,
  HARD: BounceTypeEnum.HARD,
  
};
export function registerGraphqlEnumSendBy(){
  // register new enum resolver
  registerEnumType(BounceTypeEnum, {
    name: 'BounceTypeEnum', // This registers the enum with GraphQL
    description: 'Used to define setting send by available for end user or internal use.',
    valuesMap:{
      SOFT:{
        description: 'Soft'
      },
      HARD:{
        description: 'Hard'
      },
    }
  });
  // add resolver to graphql
  addGrapaphQLExternalResolvers({BounceTypeEnum: BounceTypeEnumResolver});
}
registerGraphqlEnumSendBy();

export enum NewsLetterTrackLogUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const NewsLetterTrackLogUploadFileFieldEnumResolver: Record<keyof typeof NewsLetterTrackLogUploadFileFieldEnum, any> = {
  FILE_: NewsLetterTrackLogUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlNewsLetterTrackLogUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(NewsLetterTrackLogUploadFileFieldEnum, {
      name: 'NewsLetterTrackLogUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'NewsLetterTrackLog upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `NewsLetterTrackLog upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({NewsLetterTrackLogUploadFileFieldEnum: NewsLetterTrackLogUploadFileFieldEnumResolver});
}
// call above function to register