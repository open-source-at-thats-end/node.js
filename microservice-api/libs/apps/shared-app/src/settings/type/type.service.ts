import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SettingTypeEntity } from './entities/type.entity';
import { Repository } from 'typeorm';
import { ConfService, LogService } from '@libs/library-app';

@Injectable()
export class SettingTypeService {
    constructor(
        @InjectRepository(SettingTypeEntity) 
        private readonly repository: Repository<SettingTypeEntity>,

        private readonly confService: ConfService,
        private readonly logService: LogService,
      ){
        this.logService.setContext(SettingTypeService.name);
      }
}
