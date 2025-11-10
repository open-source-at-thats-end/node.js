import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { ConnectionSourceCategoriesService } from './source.categories.service';
import { ConnectionSourceCategoriesEntity } from './entities/source.categories.entity';
import { ConnectionSourceCategoriesFactory } from './source.categories.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { ConnectionSourceCategoriesUploadOutputDto, ConnectionSourceCategoriesUploadInputDto, ConnectionSourceCategoriesUploadDeleteOutputDto, ConnectionSourceCategoriesUploadDeleteDto, ConnectionSourceCategoriesUploadDeleteInputDto, ConnectionSourceCategoriesCreateDto, ConnectionSourceCategoriesCreateInputDto, ConnectionSourceCategoriesCreateOutputDto, ConnectionSourceCategoriesDeleteDto, ConnectionSourceCategoriesDeleteInputDto, ConnectionSourceCategoriesDeleteOutputDto, ConnectionSourceCategoriesFindDto, ConnectionSourceCategoriesFindInputDto, ConnectionSourceCategoriesFindOneByIdDto, ConnectionSourceCategoriesFindOneByIdInputDto, ConnectionSourceCategoriesFindOutputDto, ConnectionSourceCategoriesFindOutputRowsDto, ConnectionSourceCategoriesRecoverDto, ConnectionSourceCategoriesRecoverInputDto, ConnectionSourceCategoriesRecoverOutputDto, ConnectionSourceCategoriesRemoveDto, ConnectionSourceCategoriesRemoveInputDto, ConnectionSourceCategoriesRemoveOutputDto, ConnectionSourceCategoriesRestoreDto, ConnectionSourceCategoriesRestoreInputDto, ConnectionSourceCategoriesRestoreOutputDto, ConnectionSourceCategoriesSoftDeleteDto, ConnectionSourceCategoriesSoftDeleteInputDto, ConnectionSourceCategoriesSoftDeleteInputWhereDto, ConnectionSourceCategoriesSoftDeleteOutputDto, ConnectionSourceCategoriesSoftRemoveDto, ConnectionSourceCategoriesSoftRemoveInputDto, ConnectionSourceCategoriesSoftRemoveOutputDto, ConnectionSourceCategoriesUpdateDto, ConnectionSourceCategoriesUpdateInputDto, ConnectionSourceCategoriesUpdateInputSetsDto, ConnectionSourceCategoriesUpdateOutputDto, ConnectionSourceCategoriesUpsertDto, ConnectionSourceCategoriesUpsertInputDto, ConnectionSourceCategoriesUpsertOutputDto } from './dto/source.categories.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => ConnectionSourceCategoriesEntity)
export class ConnectionSourceCategoriesResolver
{
  constructor(
    protected readonly factory: ConnectionSourceCategoriesFactory,
    protected readonly service: ConnectionSourceCategoriesService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [ConnectionSourceCategoriesUploadOutput], { name:  `${ConnectionSourceCategoriesUploadDto.metaname}`, description: `${ConnectionSourceCategoriesUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => ConnectionSourceCategoriesUploadInputDto }) 
    input: ConnectionSourceCategoriesUploadInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceCategoriesUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ConnectionSourceCategoriesUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [ConnectionSourceCategoriesUploadDeleteOutput], { name:  `${ConnectionSourceCategoriesUploadDeleteDto.metaname}`, description: `${ConnectionSourceCategoriesUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [ConnectionSourceCategoriesUploadDeleteInputDto] }) 
    input: ConnectionSourceCategoriesUploadDeleteInputDto | ConnectionSourceCategoriesUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: ConnectionSourceCategoriesUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ConnectionSourceCategoriesUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [ConnectionSourceCategoriesCreateOutputDto], {
    name:  `${ConnectionSourceCategoriesCreateDto.metaname}`, 
    description: `${ConnectionSourceCategoriesCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [ConnectionSourceCategoriesCreateInputDto] }) 
    input: ConnectionSourceCategoriesCreateInputDto | ConnectionSourceCategoriesCreateInputDto[],

    @GraphQLBodyContext() selection: ConnectionSourceCategoriesCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ConnectionSourceCategoriesCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ConnectionSourceCategoriesCreateInputDto>(input, ConnectionSourceCategoriesCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => ConnectionSourceCategoriesFindOutputDto, {
    name: ConnectionSourceCategoriesFindDto.metaname,
    description: ConnectionSourceCategoriesFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => ConnectionSourceCategoriesFindInputDto}) 
    filter: ConnectionSourceCategoriesFindInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceCategoriesFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<ConnectionSourceCategoriesFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => ConnectionSourceCategoriesEntity, {
    name: ConnectionSourceCategoriesFindOneByIdDto.metaname, 
    description: ConnectionSourceCategoriesFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => ConnectionSourceCategoriesFindOneByIdInputDto }) 
    input: ConnectionSourceCategoriesFindOneByIdInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceCategoriesEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<ConnectionSourceCategoriesEntity> {
    await this.validation.validateArrayInput<ConnectionSourceCategoriesFindOneByIdInputDto>([input], ConnectionSourceCategoriesFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => ConnectionSourceCategoriesUpdateOutputDto, {
    name: ConnectionSourceCategoriesUpdateDto.metaname, 
    description: ConnectionSourceCategoriesUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => ConnectionSourceCategoriesUpdateInputDto}) 
    input: ConnectionSourceCategoriesUpdateInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceCategoriesUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceCategoriesUpdateOutputDto> {
    await this.validation.validateArrayInput<ConnectionSourceCategoriesUpdateInputSetsDto>([input.sets], ConnectionSourceCategoriesUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => ConnectionSourceCategoriesSoftDeleteOutputDto, {
    name: ConnectionSourceCategoriesSoftDeleteDto.metaname, 
    description: ConnectionSourceCategoriesSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => ConnectionSourceCategoriesSoftDeleteInputDto }) 
    input: ConnectionSourceCategoriesSoftDeleteInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceCategoriesSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceCategoriesSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => ConnectionSourceCategoriesDeleteOutputDto, {
    name: ConnectionSourceCategoriesDeleteDto.metaname, 
    description: ConnectionSourceCategoriesDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => ConnectionSourceCategoriesDeleteInputDto }) 
    input: ConnectionSourceCategoriesDeleteInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceCategoriesDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceCategoriesDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => ConnectionSourceCategoriesRestoreOutputDto, {
    name: ConnectionSourceCategoriesRestoreDto.metaname,
    description: ConnectionSourceCategoriesRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => ConnectionSourceCategoriesRestoreInputDto }) 
    input: ConnectionSourceCategoriesRestoreInputDto,
    
    @GraphQLBodyContext() selection: ConnectionSourceCategoriesRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceCategoriesRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [ConnectionSourceCategoriesUpsertOutputDto], {
    name:  `${ConnectionSourceCategoriesUpsertDto.metaname}`, 
    description: `${ConnectionSourceCategoriesUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [ConnectionSourceCategoriesUpsertInputDto]}) 
    input: ConnectionSourceCategoriesUpsertInputDto | ConnectionSourceCategoriesUpsertInputDto[],
    
    @GraphQLBodyContext() selection: ConnectionSourceCategoriesUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceCategoriesUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ConnectionSourceCategoriesUpsertInputDto>(input, ConnectionSourceCategoriesUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => ConnectionSourceCategoriesSoftRemoveOutputDto, {
    name: ConnectionSourceCategoriesSoftRemoveDto.metaname, 
    description: ConnectionSourceCategoriesSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => ConnectionSourceCategoriesSoftRemoveInputDto }) 
    input: ConnectionSourceCategoriesSoftRemoveInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceCategoriesSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceCategoriesSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => ConnectionSourceCategoriesRemoveOutputDto, {
    name: ConnectionSourceCategoriesRemoveDto.metaname, 
    description: ConnectionSourceCategoriesRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => ConnectionSourceCategoriesRemoveInputDto }) 
    input: ConnectionSourceCategoriesRemoveInputDto,
    
    @GraphQLBodyContext() selection: ConnectionSourceCategoriesRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceCategoriesRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => ConnectionSourceCategoriesRecoverOutputDto, {
    name: ConnectionSourceCategoriesRecoverDto.metaname,
    description: ConnectionSourceCategoriesRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => ConnectionSourceCategoriesRecoverInputDto }) 
    input: ConnectionSourceCategoriesRecoverInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceCategoriesRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceCategoriesRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: ConnectionSourceCategoriesEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<ConnectionSourceCategoriesEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}