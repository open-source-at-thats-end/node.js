import { Module } from '@nestjs/common';
import { WebPageHierarchyService } from './hierarchy.service';
import { WebPageHierarchyResolver } from './hierarchy.resolver';
import { WebPageHierarchyEntity } from './entities/page.hierarchy.entity';
import { TypeormDriverModule } from '@libs/library-app';
import { WebPageHierarchyFactory } from './hierarchy.factory';

@Module({
  imports: [
    TypeormDriverModule.forFeature([WebPageHierarchyEntity]),
  ],
  providers: [
    WebPageHierarchyResolver, 
    WebPageHierarchyService, 
    WebPageHierarchyFactory
  ],
  exports : [
    WebPageHierarchyResolver, 
    WebPageHierarchyService
  ],
})
export class WebPageHierarchyModule {}