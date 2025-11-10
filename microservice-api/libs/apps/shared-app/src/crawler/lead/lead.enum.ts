// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: CrawlerLead
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";

export enum CrawlerLeadUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const CrawlerLeadUploadFileFieldEnumResolver: Record<keyof typeof CrawlerLeadUploadFileFieldEnum, any> = {
  FILE_: CrawlerLeadUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlCrawlerLeadUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(CrawlerLeadUploadFileFieldEnum, {
      name: 'CrawlerLeadUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'CrawlerLead upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `CrawlerLead upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({CrawlerLeadUploadFileFieldEnum: CrawlerLeadUploadFileFieldEnumResolver});
}
// call above function to register

export enum LeadDetermineAsEnum {
    PERSON = 'person',
    ORGANIZATION = 'organization',
    UNCERTAIN = 'uncertain',
  };
    
  export const LeadDetermineAsEnumResolver: Record<keyof typeof LeadDetermineAsEnum, any> = {
    PERSON: LeadDetermineAsEnum.PERSON,
    ORGANIZATION: LeadDetermineAsEnum.ORGANIZATION,
    UNCERTAIN: LeadDetermineAsEnum.UNCERTAIN,
  };
  
  export function registerGraphqLeadDetermineAsEnum(){
    // register new enum resolver
    registerEnumType(LeadDetermineAsEnum, {
      name: 'LeadDetermineAsEnum', // This registers the enum with GraphQL
      description: 'Used to lead determine as.',
      valuesMap:{
        PERSON:{
          description: 'Person'
        },
        ORGANIZATION:{
          description: 'Organization'
        },
        UNCERTAIN:{
          description: 'Uncertain'
        },
        
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({LeadDetermineAsEnum: LeadDetermineAsEnumResolver});
  }

  registerGraphqLeadDetermineAsEnum();