import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { UserNewsLetterSubscriptionService } from './user.subscription.service';
import { UserNewsLetterSubscriptionEntity } from './entities/user.subscription.entity';
import { UserNewsLetterSubscriptionFactory } from './user.subscription.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { UserNewsLetterSubscriptionUploadOutputDto, UserNewsLetterSubscriptionUploadDto, UserNewsLetterSubscriptionUploadInputDto, UserNewsLetterSubscriptionUploadDeleteOutputDto, UserNewsLetterSubscriptionUploadDeleteDto, UserNewsLetterSubscriptionUploadDeleteInputDto, UserNewsLetterSubscriptionCreateDto, UserNewsLetterSubscriptionCreateInputDto, UserNewsLetterSubscriptionCreateOutputDto, UserNewsLetterSubscriptionDeleteDto, UserNewsLetterSubscriptionDeleteInputDto, UserNewsLetterSubscriptionDeleteOutputDto, UserNewsLetterSubscriptionFindDto, UserNewsLetterSubscriptionFindInputDto, UserNewsLetterSubscriptionFindOneByIdDto, UserNewsLetterSubscriptionFindOneByIdInputDto, UserNewsLetterSubscriptionFindOutputDto, UserNewsLetterSubscriptionFindOutputRowsDto, UserNewsLetterSubscriptionRecoverDto, UserNewsLetterSubscriptionRecoverInputDto, UserNewsLetterSubscriptionRecoverOutputDto, UserNewsLetterSubscriptionRemoveDto, UserNewsLetterSubscriptionRemoveInputDto, UserNewsLetterSubscriptionRemoveOutputDto, UserNewsLetterSubscriptionRestoreDto, UserNewsLetterSubscriptionRestoreInputDto, UserNewsLetterSubscriptionRestoreOutputDto, UserNewsLetterSubscriptionSoftDeleteDto, UserNewsLetterSubscriptionSoftDeleteInputDto, UserNewsLetterSubscriptionSoftDeleteInputWhereDto, UserNewsLetterSubscriptionSoftDeleteOutputDto, UserNewsLetterSubscriptionSoftRemoveDto, UserNewsLetterSubscriptionSoftRemoveInputDto, UserNewsLetterSubscriptionSoftRemoveOutputDto, UserNewsLetterSubscriptionUpdateDto, UserNewsLetterSubscriptionUpdateInputDto, UserNewsLetterSubscriptionUpdateInputSetsDto, UserNewsLetterSubscriptionUpdateOutputDto, UserNewsLetterSubscriptionUpsertDto, UserNewsLetterSubscriptionUpsertInputDto, UserNewsLetterSubscriptionUpsertOutputDto } from './dto/user.subscription.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => UserNewsLetterSubscriptionEntity)
export class UserNewsLetterSubscriptionResolver
{
  constructor(
    protected readonly factory: UserNewsLetterSubscriptionFactory,
    protected readonly service: UserNewsLetterSubscriptionService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [UserNewsLetterSubscriptionUploadOutput], { name:  `${UserNewsLetterSubscriptionUploadDto.metaname}`, description: `${UserNewsLetterSubscriptionUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserNewsLetterSubscriptionUploadInputDto }) 
    input: UserNewsLetterSubscriptionUploadInputDto,

    @GraphQLBodyContext() selection: UserNewsLetterSubscriptionUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserNewsLetterSubscriptionUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [UserNewsLetterSubscriptionUploadDeleteOutput], { name:  `${UserNewsLetterSubscriptionUploadDeleteDto.metaname}`, description: `${UserNewsLetterSubscriptionUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserNewsLetterSubscriptionUploadDeleteInputDto] }) 
    input: UserNewsLetterSubscriptionUploadDeleteInputDto | UserNewsLetterSubscriptionUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserNewsLetterSubscriptionUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserNewsLetterSubscriptionUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserNewsLetterSubscriptionCreateOutputDto], {
    name:  `${UserNewsLetterSubscriptionCreateDto.metaname}`, 
    description: `${UserNewsLetterSubscriptionCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserNewsLetterSubscriptionCreateInputDto] }) 
    input: UserNewsLetterSubscriptionCreateInputDto | UserNewsLetterSubscriptionCreateInputDto[],

    @GraphQLBodyContext() selection: UserNewsLetterSubscriptionCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserNewsLetterSubscriptionCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserNewsLetterSubscriptionCreateInputDto>(input, UserNewsLetterSubscriptionCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserNewsLetterSubscriptionFindOutputDto, {
    name: UserNewsLetterSubscriptionFindDto.metaname,
    description: UserNewsLetterSubscriptionFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserNewsLetterSubscriptionFindInputDto}) 
    filter: UserNewsLetterSubscriptionFindInputDto,

    @GraphQLBodyContext() selection: UserNewsLetterSubscriptionFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserNewsLetterSubscriptionFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserNewsLetterSubscriptionEntity, {
    name: UserNewsLetterSubscriptionFindOneByIdDto.metaname, 
    description: UserNewsLetterSubscriptionFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserNewsLetterSubscriptionFindOneByIdInputDto }) 
    input: UserNewsLetterSubscriptionFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserNewsLetterSubscriptionEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserNewsLetterSubscriptionEntity> {
    await this.validation.validateArrayInput<UserNewsLetterSubscriptionFindOneByIdInputDto>([input], UserNewsLetterSubscriptionFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserNewsLetterSubscriptionUpdateOutputDto, {
    name: UserNewsLetterSubscriptionUpdateDto.metaname, 
    description: UserNewsLetterSubscriptionUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserNewsLetterSubscriptionUpdateInputDto}) 
    input: UserNewsLetterSubscriptionUpdateInputDto,

    @GraphQLBodyContext() selection: UserNewsLetterSubscriptionUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserNewsLetterSubscriptionUpdateOutputDto> {
    await this.validation.validateArrayInput<UserNewsLetterSubscriptionUpdateInputSetsDto>([input.sets], UserNewsLetterSubscriptionUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserNewsLetterSubscriptionSoftDeleteOutputDto, {
    name: UserNewsLetterSubscriptionSoftDeleteDto.metaname, 
    description: UserNewsLetterSubscriptionSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserNewsLetterSubscriptionSoftDeleteInputDto }) 
    input: UserNewsLetterSubscriptionSoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserNewsLetterSubscriptionSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserNewsLetterSubscriptionSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserNewsLetterSubscriptionDeleteOutputDto, {
    name: UserNewsLetterSubscriptionDeleteDto.metaname, 
    description: UserNewsLetterSubscriptionDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserNewsLetterSubscriptionDeleteInputDto }) 
    input: UserNewsLetterSubscriptionDeleteInputDto,

    @GraphQLBodyContext() selection: UserNewsLetterSubscriptionDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserNewsLetterSubscriptionDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserNewsLetterSubscriptionRestoreOutputDto, {
    name: UserNewsLetterSubscriptionRestoreDto.metaname,
    description: UserNewsLetterSubscriptionRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserNewsLetterSubscriptionRestoreInputDto }) 
    input: UserNewsLetterSubscriptionRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserNewsLetterSubscriptionRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserNewsLetterSubscriptionRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserNewsLetterSubscriptionUpsertOutputDto], {
    name:  `${UserNewsLetterSubscriptionUpsertDto.metaname}`, 
    description: `${UserNewsLetterSubscriptionUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserNewsLetterSubscriptionUpsertInputDto]}) 
    input: UserNewsLetterSubscriptionUpsertInputDto | UserNewsLetterSubscriptionUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserNewsLetterSubscriptionUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserNewsLetterSubscriptionUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserNewsLetterSubscriptionUpsertInputDto>(input, UserNewsLetterSubscriptionUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserNewsLetterSubscriptionSoftRemoveOutputDto, {
    name: UserNewsLetterSubscriptionSoftRemoveDto.metaname, 
    description: UserNewsLetterSubscriptionSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserNewsLetterSubscriptionSoftRemoveInputDto }) 
    input: UserNewsLetterSubscriptionSoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserNewsLetterSubscriptionSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserNewsLetterSubscriptionSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserNewsLetterSubscriptionRemoveOutputDto, {
    name: UserNewsLetterSubscriptionRemoveDto.metaname, 
    description: UserNewsLetterSubscriptionRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserNewsLetterSubscriptionRemoveInputDto }) 
    input: UserNewsLetterSubscriptionRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserNewsLetterSubscriptionRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserNewsLetterSubscriptionRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserNewsLetterSubscriptionRecoverOutputDto, {
    name: UserNewsLetterSubscriptionRecoverDto.metaname,
    description: UserNewsLetterSubscriptionRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserNewsLetterSubscriptionRecoverInputDto }) 
    input: UserNewsLetterSubscriptionRecoverInputDto,

    @GraphQLBodyContext() selection: UserNewsLetterSubscriptionRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserNewsLetterSubscriptionRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: UserNewsLetterSubscriptionEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<UserNewsLetterSubscriptionEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}