import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { ProcessedSearchByCountyService } from './search.by.county.service';
import { ProcessedSearchByCountyEntity } from './entities/search.by.county.entity';
import { ProcessedSearchByCountyFactory } from './search.by.county.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { ProcessedSearchByCountyCreateDto, ProcessedSearchByCountyCreateInputDto, ProcessedSearchByCountyCreateOutputDto, ProcessedSearchByCountyDeleteDto, ProcessedSearchByCountyDeleteInputDto, ProcessedSearchByCountyDeleteOutputDto, ProcessedSearchByCountyFindDto, ProcessedSearchByCountyFindInputDto, ProcessedSearchByCountyFindOneByIdDto, ProcessedSearchByCountyFindOneByIdInputDto, ProcessedSearchByCountyFindOutputDto, ProcessedSearchByCountyFindOutputRowsDto, ProcessedSearchByCountyRecoverDto, ProcessedSearchByCountyRecoverInputDto, ProcessedSearchByCountyRecoverOutputDto, ProcessedSearchByCountyRemoveDto, ProcessedSearchByCountyRemoveInputDto, ProcessedSearchByCountyRemoveOutputDto, ProcessedSearchByCountyRestoreDto, ProcessedSearchByCountyRestoreInputDto, ProcessedSearchByCountyRestoreOutputDto, ProcessedSearchByCountySoftDeleteDto, ProcessedSearchByCountySoftDeleteInputDto, ProcessedSearchByCountySoftDeleteInputWhereDto, ProcessedSearchByCountySoftDeleteOutputDto, ProcessedSearchByCountySoftRemoveDto, ProcessedSearchByCountySoftRemoveInputDto, ProcessedSearchByCountySoftRemoveOutputDto, ProcessedSearchByCountyUpdateDto, ProcessedSearchByCountyUpdateInputDto, ProcessedSearchByCountyUpdateInputSetsDto, ProcessedSearchByCountyUpdateOutputDto, ProcessedSearchByCountyUploadDeleteDto, ProcessedSearchByCountyUploadDeleteInputDto, ProcessedSearchByCountyUploadDeleteOutputDto, ProcessedSearchByCountyUploadDto, ProcessedSearchByCountyUploadInputDto, ProcessedSearchByCountyUploadOutputDto, ProcessedSearchByCountyUpsertDto, ProcessedSearchByCountyUpsertInputDto, ProcessedSearchByCountyUpsertOutputDto } from './dto/search.by.county.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => ProcessedSearchByCountyEntity)
export class ProcessedSearchByCountyResolver
{
  constructor(
    protected readonly factory: ProcessedSearchByCountyFactory,
    protected readonly service: ProcessedSearchByCountyService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [ProcessedSearchByCountyUploadOutput], { name:  `${ProcessedSearchByCountyUploadDto.metaname}`, description: `${ProcessedSearchByCountyUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => ProcessedSearchByCountyUploadInputDto }) 
    input: ProcessedSearchByCountyUploadInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCountyUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByCountyUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [ProcessedSearchByCountyUploadDeleteOutput], { name:  `${ProcessedSearchByCountyUploadDeleteDto.metaname}`, description: `${ProcessedSearchByCountyUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchByCountyUploadDeleteInputDto] }) 
    input: ProcessedSearchByCountyUploadDeleteInputDto | ProcessedSearchByCountyUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchByCountyUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByCountyUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchByCountyCreateOutputDto], {
    name:  `${ProcessedSearchByCountyCreateDto.metaname}`, 
    description: `${ProcessedSearchByCountyCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchByCountyCreateInputDto] }) 
    input: ProcessedSearchByCountyCreateInputDto | ProcessedSearchByCountyCreateInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchByCountyCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByCountyCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchByCountyCreateInputDto>(input, ProcessedSearchByCountyCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => ProcessedSearchByCountyFindOutputDto, {
    name: ProcessedSearchByCountyFindDto.metaname,
    description: ProcessedSearchByCountyFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => ProcessedSearchByCountyFindInputDto}) 
    filter: ProcessedSearchByCountyFindInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCountyFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchByCountyFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => ProcessedSearchByCountyEntity, {
    name: ProcessedSearchByCountyFindOneByIdDto.metaname, 
    description: ProcessedSearchByCountyFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByCountyFindOneByIdInputDto }) 
    input: ProcessedSearchByCountyFindOneByIdInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCountyEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchByCountyEntity> {
    await this.validation.validateArrayInput<ProcessedSearchByCountyFindOneByIdInputDto>([input], ProcessedSearchByCountyFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByCountyUpdateOutputDto, {
    name: ProcessedSearchByCountyUpdateDto.metaname, 
    description: ProcessedSearchByCountyUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => ProcessedSearchByCountyUpdateInputDto}) 
    input: ProcessedSearchByCountyUpdateInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCountyUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCountyUpdateOutputDto> {
    await this.validation.validateArrayInput<ProcessedSearchByCountyUpdateInputSetsDto>([input.sets], ProcessedSearchByCountyUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByCountySoftDeleteOutputDto, {
    name: ProcessedSearchByCountySoftDeleteDto.metaname, 
    description: ProcessedSearchByCountySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByCountySoftDeleteInputDto }) 
    input: ProcessedSearchByCountySoftDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCountySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCountySoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByCountyDeleteOutputDto, {
    name: ProcessedSearchByCountyDeleteDto.metaname, 
    description: ProcessedSearchByCountyDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByCountyDeleteInputDto }) 
    input: ProcessedSearchByCountyDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCountyDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCountyDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByCountyRestoreOutputDto, {
    name: ProcessedSearchByCountyRestoreDto.metaname,
    description: ProcessedSearchByCountyRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByCountyRestoreInputDto }) 
    input: ProcessedSearchByCountyRestoreInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchByCountyRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCountyRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchByCountyUpsertOutputDto], {
    name:  `${ProcessedSearchByCountyUpsertDto.metaname}`, 
    description: `${ProcessedSearchByCountyUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [ProcessedSearchByCountyUpsertInputDto]}) 
    input: ProcessedSearchByCountyUpsertInputDto | ProcessedSearchByCountyUpsertInputDto[],
    
    @GraphQLBodyContext() selection: ProcessedSearchByCountyUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCountyUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchByCountyUpsertInputDto>(input, ProcessedSearchByCountyUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByCountySoftRemoveOutputDto, {
    name: ProcessedSearchByCountySoftRemoveDto.metaname, 
    description: ProcessedSearchByCountySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByCountySoftRemoveInputDto }) 
    input: ProcessedSearchByCountySoftRemoveInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCountySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCountySoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByCountyRemoveOutputDto, {
    name: ProcessedSearchByCountyRemoveDto.metaname, 
    description: ProcessedSearchByCountyRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByCountyRemoveInputDto }) 
    input: ProcessedSearchByCountyRemoveInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchByCountyRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCountyRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByCountyRecoverOutputDto, {
    name: ProcessedSearchByCountyRecoverDto.metaname,
    description: ProcessedSearchByCountyRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByCountyRecoverInputDto }) 
    input: ProcessedSearchByCountyRecoverInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCountyRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCountyRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }


}