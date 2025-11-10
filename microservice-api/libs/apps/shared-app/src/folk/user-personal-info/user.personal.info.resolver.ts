import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { UserPersonalInfoService } from './user.personal.info.service';
import { UserPersonalInfoEntity } from './entities/user.personal.info.entity';
import { UserPersonalInfoFactory } from './user.personal.info.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { UserPersonalInfoUploadOutputDto, UserPersonalInfoUploadDto, UserPersonalInfoUploadInputDto, UserPersonalInfoUploadDeleteOutputDto, UserPersonalInfoUploadDeleteDto, UserPersonalInfoUploadDeleteInputDto, UserPersonalInfoCreateDto, UserPersonalInfoCreateInputDto, UserPersonalInfoCreateOutputDto, UserPersonalInfoDeleteDto, UserPersonalInfoDeleteInputDto, UserPersonalInfoDeleteOutputDto, UserPersonalInfoFindDto, UserPersonalInfoFindInputDto, UserPersonalInfoFindOneByIdDto, UserPersonalInfoFindOneByIdInputDto, UserPersonalInfoFindOutputDto, UserPersonalInfoFindOutputRowsDto, UserPersonalInfoRecoverDto, UserPersonalInfoRecoverInputDto, UserPersonalInfoRecoverOutputDto, UserPersonalInfoRemoveDto, UserPersonalInfoRemoveInputDto, UserPersonalInfoRemoveOutputDto, UserPersonalInfoRestoreDto, UserPersonalInfoRestoreInputDto, UserPersonalInfoRestoreOutputDto, UserPersonalInfoSoftDeleteDto, UserPersonalInfoSoftDeleteInputDto, UserPersonalInfoSoftDeleteInputWhereDto, UserPersonalInfoSoftDeleteOutputDto, UserPersonalInfoSoftRemoveDto, UserPersonalInfoSoftRemoveInputDto, UserPersonalInfoSoftRemoveOutputDto, UserPersonalInfoUpdateDto, UserPersonalInfoUpdateInputDto, UserPersonalInfoUpdateInputSetsDto, UserPersonalInfoUpdateOutputDto, UserPersonalInfoUpsertDto, UserPersonalInfoUpsertInputDto, UserPersonalInfoUpsertOutputDto } from './dto/user.personal.info.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => UserPersonalInfoEntity)
export class UserPersonalInfoResolver
{
  constructor(
    protected readonly factory: UserPersonalInfoFactory,
    protected readonly service: UserPersonalInfoService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [UserPersonalInfoUploadOutput], { name:  `${UserPersonalInfoUploadDto.metaname}`, description: `${UserPersonalInfoUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserPersonalInfoUploadInputDto }) 
    input: UserPersonalInfoUploadInputDto,

    @GraphQLBodyContext() selection: UserPersonalInfoUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserPersonalInfoUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [UserPersonalInfoUploadDeleteOutput], { name:  `${UserPersonalInfoUploadDeleteDto.metaname}`, description: `${UserPersonalInfoUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserPersonalInfoUploadDeleteInputDto] }) 
    input: UserPersonalInfoUploadDeleteInputDto | UserPersonalInfoUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserPersonalInfoUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserPersonalInfoUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserPersonalInfoCreateOutputDto], {
    name:  `${UserPersonalInfoCreateDto.metaname}`, 
    description: `${UserPersonalInfoCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserPersonalInfoCreateInputDto] }) 
    input: UserPersonalInfoCreateInputDto | UserPersonalInfoCreateInputDto[],

    @GraphQLBodyContext() selection: UserPersonalInfoCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserPersonalInfoCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserPersonalInfoCreateInputDto>(input, UserPersonalInfoCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserPersonalInfoFindOutputDto, {
    name: UserPersonalInfoFindDto.metaname,
    description: UserPersonalInfoFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserPersonalInfoFindInputDto}) 
    filter: UserPersonalInfoFindInputDto,

    @GraphQLBodyContext() selection: UserPersonalInfoFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserPersonalInfoFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserPersonalInfoEntity, {
    name: UserPersonalInfoFindOneByIdDto.metaname, 
    description: UserPersonalInfoFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserPersonalInfoFindOneByIdInputDto }) 
    input: UserPersonalInfoFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserPersonalInfoEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserPersonalInfoEntity> {
    await this.validation.validateArrayInput<UserPersonalInfoFindOneByIdInputDto>([input], UserPersonalInfoFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserPersonalInfoUpdateOutputDto, {
    name: UserPersonalInfoUpdateDto.metaname, 
    description: UserPersonalInfoUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserPersonalInfoUpdateInputDto}) 
    input: UserPersonalInfoUpdateInputDto,

    @GraphQLBodyContext() selection: UserPersonalInfoUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserPersonalInfoUpdateOutputDto> {
    await this.validation.validateArrayInput<UserPersonalInfoUpdateInputSetsDto>([input.sets], UserPersonalInfoUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserPersonalInfoSoftDeleteOutputDto, {
    name: UserPersonalInfoSoftDeleteDto.metaname, 
    description: UserPersonalInfoSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserPersonalInfoSoftDeleteInputDto }) 
    input: UserPersonalInfoSoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserPersonalInfoSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserPersonalInfoSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserPersonalInfoDeleteOutputDto, {
    name: UserPersonalInfoDeleteDto.metaname, 
    description: UserPersonalInfoDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserPersonalInfoDeleteInputDto }) 
    input: UserPersonalInfoDeleteInputDto,

    @GraphQLBodyContext() selection: UserPersonalInfoDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserPersonalInfoDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserPersonalInfoRestoreOutputDto, {
    name: UserPersonalInfoRestoreDto.metaname,
    description: UserPersonalInfoRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserPersonalInfoRestoreInputDto }) 
    input: UserPersonalInfoRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserPersonalInfoRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserPersonalInfoRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserPersonalInfoUpsertOutputDto], {
    name:  `${UserPersonalInfoUpsertDto.metaname}`, 
    description: `${UserPersonalInfoUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserPersonalInfoUpsertInputDto]}) 
    input: UserPersonalInfoUpsertInputDto | UserPersonalInfoUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserPersonalInfoUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserPersonalInfoUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserPersonalInfoUpsertInputDto>(input, UserPersonalInfoUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserPersonalInfoSoftRemoveOutputDto, {
    name: UserPersonalInfoSoftRemoveDto.metaname, 
    description: UserPersonalInfoSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserPersonalInfoSoftRemoveInputDto }) 
    input: UserPersonalInfoSoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserPersonalInfoSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserPersonalInfoSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserPersonalInfoRemoveOutputDto, {
    name: UserPersonalInfoRemoveDto.metaname, 
    description: UserPersonalInfoRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserPersonalInfoRemoveInputDto }) 
    input: UserPersonalInfoRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserPersonalInfoRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserPersonalInfoRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserPersonalInfoRecoverOutputDto, {
    name: UserPersonalInfoRecoverDto.metaname,
    description: UserPersonalInfoRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserPersonalInfoRecoverInputDto }) 
    input: UserPersonalInfoRecoverInputDto,

    @GraphQLBodyContext() selection: UserPersonalInfoRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserPersonalInfoRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: UserPersonalInfoEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<UserPersonalInfoEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}