// Typed builders for FindOperatorDto with correct input primitives.
import { FindOperatorDto } from './thatsend.api.type';

function toIso(v: Date | string): string {
  if (v instanceof Date) return v.toISOString();
  // naive: assume already ISO
  return v;
}

export const ops = {
  // string-based fields
  s: {
    equal: (v: string): FindOperatorDto => ({ equal: v }),
    notEqual: (v: string): FindOperatorDto => ({ notEqual: v }),
    like: (v: string): FindOperatorDto => ({ like: v }),
    notLike: (v: string): FindOperatorDto => ({ notLike: v }),
    into: (v: string[]): FindOperatorDto => ({ into: v }),
    notInto: (v: string[]): FindOperatorDto => ({ notInto: v }),
    between: (a: string, b: string): FindOperatorDto => ({ between: [a, b] }),
    notBetween: (a: string, b: string): FindOperatorDto => ({ notBetween: [a, b] }),
    lt: (v: string): FindOperatorDto => ({ lt: v }),
    lte: (v: string): FindOperatorDto => ({ lte: v }),
    mt: (v: string): FindOperatorDto => ({ mt: v }),
    mte: (v: string): FindOperatorDto => ({ mte: v }),
    nulls: (isNull: boolean): FindOperatorDto => ({ nulls: isNull }),
    matchFun: (fun: string): FindOperatorDto => ({ matchFun: fun }),
  },
  // number-based fields (coerced to strings per SDL)
  n: {
    equal: (v: number): FindOperatorDto => ({ equal: String(v) }),
    notEqual: (v: number): FindOperatorDto => ({ notEqual: String(v) }),
    into: (v: number[]): FindOperatorDto => ({ into: v.map(String) }),
    notInto: (v: number[]): FindOperatorDto => ({ notInto: v.map(String) }),
    between: (a: number, b: number): FindOperatorDto => ({ between: [String(a), String(b)] }),
    notBetween: (a: number, b: number): FindOperatorDto => ({ notBetween: [String(a), String(b)] }),
    lt: (v: number): FindOperatorDto => ({ lt: String(v) }),
    lte: (v: number): FindOperatorDto => ({ lte: String(v) }),
    mt: (v: number): FindOperatorDto => ({ mt: String(v) }),
    mte: (v: number): FindOperatorDto => ({ mte: String(v) }),
    nulls: (isNull: boolean): FindOperatorDto => ({ nulls: isNull }),
  },
  // datetime fields (ISO strings per SDL)
  dt: {
    equal: (v: Date | string): FindOperatorDto => ({ equal: toIso(v) }),
    notEqual: (v: Date | string): FindOperatorDto => ({ notEqual: toIso(v) }),
    between: (a: Date | string, b: Date | string): FindOperatorDto => ({ between: [toIso(a), toIso(b)] }),
    notBetween: (a: Date | string, b: Date | string): FindOperatorDto => ({ notBetween: [toIso(a), toIso(b)] }),
    lt: (v: Date | string): FindOperatorDto => ({ lt: toIso(v) }),
    lte: (v: Date | string): FindOperatorDto => ({ lte: toIso(v) }),
    mt: (v: Date | string): FindOperatorDto => ({ mt: toIso(v) }),
    mte: (v: Date | string): FindOperatorDto => ({ mte: toIso(v) }),
    nulls: (isNull: boolean): FindOperatorDto => ({ nulls: isNull }),
  },
};

