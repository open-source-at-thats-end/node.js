import { Global, Module, OnModuleInit } from '@nestjs/common';
import { LibraryAppService } from './library.app.service';
import { ConfModule } from './conf/conf.module';
import { LogModule } from './log/log.module';
import { DataValidationModule } from './data-validation/data.validation.module';
import { LocalStorageModule } from './local-storage/local.storage.module';
import { ConfService } from './conf/conf.service';
import { LogService } from './log/log.service';
import { ConfStaticService } from './conf/conf.static.service';
import { LogStaticService } from './log/log.static.service';
import { CronjobModule } from './cronjob/cronjob.module';
import { EmailModule } from './email/email.module';

@Global()
@Module({
  imports: [
    ConfModule, 
    LogModule,
    DataValidationModule,
    LocalStorageModule,
    CronjobModule,
    EmailModule,
  ],
  providers: [LibraryAppService],
  exports: [
    LibraryAppService,
    
    ConfModule,
    LogModule,
    DataValidationModule,
    LocalStorageModule,
    CronjobModule,
    EmailModule,
  ],
})
export class LibraryAppModule implements OnModuleInit{
  constructor(
    private readonly confService: ConfService,
    private readonly logService: LogService
  ) {}

  onModuleInit() {
    // these 2 are required at any place, so to resolve some limitation setting up easy assess at any place in app context
    ConfStaticService.initialize(this.confService);
    LogStaticService.initialize(this.logService);
  }
}
