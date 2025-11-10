import { Module } from '@nestjs/common';
import { AuthorisationService } from './authorisation.service';
import { AuthorisationEntity } from './entities/authorisation.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { AuthorisationFactory } from './authorisation.factory';
import { AuthorisationResolver } from './authorisation.resolver';

@Module({
  imports: [
    TypeormDriverModule.forFeature([AuthorisationEntity]),
  ],
  providers: [
    AuthorisationService,
    AuthorisationFactory,
    AuthorisationResolver
  ],
  exports : [
    AuthorisationService,
    AuthorisationResolver
  ],
})
export class AuthorisationModule {}