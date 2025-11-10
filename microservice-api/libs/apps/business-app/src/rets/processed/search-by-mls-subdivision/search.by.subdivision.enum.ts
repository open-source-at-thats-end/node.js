// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: ProcessedSearchBySubdivision
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum ProcessedSearchBySubdivisionUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const ProcessedSearchBySubdivisionUploadRefTypeEnumResolver: Record<keyof typeof ProcessedSearchBySubdivisionUploadRefTypeEnum, any> = {
  FILE_: ProcessedSearchBySubdivisionUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlProcessedSearchBySubdivisionUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(ProcessedSearchBySubdivisionUploadRefTypeEnum, {
      name: 'ProcessedSearchBySubdivisionUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'ProcessedSearchBySubdivision upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({ProcessedSearchBySubdivisionUploadRefTypeEnum: ProcessedSearchBySubdivisionUploadRefTypeEnumResolver});
}
// call above function to register