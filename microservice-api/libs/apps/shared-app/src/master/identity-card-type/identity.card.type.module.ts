import { Module } from '@nestjs/common';
import { IdentityCardTypeService } from './identity.card.type.service';
import { IdentityCardTypeResolver } from './identity.card.type.resolver';
import { IdentityCardTypeEntity } from './entities/identity.card.type.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { IdentityCardTypeFactory } from './identity.card.type.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([IdentityCardTypeEntity]),
  ],
  providers: [
    IdentityCardTypeResolver, 
    IdentityCardTypeService, 
    IdentityCardTypeFactory
  ],
  exports : [
    IdentityCardTypeResolver, 
    IdentityCardTypeService
  ],
})
export class IdentityCardTypeModule {}