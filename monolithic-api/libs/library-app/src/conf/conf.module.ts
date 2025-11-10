import { Module } from '@nestjs/common';
import { ConfService } from './conf.service';
import path from 'path';
import { confValidationSchema } from './conf.validation';
import { confDefault } from './conf.default';
import { ConfigModule } from '@nestjs/config';
import { ConfStaticService } from './conf.static.service';

//@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        path.join(process.cwd(), `/env`, `${process.env.NODE_ENV}.env`), // keep at FIRST positino so we can overwrite default using environment specific
        path.join(process.cwd(), `/env`, '.env'), // keep the default at LAST position, so we can overwrite using environment specific .env
      ],
      expandVariables: true,
      cache: true,
      load: [confDefault],
      validationSchema: confValidationSchema,
      //isGlobal: true, // Makes the ConfigModule globally available
    }),
  ],
  providers: [ConfService, ConfStaticService],
  exports: [ConfService, ConfStaticService],
})
export class ConfModule {}
