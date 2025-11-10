// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: RetsListingRoom
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { RetsListingRoomEntityMeta as meta } from "./entities/room.entity";

export enum RetsListingRoomUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const RetsListingRoomUploadRefTypeEnumResolver: Record<keyof typeof RetsListingRoomUploadRefTypeEnum, any> = {
  FILE_: RetsListingRoomUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlRetsListingRoomUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(RetsListingRoomUploadRefTypeEnum, {
      name: 'RetsListingRoomUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'RetsListingRoom upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({RetsListingRoomUploadRefTypeEnum: RetsListingRoomUploadRefTypeEnumResolver});
}
// call above function to register