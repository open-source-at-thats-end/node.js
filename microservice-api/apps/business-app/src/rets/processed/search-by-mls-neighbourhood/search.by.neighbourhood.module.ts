import { Module } from '@nestjs/common';
import { ProcessedSearchByNeighbourhoodService } from './search.by.neighbourhood.service';
import { ProcessedSearchByNeighbourhoodResolver } from './search.by.neighbourhood.resolver';
import { ProcessedSearchByNeighbourhoodEntity } from './entities/search.by.neighbourhood.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { ProcessedSearchByNeighbourhoodFactory } from './search.by.neighbourhood.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([ProcessedSearchByNeighbourhoodEntity]),
  ],
  providers: [
    ProcessedSearchByNeighbourhoodResolver, 
    ProcessedSearchByNeighbourhoodService, 
    ProcessedSearchByNeighbourhoodFactory,
  ],
  exports : [
    ProcessedSearchByNeighbourhoodResolver, 
    ProcessedSearchByNeighbourhoodService
  ],
})
export class ProcessedSearchByNeighbourhoodModule {}