import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SettingPreferenceEntity } from './entities/preference.entity';
import { DataSource, FindOptionsWhere, In, Repository } from 'typeorm';
import { ConfService, DataValidationPipe, EtcCRUDTypeDefinition, ImageProcessingService, LibraryAppService, LogService } from '@libs/library-app';
import { SettingPreferenceFactory } from './preference.factory';
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { GraphQLResolveInfo } from 'graphql';
import { SettingPreferenceFindInputWhereDto, SettingPreferenceJsonInputDto } from './dto/preference.dto';
import { PreferenceType, RecordPreferenceType, SettingPreferenceType } from './preference.type';
import { NotFoundError } from 'rxjs';

@Injectable()
export class SettingPreferenceService extends SettingPreferenceFactory {
  constructor(
      protected dataSource: DataSource,

      @InjectRepository(SettingPreferenceEntity) 
      protected readonly repository: Repository<SettingPreferenceEntity>,

      protected readonly confService: ConfService,
      protected readonly logService: LogService,
      protected readonly dataValidationPipe: DataValidationPipe,
      protected readonly libraryAppService: LibraryAppService,
      protected readonly selfGraphqlMicroserviceService: SelfGraphqlMicroserviceService,
      protected readonly imageProcessingService: ImageProcessingService,
    ){
      super(
        dataSource,
        repository,
        confService,
        logService,
        dataValidationPipe,
        libraryAppService,
        selfGraphqlMicroserviceService,
        imageProcessingService,
      );

      this.logService.setContext(SettingPreferenceService.name);
    }
    public async settingPreferenceJson(input: SettingPreferenceJsonInputDto): Promise<SettingPreferenceType>  {
      
      const resp: any = {} as SettingPreferenceType;

      // requested setting type
      const settype = input.setting_type;

      // set where
      const where: FindOptionsWhere<SettingPreferenceEntity> = {} ;
      where.settty_id = settype;

      // check if single or multiple record id passed
      if(input.record_id && input.record_id !== null) {
        if(!Array.isArray(input.record_id))
          input.record_id = [input.record_id];

        where.record_id = In(input.record_id);
      }

      const records = await this.repository.find({
        select: {
          id: true, 
          settty_id: true,
          record_id: true,
          sett_key: true,
          sd_name: true,
          sdv_key: true, 
          sdt_key: true, 
          plain_value: true, 
        },
        where: where,
      });
      
      // if records found then process
      if(Array.isArray(records) && records.length > 0) {
        for (let i = 0; i < records.length; i++) {
          const record: SettingPreferenceEntity = records[i];

          // set required keys for setting
          const settty_id = record.settty_id as any;
          const sett_key = record.sett_key as any;
          const record_id = record.record_id as any;
          
          // set value variables for setting
          const sdv_key = record.sdv_key as any;
          const sdt_key = record.sdt_key as any;
          const plain_value = record.plain_value as any;
          
          // check for value of setting
          let pref: any = '';
          
          if(plain_value !== null) { pref = plain_value; } // plain value is set
          else if (sdv_key !== null) { pref = sdv_key; } // value is linked with static data
          else if (sdt_key !== null) { pref = sdt_key; } // value is linked with seperate database table

          // initialize resp[settty_id] if it doesn't exist
          if (!resp[settty_id]) {
            resp[settty_id] = {};
          }

          // set setting and it's preference value in response 
          if(record_id && record_id !== null) {
            // ensure nested structure for RecordPreferenceType
            const recordPreference = resp[settty_id] as RecordPreferenceType;
            if (!recordPreference[record_id]) {
              recordPreference[record_id] = {};
            }
            recordPreference[record_id][sett_key] = pref;
          } else {
            // set directly in PreferenceType
            (resp[settty_id] as PreferenceType)[sett_key] = pref;
          }
        }
        return resp[settype] as SettingPreferenceType;
      }
      throw new NotFoundException('Requested settings are not found.');
    }
}
