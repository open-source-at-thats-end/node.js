
// █████████████████████████████████████████████████████████████████████████████████████████████

import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { AuthorisationEntityMeta as meta } from "./entities/authorisation.entity";

export enum AuthorisationRoleEnum {
  ANONYMOUS = 1,
  ROBOT = 2,
  LEAD = 3,
  TECHNICAL_TEAM = 4,
  SUPER_ADMIN = 5,
  ADMIN = 6,
  ADVANCED_USER = 7,
  USER = 8,
  DIRECTOR = 9,
  EXECUTIVE = 10,
  MANAGER = 11,
  EMPLOYEE = 12,
  FREELANCER = 13,
  CONTRACTOR = 14,
  AGENT = 15,
  BUYER = 16,
  SELLER = 17,
  CLIENT = 18,
  CUSTOMER = 19,
  DOCTOR = 20,
  TEST_AUTHOR = 21,
  };

  export const AuthorisationRoleEnumResolver: Record<keyof typeof AuthorisationRoleEnum, any> = {
    ANONYMOUS: AuthorisationRoleEnum.ANONYMOUS,
    ROBOT: AuthorisationRoleEnum.ROBOT,
    LEAD: AuthorisationRoleEnum.LEAD,
    TECHNICAL_TEAM: AuthorisationRoleEnum.TECHNICAL_TEAM,
    SUPER_ADMIN: AuthorisationRoleEnum.SUPER_ADMIN,
    ADMIN: AuthorisationRoleEnum.ADMIN,
    ADVANCED_USER: AuthorisationRoleEnum.ADVANCED_USER,
    USER: AuthorisationRoleEnum.USER,
    DIRECTOR: AuthorisationRoleEnum.DIRECTOR,
    EXECUTIVE: AuthorisationRoleEnum.EXECUTIVE,
    MANAGER: AuthorisationRoleEnum.MANAGER,
    EMPLOYEE: AuthorisationRoleEnum.EMPLOYEE,
    FREELANCER: AuthorisationRoleEnum.FREELANCER,
    CONTRACTOR: AuthorisationRoleEnum.CONTRACTOR,
    AGENT: AuthorisationRoleEnum.AGENT,
    BUYER: AuthorisationRoleEnum.BUYER,
    SELLER: AuthorisationRoleEnum.SELLER,
    CLIENT: AuthorisationRoleEnum.CLIENT,
    CUSTOMER: AuthorisationRoleEnum.CUSTOMER,
    DOCTOR: AuthorisationRoleEnum.DOCTOR,
    TEST_AUTHOR: AuthorisationRoleEnum.TEST_AUTHOR,
    
  };
  
  export function registerGraphqlAuthorisationRoleEnum(){
    // register new enum resolver
    registerEnumType(AuthorisationRoleEnum, {
      name: 'AuthorisationRoleEnum', // This registers the enum with GraphQL
      description: 'Used to determine session accessing user role.',
      valuesMap:{
        ANONYMOUS:{
          description: 'General people'
        },
        ROBOT:{
          description: 'Background scripts and automation kind of access'
        },
        LEAD:{
          description: 'A person or business interested in our product or service.'
        },
        TECHNICAL_TEAM:{
          description: 'Technical support team.'
        },
        SUPER_ADMIN:{
          description: 'Master admin who can manage everything'
        },
        ADMIN:{
            description: 'Regular admin who has less access to super admin'
        },
        ADVANCED_USER:{
            description: 'End user who has few more permissions as working inside organisation premises or something'
        },
        USER: {
            description: 'Real time end user'
        },
        DIRECTOR: {
            description: 'Director access'
        },
        EXECUTIVE: {
            description: 'Executive access'
        },
        MANAGER: {
            description: 'Manager access'
        },
        EMPLOYEE: {
            description: 'Employee access'
        },
        FREELANCER: {
            description: 'Freelancer access'
        },
        CONTRACTOR: {
            description: 'Contractor access'
        },
        AGENT: {
            description: 'Agent access'
        },
        BUYER: {
            description: 'Buyer access'
        },
        SELLER: {
            description: 'Seller access'
        },
        CLIENT: {
            description: 'Client access'
        },
        CUSTOMER: {
            description: 'Customer access'
        },
        DOCTOR: {
            description: 'Doctor access'
        },
        TEST_AUTHOR: {
            description: 'Test author access'
        }
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({AuthorisationRoleEnum: AuthorisationRoleEnumResolver});
  }

// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: Authorisation
export enum AuthorisationUploadFileFieldEnum {
    FILE_ = 'file_',
  };
  
  export const AuthorisationUploadFileFieldEnumResolver: Record<keyof typeof AuthorisationUploadFileFieldEnum, any> = {
    FILE_: AuthorisationUploadFileFieldEnum.FILE_,
  };
    
  export function registerGraphqlAuthorisationUploadFileFieldEnum(){
      // register new enum resolver
      registerEnumType(AuthorisationUploadFileFieldEnum, {
        name: 'AuthorisationUploadFileFieldEnum', // This registers the enum with GraphQL
        description: 'Authorisation upload ref type enum',
        valuesMap:{
          FILE_: {
            //description: `Authorisation upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
          },
        }
      });
      // add resolver to graphql
      addGrapaphQLExternalResolvers({AuthorisationUploadFileFieldEnum: AuthorisationUploadFileFieldEnumResolver});
  }
  // call above function to register