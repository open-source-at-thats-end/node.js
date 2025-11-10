import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StaticDataValueEntity } from './entities/value.entity';
import { DataSource, Repository } from 'typeorm';
import { ConfService, DataValidationPipe, LibraryAppService, LogService } from '@libs/library-app';
import { StaticDataValueFactory } from './value.factory';
import { SelfGraphqlMicroserviceService } from '@libs/dynamic-app';
import { StaticDataValueCreateInputDto, StaticDataValueCreateOutputDto, StaticDataValueDeleteInputDto, StaticDataValueDeleteOutputDto, StaticDataValueRecoverInputDto, StaticDataValueRecoverOutputDto, StaticDataValueRemoveInputDto, StaticDataValueRemoveOutputDto, StaticDataValueRestoreInputDto, StaticDataValueRestoreOutputDto, StaticDataValueSoftDeleteInputDto, StaticDataValueSoftDeleteOutputDto, StaticDataValueSoftRemoveInputDto, StaticDataValueSoftRemoveOutputDto, StaticDataValueUpdateInputDto, StaticDataValueUpdateOutputDto, StaticDataValueUpsertInputDto, StaticDataValueUpsertOutputDto } from './dto/value.dto';
import { GraphQLResolveInfo } from 'graphql';
import { StaticDataService } from '../static.data.service';

@Injectable()
export class StaticDataValueService extends StaticDataValueFactory{
    constructor(
        protected readonly dataSource: DataSource,

        @InjectRepository(StaticDataValueEntity) 
        protected readonly repository: Repository<StaticDataValueEntity>,

        protected readonly confService: ConfService,
        protected readonly logService: LogService,
        protected readonly validationPipe: DataValidationPipe,
        protected readonly libraryAppService: LibraryAppService,
        protected readonly selfGraphqlMicroserviceService: SelfGraphqlMicroserviceService,
        protected readonly staticDataService: StaticDataService
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
        this.logService.setContext(StaticDataValueService.name);
      }
// we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
public async create(input: StaticDataValueCreateInputDto | StaticDataValueCreateInputDto[], selection: StaticDataValueCreateOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataValueCreateOutputDto[]>{
    const resp = await this.createEngine.create(input, selection, info, ctx);

    await this.staticDataService.setStaticDataJsonInLocalStorage();

    return resp;
  }
// we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
public async update(input: StaticDataValueUpdateInputDto, selection: StaticDataValueUpdateOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataValueUpdateOutputDto>{
  const resp = await this.updateEngine.update(input, selection, info, ctx);

  await this.staticDataService.setStaticDataJsonInLocalStorage();

  return resp;
}
// we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
public async upsert(input: StaticDataValueUpsertInputDto | StaticDataValueUpsertInputDto[], selection: StaticDataValueUpsertOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataValueUpsertOutputDto[]>{
  const resp = await this.upsertEngine.upsert(input, selection, info, ctx);

  await this.staticDataService.setStaticDataJsonInLocalStorage();

  return resp;
}
// we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async softRemove(input: StaticDataValueSoftRemoveInputDto, selection: StaticDataValueSoftRemoveOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataValueSoftRemoveOutputDto>{
    const resp = await this.removeEngine.softRemove(input, selection, info, ctx);
    await this.staticDataService.setStaticDataJsonInLocalStorage();

    return resp;
  }
  // we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async remove(input: StaticDataValueRemoveInputDto, selection: StaticDataValueRemoveOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataValueRemoveOutputDto>{
    const resp = await this.removeEngine.remove(input, selection, info, ctx); 
    await this.staticDataService.setStaticDataJsonInLocalStorage();

    return resp;

  }
  // we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async recover(input: StaticDataValueRecoverInputDto, selection: StaticDataValueRecoverOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataValueRecoverOutputDto>{
    const resp = await this.removeEngine.recover(input, selection, info, ctx);
    await this.staticDataService.setStaticDataJsonInLocalStorage();

    return resp;
  }
  // we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async softDelete(input: StaticDataValueSoftDeleteInputDto, selection: StaticDataValueSoftDeleteOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataValueSoftDeleteOutputDto>{
    const resp = await this.deleteEngine.softDelete(input, selection, info, ctx);
    await this.staticDataService.setStaticDataJsonInLocalStorage();

    return resp;
  }
  // we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async delete(input: StaticDataValueDeleteInputDto, selection: StaticDataValueDeleteOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataValueDeleteOutputDto>{
    const resp = await this.deleteEngine.delete(input, selection, info, ctx);
    await this.staticDataService.setStaticDataJsonInLocalStorage();

    return resp;
  }
  // we need to override deafult as there are some process to perform and insted of entity subscriber we need to control manully to save overheads
  public async restore(input: StaticDataValueRestoreInputDto, selection: StaticDataValueRestoreOutputDto, info: GraphQLResolveInfo, ctx: any): Promise<StaticDataValueRestoreOutputDto>{
    const resp = await this.deleteEngine.restore(input, selection, info, ctx);
    await this.staticDataService.setStaticDataJsonInLocalStorage();

    return resp;
  }
}
