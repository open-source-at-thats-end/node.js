// Tiny helper to render GraphQL selection sets from a flexible, typed input.

export type SelectShape<T = any> =
  | true
  | string // unsafe escape hatch
  | (keyof T)[]
  | { [K in keyof T]?: SelectShape<any> };

function render(sel: SelectShape<any>): string {
  if (sel === true) return '';
  if (typeof sel === 'string') return sel.trim();
  if (Array.isArray(sel)) return sel.filter(Boolean).join(' ');
  const parts: string[] = [];
  for (const [key, val] of Object.entries(sel || {})) {
    if (val === true) {
      parts.push(key);
    } else if (typeof val === 'string') {
      const inner = val.trim();
      parts.push(inner ? `${key} { ${inner} }` : key);
    } else if (Array.isArray(val)) {
      const inner = val.filter(Boolean).join(' ');
      parts.push(inner ? `${key} { ${inner} }` : key);
    } else if (val && typeof val === 'object') {
      const inner = render(val);
      parts.push(inner ? `${key} { ${inner} }` : key);
    }
  }
  return parts.join(' ');
}

export function buildSelection<T = any>(select: SelectShape<T> | undefined, fallback: string): string {
  if (select === undefined) return fallback.trim();
  const s = render(select).trim();
  return s.length ? s : fallback.trim();
}

// Strongly-typed meta selector for FindOutput
export type PageField = 'page' | 'count' | 'skip';
export type PaginationKey = 'first' | 'previous' | 'current' | 'next' | 'last';
export interface FindMetaOptions {
  total?: true;
  remain?: true;
  pages?: true;
  take?: true;
  pagination?: Partial<Record<PaginationKey, PageField[]>>;
}

export function buildFindMetaSelect(opts?: FindMetaOptions): string {
  if (!opts) {
    return 'total remain pages take pagination { first { page count skip } previous { page count skip } current { page count skip } next { page count skip } last { page count skip } }';
  }
  const bits: string[] = [];
  if (opts.total) bits.push('total');
  if (opts.remain) bits.push('remain');
  if (opts.pages) bits.push('pages');
  if (opts.take) bits.push('take');
  if (opts.pagination && Object.keys(opts.pagination).length) {
    const inner: string[] = [];
    for (const k of Object.keys(opts.pagination) as PaginationKey[]) {
      const fields = opts.pagination[k];
      if (!fields || !fields.length) continue;
      inner.push(`${k} { ${fields.join(' ')} }`);
    }
    if (inner.length) bits.push(`pagination { ${inner.join(' ')} }`);
  }
  return bits.length ? bits.join(' ') : 'total remain take';
}
