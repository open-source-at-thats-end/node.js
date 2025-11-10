// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: MeasurementCategory
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { MeasurementCategoryEntityMeta as meta } from "./entities/measurement.category.entity";

export enum MeasurementCategoryUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const MeasurementCategoryUploadFileFieldEnumResolver: Record<keyof typeof MeasurementCategoryUploadFileFieldEnum, any> = {
  FILE_: MeasurementCategoryUploadFileFieldEnum.FILE_,
};

