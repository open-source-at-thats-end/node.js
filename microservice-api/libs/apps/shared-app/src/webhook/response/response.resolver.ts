import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { WebhookResponseService } from './response.service';
import { WebhookResponseEntity } from './entities/response.entity';
import { WebhookResponseFactory } from './response.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { WebhookResponseUploadOutputDto, WebhookResponseUploadDto, WebhookResponseUploadInputDto, WebhookResponseUploadDeleteOutputDto, WebhookResponseUploadDeleteDto, WebhookResponseUploadDeleteInputDto, WebhookResponseCreateDto, WebhookResponseCreateInputDto, WebhookResponseCreateOutputDto, WebhookResponseDeleteDto, WebhookResponseDeleteInputDto, WebhookResponseDeleteOutputDto, WebhookResponseFindDto, WebhookResponseFindInputDto, WebhookResponseFindOneByIdDto, WebhookResponseFindOneByIdInputDto, WebhookResponseFindOutputDto, WebhookResponseFindOutputRowsDto, WebhookResponseRecoverDto, WebhookResponseRecoverInputDto, WebhookResponseRecoverOutputDto, WebhookResponseRemoveDto, WebhookResponseRemoveInputDto, WebhookResponseRemoveOutputDto, WebhookResponseRestoreDto, WebhookResponseRestoreInputDto, WebhookResponseRestoreOutputDto, WebhookResponseSoftDeleteDto, WebhookResponseSoftDeleteInputDto, WebhookResponseSoftDeleteInputWhereDto, WebhookResponseSoftDeleteOutputDto, WebhookResponseSoftRemoveDto, WebhookResponseSoftRemoveInputDto, WebhookResponseSoftRemoveOutputDto, WebhookResponseUpdateDto, WebhookResponseUpdateInputDto, WebhookResponseUpdateInputSetsDto, WebhookResponseUpdateOutputDto, WebhookResponseUpsertDto, WebhookResponseUpsertInputDto, WebhookResponseUpsertOutputDto } from './dto/response.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => WebhookResponseEntity)
export class WebhookResponseResolver
{
  constructor(
    protected readonly factory: WebhookResponseFactory,
    protected readonly service: WebhookResponseService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [WebhookResponseUploadOutput], { name:  `${WebhookResponseUploadDto.metaname}`, description: `${WebhookResponseUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => WebhookResponseUploadInputDto }) 
    input: WebhookResponseUploadInputDto,

    @GraphQLBodyContext() selection: WebhookResponseUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WebhookResponseUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [WebhookResponseUploadDeleteOutput], { name:  `${WebhookResponseUploadDeleteDto.metaname}`, description: `${WebhookResponseUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [WebhookResponseUploadDeleteInputDto] }) 
    input: WebhookResponseUploadDeleteInputDto | WebhookResponseUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: WebhookResponseUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WebhookResponseUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [WebhookResponseCreateOutputDto], {
    name:  `${WebhookResponseCreateDto.metaname}`, 
    description: `${WebhookResponseCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [WebhookResponseCreateInputDto] }) 
    input: WebhookResponseCreateInputDto | WebhookResponseCreateInputDto[],

    @GraphQLBodyContext() selection: WebhookResponseCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WebhookResponseCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<WebhookResponseCreateInputDto>(input, WebhookResponseCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => WebhookResponseFindOutputDto, {
    name: WebhookResponseFindDto.metaname,
    description: WebhookResponseFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => WebhookResponseFindInputDto}) 
    filter: WebhookResponseFindInputDto,

    @GraphQLBodyContext() selection: WebhookResponseFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<WebhookResponseFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => WebhookResponseEntity, {
    name: WebhookResponseFindOneByIdDto.metaname, 
    description: WebhookResponseFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => WebhookResponseFindOneByIdInputDto }) 
    input: WebhookResponseFindOneByIdInputDto,

    @GraphQLBodyContext() selection: WebhookResponseEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<WebhookResponseEntity> {
    await this.validation.validateArrayInput<WebhookResponseFindOneByIdInputDto>([input], WebhookResponseFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => WebhookResponseUpdateOutputDto, {
    name: WebhookResponseUpdateDto.metaname, 
    description: WebhookResponseUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => WebhookResponseUpdateInputDto}) 
    input: WebhookResponseUpdateInputDto,

    @GraphQLBodyContext() selection: WebhookResponseUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseUpdateOutputDto> {
    await this.validation.validateArrayInput<WebhookResponseUpdateInputSetsDto>([input.sets], WebhookResponseUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => WebhookResponseSoftDeleteOutputDto, {
    name: WebhookResponseSoftDeleteDto.metaname, 
    description: WebhookResponseSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => WebhookResponseSoftDeleteInputDto }) 
    input: WebhookResponseSoftDeleteInputDto,

    @GraphQLBodyContext() selection: WebhookResponseSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => WebhookResponseDeleteOutputDto, {
    name: WebhookResponseDeleteDto.metaname, 
    description: WebhookResponseDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => WebhookResponseDeleteInputDto }) 
    input: WebhookResponseDeleteInputDto,

    @GraphQLBodyContext() selection: WebhookResponseDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => WebhookResponseRestoreOutputDto, {
    name: WebhookResponseRestoreDto.metaname,
    description: WebhookResponseRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => WebhookResponseRestoreInputDto }) 
    input: WebhookResponseRestoreInputDto,
    
    @GraphQLBodyContext() selection: WebhookResponseRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [WebhookResponseUpsertOutputDto], {
    name:  `${WebhookResponseUpsertDto.metaname}`, 
    description: `${WebhookResponseUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [WebhookResponseUpsertInputDto]}) 
    input: WebhookResponseUpsertInputDto | WebhookResponseUpsertInputDto[],
    
    @GraphQLBodyContext() selection: WebhookResponseUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<WebhookResponseUpsertInputDto>(input, WebhookResponseUpsertInputDto);
    }
    const resp = await this.factory.upsertEngine.upsert(input, selection, info, ctx);
    return resp;
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => WebhookResponseSoftRemoveOutputDto, {
    name: WebhookResponseSoftRemoveDto.metaname, 
    description: WebhookResponseSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => WebhookResponseSoftRemoveInputDto }) 
    input: WebhookResponseSoftRemoveInputDto,

    @GraphQLBodyContext() selection: WebhookResponseSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => WebhookResponseRemoveOutputDto, {
    name: WebhookResponseRemoveDto.metaname, 
    description: WebhookResponseRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => WebhookResponseRemoveInputDto }) 
    input: WebhookResponseRemoveInputDto,
    
    @GraphQLBodyContext() selection: WebhookResponseRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => WebhookResponseRecoverOutputDto, {
    name: WebhookResponseRecoverDto.metaname,
    description: WebhookResponseRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => WebhookResponseRecoverInputDto }) 
    input: WebhookResponseRecoverInputDto,

    @GraphQLBodyContext() selection: WebhookResponseRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }
   
  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: WebhookResponseEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<WebhookResponseEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}