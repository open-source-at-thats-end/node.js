import { Module } from '@nestjs/common';
import { ProcessedSearchByMlsService } from './search.by.mls.service';
import { ProcessedSearchByMlsResolver } from './search.by.mls.resolver';
import { ProcessedSearchByMlsEntity } from './entities/search.by.mls.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { ProcessedSearchByMlsFactory } from './search.by.mls.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([ProcessedSearchByMlsEntity]),
  ],
  providers: [
    ProcessedSearchByMlsResolver, 
    ProcessedSearchByMlsService, 
    ProcessedSearchByMlsFactory,
  ],
  exports : [
    ProcessedSearchByMlsResolver, 
    ProcessedSearchByMlsService
  ],
})
export class ProcessedSearchByMlsModule {}