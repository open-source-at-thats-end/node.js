// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: ProcessedSearchByCity
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum ProcessedSearchByCityUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const ProcessedSearchByCityUploadRefTypeEnumResolver: Record<keyof typeof ProcessedSearchByCityUploadRefTypeEnum, any> = {
  FILE_: ProcessedSearchByCityUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlProcessedSearchByCityUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(ProcessedSearchByCityUploadRefTypeEnum, {
      name: 'ProcessedSearchByCityUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'ProcessedSearchByCity upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({ProcessedSearchByCityUploadRefTypeEnum: ProcessedSearchByCityUploadRefTypeEnumResolver});
}
// call above function to register