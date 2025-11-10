import { Module } from '@nestjs/common';
import { ProcessedSearchByCityService } from './search.by.city.service';
import { ProcessedSearchByCityResolver } from './search.by.city.resolver';
import { ProcessedSearchByCityEntity } from './entities/search.by.city.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { ProcessedSearchByCityFactory } from './search.by.city.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([ProcessedSearchByCityEntity]),
  ],
  providers: [
    ProcessedSearchByCityResolver, 
    ProcessedSearchByCityService, 
    ProcessedSearchByCityFactory,
  ],
  exports : [
    ProcessedSearchByCityResolver, 
    ProcessedSearchByCityService
  ],
})
export class ProcessedSearchByCityModule {}