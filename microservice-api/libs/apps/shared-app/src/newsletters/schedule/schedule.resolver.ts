import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { NewsLetterScheduleService } from './schedule.service';
import { NewsLetterScheduleEntity } from './entities/schedule.entity';
import { NewsLetterScheduleFactory } from './schedule.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { NewsLetterScheduleUploadOutputDto, NewsLetterScheduleUploadDto, NewsLetterScheduleUploadInputDto, NewsLetterScheduleUploadDeleteOutputDto, NewsLetterScheduleUploadDeleteDto, NewsLetterScheduleUploadDeleteInputDto, NewsLetterScheduleCreateDto, NewsLetterScheduleCreateInputDto, NewsLetterScheduleCreateOutputDto, NewsLetterScheduleDeleteDto, NewsLetterScheduleDeleteInputDto, NewsLetterScheduleDeleteOutputDto, NewsLetterScheduleFindDto, NewsLetterScheduleFindInputDto, NewsLetterScheduleFindOneByIdDto, NewsLetterScheduleFindOneByIdInputDto, NewsLetterScheduleFindOutputDto, NewsLetterScheduleFindOutputRowsDto, NewsLetterScheduleRecoverDto, NewsLetterScheduleRecoverInputDto, NewsLetterScheduleRecoverOutputDto, NewsLetterScheduleRemoveDto, NewsLetterScheduleRemoveInputDto, NewsLetterScheduleRemoveOutputDto, NewsLetterScheduleRestoreDto, NewsLetterScheduleRestoreInputDto, NewsLetterScheduleRestoreOutputDto, NewsLetterScheduleSoftDeleteDto, NewsLetterScheduleSoftDeleteInputDto, NewsLetterScheduleSoftDeleteInputWhereDto, NewsLetterScheduleSoftDeleteOutputDto, NewsLetterScheduleSoftRemoveDto, NewsLetterScheduleSoftRemoveInputDto, NewsLetterScheduleSoftRemoveOutputDto, NewsLetterScheduleUpdateDto, NewsLetterScheduleUpdateInputDto, NewsLetterScheduleUpdateInputSetsDto, NewsLetterScheduleUpdateOutputDto, NewsLetterScheduleUpsertDto, NewsLetterScheduleUpsertInputDto, NewsLetterScheduleUpsertOutputDto } from './dto/schedule.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => NewsLetterScheduleEntity)
export class NewsLetterScheduleResolver
{
  constructor(
    protected readonly factory: NewsLetterScheduleFactory,
    protected readonly service: NewsLetterScheduleService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [NewsLetterScheduleUploadOutput], { name:  `${NewsLetterScheduleUploadDto.metaname}`, description: `${NewsLetterScheduleUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => NewsLetterScheduleUploadInputDto }) 
    input: NewsLetterScheduleUploadInputDto,

    @GraphQLBodyContext() selection: NewsLetterScheduleUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterScheduleUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [NewsLetterScheduleUploadDeleteOutput], { name:  `${NewsLetterScheduleUploadDeleteDto.metaname}`, description: `${NewsLetterScheduleUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [NewsLetterScheduleUploadDeleteInputDto] }) 
    input: NewsLetterScheduleUploadDeleteInputDto | NewsLetterScheduleUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: NewsLetterScheduleUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterScheduleUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [NewsLetterScheduleCreateOutputDto], {
    name:  `${NewsLetterScheduleCreateDto.metaname}`, 
    description: `${NewsLetterScheduleCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [NewsLetterScheduleCreateInputDto] }) 
    input: NewsLetterScheduleCreateInputDto | NewsLetterScheduleCreateInputDto[],

    @GraphQLBodyContext() selection: NewsLetterScheduleCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterScheduleCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<NewsLetterScheduleCreateInputDto>(input, NewsLetterScheduleCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => NewsLetterScheduleFindOutputDto, {
    name: NewsLetterScheduleFindDto.metaname,
    description: NewsLetterScheduleFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => NewsLetterScheduleFindInputDto}) 
    filter: NewsLetterScheduleFindInputDto,

    @GraphQLBodyContext() selection: NewsLetterScheduleFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<NewsLetterScheduleFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => NewsLetterScheduleEntity, {
    name: NewsLetterScheduleFindOneByIdDto.metaname, 
    description: NewsLetterScheduleFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterScheduleFindOneByIdInputDto }) 
    input: NewsLetterScheduleFindOneByIdInputDto,

    @GraphQLBodyContext() selection: NewsLetterScheduleEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<NewsLetterScheduleEntity> {
    await this.validation.validateArrayInput<NewsLetterScheduleFindOneByIdInputDto>([input], NewsLetterScheduleFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => NewsLetterScheduleUpdateOutputDto, {
    name: NewsLetterScheduleUpdateDto.metaname, 
    description: NewsLetterScheduleUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => NewsLetterScheduleUpdateInputDto}) 
    input: NewsLetterScheduleUpdateInputDto,

    @GraphQLBodyContext() selection: NewsLetterScheduleUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterScheduleUpdateOutputDto> {
    await this.validation.validateArrayInput<NewsLetterScheduleUpdateInputSetsDto>([input.sets], NewsLetterScheduleUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => NewsLetterScheduleSoftDeleteOutputDto, {
    name: NewsLetterScheduleSoftDeleteDto.metaname, 
    description: NewsLetterScheduleSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterScheduleSoftDeleteInputDto }) 
    input: NewsLetterScheduleSoftDeleteInputDto,

    @GraphQLBodyContext() selection: NewsLetterScheduleSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterScheduleSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => NewsLetterScheduleDeleteOutputDto, {
    name: NewsLetterScheduleDeleteDto.metaname, 
    description: NewsLetterScheduleDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterScheduleDeleteInputDto }) 
    input: NewsLetterScheduleDeleteInputDto,

    @GraphQLBodyContext() selection: NewsLetterScheduleDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterScheduleDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => NewsLetterScheduleRestoreOutputDto, {
    name: NewsLetterScheduleRestoreDto.metaname,
    description: NewsLetterScheduleRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterScheduleRestoreInputDto }) 
    input: NewsLetterScheduleRestoreInputDto,
    
    @GraphQLBodyContext() selection: NewsLetterScheduleRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterScheduleRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [NewsLetterScheduleUpsertOutputDto], {
    name:  `${NewsLetterScheduleUpsertDto.metaname}`, 
    description: `${NewsLetterScheduleUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [NewsLetterScheduleUpsertInputDto]}) 
    input: NewsLetterScheduleUpsertInputDto | NewsLetterScheduleUpsertInputDto[],
    
    @GraphQLBodyContext() selection: NewsLetterScheduleUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterScheduleUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<NewsLetterScheduleUpsertInputDto>(input, NewsLetterScheduleUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => NewsLetterScheduleSoftRemoveOutputDto, {
    name: NewsLetterScheduleSoftRemoveDto.metaname, 
    description: NewsLetterScheduleSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterScheduleSoftRemoveInputDto }) 
    input: NewsLetterScheduleSoftRemoveInputDto,

    @GraphQLBodyContext() selection: NewsLetterScheduleSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterScheduleSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => NewsLetterScheduleRemoveOutputDto, {
    name: NewsLetterScheduleRemoveDto.metaname, 
    description: NewsLetterScheduleRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterScheduleRemoveInputDto }) 
    input: NewsLetterScheduleRemoveInputDto,
    
    @GraphQLBodyContext() selection: NewsLetterScheduleRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterScheduleRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => NewsLetterScheduleRecoverOutputDto, {
    name: NewsLetterScheduleRecoverDto.metaname,
    description: NewsLetterScheduleRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterScheduleRecoverInputDto }) 
    input: NewsLetterScheduleRecoverInputDto,

    @GraphQLBodyContext() selection: NewsLetterScheduleRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterScheduleRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: NewsLetterScheduleEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<NewsLetterScheduleEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}