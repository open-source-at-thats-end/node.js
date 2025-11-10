// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: AcademicField
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { AcademicFieldEntityMeta as meta } from "./entities/field.entity";

export enum AcademicFieldUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const AcademicFieldUploadFileFieldEnumResolver: Record<keyof typeof AcademicFieldUploadFileFieldEnum, any> = {
  FILE_: AcademicFieldUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlAcademicFieldUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(AcademicFieldUploadFileFieldEnum, {
      name: 'AcademicFieldUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'AcademicField upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `AcademicField upload file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({AcademicFieldUploadFileFieldEnum: AcademicFieldUploadFileFieldEnumResolver});
}
// call above function to register