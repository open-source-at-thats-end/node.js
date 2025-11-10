// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: NewsLetterSchedule
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { NewsLetterScheduleEntityMeta as meta } from "./entities/schedule.entity";

export enum NewsLetterScheduleUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const NewsLetterScheduleUploadFileFieldEnumResolver: Record<keyof typeof NewsLetterScheduleUploadFileFieldEnum, any> = {
  FILE_: NewsLetterScheduleUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlNewsLetterScheduleUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(NewsLetterScheduleUploadFileFieldEnum, {
      name: 'NewsLetterScheduleUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'NewsLetterSchedule upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `NewsLetterSchedule upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({NewsLetterScheduleUploadFileFieldEnum: NewsLetterScheduleUploadFileFieldEnumResolver});
}
// call above function to register