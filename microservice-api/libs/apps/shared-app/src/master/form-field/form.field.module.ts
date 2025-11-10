import { Module } from '@nestjs/common';
import { FormFieldService } from './form.field.service';
import { FormFieldResolver } from './form.field.resolver';
import { FormFieldEntity } from './entities/form.field.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { FormFieldFactory } from './form.field.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([FormFieldEntity]),
  ],
  providers: [
    FormFieldResolver, 
    FormFieldService, 
    FormFieldFactory
  ],
  exports : [
    FormFieldResolver, 
    FormFieldService
  ],
})
export class FormFieldModule {}