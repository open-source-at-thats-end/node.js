import type { AcademicFieldEntity } from "../academic-field/academic.field.entity";
export interface AcademicDegreeEntity {
  id?: number;
  acadfield_id?: number;
  title?: string;
  desc?: string;
  created?: string; // DateTime (ISO)
  updated?: string; // DateTime (ISO)
  deleted?: string; // DateTime (ISO)
  fr_academic_field?: AcademicFieldEntity; // relation
}
