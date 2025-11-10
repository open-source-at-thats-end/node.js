import { FindOperatorDto, FindOutputPagination, SnapshotListDto } from "../thatsend.api.type";
import { RecordSortDirectionEnum, UpsertStatusEnum } from "../thatsend.api.enum";
import { AcademicDegreeEntity } from "./academic.degree.entity";
import type { AcademicFieldFindInputWhere } from "../academic-field/academic.field.dto";

// ---- Find ----
export interface AcademicDegreeFindInputGroupBy {
  acadfield_id?: boolean;
  title?: boolean;
  created?: boolean;
  updated?: boolean;
  deleted?: boolean;
}

export interface AcademicDegreeFindInputSortOrder {
  id?: RecordSortDirectionEnum;
  acadfield_id?: RecordSortDirectionEnum;
  title?: RecordSortDirectionEnum;
  created?: RecordSortDirectionEnum;
  updated?: RecordSortDirectionEnum;
  deleted?: RecordSortDirectionEnum;
}

export interface AcademicDegreeFindInputWhere {
  id?: FindOperatorDto;
  acadfield_id?: FindOperatorDto;
  title?: FindOperatorDto;
  created?: FindOperatorDto;
  updated?: FindOperatorDto;
  deleted?: FindOperatorDto;
  fr_academic_field?: AcademicFieldFindInputWhere[];
}

export interface AcademicDegreeFindInput {
  skip?: number;
  take?: number;
  withDeleted?: boolean;
  where?: AcademicDegreeFindInputWhere[];
  groupBy?: AcademicDegreeFindInputGroupBy;
  order?: AcademicDegreeFindInputSortOrder;
}

export interface AcademicDegreeFindOutput {
  total: number;
  remain: number;
  pages: number;
  take: number;
  pagination: FindOutputPagination;
  rows: AcademicDegreeEntity[];
}

// ---- Create / Upsert ----
export interface AcademicDegreeCreateInput {
  acadfield_id: number;
  title: string;
  desc?: string;
}

export interface AcademicDegreeCreateOutput extends AcademicDegreeEntity {}

export interface AcademicDegreeUpsertInput {
  acadfield_id: number;
  title: string;
  desc?: string;
  id?: number;
}

export interface AcademicDegreeUpsertOutput extends AcademicDegreeEntity {
  upsert_process?: UpsertStatusEnum;
}

// ---- Update ----
export interface AcademicDegreeUpdateInputWhere {
  id?: FindOperatorDto;
  acadfield_id?: FindOperatorDto;
  title?: FindOperatorDto;
  created?: FindOperatorDto;
  updated?: FindOperatorDto;
  deleted?: FindOperatorDto;
  fr_academic_field?: AcademicFieldFindInputWhere[];
}

export interface AcademicDegreeUpdateInputSets {
  acadfield_id?: number;
  title?: string;
  desc?: string;
}

export interface AcademicDegreeUpdateInput {
  where: AcademicDegreeUpdateInputWhere[];
  sets: AcademicDegreeUpdateInputSets;
}

export interface AcademicDegreeUpdateOutput {
  snapshot?: SnapshotListDto;
  affected: number;
  affectedRows: AcademicDegreeEntity[];
}

// ---- Delete / SoftDelete / Remove / SoftRemove / Restore / Recover ----
export interface AcademicDegreeDeleteInputWhere extends AcademicDegreeUpdateInputWhere {}
export interface AcademicDegreeDeleteInput { where: AcademicDegreeDeleteInputWhere[] }
export interface AcademicDegreeDeleteOutput { snapshot?: SnapshotListDto; affected: number }

export interface AcademicDegreeSoftDeleteInputWhere extends AcademicDegreeUpdateInputWhere {}
export interface AcademicDegreeSoftDeleteInput { where: AcademicDegreeSoftDeleteInputWhere[] }
export interface AcademicDegreeSoftDeleteOutput { snapshot?: SnapshotListDto; affected: number }

export interface AcademicDegreeRemoveInputWhere extends AcademicDegreeUpdateInputWhere {}
export interface AcademicDegreeRemoveInput { where: AcademicDegreeRemoveInputWhere[] }
export interface AcademicDegreeRemoveOutput { snapshot?: SnapshotListDto; affected: number; affectedRows: AcademicDegreeEntity[] }

export interface AcademicDegreeSoftRemoveInputWhere extends AcademicDegreeUpdateInputWhere {}
export interface AcademicDegreeSoftRemoveInput { where: AcademicDegreeSoftRemoveInputWhere[] }
export interface AcademicDegreeSoftRemoveOutput { snapshot?: SnapshotListDto; affected: number; affectedRows: AcademicDegreeEntity[] }

export interface AcademicDegreeRestoreInputWhere extends AcademicDegreeUpdateInputWhere {}
export interface AcademicDegreeRestoreInput { where: AcademicDegreeRestoreInputWhere[] }
export interface AcademicDegreeRestoreOutput { snapshot?: SnapshotListDto; affected: number }

export interface AcademicDegreeRecoverInputWhere extends AcademicDegreeUpdateInputWhere {}
export interface AcademicDegreeRecoverInput { where: AcademicDegreeRecoverInputWhere[] }
export interface AcademicDegreeRecoverOutput { snapshot?: SnapshotListDto; affected: number; affectedRows: AcademicDegreeEntity[] }
