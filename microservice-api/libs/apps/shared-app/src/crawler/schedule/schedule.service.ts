import { Injectable, NotFoundException } from '@nestjs/common';
import { CrawlerScheduleEntity } from './entities/schedule.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CrawlerScheduleService {

    constructor(
        @InjectRepository(CrawlerScheduleEntity) 
        private readonly geoCountryRepository: Repository<CrawlerScheduleEntity>,
      ){}
}
