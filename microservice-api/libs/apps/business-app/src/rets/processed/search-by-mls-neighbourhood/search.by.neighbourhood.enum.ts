// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: ProcessedSearchByNeighbourhood
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum ProcessedSearchByNeighbourhoodUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const ProcessedSearchByNeighbourhoodUploadRefTypeEnumResolver: Record<keyof typeof ProcessedSearchByNeighbourhoodUploadRefTypeEnum, any> = {
  FILE_: ProcessedSearchByNeighbourhoodUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlProcessedSearchByNeighbourhoodUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(ProcessedSearchByNeighbourhoodUploadRefTypeEnum, {
      name: 'ProcessedSearchByNeighbourhoodUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'ProcessedSearchByNeighbourhood upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({ProcessedSearchByNeighbourhoodUploadRefTypeEnum: ProcessedSearchByNeighbourhoodUploadRefTypeEnumResolver});
}
// call above function to register