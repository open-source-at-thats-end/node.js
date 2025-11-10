import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { ProcessedSearchByNeighbourhoodService } from './search.by.neighbourhood.service';
import { ProcessedSearchByNeighbourhoodEntity } from './entities/search.by.neighbourhood.entity';
import { ProcessedSearchByNeighbourhoodFactory } from './search.by.neighbourhood.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { ProcessedSearchByNeighbourhoodCreateDto, ProcessedSearchByNeighbourhoodCreateInputDto, ProcessedSearchByNeighbourhoodCreateOutputDto, ProcessedSearchByNeighbourhoodDeleteDto, ProcessedSearchByNeighbourhoodDeleteInputDto, ProcessedSearchByNeighbourhoodDeleteOutputDto, ProcessedSearchByNeighbourhoodFindDto, ProcessedSearchByNeighbourhoodFindInputDto, ProcessedSearchByNeighbourhoodFindOneByIdDto, ProcessedSearchByNeighbourhoodFindOneByIdInputDto, ProcessedSearchByNeighbourhoodFindOutputDto, ProcessedSearchByNeighbourhoodFindOutputRowsDto, ProcessedSearchByNeighbourhoodRecoverDto, ProcessedSearchByNeighbourhoodRecoverInputDto, ProcessedSearchByNeighbourhoodRecoverOutputDto, ProcessedSearchByNeighbourhoodRemoveDto, ProcessedSearchByNeighbourhoodRemoveInputDto, ProcessedSearchByNeighbourhoodRemoveOutputDto, ProcessedSearchByNeighbourhoodRestoreDto, ProcessedSearchByNeighbourhoodRestoreInputDto, ProcessedSearchByNeighbourhoodRestoreOutputDto, ProcessedSearchByNeighbourhoodSoftDeleteDto, ProcessedSearchByNeighbourhoodSoftDeleteInputDto, ProcessedSearchByNeighbourhoodSoftDeleteInputWhereDto, ProcessedSearchByNeighbourhoodSoftDeleteOutputDto, ProcessedSearchByNeighbourhoodSoftRemoveDto, ProcessedSearchByNeighbourhoodSoftRemoveInputDto, ProcessedSearchByNeighbourhoodSoftRemoveOutputDto, ProcessedSearchByNeighbourhoodUpdateDto, ProcessedSearchByNeighbourhoodUpdateInputDto, ProcessedSearchByNeighbourhoodUpdateInputSetsDto, ProcessedSearchByNeighbourhoodUpdateOutputDto, ProcessedSearchByNeighbourhoodUploadDeleteDto, ProcessedSearchByNeighbourhoodUploadDeleteInputDto, ProcessedSearchByNeighbourhoodUploadDeleteOutputDto, ProcessedSearchByNeighbourhoodUploadDto, ProcessedSearchByNeighbourhoodUploadInputDto, ProcessedSearchByNeighbourhoodUploadOutputDto, ProcessedSearchByNeighbourhoodUpsertDto, ProcessedSearchByNeighbourhoodUpsertInputDto, ProcessedSearchByNeighbourhoodUpsertOutputDto } from './dto/search.by.neighbourhood.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => ProcessedSearchByNeighbourhoodEntity)
export class ProcessedSearchByNeighbourhoodResolver
{
  constructor(
    protected readonly factory: ProcessedSearchByNeighbourhoodFactory,
    protected readonly service: ProcessedSearchByNeighbourhoodService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [ProcessedSearchByNeighbourhoodUploadOutput], { name:  `${ProcessedSearchByNeighbourhoodUploadDto.metaname}`, description: `${ProcessedSearchByNeighbourhoodUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => ProcessedSearchByNeighbourhoodUploadInputDto }) 
    input: ProcessedSearchByNeighbourhoodUploadInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByNeighbourhoodUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByNeighbourhoodUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [ProcessedSearchByNeighbourhoodUploadDeleteOutput], { name:  `${ProcessedSearchByNeighbourhoodUploadDeleteDto.metaname}`, description: `${ProcessedSearchByNeighbourhoodUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchByNeighbourhoodUploadDeleteInputDto] }) 
    input: ProcessedSearchByNeighbourhoodUploadDeleteInputDto | ProcessedSearchByNeighbourhoodUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchByNeighbourhoodUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByNeighbourhoodUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchByNeighbourhoodCreateOutputDto], {
    name:  `${ProcessedSearchByNeighbourhoodCreateDto.metaname}`, 
    description: `${ProcessedSearchByNeighbourhoodCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchByNeighbourhoodCreateInputDto] }) 
    input: ProcessedSearchByNeighbourhoodCreateInputDto | ProcessedSearchByNeighbourhoodCreateInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchByNeighbourhoodCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByNeighbourhoodCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchByNeighbourhoodCreateInputDto>(input, ProcessedSearchByNeighbourhoodCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => ProcessedSearchByNeighbourhoodFindOutputDto, {
    name: ProcessedSearchByNeighbourhoodFindDto.metaname,
    description: ProcessedSearchByNeighbourhoodFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => ProcessedSearchByNeighbourhoodFindInputDto}) 
    filter: ProcessedSearchByNeighbourhoodFindInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByNeighbourhoodFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchByNeighbourhoodFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => ProcessedSearchByNeighbourhoodEntity, {
    name: ProcessedSearchByNeighbourhoodFindOneByIdDto.metaname, 
    description: ProcessedSearchByNeighbourhoodFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByNeighbourhoodFindOneByIdInputDto }) 
    input: ProcessedSearchByNeighbourhoodFindOneByIdInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByNeighbourhoodEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchByNeighbourhoodEntity> {
    await this.validation.validateArrayInput<ProcessedSearchByNeighbourhoodFindOneByIdInputDto>([input], ProcessedSearchByNeighbourhoodFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByNeighbourhoodUpdateOutputDto, {
    name: ProcessedSearchByNeighbourhoodUpdateDto.metaname, 
    description: ProcessedSearchByNeighbourhoodUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => ProcessedSearchByNeighbourhoodUpdateInputDto}) 
    input: ProcessedSearchByNeighbourhoodUpdateInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByNeighbourhoodUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByNeighbourhoodUpdateOutputDto> {
    await this.validation.validateArrayInput<ProcessedSearchByNeighbourhoodUpdateInputSetsDto>([input.sets], ProcessedSearchByNeighbourhoodUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByNeighbourhoodSoftDeleteOutputDto, {
    name: ProcessedSearchByNeighbourhoodSoftDeleteDto.metaname, 
    description: ProcessedSearchByNeighbourhoodSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByNeighbourhoodSoftDeleteInputDto }) 
    input: ProcessedSearchByNeighbourhoodSoftDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByNeighbourhoodSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByNeighbourhoodSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByNeighbourhoodDeleteOutputDto, {
    name: ProcessedSearchByNeighbourhoodDeleteDto.metaname, 
    description: ProcessedSearchByNeighbourhoodDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByNeighbourhoodDeleteInputDto }) 
    input: ProcessedSearchByNeighbourhoodDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByNeighbourhoodDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByNeighbourhoodDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByNeighbourhoodRestoreOutputDto, {
    name: ProcessedSearchByNeighbourhoodRestoreDto.metaname,
    description: ProcessedSearchByNeighbourhoodRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByNeighbourhoodRestoreInputDto }) 
    input: ProcessedSearchByNeighbourhoodRestoreInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchByNeighbourhoodRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByNeighbourhoodRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchByNeighbourhoodUpsertOutputDto], {
    name:  `${ProcessedSearchByNeighbourhoodUpsertDto.metaname}`, 
    description: `${ProcessedSearchByNeighbourhoodUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [ProcessedSearchByNeighbourhoodUpsertInputDto]}) 
    input: ProcessedSearchByNeighbourhoodUpsertInputDto | ProcessedSearchByNeighbourhoodUpsertInputDto[],
    
    @GraphQLBodyContext() selection: ProcessedSearchByNeighbourhoodUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByNeighbourhoodUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchByNeighbourhoodUpsertInputDto>(input, ProcessedSearchByNeighbourhoodUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByNeighbourhoodSoftRemoveOutputDto, {
    name: ProcessedSearchByNeighbourhoodSoftRemoveDto.metaname, 
    description: ProcessedSearchByNeighbourhoodSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByNeighbourhoodSoftRemoveInputDto }) 
    input: ProcessedSearchByNeighbourhoodSoftRemoveInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByNeighbourhoodSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByNeighbourhoodSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByNeighbourhoodRemoveOutputDto, {
    name: ProcessedSearchByNeighbourhoodRemoveDto.metaname, 
    description: ProcessedSearchByNeighbourhoodRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByNeighbourhoodRemoveInputDto }) 
    input: ProcessedSearchByNeighbourhoodRemoveInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchByNeighbourhoodRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByNeighbourhoodRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByNeighbourhoodRecoverOutputDto, {
    name: ProcessedSearchByNeighbourhoodRecoverDto.metaname,
    description: ProcessedSearchByNeighbourhoodRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByNeighbourhoodRecoverInputDto }) 
    input: ProcessedSearchByNeighbourhoodRecoverInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByNeighbourhoodRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByNeighbourhoodRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }



}