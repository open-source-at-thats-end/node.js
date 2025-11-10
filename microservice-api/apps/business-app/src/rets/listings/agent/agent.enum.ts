// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: RetsListingAgent
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { RetsListingAgentEntityMeta as meta } from "./entities/agent.entity";

export enum RetsListingAgentUploadRefTypeEnum {
  FILE_ = 'file_',
};

export const RetsListingAgentUploadRefTypeEnumResolver: Record<keyof typeof RetsListingAgentUploadRefTypeEnum, any> = {
  FILE_: RetsListingAgentUploadRefTypeEnum.FILE_,
};
  
export function registerGraphqlRetsListingAgentUploadRefTypeEnum(){
    // register new enum resolver
    registerEnumType(RetsListingAgentUploadRefTypeEnum, {
      name: 'RetsListingAgentUploadRefTypeEnum', // This registers the enum with GraphQL
      description: 'RetsListingAgent upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Upload market type file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({RetsListingAgentUploadRefTypeEnum: RetsListingAgentUploadRefTypeEnumResolver});
}
// call above function to register