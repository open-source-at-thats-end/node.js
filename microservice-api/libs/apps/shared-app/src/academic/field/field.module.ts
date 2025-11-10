import { Module } from '@nestjs/common';
import { AcademicFieldService } from './field.service';
import { AcademicFieldResolver } from './field.resolver';
import { AcademicFieldEntity } from './entities/field.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { AcademicFieldFactory } from './field.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([AcademicFieldEntity]),
  ],
  providers: [
    AcademicFieldResolver, 
    AcademicFieldService, 
    AcademicFieldFactory, // TODO: NE: 1
  ],
  exports : [
    AcademicFieldResolver, 
    AcademicFieldService
  ],
})
export class AcademicFieldModule {}