import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { WebhookResponseDataService } from './response.data.service';
import { WebhookResponseDataEntity } from './entities/response.data.entity';
import { WebhookResponseDataFactory } from './response.data.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { WebhookResponseDataUploadOutputDto, WebhookResponseDataUploadDto, WebhookResponseDataUploadInputDto, WebhookResponseDataUploadDeleteOutputDto, WebhookResponseDataUploadDeleteDto, WebhookResponseDataUploadDeleteInputDto, WebhookResponseDataCreateDto, WebhookResponseDataCreateInputDto, WebhookResponseDataCreateOutputDto, WebhookResponseDataDeleteDto, WebhookResponseDataDeleteInputDto, WebhookResponseDataDeleteOutputDto, WebhookResponseDataFindDto, WebhookResponseDataFindInputDto, WebhookResponseDataFindOneByIdDto, WebhookResponseDataFindOneByIdInputDto, WebhookResponseDataFindOutputDto, WebhookResponseDataFindOutputRowsDto, WebhookResponseDataRecoverDto, WebhookResponseDataRecoverInputDto, WebhookResponseDataRecoverOutputDto, WebhookResponseDataRemoveDto, WebhookResponseDataRemoveInputDto, WebhookResponseDataRemoveOutputDto, WebhookResponseDataRestoreDto, WebhookResponseDataRestoreInputDto, WebhookResponseDataRestoreOutputDto, WebhookResponseDataSoftDeleteDto, WebhookResponseDataSoftDeleteInputDto, WebhookResponseDataSoftDeleteInputWhereDto, WebhookResponseDataSoftDeleteOutputDto, WebhookResponseDataSoftRemoveDto, WebhookResponseDataSoftRemoveInputDto, WebhookResponseDataSoftRemoveOutputDto, WebhookResponseDataUpdateDto, WebhookResponseDataUpdateInputDto, WebhookResponseDataUpdateInputSetsDto, WebhookResponseDataUpdateOutputDto, WebhookResponseDataUpsertDto, WebhookResponseDataUpsertInputDto, WebhookResponseDataUpsertOutputDto } from './dto/response.data.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => WebhookResponseDataEntity)
export class WebhookResponseDataResolver
{
  constructor(
    protected readonly factory: WebhookResponseDataFactory,
    protected readonly service: WebhookResponseDataService,
    private readonly validation: DataValidationPipe
  ) {
  }
  
  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [WebhookResponseDataUploadOutput], { name:  `${WebhookResponseDataUploadDto.metaname}`, description: `${WebhookResponseDataUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => WebhookResponseDataUploadInputDto }) 
    input: WebhookResponseDataUploadInputDto,

    @GraphQLBodyContext() selection: WebhookResponseDataUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WebhookResponseDataUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [WebhookResponseDataUploadDeleteOutput], { name:  `${WebhookResponseDataUploadDeleteDto.metaname}`, description: `${WebhookResponseDataUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [WebhookResponseDataUploadDeleteInputDto] }) 
    input: WebhookResponseDataUploadDeleteInputDto | WebhookResponseDataUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: WebhookResponseDataUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WebhookResponseDataUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [WebhookResponseDataCreateOutputDto], {
    name:  `${WebhookResponseDataCreateDto.metaname}`, 
    description: `${WebhookResponseDataCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [WebhookResponseDataCreateInputDto] }) 
    input: WebhookResponseDataCreateInputDto | WebhookResponseDataCreateInputDto[],

    @GraphQLBodyContext() selection: WebhookResponseDataCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WebhookResponseDataCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<WebhookResponseDataCreateInputDto>(input, WebhookResponseDataCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => WebhookResponseDataFindOutputDto, {
    name: WebhookResponseDataFindDto.metaname,
    description: WebhookResponseDataFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => WebhookResponseDataFindInputDto}) 
    filter: WebhookResponseDataFindInputDto,

    @GraphQLBodyContext() selection: WebhookResponseDataFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<WebhookResponseDataFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => WebhookResponseDataEntity, {
    name: WebhookResponseDataFindOneByIdDto.metaname, 
    description: WebhookResponseDataFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => WebhookResponseDataFindOneByIdInputDto }) 
    input: WebhookResponseDataFindOneByIdInputDto,

    @GraphQLBodyContext() selection: WebhookResponseDataEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<WebhookResponseDataEntity> {
    await this.validation.validateArrayInput<WebhookResponseDataFindOneByIdInputDto>([input], WebhookResponseDataFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => WebhookResponseDataUpdateOutputDto, {
    name: WebhookResponseDataUpdateDto.metaname, 
    description: WebhookResponseDataUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => WebhookResponseDataUpdateInputDto}) 
    input: WebhookResponseDataUpdateInputDto,

    @GraphQLBodyContext() selection: WebhookResponseDataUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseDataUpdateOutputDto> {
    await this.validation.validateArrayInput<WebhookResponseDataUpdateInputSetsDto>([input.sets], WebhookResponseDataUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => WebhookResponseDataSoftDeleteOutputDto, {
    name: WebhookResponseDataSoftDeleteDto.metaname, 
    description: WebhookResponseDataSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => WebhookResponseDataSoftDeleteInputDto }) 
    input: WebhookResponseDataSoftDeleteInputDto,

    @GraphQLBodyContext() selection: WebhookResponseDataSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseDataSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => WebhookResponseDataDeleteOutputDto, {
    name: WebhookResponseDataDeleteDto.metaname, 
    description: WebhookResponseDataDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => WebhookResponseDataDeleteInputDto }) 
    input: WebhookResponseDataDeleteInputDto,

    @GraphQLBodyContext() selection: WebhookResponseDataDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseDataDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => WebhookResponseDataRestoreOutputDto, {
    name: WebhookResponseDataRestoreDto.metaname,
    description: WebhookResponseDataRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => WebhookResponseDataRestoreInputDto }) 
    input: WebhookResponseDataRestoreInputDto,
    
    @GraphQLBodyContext() selection: WebhookResponseDataRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseDataRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [WebhookResponseDataUpsertOutputDto], {
    name:  `${WebhookResponseDataUpsertDto.metaname}`, 
    description: `${WebhookResponseDataUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [WebhookResponseDataUpsertInputDto]}) 
    input: WebhookResponseDataUpsertInputDto | WebhookResponseDataUpsertInputDto[],
    
