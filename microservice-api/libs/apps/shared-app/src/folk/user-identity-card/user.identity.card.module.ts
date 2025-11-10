import { Module } from '@nestjs/common';
import { UserIdentityCardService } from './user.identity.card.service';
import { UserIdentityCardResolver } from './user.identity.card.resolver';
import { UserIdentityCardEntity } from './entities/user.identity.card.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { UserIdentityCardFactory } from './user.identity.card.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([UserIdentityCardEntity]),
  ],
  providers: [
    UserIdentityCardResolver, 
    UserIdentityCardService, 
    UserIdentityCardFactory
  ],
  exports : [
    UserIdentityCardResolver, 
    UserIdentityCardService
  ],
})
export class UserIdentityCardModule {}