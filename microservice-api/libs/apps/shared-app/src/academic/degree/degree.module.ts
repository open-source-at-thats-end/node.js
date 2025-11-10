import { Module } from '@nestjs/common';
import { AcademicDegreeService } from './degree.service';
import { AcademicDegreeResolver } from './degree.resolver';
import { AcademicDegreeEntity } from './entities/degree.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { AcademicDegreeFactory } from './degree.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([AcademicDegreeEntity]),
  ],
  providers: [
    AcademicDegreeResolver, 
    AcademicDegreeService, 
    AcademicDegreeFactory
  ],
  exports : [
    AcademicDegreeResolver, 
    AcademicDegreeService
  ],
})
export class AcademicDegreeModule {}