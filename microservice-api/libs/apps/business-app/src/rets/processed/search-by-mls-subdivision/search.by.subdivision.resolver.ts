import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { ProcessedSearchBySubdivisionService } from './search.by.subdivision.service';
import { ProcessedSearchBySubdivisionEntity } from './entities/search.by.subdivision.entity';
import { ProcessedSearchBySubdivisionFactory } from './search.by.subdivision.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { ProcessedSearchBySubdivisionCreateDto, ProcessedSearchBySubdivisionCreateInputDto, ProcessedSearchBySubdivisionCreateOutputDto, ProcessedSearchBySubdivisionDeleteDto, ProcessedSearchBySubdivisionDeleteInputDto, ProcessedSearchBySubdivisionDeleteOutputDto, ProcessedSearchBySubdivisionFindDto, ProcessedSearchBySubdivisionFindInputDto, ProcessedSearchBySubdivisionFindOneByIdDto, ProcessedSearchBySubdivisionFindOneByIdInputDto, ProcessedSearchBySubdivisionFindOutputDto, ProcessedSearchBySubdivisionFindOutputRowsDto, ProcessedSearchBySubdivisionRecoverDto, ProcessedSearchBySubdivisionRecoverInputDto, ProcessedSearchBySubdivisionRecoverOutputDto, ProcessedSearchBySubdivisionRemoveDto, ProcessedSearchBySubdivisionRemoveInputDto, ProcessedSearchBySubdivisionRemoveOutputDto, ProcessedSearchBySubdivisionRestoreDto, ProcessedSearchBySubdivisionRestoreInputDto, ProcessedSearchBySubdivisionRestoreOutputDto, ProcessedSearchBySubdivisionSoftDeleteDto, ProcessedSearchBySubdivisionSoftDeleteInputDto, ProcessedSearchBySubdivisionSoftDeleteInputWhereDto, ProcessedSearchBySubdivisionSoftDeleteOutputDto, ProcessedSearchBySubdivisionSoftRemoveDto, ProcessedSearchBySubdivisionSoftRemoveInputDto, ProcessedSearchBySubdivisionSoftRemoveOutputDto, ProcessedSearchBySubdivisionUpdateDto, ProcessedSearchBySubdivisionUpdateInputDto, ProcessedSearchBySubdivisionUpdateInputSetsDto, ProcessedSearchBySubdivisionUpdateOutputDto, ProcessedSearchBySubdivisionUploadDeleteDto, ProcessedSearchBySubdivisionUploadDeleteInputDto, ProcessedSearchBySubdivisionUploadDeleteOutputDto, ProcessedSearchBySubdivisionUploadDto, ProcessedSearchBySubdivisionUploadInputDto, ProcessedSearchBySubdivisionUploadOutputDto, ProcessedSearchBySubdivisionUpsertDto, ProcessedSearchBySubdivisionUpsertInputDto, ProcessedSearchBySubdivisionUpsertOutputDto } from './dto/search.by.subdivision.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => ProcessedSearchBySubdivisionEntity)
export class ProcessedSearchBySubdivisionResolver
{
  constructor(
    protected readonly factory: ProcessedSearchBySubdivisionFactory,
    protected readonly service: ProcessedSearchBySubdivisionService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [ProcessedSearchBySubdivisionUploadOutput], { name:  `${ProcessedSearchBySubdivisionUploadDto.metaname}`, description: `${ProcessedSearchBySubdivisionUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => ProcessedSearchBySubdivisionUploadInputDto }) 
    input: ProcessedSearchBySubdivisionUploadInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchBySubdivisionUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchBySubdivisionUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [ProcessedSearchBySubdivisionUploadDeleteOutput], { name:  `${ProcessedSearchBySubdivisionUploadDeleteDto.metaname}`, description: `${ProcessedSearchBySubdivisionUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchBySubdivisionUploadDeleteInputDto] }) 
    input: ProcessedSearchBySubdivisionUploadDeleteInputDto | ProcessedSearchBySubdivisionUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchBySubdivisionUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchBySubdivisionUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchBySubdivisionCreateOutputDto], {
    name:  `${ProcessedSearchBySubdivisionCreateDto.metaname}`, 
    description: `${ProcessedSearchBySubdivisionCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchBySubdivisionCreateInputDto] }) 
    input: ProcessedSearchBySubdivisionCreateInputDto | ProcessedSearchBySubdivisionCreateInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchBySubdivisionCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchBySubdivisionCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchBySubdivisionCreateInputDto>(input, ProcessedSearchBySubdivisionCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => ProcessedSearchBySubdivisionFindOutputDto, {
    name: ProcessedSearchBySubdivisionFindDto.metaname,
    description: ProcessedSearchBySubdivisionFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => ProcessedSearchBySubdivisionFindInputDto}) 
    filter: ProcessedSearchBySubdivisionFindInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchBySubdivisionFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchBySubdivisionFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => ProcessedSearchBySubdivisionEntity, {
    name: ProcessedSearchBySubdivisionFindOneByIdDto.metaname, 
    description: ProcessedSearchBySubdivisionFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchBySubdivisionFindOneByIdInputDto }) 
    input: ProcessedSearchBySubdivisionFindOneByIdInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchBySubdivisionEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchBySubdivisionEntity> {
    await this.validation.validateArrayInput<ProcessedSearchBySubdivisionFindOneByIdInputDto>([input], ProcessedSearchBySubdivisionFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchBySubdivisionUpdateOutputDto, {
    name: ProcessedSearchBySubdivisionUpdateDto.metaname, 
    description: ProcessedSearchBySubdivisionUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => ProcessedSearchBySubdivisionUpdateInputDto}) 
    input: ProcessedSearchBySubdivisionUpdateInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchBySubdivisionUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchBySubdivisionUpdateOutputDto> {
    await this.validation.validateArrayInput<ProcessedSearchBySubdivisionUpdateInputSetsDto>([input.sets], ProcessedSearchBySubdivisionUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchBySubdivisionSoftDeleteOutputDto, {
    name: ProcessedSearchBySubdivisionSoftDeleteDto.metaname, 
    description: ProcessedSearchBySubdivisionSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchBySubdivisionSoftDeleteInputDto }) 
    input: ProcessedSearchBySubdivisionSoftDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchBySubdivisionSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchBySubdivisionSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchBySubdivisionDeleteOutputDto, {
    name: ProcessedSearchBySubdivisionDeleteDto.metaname, 
    description: ProcessedSearchBySubdivisionDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchBySubdivisionDeleteInputDto }) 
    input: ProcessedSearchBySubdivisionDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchBySubdivisionDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchBySubdivisionDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchBySubdivisionRestoreOutputDto, {
    name: ProcessedSearchBySubdivisionRestoreDto.metaname,
    description: ProcessedSearchBySubdivisionRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchBySubdivisionRestoreInputDto }) 
    input: ProcessedSearchBySubdivisionRestoreInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchBySubdivisionRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchBySubdivisionRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchBySubdivisionUpsertOutputDto], {
    name:  `${ProcessedSearchBySubdivisionUpsertDto.metaname}`, 
    description: `${ProcessedSearchBySubdivisionUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [ProcessedSearchBySubdivisionUpsertInputDto]}) 
    input: ProcessedSearchBySubdivisionUpsertInputDto | ProcessedSearchBySubdivisionUpsertInputDto[],
    
    @GraphQLBodyContext() selection: ProcessedSearchBySubdivisionUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchBySubdivisionUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchBySubdivisionUpsertInputDto>(input, ProcessedSearchBySubdivisionUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchBySubdivisionSoftRemoveOutputDto, {
    name: ProcessedSearchBySubdivisionSoftRemoveDto.metaname, 
    description: ProcessedSearchBySubdivisionSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchBySubdivisionSoftRemoveInputDto }) 
    input: ProcessedSearchBySubdivisionSoftRemoveInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchBySubdivisionSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchBySubdivisionSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchBySubdivisionRemoveOutputDto, {
    name: ProcessedSearchBySubdivisionRemoveDto.metaname, 
    description: ProcessedSearchBySubdivisionRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchBySubdivisionRemoveInputDto }) 
    input: ProcessedSearchBySubdivisionRemoveInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchBySubdivisionRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchBySubdivisionRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchBySubdivisionRecoverOutputDto, {
    name: ProcessedSearchBySubdivisionRecoverDto.metaname,
    description: ProcessedSearchBySubdivisionRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchBySubdivisionRecoverInputDto }) 
    input: ProcessedSearchBySubdivisionRecoverInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchBySubdivisionRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchBySubdivisionRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }



}