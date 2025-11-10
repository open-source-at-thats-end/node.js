import { Injectable, NotFoundException } from '@nestjs/common';
import { WebhookResponseEntity } from './entities/response.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WebhookResponseService {

    constructor(
        @InjectRepository(WebhookResponseEntity)
        private readonly respository: Repository<WebhookResponseEntity>,
      ){}
}