import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { UserFavService } from './user.fav.service';
import { UserFavEntity } from './entities/user.fav.entity';
import { UserFavFactory } from './user.fav.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { UserFavUploadOutputDto, UserFavUploadDto, UserFavUploadInputDto, UserFavUploadDeleteOutputDto, UserFavUploadDeleteDto, UserFavUploadDeleteInputDto, UserFavCreateDto, UserFavCreateInputDto, UserFavCreateOutputDto, UserFavDeleteDto, UserFavDeleteInputDto, UserFavDeleteOutputDto, UserFavFindDto, UserFavFindInputDto, UserFavFindOneByIdDto, UserFavFindOneByIdInputDto, UserFavFindOutputDto, UserFavFindOutputRowsDto, UserFavRecoverDto, UserFavRecoverInputDto, UserFavRecoverOutputDto, UserFavRemoveDto, UserFavRemoveInputDto, UserFavRemoveOutputDto, UserFavRestoreDto, UserFavRestoreInputDto, UserFavRestoreOutputDto, UserFavSoftDeleteDto, UserFavSoftDeleteInputDto, UserFavSoftDeleteInputWhereDto, UserFavSoftDeleteOutputDto, UserFavSoftRemoveDto, UserFavSoftRemoveInputDto, UserFavSoftRemoveOutputDto, UserFavUpdateDto, UserFavUpdateInputDto, UserFavUpdateInputSetsDto, UserFavUpdateOutputDto, UserFavUpsertDto, UserFavUpsertInputDto, UserFavUpsertOutputDto } from './dto/user.fav.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => UserFavEntity)
export class UserFavResolver
{
  constructor(
    protected readonly factory: UserFavFactory,
    protected readonly service: UserFavService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [UserFavUploadOutput], { name:  `${UserFavUploadDto.metaname}`, description: `${UserFavUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserFavUploadInputDto }) 
    input: UserFavUploadInputDto,

    @GraphQLBodyContext() selection: UserFavUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserFavUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [UserFavUploadDeleteOutput], { name:  `${UserFavUploadDeleteDto.metaname}`, description: `${UserFavUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserFavUploadDeleteInputDto] }) 
    input: UserFavUploadDeleteInputDto | UserFavUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserFavUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserFavUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserFavCreateOutputDto], {
    name:  `${UserFavCreateDto.metaname}`, 
    description: `${UserFavCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserFavCreateInputDto] }) 
    input: UserFavCreateInputDto | UserFavCreateInputDto[],

    @GraphQLBodyContext() selection: UserFavCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserFavCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserFavCreateInputDto>(input, UserFavCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserFavFindOutputDto, {
    name: UserFavFindDto.metaname,
    description: UserFavFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserFavFindInputDto}) 
    filter: UserFavFindInputDto,

    @GraphQLBodyContext() selection: UserFavFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserFavFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserFavEntity, {
    name: UserFavFindOneByIdDto.metaname, 
    description: UserFavFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavFindOneByIdInputDto }) 
    input: UserFavFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserFavEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserFavEntity> {
    await this.validation.validateArrayInput<UserFavFindOneByIdInputDto>([input], UserFavFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserFavUpdateOutputDto, {
    name: UserFavUpdateDto.metaname, 
    description: UserFavUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserFavUpdateInputDto}) 
    input: UserFavUpdateInputDto,

    @GraphQLBodyContext() selection: UserFavUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavUpdateOutputDto> {
    await this.validation.validateArrayInput<UserFavUpdateInputSetsDto>([input.sets], UserFavUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserFavSoftDeleteOutputDto, {
    name: UserFavSoftDeleteDto.metaname, 
    description: UserFavSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavSoftDeleteInputDto }) 
    input: UserFavSoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserFavSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserFavDeleteOutputDto, {
    name: UserFavDeleteDto.metaname, 
    description: UserFavDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavDeleteInputDto }) 
    input: UserFavDeleteInputDto,

    @GraphQLBodyContext() selection: UserFavDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserFavRestoreOutputDto, {
    name: UserFavRestoreDto.metaname,
    description: UserFavRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavRestoreInputDto }) 
    input: UserFavRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserFavRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserFavUpsertOutputDto], {
    name:  `${UserFavUpsertDto.metaname}`, 
    description: `${UserFavUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserFavUpsertInputDto]}) 
    input: UserFavUpsertInputDto | UserFavUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserFavUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserFavUpsertInputDto>(input, UserFavUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserFavSoftRemoveOutputDto, {
    name: UserFavSoftRemoveDto.metaname, 
    description: UserFavSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavSoftRemoveInputDto }) 
    input: UserFavSoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserFavSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserFavRemoveOutputDto, {
    name: UserFavRemoveDto.metaname, 
    description: UserFavRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavRemoveInputDto }) 
    input: UserFavRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserFavRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserFavRecoverOutputDto, {
    name: UserFavRecoverDto.metaname,
    description: UserFavRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavRecoverInputDto }) 
    input: UserFavRecoverInputDto,

    @GraphQLBodyContext() selection: UserFavRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: UserFavEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<UserFavEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}