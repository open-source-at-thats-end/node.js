import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { SessionMetaService } from './session.meta.service';
import { SessionMetaEntity } from './entities/session.meta.entity';
import { SessionMetaFactory } from './session.meta.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { SessionMetaUploadOutputDto, SessionMetaUploadDto, SessionMetaUploadInputDto, SessionMetaUploadDeleteOutputDto, SessionMetaUploadDeleteDto, SessionMetaUploadDeleteInputDto, SessionMetaCreateDto, SessionMetaCreateInputDto, SessionMetaCreateOutputDto, SessionMetaDeleteDto, SessionMetaDeleteInputDto, SessionMetaDeleteOutputDto, SessionMetaFindDto, SessionMetaFindInputDto, SessionMetaFindOneByIdDto, SessionMetaFindOneByIdInputDto, SessionMetaFindOutputDto, SessionMetaFindOutputRowsDto, SessionMetaRecoverDto, SessionMetaRecoverInputDto, SessionMetaRecoverOutputDto, SessionMetaRemoveDto, SessionMetaRemoveInputDto, SessionMetaRemoveOutputDto, SessionMetaRestoreDto, SessionMetaRestoreInputDto, SessionMetaRestoreOutputDto, SessionMetaSoftDeleteDto, SessionMetaSoftDeleteInputDto, SessionMetaSoftDeleteInputWhereDto, SessionMetaSoftDeleteOutputDto, SessionMetaSoftRemoveDto, SessionMetaSoftRemoveInputDto, SessionMetaSoftRemoveOutputDto, SessionMetaUpdateDto, SessionMetaUpdateInputDto, SessionMetaUpdateInputSetsDto, SessionMetaUpdateOutputDto, SessionMetaUpsertDto, SessionMetaUpsertInputDto, SessionMetaUpsertOutputDto } from './dto/session.meta.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => SessionMetaEntity)
export class SessionMetaResolver
{
  constructor(
    protected readonly factory: SessionMetaFactory,
    protected readonly service: SessionMetaService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [SessionMetaUploadOutput], { name:  `${SessionMetaUploadDto.metaname}`, description: `${SessionMetaUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => SessionMetaUploadInputDto }) 
    input: SessionMetaUploadInputDto,

    @GraphQLBodyContext() selection: SessionMetaUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SessionMetaUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [SessionMetaUploadDeleteOutput], { name:  `${SessionMetaUploadDeleteDto.metaname}`, description: `${SessionMetaUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [SessionMetaUploadDeleteInputDto] }) 
    input: SessionMetaUploadDeleteInputDto | SessionMetaUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: SessionMetaUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SessionMetaUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [SessionMetaCreateOutputDto], {
    name:  `${SessionMetaCreateDto.metaname}`, 
    description: `${SessionMetaCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [SessionMetaCreateInputDto] }) 
    input: SessionMetaCreateInputDto | SessionMetaCreateInputDto[],

    @GraphQLBodyContext() selection: SessionMetaCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SessionMetaCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<SessionMetaCreateInputDto>(input, SessionMetaCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => SessionMetaFindOutputDto, {
    name: SessionMetaFindDto.metaname,
    description: SessionMetaFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => SessionMetaFindInputDto}) 
    filter: SessionMetaFindInputDto,

    @GraphQLBodyContext() selection: SessionMetaFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<SessionMetaFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => SessionMetaEntity, {
    name: SessionMetaFindOneByIdDto.metaname, 
    description: SessionMetaFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => SessionMetaFindOneByIdInputDto }) 
    input: SessionMetaFindOneByIdInputDto,

    @GraphQLBodyContext() selection: SessionMetaEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<SessionMetaEntity> {
    await this.validation.validateArrayInput<SessionMetaFindOneByIdInputDto>([input], SessionMetaFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => SessionMetaUpdateOutputDto, {
    name: SessionMetaUpdateDto.metaname, 
    description: SessionMetaUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => SessionMetaUpdateInputDto}) 
    input: SessionMetaUpdateInputDto,

    @GraphQLBodyContext() selection: SessionMetaUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionMetaUpdateOutputDto> {
    await this.validation.validateArrayInput<SessionMetaUpdateInputSetsDto>([input.sets], SessionMetaUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => SessionMetaSoftDeleteOutputDto, {
    name: SessionMetaSoftDeleteDto.metaname, 
    description: SessionMetaSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => SessionMetaSoftDeleteInputDto }) 
    input: SessionMetaSoftDeleteInputDto,

    @GraphQLBodyContext() selection: SessionMetaSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionMetaSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => SessionMetaDeleteOutputDto, {
    name: SessionMetaDeleteDto.metaname, 
    description: SessionMetaDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => SessionMetaDeleteInputDto }) 
    input: SessionMetaDeleteInputDto,

    @GraphQLBodyContext() selection: SessionMetaDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionMetaDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => SessionMetaRestoreOutputDto, {
    name: SessionMetaRestoreDto.metaname,
    description: SessionMetaRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => SessionMetaRestoreInputDto }) 
    input: SessionMetaRestoreInputDto,
    
    @GraphQLBodyContext() selection: SessionMetaRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionMetaRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [SessionMetaUpsertOutputDto], {
    name:  `${SessionMetaUpsertDto.metaname}`, 
    description: `${SessionMetaUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [SessionMetaUpsertInputDto]}) 
    input: SessionMetaUpsertInputDto | SessionMetaUpsertInputDto[],
    
    @GraphQLBodyContext() selection: SessionMetaUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionMetaUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<SessionMetaUpsertInputDto>(input, SessionMetaUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => SessionMetaSoftRemoveOutputDto, {
    name: SessionMetaSoftRemoveDto.metaname, 
    description: SessionMetaSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => SessionMetaSoftRemoveInputDto }) 
    input: SessionMetaSoftRemoveInputDto,

    @GraphQLBodyContext() selection: SessionMetaSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionMetaSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => SessionMetaRemoveOutputDto, {
    name: SessionMetaRemoveDto.metaname, 
    description: SessionMetaRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => SessionMetaRemoveInputDto }) 
    input: SessionMetaRemoveInputDto,
    
    @GraphQLBodyContext() selection: SessionMetaRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionMetaRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => SessionMetaRecoverOutputDto, {
    name: SessionMetaRecoverDto.metaname,
    description: SessionMetaRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => SessionMetaRecoverInputDto }) 
    input: SessionMetaRecoverInputDto,

    @GraphQLBodyContext() selection: SessionMetaRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionMetaRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }

  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: SessionMetaEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<SessionMetaEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
  
}