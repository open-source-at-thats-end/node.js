import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { NewsLetterCategoryService } from './category.service';
import { NewsLetterCategoryEntity } from './entities/category.entity';
import { NewsLetterCategoryFactory } from './category.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { NewsLetterCategoryUploadOutputDto, NewsLetterCategoryUploadDto, NewsLetterCategoryUploadInputDto, NewsLetterCategoryUploadDeleteOutputDto, NewsLetterCategoryUploadDeleteDto, NewsLetterCategoryUploadDeleteInputDto, NewsLetterCategoryCreateDto, NewsLetterCategoryCreateInputDto, NewsLetterCategoryCreateOutputDto, NewsLetterCategoryDeleteDto, NewsLetterCategoryDeleteInputDto, NewsLetterCategoryDeleteOutputDto, NewsLetterCategoryFindDto, NewsLetterCategoryFindInputDto, NewsLetterCategoryFindOneByIdDto, NewsLetterCategoryFindOneByIdInputDto, NewsLetterCategoryFindOutputDto, NewsLetterCategoryFindOutputRowsDto, NewsLetterCategoryRecoverDto, NewsLetterCategoryRecoverInputDto, NewsLetterCategoryRecoverOutputDto, NewsLetterCategoryRemoveDto, NewsLetterCategoryRemoveInputDto, NewsLetterCategoryRemoveOutputDto, NewsLetterCategoryRestoreDto, NewsLetterCategoryRestoreInputDto, NewsLetterCategoryRestoreOutputDto, NewsLetterCategorySoftDeleteDto, NewsLetterCategorySoftDeleteInputDto, NewsLetterCategorySoftDeleteInputWhereDto, NewsLetterCategorySoftDeleteOutputDto, NewsLetterCategorySoftRemoveDto, NewsLetterCategorySoftRemoveInputDto, NewsLetterCategorySoftRemoveOutputDto, NewsLetterCategoryUpdateDto, NewsLetterCategoryUpdateInputDto, NewsLetterCategoryUpdateInputSetsDto, NewsLetterCategoryUpdateOutputDto, NewsLetterCategoryUpsertDto, NewsLetterCategoryUpsertInputDto, NewsLetterCategoryUpsertOutputDto } from './dto/category.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => NewsLetterCategoryEntity)
export class NewsLetterCategoryResolver
{
  constructor(
    protected readonly factory: NewsLetterCategoryFactory,
    protected readonly service: NewsLetterCategoryService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [NewsLetterCategoryUploadOutput], { name:  `${NewsLetterCategoryUploadDto.metaname}`, description: `${NewsLetterCategoryUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => NewsLetterCategoryUploadInputDto }) 
    input: NewsLetterCategoryUploadInputDto,

    @GraphQLBodyContext() selection: NewsLetterCategoryUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterCategoryUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [NewsLetterCategoryUploadDeleteOutput], { name:  `${NewsLetterCategoryUploadDeleteDto.metaname}`, description: `${NewsLetterCategoryUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [NewsLetterCategoryUploadDeleteInputDto] }) 
    input: NewsLetterCategoryUploadDeleteInputDto | NewsLetterCategoryUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: NewsLetterCategoryUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterCategoryUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [NewsLetterCategoryCreateOutputDto], {
    name:  `${NewsLetterCategoryCreateDto.metaname}`, 
    description: `${NewsLetterCategoryCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [NewsLetterCategoryCreateInputDto] }) 
    input: NewsLetterCategoryCreateInputDto | NewsLetterCategoryCreateInputDto[],

    @GraphQLBodyContext() selection: NewsLetterCategoryCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterCategoryCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<NewsLetterCategoryCreateInputDto>(input, NewsLetterCategoryCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => NewsLetterCategoryFindOutputDto, {
    name: NewsLetterCategoryFindDto.metaname,
    description: NewsLetterCategoryFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => NewsLetterCategoryFindInputDto}) 
    filter: NewsLetterCategoryFindInputDto,

    @GraphQLBodyContext() selection: NewsLetterCategoryFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<NewsLetterCategoryFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => NewsLetterCategoryEntity, {
    name: NewsLetterCategoryFindOneByIdDto.metaname, 
    description: NewsLetterCategoryFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterCategoryFindOneByIdInputDto }) 
    input: NewsLetterCategoryFindOneByIdInputDto,

    @GraphQLBodyContext() selection: NewsLetterCategoryEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<NewsLetterCategoryEntity> {
    await this.validation.validateArrayInput<NewsLetterCategoryFindOneByIdInputDto>([input], NewsLetterCategoryFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => NewsLetterCategoryUpdateOutputDto, {
    name: NewsLetterCategoryUpdateDto.metaname, 
    description: NewsLetterCategoryUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => NewsLetterCategoryUpdateInputDto}) 
    input: NewsLetterCategoryUpdateInputDto,

    @GraphQLBodyContext() selection: NewsLetterCategoryUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterCategoryUpdateOutputDto> {
    await this.validation.validateArrayInput<NewsLetterCategoryUpdateInputSetsDto>([input.sets], NewsLetterCategoryUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => NewsLetterCategorySoftDeleteOutputDto, {
    name: NewsLetterCategorySoftDeleteDto.metaname, 
    description: NewsLetterCategorySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterCategorySoftDeleteInputDto }) 
    input: NewsLetterCategorySoftDeleteInputDto,

    @GraphQLBodyContext() selection: NewsLetterCategorySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterCategorySoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => NewsLetterCategoryDeleteOutputDto, {
    name: NewsLetterCategoryDeleteDto.metaname, 
    description: NewsLetterCategoryDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterCategoryDeleteInputDto }) 
    input: NewsLetterCategoryDeleteInputDto,

    @GraphQLBodyContext() selection: NewsLetterCategoryDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterCategoryDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => NewsLetterCategoryRestoreOutputDto, {
    name: NewsLetterCategoryRestoreDto.metaname,
    description: NewsLetterCategoryRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterCategoryRestoreInputDto }) 
    input: NewsLetterCategoryRestoreInputDto,
    
    @GraphQLBodyContext() selection: NewsLetterCategoryRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterCategoryRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [NewsLetterCategoryUpsertOutputDto], {
    name:  `${NewsLetterCategoryUpsertDto.metaname}`, 
    description: `${NewsLetterCategoryUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [NewsLetterCategoryUpsertInputDto]}) 
    input: NewsLetterCategoryUpsertInputDto | NewsLetterCategoryUpsertInputDto[],
    
    @GraphQLBodyContext() selection: NewsLetterCategoryUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterCategoryUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<NewsLetterCategoryUpsertInputDto>(input, NewsLetterCategoryUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => NewsLetterCategorySoftRemoveOutputDto, {
    name: NewsLetterCategorySoftRemoveDto.metaname, 
    description: NewsLetterCategorySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterCategorySoftRemoveInputDto }) 
    input: NewsLetterCategorySoftRemoveInputDto,

    @GraphQLBodyContext() selection: NewsLetterCategorySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterCategorySoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => NewsLetterCategoryRemoveOutputDto, {
    name: NewsLetterCategoryRemoveDto.metaname, 
    description: NewsLetterCategoryRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterCategoryRemoveInputDto }) 
    input: NewsLetterCategoryRemoveInputDto,
    
    @GraphQLBodyContext() selection: NewsLetterCategoryRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterCategoryRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => NewsLetterCategoryRecoverOutputDto, {
    name: NewsLetterCategoryRecoverDto.metaname,
    description: NewsLetterCategoryRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterCategoryRecoverInputDto }) 
    input: NewsLetterCategoryRecoverInputDto,

    @GraphQLBodyContext() selection: NewsLetterCategoryRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterCategoryRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: NewsLetterCategoryEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<NewsLetterCategoryEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}