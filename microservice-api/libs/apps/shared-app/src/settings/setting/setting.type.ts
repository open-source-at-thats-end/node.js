import { SettingEntity } from "./entities/setting.entity";

export type SettingRawType = Record<string, SettingEntity>;
export type SettingBySettypeType = Record<string, SettingRawType>;
export type SettingByCategoryType = Record<number, SettingRawType>;
export type SettingBySettypeWithCategoryType = Record<number, SettingByCategoryType>;
export type SettingType = SettingRawType | SettingBySettypeType | SettingByCategoryType | SettingBySettypeWithCategoryType;