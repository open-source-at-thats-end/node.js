// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: State
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { StateEntityMeta as meta } from "./entities/state.entity";

export enum StateUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const StateUploadFileFieldEnumResolver: Record<keyof typeof StateUploadFileFieldEnum, any> = {
  FILE_: StateUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlStateUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(StateUploadFileFieldEnum, {
      name: 'StateUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'State upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `State upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({StateUploadFileFieldEnum: StateUploadFileFieldEnumResolver});
}
// call above function to register