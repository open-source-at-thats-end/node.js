import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { ProcessedSearchByMapSearchService } from './search.by.mapsearch.service';
import { ProcessedSearchByMapSearchEntity } from './entities/search.by.mapsearch.entity';
import { ProcessedSearchByMapSearchFactory } from './search.by.mapsearch.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { ProcessedSearchByMapSearchCreateDto, ProcessedSearchByMapSearchCreateInputDto, ProcessedSearchByMapSearchCreateOutputDto, ProcessedSearchByMapSearchDeleteDto, ProcessedSearchByMapSearchDeleteInputDto, ProcessedSearchByMapSearchDeleteOutputDto, ProcessedSearchByMapSearchFindDto, ProcessedSearchByMapSearchFindInputDto, ProcessedSearchByMapSearchFindOneByIdDto, ProcessedSearchByMapSearchFindOneByIdInputDto, ProcessedSearchByMapSearchFindOutputDto, ProcessedSearchByMapSearchFindOutputRowsDto, ProcessedSearchByMapSearchRecoverDto, ProcessedSearchByMapSearchRecoverInputDto, ProcessedSearchByMapSearchRecoverOutputDto, ProcessedSearchByMapSearchRemoveDto, ProcessedSearchByMapSearchRemoveInputDto, ProcessedSearchByMapSearchRemoveOutputDto, ProcessedSearchByMapSearchRestoreDto, ProcessedSearchByMapSearchRestoreInputDto, ProcessedSearchByMapSearchRestoreOutputDto, ProcessedSearchByMapSearchSoftDeleteDto, ProcessedSearchByMapSearchSoftDeleteInputDto, ProcessedSearchByMapSearchSoftDeleteInputWhereDto, ProcessedSearchByMapSearchSoftDeleteOutputDto, ProcessedSearchByMapSearchSoftRemoveDto, ProcessedSearchByMapSearchSoftRemoveInputDto, ProcessedSearchByMapSearchSoftRemoveOutputDto, ProcessedSearchByMapSearchUpdateDto, ProcessedSearchByMapSearchUpdateInputDto, ProcessedSearchByMapSearchUpdateInputSetsDto, ProcessedSearchByMapSearchUpdateOutputDto, ProcessedSearchByMapSearchUploadDeleteDto, ProcessedSearchByMapSearchUploadDeleteInputDto, ProcessedSearchByMapSearchUploadDeleteOutputDto, ProcessedSearchByMapSearchUploadDto, ProcessedSearchByMapSearchUploadInputDto, ProcessedSearchByMapSearchUploadOutputDto, ProcessedSearchByMapSearchUpsertDto, ProcessedSearchByMapSearchUpsertInputDto, ProcessedSearchByMapSearchUpsertOutputDto } from './dto/search.by.mapsearch.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => ProcessedSearchByMapSearchEntity)
export class ProcessedSearchByMapSearchResolver
{
  constructor(
    protected readonly factory: ProcessedSearchByMapSearchFactory,
    protected readonly service: ProcessedSearchByMapSearchService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [ProcessedSearchByMapSearchUploadOutput], { name:  `${ProcessedSearchByMapSearchUploadDto.metaname}`, description: `${ProcessedSearchByMapSearchUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => ProcessedSearchByMapSearchUploadInputDto }) 
    input: ProcessedSearchByMapSearchUploadInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMapSearchUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByMapSearchUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [ProcessedSearchByMapSearchUploadDeleteOutput], { name:  `${ProcessedSearchByMapSearchUploadDeleteDto.metaname}`, description: `${ProcessedSearchByMapSearchUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchByMapSearchUploadDeleteInputDto] }) 
    input: ProcessedSearchByMapSearchUploadDeleteInputDto | ProcessedSearchByMapSearchUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchByMapSearchUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByMapSearchUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchByMapSearchCreateOutputDto], {
    name:  `${ProcessedSearchByMapSearchCreateDto.metaname}`, 
    description: `${ProcessedSearchByMapSearchCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchByMapSearchCreateInputDto] }) 
    input: ProcessedSearchByMapSearchCreateInputDto | ProcessedSearchByMapSearchCreateInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchByMapSearchCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByMapSearchCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchByMapSearchCreateInputDto>(input, ProcessedSearchByMapSearchCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => ProcessedSearchByMapSearchFindOutputDto, {
    name: ProcessedSearchByMapSearchFindDto.metaname,
    description: ProcessedSearchByMapSearchFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => ProcessedSearchByMapSearchFindInputDto}) 
    filter: ProcessedSearchByMapSearchFindInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMapSearchFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchByMapSearchFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => ProcessedSearchByMapSearchEntity, {
    name: ProcessedSearchByMapSearchFindOneByIdDto.metaname, 
    description: ProcessedSearchByMapSearchFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByMapSearchFindOneByIdInputDto }) 
    input: ProcessedSearchByMapSearchFindOneByIdInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMapSearchEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchByMapSearchEntity> {
    await this.validation.validateArrayInput<ProcessedSearchByMapSearchFindOneByIdInputDto>([input], ProcessedSearchByMapSearchFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByMapSearchUpdateOutputDto, {
    name: ProcessedSearchByMapSearchUpdateDto.metaname, 
    description: ProcessedSearchByMapSearchUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => ProcessedSearchByMapSearchUpdateInputDto}) 
    input: ProcessedSearchByMapSearchUpdateInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMapSearchUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMapSearchUpdateOutputDto> {
    await this.validation.validateArrayInput<ProcessedSearchByMapSearchUpdateInputSetsDto>([input.sets], ProcessedSearchByMapSearchUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByMapSearchSoftDeleteOutputDto, {
    name: ProcessedSearchByMapSearchSoftDeleteDto.metaname, 
    description: ProcessedSearchByMapSearchSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByMapSearchSoftDeleteInputDto }) 
    input: ProcessedSearchByMapSearchSoftDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMapSearchSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMapSearchSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByMapSearchDeleteOutputDto, {
    name: ProcessedSearchByMapSearchDeleteDto.metaname, 
    description: ProcessedSearchByMapSearchDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByMapSearchDeleteInputDto }) 
    input: ProcessedSearchByMapSearchDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMapSearchDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMapSearchDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByMapSearchRestoreOutputDto, {
    name: ProcessedSearchByMapSearchRestoreDto.metaname,
    description: ProcessedSearchByMapSearchRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByMapSearchRestoreInputDto }) 
    input: ProcessedSearchByMapSearchRestoreInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchByMapSearchRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMapSearchRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchByMapSearchUpsertOutputDto], {
    name:  `${ProcessedSearchByMapSearchUpsertDto.metaname}`, 
    description: `${ProcessedSearchByMapSearchUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [ProcessedSearchByMapSearchUpsertInputDto]}) 
    input: ProcessedSearchByMapSearchUpsertInputDto | ProcessedSearchByMapSearchUpsertInputDto[],
    
    @GraphQLBodyContext() selection: ProcessedSearchByMapSearchUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMapSearchUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchByMapSearchUpsertInputDto>(input, ProcessedSearchByMapSearchUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByMapSearchSoftRemoveOutputDto, {
    name: ProcessedSearchByMapSearchSoftRemoveDto.metaname, 
    description: ProcessedSearchByMapSearchSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByMapSearchSoftRemoveInputDto }) 
    input: ProcessedSearchByMapSearchSoftRemoveInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMapSearchSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMapSearchSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByMapSearchRemoveOutputDto, {
    name: ProcessedSearchByMapSearchRemoveDto.metaname, 
    description: ProcessedSearchByMapSearchRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByMapSearchRemoveInputDto }) 
    input: ProcessedSearchByMapSearchRemoveInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchByMapSearchRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMapSearchRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByMapSearchRecoverOutputDto, {
    name: ProcessedSearchByMapSearchRecoverDto.metaname,
    description: ProcessedSearchByMapSearchRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByMapSearchRecoverInputDto }) 
    input: ProcessedSearchByMapSearchRecoverInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByMapSearchRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByMapSearchRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }



}