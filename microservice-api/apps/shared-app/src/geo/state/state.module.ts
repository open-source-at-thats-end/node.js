import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateResolver } from './state.resolver';
import { StateFactory } from './state.factory';
import { StateEntity } from './entities/state.entity';
import { TypeormDriverModule } from '@libs/library-app';

@Module({
  imports: [
    TypeormDriverModule.forFeature([StateEntity]),
  ],
  providers: [
    StateResolver, 
    StateService, 
    StateFactory
  ],
  exports : [
    StateResolver, 
    StateService
  ],
})
export class StateModule {}
