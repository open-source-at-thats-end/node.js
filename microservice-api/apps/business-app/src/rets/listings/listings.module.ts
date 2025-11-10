import { Module } from '@nestjs/common';
import { RetsListingOpenHouseModule } from './open-house/open.house.module';
import { RetsListingModule } from './listing/listing.module';
import { RetsListingAdditionalInfoModule } from './additional-info/additional.info.module';
import { RetsListingAgentModule } from './agent/agent.module';
import { RetsListingOfficeModule } from './office/office.module';
import { RetsListingPhotosModule } from './photos/photos.module';
import { RetsListingMetadataModule } from './metadata/metadata.module';
import { RetsListingRoomModule } from './room/room.module';
import { RetsListingUnitModule } from './unit/unit.module';
import { RetsListingVirtualToursModule } from './virtual-tours/virtual.tours.module';
import { RetsMlsProviderModule } from './mls-provider/mls.provider.module';
import { RetsMlsProviderConfigModule } from './mls-provider-config/mls.provider.config.module';
import { UserFavouritePropertyModule } from './user-favorite-property/user.favourite.property.module';
import { UserSavedSearchModule } from './user-saved-search/user.saved.search.module';


@Module({
    imports: [
        RetsListingOpenHouseModule,
        RetsListingModule,
        RetsListingAdditionalInfoModule,
        RetsListingAgentModule,
        RetsListingOfficeModule,
        RetsListingPhotosModule,
        RetsListingMetadataModule,
        RetsListingRoomModule,
        RetsListingUnitModule,
        RetsListingVirtualToursModule,
        RetsMlsProviderModule,
        RetsMlsProviderConfigModule,
        UserFavouritePropertyModule,
        UserSavedSearchModule,

    ],
    providers: [],
    exports: [
        RetsListingOpenHouseModule,
        RetsListingModule,
        RetsListingAdditionalInfoModule,
        RetsListingAgentModule,
        RetsListingOfficeModule,
        RetsListingPhotosModule,
        RetsListingMetadataModule,
        RetsListingRoomModule,
        RetsListingUnitModule,
        RetsListingVirtualToursModule,
        RetsMlsProviderModule,
        RetsMlsProviderConfigModule,
        UserFavouritePropertyModule,
        UserSavedSearchModule,

    ],
  })
  export class ListingsModule {}