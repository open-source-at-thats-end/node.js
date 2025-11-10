// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: ProcessedSearchByCounty
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum ProcessedSearchByCountyUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const ProcessedSearchByCountyUploadRefTypeEnumResolver: Record<keyof typeof ProcessedSearchByCountyUploadRefTypeEnum, any> = {
  FILE_: ProcessedSearchByCountyUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlProcessedSearchByCountyUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(ProcessedSearchByCountyUploadRefTypeEnum, {
      name: 'ProcessedSearchByCountyUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'ProcessedSearchByCounty upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({ProcessedSearchByCountyUploadRefTypeEnum: ProcessedSearchByCountyUploadRefTypeEnumResolver});
}
// call above function to register