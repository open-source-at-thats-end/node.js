import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SettingEntity } from './entities/setting.entity';
import { DataSource, FindManyOptions, FindOptionsRelations, FindOptionsSelect, FindOptionsWhere, In, Repository } from 'typeorm';
import { ApplicationLocalStorageService, ConfService, DataValidationPipe, ImageProcessingService, LibraryAppService, LogService } from '@libs/library-app';
import { SettingRawType, SettingType } from './setting.type';
import { SettingJsonInputDto } from './dto/setting.dto';
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { SettingFactory } from './setting.factory';
import { SettingJsonTypeEnum } from './setting.enum';

@Injectable()
export class SettingService extends SettingFactory {
  constructor(
      protected dataSource: DataSource,

      @InjectRepository(SettingEntity) 
      protected readonly repository: Repository<SettingEntity>,

      private readonly appLocalStorageService: ApplicationLocalStorageService,

      protected readonly confService: ConfService,
      protected readonly logService: LogService,
      protected readonly dataValidationPipe: DataValidationPipe,
      protected readonly libraryAppService: LibraryAppService,
      protected readonly selfGraphqlMicroserviceService: SelfGraphqlMicroserviceService,
    ){
      super(
        dataSource,
        repository,
        confService,
        logService,
        dataValidationPipe,
        libraryAppService,
        selfGraphqlMicroserviceService,
      );

      this.logService.setContext(SettingService.name);
  }

  public async settingJson(input: SettingJsonInputDto): Promise<SettingType> {

    let resp: any = {} as SettingType;

    // set response json type
    const respJsonType = input.json_type ?? SettingJsonTypeEnum.RAW;

    // requested setting type
    if(input.setting_type && !Array.isArray(input.setting_type))
      input.setting_type = [input.setting_type];

    // get records
    let records = null;
    let options: FindManyOptions<SettingEntity> = {};

    // set selections
    options.select = {
      id: true,
      key: true,
      settty_id: true,
      settc_id: true,
      frmfield_id: true,
      device_id: true,
      sd_id: true,
      sd_name: true,
      default_sdv_id: true,
      default_sdv_key: true,
      default_sdt_key: true,
      default_plain_value: true,
      access_type: true,
      title: true,
      display_title: true,
      guideline: true,
      created: true,
      updated: true,
      fr_setting_types: {
        title: true
      },
      fr_setting_categorys: {
        title: true,
        desc: true
      }
    }
    // set relations
    options.relations = {
      fr_setting_types: true,
      fr_setting_categorys: true
    };

    // set where conditionally
    if(input.setting_type && Array.isArray(input.setting_type) && input.setting_type.length > 0) {
      // set where if setting type is passed
      const settype = input.setting_type;  

      // set where
      options.where = {
        settty_id: In(settype)
      };
    } 

    // get the data from database
    records = await this.repository.find(options);
    
    // if records found then process
    if(Array.isArray(records) && records.length > 0) {
        for (let i = 0; i < records.length; i++) {
          const record: SettingEntity = records[i];

          // set required keys for setting
          const settty_id = record.settty_id as any;
          const settc_id = record.settc_id as any;
          const sett_key = record.key as any;

          if(respJsonType === SettingJsonTypeEnum.RAW) {
            // initialize resp[sett_key] if it doesn't exist
            if(!resp[sett_key]) {
              resp[sett_key] = {};
            }
            resp[sett_key] = record;
          } else {
            // initialize resp[settty_id] if it doesn't exist
            if(!resp[settty_id]) {
              resp[settty_id] = {};
            }
            // check if category is requested or not
            if(respJsonType === SettingJsonTypeEnum.BY_CATEGORY) {
              // initialize resp[settty_id][settc_id] if it doesn't exist
              if(!resp[settty_id][settc_id]) {
                resp[settty_id][settc_id] = {};
              }
              resp[settty_id][settc_id][sett_key] = record;
            } else {
              // only settings type based response
              resp[settty_id][sett_key] = record;
            }
          }
      }
      return resp;
    }
    throw new NotFoundException('Requested settings are not found.');
  }

  public async setSettingJsonInLocalStorage(): Promise<SettingType> {
    const input: SettingJsonInputDto = {
      json_type: SettingJsonTypeEnum.BY_CATEGORY
    };
    const resp: SettingType = await this.settingJson(input);
    
    await this.appLocalStorageService.delete(SettingService.name);

    await this.appLocalStorageService.set(SettingService.name, resp);

    return resp;
  }

  public async settingJsonFromLocalStorage(input: SettingJsonInputDto): Promise<SettingType> {
    let resp: any = await this.appLocalStorageService.get(SettingService.name) as SettingType;
    
    // if no settings find then set it
    if(!resp || resp === null || Object.keys(resp).length <= 0){
      // if no data found in local storage then set it and return
      await this.setSettingJsonInLocalStorage();
      resp = await this.appLocalStorageService.get(SettingService.name);
    }

    if(input.json_type === SettingJsonTypeEnum.BY_CATEGORY) {
      // as category based requested pass it as is
      return resp;
    } else {
      // requested raw or type based
      let flattened: any = {};
      for (const typeKey in resp) {
        // remove category dymention from key
        for (const categoryKey in resp[typeKey]) {
          const category = resp[typeKey][categoryKey];
          flattened[typeKey] = {...flattened[typeKey], ...category};
        }
      }

      if(input.json_type === SettingJsonTypeEnum.BY_SETTYPE) {
        // requested for type based
        return flattened;
      } else {
        // convert to raw format data
        let rawFlattened: any = {};
        for (const typeKey in flattened) {
          const all = flattened[typeKey];
          rawFlattened = {...rawFlattened, ...all};
        }
        return rawFlattened;
      }
    }
  }
}