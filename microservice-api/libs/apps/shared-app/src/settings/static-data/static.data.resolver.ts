import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { StaticDataService } from './static.data.service';
import { StaticDataEntity } from './entities/static.data.entity';
import { StaticDataFactory } from './static.data.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { StaticDataUploadOutputDto, StaticDataUploadDto, StaticDataUploadInputDto, StaticDataUploadDeleteOutputDto, StaticDataUploadDeleteDto, StaticDataUploadDeleteInputDto, StaticDataCreateDto, StaticDataCreateInputDto, StaticDataCreateOutputDto, StaticDataDeleteDto, StaticDataDeleteInputDto, StaticDataDeleteOutputDto, StaticDataFindDto, StaticDataFindInputDto, StaticDataFindOneByIdDto, StaticDataFindOneByIdInputDto, StaticDataFindOutputDto, StaticDataFindOutputRowsDto, StaticDataRecoverDto, StaticDataRecoverInputDto, StaticDataRecoverOutputDto, StaticDataRemoveDto, StaticDataRemoveInputDto, StaticDataRemoveOutputDto, StaticDataRestoreDto, StaticDataRestoreInputDto, StaticDataRestoreOutputDto, StaticDataSoftDeleteDto, StaticDataSoftDeleteInputDto, StaticDataSoftDeleteInputWhereDto, StaticDataSoftDeleteOutputDto, StaticDataSoftRemoveDto, StaticDataSoftRemoveInputDto, StaticDataSoftRemoveOutputDto, StaticDataUpdateDto, StaticDataUpdateInputDto, StaticDataUpdateInputSetsDto, StaticDataUpdateOutputDto, StaticDataUpsertDto, StaticDataUpsertInputDto, StaticDataUpsertOutputDto, StaticDataJsonDto, StaticDataJsonFromLocalStorageDto } from './dto/static.data.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';
import { GraphQLJSON } from 'graphql-scalars';
import { StaticDataType } from './static.data.type';

