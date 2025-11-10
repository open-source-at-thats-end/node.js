import { DynamicModule, Type } from "@nestjs/common";

// Make all properties required
export type MakeRequiredType<T> = {
  [P in keyof T]-?: T[P];
};
  
// Make all properties optional
export type MakeOptionalType<T> = {
  [P in keyof T]+?: T[P];
};

// Make all properties optional
export type MakeAnyType<T> = {
  [P in keyof T]?: any;
};

export interface FileMetadata {
  filename: string; // File name with extension
  name: string; // File name without extension
  extension: string; // File extension
  size: number; // File size in bytes
  created: Date; // File creation date
  modified: Date; // Last modified date
  mimetype: string; // Get mimetype based on extension
  encoding: string; // Encoding inferred from mime type
}

export type EntryModule = Type<any> | DynamicModule | Promise<Type<any>> | Promise<DynamicModule>;

export type CliOptions = {
  dryRun: boolean;
  args: string[]; // remaining args after flags
};
