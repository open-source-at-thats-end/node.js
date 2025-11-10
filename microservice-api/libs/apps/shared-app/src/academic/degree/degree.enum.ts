// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: AcademicDegree
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { AcademicDegreeEntityMeta as meta } from "./entities/degree.entity";

export enum AcademicDegreeUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const AcademicDegreeUploadFileFieldEnumResolver: Record<keyof typeof AcademicDegreeUploadFileFieldEnum, any> = {
  FILE_: AcademicDegreeUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlAcademicDegreeUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(AcademicDegreeUploadFileFieldEnum, {
      name: 'AcademicDegreeUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'AcademicDegree upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `AcademicDegree upload file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({AcademicDegreeUploadFileFieldEnum: AcademicDegreeUploadFileFieldEnumResolver});
}
// call above function to register