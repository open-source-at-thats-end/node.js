import { Injectable, BadRequestException } from '@nestjs/common';
import { gql } from 'graphql-request';
import { GraphService } from '../graph/graph.service';
import { LogService } from '@libs/library-app';
import { buildSelection, SelectShape, buildFindMetaSelect, FindMetaOptions } from '../thatsend.api.select';
import {
  AcademicDegreeCreateInput,
  AcademicDegreeCreateOutput,
  AcademicDegreeDeleteInput,
  AcademicDegreeDeleteOutput,
  AcademicDegreeFindInput,
  AcademicDegreeFindOutput,
  AcademicDegreeRecoverInput,
  AcademicDegreeRecoverOutput,
  AcademicDegreeRemoveInput,
  AcademicDegreeRemoveOutput,
  AcademicDegreeRestoreInput,
  AcademicDegreeRestoreOutput,
  AcademicDegreeSoftDeleteInput,
  AcademicDegreeSoftDeleteOutput,
  AcademicDegreeSoftRemoveInput,
  AcademicDegreeSoftRemoveOutput,
  AcademicDegreeUpdateInput,
  AcademicDegreeUpdateOutput,
  AcademicDegreeUpsertInput,
  AcademicDegreeUpsertOutput,
} from './academic.degree.dto';
import { AcademicDegreeEntity } from './academic.degree.entity';

@Injectable()
export class AcademicDegreeService {
  constructor(private readonly graph: GraphService, private readonly log: LogService) {
    this.log.setContext(AcademicDegreeService.name);
  }

  private async withAuthHeaders(extra: any = {}): Promise<any> {
    const auth = await this.graph.setAuthorizationHeader();
    return { ...extra, ...auth };
  }

  private async requestWithRetry<T>(doc: string, vars: any, headers?: any): Promise<T> {
    try {
      // headers can be passed as 3rd arg; GraphService.gqlClient.request accepts (doc, vars, headers)
      // @ts-ignore types from graphql-request allow headers
      return await this.graph.gqlClient.request<T, any>(doc as any, vars, headers);
    } catch (err: any) {
      if (await this.graph.checkAndRenewJwt(err?.message || '')) {
        const h = await this.withAuthHeaders(headers);
        // @ts-ignore
        return await this.graph.gqlClient.request<T, any>(doc as any, vars, h);
      }
      const msg = `AcademicDegree request failed. ${this.log.redactSensitive(err?.message || '')}`;
      this.log.error(msg);
      throw new BadRequestException(msg);
    }
  }

  // ---------- Queries ----------
  async find(
    filter: AcademicDegreeFindInput,
    options?: { rowSelect?: SelectShape<AcademicDegreeEntity>; metaSelect?: string; metaOptions?: FindMetaOptions }
  ): Promise<AcademicDegreeFindOutput> {
    const defaultRowSel = `id acadfield_id title desc created updated deleted fr_academic_field { id title desc created updated deleted }`;
    const rowSel = buildSelection(options?.rowSelect, defaultRowSel);
    const defaultMetaSel = buildFindMetaSelect();
    const metaSel = (options?.metaSelect || buildFindMetaSelect(options?.metaOptions) || defaultMetaSel).trim();
    const q = gql`
      query AcademicDegreeFind($filter: AcademicDegreeFindInput!) {
        AcademicDegreeFind(filter: $filter) {
          ${metaSel}
          rows { ${rowSel} }
        }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicDegreeFind: AcademicDegreeFindOutput }>(q, { filter }, headers);
    return res.AcademicDegreeFind;
  }

  async findOneById(
    input: { id: number; withDeleted?: boolean },
    options?: { select?: SelectShape<AcademicDegreeEntity> }
  ): Promise<AcademicDegreeEntity> {
    const defaultSel = `id acadfield_id title desc created updated deleted fr_academic_field { id title desc created updated deleted }`;
    const sel = buildSelection(options?.select, defaultSel);
    const q = gql`
      query AcademicDegreeFindOneById($input: AcademicDegreeFindOneByIdInput!) {
        AcademicDegreeFindOneById(input: $input) { ${sel} }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicDegreeFindOneById: AcademicDegreeEntity }>(q, { input }, headers);
    return res.AcademicDegreeFindOneById;
  }

  // ---------- Mutations ----------
  async create(
    input: AcademicDegreeCreateInput[],
    options?: { select?: SelectShape<AcademicDegreeEntity> }
  ): Promise<AcademicDegreeCreateOutput[]> {
    const defaultSel = `id acadfield_id title desc created updated deleted fr_academic_field { id title desc created updated deleted }`;
    const sel = buildSelection(options?.select, defaultSel);
    const m = gql`
      mutation AcademicDegreeCreate($input: [AcademicDegreeCreateInput!]!) {
        AcademicDegreeCreate(input: $input) { ${sel} }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicDegreeCreate: AcademicDegreeCreateOutput[] }>(m, { input }, headers);
    return res.AcademicDegreeCreate;
  }

  async update(
    input: AcademicDegreeUpdateInput,
    options?: { affectedRowSelect?: SelectShape<AcademicDegreeEntity> }
  ): Promise<AcademicDegreeUpdateOutput> {
    const defaultRowSel = `id acadfield_id title desc created updated deleted fr_academic_field { id title desc created updated deleted }`;
    const rowSel = buildSelection(options?.affectedRowSelect, defaultRowSel);
    const m = gql`
      mutation AcademicDegreeUpdate($input: AcademicDegreeUpdateInput!) {
        AcademicDegreeUpdate(input: $input) {
          affected
          snapshot { message result imp mismatch notFound conflict success error alert warning notice info }
          affectedRows { ${rowSel} }
        }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicDegreeUpdate: AcademicDegreeUpdateOutput }>(m, { input }, headers);
    return res.AcademicDegreeUpdate;
  }

