// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: ProcessedSearchByZipcode
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum ProcessedSearchByZipcodeUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const ProcessedSearchByZipcodeUploadRefTypeEnumResolver: Record<keyof typeof ProcessedSearchByZipcodeUploadRefTypeEnum, any> = {
  FILE_: ProcessedSearchByZipcodeUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlProcessedSearchByZipcodeUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(ProcessedSearchByZipcodeUploadRefTypeEnum, {
      name: 'ProcessedSearchByZipcodeUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'ProcessedSearchByZipcode upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({ProcessedSearchByZipcodeUploadRefTypeEnum: ProcessedSearchByZipcodeUploadRefTypeEnumResolver});
}
// call above function to register