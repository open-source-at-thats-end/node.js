import { Module } from '@nestjs/common';
import { AcademicFieldService } from './academic.field.service';
import { GraphModule } from '../graph/graph.module';

@Module({
  imports: [GraphModule],
  providers: [AcademicFieldService],
  exports: [AcademicFieldService],
})
export class AcademicFieldModule {}

