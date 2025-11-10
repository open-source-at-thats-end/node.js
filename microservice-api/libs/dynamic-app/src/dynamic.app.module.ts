import { Global, Module } from '@nestjs/common';
import { DynamicAppService } from './dynamic.app.service';
import { LibraryAppModule } from '@libs/library-app';
import { SelfGraphqlMicroserviceModule } from './third-party-apis/self-graphql-microservice/self.graphql.microservice.module';

@Global()
@Module({
  imports: [
    LibraryAppModule,

    SelfGraphqlMicroserviceModule,
  ],
  providers: [DynamicAppService],
  exports: [
    DynamicAppService,

    SelfGraphqlMicroserviceModule,
  ],
})
export class DynamicAppModule {}
