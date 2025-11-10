import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { UserCorporateInfoService } from './user.corporate.info.service';
import { UserCorporateInfoEntity } from './entities/user.corporate.info.entity';
import { UserCorporateInfoFactory } from './user.corporate.info.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { UserCorporateInfoUploadOutputDto, UserCorporateInfoUploadDto, UserCorporateInfoUploadInputDto, UserCorporateInfoUploadDeleteOutputDto, UserCorporateInfoUploadDeleteDto, UserCorporateInfoUploadDeleteInputDto, UserCorporateInfoCreateDto, UserCorporateInfoCreateInputDto, UserCorporateInfoCreateOutputDto, UserCorporateInfoDeleteDto, UserCorporateInfoDeleteInputDto, UserCorporateInfoDeleteOutputDto, UserCorporateInfoFindDto, UserCorporateInfoFindInputDto, UserCorporateInfoFindOneByIdDto, UserCorporateInfoFindOneByIdInputDto, UserCorporateInfoFindOutputDto, UserCorporateInfoFindOutputRowsDto, UserCorporateInfoRecoverDto, UserCorporateInfoRecoverInputDto, UserCorporateInfoRecoverOutputDto, UserCorporateInfoRemoveDto, UserCorporateInfoRemoveInputDto, UserCorporateInfoRemoveOutputDto, UserCorporateInfoRestoreDto, UserCorporateInfoRestoreInputDto, UserCorporateInfoRestoreOutputDto, UserCorporateInfoSoftDeleteDto, UserCorporateInfoSoftDeleteInputDto, UserCorporateInfoSoftDeleteInputWhereDto, UserCorporateInfoSoftDeleteOutputDto, UserCorporateInfoSoftRemoveDto, UserCorporateInfoSoftRemoveInputDto, UserCorporateInfoSoftRemoveOutputDto, UserCorporateInfoUpdateDto, UserCorporateInfoUpdateInputDto, UserCorporateInfoUpdateInputSetsDto, UserCorporateInfoUpdateOutputDto, UserCorporateInfoUpsertDto, UserCorporateInfoUpsertInputDto, UserCorporateInfoUpsertOutputDto } from './dto/user.corporate.info.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => UserCorporateInfoEntity)
export class UserCorporateInfoResolver
{
  constructor(
    protected readonly factory: UserCorporateInfoFactory,
    protected readonly service: UserCorporateInfoService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  @Mutation(() => [UserCorporateInfoUploadOutputDto], { name:  `${UserCorporateInfoUploadDto.metaname}`, description: `${UserCorporateInfoUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserCorporateInfoUploadInputDto }) 
    input: UserCorporateInfoUploadInputDto,

    @GraphQLBodyContext() selection: UserCorporateInfoUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserCorporateInfoUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  @Mutation(() => [UserCorporateInfoUploadDeleteOutputDto], { name:  `${UserCorporateInfoUploadDeleteDto.metaname}`, description: `${UserCorporateInfoUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserCorporateInfoUploadDeleteInputDto] }) 
    input: UserCorporateInfoUploadDeleteInputDto | UserCorporateInfoUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserCorporateInfoUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserCorporateInfoUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserCorporateInfoCreateOutputDto], {
    name:  `${UserCorporateInfoCreateDto.metaname}`, 
    description: `${UserCorporateInfoCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserCorporateInfoCreateInputDto] }) 
    input: UserCorporateInfoCreateInputDto | UserCorporateInfoCreateInputDto[],

    @GraphQLBodyContext() selection: UserCorporateInfoCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserCorporateInfoCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserCorporateInfoCreateInputDto>(input, UserCorporateInfoCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserCorporateInfoFindOutputDto, {
    name: UserCorporateInfoFindDto.metaname,
    description: UserCorporateInfoFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserCorporateInfoFindInputDto}) 
    filter: UserCorporateInfoFindInputDto,

    @GraphQLBodyContext() selection: UserCorporateInfoFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserCorporateInfoFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserCorporateInfoEntity, {
    name: UserCorporateInfoFindOneByIdDto.metaname, 
    description: UserCorporateInfoFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserCorporateInfoFindOneByIdInputDto }) 
    input: UserCorporateInfoFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserCorporateInfoEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserCorporateInfoEntity> {
    await this.validation.validateArrayInput<UserCorporateInfoFindOneByIdInputDto>([input], UserCorporateInfoFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserCorporateInfoUpdateOutputDto, {
    name: UserCorporateInfoUpdateDto.metaname, 
    description: UserCorporateInfoUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserCorporateInfoUpdateInputDto}) 
    input: UserCorporateInfoUpdateInputDto,

    @GraphQLBodyContext() selection: UserCorporateInfoUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserCorporateInfoUpdateOutputDto> {
    await this.validation.validateArrayInput<UserCorporateInfoUpdateInputSetsDto>([input.sets], UserCorporateInfoUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserCorporateInfoSoftDeleteOutputDto, {
    name: UserCorporateInfoSoftDeleteDto.metaname, 
    description: UserCorporateInfoSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserCorporateInfoSoftDeleteInputDto }) 
    input: UserCorporateInfoSoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserCorporateInfoSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserCorporateInfoSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserCorporateInfoDeleteOutputDto, {
    name: UserCorporateInfoDeleteDto.metaname, 
    description: UserCorporateInfoDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserCorporateInfoDeleteInputDto }) 
    input: UserCorporateInfoDeleteInputDto,

    @GraphQLBodyContext() selection: UserCorporateInfoDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserCorporateInfoDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserCorporateInfoRestoreOutputDto, {
    name: UserCorporateInfoRestoreDto.metaname,
    description: UserCorporateInfoRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserCorporateInfoRestoreInputDto }) 
    input: UserCorporateInfoRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserCorporateInfoRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserCorporateInfoRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserCorporateInfoUpsertOutputDto], {
    name:  `${UserCorporateInfoUpsertDto.metaname}`, 
    description: `${UserCorporateInfoUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserCorporateInfoUpsertInputDto]}) 
    input: UserCorporateInfoUpsertInputDto | UserCorporateInfoUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserCorporateInfoUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserCorporateInfoUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserCorporateInfoUpsertInputDto>(input, UserCorporateInfoUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserCorporateInfoSoftRemoveOutputDto, {
    name: UserCorporateInfoSoftRemoveDto.metaname, 
    description: UserCorporateInfoSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserCorporateInfoSoftRemoveInputDto }) 
    input: UserCorporateInfoSoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserCorporateInfoSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserCorporateInfoSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserCorporateInfoRemoveOutputDto, {
    name: UserCorporateInfoRemoveDto.metaname, 
    description: UserCorporateInfoRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserCorporateInfoRemoveInputDto }) 
    input: UserCorporateInfoRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserCorporateInfoRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserCorporateInfoRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserCorporateInfoRecoverOutputDto, {
    name: UserCorporateInfoRecoverDto.metaname,
    description: UserCorporateInfoRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserCorporateInfoRecoverInputDto }) 
    input: UserCorporateInfoRecoverInputDto,

    @GraphQLBodyContext() selection: UserCorporateInfoRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserCorporateInfoRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: UserCorporateInfoEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<UserCorporateInfoEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}