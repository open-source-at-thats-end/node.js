import { EntitySubscriberInterface, EventSubscriber, InsertEvent, LoadEvent, RecoverEvent, RemoveEvent, SoftRemoveEvent, TransactionCommitEvent, TransactionRollbackEvent, TransactionStartEvent, UpdateEvent } from "typeorm";
import { Injectable } from "@nestjs/common";
import { ApiEndpointAuthEntity } from "./api.endpoint.auth.entity";
import { LogService, ConfService, LibraryAppService } from "@libs/library-app";

@Injectable()
@EventSubscriber()
export class ApiEndpointAuthEntitySubscriber implements EntitySubscriberInterface<ApiEndpointAuthEntity>{

    constructor(
        private readonly confService : ConfService,
        private readonly logService: LogService
    ){
    }
    listenTo() {
        return ApiEndpointAuthEntity;
    }
    async beforeInsert(event: InsertEvent<ApiEndpointAuthEntity>): Promise<any|void> {
        if(event?.entity){
            // code removed for security reason
        } else {
            throw new Error('Issue with required field password');
        }
    }
    async beforeUpdate?(event: UpdateEvent<ApiEndpointAuthEntity>): Promise<any|void> {
        if(event?.entity){
            // code removed for security reason
        }
    }

    /*
    afterLoad?(entity: ApiEndpointAuthEntity, event?: LoadEvent<ApiEndpointAuthEntity>): Promise<any> | void{

    }
    
    beforeQuery?(event: BeforeQueryEvent<ApiEndpointAuthEntity>): Promise<any> | void{

    }
    
    afterQuery?(event: AfterQueryEvent<ApiEndpointAuthEntity>): Promise<any> | void{

    }
    
    afterInsert?(event: InsertEvent<ApiEndpointAuthEntity>): Promise<any> | void{

    }
    
    afterUpdate?(event: UpdateEvent<ApiEndpointAuthEntity>): Promise<any> | void{

    }
    
    beforeRemove?(event: RemoveEvent<ApiEndpointAuthEntity>): Promise<any> | void{

    }
    
    beforeSoftRemove?(event: SoftRemoveEvent<ApiEndpointAuthEntity>): Promise<any> | void{

    }
    
    beforeRecover?(event: RecoverEvent<ApiEndpointAuthEntity>): Promise<any> | void{

    }
    
    afterRemove?(event: RemoveEvent<ApiEndpointAuthEntity>): Promise<any> | void{

    }
    
    afterSoftRemove?(event: SoftRemoveEvent<ApiEndpointAuthEntity>): Promise<any> | void{

    }
    
    afterRecover?(event: RecoverEvent<ApiEndpointAuthEntity>): Promise<any> | void{

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