import { Module } from '@nestjs/common';
import { RetsListingMetadataService } from './metadata.service';
import { RetsListingMetadataResolver } from './metadata.resolver';
import { RetsListingMetadataEntity } from './entities/metadata.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { RetsListingMetadataFactory } from './metadata.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([RetsListingMetadataEntity]),
  ],
  providers: [
    RetsListingMetadataResolver, 
    RetsListingMetadataService, 
    RetsListingMetadataFactory
  ],
  exports : [
    RetsListingMetadataResolver, 
    RetsListingMetadataService
  ],
})
export class RetsListingMetadataModule {}