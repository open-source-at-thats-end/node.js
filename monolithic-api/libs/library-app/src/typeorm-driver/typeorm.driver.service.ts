import { Injectable } from '@nestjs/common';
import { ConfService } from '../conf/conf.service';
import { LogService } from '../log/log.service';

@Injectable()
export class TypeormDriverService {
    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService
    ){
        this.logService.setContext(TypeormDriverService.name);
    }
}
