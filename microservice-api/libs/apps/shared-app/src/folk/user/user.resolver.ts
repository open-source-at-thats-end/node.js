import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent, ResolveField } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { GraphQLBodyContext, DataValidationPipe, Upload } from '@libs/library-app';
import { UserCreateDto, UserCreateInputDto, UserCreateOutputDto, UserDeleteDto, UserDeleteInputDto, UserDeleteOutputDto, UserFindDto, UserFindInputDto, UserFindOneByIdDto, UserFindOneByIdInputDto, UserFindOutputDto, UserFindOutputRowsDto, UserRecoverDto, UserRecoverInputDto, UserRecoverOutputDto, UserRemoveDto, UserRemoveInputDto, UserRemoveOutputDto, UserRestoreDto, UserRestoreInputDto, UserRestoreOutputDto, UserSoftDeleteDto, UserSoftDeleteInputDto, UserSoftDeleteInputWhereDto, UserSoftDeleteOutputDto, UserSoftRemoveDto, UserSoftRemoveInputDto, UserSoftRemoveOutputDto, UserUpdateDto, UserUpdateInputDto, UserUpdateInputSetsDto, UserUpdateOutputDto, UserUploadDeleteDto, UserUploadDeleteInputDto, UserUploadDeleteOutputDto, UserUploadDto, UserUploadInputDto, UserUploadOutputDto, UserUpsertDto, UserUpsertInputDto, UserUpsertOutputDto } from './dto/user.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { UserFactory } from './user.factory';

@Resolver(() => UserEntity)
export class UserResolver
{
  constructor(
    protected readonly factory: UserFactory,
    protected readonly service: UserService,
    protected readonly validationPipe: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  @Mutation(() => [UserUploadOutputDto], { name:  `${UserUploadDto.metaname}`, description: `${UserUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserUploadInputDto }) 
    input: UserUploadInputDto,

    @GraphQLBodyContext() selection: UserUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  @Mutation(() => [UserUploadDeleteOutputDto], { name:  `${UserUploadDeleteDto.metaname}`, description: `${UserUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserUploadDeleteInputDto] }) 
    input: UserUploadDeleteInputDto | UserUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserCreateOutputDto], {
    name:  `${UserCreateDto.metaname}`, 
    description: `${UserCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserCreateInputDto] }) 
    input: UserCreateInputDto | UserCreateInputDto[],

    @GraphQLBodyContext() selection: UserCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validationPipe.validateArrayInput<UserCreateInputDto>(input, UserCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserFindOutputDto, {
    name: UserFindDto.metaname,
    description: UserFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserFindInputDto}) 
    filter: UserFindInputDto,

    @GraphQLBodyContext() selection: UserFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserEntity, {
    name: UserFindOneByIdDto.metaname, 
    description: UserFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserFindOneByIdInputDto }) 
    input: UserFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserEntity> {
    await this.validationPipe.validateArrayInput<UserFindOneByIdInputDto>([input], UserFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserUpdateOutputDto, {
    name: UserUpdateDto.metaname, 
    description: UserUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserUpdateInputDto}) 
    input: UserUpdateInputDto,

    @GraphQLBodyContext() selection: UserUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserUpdateOutputDto> {
    await this.validationPipe.validateArrayInput<UserUpdateInputSetsDto>([input.sets], UserUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserSoftDeleteOutputDto, {
    name: UserSoftDeleteDto.metaname, 
    description: UserSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserSoftDeleteInputDto }) 
    input: UserSoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserDeleteOutputDto, {
    name: UserDeleteDto.metaname, 
    description: UserDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserDeleteInputDto }) 
    input: UserDeleteInputDto,

    @GraphQLBodyContext() selection: UserDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserRestoreOutputDto, {
    name: UserRestoreDto.metaname,
    description: UserRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserRestoreInputDto }) 
    input: UserRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserUpsertOutputDto], {
    name:  `${UserUpsertDto.metaname}`, 
    description: `${UserUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserUpsertInputDto]}) 
    input: UserUpsertInputDto | UserUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validationPipe.validateArrayInput<UserUpsertInputDto>(input, UserUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserSoftRemoveOutputDto, {
    name: UserSoftRemoveDto.metaname, 
    description: UserSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserSoftRemoveInputDto }) 
    input: UserSoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserRemoveOutputDto, {
    name: UserRemoveDto.metaname, 
    description: UserRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserRemoveInputDto }) 
    input: UserRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserRecoverOutputDto, {
    name: UserRecoverDto.metaname,
    description: UserRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserRecoverInputDto }) 
    input: UserRecoverInputDto,

    @GraphQLBodyContext() selection: UserRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }



  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████
// TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  
  @ResolveReference()
  async resolveReference(
    @Parent() entity: UserEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<UserEntity | null> {
    const resp = await this.service.findEngine.resolveReference(entity, info, ctx);
    return resp;
  }
}