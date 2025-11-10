import { Injectable } from "@nestjs/common";
import { ConfService } from "../conf/conf.service";
import { LogService } from "../log/log.service";
import { SchedulerRegistry } from "@nestjs/schedule";

@Injectable()
export class CronjobService {
    constructor(
        private schedulerRegistry: SchedulerRegistry,

        private readonly confService: ConfService,
        private readonly logService: LogService
    ){

    }
}