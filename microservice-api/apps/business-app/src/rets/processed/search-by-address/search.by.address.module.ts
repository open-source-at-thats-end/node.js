import { Module } from '@nestjs/common';
import { ProcessedSearchByAddressService } from './search.by.address.service';
import { ProcessedSearchByAddressResolver } from './search.by.address.resolver';
import { ProcessedSearchByAddressEntity } from './entities/search.by.address.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { ProcessedSearchByAddressFactory } from './search.by.address.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([ProcessedSearchByAddressEntity]),
  ],
  providers: [
    ProcessedSearchByAddressResolver, 
    ProcessedSearchByAddressService, 
    ProcessedSearchByAddressFactory,
  ],
  exports : [
    ProcessedSearchByAddressResolver, 
    ProcessedSearchByAddressService
  ],
})
export class ProcessedSearchByAddressModule {}