@Resolver(() => StaticDataEntity)
export class StaticDataResolver
{
  constructor(
    protected readonly service: StaticDataService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [StaticDataUploadOutput], { name:  `${StaticDataUploadDto.metaname}`, description: `${StaticDataUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => StaticDataUploadInputDto }) 
    input: StaticDataUploadInputDto,

    @GraphQLBodyContext() selection: StaticDataUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<StaticDataUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [StaticDataUploadDeleteOutput], { name:  `${StaticDataUploadDeleteDto.metaname}`, description: `${StaticDataUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [StaticDataUploadDeleteInputDto] }) 
    input: StaticDataUploadDeleteInputDto | StaticDataUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: StaticDataUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<StaticDataUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [StaticDataCreateOutputDto], {
    name:  `${StaticDataCreateDto.metaname}`, 
    description: `${StaticDataCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [StaticDataCreateInputDto] }) 
    input: StaticDataCreateInputDto | StaticDataCreateInputDto[],

    @GraphQLBodyContext() selection: StaticDataCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<StaticDataCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<StaticDataCreateInputDto>(input, StaticDataCreateInputDto);
    }
    return this.service.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => StaticDataFindOutputDto, {
    name: StaticDataFindDto.metaname,
    description: StaticDataFindDto.metadesc
  })
  async find(
    @Context() ctx: any,

    @Args('filter', {type:() => StaticDataFindInputDto}) 
    filter: StaticDataFindInputDto,

    @GraphQLBodyContext() selection: StaticDataFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => StaticDataEntity, {
    name: StaticDataFindOneByIdDto.metaname, 
    description: StaticDataFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => StaticDataFindOneByIdInputDto }) 
    input: StaticDataFindOneByIdInputDto,

    @GraphQLBodyContext() selection: StaticDataEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<StaticDataEntity> {
    await this.validation.validateArrayInput<StaticDataFindOneByIdInputDto>([input], StaticDataFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => StaticDataUpdateOutputDto, {
    name: StaticDataUpdateDto.metaname, 
    description: StaticDataUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => StaticDataUpdateInputDto}) 
    input: StaticDataUpdateInputDto,

    @GraphQLBodyContext() selection: StaticDataUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataUpdateOutputDto> {
    await this.validation.validateArrayInput<StaticDataUpdateInputSetsDto>([input.sets], StaticDataUpdateInputSetsDto);
    return this.service.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => StaticDataSoftDeleteOutputDto, {
    name: StaticDataSoftDeleteDto.metaname, 
    description: StaticDataSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => StaticDataSoftDeleteInputDto }) 
    input: StaticDataSoftDeleteInputDto,

    @GraphQLBodyContext() selection: StaticDataSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataSoftDeleteOutputDto> {
    return this.service.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => StaticDataDeleteOutputDto, {
    name: StaticDataDeleteDto.metaname, 
    description: StaticDataDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => StaticDataDeleteInputDto }) 
    input: StaticDataDeleteInputDto,

    @GraphQLBodyContext() selection: StaticDataDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataDeleteOutputDto> {
    return this.service.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => StaticDataRestoreOutputDto, {
    name: StaticDataRestoreDto.metaname,
    description: StaticDataRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => StaticDataRestoreInputDto }) 
    input: StaticDataRestoreInputDto,
    
    @GraphQLBodyContext() selection: StaticDataRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataRestoreOutputDto>{
    return this.service.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [StaticDataUpsertOutputDto], {
    name:  `${StaticDataUpsertDto.metaname}`, 
    description: `${StaticDataUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [StaticDataUpsertInputDto]}) 
    input: StaticDataUpsertInputDto | StaticDataUpsertInputDto[],
    
    @GraphQLBodyContext() selection: StaticDataUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<StaticDataUpsertInputDto>(input, StaticDataUpsertInputDto);
    }
    return this.service.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => StaticDataSoftRemoveOutputDto, {
    name: StaticDataSoftRemoveDto.metaname, 
    description: StaticDataSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => StaticDataSoftRemoveInputDto }) 
    input: StaticDataSoftRemoveInputDto,

    @GraphQLBodyContext() selection: StaticDataSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataSoftRemoveOutputDto> {
    return this.service.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => StaticDataRemoveOutputDto, {
    name: StaticDataRemoveDto.metaname, 
    description: StaticDataRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => StaticDataRemoveInputDto }) 
    input: StaticDataRemoveInputDto,
    
    @GraphQLBodyContext() selection: StaticDataRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataRemoveOutputDto> {
    return this.service.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => StaticDataRecoverOutputDto, {
    name: StaticDataRecoverDto.metaname,
    description: StaticDataRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => StaticDataRecoverInputDto }) 
    input: StaticDataRecoverInputDto,

    @GraphQLBodyContext() selection: StaticDataRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataRecoverOutputDto>{
    return this.service.recover(input, selection, info, ctx);
  }

  // ████ staticDataJson() ██████████████████████████████████████

  @Query(() => GraphQLJSON, {
    name: StaticDataJsonDto.metaname,
    description: StaticDataJsonDto.metadesc
  })
  async staticDataJson(
    @Context() ctx: any,
    @GraphQLBodyContext() selection: any,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataType> {
    return this.service.staticDataJson();
  }

  // ████ staticDataJsonFromLocalStorage() ██████████████████████████████████████

  @Query(() => GraphQLJSON, {
    name: StaticDataJsonFromLocalStorageDto.metaname,
    description: StaticDataJsonFromLocalStorageDto.metadesc
  })
  async staticDataJsonFromLocalStorage(
    @Context() ctx: any,
    @GraphQLBodyContext() selection: any,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataType> {
    return this.service.staticDataJsonFromLocalStorage();
  }



  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: StaticDataEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<StaticDataEntity | null> {
    return await this.service.findEngine.resolveReference(entity, info, ctx);
  }

}