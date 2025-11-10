// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: Timezone
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { TimezoneEntityMeta as meta } from "./entities/timezone.entity";

export enum TimezoneUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const TimezoneUploadFileFieldEnumResolver: Record<keyof typeof TimezoneUploadFileFieldEnum, any> = {
  FILE_: TimezoneUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlTimezoneUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(TimezoneUploadFileFieldEnum, {
      name: 'TimezoneUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'Timezone upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Timezone upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({TimezoneUploadFileFieldEnum: TimezoneUploadFileFieldEnumResolver});
}
// call above function to register