  async upsert(
    input: AcademicDegreeUpsertInput[],
    options?: { select?: SelectShape<AcademicDegreeEntity> }
  ): Promise<AcademicDegreeUpsertOutput[]> {
    const defaultSel = `id acadfield_id title desc created updated deleted fr_academic_field { id title desc created updated deleted } upsert_process`;
    const sel = buildSelection(options?.select, defaultSel);
    const m = gql`
      mutation AcademicDegreeUpsert($input: [AcademicDegreeUpsertInput!]!) {
        AcademicDegreeUpsert(input: $input) { ${sel} }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicDegreeUpsert: AcademicDegreeUpsertOutput[] }>(m, { input }, headers);
    return res.AcademicDegreeUpsert;
  }

  async softDelete(input: AcademicDegreeSoftDeleteInput): Promise<AcademicDegreeSoftDeleteOutput> {
    const m = gql`
      mutation AcademicDegreeSoftDelete($input: AcademicDegreeSoftDeleteInput!) {
        AcademicDegreeSoftDelete(input: $input) { affected snapshot { message success warning error } }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicDegreeSoftDelete: AcademicDegreeSoftDeleteOutput }>(m, { input }, headers);
    return res.AcademicDegreeSoftDelete;
  }

  async delete(input: AcademicDegreeDeleteInput): Promise<AcademicDegreeDeleteOutput> {
    const m = gql`
      mutation AcademicDegreeDelete($input: AcademicDegreeDeleteInput!) {
        AcademicDegreeDelete(input: $input) { affected snapshot { message success warning error } }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicDegreeDelete: AcademicDegreeDeleteOutput }>(m, { input }, headers);
    return res.AcademicDegreeDelete;
  }

  async softRemove(
    input: AcademicDegreeSoftRemoveInput,
    options?: { affectedRowSelect?: SelectShape<AcademicDegreeEntity> }
  ): Promise<AcademicDegreeSoftRemoveOutput> {
    const defaultRowSel = `id acadfield_id title desc created updated deleted fr_academic_field { id title desc created updated deleted }`;
    const rowSel = buildSelection(options?.affectedRowSelect, defaultRowSel);
    const m = gql`
      mutation AcademicDegreeSoftRemove($input: AcademicDegreeSoftRemoveInput!) {
        AcademicDegreeSoftRemove(input: $input) {
          affected
          snapshot { message success warning error }
          affectedRows { ${rowSel} }
        }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicDegreeSoftRemove: AcademicDegreeSoftRemoveOutput }>(m, { input }, headers);
    return res.AcademicDegreeSoftRemove;
  }

  async remove(
    input: AcademicDegreeRemoveInput,
    options?: { affectedRowSelect?: SelectShape<AcademicDegreeEntity> }
  ): Promise<AcademicDegreeRemoveOutput> {
    const defaultRowSel = `id acadfield_id title desc created updated deleted fr_academic_field { id title desc created updated deleted }`;
    const rowSel = buildSelection(options?.affectedRowSelect, defaultRowSel);
    const m = gql`
      mutation AcademicDegreeRemove($input: AcademicDegreeRemoveInput!) {
        AcademicDegreeRemove(input: $input) {
          affected
          snapshot { message success warning error }
          affectedRows { ${rowSel} }
        }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicDegreeRemove: AcademicDegreeRemoveOutput }>(m, { input }, headers);
    return res.AcademicDegreeRemove;
  }

  async restore(input: AcademicDegreeRestoreInput): Promise<AcademicDegreeRestoreOutput> {
    const m = gql`
      mutation AcademicDegreeRestore($input: AcademicDegreeRestoreInput!) {
        AcademicDegreeRestore(input: $input) { affected snapshot { message success warning error } }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicDegreeRestore: AcademicDegreeRestoreOutput }>(m, { input }, headers);
    return res.AcademicDegreeRestore;
  }

  async recover(
    input: AcademicDegreeRecoverInput,
    options?: { affectedRowSelect?: SelectShape<AcademicDegreeEntity> }
  ): Promise<AcademicDegreeRecoverOutput> {
    const defaultRowSel = `id acadfield_id title desc created updated deleted fr_academic_field { id title desc created updated deleted }`;
    const rowSel = buildSelection(options?.affectedRowSelect, defaultRowSel);
    const m = gql`
      mutation AcademicDegreeRecover($input: AcademicDegreeRecoverInput!) {
        AcademicDegreeRecover(input: $input) {
          affected
          snapshot { message success warning error }
          affectedRows { ${rowSel} }
        }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicDegreeRecover: AcademicDegreeRecoverOutput }>(m, { input }, headers);
    return res.AcademicDegreeRecover;
  }
}
