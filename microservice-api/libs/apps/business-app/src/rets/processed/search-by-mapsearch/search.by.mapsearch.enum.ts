// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: ProcessedSearchByMapSearch
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum ProcessedSearchByMapSearchUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const ProcessedSearchByMapSearchUploadRefTypeEnumResolver: Record<keyof typeof ProcessedSearchByMapSearchUploadRefTypeEnum, any> = {
  FILE_: ProcessedSearchByMapSearchUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlProcessedSearchByMapSearchUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(ProcessedSearchByMapSearchUploadRefTypeEnum, {
      name: 'ProcessedSearchByMapSearchUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'ProcessedSearchByMapSearch upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({ProcessedSearchByMapSearchUploadRefTypeEnum: ProcessedSearchByMapSearchUploadRefTypeEnumResolver});
}
// call above function to register