    @GraphQLBodyContext() selection: WebhookResponseDataUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseDataUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<WebhookResponseDataUpsertInputDto>(input, WebhookResponseDataUpsertInputDto);
    }
    const resp = this.factory.upsertEngine.upsert(input, selection, info, ctx);
    return resp;
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => WebhookResponseDataSoftRemoveOutputDto, {
    name: WebhookResponseDataSoftRemoveDto.metaname, 
    description: WebhookResponseDataSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => WebhookResponseDataSoftRemoveInputDto }) 
    input: WebhookResponseDataSoftRemoveInputDto,

    @GraphQLBodyContext() selection: WebhookResponseDataSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseDataSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => WebhookResponseDataRemoveOutputDto, {
    name: WebhookResponseDataRemoveDto.metaname, 
    description: WebhookResponseDataRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => WebhookResponseDataRemoveInputDto }) 
    input: WebhookResponseDataRemoveInputDto,
    
    @GraphQLBodyContext() selection: WebhookResponseDataRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseDataRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => WebhookResponseDataRecoverOutputDto, {
    name: WebhookResponseDataRecoverDto.metaname,
    description: WebhookResponseDataRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => WebhookResponseDataRecoverInputDto }) 
    input: WebhookResponseDataRecoverInputDto,

    @GraphQLBodyContext() selection: WebhookResponseDataRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebhookResponseDataRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }
   
  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: WebhookResponseDataEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<WebhookResponseDataEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}