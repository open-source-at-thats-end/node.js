import { Injectable, NotFoundException } from '@nestjs/common';
import { WebhookResponseDataEntity } from './entities/response.data.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WebhookResponseDataService {

    constructor(
        @InjectRepository(WebhookResponseDataEntity) 
        private readonly repository: Repository<WebhookResponseDataEntity>,
      ){}
}
