import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { ProcessedSearchByCityService } from './search.by.city.service';
import { ProcessedSearchByCityEntity } from './entities/search.by.city.entity';
import { ProcessedSearchByCityFactory } from './search.by.city.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { ProcessedSearchByCityCreateDto, ProcessedSearchByCityCreateInputDto, ProcessedSearchByCityCreateOutputDto, ProcessedSearchByCityDeleteDto, ProcessedSearchByCityDeleteInputDto, ProcessedSearchByCityDeleteOutputDto, ProcessedSearchByCityFindDto, ProcessedSearchByCityFindInputDto, ProcessedSearchByCityFindOneByIdDto, ProcessedSearchByCityFindOneByIdInputDto, ProcessedSearchByCityFindOutputDto, ProcessedSearchByCityFindOutputRowsDto, ProcessedSearchByCityRecoverDto, ProcessedSearchByCityRecoverInputDto, ProcessedSearchByCityRecoverOutputDto, ProcessedSearchByCityRemoveDto, ProcessedSearchByCityRemoveInputDto, ProcessedSearchByCityRemoveOutputDto, ProcessedSearchByCityRestoreDto, ProcessedSearchByCityRestoreInputDto, ProcessedSearchByCityRestoreOutputDto, ProcessedSearchByCitySoftDeleteDto, ProcessedSearchByCitySoftDeleteInputDto, ProcessedSearchByCitySoftDeleteInputWhereDto, ProcessedSearchByCitySoftDeleteOutputDto, ProcessedSearchByCitySoftRemoveDto, ProcessedSearchByCitySoftRemoveInputDto, ProcessedSearchByCitySoftRemoveOutputDto, ProcessedSearchByCityUpdateDto, ProcessedSearchByCityUpdateInputDto, ProcessedSearchByCityUpdateInputSetsDto, ProcessedSearchByCityUpdateOutputDto, ProcessedSearchByCityUploadDeleteDto, ProcessedSearchByCityUploadDeleteInputDto, ProcessedSearchByCityUploadDeleteOutputDto, ProcessedSearchByCityUploadDto, ProcessedSearchByCityUploadInputDto, ProcessedSearchByCityUploadOutputDto, ProcessedSearchByCityUpsertDto, ProcessedSearchByCityUpsertInputDto, ProcessedSearchByCityUpsertOutputDto } from './dto/search.by.city.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => ProcessedSearchByCityEntity)
export class ProcessedSearchByCityResolver
{
  constructor(
    protected readonly factory: ProcessedSearchByCityFactory,
    protected readonly service: ProcessedSearchByCityService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [ProcessedSearchByCityUploadOutput], { name:  `${ProcessedSearchByCityUploadDto.metaname}`, description: `${ProcessedSearchByCityUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => ProcessedSearchByCityUploadInputDto }) 
    input: ProcessedSearchByCityUploadInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCityUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByCityUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [ProcessedSearchByCityUploadDeleteOutput], { name:  `${ProcessedSearchByCityUploadDeleteDto.metaname}`, description: `${ProcessedSearchByCityUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchByCityUploadDeleteInputDto] }) 
    input: ProcessedSearchByCityUploadDeleteInputDto | ProcessedSearchByCityUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchByCityUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByCityUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchByCityCreateOutputDto], {
    name:  `${ProcessedSearchByCityCreateDto.metaname}`, 
    description: `${ProcessedSearchByCityCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchByCityCreateInputDto] }) 
    input: ProcessedSearchByCityCreateInputDto | ProcessedSearchByCityCreateInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchByCityCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByCityCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchByCityCreateInputDto>(input, ProcessedSearchByCityCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => ProcessedSearchByCityFindOutputDto, {
    name: ProcessedSearchByCityFindDto.metaname,
    description: ProcessedSearchByCityFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => ProcessedSearchByCityFindInputDto}) 
    filter: ProcessedSearchByCityFindInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCityFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchByCityFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => ProcessedSearchByCityEntity, {
    name: ProcessedSearchByCityFindOneByIdDto.metaname, 
    description: ProcessedSearchByCityFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByCityFindOneByIdInputDto }) 
    input: ProcessedSearchByCityFindOneByIdInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCityEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchByCityEntity> {
    await this.validation.validateArrayInput<ProcessedSearchByCityFindOneByIdInputDto>([input], ProcessedSearchByCityFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByCityUpdateOutputDto, {
    name: ProcessedSearchByCityUpdateDto.metaname, 
    description: ProcessedSearchByCityUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => ProcessedSearchByCityUpdateInputDto}) 
    input: ProcessedSearchByCityUpdateInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCityUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCityUpdateOutputDto> {
    await this.validation.validateArrayInput<ProcessedSearchByCityUpdateInputSetsDto>([input.sets], ProcessedSearchByCityUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByCitySoftDeleteOutputDto, {
    name: ProcessedSearchByCitySoftDeleteDto.metaname, 
    description: ProcessedSearchByCitySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByCitySoftDeleteInputDto }) 
    input: ProcessedSearchByCitySoftDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCitySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCitySoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByCityDeleteOutputDto, {
    name: ProcessedSearchByCityDeleteDto.metaname, 
    description: ProcessedSearchByCityDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByCityDeleteInputDto }) 
    input: ProcessedSearchByCityDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCityDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCityDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByCityRestoreOutputDto, {
    name: ProcessedSearchByCityRestoreDto.metaname,
    description: ProcessedSearchByCityRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByCityRestoreInputDto }) 
    input: ProcessedSearchByCityRestoreInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchByCityRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCityRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchByCityUpsertOutputDto], {
    name:  `${ProcessedSearchByCityUpsertDto.metaname}`, 
    description: `${ProcessedSearchByCityUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [ProcessedSearchByCityUpsertInputDto]}) 
    input: ProcessedSearchByCityUpsertInputDto | ProcessedSearchByCityUpsertInputDto[],
    
    @GraphQLBodyContext() selection: ProcessedSearchByCityUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCityUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchByCityUpsertInputDto>(input, ProcessedSearchByCityUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByCitySoftRemoveOutputDto, {
    name: ProcessedSearchByCitySoftRemoveDto.metaname, 
    description: ProcessedSearchByCitySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByCitySoftRemoveInputDto }) 
    input: ProcessedSearchByCitySoftRemoveInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCitySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCitySoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByCityRemoveOutputDto, {
    name: ProcessedSearchByCityRemoveDto.metaname, 
    description: ProcessedSearchByCityRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByCityRemoveInputDto }) 
    input: ProcessedSearchByCityRemoveInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchByCityRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCityRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByCityRecoverOutputDto, {
    name: ProcessedSearchByCityRecoverDto.metaname,
    description: ProcessedSearchByCityRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByCityRecoverInputDto }) 
    input: ProcessedSearchByCityRecoverInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByCityRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByCityRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }



}