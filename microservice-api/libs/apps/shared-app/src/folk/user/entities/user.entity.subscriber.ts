import { DataSource, EntitySubscriberInterface, EventSubscriber, InsertEvent, LoadEvent, RecoverEvent, RemoveEvent, SoftRemoveEvent, TransactionCommitEvent, TransactionRollbackEvent, TransactionStartEvent, UpdateEvent } from "typeorm";
import { Inject, Injectable } from "@nestjs/common";
import { ConfService, ConfStaticService, LibraryAppService, LogService } from "@libs/library-app";
import { addMinutes } from "date-fns";
import Module from "module";
import { ModuleRef } from "@nestjs/core";
import { UserEntity } from "./user.entity";
import { UserWs } from "../user.ws";

@Injectable()
@EventSubscriber()
export class UserEntitySubscriber implements EntitySubscriberInterface<UserEntity>{

    constructor(
        private readonly dataSource: DataSource,
        private readonly logService: LogService,
        private readonly moduleRef: ModuleRef,
        private readonly userWs: UserWs
    ){
         // Push this subscriber into TypeORM so it gets called
        this.dataSource.subscribers.push(this);
    }
    listenTo() {
        return UserEntity;
    }
    async onApplicationBootstrap() {
    }
    async beforeInsert(event: InsertEvent<UserEntity>): Promise<any|void> {
    }
    async beforeUpdate?(event: UpdateEvent<UserEntity>): Promise<any|void> {
    }

    afterInsert(event: InsertEvent<UserEntity>): Promise<any> | void{
        this.userWs.afterInsert(event);
    }
    /*afterLoad?(entity: UserAuthenticationEntity, event?: LoadEvent<UserAuthenticationEntity>): Promise<any> | void{
        this.confService = await this.moduleRef.get(ConfService, { strict: false });
    }
    
    beforeQuery?(event: BeforeQueryEvent<UserAuthenticationEntity>): Promise<any> | void{

    }
    
    afterQuery?(event: AfterQueryEvent<UserAuthenticationEntity>): Promise<any> | void{

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