// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: RetsListingMetadata
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { RetsListingMetadataEntityMeta as meta } from "./entities/metadata.entity";

export enum RetsListingMetadataUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const RetsListingMetadataUploadRefTypeEnumResolver: Record<keyof typeof RetsListingMetadataUploadRefTypeEnum, any> = {
  FILE_: RetsListingMetadataUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlRetsListingMetadataUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(RetsListingMetadataUploadRefTypeEnum, {
      name: 'RetsListingMetadataUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'RetsListingMetadata upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({RetsListingMetadataUploadRefTypeEnum: RetsListingMetadataUploadRefTypeEnumResolver});
}
// call above function to register