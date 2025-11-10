import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfService } from "../conf/conf.service";
import { BetterSqlite3ConnectionOptions } from "typeorm/driver/better-sqlite3/BetterSqlite3ConnectionOptions";
import path from "path";


type TypeOrmBetterSqlite3Options = TypeOrmModuleOptions & BetterSqlite3ConnectionOptions;

export function TypeormDriverBetterSqlite3(
    options: Omit<TypeOrmBetterSqlite3Options, 'type'>, 
    confService: ConfService
): TypeOrmBetterSqlite3Options {

    const defaultOptions: TypeOrmBetterSqlite3Options = {
        type: 'better-sqlite3',
        driver:'better-sqlite3',
        database: path.join(confService.cwd, confService.betterSqlite3DataSource as string),
    };

    const config = Object.assign(defaultOptions, options);
    return config;
}
