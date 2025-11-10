import { Module } from '@nestjs/common';
import { ProcessedSearchByMapSearchService } from './search.by.mapsearch.service';
import { ProcessedSearchByMapSearchResolver } from './search.by.mapsearch.resolver';
import { ProcessedSearchByMapSearchEntity } from './entities/search.by.mapsearch.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { ProcessedSearchByMapSearchFactory } from './search.by.mapsearch.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([ProcessedSearchByMapSearchEntity]),
  ],
  providers: [
    ProcessedSearchByMapSearchResolver, 
    ProcessedSearchByMapSearchService, 
    ProcessedSearchByMapSearchFactory,
  ],
  exports : [
    ProcessedSearchByMapSearchResolver, 
    ProcessedSearchByMapSearchService
  ],
})
export class ProcessedSearchByMapSearchModule {}