import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SettingCategoryEntity } from './entities/category.entity';
import { Repository } from 'typeorm';
import { ConfService, LogService } from '@libs/library-app';

@Injectable()
export class SettingCategoryService {
    constructor(
        @InjectRepository(SettingCategoryEntity) 
        private readonly repository: Repository<SettingCategoryEntity>,

        private readonly confService: ConfService,
        private readonly logService: LogService,
      ){
        this.logService.setContext(SettingCategoryService.name);
      }
}
