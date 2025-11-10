import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { UserFavCategoryService } from './fav.category.service';
import { UserFavCategoryEntity } from './entities/fav.category.entity';
import { UserFavCategoryFactory } from './fav.category.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { UserFavCategoryUploadOutputDto, UserFavCategoryUploadDto, UserFavCategoryUploadInputDto, UserFavCategoryUploadDeleteOutputDto, UserFavCategoryUploadDeleteDto, UserFavCategoryUploadDeleteInputDto, UserFavCategoryCreateDto, UserFavCategoryCreateInputDto, UserFavCategoryCreateOutputDto, UserFavCategoryDeleteDto, UserFavCategoryDeleteInputDto, UserFavCategoryDeleteOutputDto, UserFavCategoryFindDto, UserFavCategoryFindInputDto, UserFavCategoryFindOneByIdDto, UserFavCategoryFindOneByIdInputDto, UserFavCategoryFindOutputDto, UserFavCategoryFindOutputRowsDto, UserFavCategoryRecoverDto, UserFavCategoryRecoverInputDto, UserFavCategoryRecoverOutputDto, UserFavCategoryRemoveDto, UserFavCategoryRemoveInputDto, UserFavCategoryRemoveOutputDto, UserFavCategoryRestoreDto, UserFavCategoryRestoreInputDto, UserFavCategoryRestoreOutputDto, UserFavCategorySoftDeleteDto, UserFavCategorySoftDeleteInputDto, UserFavCategorySoftDeleteInputWhereDto, UserFavCategorySoftDeleteOutputDto, UserFavCategorySoftRemoveDto, UserFavCategorySoftRemoveInputDto, UserFavCategorySoftRemoveOutputDto, UserFavCategoryUpdateDto, UserFavCategoryUpdateInputDto, UserFavCategoryUpdateInputSetsDto, UserFavCategoryUpdateOutputDto, UserFavCategoryUpsertDto, UserFavCategoryUpsertInputDto, UserFavCategoryUpsertOutputDto } from './dto/fav.category.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => UserFavCategoryEntity)
export class UserFavCategoryResolver
{
  constructor(
    protected readonly factory: UserFavCategoryFactory,
    protected readonly service: UserFavCategoryService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [UserFavCategoryUploadOutput], { name:  `${UserFavCategoryUploadDto.metaname}`, description: `${UserFavCategoryUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserFavCategoryUploadInputDto }) 
    input: UserFavCategoryUploadInputDto,

    @GraphQLBodyContext() selection: UserFavCategoryUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserFavCategoryUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [UserFavCategoryUploadDeleteOutput], { name:  `${UserFavCategoryUploadDeleteDto.metaname}`, description: `${UserFavCategoryUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserFavCategoryUploadDeleteInputDto] }) 
    input: UserFavCategoryUploadDeleteInputDto | UserFavCategoryUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserFavCategoryUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserFavCategoryUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserFavCategoryCreateOutputDto], {
    name:  `${UserFavCategoryCreateDto.metaname}`, 
    description: `${UserFavCategoryCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserFavCategoryCreateInputDto] }) 
    input: UserFavCategoryCreateInputDto | UserFavCategoryCreateInputDto[],

    @GraphQLBodyContext() selection: UserFavCategoryCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserFavCategoryCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserFavCategoryCreateInputDto>(input, UserFavCategoryCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserFavCategoryFindOutputDto, {
    name: UserFavCategoryFindDto.metaname,
    description: UserFavCategoryFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserFavCategoryFindInputDto}) 
    filter: UserFavCategoryFindInputDto,

    @GraphQLBodyContext() selection: UserFavCategoryFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserFavCategoryFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserFavCategoryEntity, {
    name: UserFavCategoryFindOneByIdDto.metaname, 
    description: UserFavCategoryFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavCategoryFindOneByIdInputDto }) 
    input: UserFavCategoryFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserFavCategoryEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserFavCategoryEntity> {
    await this.validation.validateArrayInput<UserFavCategoryFindOneByIdInputDto>([input], UserFavCategoryFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserFavCategoryUpdateOutputDto, {
    name: UserFavCategoryUpdateDto.metaname, 
    description: UserFavCategoryUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserFavCategoryUpdateInputDto}) 
    input: UserFavCategoryUpdateInputDto,

    @GraphQLBodyContext() selection: UserFavCategoryUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavCategoryUpdateOutputDto> {
    await this.validation.validateArrayInput<UserFavCategoryUpdateInputSetsDto>([input.sets], UserFavCategoryUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserFavCategorySoftDeleteOutputDto, {
    name: UserFavCategorySoftDeleteDto.metaname, 
    description: UserFavCategorySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavCategorySoftDeleteInputDto }) 
    input: UserFavCategorySoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserFavCategorySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavCategorySoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserFavCategoryDeleteOutputDto, {
    name: UserFavCategoryDeleteDto.metaname, 
    description: UserFavCategoryDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavCategoryDeleteInputDto }) 
    input: UserFavCategoryDeleteInputDto,

    @GraphQLBodyContext() selection: UserFavCategoryDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavCategoryDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserFavCategoryRestoreOutputDto, {
    name: UserFavCategoryRestoreDto.metaname,
    description: UserFavCategoryRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavCategoryRestoreInputDto }) 
    input: UserFavCategoryRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserFavCategoryRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavCategoryRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserFavCategoryUpsertOutputDto], {
    name:  `${UserFavCategoryUpsertDto.metaname}`, 
    description: `${UserFavCategoryUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserFavCategoryUpsertInputDto]}) 
    input: UserFavCategoryUpsertInputDto | UserFavCategoryUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserFavCategoryUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavCategoryUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserFavCategoryUpsertInputDto>(input, UserFavCategoryUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserFavCategorySoftRemoveOutputDto, {
    name: UserFavCategorySoftRemoveDto.metaname, 
    description: UserFavCategorySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavCategorySoftRemoveInputDto }) 
    input: UserFavCategorySoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserFavCategorySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavCategorySoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserFavCategoryRemoveOutputDto, {
    name: UserFavCategoryRemoveDto.metaname, 
    description: UserFavCategoryRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavCategoryRemoveInputDto }) 
    input: UserFavCategoryRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserFavCategoryRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavCategoryRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserFavCategoryRecoverOutputDto, {
    name: UserFavCategoryRecoverDto.metaname,
    description: UserFavCategoryRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavCategoryRecoverInputDto }) 
    input: UserFavCategoryRecoverInputDto,

    @GraphQLBodyContext() selection: UserFavCategoryRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavCategoryRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


}