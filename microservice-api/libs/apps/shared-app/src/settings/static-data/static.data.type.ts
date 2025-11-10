import { StaticDataValueEntity } from "./value/entities/value.entity";

export type StaticDataValueType = Record<string, StaticDataValueEntity>;
export type StaticDataType = Record<string, StaticDataValueType>;