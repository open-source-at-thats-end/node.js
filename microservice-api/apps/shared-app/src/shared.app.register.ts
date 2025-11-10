import { ConfService, LogService, registerGraphqlYesNoEnum } from "@libs/library-app";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SharedAppRegister {
    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService
    ){
        this.registerEnums();
    }
    registerEnums(){
        registerGraphqlYesNoEnum();
    }
}