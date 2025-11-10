import { Injectable, BadRequestException } from '@nestjs/common';
import { gql } from 'graphql-request';
import { GraphService } from '../graph/graph.service';
import { AcademicFieldEntity } from './academic.field.entity';
import { AcademicFieldFindInput, AcademicFieldFindOutput, AcademicFieldCreateInput, AcademicFieldCreateOutput, AcademicFieldUpdateInput, AcademicFieldUpdateOutput, AcademicFieldDeleteInput, AcademicFieldDeleteOutput, AcademicFieldSoftDeleteInput, AcademicFieldSoftDeleteOutput, AcademicFieldRemoveInput, AcademicFieldRemoveOutput, AcademicFieldSoftRemoveInput, AcademicFieldSoftRemoveOutput, AcademicFieldRestoreInput, AcademicFieldRestoreOutput, AcademicFieldRecoverInput, AcademicFieldRecoverOutput, AcademicFieldUpsertInput, AcademicFieldUpsertOutput } from './academic.field.dto';
import { LogService } from '@libs/library-app';
import { buildSelection, SelectShape, buildFindMetaSelect, FindMetaOptions } from '../thatsend.api.select';

@Injectable()
export class AcademicFieldService {
  constructor(private readonly graph: GraphService, private readonly log: LogService) {
    this.log.setContext(AcademicFieldService.name);
  }

  private async withAuthHeaders(extra: any = {}): Promise<any> {
    const auth = await this.graph.setAuthorizationHeader();
    return { ...extra, ...auth };
  }

  private async requestWithRetry<T>(doc: string, vars: any, headers?: any): Promise<T> {
    try {
      // @ts-ignore headers accepted by graphql-request
      return await this.graph.gqlClient.request<T, any>(doc as any, vars, headers);
    } catch (err: any) {
      if (await this.graph.checkAndRenewJwt(err?.message || '')) {
        const h = await this.withAuthHeaders(headers);
        // @ts-ignore
        return await this.graph.gqlClient.request<T, any>(doc as any, vars, h);
      }
      const msg = `AcademicField request failed. ${this.log.redactSensitive(err?.message || '')}`;
      this.log.error(msg);
      throw new BadRequestException(msg);
    }
  }

  async find(
    filter: AcademicFieldFindInput,
    options?: { rowSelect?: SelectShape<AcademicFieldEntity>; metaSelect?: string; metaOptions?: FindMetaOptions }
  ): Promise<AcademicFieldFindOutput> {
    const defaultRowSel = `id title desc created updated deleted fr_academic_degrees { id acadfield_id title desc created updated deleted }`;
    const rowSel = buildSelection(options?.rowSelect, defaultRowSel);
    const defaultMetaSel = buildFindMetaSelect();
    const metaSel = (options?.metaSelect || buildFindMetaSelect(options?.metaOptions) || defaultMetaSel).trim();
    const q = gql`
      query AcademicFieldFind($filter: AcademicFieldFindInput!) {
        AcademicFieldFind(filter: $filter) {
          ${metaSel}
          rows { ${rowSel} }
        }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicFieldFind: AcademicFieldFindOutput }>(q, { filter }, headers);
    return res.AcademicFieldFind;
  }

  async findOneById(
    input: { id: number; withDeleted?: boolean },
    options?: { select?: SelectShape<AcademicFieldEntity> }
  ): Promise<AcademicFieldEntity> {
    const defaultSel = `id title desc created updated deleted fr_academic_degrees { id acadfield_id title desc created updated deleted }`;
    const sel = buildSelection(options?.select, defaultSel);
    const q = gql`
      query AcademicFieldFindOneById($input: AcademicFieldFindOneByIdInput!) {
        AcademicFieldFindOneById(input: $input) { ${sel} }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicFieldFindOneById: AcademicFieldEntity }>(q, { input }, headers);
    return res.AcademicFieldFindOneById;
  }

  async create(
    input: AcademicFieldCreateInput[],
    options?: { select?: SelectShape<AcademicFieldEntity> }
  ): Promise<AcademicFieldCreateOutput[]> {
    const defaultSel = `id title desc created updated deleted fr_academic_degrees { id acadfield_id title desc created updated deleted }`;
    const sel = buildSelection(options?.select, defaultSel);
    const m = gql`
      mutation AcademicFieldCreate($input: [AcademicFieldCreateInput!]!) {
        AcademicFieldCreate(input: $input) { ${sel} }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicFieldCreate: AcademicFieldCreateOutput[] }>(m, { input }, headers);
    return res.AcademicFieldCreate;
  }

  async update(
    input: AcademicFieldUpdateInput,
    options?: { affectedRowSelect?: SelectShape<AcademicFieldEntity> }
  ): Promise<AcademicFieldUpdateOutput> {
    const defaultRowSel = `id title desc created updated deleted fr_academic_degrees { id acadfield_id title desc created updated deleted }`;
    const rowSel = buildSelection(options?.affectedRowSelect, defaultRowSel);
    const m = gql`
      mutation AcademicFieldUpdate($input: AcademicFieldUpdateInput!) {
        AcademicFieldUpdate(input: $input) {
          affected
          snapshot { message result success error }
          affectedRows { ${rowSel} }
        }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicFieldUpdate: AcademicFieldUpdateOutput }>(m, { input }, headers);
    return res.AcademicFieldUpdate;
  }

