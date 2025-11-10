import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StaticDataEntity } from './entities/static.data.entity';
import { DataSource, IsNull, Not, Repository } from 'typeorm';
import { ApplicationLocalStorageService, ConfService, DataValidationPipe, EtcCRUDTypeDefinition, ImageProcessingService, LibraryAppService, LogService } from '@libs/library-app';
import { StaticDataType } from './static.data.type';
import { random } from 'lodash';
import { StaticDataFactory } from './static.data.factory';
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { StaticDataCreateInputDto, StaticDataCreateOutputDto, StaticDataDeleteInputDto, StaticDataDeleteOutputDto, StaticDataRecoverInputDto, StaticDataRecoverOutputDto, StaticDataRemoveInputDto, StaticDataRemoveOutputDto, StaticDataRestoreInputDto, StaticDataRestoreOutputDto, StaticDataSoftDeleteInputDto, StaticDataSoftDeleteOutputDto, StaticDataSoftRemoveInputDto, StaticDataSoftRemoveOutputDto, StaticDataUpdateInputDto, StaticDataUpdateOutputDto, StaticDataUpsertInputDto, StaticDataUpsertOutputDto } from './dto/static.data.dto';
import { GraphQLResolveInfo } from 'graphql';
import { StaticDataValueEntity } from './value/entities/value.entity';

@Injectable()
export class StaticDataService extends StaticDataFactory {
  constructor(
        protected readonly dataSource: DataSource,

        @InjectRepository(StaticDataEntity) 
        protected readonly repository: Repository<StaticDataEntity>,

        protected readonly appLocalStorageService: ApplicationLocalStorageService,

        protected readonly confService: ConfService,
        protected readonly logService: LogService,
        protected readonly validationPipe: DataValidationPipe,
        protected readonly libraryAppService: LibraryAppService,
        protected readonly selfGraphqlMicroserviceService: SelfGraphqlMicroserviceService,
      ){
        super(
          dataSource,
          repository,
          confService,
          logService,
          validationPipe,
          libraryAppService,
          selfGraphqlMicroserviceService,
      );
        this.logService.setContext(StaticDataService.name);
  }
  public async staticDataJson(): Promise<StaticDataType> {
    const resp: any = {} as StaticDataType;

    /**
     * process all static data which is not table based
     */
    const nonTablerecords = await this.repository.find({
        where: {
          table: IsNull(),
        },
        relations: { 
          fr_static_data_values: true
        },
    });

    nonTablerecords.forEach(entity => {
      const keyName = entity.name as string; // use the entity's name as the top-level key
      resp[keyName] = {};

      // map each StaticDataValueEntity to a key (e.g., key1, key2, etc.)
      entity.fr_static_data_values?.forEach((valueEntity, index) => {
        const valueKey = valueEntity.key as string;
        
        resp[keyName][valueKey] = valueEntity; // assign the entity to the generated key
      });
    });

    /**
     * process all static data which are belongs to seperate table
     */
    const tableRecords = await this.repository.find({
      where: {
        table: Not(IsNull()),
      },
    });

    if(tableRecords && Array.isArray(tableRecords) && tableRecords.length > 0){
      for(let i = 0; i < tableRecords.length; i++) {
        const tEntity = tableRecords[i];

        const sd_id = tEntity.id;
        const sd_name = tEntity.name as string; // use the entity's name as the top-level key
        const table = tEntity.table as string;
        const keyField = tEntity.table_field_for_key as string;
        const valueField = tEntity.table_field_for_value as string;
        const deletedField = tEntity.table_field_for_deleted as string;

        type SdtEntity = {
          sdt_sd_id: number;
          sdt_sd_name: string;
          sdt_key: any;  
          sdt_value: any;
        };

        const sql = `
        SELECT 
            ${sd_id} AS sdt_sd_id, 
            '${sd_name}' COLLATE utf8mb4_general_ci AS sdt_sd_name, 
            ${keyField} AS sdt_key, 
            ${valueField} COLLATE utf8mb4_general_ci AS sdt_value
        FROM ${table} WHERE ${deletedField} IS NULL
        `;

        const sdtEntity = await this.dataSource.query<SdtEntity>(sql);

        // check if records are found or not and process accordingly
        if(sdtEntity && Array.isArray(sdtEntity) && sdtEntity.length > 0){
          // set new rcord in the response
          resp[sd_name] = {};

          // map each record to a key (e.g., key1, key2, etc.)
          for(let j = 0; j < sdtEntity.length; j++) {
            const sdtRecord = sdtEntity[j];
            const sdt_key = sdtRecord.sdt_key;

            const tmp: StaticDataValueEntity = {
              /* id: undefined, // in case of table based config we do not need to set id and this will be used to identify whether statuc data is static_data based or seperate table based */
              sd_id: sdtRecord.sdt_sd_id,
              sd_name: sdtRecord.sdt_sd_name,
              key: sdtRecord.sdt_key,
              value: sdtRecord.sdt_value,
            };

            resp[sd_name][sdt_key] = tmp; // assign the entity to the generated key
          }
        }
      }
    }
    return resp;
  }
  
