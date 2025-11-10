import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { UserIdentityCardService } from './user.identity.card.service';
import { UserIdentityCardEntity } from './entities/user.identity.card.entity';
import { UserIdentityCardFactory } from './user.identity.card.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { UserIdentityCardUploadOutputDto, UserIdentityCardUploadDto, UserIdentityCardUploadInputDto, UserIdentityCardUploadDeleteOutputDto, UserIdentityCardUploadDeleteDto, UserIdentityCardUploadDeleteInputDto, UserIdentityCardCreateDto, UserIdentityCardCreateInputDto, UserIdentityCardCreateOutputDto, UserIdentityCardDeleteDto, UserIdentityCardDeleteInputDto, UserIdentityCardDeleteOutputDto, UserIdentityCardFindDto, UserIdentityCardFindInputDto, UserIdentityCardFindOneByIdDto, UserIdentityCardFindOneByIdInputDto, UserIdentityCardFindOutputDto, UserIdentityCardFindOutputRowsDto, UserIdentityCardRecoverDto, UserIdentityCardRecoverInputDto, UserIdentityCardRecoverOutputDto, UserIdentityCardRemoveDto, UserIdentityCardRemoveInputDto, UserIdentityCardRemoveOutputDto, UserIdentityCardRestoreDto, UserIdentityCardRestoreInputDto, UserIdentityCardRestoreOutputDto, UserIdentityCardSoftDeleteDto, UserIdentityCardSoftDeleteInputDto, UserIdentityCardSoftDeleteInputWhereDto, UserIdentityCardSoftDeleteOutputDto, UserIdentityCardSoftRemoveDto, UserIdentityCardSoftRemoveInputDto, UserIdentityCardSoftRemoveOutputDto, UserIdentityCardUpdateDto, UserIdentityCardUpdateInputDto, UserIdentityCardUpdateInputSetsDto, UserIdentityCardUpdateOutputDto, UserIdentityCardUpsertDto, UserIdentityCardUpsertInputDto, UserIdentityCardUpsertOutputDto } from './dto/user.identity.card.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => UserIdentityCardEntity)
export class UserIdentityCardResolver
{
  constructor(
    protected readonly factory: UserIdentityCardFactory,
    protected readonly service: UserIdentityCardService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [UserIdentityCardUploadOutput], { name:  `${UserIdentityCardUploadDto.metaname}`, description: `${UserIdentityCardUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserIdentityCardUploadInputDto }) 
    input: UserIdentityCardUploadInputDto,

    @GraphQLBodyContext() selection: UserIdentityCardUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserIdentityCardUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [UserIdentityCardUploadDeleteOutput], { name:  `${UserIdentityCardUploadDeleteDto.metaname}`, description: `${UserIdentityCardUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserIdentityCardUploadDeleteInputDto] }) 
    input: UserIdentityCardUploadDeleteInputDto | UserIdentityCardUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserIdentityCardUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserIdentityCardUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserIdentityCardCreateOutputDto], {
    name:  `${UserIdentityCardCreateDto.metaname}`, 
    description: `${UserIdentityCardCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserIdentityCardCreateInputDto] }) 
    input: UserIdentityCardCreateInputDto | UserIdentityCardCreateInputDto[],

    @GraphQLBodyContext() selection: UserIdentityCardCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserIdentityCardCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserIdentityCardCreateInputDto>(input, UserIdentityCardCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserIdentityCardFindOutputDto, {
    name: UserIdentityCardFindDto.metaname,
    description: UserIdentityCardFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserIdentityCardFindInputDto}) 
    filter: UserIdentityCardFindInputDto,

    @GraphQLBodyContext() selection: UserIdentityCardFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserIdentityCardFindOutputDto> {
    const resp = this.factory.findEngine.find(filter, selection, info, ctx);
    return resp;
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserIdentityCardEntity, {
    name: UserIdentityCardFindOneByIdDto.metaname, 
    description: UserIdentityCardFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserIdentityCardFindOneByIdInputDto }) 
    input: UserIdentityCardFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserIdentityCardEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserIdentityCardEntity> {
    await this.validation.validateArrayInput<UserIdentityCardFindOneByIdInputDto>([input], UserIdentityCardFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserIdentityCardUpdateOutputDto, {
    name: UserIdentityCardUpdateDto.metaname, 
    description: UserIdentityCardUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserIdentityCardUpdateInputDto}) 
    input: UserIdentityCardUpdateInputDto,

    @GraphQLBodyContext() selection: UserIdentityCardUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserIdentityCardUpdateOutputDto> {
    await this.validation.validateArrayInput<UserIdentityCardUpdateInputSetsDto>([input.sets], UserIdentityCardUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserIdentityCardSoftDeleteOutputDto, {
    name: UserIdentityCardSoftDeleteDto.metaname, 
    description: UserIdentityCardSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserIdentityCardSoftDeleteInputDto }) 
    input: UserIdentityCardSoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserIdentityCardSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserIdentityCardSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserIdentityCardDeleteOutputDto, {
    name: UserIdentityCardDeleteDto.metaname, 
    description: UserIdentityCardDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserIdentityCardDeleteInputDto }) 
    input: UserIdentityCardDeleteInputDto,

    @GraphQLBodyContext() selection: UserIdentityCardDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserIdentityCardDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserIdentityCardRestoreOutputDto, {
    name: UserIdentityCardRestoreDto.metaname,
    description: UserIdentityCardRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserIdentityCardRestoreInputDto }) 
    input: UserIdentityCardRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserIdentityCardRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserIdentityCardRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserIdentityCardUpsertOutputDto], {
    name:  `${UserIdentityCardUpsertDto.metaname}`, 
    description: `${UserIdentityCardUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserIdentityCardUpsertInputDto]}) 
    input: UserIdentityCardUpsertInputDto | UserIdentityCardUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserIdentityCardUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserIdentityCardUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserIdentityCardUpsertInputDto>(input, UserIdentityCardUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserIdentityCardSoftRemoveOutputDto, {
    name: UserIdentityCardSoftRemoveDto.metaname, 
    description: UserIdentityCardSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserIdentityCardSoftRemoveInputDto }) 
    input: UserIdentityCardSoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserIdentityCardSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserIdentityCardSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserIdentityCardRemoveOutputDto, {
    name: UserIdentityCardRemoveDto.metaname, 
    description: UserIdentityCardRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserIdentityCardRemoveInputDto }) 
    input: UserIdentityCardRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserIdentityCardRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserIdentityCardRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserIdentityCardRecoverOutputDto, {
    name: UserIdentityCardRecoverDto.metaname,
    description: UserIdentityCardRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserIdentityCardRecoverInputDto }) 
    input: UserIdentityCardRecoverInputDto,

    @GraphQLBodyContext() selection: UserIdentityCardRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserIdentityCardRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: UserIdentityCardEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<UserIdentityCardEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}