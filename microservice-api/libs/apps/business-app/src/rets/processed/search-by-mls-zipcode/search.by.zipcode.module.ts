import { Module } from '@nestjs/common';
import { ProcessedSearchByZipcodeService } from './search.by.zipcode.service';
import { ProcessedSearchByZipcodeResolver } from './search.by.zipcode.resolver';
import { ProcessedSearchByZipcodeEntity } from './entities/search.by.zipcode.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { ProcessedSearchByZipcodeFactory } from './search.by.zipcode.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([ProcessedSearchByZipcodeEntity]),
  ],
  providers: [
    ProcessedSearchByZipcodeResolver, 
    ProcessedSearchByZipcodeService, 
    ProcessedSearchByZipcodeFactory,
  ],
  exports : [
    ProcessedSearchByZipcodeResolver, 
    ProcessedSearchByZipcodeService
  ],
})
export class ProcessedSearchByZipcodeModule {}