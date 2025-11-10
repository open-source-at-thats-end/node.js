// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: ProcessedSearchByMls
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum ProcessedSearchByMlsUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const ProcessedSearchByMlsUploadRefTypeEnumResolver: Record<keyof typeof ProcessedSearchByMlsUploadRefTypeEnum, any> = {
  FILE_: ProcessedSearchByMlsUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlProcessedSearchByMlsUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(ProcessedSearchByMlsUploadRefTypeEnum, {
      name: 'ProcessedSearchByMlsUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'ProcessedSearchByMls upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({ProcessedSearchByMlsUploadRefTypeEnum: ProcessedSearchByMlsUploadRefTypeEnumResolver});
}
// call above function to register