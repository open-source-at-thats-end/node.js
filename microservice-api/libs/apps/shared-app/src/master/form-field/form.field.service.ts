import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FormFieldEntity } from './entities/form.field.entity';
import { Repository } from 'typeorm';
import { ConfService, LogService } from '@libs/library-app';

@Injectable()
export class FormFieldService {
    constructor(
        @InjectRepository(FormFieldEntity) 
        private readonly repository: Repository<FormFieldEntity>,

        private readonly confService: ConfService,
        private readonly logService: LogService,
      ){
        this.logService.setContext(FormFieldService.name);
      }
}
