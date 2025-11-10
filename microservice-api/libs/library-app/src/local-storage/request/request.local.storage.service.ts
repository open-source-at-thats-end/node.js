import { ClsService } from "nestjs-cls";
import { ConfService } from "../../conf/conf.service";
import { LogService } from "../../log/log.service";
import { Injectable } from "@nestjs/common";


@Injectable()
export class RequestLocalStorageService {

    constructor(
        private readonly clsService: ClsService,
        private readonly confService: ConfService,
        private readonly logService: LogService,
    ){
        this.logService.setContext(RequestLocalStorageService.name);
    }

    public async set(key: string, value: any): Promise<void> {
        this.clsService.set(key, value);
    }

    public async get(key: string): Promise<any> {
        return await this.clsService.get(key);
    }
}