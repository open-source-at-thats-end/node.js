// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: AlertDuration
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { AlertDurationEntityMeta as meta } from "./entities/alert.duration.entity";

export enum AlertDurationUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const AlertDurationUploadFileFieldEnumResolver: Record<keyof typeof AlertDurationUploadFileFieldEnum, any> = {
  FILE_: AlertDurationUploadFileFieldEnum.FILE_,
};

