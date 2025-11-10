import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { UserSavedSearchService } from './user.saved.search.service';
import { UserSavedSearchEntity } from './entities/user.saved.search.entity';
import { UserSavedSearchFactory } from './user.saved.search.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { UserSavedSearchCreateDto, UserSavedSearchCreateInputDto, UserSavedSearchCreateOutputDto, UserSavedSearchDeleteDto, UserSavedSearchDeleteInputDto, UserSavedSearchDeleteOutputDto, UserSavedSearchFindDto, UserSavedSearchFindInputDto, UserSavedSearchFindOneByIdDto, UserSavedSearchFindOneByIdInputDto, UserSavedSearchFindOutputDto, UserSavedSearchFindOutputRowsDto, UserSavedSearchRecoverDto, UserSavedSearchRecoverInputDto, UserSavedSearchRecoverOutputDto, UserSavedSearchRemoveDto, UserSavedSearchRemoveInputDto, UserSavedSearchRemoveOutputDto, UserSavedSearchRestoreDto, UserSavedSearchRestoreInputDto, UserSavedSearchRestoreOutputDto, UserSavedSearchSoftDeleteDto, UserSavedSearchSoftDeleteInputDto, UserSavedSearchSoftDeleteInputWhereDto, UserSavedSearchSoftDeleteOutputDto, UserSavedSearchSoftRemoveDto, UserSavedSearchSoftRemoveInputDto, UserSavedSearchSoftRemoveOutputDto, UserSavedSearchUpdateDto, UserSavedSearchUpdateInputDto, UserSavedSearchUpdateInputSetsDto, UserSavedSearchUpdateOutputDto, UserSavedSearchUploadDeleteDto, UserSavedSearchUploadDeleteInputDto, UserSavedSearchUploadDeleteOutputDto, UserSavedSearchUploadDto, UserSavedSearchUploadInputDto, UserSavedSearchUploadOutputDto, UserSavedSearchUpsertDto, UserSavedSearchUpsertInputDto, UserSavedSearchUpsertOutputDto } from './dto/user.saved.search.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => UserSavedSearchEntity)
export class UserSavedSearchResolver
{
  constructor(
    protected readonly factory: UserSavedSearchFactory,
    protected readonly service: UserSavedSearchService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [UserSavedSearchUploadOutput], { name:  `${UserSavedSearchUploadDto.metaname}`, description: `${UserSavedSearchUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserSavedSearchUploadInputDto }) 
    input: UserSavedSearchUploadInputDto,

    @GraphQLBodyContext() selection: UserSavedSearchUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserSavedSearchUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [UserSavedSearchUploadDeleteOutput], { name:  `${UserSavedSearchUploadDeleteDto.metaname}`, description: `${UserSavedSearchUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserSavedSearchUploadDeleteInputDto] }) 
    input: UserSavedSearchUploadDeleteInputDto | UserSavedSearchUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserSavedSearchUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserSavedSearchUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserSavedSearchCreateOutputDto], {
    name:  `${UserSavedSearchCreateDto.metaname}`, 
    description: `${UserSavedSearchCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserSavedSearchCreateInputDto] }) 
    input: UserSavedSearchCreateInputDto | UserSavedSearchCreateInputDto[],

    @GraphQLBodyContext() selection: UserSavedSearchCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserSavedSearchCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserSavedSearchCreateInputDto>(input, UserSavedSearchCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserSavedSearchFindOutputDto, {
    name: UserSavedSearchFindDto.metaname,
    description: UserSavedSearchFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserSavedSearchFindInputDto}) 
    filter: UserSavedSearchFindInputDto,

    @GraphQLBodyContext() selection: UserSavedSearchFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserSavedSearchFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserSavedSearchEntity, {
    name: UserSavedSearchFindOneByIdDto.metaname, 
    description: UserSavedSearchFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserSavedSearchFindOneByIdInputDto }) 
    input: UserSavedSearchFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserSavedSearchEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserSavedSearchEntity> {
    await this.validation.validateArrayInput<UserSavedSearchFindOneByIdInputDto>([input], UserSavedSearchFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserSavedSearchUpdateOutputDto, {
    name: UserSavedSearchUpdateDto.metaname, 
    description: UserSavedSearchUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserSavedSearchUpdateInputDto}) 
    input: UserSavedSearchUpdateInputDto,

    @GraphQLBodyContext() selection: UserSavedSearchUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserSavedSearchUpdateOutputDto> {
    await this.validation.validateArrayInput<UserSavedSearchUpdateInputSetsDto>([input.sets], UserSavedSearchUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserSavedSearchSoftDeleteOutputDto, {
    name: UserSavedSearchSoftDeleteDto.metaname, 
    description: UserSavedSearchSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserSavedSearchSoftDeleteInputDto }) 
    input: UserSavedSearchSoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserSavedSearchSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserSavedSearchSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserSavedSearchDeleteOutputDto, {
    name: UserSavedSearchDeleteDto.metaname, 
    description: UserSavedSearchDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserSavedSearchDeleteInputDto }) 
    input: UserSavedSearchDeleteInputDto,

    @GraphQLBodyContext() selection: UserSavedSearchDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserSavedSearchDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserSavedSearchRestoreOutputDto, {
    name: UserSavedSearchRestoreDto.metaname,
    description: UserSavedSearchRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserSavedSearchRestoreInputDto }) 
    input: UserSavedSearchRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserSavedSearchRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserSavedSearchRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserSavedSearchUpsertOutputDto], {
    name:  `${UserSavedSearchUpsertDto.metaname}`, 
    description: `${UserSavedSearchUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserSavedSearchUpsertInputDto]}) 
    input: UserSavedSearchUpsertInputDto | UserSavedSearchUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserSavedSearchUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserSavedSearchUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserSavedSearchUpsertInputDto>(input, UserSavedSearchUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserSavedSearchSoftRemoveOutputDto, {
    name: UserSavedSearchSoftRemoveDto.metaname, 
    description: UserSavedSearchSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserSavedSearchSoftRemoveInputDto }) 
    input: UserSavedSearchSoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserSavedSearchSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserSavedSearchSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserSavedSearchRemoveOutputDto, {
    name: UserSavedSearchRemoveDto.metaname, 
    description: UserSavedSearchRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserSavedSearchRemoveInputDto }) 
    input: UserSavedSearchRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserSavedSearchRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserSavedSearchRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserSavedSearchRecoverOutputDto, {
    name: UserSavedSearchRecoverDto.metaname,
    description: UserSavedSearchRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserSavedSearchRecoverInputDto }) 
    input: UserSavedSearchRecoverInputDto,

    @GraphQLBodyContext() selection: UserSavedSearchRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserSavedSearchRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }


  

}