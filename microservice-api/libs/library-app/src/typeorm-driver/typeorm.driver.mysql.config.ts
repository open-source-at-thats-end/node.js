import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { ConfService } from '../conf/conf.service';

type TypeOrmMysqlOptions = TypeOrmModuleOptions & MysqlConnectionOptions;

export function TypeormDriverMysqlConfig(
    options: Omit<TypeOrmMysqlOptions, 'type'>, 
    confService: ConfService
): TypeOrmMysqlOptions{

    const defaultOptions: TypeOrmMysqlOptions = {
        type: confService.mysqlDatabaseType as any,

        host: confService.mysqlHost,
        port: +`${confService.mysqlPort}`,
        username: confService.mysqlUser,
        password: confService.mysqlPass,
        database: confService.mysqlDBname,

        bigNumberStrings: true,
        dateStrings: true,
        maxQueryExecutionTime: 1000,
        multipleStatements: true,

        synchronize: false, // create schema on every startup of app ,so this is very serious option
        autoLoadEntities: true,
        entities: [],
        subscribers: [],
        
        migrations: [],
        migrationsTableName: 'db_migrations',
        migrationsRun: false,
        entityPrefix: confService.entityPrefix,
        
        logging: confService.mysqlLogging,
        logger: 'advanced-console', // advanced-console | simple-console | file | debug
        debug: false,
        trace: false,
        
        cache: {
            duration: 30000, // 30 seconds
            ignoreErrors: true,
            /*
            type: 'redis',
            tableName: 'query-result-cache',
            alwaysEnabled: true,
            duration: 5000, // in milliseconds
            options: {
                socket: {
                    host: "localhost",
                    port: 6379
                }
            }
            */
        }
    };

    const config = Object.assign(defaultOptions, options);
    return config;
}