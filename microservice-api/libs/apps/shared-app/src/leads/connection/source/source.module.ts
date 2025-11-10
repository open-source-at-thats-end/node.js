import { Module } from '@nestjs/common';
import { ConnectionSourceService } from './source.service';
import { ConnectionSourceResolver } from './source.resolver';
import { ConnectionSourceEntity } from './entities/source.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { ConnectionSourceFactory } from './source.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([ConnectionSourceEntity]),
  ],
  providers: [
    ConnectionSourceResolver, 
    ConnectionSourceService, 
    ConnectionSourceFactory
  ],
  exports : [
    ConnectionSourceResolver, 
    ConnectionSourceService
  ],
})
export class ConnectionSourceModule {}