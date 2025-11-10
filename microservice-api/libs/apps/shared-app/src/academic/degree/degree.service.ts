import { Injectable, NotFoundException } from '@nestjs/common';
import { AcademicDegreeEntity } from './entities/degree.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AcademicDegreeService {

    constructor(
        @InjectRepository(AcademicDegreeEntity) 
        private readonly geoCountryRepository: Repository<AcademicDegreeEntity>,
      ){}
}
