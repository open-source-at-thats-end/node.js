// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: RetsListingPhotos
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { RetsListingPhotosEntityMeta as meta } from "./entities/photos.entity";

export enum RetsListingPhotosUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const RetsListingPhotosUploadRefTypeEnumResolver: Record<keyof typeof RetsListingPhotosUploadRefTypeEnum, any> = {
  FILE_: RetsListingPhotosUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlRetsListingPhotosUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(RetsListingPhotosUploadRefTypeEnum, {
      name: 'RetsListingPhotosUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'RetsListingPhotos upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({RetsListingPhotosUploadRefTypeEnum: RetsListingPhotosUploadRefTypeEnumResolver});
}
// call above function to register