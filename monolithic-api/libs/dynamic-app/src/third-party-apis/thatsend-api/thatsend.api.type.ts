// Common types shared across Thats End GraphQL modules

export interface FindOperatorDto {
  equal?: string;
  notEqual?: string;
  like?: string;
  notLike?: string;
  into?: string[];
  notInto?: string[];
  between?: string[];
  notBetween?: string[];
  lt?: string;
  lte?: string;
  mt?: string;
  mte?: string;
  nulls?: boolean;
  matchFun?: string;
}

export interface FindOutputPage {
  page: number;
  count: number;
  skip: number;
}

export interface FindOutputPagination {
  first: FindOutputPage;
  previous: FindOutputPage;
  current: FindOutputPage;
  next: FindOutputPage;
  last: FindOutputPage;
}

export interface SnapshotListDto {
  message?: string[];
  result?: string[];
  imp?: string[];
  mismatch?: string[];
  notFound?: string[];
  conflict?: string[];
  success?: string[];
  error?: string[];
  alert?: string[];
  warning?: string[];
  notice?: string[];
  info?: string[];
}
