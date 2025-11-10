import { Module } from '@nestjs/common';
import { ProcessedSearchByAddressModule } from './search-by-address/search.by.address.module';
import { ProcessedSearchByCityModule } from './search-by-city/search.by.city.module';
import { ProcessedSearchByCountyModule } from './search-by-county/search.by.county.module';
import { ProcessedSearchByMapSearchModule } from './search-by-mapsearch/search.by.mapsearch.module';
import { ProcessedSearchByMlsModule } from './search-by-mls/search.by.mls.module';
import { ProcessedSearchByNeighbourhoodModule } from './search-by-mls-neighbourhood/search.by.neighbourhood.module';
import { ProcessedSearchBySubdivisionModule } from './search-by-mls-subdivision/search.by.subdivision.module';
import { ProcessedSearchByZipcodeModule } from './search-by-mls-zipcode/search.by.zipcode.module';

@Module({
    imports: [
        ProcessedSearchByAddressModule,
        ProcessedSearchByCityModule,
        ProcessedSearchByCountyModule,
        ProcessedSearchByMapSearchModule,
        ProcessedSearchByMlsModule,
        ProcessedSearchByNeighbourhoodModule,
        ProcessedSearchBySubdivisionModule,
        ProcessedSearchByZipcodeModule,
    ],
    providers: [],
    exports: [
        ProcessedSearchByAddressModule,
        ProcessedSearchByCityModule,
        ProcessedSearchByCountyModule,
        ProcessedSearchByMapSearchModule,
        ProcessedSearchByMlsModule,
        ProcessedSearchByNeighbourhoodModule,
        ProcessedSearchBySubdivisionModule,
        ProcessedSearchByZipcodeModule,
    ],
  })
  export class ProcessedModule {}