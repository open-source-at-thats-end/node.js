import { Module } from '@nestjs/common';
import { WebPagesService } from './webpage.service';
import { WebPageMasterModule } from './master/master.module';
import { WebPageHierarchyModule } from './hierarchy/hierarchy.module';

@Module({
  imports: [
    WebPageMasterModule,
    WebPageHierarchyModule
  ],
  providers: [WebPagesService],
  exports: [
    WebPageMasterModule,
    WebPageHierarchyModule
  ],
})
export class WebPagesModule {}