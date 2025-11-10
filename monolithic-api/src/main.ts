import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfService, ConfStaticService, LibraryAppService, LogService, LogStaticService } from '@libs/library-app';


async function bootstrap() {
  await LibraryAppService.httpBootstrap(AppModule);
  /*const ctx = await LibraryAppService.workerBootstrap(AppModule);

  // perform crawling task like human
  const conf = ctx.get(ConfService);
  const log = ctx.get(LogService);*/
  
}
bootstrap();
