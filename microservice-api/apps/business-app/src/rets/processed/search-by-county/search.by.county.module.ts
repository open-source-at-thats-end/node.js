import { Module } from '@nestjs/common';
import { ProcessedSearchByCountyService } from './search.by.county.service';
import { ProcessedSearchByCountyResolver } from './search.by.county.resolver';
import { ProcessedSearchByCountyEntity } from './entities/search.by.county.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { ProcessedSearchByCountyFactory } from './search.by.county.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([ProcessedSearchByCountyEntity]),
  ],
  providers: [
    ProcessedSearchByCountyResolver, 
    ProcessedSearchByCountyService, 
    ProcessedSearchByCountyFactory,
  ],
  exports : [
    ProcessedSearchByCountyResolver, 
    ProcessedSearchByCountyService
  ],
})
export class ProcessedSearchByCountyModule {}