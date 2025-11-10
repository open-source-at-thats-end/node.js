import { Module } from '@nestjs/common';
import { UserSavedSearchService } from './user.saved.search.service';
import { UserSavedSearchResolver } from './user.saved.search.resolver';
import { UserSavedSearchEntity } from './entities/user.saved.search.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { UserSavedSearchFactory } from './user.saved.search.factory';
import { UserResolver, AlertDurationResolver } from './shared.app.resolver';


@Module({
  imports: [
    TypeormDriverModule.forFeature([UserSavedSearchEntity]),
  ],
  providers: [
    UserSavedSearchResolver, 
    UserSavedSearchService, 
    UserSavedSearchFactory,

    UserResolver,
    AlertDurationResolver

  ],
  exports : [
    UserSavedSearchResolver, 
    UserSavedSearchService
  ],
})
export class UserSavedSearchModule {}