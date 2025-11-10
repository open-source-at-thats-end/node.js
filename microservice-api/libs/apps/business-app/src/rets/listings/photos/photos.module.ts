import { Module } from '@nestjs/common';
import { RetsListingPhotosService } from './photos.service';
import { RetsListingPhotosResolver } from './photos.resolver';
import { RetsListingPhotosEntity } from './entities/photos.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { RetsListingPhotosFactory } from './photos.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([RetsListingPhotosEntity]),
  ],
  providers: [
    RetsListingPhotosResolver, 
    RetsListingPhotosService, 
    RetsListingPhotosFactory
  ],
  exports : [
    RetsListingPhotosResolver, 
    RetsListingPhotosService
  ],
})
export class RetsListingPhotosModule {}