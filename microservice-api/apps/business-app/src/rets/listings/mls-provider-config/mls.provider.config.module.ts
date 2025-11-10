import { Module } from '@nestjs/common';
import { RetsMlsProviderConfigService } from './mls.provider.config.service';
import { RetsMlsProviderConfigResolver } from './mls.provider.config.resolver';
import { RetsMlsProviderConfigEntity } from './entities/mls.provider.config.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { RetsMlsProviderConfigFactory } from './mls.provider.config.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([RetsMlsProviderConfigEntity]),
  ],
  providers: [
    RetsMlsProviderConfigResolver, 
    RetsMlsProviderConfigService, 
    RetsMlsProviderConfigFactory
  ],
  exports : [
    RetsMlsProviderConfigResolver, 
    RetsMlsProviderConfigService
  ],
})
export class RetsMlsProviderConfigModule {}