  async upsert(
    input: AcademicFieldUpsertInput[],
    options?: { select?: SelectShape<AcademicFieldEntity> }
  ): Promise<AcademicFieldUpsertOutput[]> {
    const defaultSel = `id title desc created updated deleted fr_academic_degrees { id acadfield_id title desc created updated deleted } upsert_process`;
    const sel = buildSelection(options?.select, defaultSel);
    const m = gql`
      mutation AcademicFieldUpsert($input: [AcademicFieldUpsertInput!]!) {
        AcademicFieldUpsert(input: $input) { ${sel} }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicFieldUpsert: AcademicFieldUpsertOutput[] }>(m, { input }, headers);
    return res.AcademicFieldUpsert;
  }

  async softDelete(input: AcademicFieldSoftDeleteInput): Promise<AcademicFieldSoftDeleteOutput> {
    const m = gql`
      mutation AcademicFieldSoftDelete($input: AcademicFieldSoftDeleteInput!) {
        AcademicFieldSoftDelete(input: $input) { affected snapshot { message success warning error } }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicFieldSoftDelete: AcademicFieldSoftDeleteOutput }>(m, { input }, headers);
    return res.AcademicFieldSoftDelete;
  }

  async delete(input: AcademicFieldDeleteInput): Promise<AcademicFieldDeleteOutput> {
    const m = gql`
      mutation AcademicFieldDelete($input: AcademicFieldDeleteInput!) {
        AcademicFieldDelete(input: $input) { affected snapshot { message success warning error } }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicFieldDelete: AcademicFieldDeleteOutput }>(m, { input }, headers);
    return res.AcademicFieldDelete;
  }

  async softRemove(
    input: AcademicFieldSoftRemoveInput,
    options?: { affectedRowSelect?: SelectShape<AcademicFieldEntity> }
  ): Promise<AcademicFieldSoftRemoveOutput> {
    const defaultRowSel = `id title desc created updated deleted fr_academic_degrees { id acadfield_id title desc created updated deleted }`;
    const rowSel = buildSelection(options?.affectedRowSelect, defaultRowSel);
    const m = gql`
      mutation AcademicFieldSoftRemove($input: AcademicFieldSoftRemoveInput!) {
        AcademicFieldSoftRemove(input: $input) {
          affected
          snapshot { message success warning error }
          affectedRows { ${rowSel} }
        }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicFieldSoftRemove: AcademicFieldSoftRemoveOutput }>(m, { input }, headers);
    return res.AcademicFieldSoftRemove;
  }

  async remove(
    input: AcademicFieldRemoveInput,
    options?: { affectedRowSelect?: SelectShape<AcademicFieldEntity> }
  ): Promise<AcademicFieldRemoveOutput> {
    const defaultRowSel = `id title desc created updated deleted fr_academic_degrees { id acadfield_id title desc created updated deleted }`;
    const rowSel = buildSelection(options?.affectedRowSelect, defaultRowSel);
    const m = gql`
      mutation AcademicFieldRemove($input: AcademicFieldRemoveInput!) {
        AcademicFieldRemove(input: $input) {
          affected
          snapshot { message success warning error }
          affectedRows { ${rowSel} }
        }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicFieldRemove: AcademicFieldRemoveOutput }>(m, { input }, headers);
    return res.AcademicFieldRemove;
  }

  async restore(input: AcademicFieldRestoreInput): Promise<AcademicFieldRestoreOutput> {
    const m = gql`
      mutation AcademicFieldRestore($input: AcademicFieldRestoreInput!) {
        AcademicFieldRestore(input: $input) { affected snapshot { message success warning error } }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicFieldRestore: AcademicFieldRestoreOutput }>(m, { input }, headers);
    return res.AcademicFieldRestore;
  }

  async recover(
    input: AcademicFieldRecoverInput,
    options?: { affectedRowSelect?: SelectShape<AcademicFieldEntity> }
  ): Promise<AcademicFieldRecoverOutput> {
    const defaultRowSel = `id title desc created updated deleted fr_academic_degrees { id acadfield_id title desc created updated deleted }`;
    const rowSel = buildSelection(options?.affectedRowSelect, defaultRowSel);
    const m = gql`
      mutation AcademicFieldRecover($input: AcademicFieldRecoverInput!) {
        AcademicFieldRecover(input: $input) {
          affected
          snapshot { message success warning error }
          affectedRows { ${rowSel} }
        }
      }
    `;
    const headers = await this.withAuthHeaders();
    const res = await this.requestWithRetry<{ AcademicFieldRecover: AcademicFieldRecoverOutput }>(m, { input }, headers);
    return res.AcademicFieldRecover;
  }
}
