import { Module } from '@nestjs/common';
import { RetsListingRoomService } from './room.service';
import { RetsListingRoomResolver } from './room.resolver';
import { RetsListingRoomEntity } from './entities/room.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { RetsListingRoomFactory } from './room.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([RetsListingRoomEntity]),
  ],
  providers: [
    RetsListingRoomResolver, 
    RetsListingRoomService, 
    RetsListingRoomFactory
  ],
  exports : [
    RetsListingRoomResolver, 
    RetsListingRoomService
  ],
})
export class RetsListingRoomModule {}