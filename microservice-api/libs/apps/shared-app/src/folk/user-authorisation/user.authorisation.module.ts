import { Module } from '@nestjs/common';
import { UserAuthorisationService } from './user.authorisation.service';
import { UserAuthorisationEntity } from './entities/user.authorisation.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { UserAuthorisationFactory } from './user.authorisation.factory';
import { UserAuthorisationResolver } from './user.authorisation.resolver';

@Module({
  imports: [
    TypeormDriverModule.forFeature([UserAuthorisationEntity]),
  ],
  providers: [
    UserAuthorisationService,
    UserAuthorisationFactory,
    UserAuthorisationResolver
  ],
  exports : [
    UserAuthorisationService,
    UserAuthorisationResolver
  ],
})
export class UserAuthorisationModule {}