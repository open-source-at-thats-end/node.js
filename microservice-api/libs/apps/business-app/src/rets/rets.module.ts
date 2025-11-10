import { Module } from '@nestjs/common';
import { ListingsModule } from './listings/listings.module';
import { ProcessedModule } from './processed/processed.module';

@Module({
    imports: [
        ListingsModule,
        ProcessedModule
    ],
    providers: [],
    exports: [
        ListingsModule,
        ProcessedModule
    ],
  })
  export class RetsModule {}