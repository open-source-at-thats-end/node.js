import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { ProcessedSearchByMlsService } from './search.by.mls.service';
import { ProcessedSearchByMlsEntity } from './entities/search.by.mls.entity';
import { ProcessedSearchByMlsFactory } from './search.by.mls.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { ProcessedSearchByMlsCreateDto, ProcessedSearchByMlsCreateInputDto, ProcessedSearchByMlsCreateOutputDto, ProcessedSearchByMlsDeleteDto, ProcessedSearchByMlsDeleteInputDto, ProcessedSearchByMlsDeleteOutputDto, ProcessedSearchByMlsFindDto, ProcessedSearchByMlsFindInputDto, ProcessedSearchByMlsFindOneByIdDto, ProcessedSearchByMlsFindOneByIdInputDto, ProcessedSearchByMlsFindOutputDto, ProcessedSearchByMlsFindOutputRowsDto, ProcessedSearchByMlsRecoverDto, ProcessedSearchByMlsRecoverInputDto, ProcessedSearchByMlsRecoverOutputDto, ProcessedSearchByMlsRemoveDto, ProcessedSearchByMlsRemoveInputDto, ProcessedSearchByMlsRemoveOutputDto, ProcessedSearchByMlsRestoreDto, ProcessedSearchByMlsRestoreInputDto, ProcessedSearchByMlsRestoreOutputDto, ProcessedSearchByMlsSoftDeleteDto, ProcessedSearchByMlsSoftDeleteInputDto, ProcessedSearchByMlsSoftDeleteInputWhereDto, ProcessedSearchByMlsSoftDeleteOutputDto, ProcessedSearchByMlsSoftRemoveDto, ProcessedSearchByMlsSoftRemoveInputDto, ProcessedSearchByMlsSoftRemoveOutputDto, ProcessedSearchByMlsUpdateDto, ProcessedSearchByMlsUpdateInputDto, ProcessedSearchByMlsUpdateInputSetsDto, ProcessedSearchByMlsUpdateOutputDto, ProcessedSearchByMlsUploadDeleteDto, ProcessedSearchByMlsUploadDeleteInputDto, ProcessedSearchByMlsUploadDeleteOutputDto, ProcessedSearchByMlsUploadDto, ProcessedSearchByMlsUploadInputDto, ProcessedSearchByMlsUploadOutputDto, ProcessedSearchByMlsUpsertDto, ProcessedSearchByMlsUpsertInputDto, ProcessedSearchByMlsUpsertOutputDto } from './dto/search.by.mls.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => ProcessedSearchByMlsEntity)
export class ProcessedSearchByMlsResolver
{
  constructor(
    protected readonly factory: ProcessedSearchByMlsFactory,
    protected readonly service: ProcessedSearchByMlsService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [ProcessedSearchByMlsUploadOutput], { name:  `${ProcessedSearchByMlsUploadDto.metaname}`, description: `${ProcessedSearchByMlsUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => ProcessedSearchByMlsUploadInputDto }) 
    input: ProcessedSearchByMlsUploadInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMlsUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByMlsUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [ProcessedSearchByMlsUploadDeleteOutput], { name:  `${ProcessedSearchByMlsUploadDeleteDto.metaname}`, description: `${ProcessedSearchByMlsUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchByMlsUploadDeleteInputDto] }) 
    input: ProcessedSearchByMlsUploadDeleteInputDto | ProcessedSearchByMlsUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchByMlsUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByMlsUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchByMlsCreateOutputDto], {
    name:  `${ProcessedSearchByMlsCreateDto.metaname}`, 
    description: `${ProcessedSearchByMlsCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchByMlsCreateInputDto] }) 
    input: ProcessedSearchByMlsCreateInputDto | ProcessedSearchByMlsCreateInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchByMlsCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByMlsCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchByMlsCreateInputDto>(input, ProcessedSearchByMlsCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => ProcessedSearchByMlsFindOutputDto, {
    name: ProcessedSearchByMlsFindDto.metaname,
    description: ProcessedSearchByMlsFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => ProcessedSearchByMlsFindInputDto}) 
    filter: ProcessedSearchByMlsFindInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMlsFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchByMlsFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => ProcessedSearchByMlsEntity, {
    name: ProcessedSearchByMlsFindOneByIdDto.metaname, 
    description: ProcessedSearchByMlsFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByMlsFindOneByIdInputDto }) 
    input: ProcessedSearchByMlsFindOneByIdInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMlsEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchByMlsEntity> {
    await this.validation.validateArrayInput<ProcessedSearchByMlsFindOneByIdInputDto>([input], ProcessedSearchByMlsFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByMlsUpdateOutputDto, {
    name: ProcessedSearchByMlsUpdateDto.metaname, 
    description: ProcessedSearchByMlsUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => ProcessedSearchByMlsUpdateInputDto}) 
    input: ProcessedSearchByMlsUpdateInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMlsUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMlsUpdateOutputDto> {
    await this.validation.validateArrayInput<ProcessedSearchByMlsUpdateInputSetsDto>([input.sets], ProcessedSearchByMlsUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByMlsSoftDeleteOutputDto, {
    name: ProcessedSearchByMlsSoftDeleteDto.metaname, 
    description: ProcessedSearchByMlsSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByMlsSoftDeleteInputDto }) 
    input: ProcessedSearchByMlsSoftDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMlsSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMlsSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByMlsDeleteOutputDto, {
    name: ProcessedSearchByMlsDeleteDto.metaname, 
    description: ProcessedSearchByMlsDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByMlsDeleteInputDto }) 
    input: ProcessedSearchByMlsDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMlsDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMlsDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByMlsRestoreOutputDto, {
    name: ProcessedSearchByMlsRestoreDto.metaname,
    description: ProcessedSearchByMlsRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByMlsRestoreInputDto }) 
    input: ProcessedSearchByMlsRestoreInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchByMlsRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMlsRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchByMlsUpsertOutputDto], {
    name:  `${ProcessedSearchByMlsUpsertDto.metaname}`, 
    description: `${ProcessedSearchByMlsUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [ProcessedSearchByMlsUpsertInputDto]}) 
    input: ProcessedSearchByMlsUpsertInputDto | ProcessedSearchByMlsUpsertInputDto[],
    
    @GraphQLBodyContext() selection: ProcessedSearchByMlsUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMlsUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchByMlsUpsertInputDto>(input, ProcessedSearchByMlsUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByMlsSoftRemoveOutputDto, {
    name: ProcessedSearchByMlsSoftRemoveDto.metaname, 
    description: ProcessedSearchByMlsSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByMlsSoftRemoveInputDto }) 
    input: ProcessedSearchByMlsSoftRemoveInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMlsSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMlsSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByMlsRemoveOutputDto, {
    name: ProcessedSearchByMlsRemoveDto.metaname, 
    description: ProcessedSearchByMlsRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByMlsRemoveInputDto }) 
    input: ProcessedSearchByMlsRemoveInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchByMlsRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMlsRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByMlsRecoverOutputDto, {
    name: ProcessedSearchByMlsRecoverDto.metaname,
    description: ProcessedSearchByMlsRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByMlsRecoverInputDto }) 
    input: ProcessedSearchByMlsRecoverInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMlsRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMlsRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }



}