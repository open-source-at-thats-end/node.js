import { Module } from '@nestjs/common';
import { UserFavService } from './user.fav.service';
import { UserFavResolver } from './user.fav.resolver';
import { UserFavEntity } from './entities/user.fav.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { UserFavFactory } from './user.fav.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([UserFavEntity]),
  ],
  providers: [
    UserFavResolver, 
    UserFavService, 
    UserFavFactory
  ],
  exports : [
    UserFavResolver, 
    UserFavService
  ],
})
export class UserFavModule {}