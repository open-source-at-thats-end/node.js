import { Module } from '@nestjs/common';
import { RetsMlsProviderService } from './mls.provider.service';
import { RetsMlsProviderResolver } from './mls.provider.resolver';
import { RetsMlsProviderEntity } from './entities/mls.provider.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { RetsMlsProviderFactory } from './mls.provider.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([RetsMlsProviderEntity]),
  ],
  providers: [
    RetsMlsProviderResolver, 
    RetsMlsProviderService, 
    RetsMlsProviderFactory,
  ],
  exports : [
    RetsMlsProviderResolver, 
    RetsMlsProviderService
  ],
})
export class RetsMlsProviderModule {}