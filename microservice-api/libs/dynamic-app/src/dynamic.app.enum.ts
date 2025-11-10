// █████████████████████████████████████████████████████████████████████████████████████████████
import { registerEnumType } from "@nestjs/graphql";
import { addGrapaphQLExternalResolvers } from "@libs/library-app";

export enum QueueTypeEnum {
    SIGNIN_OTP = 1,
    NEW_JOB_POST = 2,
    NEW_USER_RESUME = 3,
    FORGOT_PASSWORD = 4
  
  };

  export const QueueTypeEnumResolver: Record<keyof typeof QueueTypeEnum, any> = {
    SIGNIN_OTP: QueueTypeEnum.SIGNIN_OTP,
    NEW_JOB_POST: QueueTypeEnum.NEW_JOB_POST,
    NEW_USER_RESUME: QueueTypeEnum.NEW_USER_RESUME,
    FORGOT_PASSWORD: QueueTypeEnum.FORGOT_PASSWORD
  };
  
  export function registerGraphqlQueueTypeEnum(){
    // register new enum resolver
    registerEnumType(QueueTypeEnumResolver, {
      name: 'QueueTypeEnum', // This registers the enum with GraphQL
      description: 'Used to define various queue types.',
      valuesMap:{
        SIGNIN_OTP:{
          description: 'OTP email or sms queue for sign in'
        },
        NEW_JOB_POST:{
          description: 'When new job post is crated a SMS will be sent to match user resumes'
        },
        NEW_USER_RESUME:{
          description: 'When new user resume is created a SMS will be sent to all match job posts (employers)'
        },
        FORGOT_PASSWORD:{
          description: 'Forgot password email'
        }
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({QueueTypeEnum: QueueTypeEnumResolver});
  }