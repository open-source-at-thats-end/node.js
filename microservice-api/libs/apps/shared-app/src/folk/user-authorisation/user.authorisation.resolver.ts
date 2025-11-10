import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { UserAuthorisationService } from './user.authorisation.service';
import { UserAuthorisationEntity } from './entities/user.authorisation.entity';
import { UserAuthorisationFactory } from './user.authorisation.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { UserAuthorisationUploadOutputDto, UserAuthorisationUploadDto, UserAuthorisationUploadInputDto, UserAuthorisationUploadDeleteOutputDto, UserAuthorisationUploadDeleteDto, UserAuthorisationUploadDeleteInputDto, UserAuthorisationCreateDto, UserAuthorisationCreateInputDto, UserAuthorisationCreateOutputDto, UserAuthorisationDeleteDto, UserAuthorisationDeleteInputDto, UserAuthorisationDeleteOutputDto, UserAuthorisationFindDto, UserAuthorisationFindInputDto, UserAuthorisationFindOneByIdDto, UserAuthorisationFindOneByIdInputDto, UserAuthorisationFindOutputDto, UserAuthorisationFindOutputRowsDto, UserAuthorisationRecoverDto, UserAuthorisationRecoverInputDto, UserAuthorisationRecoverOutputDto, UserAuthorisationRemoveDto, UserAuthorisationRemoveInputDto, UserAuthorisationRemoveOutputDto, UserAuthorisationRestoreDto, UserAuthorisationRestoreInputDto, UserAuthorisationRestoreOutputDto, UserAuthorisationSoftDeleteDto, UserAuthorisationSoftDeleteInputDto, UserAuthorisationSoftDeleteInputWhereDto, UserAuthorisationSoftDeleteOutputDto, UserAuthorisationSoftRemoveDto, UserAuthorisationSoftRemoveInputDto, UserAuthorisationSoftRemoveOutputDto, UserAuthorisationUpdateDto, UserAuthorisationUpdateInputDto, UserAuthorisationUpdateInputSetsDto, UserAuthorisationUpdateOutputDto, UserAuthorisationUpsertDto, UserAuthorisationUpsertInputDto, UserAuthorisationUpsertOutputDto } from './dto/user.authorisation.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => UserAuthorisationEntity)
export class UserAuthorisationResolver
{
  constructor(
    protected readonly factory: UserAuthorisationFactory,
    protected readonly service: UserAuthorisationService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [UserAuthorisationUploadOutput], { name:  `${UserAuthorisationUploadDto.metaname}`, description: `${UserAuthorisationUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserAuthorisationUploadInputDto }) 
    input: UserAuthorisationUploadInputDto,

    @GraphQLBodyContext() selection: UserAuthorisationUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserAuthorisationUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [UserAuthorisationUploadDeleteOutput], { name:  `${UserAuthorisationUploadDeleteDto.metaname}`, description: `${UserAuthorisationUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserAuthorisationUploadDeleteInputDto] }) 
    input: UserAuthorisationUploadDeleteInputDto | UserAuthorisationUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserAuthorisationUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserAuthorisationUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserAuthorisationCreateOutputDto], {
    name:  `${UserAuthorisationCreateDto.metaname}`, 
    description: `${UserAuthorisationCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserAuthorisationCreateInputDto] }) 
    input: UserAuthorisationCreateInputDto | UserAuthorisationCreateInputDto[],

    @GraphQLBodyContext() selection: UserAuthorisationCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserAuthorisationCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserAuthorisationCreateInputDto>(input, UserAuthorisationCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserAuthorisationFindOutputDto, {
    name: UserAuthorisationFindDto.metaname,
    description: UserAuthorisationFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserAuthorisationFindInputDto}) 
    filter: UserAuthorisationFindInputDto,

    @GraphQLBodyContext() selection: UserAuthorisationFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserAuthorisationFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserAuthorisationEntity, {
    name: UserAuthorisationFindOneByIdDto.metaname, 
    description: UserAuthorisationFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserAuthorisationFindOneByIdInputDto }) 
    input: UserAuthorisationFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserAuthorisationEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserAuthorisationEntity> {
    await this.validation.validateArrayInput<UserAuthorisationFindOneByIdInputDto>([input], UserAuthorisationFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserAuthorisationUpdateOutputDto, {
    name: UserAuthorisationUpdateDto.metaname, 
    description: UserAuthorisationUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserAuthorisationUpdateInputDto}) 
    input: UserAuthorisationUpdateInputDto,

    @GraphQLBodyContext() selection: UserAuthorisationUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthorisationUpdateOutputDto> {
    await this.validation.validateArrayInput<UserAuthorisationUpdateInputSetsDto>([input.sets], UserAuthorisationUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserAuthorisationSoftDeleteOutputDto, {
    name: UserAuthorisationSoftDeleteDto.metaname, 
    description: UserAuthorisationSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserAuthorisationSoftDeleteInputDto }) 
    input: UserAuthorisationSoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserAuthorisationSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthorisationSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserAuthorisationDeleteOutputDto, {
    name: UserAuthorisationDeleteDto.metaname, 
    description: UserAuthorisationDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserAuthorisationDeleteInputDto }) 
    input: UserAuthorisationDeleteInputDto,

    @GraphQLBodyContext() selection: UserAuthorisationDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthorisationDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserAuthorisationRestoreOutputDto, {
    name: UserAuthorisationRestoreDto.metaname,
    description: UserAuthorisationRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserAuthorisationRestoreInputDto }) 
    input: UserAuthorisationRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserAuthorisationRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthorisationRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserAuthorisationUpsertOutputDto], {
    name:  `${UserAuthorisationUpsertDto.metaname}`, 
    description: `${UserAuthorisationUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserAuthorisationUpsertInputDto]}) 
    input: UserAuthorisationUpsertInputDto | UserAuthorisationUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserAuthorisationUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthorisationUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserAuthorisationUpsertInputDto>(input, UserAuthorisationUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserAuthorisationSoftRemoveOutputDto, {
    name: UserAuthorisationSoftRemoveDto.metaname, 
    description: UserAuthorisationSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserAuthorisationSoftRemoveInputDto }) 
    input: UserAuthorisationSoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserAuthorisationSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthorisationSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserAuthorisationRemoveOutputDto, {
    name: UserAuthorisationRemoveDto.metaname, 
    description: UserAuthorisationRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserAuthorisationRemoveInputDto }) 
    input: UserAuthorisationRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserAuthorisationRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthorisationRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserAuthorisationRecoverOutputDto, {
    name: UserAuthorisationRecoverDto.metaname,
    description: UserAuthorisationRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserAuthorisationRecoverInputDto }) 
    input: UserAuthorisationRecoverInputDto,

    @GraphQLBodyContext() selection: UserAuthorisationRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthorisationRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: UserAuthorisationEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<UserAuthorisationEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}