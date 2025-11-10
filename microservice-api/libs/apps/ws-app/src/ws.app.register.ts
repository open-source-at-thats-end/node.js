import { ConfService, LogService, registerGraphqlYesNoEnum } from "@libs/library-app";
import { registerGraphqlWebsoketRoomEnum } from "@libs/library-app/pubsub/adapters/adapters.enum";
import { Injectable } from "@nestjs/common";

@Injectable()
export class WsAppRegister {
    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService
    ){
        this.registerEnums();
    }
    registerEnums(){
        registerGraphqlWebsoketRoomEnum();
    }
}