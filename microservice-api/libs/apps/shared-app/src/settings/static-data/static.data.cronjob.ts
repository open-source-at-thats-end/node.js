import { ApplicationLocalStorageService, ConfService, LogService } from "@libs/library-app";
import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { format } from 'date-fns';
import { StaticDataService } from "./static.data.service";

@Injectable()
export class StaticDataCronjob {
    constructor(
        private readonly staticDataService: StaticDataService,  

        private readonly confService: ConfService,
        private readonly logService: LogService,
    ){
        this.logService.setContext(StaticDataCronjob.name);
    }

@Cron(CronExpression.EVERY_4_HOURS, { name: 'SaveStaticDataInLocalStorage' })
public async SaveStaticDataInLocalStorage(): Promise<void> {
    const cronKey = `CRONJOB - SaveStaticDataInLocalStorage`;

    this.logService.trace(`${cronKey}: start at ${format(new Date(), this.confService.formatDateTime)}`);
    
    try{
        await this.staticDataService.setStaticDataJsonInLocalStorage();
        this.logService.trace(`${cronKey}: App local storage updated successfully.`);
    } catch (err: any) {
        this.logService.trace(err, `${cronKey}: ERROR: ${err.message}`);
    }
    this.logService.trace(`${cronKey}: end at ${format(new Date(), this.confService.formatDateTime)}`);
}
}