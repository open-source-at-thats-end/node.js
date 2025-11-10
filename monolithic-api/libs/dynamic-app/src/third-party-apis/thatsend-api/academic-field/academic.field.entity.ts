import type { AcademicDegreeEntity } from "../academic-degree/academic.degree.entity";
export interface AcademicFieldEntity {
  id?: number;
  title?: string;
  desc?: string;
  created?: string; // DateTime (ISO)
  updated?: string; // DateTime (ISO)
  deleted?: string; // DateTime (ISO)
  fr_academic_degrees?: AcademicDegreeEntity[];
}
