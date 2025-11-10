import { Module } from '@nestjs/common';
import { UserFavCategoryService } from './fav.category.service';
import { UserFavCategoryResolver } from './fav.category.resolver';
import { UserFavCategoryEntity } from './entities/fav.category.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { UserFavCategoryFactory } from './fav.category.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([UserFavCategoryEntity]),
  ],
  providers: [
    UserFavCategoryResolver, 
    UserFavCategoryService, 
    UserFavCategoryFactory
  ],
  exports : [
    UserFavCategoryResolver, 
    UserFavCategoryService
  ],
})
export class UserFavCategoryModule {}