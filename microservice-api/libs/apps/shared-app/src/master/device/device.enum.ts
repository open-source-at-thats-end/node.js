
// █████████████████████████████████████████████████████████████████████████████████████████████

import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { DeviceEntityMeta as meta } from "./entities/device.entity";

export enum DeviceInterfaceEnum {
    WEB = 1,
    MOBILE = 2,
    TABLET = 3,
    WATCH = 4,
    VISION = 5,
    WEARABLE = 6,
    DESKTOP = 7,
    EMBEDDED = 8,
    ROBOT = 9,
  };
    
  export const DeviceInterfaceEnumResolver: Record<keyof typeof DeviceInterfaceEnum, any> = {
    WEB: DeviceInterfaceEnum.WEB,
    MOBILE: DeviceInterfaceEnum.MOBILE,
    TABLET: DeviceInterfaceEnum.TABLET,
    WATCH: DeviceInterfaceEnum.WATCH,
    VISION: DeviceInterfaceEnum.VISION,
    WEARABLE: DeviceInterfaceEnum.WEARABLE,
    DESKTOP: DeviceInterfaceEnum.DESKTOP,
    EMBEDDED: DeviceInterfaceEnum.EMBEDDED,
    ROBOT: DeviceInterfaceEnum.ROBOT,
  };
  
  export function registerGraphqDeviceInterfaceEnum(){
    // register new enum resolver
    registerEnumType(DeviceInterfaceEnum, {
      name: 'DeviceInterfaceEnum', // This registers the enum with GraphQL
      description: 'Used to determine user accessing device interface.',
      valuesMap:{
        WEB:{
          description: 'Web App or Website'
        },
        MOBILE:{
          description: 'Mobile phone'
        },
        TABLET:{
          description: 'Tablet device'
        },
        WATCH:{
          description: 'Watch device'
        },
        VISION:{
          description: 'Vision device'
        },
        WEARABLE:{
          description: 'Wearable device'
        },
        DESKTOP:{
            description: 'Desktop device'
        },
        EMBEDDED:{
            description: 'Embedded device, such as car screens'
        },
        ROBOT: {
            description: 'Background process automation such as cron jobs'
        }
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({DeviceInterfaceEnum: DeviceInterfaceEnumResolver});
  }

// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: Device
export enum DeviceUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const DeviceUploadFileFieldEnumResolver: Record<keyof typeof DeviceUploadFileFieldEnum, any> = {
  FILE_: DeviceUploadFileFieldEnum.FILE_,
};
  
export function registerGraphqlDeviceUploadFileFieldEnum(){
    // register new enum resolver
    registerEnumType(DeviceUploadFileFieldEnum, {
      name: 'DeviceUploadFileFieldEnum', // This registers the enum with GraphQL
      description: 'Device upload ref type enum',
      valuesMap:{
        FILE_: {
          //description: `Device upload  file. ${meta.file_.validation.validFileFormatMsg} ${meta.file_.validation.maxFileSizeMsg} ${meta.file_.validation.maxCountMsg}`
        },
      }
    });
    // add resolver to graphql
    addGrapaphQLExternalResolvers({DeviceUploadFileFieldEnum: DeviceUploadFileFieldEnumResolver});
}
// call above function to register