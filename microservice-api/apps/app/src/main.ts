import { AppModule } from './app.module';
import { CONFPUVAL_APP_NAME, LibraryAppService } from '@libs/library-app';

async function bootstrap() {
  await LibraryAppService.initExpressApp(AppModule, CONFPUVAL_APP_NAME);
}
bootstrap();
