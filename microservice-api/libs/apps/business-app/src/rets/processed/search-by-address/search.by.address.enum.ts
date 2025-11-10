// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: ProcessedSearchByAddress
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum ProcessedSearchByAddressUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const ProcessedSearchByAddressUploadRefTypeEnumResolver: Record<keyof typeof ProcessedSearchByAddressUploadRefTypeEnum, any> = {
  FILE_: ProcessedSearchByAddressUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlProcessedSearchByAddressUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(ProcessedSearchByAddressUploadRefTypeEnum, {
      name: 'ProcessedSearchByAddressUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'ProcessedSearchByAddress upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({ProcessedSearchByAddressUploadRefTypeEnum: ProcessedSearchByAddressUploadRefTypeEnumResolver});
}
// call above function to register