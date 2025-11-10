import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { UserHierarchyService } from './user.hierarchy.service';
import { UserHierarchyEntity } from './entities/user.hierarchy.entity';
import { UserHierarchyFactory } from './user.hierarchy.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { UserHierarchyUploadOutputDto, UserHierarchyUploadDto, UserHierarchyUploadInputDto, UserHierarchyUploadDeleteOutputDto, UserHierarchyUploadDeleteDto, UserHierarchyUploadDeleteInputDto, UserHierarchyCreateDto, UserHierarchyCreateInputDto, UserHierarchyCreateOutputDto, UserHierarchyDeleteDto, UserHierarchyDeleteInputDto, UserHierarchyDeleteOutputDto, UserHierarchyFindDto, UserHierarchyFindInputDto, UserHierarchyFindOneByIdDto, UserHierarchyFindOneByIdInputDto, UserHierarchyFindOutputDto, UserHierarchyFindOutputRowsDto, UserHierarchyRecoverDto, UserHierarchyRecoverInputDto, UserHierarchyRecoverOutputDto, UserHierarchyRemoveDto, UserHierarchyRemoveInputDto, UserHierarchyRemoveOutputDto, UserHierarchyRestoreDto, UserHierarchyRestoreInputDto, UserHierarchyRestoreOutputDto, UserHierarchySoftDeleteDto, UserHierarchySoftDeleteInputDto, UserHierarchySoftDeleteInputWhereDto, UserHierarchySoftDeleteOutputDto, UserHierarchySoftRemoveDto, UserHierarchySoftRemoveInputDto, UserHierarchySoftRemoveOutputDto, UserHierarchyUpdateDto, UserHierarchyUpdateInputDto, UserHierarchyUpdateInputSetsDto, UserHierarchyUpdateOutputDto, UserHierarchyUpsertDto, UserHierarchyUpsertInputDto, UserHierarchyUpsertOutputDto } from './dto/user.hierarchy.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => UserHierarchyEntity)
export class UserHierarchyResolver
{
  constructor(
    protected readonly factory: UserHierarchyFactory,
    protected readonly service: UserHierarchyService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [UserHierarchyUploadOutput], { name:  `${UserHierarchyUploadDto.metaname}`, description: `${UserHierarchyUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserHierarchyUploadInputDto }) 
    input: UserHierarchyUploadInputDto,

    @GraphQLBodyContext() selection: UserHierarchyUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserHierarchyUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [UserHierarchyUploadDeleteOutput], { name:  `${UserHierarchyUploadDeleteDto.metaname}`, description: `${UserHierarchyUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserHierarchyUploadDeleteInputDto] }) 
    input: UserHierarchyUploadDeleteInputDto | UserHierarchyUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserHierarchyUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserHierarchyUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserHierarchyCreateOutputDto], {
    name:  `${UserHierarchyCreateDto.metaname}`, 
    description: `${UserHierarchyCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserHierarchyCreateInputDto] }) 
    input: UserHierarchyCreateInputDto | UserHierarchyCreateInputDto[],

    @GraphQLBodyContext() selection: UserHierarchyCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserHierarchyCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserHierarchyCreateInputDto>(input, UserHierarchyCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserHierarchyFindOutputDto, {
    name: UserHierarchyFindDto.metaname,
    description: UserHierarchyFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserHierarchyFindInputDto}) 
    filter: UserHierarchyFindInputDto,

    @GraphQLBodyContext() selection: UserHierarchyFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserHierarchyFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserHierarchyEntity, {
    name: UserHierarchyFindOneByIdDto.metaname, 
    description: UserHierarchyFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserHierarchyFindOneByIdInputDto }) 
    input: UserHierarchyFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserHierarchyEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserHierarchyEntity> {
    await this.validation.validateArrayInput<UserHierarchyFindOneByIdInputDto>([input], UserHierarchyFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserHierarchyUpdateOutputDto, {
    name: UserHierarchyUpdateDto.metaname, 
    description: UserHierarchyUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserHierarchyUpdateInputDto}) 
    input: UserHierarchyUpdateInputDto,

    @GraphQLBodyContext() selection: UserHierarchyUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserHierarchyUpdateOutputDto> {
    await this.validation.validateArrayInput<UserHierarchyUpdateInputSetsDto>([input.sets], UserHierarchyUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserHierarchySoftDeleteOutputDto, {
    name: UserHierarchySoftDeleteDto.metaname, 
    description: UserHierarchySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserHierarchySoftDeleteInputDto }) 
    input: UserHierarchySoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserHierarchySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserHierarchySoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserHierarchyDeleteOutputDto, {
    name: UserHierarchyDeleteDto.metaname, 
    description: UserHierarchyDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserHierarchyDeleteInputDto }) 
    input: UserHierarchyDeleteInputDto,

    @GraphQLBodyContext() selection: UserHierarchyDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserHierarchyDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserHierarchyRestoreOutputDto, {
    name: UserHierarchyRestoreDto.metaname,
    description: UserHierarchyRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserHierarchyRestoreInputDto }) 
    input: UserHierarchyRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserHierarchyRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserHierarchyRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserHierarchyUpsertOutputDto], {
    name:  `${UserHierarchyUpsertDto.metaname}`, 
    description: `${UserHierarchyUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserHierarchyUpsertInputDto]}) 
    input: UserHierarchyUpsertInputDto | UserHierarchyUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserHierarchyUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserHierarchyUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserHierarchyUpsertInputDto>(input, UserHierarchyUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserHierarchySoftRemoveOutputDto, {
    name: UserHierarchySoftRemoveDto.metaname, 
    description: UserHierarchySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserHierarchySoftRemoveInputDto }) 
    input: UserHierarchySoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserHierarchySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserHierarchySoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserHierarchyRemoveOutputDto, {
    name: UserHierarchyRemoveDto.metaname, 
    description: UserHierarchyRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserHierarchyRemoveInputDto }) 
    input: UserHierarchyRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserHierarchyRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserHierarchyRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserHierarchyRecoverOutputDto, {
    name: UserHierarchyRecoverDto.metaname,
    description: UserHierarchyRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserHierarchyRecoverInputDto }) 
    input: UserHierarchyRecoverInputDto,

    @GraphQLBodyContext() selection: UserHierarchyRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserHierarchyRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: UserHierarchyEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<UserHierarchyEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}