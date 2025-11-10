import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { QueueSmsEntity } from './entities/sms.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, IsNull, Repository, UpdateResult } from 'typeorm';
import { ConfService, DataValidationPipe, LibraryAppService, LogService } from '@libs/library-app';
import { QueueSmsCreateInputDto } from '@libs/dynamic-app';
import { SelfGraphqlMicroserviceService } from "@libs/dynamic-app";
import { QueueSmsFactory } from './sms.factory';
import { UserService } from '../../folk/user/user.service';
import { subDays } from 'date-fns';

@Injectable()
export class QueueSmsService extends QueueSmsFactory {

    constructor(
      protected dataSource: DataSource,

      @InjectRepository(QueueSmsEntity) 
      protected readonly repository: Repository<QueueSmsEntity>,

      protected readonly userService: UserService,

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

      this.logService.setContext(QueueSmsService.name);
    }
    public async updateRawData(id: number, rawData: JSON): Promise<boolean> {
      const resp = await this.repository.update({ id: id }, { raw_data: rawData });
      if(resp.affected === 1) {
        return true;
      }
      return false;
    }

public async updateRawDataAndSentStatus(id: number, sent: Date | null, rawData: JSON): Promise<boolean> {
  const resp = await this.repository.update(id, { 
    sent: sent,
    raw_data: rawData
  });
  
  if(resp.affected === 1) {
      return true;
  }
  return false;
}

public async findNotSentSms(take: number): Promise<QueueSmsEntity[]> {

  const records = await this.repository.find({
      where: {
        sent: IsNull()
      },
      order: {
          id: 'DESC'
      },
      take: take,
  });

  return records;
}

public async checkRequiredDataToCreateQueue(input: QueueSmsCreateInputDto | QueueSmsCreateInputDto[]): Promise<QueueSmsCreateInputDto | QueueSmsCreateInputDto[]> {

  if(!Array.isArray(input)) {
    input = [input];
  }

  await Promise.all(
    input.map(async (obj: any, key: any) => {
      if(!obj.ref_id || !obj.ref_type || !obj.msg) {
        throw new BadRequestException(`Please provide ref_id, ref_type and msg`);
      }

      // make sure any one is provided
      if(!obj.to_u_id && !obj.to_mobile) {
        throw new BadRequestException(`Please provide either to_u_id or to_mobile`);
      }

      // if to user id is provided and mobile number is not provided, then get the user info
      if(obj.to_u_id && !obj.to_mobile) {
        // fetch user info using user id
        const tuser = await this.userService.findSingleById(obj.to_u_id);

        if(tuser !== null && tuser.primary_mobile != '') {
          input[key].to_mobile = tuser.primary_mobile;
          input[key].to_mobile_cc = tuser.primary_mobile_cc;
        }
      }

      // if from user id is provided and mobile number is not provided, then get the user info
      if(obj.from_u_id && !obj.from_mobile) {
        // fetch user info using user id
        const fuser = await this.userService.findSingleById(obj.from_u_id);

        if(fuser !== null && fuser.primary_mobile != '') {
          input[key].from_mobile = fuser.primary_mobile;
          input[key].from_mobile_cc = fuser.primary_mobile_cc;
        }
      }
    })
  );
  return input;
}
}
