import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { ConnectionSourceService } from './source.service';
import { ConnectionSourceEntity } from './entities/source.entity';
import { ConnectionSourceFactory } from './source.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { ConnectionSourceUploadOutputDto, ConnectionSourceUploadDto, ConnectionSourceUploadInputDto, ConnectionSourceUploadDeleteOutputDto, ConnectionSourceUploadDeleteDto, ConnectionSourceUploadDeleteInputDto, ConnectionSourceCreateDto, ConnectionSourceCreateInputDto, ConnectionSourceCreateOutputDto, ConnectionSourceDeleteDto, ConnectionSourceDeleteInputDto, ConnectionSourceDeleteOutputDto, ConnectionSourceFindDto, ConnectionSourceFindInputDto, ConnectionSourceFindOneByIdDto, ConnectionSourceFindOneByIdInputDto, ConnectionSourceFindOutputDto, ConnectionSourceFindOutputRowsDto, ConnectionSourceRecoverDto, ConnectionSourceRecoverInputDto, ConnectionSourceRecoverOutputDto, ConnectionSourceRemoveDto, ConnectionSourceRemoveInputDto, ConnectionSourceRemoveOutputDto, ConnectionSourceRestoreDto, ConnectionSourceRestoreInputDto, ConnectionSourceRestoreOutputDto, ConnectionSourceSoftDeleteDto, ConnectionSourceSoftDeleteInputDto, ConnectionSourceSoftDeleteInputWhereDto, ConnectionSourceSoftDeleteOutputDto, ConnectionSourceSoftRemoveDto, ConnectionSourceSoftRemoveInputDto, ConnectionSourceSoftRemoveOutputDto, ConnectionSourceUpdateDto, ConnectionSourceUpdateInputDto, ConnectionSourceUpdateInputSetsDto, ConnectionSourceUpdateOutputDto, ConnectionSourceUpsertDto, ConnectionSourceUpsertInputDto, ConnectionSourceUpsertOutputDto } from './dto/source.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => ConnectionSourceEntity)
export class ConnectionSourceResolver
{
  constructor(
    protected readonly factory: ConnectionSourceFactory,
    protected readonly service: ConnectionSourceService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [ConnectionSourceUploadOutput], { name:  `${ConnectionSourceUploadDto.metaname}`, description: `${ConnectionSourceUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => ConnectionSourceUploadInputDto }) 
    input: ConnectionSourceUploadInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ConnectionSourceUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [ConnectionSourceUploadDeleteOutput], { name:  `${ConnectionSourceUploadDeleteDto.metaname}`, description: `${ConnectionSourceUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [ConnectionSourceUploadDeleteInputDto] }) 
    input: ConnectionSourceUploadDeleteInputDto | ConnectionSourceUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: ConnectionSourceUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ConnectionSourceUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [ConnectionSourceCreateOutputDto], {
    name:  `${ConnectionSourceCreateDto.metaname}`, 
    description: `${ConnectionSourceCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [ConnectionSourceCreateInputDto] }) 
    input: ConnectionSourceCreateInputDto | ConnectionSourceCreateInputDto[],

    @GraphQLBodyContext() selection: ConnectionSourceCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ConnectionSourceCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ConnectionSourceCreateInputDto>(input, ConnectionSourceCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => ConnectionSourceFindOutputDto, {
    name: ConnectionSourceFindDto.metaname,
    description: ConnectionSourceFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => ConnectionSourceFindInputDto}) 
    filter: ConnectionSourceFindInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<ConnectionSourceFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => ConnectionSourceEntity, {
    name: ConnectionSourceFindOneByIdDto.metaname, 
    description: ConnectionSourceFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => ConnectionSourceFindOneByIdInputDto }) 
    input: ConnectionSourceFindOneByIdInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<ConnectionSourceEntity> {
    await this.validation.validateArrayInput<ConnectionSourceFindOneByIdInputDto>([input], ConnectionSourceFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => ConnectionSourceUpdateOutputDto, {
    name: ConnectionSourceUpdateDto.metaname, 
    description: ConnectionSourceUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => ConnectionSourceUpdateInputDto}) 
    input: ConnectionSourceUpdateInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceUpdateOutputDto> {
    await this.validation.validateArrayInput<ConnectionSourceUpdateInputSetsDto>([input.sets], ConnectionSourceUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => ConnectionSourceSoftDeleteOutputDto, {
    name: ConnectionSourceSoftDeleteDto.metaname, 
    description: ConnectionSourceSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => ConnectionSourceSoftDeleteInputDto }) 
    input: ConnectionSourceSoftDeleteInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => ConnectionSourceDeleteOutputDto, {
    name: ConnectionSourceDeleteDto.metaname, 
    description: ConnectionSourceDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => ConnectionSourceDeleteInputDto }) 
    input: ConnectionSourceDeleteInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => ConnectionSourceRestoreOutputDto, {
    name: ConnectionSourceRestoreDto.metaname,
    description: ConnectionSourceRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => ConnectionSourceRestoreInputDto }) 
    input: ConnectionSourceRestoreInputDto,
    
    @GraphQLBodyContext() selection: ConnectionSourceRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [ConnectionSourceUpsertOutputDto], {
    name:  `${ConnectionSourceUpsertDto.metaname}`, 
    description: `${ConnectionSourceUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [ConnectionSourceUpsertInputDto]}) 
    input: ConnectionSourceUpsertInputDto | ConnectionSourceUpsertInputDto[],
    
    @GraphQLBodyContext() selection: ConnectionSourceUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ConnectionSourceUpsertInputDto>(input, ConnectionSourceUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => ConnectionSourceSoftRemoveOutputDto, {
    name: ConnectionSourceSoftRemoveDto.metaname, 
    description: ConnectionSourceSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => ConnectionSourceSoftRemoveInputDto }) 
    input: ConnectionSourceSoftRemoveInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => ConnectionSourceRemoveOutputDto, {
    name: ConnectionSourceRemoveDto.metaname, 
    description: ConnectionSourceRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => ConnectionSourceRemoveInputDto }) 
    input: ConnectionSourceRemoveInputDto,
    
    @GraphQLBodyContext() selection: ConnectionSourceRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => ConnectionSourceRecoverOutputDto, {
    name: ConnectionSourceRecoverDto.metaname,
    description: ConnectionSourceRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => ConnectionSourceRecoverInputDto }) 
    input: ConnectionSourceRecoverInputDto,

    @GraphQLBodyContext() selection: ConnectionSourceRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ConnectionSourceRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: ConnectionSourceEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<ConnectionSourceEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}