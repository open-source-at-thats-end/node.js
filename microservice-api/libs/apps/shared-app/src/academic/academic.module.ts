import { Module } from '@nestjs/common';
import { AcademicFieldModule } from './field/field.module';
import { AcademicDegreeModule } from './degree/degree.module';

@Module({
  imports: [
    AcademicFieldModule,
    AcademicDegreeModule
  
  ],
  providers: [],
  exports: [
    AcademicFieldModule,
    AcademicDegreeModule
  ],
})
export class AcademicModule {}
