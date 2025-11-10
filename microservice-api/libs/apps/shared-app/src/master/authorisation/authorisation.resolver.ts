import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { AuthorisationService } from './authorisation.service';
import { AuthorisationEntity } from './entities/authorisation.entity';
import { AuthorisationFactory } from './authorisation.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { AuthorisationUploadOutputDto, AuthorisationUploadDto, AuthorisationUploadInputDto, AuthorisationUploadDeleteOutputDto, AuthorisationUploadDeleteDto, AuthorisationUploadDeleteInputDto, AuthorisationCreateDto, AuthorisationCreateInputDto, AuthorisationCreateOutputDto, AuthorisationDeleteDto, AuthorisationDeleteInputDto, AuthorisationDeleteOutputDto, AuthorisationFindDto, AuthorisationFindInputDto, AuthorisationFindOneByIdDto, AuthorisationFindOneByIdInputDto, AuthorisationFindOutputDto, AuthorisationFindOutputRowsDto, AuthorisationRecoverDto, AuthorisationRecoverInputDto, AuthorisationRecoverOutputDto, AuthorisationRemoveDto, AuthorisationRemoveInputDto, AuthorisationRemoveOutputDto, AuthorisationRestoreDto, AuthorisationRestoreInputDto, AuthorisationRestoreOutputDto, AuthorisationSoftDeleteDto, AuthorisationSoftDeleteInputDto, AuthorisationSoftDeleteInputWhereDto, AuthorisationSoftDeleteOutputDto, AuthorisationSoftRemoveDto, AuthorisationSoftRemoveInputDto, AuthorisationSoftRemoveOutputDto, AuthorisationUpdateDto, AuthorisationUpdateInputDto, AuthorisationUpdateInputSetsDto, AuthorisationUpdateOutputDto, AuthorisationUpsertDto, AuthorisationUpsertInputDto, AuthorisationUpsertOutputDto } from './dto/authorisation.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => AuthorisationEntity)
export class AuthorisationResolver
{
  constructor(
    protected readonly factory: AuthorisationFactory,
    protected readonly service: AuthorisationService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [AuthorisationUploadOutput], { name:  `${AuthorisationUploadDto.metaname}`, description: `${AuthorisationUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => AuthorisationUploadInputDto }) 
    input: AuthorisationUploadInputDto,

    @GraphQLBodyContext() selection: AuthorisationUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AuthorisationUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [AuthorisationUploadDeleteOutput], { name:  `${AuthorisationUploadDeleteDto.metaname}`, description: `${AuthorisationUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [AuthorisationUploadDeleteInputDto] }) 
    input: AuthorisationUploadDeleteInputDto | AuthorisationUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: AuthorisationUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AuthorisationUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [AuthorisationCreateOutputDto], {
    name:  `${AuthorisationCreateDto.metaname}`, 
    description: `${AuthorisationCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [AuthorisationCreateInputDto] }) 
    input: AuthorisationCreateInputDto | AuthorisationCreateInputDto[],

    @GraphQLBodyContext() selection: AuthorisationCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AuthorisationCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<AuthorisationCreateInputDto>(input, AuthorisationCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => AuthorisationFindOutputDto, {
    name: AuthorisationFindDto.metaname,
    description: AuthorisationFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => AuthorisationFindInputDto}) 
    filter: AuthorisationFindInputDto,

    @GraphQLBodyContext() selection: AuthorisationFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<AuthorisationFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => AuthorisationEntity, {
    name: AuthorisationFindOneByIdDto.metaname, 
    description: AuthorisationFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => AuthorisationFindOneByIdInputDto }) 
    input: AuthorisationFindOneByIdInputDto,

    @GraphQLBodyContext() selection: AuthorisationEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<AuthorisationEntity> {
    await this.validation.validateArrayInput<AuthorisationFindOneByIdInputDto>([input], AuthorisationFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => AuthorisationUpdateOutputDto, {
    name: AuthorisationUpdateDto.metaname, 
    description: AuthorisationUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => AuthorisationUpdateInputDto}) 
    input: AuthorisationUpdateInputDto,

    @GraphQLBodyContext() selection: AuthorisationUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AuthorisationUpdateOutputDto> {
    await this.validation.validateArrayInput<AuthorisationUpdateInputSetsDto>([input.sets], AuthorisationUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => AuthorisationSoftDeleteOutputDto, {
    name: AuthorisationSoftDeleteDto.metaname, 
    description: AuthorisationSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => AuthorisationSoftDeleteInputDto }) 
    input: AuthorisationSoftDeleteInputDto,

    @GraphQLBodyContext() selection: AuthorisationSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AuthorisationSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => AuthorisationDeleteOutputDto, {
    name: AuthorisationDeleteDto.metaname, 
    description: AuthorisationDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => AuthorisationDeleteInputDto }) 
    input: AuthorisationDeleteInputDto,

    @GraphQLBodyContext() selection: AuthorisationDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AuthorisationDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => AuthorisationRestoreOutputDto, {
    name: AuthorisationRestoreDto.metaname,
    description: AuthorisationRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => AuthorisationRestoreInputDto }) 
    input: AuthorisationRestoreInputDto,
    
    @GraphQLBodyContext() selection: AuthorisationRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AuthorisationRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [AuthorisationUpsertOutputDto], {
    name:  `${AuthorisationUpsertDto.metaname}`, 
    description: `${AuthorisationUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [AuthorisationUpsertInputDto]}) 
    input: AuthorisationUpsertInputDto | AuthorisationUpsertInputDto[],
    
    @GraphQLBodyContext() selection: AuthorisationUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AuthorisationUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<AuthorisationUpsertInputDto>(input, AuthorisationUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => AuthorisationSoftRemoveOutputDto, {
    name: AuthorisationSoftRemoveDto.metaname, 
    description: AuthorisationSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => AuthorisationSoftRemoveInputDto }) 
    input: AuthorisationSoftRemoveInputDto,

    @GraphQLBodyContext() selection: AuthorisationSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AuthorisationSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => AuthorisationRemoveOutputDto, {
    name: AuthorisationRemoveDto.metaname, 
    description: AuthorisationRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => AuthorisationRemoveInputDto }) 
    input: AuthorisationRemoveInputDto,
    
    @GraphQLBodyContext() selection: AuthorisationRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AuthorisationRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => AuthorisationRecoverOutputDto, {
    name: AuthorisationRecoverDto.metaname,
    description: AuthorisationRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => AuthorisationRecoverInputDto }) 
    input: AuthorisationRecoverInputDto,

    @GraphQLBodyContext() selection: AuthorisationRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AuthorisationRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


    // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████
  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()

    @ResolveReference()
    async resolveReference(
      @Parent() entity: AuthorisationEntity, 
      @Context() ctx: any,
      @Info() info: GraphQLResolveInfo,
    ):Promise<AuthorisationEntity | null> {
      return await this.factory.findEngine.resolveReference(entity, info, ctx);
    }
  }


  

