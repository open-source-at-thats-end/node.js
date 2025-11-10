import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { UserAuthenticationService } from './user.auth.service';
import { UserAuthenticationEntity } from './entities/user.auth.entity';
import { UserAuthenticationWebmasterFactory } from './user.auth.webmaster.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { UserAuthenticationUploadOutputDto, UserAuthenticationUploadDto, UserAuthenticationUploadInputDto, UserAuthenticationUploadDeleteOutputDto, UserAuthenticationUploadDeleteDto, UserAuthenticationUploadDeleteInputDto, UserAuthenticationCreateDto, UserAuthenticationCreateInputDto, UserAuthenticationCreateOutputDto, UserAuthenticationDeleteDto, UserAuthenticationDeleteInputDto, UserAuthenticationDeleteOutputDto, UserAuthenticationFindDto, UserAuthenticationFindInputDto, UserAuthenticationFindOneByIdDto, UserAuthenticationFindOneByIdInputDto, UserAuthenticationFindOutputDto, UserAuthenticationFindOutputRowsDto, UserAuthenticationRecoverDto, UserAuthenticationRecoverInputDto, UserAuthenticationRecoverOutputDto, UserAuthenticationRemoveDto, UserAuthenticationRemoveInputDto, UserAuthenticationRemoveOutputDto, UserAuthenticationRestoreDto, UserAuthenticationRestoreInputDto, UserAuthenticationRestoreOutputDto, UserAuthenticationSoftDeleteDto, UserAuthenticationSoftDeleteInputDto, UserAuthenticationSoftDeleteInputWhereDto, UserAuthenticationSoftDeleteOutputDto, UserAuthenticationSoftRemoveDto, UserAuthenticationSoftRemoveInputDto, UserAuthenticationSoftRemoveOutputDto, UserAuthenticationUpdateDto, UserAuthenticationUpdateInputDto, UserAuthenticationUpdateInputSetsDto, UserAuthenticationUpdateOutputDto, UserAuthenticationUpsertDto, UserAuthenticationUpsertInputDto, UserAuthenticationUpsertOutputDto } from './dto/user.auth.webmaster.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => UserAuthenticationEntity)
export class UserAuthenticationWebmasterResolver
{
  constructor(
    protected readonly factory: UserAuthenticationWebmasterFactory,
    protected readonly service: UserAuthenticationService,
    private readonly validationPipe: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [UserAuthenticationUploadOutput], { name:  `${UserAuthenticationUploadDto.metaname}`, description: `${UserAuthenticationUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserAuthenticationUploadInputDto }) 
    input: UserAuthenticationUploadInputDto,

    @GraphQLBodyContext() selection: UserAuthenticationUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserAuthenticationUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [UserAuthenticationUploadDeleteOutput], { name:  `${UserAuthenticationUploadDeleteDto.metaname}`, description: `${UserAuthenticationUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserAuthenticationUploadDeleteInputDto] }) 
    input: UserAuthenticationUploadDeleteInputDto | UserAuthenticationUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserAuthenticationUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserAuthenticationUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserAuthenticationCreateOutputDto], {
    name:  `${UserAuthenticationCreateDto.metaname}`, 
    description: `${UserAuthenticationCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserAuthenticationCreateInputDto] }) 
    input: UserAuthenticationCreateInputDto | UserAuthenticationCreateInputDto[],

    @GraphQLBodyContext() selection: UserAuthenticationCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserAuthenticationCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validationPipe.validateArrayInput<UserAuthenticationCreateInputDto>(input, UserAuthenticationCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserAuthenticationFindOutputDto, {
    name: UserAuthenticationFindDto.metaname,
    description: UserAuthenticationFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserAuthenticationFindInputDto}) 
    filter: UserAuthenticationFindInputDto,

    @GraphQLBodyContext() selection: UserAuthenticationFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserAuthenticationFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserAuthenticationFindOutputRowsDto, {
    name: UserAuthenticationFindOneByIdDto.metaname, 
    description: UserAuthenticationFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserAuthenticationFindOneByIdInputDto }) 
    input: UserAuthenticationFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserAuthenticationFindOutputRowsDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserAuthenticationFindOutputRowsDto> {
    await this.validationPipe.validateArrayInput<UserAuthenticationFindOneByIdInputDto>([input], UserAuthenticationFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserAuthenticationUpdateOutputDto, {
    name: UserAuthenticationUpdateDto.metaname, 
    description: UserAuthenticationUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserAuthenticationUpdateInputDto}) 
    input: UserAuthenticationUpdateInputDto,

    @GraphQLBodyContext() selection: UserAuthenticationUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthenticationUpdateOutputDto> {
    await this.validationPipe.validateArrayInput<UserAuthenticationUpdateInputSetsDto>([input.sets], UserAuthenticationUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserAuthenticationSoftDeleteOutputDto, {
    name: UserAuthenticationSoftDeleteDto.metaname, 
    description: UserAuthenticationSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserAuthenticationSoftDeleteInputDto }) 
    input: UserAuthenticationSoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserAuthenticationSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthenticationSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserAuthenticationDeleteOutputDto, {
    name: UserAuthenticationDeleteDto.metaname, 
    description: UserAuthenticationDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserAuthenticationDeleteInputDto }) 
    input: UserAuthenticationDeleteInputDto,

    @GraphQLBodyContext() selection: UserAuthenticationDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthenticationDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserAuthenticationRestoreOutputDto, {
    name: UserAuthenticationRestoreDto.metaname,
    description: UserAuthenticationRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserAuthenticationRestoreInputDto }) 
    input: UserAuthenticationRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserAuthenticationRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthenticationRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserAuthenticationUpsertOutputDto], {
    name:  `${UserAuthenticationUpsertDto.metaname}`, 
    description: `${UserAuthenticationUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserAuthenticationUpsertInputDto]}) 
    input: UserAuthenticationUpsertInputDto | UserAuthenticationUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserAuthenticationUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthenticationUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validationPipe.validateArrayInput<UserAuthenticationUpsertInputDto>(input, UserAuthenticationUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserAuthenticationSoftRemoveOutputDto, {
    name: UserAuthenticationSoftRemoveDto.metaname, 
    description: UserAuthenticationSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserAuthenticationSoftRemoveInputDto }) 
    input: UserAuthenticationSoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserAuthenticationSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthenticationSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserAuthenticationRemoveOutputDto, {
    name: UserAuthenticationRemoveDto.metaname, 
    description: UserAuthenticationRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserAuthenticationRemoveInputDto }) 
    input: UserAuthenticationRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserAuthenticationRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthenticationRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserAuthenticationRecoverOutputDto, {
    name: UserAuthenticationRecoverDto.metaname,
    description: UserAuthenticationRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserAuthenticationRecoverInputDto }) 
    input: UserAuthenticationRecoverInputDto,

    @GraphQLBodyContext() selection: UserAuthenticationRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAuthenticationRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }
  

  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: UserAuthenticationEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<UserAuthenticationEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}