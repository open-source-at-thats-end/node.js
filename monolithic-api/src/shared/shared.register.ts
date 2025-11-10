import { ConfService, LogService } from "@libs/library-app";
import { Injectable } from "@nestjs/common";

@Injectable()
export class SharedRegister {
    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService
    ){
        this.registerEnums();
    }
    registerEnums(){
    
    }
}