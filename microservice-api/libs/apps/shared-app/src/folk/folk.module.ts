import { Module } from '@nestjs/common';
import { FolkService } from './folk.service';
import { UserModule } from './user/user.module';
import { UserAuthenticationModule } from './user-auth/user.auth.module';
import { UserDeviceModule } from './user-device/user.device.module';
import { UserCorporateInfoModule } from './user-corporate-info/user.corporate.info.module';
import { UserPersonalInfoModule } from './user-personal-info/user.personal.info.module';
import { UserAuthorisationModule } from './user-authorisation/user.authorisation.module';
import { UserAddressModule } from './user-address/user.address.module';
import { UserIdentityCardModule } from './user-identity-card/user.identity.card.module';
import { UserHierarchyModule } from './user-hierarchy/user.hierarchy.module';
import { UserFileModule } from './user-file/user.file.module';
import { UserFavouriteModule } from './user-favourite/userfavourite.module';

@Module({
  imports: [
  UserModule,
  UserAuthenticationModule,
  UserCorporateInfoModule,
  UserPersonalInfoModule,
  UserAuthorisationModule,
  UserDeviceModule,
  UserAddressModule,
  UserIdentityCardModule,
  UserHierarchyModule,
  UserFileModule,
  UserFavouriteModule
  ],
  providers: [FolkService],
  exports: [
    UserModule,
    UserAuthenticationModule,
    UserCorporateInfoModule,
    UserPersonalInfoModule,
    UserAuthorisationModule,
    UserDeviceModule,
    UserHierarchyModule,
    UserFileModule,
    UserFavouriteModule
  ],
})
export class FolkModule {}