  public async setStaticDataJsonInLocalStorage(): Promise<StaticDataType> {
    const resp: StaticDataType = await this.staticDataJson();
    
    await this.appLocalStorageService.delete(StaticDataService.name);

    await this.appLocalStorageService.set(StaticDataService.name, resp);

    return resp;
  }

  public async staticDataJsonFromLocalStorage(): Promise<StaticDataType> {
    const resp: StaticDataType = await this.appLocalStorageService.get(StaticDataService.name);

    if(resp && resp !== null && Object.keys(resp).length > 0){
      return resp;
    } else {
      // if no data found in local storage then set it and return
      return await this.setStaticDataJsonInLocalStorage();
    }
  }
  // we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async create(input: StaticDataCreateInputDto | StaticDataCreateInputDto[], selection: StaticDataCreateOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataCreateOutputDto[]>{
    const resp = await this.createEngine.create(input, selection, info, ctx);
    await this.setStaticDataJsonInLocalStorage();

    return resp;
  }
  // we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async update(input: StaticDataUpdateInputDto, selection: StaticDataUpdateOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataUpdateOutputDto>{
    const resp = await this.updateEngine.update(input, selection, info, ctx);
    await this.setStaticDataJsonInLocalStorage();

    return resp;
  }
  // we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async upsert(input: StaticDataUpsertInputDto | StaticDataUpsertInputDto[], selection: StaticDataUpsertOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataUpsertOutputDto[]>{
    const resp = await this.upsertEngine.upsert(input, selection, info, ctx);

    await this.setStaticDataJsonInLocalStorage();

    return resp;
  }
  // we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async softRemove(input: StaticDataSoftRemoveInputDto, selection: StaticDataSoftRemoveOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataSoftRemoveOutputDto>{
    const resp = await this.removeEngine.softRemove(input, selection, info, ctx);
    await this.setStaticDataJsonInLocalStorage();

    return resp;
  }
  // we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async remove(input: StaticDataRemoveInputDto, selection: StaticDataRemoveOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataRemoveOutputDto>{
    const resp = await this.removeEngine.remove(input, selection, info, ctx); 
    await this.setStaticDataJsonInLocalStorage();

    return resp;

  }
  // we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async recover(input: StaticDataRecoverInputDto, selection: StaticDataRecoverOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataRecoverOutputDto>{
    const resp = await this.removeEngine.recover(input, selection, info, ctx);
    await this.setStaticDataJsonInLocalStorage();

    return resp;
  }
  // we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async softDelete(input: StaticDataSoftDeleteInputDto, selection: StaticDataSoftDeleteOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataSoftDeleteOutputDto>{
    const resp = await this.deleteEngine.softDelete(input, selection, info, ctx);
    await this.setStaticDataJsonInLocalStorage();

    return resp;
  }
  // we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async delete(input: StaticDataDeleteInputDto, selection: StaticDataDeleteOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataDeleteOutputDto>{
    const resp = await this.deleteEngine.delete(input, selection, info, ctx);
    await this.setStaticDataJsonInLocalStorage();

    return resp;
  }
  // we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async restore(input: StaticDataRestoreInputDto, selection: StaticDataRestoreOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataRestoreOutputDto>{
    const resp = await this.deleteEngine.restore(input, selection, info, ctx);
    await this.setStaticDataJsonInLocalStorage();

    return resp;
  }
}