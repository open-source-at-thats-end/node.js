// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: CrawlerSchedule
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum CrawlerScheduleUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const CrawlerScheduleUploadFileFieldEnumResolver: Record<keyof typeof CrawlerScheduleUploadFileFieldEnum, any> = {
  FILE_: CrawlerScheduleUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlCrawlerScheduleUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(CrawlerScheduleUploadFileFieldEnum, {
      name: 'CrawlerScheduleUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'CrawlerSchedule upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `CrawlerSchedule upload file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({CrawlerScheduleUploadFileFieldEnum: CrawlerScheduleUploadFileFieldEnumResolver});
}
// call above function to register