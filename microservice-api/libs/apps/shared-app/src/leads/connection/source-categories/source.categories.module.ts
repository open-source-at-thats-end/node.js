import { Module } from '@nestjs/common';
import { ConnectionSourceCategoriesService } from './source.categories.service';
import { ConnectionSourceCategoriesResolver } from './source.categories.resolver';
import { ConnectionSourceCategoriesEntity } from './entities/source.categories.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { ConnectionSourceCategoriesFactory } from './source.categories.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([ConnectionSourceCategoriesEntity]),
  ],
  providers: [
    ConnectionSourceCategoriesResolver, 
    ConnectionSourceCategoriesService, 
    ConnectionSourceCategoriesFactory
  ],
  exports : [
    ConnectionSourceCategoriesResolver, 
    ConnectionSourceCategoriesService
  ],
})
export class ConnectionSourceCategoriesModule {}