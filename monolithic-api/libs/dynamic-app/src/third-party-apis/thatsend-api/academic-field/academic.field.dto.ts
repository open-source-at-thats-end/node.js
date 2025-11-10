import { FindOperatorDto, FindOutputPagination, SnapshotListDto } from "../thatsend.api.type";
import { RecordSortDirectionEnum, UpsertStatusEnum } from "../thatsend.api.enum";
import { AcademicFieldEntity } from "./academic.field.entity";
import type { AcademicDegreeFindInputWhere } from "../academic-degree/academic.degree.dto";

export interface AcademicFieldFindInputGroupBy {
  title?: boolean;
  created?: boolean;
  updated?: boolean;
  deleted?: boolean;
}

export interface AcademicFieldFindInputSortOrder {
  id?: RecordSortDirectionEnum;
  title?: RecordSortDirectionEnum;
  created?: RecordSortDirectionEnum;
  updated?: RecordSortDirectionEnum;
  deleted?: RecordSortDirectionEnum;
}

export interface AcademicFieldFindInputWhere {
  id?: FindOperatorDto;
  title?: FindOperatorDto;
  created?: FindOperatorDto;
  updated?: FindOperatorDto;
  deleted?: FindOperatorDto;
  fr_academic_degrees?: AcademicDegreeFindInputWhere[];
}

export interface AcademicFieldFindInput {
  skip?: number;
  take?: number;
  withDeleted?: boolean;
  where?: AcademicFieldFindInputWhere[];
  groupBy?: AcademicFieldFindInputGroupBy;
  order?: AcademicFieldFindInputSortOrder;
}

export interface AcademicFieldFindOutput {
  total: number;
  remain: number;
  pages: number;
  take: number;
  pagination: FindOutputPagination;
  rows: AcademicFieldEntity[];
}

export interface AcademicFieldCreateInput { title: string; desc?: string }
export interface AcademicFieldCreateOutput extends AcademicFieldEntity {}

export interface AcademicFieldUpdateInputWhere {
  id?: FindOperatorDto;
  title?: FindOperatorDto;
  created?: FindOperatorDto;
  updated?: FindOperatorDto;
  deleted?: FindOperatorDto;
}

export interface AcademicFieldUpdateInputSets { title?: string; desc?: string }
export interface AcademicFieldUpdateInput { where: AcademicFieldUpdateInputWhere[]; sets: AcademicFieldUpdateInputSets }
export interface AcademicFieldUpdateOutput { snapshot?: SnapshotListDto; affected: number; affectedRows: AcademicFieldEntity[] }

// Upsert
export interface AcademicFieldUpsertInput { id?: number; title: string; desc?: string }
export interface AcademicFieldUpsertOutput extends AcademicFieldEntity { upsert_process?: UpsertStatusEnum }

// Delete / SoftDelete / Remove / SoftRemove / Restore / Recover
export interface AcademicFieldDeleteInputWhere extends AcademicFieldUpdateInputWhere {}
export interface AcademicFieldDeleteInput { where: AcademicFieldDeleteInputWhere[] }
export interface AcademicFieldDeleteOutput { snapshot?: SnapshotListDto; affected: number }

export interface AcademicFieldSoftDeleteInputWhere extends AcademicFieldUpdateInputWhere {}
export interface AcademicFieldSoftDeleteInput { where: AcademicFieldSoftDeleteInputWhere[] }
export interface AcademicFieldSoftDeleteOutput { snapshot?: SnapshotListDto; affected: number }

export interface AcademicFieldRemoveInputWhere extends AcademicFieldUpdateInputWhere {}
export interface AcademicFieldRemoveInput { where: AcademicFieldRemoveInputWhere[] }
export interface AcademicFieldRemoveOutput { snapshot?: SnapshotListDto; affected: number; affectedRows: AcademicFieldEntity[] }

export interface AcademicFieldSoftRemoveInputWhere extends AcademicFieldUpdateInputWhere {}
export interface AcademicFieldSoftRemoveInput { where: AcademicFieldSoftRemoveInputWhere[] }
export interface AcademicFieldSoftRemoveOutput { snapshot?: SnapshotListDto; affected: number; affectedRows: AcademicFieldEntity[] }

export interface AcademicFieldRestoreInputWhere extends AcademicFieldUpdateInputWhere {}
export interface AcademicFieldRestoreInput { where: AcademicFieldRestoreInputWhere[] }
export interface AcademicFieldRestoreOutput { snapshot?: SnapshotListDto; affected: number }

export interface AcademicFieldRecoverInputWhere extends AcademicFieldUpdateInputWhere {}
export interface AcademicFieldRecoverInput { where: AcademicFieldRecoverInputWhere[] }
export interface AcademicFieldRecoverOutput { snapshot?: SnapshotListDto; affected: number; affectedRows: AcademicFieldEntity[] }
