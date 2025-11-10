import { BeforeApplicationShutdown, Module, OnApplicationBootstrap, OnApplicationShutdown, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfModule, ConfService, LibraryAppModule, LogService, TypeormDriverMysqlConfig } from '@libs/library-app';
import { DynamicAppModule } from '@libs/dynamic-app';
import { TypeormDriverModule } from '@libs/library-app';
import { GraphQLRequestModule } from '@golevelup/nestjs-graphql-request';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { SharedModule } from './shared/shared.module';
import { GqlApolloMonolithModule } from '@libs/library-app/gql-apollo/monolithic/gql.apollo.monolithic.module';

@Module({
  imports: [
    /*TypeormDriverModule.forRootAsync({
      imports: [ConfModule],
      inject: [ConfService],
      useFactory: (confService: ConfService) => {
        const options = {
          subscribers: [
            
          ],
          migrations: [],
        };
        return TypeormDriverMysqlConfig(options, confService);
      }
    }),*/
    GqlApolloMonolithModule,
    SharedModule,
    LibraryAppModule,
    DynamicAppModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule implements OnModuleInit, OnApplicationBootstrap, OnModuleDestroy, BeforeApplicationShutdown, OnApplicationShutdown {
  constructor(
    private readonly logService: LogService,
  ) {
  }
  // 1st Lifecycle Event
  onModuleInit() {
  }
  // 2nd Lifecycle Event
  onApplicationBootstrap() {  
  }
  // 3rd Lifecycle Event
  onModuleDestroy() { 
  }
  // 4th Lifecycle Event
  beforeApplicationShutdown(signal?: string){
    this.logService.warn(signal);
  }
  // 5th Lifecycle Event
  onApplicationShutdown(signal?: string) {
  }
}


/*
a [data-impdclcc]
a [data-impdclcc] div span = Sponsored 

a [jsname]

*/

/*
Find businesses, spending money on google my bussiness local service ranking
https://www.google.com/localservices/prolist/?src=1
Add service and location

https://www.google.com/search?q=Real+Estate+Agent%2C+Orangeburg%2C+SC

*/