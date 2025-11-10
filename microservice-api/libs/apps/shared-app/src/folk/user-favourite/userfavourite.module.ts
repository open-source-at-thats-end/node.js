import { Module } from '@nestjs/common';

import { UserFavService } from './userfavourite.service';
import { UserFavModule } from './user-fav/user.fav.module';
import { UserFavCategoryModule } from './user-fav-category/fav.category.module';

@Module({
  imports: [
    UserFavModule,
    UserFavCategoryModule
  ],
  providers: [UserFavService],
  exports: [
    UserFavModule,
    UserFavCategoryModule
  ],
})
export class UserFavouriteModule {}