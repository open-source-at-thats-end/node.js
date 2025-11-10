import { ConfService, LogService, registerGraphqlYesNoEnum } from "@libs/library-app";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BusinessAppRegister {
    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService
    ){
        this.registerEnums();
    }
    registerEnums(){
    registerGraphqlYesNoEnum();
        // import from ./libs/library-app/src/api-endpoint-auth/api.endpoint.auth.enum.ts
        //registerGraphqlEnumApiUserRole();
    }
}