import { Injectable, NotFoundException } from '@nestjs/common';
import { StateEntity } from './entities/state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StateFindOutputRowsDto } from './dto/state.dto';
import { StateFactory } from './state.factory';
import { any } from 'joi';
import { GraphQLResolveInfo } from 'graphql';

@Injectable()
export class StateService {
    constructor(
        @InjectRepository(StateEntity) 
        private readonly repository: Repository<StateEntity>,
        protected readonly factory: StateFactory,
    ){}
}