// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: MeasurementUnit
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum MeasurementUnitUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const MeasurementUnitUploadFileFieldEnumResolver: Record<keyof typeof MeasurementUnitUploadFileFieldEnum, any> = {
  FILE_: MeasurementUnitUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlMeasurementUnitUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(MeasurementUnitUploadFileFieldEnum, {
      name: 'MeasurementUnitUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'MeasurementUnit upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `MeasurementUnit upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({MeasurementUnitUploadFileFieldEnum: MeasurementUnitUploadFileFieldEnumResolver});
}
// call above function to register