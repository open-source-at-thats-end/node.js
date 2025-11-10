import { Module } from '@nestjs/common';
import { UserFavouritePropertyService } from './user.favourite.property.service';
import { UserFavouritePropertyResolver } from './user.favourite.property.resolver';
import { UserFavouritePropertyEntity } from './entities/user.favourite.property.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { UserFavouritePropertyFactory } from './user.favourite.property.factory';
import { UserResolver } from './shared.app.resolver';


@Module({
  imports: [
    TypeormDriverModule.forFeature([UserFavouritePropertyEntity]),
  ],
  providers: [
    UserFavouritePropertyResolver, 
    UserFavouritePropertyService, 
    UserFavouritePropertyFactory,
    UserResolver,

  ],
  exports : [
    UserFavouritePropertyResolver, 
    UserFavouritePropertyService
  ],
})
export class UserFavouritePropertyModule {}