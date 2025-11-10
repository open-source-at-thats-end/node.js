import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { SessionService } from './session.service';
import { SessionEntity } from './entities/session.entity';
import { SessionFactory } from './session.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { SessionUploadOutputDto, SessionUploadDto, SessionUploadInputDto, SessionUploadDeleteOutputDto, SessionUploadDeleteDto, SessionUploadDeleteInputDto, SessionCreateDto, SessionCreateInputDto, SessionCreateOutputDto, SessionDeleteDto, SessionDeleteInputDto, SessionDeleteOutputDto, SessionFindDto, SessionFindInputDto, SessionFindOneByIdDto, SessionFindOneByIdInputDto, SessionFindOutputDto, SessionFindOutputRowsDto, SessionRecoverDto, SessionRecoverInputDto, SessionRecoverOutputDto, SessionRemoveDto, SessionRemoveInputDto, SessionRemoveOutputDto, SessionRestoreDto, SessionRestoreInputDto, SessionRestoreOutputDto, SessionSoftDeleteDto, SessionSoftDeleteInputDto, SessionSoftDeleteInputWhereDto, SessionSoftDeleteOutputDto, SessionSoftRemoveDto, SessionSoftRemoveInputDto, SessionSoftRemoveOutputDto, SessionUpdateDto, SessionUpdateInputDto, SessionUpdateInputSetsDto, SessionUpdateOutputDto, SessionUpsertDto, SessionUpsertInputDto, SessionUpsertOutputDto } from './dto/session.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => SessionEntity)
export class SessionResolver
{
  constructor(
    protected readonly factory: SessionFactory,
    protected readonly service: SessionService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [SessionUploadOutput], { name:  `${SessionUploadDto.metaname}`, description: `${SessionUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => SessionUploadInputDto }) 
    input: SessionUploadInputDto,

    @GraphQLBodyContext() selection: SessionUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SessionUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [SessionUploadDeleteOutput], { name:  `${SessionUploadDeleteDto.metaname}`, description: `${SessionUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [SessionUploadDeleteInputDto] }) 
    input: SessionUploadDeleteInputDto | SessionUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: SessionUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SessionUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [SessionCreateOutputDto], {
    name:  `${SessionCreateDto.metaname}`, 
    description: `${SessionCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [SessionCreateInputDto] }) 
    input: SessionCreateInputDto | SessionCreateInputDto[],

    @GraphQLBodyContext() selection: SessionCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SessionCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<SessionCreateInputDto>(input, SessionCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => SessionFindOutputDto, {
    name: SessionFindDto.metaname,
    description: SessionFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => SessionFindInputDto}) 
    filter: SessionFindInputDto,

    @GraphQLBodyContext() selection: SessionFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<SessionFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => SessionEntity, {
    name: SessionFindOneByIdDto.metaname, 
    description: SessionFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => SessionFindOneByIdInputDto }) 
    input: SessionFindOneByIdInputDto,

    @GraphQLBodyContext() selection: SessionEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<SessionEntity> {
    await this.validation.validateArrayInput<SessionFindOneByIdInputDto>([input], SessionFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => SessionUpdateOutputDto, {
    name: SessionUpdateDto.metaname, 
    description: SessionUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => SessionUpdateInputDto}) 
    input: SessionUpdateInputDto,

    @GraphQLBodyContext() selection: SessionUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionUpdateOutputDto> {
    await this.validation.validateArrayInput<SessionUpdateInputSetsDto>([input.sets], SessionUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => SessionSoftDeleteOutputDto, {
    name: SessionSoftDeleteDto.metaname, 
    description: SessionSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => SessionSoftDeleteInputDto }) 
    input: SessionSoftDeleteInputDto,

    @GraphQLBodyContext() selection: SessionSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => SessionDeleteOutputDto, {
    name: SessionDeleteDto.metaname, 
    description: SessionDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => SessionDeleteInputDto }) 
    input: SessionDeleteInputDto,

    @GraphQLBodyContext() selection: SessionDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => SessionRestoreOutputDto, {
    name: SessionRestoreDto.metaname,
    description: SessionRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => SessionRestoreInputDto }) 
    input: SessionRestoreInputDto,
    
    @GraphQLBodyContext() selection: SessionRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [SessionUpsertOutputDto], {
    name:  `${SessionUpsertDto.metaname}`, 
    description: `${SessionUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [SessionUpsertInputDto]}) 
    input: SessionUpsertInputDto | SessionUpsertInputDto[],
    
    @GraphQLBodyContext() selection: SessionUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<SessionUpsertInputDto>(input, SessionUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => SessionSoftRemoveOutputDto, {
    name: SessionSoftRemoveDto.metaname, 
    description: SessionSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => SessionSoftRemoveInputDto }) 
    input: SessionSoftRemoveInputDto,

    @GraphQLBodyContext() selection: SessionSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => SessionRemoveOutputDto, {
    name: SessionRemoveDto.metaname, 
    description: SessionRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => SessionRemoveInputDto }) 
    input: SessionRemoveInputDto,
    
    @GraphQLBodyContext() selection: SessionRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => SessionRecoverOutputDto, {
    name: SessionRecoverDto.metaname,
    description: SessionRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => SessionRecoverInputDto }) 
    input: SessionRecoverInputDto,

    @GraphQLBodyContext() selection: SessionRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SessionRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }

  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: SessionEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<SessionEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}