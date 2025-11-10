
// define new enum
// this needs to update when any new record is added in table _third_party_platform
export enum ThirdPartyPlatformEnum {
    THATSEND_WORK = 1,
    BULKSMS_COM = 2,
};
  
export const ThirdPartyPlatformEnumResolver: Record<keyof typeof ThirdPartyPlatformEnum, any> = {
    THATSEND_WORK: ThirdPartyPlatformEnum.THATSEND_WORK,
    BULKSMS_COM: ThirdPartyPlatformEnum.BULKSMS_COM,
};