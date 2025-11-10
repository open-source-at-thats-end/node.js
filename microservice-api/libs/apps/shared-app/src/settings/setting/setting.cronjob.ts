import { ApplicationLocalStorageService, ConfService, LogService } from "@libs/library-app";
import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { format } from 'date-fns';
import { SettingService } from "./setting.service";

@Injectable()
export class SettingCronjob {
constructor(
    private readonly settingService: SettingService,  

    private readonly confService: ConfService,
    private readonly logService: LogService,
){
    this.logService.setContext(SettingCronjob.name);
}

@Cron(CronExpression.EVERY_6_HOURS, { name: 'SaveSettingInLocalStorage' })
public async SaveSettingInLocalStorage(): Promise<void> {
    const cronKey = `CRONJOB - SaveSettingInLocalStorage`;

    this.logService.trace(`${cronKey}: start at ${format(new Date(), this.confService.formatDateTime)}`);
    
    try{
        await this.settingService.setSettingJsonInLocalStorage();
        this.logService.trace(`${cronKey}: App local storage updated successfully.`);
    } catch (err: any) {
        this.logService.trace(err, `${cronKey}: ERROR: ${err.message}`);
    }
    this.logService.trace(`${cronKey}: end at ${format(new Date(), this.confService.formatDateTime)}`);
}
}