// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: WorkStatus
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { WorkStatusEntityMeta as meta } from "./entities/work.status.entity";

export enum WorkStatusUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const WorkStatusUploadFileFieldEnumResolver: Record<keyof typeof WorkStatusUploadFileFieldEnum, any> = {
  FILE_: WorkStatusUploadFileFieldEnum.FILE_,
};

