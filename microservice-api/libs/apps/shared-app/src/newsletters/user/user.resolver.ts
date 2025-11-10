import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { NewsLetterUserService } from './user.service';
import { NewsLetterUserEntity } from './entities/user.entity';
import { NewsLetterUserFactory } from './user.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { NewsLetterUserUploadOutputDto, NewsLetterUserUploadDto, NewsLetterUserUploadInputDto, NewsLetterUserUploadDeleteOutputDto, NewsLetterUserUploadDeleteDto, NewsLetterUserUploadDeleteInputDto, NewsLetterUserCreateDto, NewsLetterUserCreateInputDto, NewsLetterUserCreateOutputDto, NewsLetterUserDeleteDto, NewsLetterUserDeleteInputDto, NewsLetterUserDeleteOutputDto, NewsLetterUserFindDto, NewsLetterUserFindInputDto, NewsLetterUserFindOneByIdDto, NewsLetterUserFindOneByIdInputDto, NewsLetterUserFindOutputDto, NewsLetterUserFindOutputRowsDto, NewsLetterUserRecoverDto, NewsLetterUserRecoverInputDto, NewsLetterUserRecoverOutputDto, NewsLetterUserRemoveDto, NewsLetterUserRemoveInputDto, NewsLetterUserRemoveOutputDto, NewsLetterUserRestoreDto, NewsLetterUserRestoreInputDto, NewsLetterUserRestoreOutputDto, NewsLetterUserSoftDeleteDto, NewsLetterUserSoftDeleteInputDto, NewsLetterUserSoftDeleteInputWhereDto, NewsLetterUserSoftDeleteOutputDto, NewsLetterUserSoftRemoveDto, NewsLetterUserSoftRemoveInputDto, NewsLetterUserSoftRemoveOutputDto, NewsLetterUserUpdateDto, NewsLetterUserUpdateInputDto, NewsLetterUserUpdateInputSetsDto, NewsLetterUserUpdateOutputDto, NewsLetterUserUpsertDto, NewsLetterUserUpsertInputDto, NewsLetterUserUpsertOutputDto } from './dto/user.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => NewsLetterUserEntity)
export class NewsLetterUserResolver
{
  constructor(
    protected readonly factory: NewsLetterUserFactory,
    protected readonly service: NewsLetterUserService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [NewsLetterUserUploadOutput], { name:  `${NewsLetterUserUploadDto.metaname}`, description: `${NewsLetterUserUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => NewsLetterUserUploadInputDto }) 
    input: NewsLetterUserUploadInputDto,

    @GraphQLBodyContext() selection: NewsLetterUserUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterUserUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [NewsLetterUserUploadDeleteOutput], { name:  `${NewsLetterUserUploadDeleteDto.metaname}`, description: `${NewsLetterUserUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [NewsLetterUserUploadDeleteInputDto] }) 
    input: NewsLetterUserUploadDeleteInputDto | NewsLetterUserUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: NewsLetterUserUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterUserUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [NewsLetterUserCreateOutputDto], {
    name:  `${NewsLetterUserCreateDto.metaname}`, 
    description: `${NewsLetterUserCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [NewsLetterUserCreateInputDto] }) 
    input: NewsLetterUserCreateInputDto | NewsLetterUserCreateInputDto[],

    @GraphQLBodyContext() selection: NewsLetterUserCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<NewsLetterUserCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<NewsLetterUserCreateInputDto>(input, NewsLetterUserCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => NewsLetterUserFindOutputDto, {
    name: NewsLetterUserFindDto.metaname,
    description: NewsLetterUserFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => NewsLetterUserFindInputDto}) 
    filter: NewsLetterUserFindInputDto,

    @GraphQLBodyContext() selection: NewsLetterUserFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<NewsLetterUserFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => NewsLetterUserEntity, {
    name: NewsLetterUserFindOneByIdDto.metaname, 
    description: NewsLetterUserFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterUserFindOneByIdInputDto }) 
    input: NewsLetterUserFindOneByIdInputDto,

    @GraphQLBodyContext() selection: NewsLetterUserEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<NewsLetterUserEntity> {
    await this.validation.validateArrayInput<NewsLetterUserFindOneByIdInputDto>([input], NewsLetterUserFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => NewsLetterUserUpdateOutputDto, {
    name: NewsLetterUserUpdateDto.metaname, 
    description: NewsLetterUserUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => NewsLetterUserUpdateInputDto}) 
    input: NewsLetterUserUpdateInputDto,

    @GraphQLBodyContext() selection: NewsLetterUserUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterUserUpdateOutputDto> {
    await this.validation.validateArrayInput<NewsLetterUserUpdateInputSetsDto>([input.sets], NewsLetterUserUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => NewsLetterUserSoftDeleteOutputDto, {
    name: NewsLetterUserSoftDeleteDto.metaname, 
    description: NewsLetterUserSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterUserSoftDeleteInputDto }) 
    input: NewsLetterUserSoftDeleteInputDto,

    @GraphQLBodyContext() selection: NewsLetterUserSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterUserSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => NewsLetterUserDeleteOutputDto, {
    name: NewsLetterUserDeleteDto.metaname, 
    description: NewsLetterUserDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterUserDeleteInputDto }) 
    input: NewsLetterUserDeleteInputDto,

    @GraphQLBodyContext() selection: NewsLetterUserDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterUserDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => NewsLetterUserRestoreOutputDto, {
    name: NewsLetterUserRestoreDto.metaname,
    description: NewsLetterUserRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterUserRestoreInputDto }) 
    input: NewsLetterUserRestoreInputDto,
    
    @GraphQLBodyContext() selection: NewsLetterUserRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterUserRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [NewsLetterUserUpsertOutputDto], {
    name:  `${NewsLetterUserUpsertDto.metaname}`, 
    description: `${NewsLetterUserUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [NewsLetterUserUpsertInputDto]}) 
    input: NewsLetterUserUpsertInputDto | NewsLetterUserUpsertInputDto[],
    
    @GraphQLBodyContext() selection: NewsLetterUserUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterUserUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<NewsLetterUserUpsertInputDto>(input, NewsLetterUserUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => NewsLetterUserSoftRemoveOutputDto, {
    name: NewsLetterUserSoftRemoveDto.metaname, 
    description: NewsLetterUserSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterUserSoftRemoveInputDto }) 
    input: NewsLetterUserSoftRemoveInputDto,

    @GraphQLBodyContext() selection: NewsLetterUserSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterUserSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => NewsLetterUserRemoveOutputDto, {
    name: NewsLetterUserRemoveDto.metaname, 
    description: NewsLetterUserRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterUserRemoveInputDto }) 
    input: NewsLetterUserRemoveInputDto,
    
    @GraphQLBodyContext() selection: NewsLetterUserRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterUserRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => NewsLetterUserRecoverOutputDto, {
    name: NewsLetterUserRecoverDto.metaname,
    description: NewsLetterUserRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => NewsLetterUserRecoverInputDto }) 
    input: NewsLetterUserRecoverInputDto,

    @GraphQLBodyContext() selection: NewsLetterUserRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<NewsLetterUserRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: NewsLetterUserEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<NewsLetterUserEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}