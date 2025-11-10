import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { QueueEmailService } from './email.service';
import { QueueEmailEntity } from './entities/email.entity';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { QueueEmailCreateDto, QueueEmailCreateInputDto, QueueEmailCreateOutputDto, QueueEmailDeleteDto, QueueEmailDeleteInputDto, QueueEmailDeleteOutputDto, QueueEmailFindDto, QueueEmailFindInputDto, QueueEmailFindOneByIdDto, QueueEmailFindOneByIdInputDto, QueueEmailFindOutputDto, QueueEmailFindOutputRowsDto, QueueEmailRecoverDto, QueueEmailRecoverInputDto, QueueEmailRecoverOutputDto, QueueEmailRemoveDto, QueueEmailRemoveInputDto, QueueEmailRemoveOutputDto, QueueEmailRestoreDto, QueueEmailRestoreInputDto, QueueEmailRestoreOutputDto, QueueEmailSoftDeleteDto, QueueEmailSoftDeleteInputDto, QueueEmailSoftDeleteInputWhereDto, QueueEmailSoftDeleteOutputDto, QueueEmailSoftRemoveDto, QueueEmailSoftRemoveInputDto, QueueEmailSoftRemoveOutputDto, QueueEmailUpdateDto, QueueEmailUpdateInputDto, QueueEmailUpdateInputSetsDto, QueueEmailUpdateOutputDto, QueueEmailUploadDeleteDto, QueueEmailUploadDeleteInputDto, QueueEmailUploadDeleteOutputDto, QueueEmailUploadDto, QueueEmailUploadInputDto, QueueEmailUploadOutputDto, QueueEmailUpsertDto, QueueEmailUpsertInputDto, QueueEmailUpsertOutputDto } from './dto/email.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => QueueEmailEntity)
export class QueueEmailResolver
{
  constructor(
    protected readonly service: QueueEmailService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [QueueEmailUploadOutput], { name:  `${QueueEmailUploadDto.metaname}`, description: `${QueueEmailUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => QueueEmailUploadInputDto }) 
    input: QueueEmailUploadInputDto,

    @GraphQLBodyContext() selection: QueueEmailUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<QueueEmailUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [QueueEmailUploadDeleteOutput], { name:  `${QueueEmailUploadDeleteDto.metaname}`, description: `${QueueEmailUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [QueueEmailUploadDeleteInputDto] }) 
    input: QueueEmailUploadDeleteInputDto | QueueEmailUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: QueueEmailUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<QueueEmailUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [QueueEmailCreateOutputDto], {
    name:  `${QueueEmailCreateDto.metaname}`, 
    description: `${QueueEmailCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [QueueEmailCreateInputDto] }) 
    input: QueueEmailCreateInputDto | QueueEmailCreateInputDto[],

    @GraphQLBodyContext() selection: QueueEmailCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<QueueEmailCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)) {
      await this.validation.validateArrayInput<QueueEmailCreateInputDto>(input, QueueEmailCreateInputDto);
    }
    return await this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => QueueEmailFindOutputDto, {
    name: QueueEmailFindDto.metaname,
    description: QueueEmailFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => QueueEmailFindInputDto}) 
    filter: QueueEmailFindInputDto,

    @GraphQLBodyContext() selection: QueueEmailFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<QueueEmailFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => QueueEmailEntity, {
    name: QueueEmailFindOneByIdDto.metaname, 
    description: QueueEmailFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => QueueEmailFindOneByIdInputDto }) 
    input: QueueEmailFindOneByIdInputDto,

    @GraphQLBodyContext() selection: QueueEmailEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<QueueEmailEntity> {
    await this.validation.validateArrayInput<QueueEmailFindOneByIdInputDto>([input], QueueEmailFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => QueueEmailUpdateOutputDto, {
    name: QueueEmailUpdateDto.metaname, 
    description: QueueEmailUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => QueueEmailUpdateInputDto}) 
    input: QueueEmailUpdateInputDto,

    @GraphQLBodyContext() selection: QueueEmailUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueEmailUpdateOutputDto> {
    await this.validation.validateArrayInput<QueueEmailUpdateInputSetsDto>([input.sets], QueueEmailUpdateInputSetsDto);
    const resp = await this.service.updateEngine.update(input, selection, info, ctx);
    return resp;
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => QueueEmailSoftDeleteOutputDto, {
    name: QueueEmailSoftDeleteDto.metaname, 
    description: QueueEmailSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => QueueEmailSoftDeleteInputDto }) 
    input: QueueEmailSoftDeleteInputDto,

    @GraphQLBodyContext() selection: QueueEmailSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueEmailSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => QueueEmailDeleteOutputDto, {
    name: QueueEmailDeleteDto.metaname, 
    description: QueueEmailDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => QueueEmailDeleteInputDto }) 
    input: QueueEmailDeleteInputDto,

    @GraphQLBodyContext() selection: QueueEmailDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueEmailDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => QueueEmailRestoreOutputDto, {
    name: QueueEmailRestoreDto.metaname,
    description: QueueEmailRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => QueueEmailRestoreInputDto }) 
    input: QueueEmailRestoreInputDto,
    
    @GraphQLBodyContext() selection: QueueEmailRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueEmailRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [QueueEmailUpsertOutputDto], {
    name:  `${QueueEmailUpsertDto.metaname}`, 
    description: `${QueueEmailUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [QueueEmailUpsertInputDto]}) 
    input: QueueEmailUpsertInputDto | QueueEmailUpsertInputDto[],
    
    @GraphQLBodyContext() selection: QueueEmailUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueEmailUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<QueueEmailUpsertInputDto>(input, QueueEmailUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => QueueEmailSoftRemoveOutputDto, {
    name: QueueEmailSoftRemoveDto.metaname, 
    description: QueueEmailSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => QueueEmailSoftRemoveInputDto }) 
    input: QueueEmailSoftRemoveInputDto,

    @GraphQLBodyContext() selection: QueueEmailSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueEmailSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => QueueEmailRemoveOutputDto, {
    name: QueueEmailRemoveDto.metaname, 
    description: QueueEmailRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => QueueEmailRemoveInputDto }) 
    input: QueueEmailRemoveInputDto,
    
    @GraphQLBodyContext() selection: QueueEmailRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueEmailRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => QueueEmailRecoverOutputDto, {
    name: QueueEmailRecoverDto.metaname,
    description: QueueEmailRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => QueueEmailRecoverInputDto }) 
    input: QueueEmailRecoverInputDto,

    @GraphQLBodyContext() selection: QueueEmailRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueEmailRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }
   
  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: QueueEmailEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<QueueEmailEntity> {
    // set selection fields from GraphQLResolveInfo as per user selection. Perform any customisation here for selection set
    const selection = await this.service.findEngine._getSelectionFromGraphQLResolveInfo(info);
    selection.id = true; // also set id field to selection set as without id relation will not be 100% accurate

    // set input to find by id
    const input = {id: entity.id as number}

    // request find by id from database
    const resp = await this.service.findEngine.findOneById(input, selection, info, ctx);
    return resp;
  }
}