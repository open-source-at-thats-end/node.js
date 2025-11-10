import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { NewsLetterService } from './newsletter.service';
import { NewsLetterEntity } from './entities/newsletter.entity';
import { NewsLetterFactory } from './newsletter.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { NewsLetterUploadOutputDto, NewsLetterUploadDto, NewsLetterUploadInputDto, NewsLetterUploadDeleteOutputDto, NewsLetterUploadDeleteDto, NewsLetterUploadDeleteInputDto, NewsLetterCreateDto, NewsLetterCreateInputDto, NewsLetterCreateOutputDto, NewsLetterDeleteDto, NewsLetterDeleteInputDto, NewsLetterDeleteOutputDto, NewsLetterFindDto, NewsLetterFindInputDto, NewsLetterFindOneByIdDto, NewsLetterFindOneByIdInputDto, NewsLetterFindOutputDto, NewsLetterFindOutputRowsDto, NewsLetterRecoverDto, NewsLetterRecoverInputDto, NewsLetterRecoverOutputDto, NewsLetterRemoveDto, NewsLetterRemoveInputDto, NewsLetterRemoveOutputDto, NewsLetterRestoreDto, NewsLetterRestoreInputDto, NewsLetterRestoreOutputDto, NewsLetterSoftDeleteDto, NewsLetterSoftDeleteInputDto, NewsLetterSoftDeleteInputWhereDto, NewsLetterSoftDeleteOutputDto, NewsLetterSoftRemoveDto, NewsLetterSoftRemoveInputDto, NewsLetterSoftRemoveOutputDto, NewsLetterUpdateDto, NewsLetterUpdateInputDto, NewsLetterUpdateInputSetsDto, NewsLetterUpdateOutputDto, NewsLetterUpsertDto, NewsLetterUpsertInputDto, NewsLetterUpsertOutputDto } from './dto/newsletter.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => NewsLetterEntity)
export class NewsLetterResolver
{
  constructor(
    protected readonly factory: NewsLetterFactory,
    protected readonly service: NewsLetterService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [NewsLetterUploadOutput], { name:  `${NewsLetterUploadDto.metaname}`, description: `${NewsLetterUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => NewsLetterUploadInputDto }) 
    input: NewsLetterUploadInputDto,

    @GraphQLBodyContext() selection: NewsLetterUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [NewsLetterUploadDeleteOutput], { name:  `${NewsLetterUploadDeleteDto.metaname}`, description: `${NewsLetterUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [NewsLetterUploadDeleteInputDto] }) 
    input: NewsLetterUploadDeleteInputDto | NewsLetterUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: NewsLetterUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [NewsLetterCreateOutputDto], {
    name:  `${NewsLetterCreateDto.metaname}`, 
    description: `${NewsLetterCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [NewsLetterCreateInputDto] }) 
    input: NewsLetterCreateInputDto | NewsLetterCreateInputDto[],

    @GraphQLBodyContext() selection: NewsLetterCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<NewsLetterCreateInputDto>(input, NewsLetterCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => NewsLetterFindOutputDto, {
    name: NewsLetterFindDto.metaname,
    description: NewsLetterFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => NewsLetterFindInputDto}) 
    filter: NewsLetterFindInputDto,

    @GraphQLBodyContext() selection: NewsLetterFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<NewsLetterFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => NewsLetterEntity, {
    name: NewsLetterFindOneByIdDto.metaname, 
    description: NewsLetterFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterFindOneByIdInputDto }) 
    input: NewsLetterFindOneByIdInputDto,

    @GraphQLBodyContext() selection: NewsLetterEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<NewsLetterEntity> {
    await this.validation.validateArrayInput<NewsLetterFindOneByIdInputDto>([input], NewsLetterFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => NewsLetterUpdateOutputDto, {
    name: NewsLetterUpdateDto.metaname, 
    description: NewsLetterUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => NewsLetterUpdateInputDto}) 
    input: NewsLetterUpdateInputDto,

    @GraphQLBodyContext() selection: NewsLetterUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterUpdateOutputDto> {
    await this.validation.validateArrayInput<NewsLetterUpdateInputSetsDto>([input.sets], NewsLetterUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => NewsLetterSoftDeleteOutputDto, {
    name: NewsLetterSoftDeleteDto.metaname, 
    description: NewsLetterSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterSoftDeleteInputDto }) 
    input: NewsLetterSoftDeleteInputDto,

    @GraphQLBodyContext() selection: NewsLetterSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => NewsLetterDeleteOutputDto, {
    name: NewsLetterDeleteDto.metaname, 
    description: NewsLetterDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterDeleteInputDto }) 
    input: NewsLetterDeleteInputDto,

    @GraphQLBodyContext() selection: NewsLetterDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => NewsLetterRestoreOutputDto, {
    name: NewsLetterRestoreDto.metaname,
    description: NewsLetterRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterRestoreInputDto }) 
    input: NewsLetterRestoreInputDto,
    
    @GraphQLBodyContext() selection: NewsLetterRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [NewsLetterUpsertOutputDto], {
    name:  `${NewsLetterUpsertDto.metaname}`, 
    description: `${NewsLetterUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [NewsLetterUpsertInputDto]}) 
    input: NewsLetterUpsertInputDto | NewsLetterUpsertInputDto[],
    
    @GraphQLBodyContext() selection: NewsLetterUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<NewsLetterUpsertInputDto>(input, NewsLetterUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => NewsLetterSoftRemoveOutputDto, {
    name: NewsLetterSoftRemoveDto.metaname, 
    description: NewsLetterSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterSoftRemoveInputDto }) 
    input: NewsLetterSoftRemoveInputDto,

    @GraphQLBodyContext() selection: NewsLetterSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => NewsLetterRemoveOutputDto, {
    name: NewsLetterRemoveDto.metaname, 
    description: NewsLetterRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterRemoveInputDto }) 
    input: NewsLetterRemoveInputDto,
    
    @GraphQLBodyContext() selection: NewsLetterRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => NewsLetterRecoverOutputDto, {
    name: NewsLetterRecoverDto.metaname,
    description: NewsLetterRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterRecoverInputDto }) 
    input: NewsLetterRecoverInputDto,

    @GraphQLBodyContext() selection: NewsLetterRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: NewsLetterEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<NewsLetterEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}