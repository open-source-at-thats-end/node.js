import { EntitySubscriberInterface, EventSubscriber, InsertEvent, LoadEvent, RecoverEvent, RemoveEvent, SoftRemoveEvent, TransactionCommitEvent, TransactionRollbackEvent, TransactionStartEvent, UpdateEvent } from "typeorm";
import { Inject, Injectable } from "@nestjs/common";
import { UserAuthenticationEntity } from "./user.auth.entity";
import { ConfService, ConfStaticService, LibraryAppService, LogService } from "@libs/library-app";
import { UserAuthenticationService } from "../user.auth.service";
import { addMinutes } from "date-fns";
import Module from "module";
import { ModuleRef } from "@nestjs/core";

@Injectable()
@EventSubscriber()
export class UserAuthenticationEntitySubscriber implements EntitySubscriberInterface<UserAuthenticationEntity>{

    private static confService : ConfService
    constructor(
        private readonly service: UserAuthenticationService,
        private readonly logService: LogService,
        private readonly moduleRef: ModuleRef
    ){
    }
    listenTo() {
        return UserAuthenticationEntity;
    }
    async onApplicationBootstrap() {
        UserAuthenticationEntitySubscriber.confService = await this.moduleRef.get(ConfService, { strict: false });
    }
    async beforeInsert(event: InsertEvent<UserAuthenticationEntity>): Promise<any|void> {
        if(event?.entity?.identify && event.entity.identify !== null){
            event.entity.identify = await LibraryAppService.getHash(event.entity.identify);
        }

        // for security purpose make sure otp never get saved in plain text and also has expiry date
        if(event?.entity?.otp && event.entity.otp !== null) {
            const decotp = await LibraryAppService.base64Dec(event.entity.otp);
            if (!decotp.startsWith('$argon2id')) {
                event.entity.otp = await LibraryAppService.getHash(event.entity.otp);
            }

            if(!event.entity.otp_expiry) {
                console.log(ConfStaticService.conf.signinOtpExpireMinutes)
                event.entity.otp_expiry = addMinutes(new Date(), ConfStaticService.conf.signinOtpExpireMinutes); // using static service just as a referenc epurpose
            }
        }
    }
    async beforeUpdate?(event: UpdateEvent<UserAuthenticationEntity>): Promise<any|void> {
        if(event?.entity?.identify && event.entity.identify !== null){
            event.entity.identify = await LibraryAppService.getHash(event.entity.identify);
        }

        // for security purpose make sure otp never get saved in plain text and also has expiry date
        if(event?.entity?.otp && event.entity.otp !== null){
            const decotp = await LibraryAppService.base64Dec(event.entity.otp);
            if (!decotp.startsWith('$argon2id')) {
                event.entity.otp = await LibraryAppService.getHash(event.entity.otp);
            }
            if(!event.entity.otp_expiry) {
                event.entity.otp_expiry = addMinutes(new Date(), UserAuthenticationEntitySubscriber.confService.signinOtpExpireMinutes); // we can also use with static variable defined in confService using moduleRef 
            }
        }
    }
    /*afterLoad?(entity: UserAuthenticationEntity, event?: LoadEvent<UserAuthenticationEntity>): Promise<any> | void{
        this.confService = await this.moduleRef.get(ConfService, { strict: false });
    }
    
    beforeQuery?(event: BeforeQueryEvent<UserAuthenticationEntity>): Promise<any> | void{

    }
    
    afterQuery?(event: AfterQueryEvent<UserAuthenticationEntity>): Promise<any> | void{

    }
    
    afterInsert?(event: InsertEvent<UserAuthenticationEntity>): Promise<any> | void{

    }
    
    afterUpdate?(event: UpdateEvent<UserAuthenticationEntity>): Promise<any> | void{

    }
    
    beforeRemove?(event: RemoveEvent<UserAuthenticationEntity>): Promise<any> | void{

    }
    
    beforeSoftRemove?(event: SoftRemoveEvent<UserAuthenticationEntity>): Promise<any> | void{

    }
    
    beforeRecover?(event: RecoverEvent<UserAuthenticationEntity>): Promise<any> | void{

    }
    
    afterRemove?(event: RemoveEvent<UserAuthenticationEntity>): Promise<any> | void{

    }
    
    afterSoftRemove?(event: SoftRemoveEvent<UserAuthenticationEntity>): Promise<any> | void{

    }
    
    afterRecover?(event: RecoverEvent<UserAuthenticationEntity>): Promise<any> | void{

    }
    
    beforeTransactionStart?(event: TransactionStartEvent): Promise<any> | void{

    }
    
    afterTransactionStart?(event: TransactionStartEvent): Promise<any> | void{

    }
    
    beforeTransactionCommit?(event: TransactionCommitEvent): Promise<any> | void{
        
    }
    
    afterTransactionCommit?(event: TransactionCommitEvent): Promise<any> | void{

    }
    
    beforeTransactionRollback?(event: TransactionRollbackEvent): Promise<any> | void{

    }
    
    afterTransactionRollback?(event: TransactionRollbackEvent): Promise<any> | void{

    }
    */
}