import { Module } from '@nestjs/common';
import { ProcessedSearchBySubdivisionService } from './search.by.subdivision.service';
import { ProcessedSearchBySubdivisionResolver } from './search.by.subdivision.resolver';
import { ProcessedSearchBySubdivisionEntity } from './entities/search.by.subdivision.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { ProcessedSearchBySubdivisionFactory } from './search.by.subdivision.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([ProcessedSearchBySubdivisionEntity]),
  ],
  providers: [
    ProcessedSearchBySubdivisionResolver, 
    ProcessedSearchBySubdivisionService, 
    ProcessedSearchBySubdivisionFactory,
  ],
  exports : [
    ProcessedSearchBySubdivisionResolver, 
    ProcessedSearchBySubdivisionService
  ],
})
export class ProcessedSearchBySubdivisionModule {}