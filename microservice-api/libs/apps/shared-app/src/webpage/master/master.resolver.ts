import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { WebPageMasterService } from './master.service';
import { WebPageMasterEntity } from './entities/master.entity';
import { WebPageMasterFactory } from './master.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { WebPageMasterUploadOutputDto, WebPageMasterUploadDto, WebPageMasterUploadInputDto, WebPageMasterUploadDeleteOutputDto, WebPageMasterUploadDeleteDto, WebPageMasterUploadDeleteInputDto, WebPageMasterCreateDto, WebPageMasterCreateInputDto, WebPageMasterCreateOutputDto, WebPageMasterDeleteDto, WebPageMasterDeleteInputDto, WebPageMasterDeleteOutputDto, WebPageMasterFindDto, WebPageMasterFindInputDto, WebPageMasterFindOneByIdDto, WebPageMasterFindOneByIdInputDto, WebPageMasterFindOutputDto, WebPageMasterFindOutputRowsDto, WebPageMasterRecoverDto, WebPageMasterRecoverInputDto, WebPageMasterRecoverOutputDto, WebPageMasterRemoveDto, WebPageMasterRemoveInputDto, WebPageMasterRemoveOutputDto, WebPageMasterRestoreDto, WebPageMasterRestoreInputDto, WebPageMasterRestoreOutputDto, WebPageMasterSoftDeleteDto, WebPageMasterSoftDeleteInputDto, WebPageMasterSoftDeleteInputWhereDto, WebPageMasterSoftDeleteOutputDto, WebPageMasterSoftRemoveDto, WebPageMasterSoftRemoveInputDto, WebPageMasterSoftRemoveOutputDto, WebPageMasterUpdateDto, WebPageMasterUpdateInputDto, WebPageMasterUpdateInputSetsDto, WebPageMasterUpdateOutputDto, WebPageMasterUpsertDto, WebPageMasterUpsertInputDto, WebPageMasterUpsertOutputDto } from './dto/master.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => WebPageMasterEntity)
export class WebPageMasterResolver
{
  constructor(
    protected readonly factory: WebPageMasterFactory,
    protected readonly service: WebPageMasterService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [WebPageMasterUploadOutput], { name:  `${WebPageMasterUploadDto.metaname}`, description: `${WebPageMasterUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => WebPageMasterUploadInputDto }) 
    input: WebPageMasterUploadInputDto,

    @GraphQLBodyContext() selection: WebPageMasterUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WebPageMasterUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [WebPageMasterUploadDeleteOutput], { name:  `${WebPageMasterUploadDeleteDto.metaname}`, description: `${WebPageMasterUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [WebPageMasterUploadDeleteInputDto] }) 
    input: WebPageMasterUploadDeleteInputDto | WebPageMasterUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: WebPageMasterUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WebPageMasterUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [WebPageMasterCreateOutputDto], {
    name:  `${WebPageMasterCreateDto.metaname}`, 
    description: `${WebPageMasterCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [WebPageMasterCreateInputDto] }) 
    input: WebPageMasterCreateInputDto | WebPageMasterCreateInputDto[],

    @GraphQLBodyContext() selection: WebPageMasterCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WebPageMasterCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<WebPageMasterCreateInputDto>(input, WebPageMasterCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => WebPageMasterFindOutputDto, {
    name: WebPageMasterFindDto.metaname,
    description: WebPageMasterFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => WebPageMasterFindInputDto}) 
    filter: WebPageMasterFindInputDto,

    @GraphQLBodyContext() selection: WebPageMasterFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<WebPageMasterFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => WebPageMasterEntity, {
    name: WebPageMasterFindOneByIdDto.metaname, 
    description: WebPageMasterFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => WebPageMasterFindOneByIdInputDto }) 
    input: WebPageMasterFindOneByIdInputDto,

    @GraphQLBodyContext() selection: WebPageMasterEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<WebPageMasterEntity> {
    await this.validation.validateArrayInput<WebPageMasterFindOneByIdInputDto>([input], WebPageMasterFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => WebPageMasterUpdateOutputDto, {
    name: WebPageMasterUpdateDto.metaname, 
    description: WebPageMasterUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => WebPageMasterUpdateInputDto}) 
    input: WebPageMasterUpdateInputDto,

    @GraphQLBodyContext() selection: WebPageMasterUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageMasterUpdateOutputDto> {
    await this.validation.validateArrayInput<WebPageMasterUpdateInputSetsDto>([input.sets], WebPageMasterUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => WebPageMasterSoftDeleteOutputDto, {
    name: WebPageMasterSoftDeleteDto.metaname, 
    description: WebPageMasterSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => WebPageMasterSoftDeleteInputDto }) 
    input: WebPageMasterSoftDeleteInputDto,

    @GraphQLBodyContext() selection: WebPageMasterSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageMasterSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => WebPageMasterDeleteOutputDto, {
    name: WebPageMasterDeleteDto.metaname, 
    description: WebPageMasterDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => WebPageMasterDeleteInputDto }) 
    input: WebPageMasterDeleteInputDto,

    @GraphQLBodyContext() selection: WebPageMasterDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageMasterDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => WebPageMasterRestoreOutputDto, {
    name: WebPageMasterRestoreDto.metaname,
    description: WebPageMasterRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => WebPageMasterRestoreInputDto }) 
    input: WebPageMasterRestoreInputDto,
    
    @GraphQLBodyContext() selection: WebPageMasterRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageMasterRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [WebPageMasterUpsertOutputDto], {
    name:  `${WebPageMasterUpsertDto.metaname}`, 
    description: `${WebPageMasterUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [WebPageMasterUpsertInputDto]}) 
    input: WebPageMasterUpsertInputDto | WebPageMasterUpsertInputDto[],
    
    @GraphQLBodyContext() selection: WebPageMasterUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageMasterUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<WebPageMasterUpsertInputDto>(input, WebPageMasterUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => WebPageMasterSoftRemoveOutputDto, {
    name: WebPageMasterSoftRemoveDto.metaname, 
    description: WebPageMasterSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => WebPageMasterSoftRemoveInputDto }) 
    input: WebPageMasterSoftRemoveInputDto,

    @GraphQLBodyContext() selection: WebPageMasterSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageMasterSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => WebPageMasterRemoveOutputDto, {
    name: WebPageMasterRemoveDto.metaname, 
    description: WebPageMasterRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => WebPageMasterRemoveInputDto }) 
    input: WebPageMasterRemoveInputDto,
    
    @GraphQLBodyContext() selection: WebPageMasterRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageMasterRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => WebPageMasterRecoverOutputDto, {
    name: WebPageMasterRecoverDto.metaname,
    description: WebPageMasterRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => WebPageMasterRecoverInputDto }) 
    input: WebPageMasterRecoverInputDto,

    @GraphQLBodyContext() selection: WebPageMasterRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageMasterRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: WebPageMasterEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<WebPageMasterEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}