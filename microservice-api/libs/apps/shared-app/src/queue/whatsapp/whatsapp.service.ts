import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { QueueWhatsappEntity } from './entities/whatsapp.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, IsNull, Repository, UpdateResult } from 'typeorm';
import { ConfService, DataValidationPipe, LibraryAppService, LogService } from '@libs/library-app';
import { QueueWhatsappFactory } from './whatsapp.factory';
import { UserService } from '../../folk/user/user.service';
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';

@Injectable()
export class QueueWhatsappService extends QueueWhatsappFactory {

    constructor(
      protected dataSource: DataSource,

      @InjectRepository(QueueWhatsappEntity) 
      protected readonly repository: Repository<QueueWhatsappEntity>,

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

      this.logService.setContext(QueueWhatsappService.name);
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

public async findNotSentWhatsapp(take: number): Promise<QueueWhatsappEntity[]> {

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

}
