import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { NewsLetterTrackLogService } from './track.log.service';
import { NewsLetterTrackLogEntity } from './entities/track.log.entity';
import { NewsLetterTrackLogFactory } from './track.log.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { NewsLetterTrackLogUploadOutputDto, NewsLetterTrackLogUploadDto, NewsLetterTrackLogUploadInputDto, NewsLetterTrackLogUploadDeleteOutputDto, NewsLetterTrackLogUploadDeleteDto, NewsLetterTrackLogUploadDeleteInputDto, NewsLetterTrackLogCreateDto, NewsLetterTrackLogCreateInputDto, NewsLetterTrackLogCreateOutputDto, NewsLetterTrackLogDeleteDto, NewsLetterTrackLogDeleteInputDto, NewsLetterTrackLogDeleteOutputDto, NewsLetterTrackLogFindDto, NewsLetterTrackLogFindInputDto, NewsLetterTrackLogFindOneByIdDto, NewsLetterTrackLogFindOneByIdInputDto, NewsLetterTrackLogFindOutputDto, NewsLetterTrackLogFindOutputRowsDto, NewsLetterTrackLogRecoverDto, NewsLetterTrackLogRecoverInputDto, NewsLetterTrackLogRecoverOutputDto, NewsLetterTrackLogRemoveDto, NewsLetterTrackLogRemoveInputDto, NewsLetterTrackLogRemoveOutputDto, NewsLetterTrackLogRestoreDto, NewsLetterTrackLogRestoreInputDto, NewsLetterTrackLogRestoreOutputDto, NewsLetterTrackLogSoftDeleteDto, NewsLetterTrackLogSoftDeleteInputDto, NewsLetterTrackLogSoftDeleteInputWhereDto, NewsLetterTrackLogSoftDeleteOutputDto, NewsLetterTrackLogSoftRemoveDto, NewsLetterTrackLogSoftRemoveInputDto, NewsLetterTrackLogSoftRemoveOutputDto, NewsLetterTrackLogUpdateDto, NewsLetterTrackLogUpdateInputDto, NewsLetterTrackLogUpdateInputSetsDto, NewsLetterTrackLogUpdateOutputDto, NewsLetterTrackLogUpsertDto, NewsLetterTrackLogUpsertInputDto, NewsLetterTrackLogUpsertOutputDto } from './dto/track.log.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => NewsLetterTrackLogEntity)
export class NewsLetterTrackLogResolver
{
  constructor(
    protected readonly factory: NewsLetterTrackLogFactory,
    protected readonly service: NewsLetterTrackLogService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [NewsLetterTrackLogUploadOutput], { name:  `${NewsLetterTrackLogUploadDto.metaname}`, description: `${NewsLetterTrackLogUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => NewsLetterTrackLogUploadInputDto }) 
    input: NewsLetterTrackLogUploadInputDto,

    @GraphQLBodyContext() selection: NewsLetterTrackLogUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterTrackLogUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [NewsLetterTrackLogUploadDeleteOutput], { name:  `${NewsLetterTrackLogUploadDeleteDto.metaname}`, description: `${NewsLetterTrackLogUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [NewsLetterTrackLogUploadDeleteInputDto] }) 
    input: NewsLetterTrackLogUploadDeleteInputDto | NewsLetterTrackLogUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: NewsLetterTrackLogUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterTrackLogUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [NewsLetterTrackLogCreateOutputDto], {
    name:  `${NewsLetterTrackLogCreateDto.metaname}`, 
    description: `${NewsLetterTrackLogCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [NewsLetterTrackLogCreateInputDto] }) 
    input: NewsLetterTrackLogCreateInputDto | NewsLetterTrackLogCreateInputDto[],

    @GraphQLBodyContext() selection: NewsLetterTrackLogCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterTrackLogCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<NewsLetterTrackLogCreateInputDto>(input, NewsLetterTrackLogCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => NewsLetterTrackLogFindOutputDto, {
    name: NewsLetterTrackLogFindDto.metaname,
    description: NewsLetterTrackLogFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => NewsLetterTrackLogFindInputDto}) 
    filter: NewsLetterTrackLogFindInputDto,

    @GraphQLBodyContext() selection: NewsLetterTrackLogFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<NewsLetterTrackLogFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => NewsLetterTrackLogEntity, {
    name: NewsLetterTrackLogFindOneByIdDto.metaname, 
    description: NewsLetterTrackLogFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterTrackLogFindOneByIdInputDto }) 
    input: NewsLetterTrackLogFindOneByIdInputDto,

    @GraphQLBodyContext() selection: NewsLetterTrackLogEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<NewsLetterTrackLogEntity> {
    await this.validation.validateArrayInput<NewsLetterTrackLogFindOneByIdInputDto>([input], NewsLetterTrackLogFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => NewsLetterTrackLogUpdateOutputDto, {
    name: NewsLetterTrackLogUpdateDto.metaname, 
    description: NewsLetterTrackLogUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => NewsLetterTrackLogUpdateInputDto}) 
    input: NewsLetterTrackLogUpdateInputDto,

    @GraphQLBodyContext() selection: NewsLetterTrackLogUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterTrackLogUpdateOutputDto> {
    await this.validation.validateArrayInput<NewsLetterTrackLogUpdateInputSetsDto>([input.sets], NewsLetterTrackLogUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => NewsLetterTrackLogSoftDeleteOutputDto, {
    name: NewsLetterTrackLogSoftDeleteDto.metaname, 
    description: NewsLetterTrackLogSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterTrackLogSoftDeleteInputDto }) 
    input: NewsLetterTrackLogSoftDeleteInputDto,

    @GraphQLBodyContext() selection: NewsLetterTrackLogSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterTrackLogSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => NewsLetterTrackLogDeleteOutputDto, {
    name: NewsLetterTrackLogDeleteDto.metaname, 
    description: NewsLetterTrackLogDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterTrackLogDeleteInputDto }) 
    input: NewsLetterTrackLogDeleteInputDto,

    @GraphQLBodyContext() selection: NewsLetterTrackLogDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterTrackLogDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => NewsLetterTrackLogRestoreOutputDto, {
    name: NewsLetterTrackLogRestoreDto.metaname,
    description: NewsLetterTrackLogRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterTrackLogRestoreInputDto }) 
    input: NewsLetterTrackLogRestoreInputDto,
    
    @GraphQLBodyContext() selection: NewsLetterTrackLogRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterTrackLogRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [NewsLetterTrackLogUpsertOutputDto], {
    name:  `${NewsLetterTrackLogUpsertDto.metaname}`, 
    description: `${NewsLetterTrackLogUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [NewsLetterTrackLogUpsertInputDto]}) 
    input: NewsLetterTrackLogUpsertInputDto | NewsLetterTrackLogUpsertInputDto[],
    
    @GraphQLBodyContext() selection: NewsLetterTrackLogUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterTrackLogUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<NewsLetterTrackLogUpsertInputDto>(input, NewsLetterTrackLogUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => NewsLetterTrackLogSoftRemoveOutputDto, {
    name: NewsLetterTrackLogSoftRemoveDto.metaname, 
    description: NewsLetterTrackLogSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterTrackLogSoftRemoveInputDto }) 
    input: NewsLetterTrackLogSoftRemoveInputDto,

    @GraphQLBodyContext() selection: NewsLetterTrackLogSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterTrackLogSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => NewsLetterTrackLogRemoveOutputDto, {
    name: NewsLetterTrackLogRemoveDto.metaname, 
    description: NewsLetterTrackLogRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterTrackLogRemoveInputDto }) 
    input: NewsLetterTrackLogRemoveInputDto,
    
    @GraphQLBodyContext() selection: NewsLetterTrackLogRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterTrackLogRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => NewsLetterTrackLogRecoverOutputDto, {
    name: NewsLetterTrackLogRecoverDto.metaname,
    description: NewsLetterTrackLogRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterTrackLogRecoverInputDto }) 
    input: NewsLetterTrackLogRecoverInputDto,

    @GraphQLBodyContext() selection: NewsLetterTrackLogRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterTrackLogRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: NewsLetterTrackLogEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<NewsLetterTrackLogEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}