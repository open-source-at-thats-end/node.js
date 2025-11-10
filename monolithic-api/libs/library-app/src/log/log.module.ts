import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { ConfService } from '../conf/conf.service';
import { format } from 'date-fns';
import { LoggerModule } from 'nestjs-pino';
import pino from 'pino';
import path from 'path';
import { LogStaticService } from './log.static.service';
import { ConfModule } from '../conf/conf.module';


@Module({
  imports: [
    ConfModule,
    LoggerModule.forRootAsync({
      imports: [ConfModule],
      inject: [ConfService],
      useFactory: (confService: ConfService) => ({
        pinoHttp: {
          name: 'LibLogger',
          timestamp: () => {
            return `,"time":"${format(confService.today, `${confService.formatDateTime} XXX`)}"`;
          },
          
          autoLogging: confService.isTestEnv ? true : true,
          customLevels: {
            debug: 100,
            trace: 90,
            emerg: 80,
            crit: 70,
            fatal: 60,
            error: 50,
            warn: 40,
            notice: 30,
            alert: 20,
            info: 10,
          },
          useOnlyCustomLevels: true,
          level: confService.isProductionEnv ? 'error' : 'info',
          redact: ['req.headers.authorization', 'req.headers.statefulauthorization','req.headers.cookie', 'identity'], // remove sensitive data using for privacy reason
          // TODO: need to work here for error label. At this moment not working
          /*formatters: {
            level: (label) => {
              return { level: label.toUpperCase() };
            },
          },*/
          
          stream: pino.destination({
            dest: path.join(`${confService.logDirPath}`, `pino.log`), // omit for stdout
            minLength: 4096, // Buffer before writing
            sync: false, // Asynchronous logging
            mkdir: true,
          }),
          
          transport: {
            targets: [
              {
                target: 'pino-pretty',
                level: 'info',
                options: { 
                  colorize: true,
                  levelFirst: true,
                  ignore: 'hostname'
                },
              },
              {
                target: 'pino/file',
                level: 'trace',
                options: { 
                  destination: path.join(`${confService.logDirPath}`, `trace.log`), 
                  sync: false,
                  mkdir: true,
                },
              },
              {
                target: 'pino/file',
                level: 'error',
                options: {
                  destination: path.join(`${confService.logDirPath}`, `error.log`) ,
                  sync: false,
                  mkdir: true,
                },
              },
              {
                target: 'pino/file',
                level: 'info',
                options: { 
                  destination: path.join(`${confService.logDirPath}`, `all.log`), 
                  sync: false,
                  mkdir: true,
                },
              },
            ],
          },
        },
      }),
    }),
  ],
  controllers: [],
  providers: [LogService, LogStaticService],
  exports: [LogService, LogStaticService],
})
export class LogModule {}
