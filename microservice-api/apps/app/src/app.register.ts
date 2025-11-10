import { ConfService, LogService } from "@libs/library-app";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AppRegister {
    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService
    ){
        this.registerEnums();
    }
    registerEnums(){
    }
}