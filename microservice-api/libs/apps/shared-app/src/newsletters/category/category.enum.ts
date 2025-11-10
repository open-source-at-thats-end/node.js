// █████████████████████████████████████████████████████████████████████████████████████████████
// find and replace: NewsLetterCategory
import { addGrapaphQLExternalResolvers } from "@libs/library-app";
import { registerEnumType } from "@nestjs/graphql";
import { NewsLetterCategoryEntityMeta as meta } from "./entities/category.entity";

export enum NewsLetterCategoryUploadFileFieldEnum {
  FILE_ = 'file_',
};

export const NewsLetterCategoryUploadFileFieldEnumResolver: Record<keyof typeof NewsLetterCategoryUploadFileFieldEnum, any> = {
  FILE_: NewsLetterCategoryUploadFileFieldEnum.FILE_,
};

