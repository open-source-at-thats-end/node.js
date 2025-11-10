import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueueTypeEntity } from './entities/type.entity';
import { Repository } from 'typeorm';
import { ConfService, LogService } from '@libs/library-app';

@Injectable()
export class QueueTypeService {
    constructor(
        @InjectRepository(QueueTypeEntity) 
        private readonly repository: Repository<QueueTypeEntity>,

        private readonly confService: ConfService,
        private readonly logService: LogService,
      ){
        this.logService.setContext(QueueTypeService.name);
      }
}
