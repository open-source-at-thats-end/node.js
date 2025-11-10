import { Module } from '@nestjs/common';
import { AcademicDegreeService } from './academic.degree.service';
import { GraphModule } from '../graph/graph.module';

@Module({
  imports: [GraphModule],
  providers: [AcademicDegreeService],
  exports: [AcademicDegreeService],
})
export class AcademicDegreeModule {}

