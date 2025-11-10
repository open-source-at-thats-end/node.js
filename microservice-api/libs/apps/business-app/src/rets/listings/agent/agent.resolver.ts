import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { RetsListingAgentService } from './agent.service';
import { RetsListingAgentEntity } from './entities/agent.entity';
import { RetsListingAgentFactory } from './agent.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { RetsListingAgentCreateDto, RetsListingAgentCreateInputDto, RetsListingAgentCreateOutputDto, RetsListingAgentDeleteDto, RetsListingAgentDeleteInputDto, RetsListingAgentDeleteOutputDto, RetsListingAgentFindDto, RetsListingAgentFindInputDto, RetsListingAgentFindOneByIdDto, RetsListingAgentFindOneByIdInputDto, RetsListingAgentFindOutputDto, RetsListingAgentFindOutputRowsDto, RetsListingAgentRecoverDto, RetsListingAgentRecoverInputDto, RetsListingAgentRecoverOutputDto, RetsListingAgentRemoveDto, RetsListingAgentRemoveInputDto, RetsListingAgentRemoveOutputDto, RetsListingAgentRestoreDto, RetsListingAgentRestoreInputDto, RetsListingAgentRestoreOutputDto, RetsListingAgentSoftDeleteDto, RetsListingAgentSoftDeleteInputDto, RetsListingAgentSoftDeleteInputWhereDto, RetsListingAgentSoftDeleteOutputDto, RetsListingAgentSoftRemoveDto, RetsListingAgentSoftRemoveInputDto, RetsListingAgentSoftRemoveOutputDto, RetsListingAgentUpdateDto, RetsListingAgentUpdateInputDto, RetsListingAgentUpdateInputSetsDto, RetsListingAgentUpdateOutputDto, RetsListingAgentUploadDeleteDto, RetsListingAgentUploadDeleteInputDto, RetsListingAgentUploadDeleteOutputDto, RetsListingAgentUploadDto, RetsListingAgentUploadInputDto, RetsListingAgentUploadOutputDto, RetsListingAgentUpsertDto, RetsListingAgentUpsertInputDto, RetsListingAgentUpsertOutputDto } from './dto/agent.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => RetsListingAgentEntity)
export class RetsListingAgentResolver
{
  constructor(
    protected readonly factory: RetsListingAgentFactory,
    protected readonly service: RetsListingAgentService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [RetsListingAgentUploadOutput], { name:  `${RetsListingAgentUploadDto.metaname}`, description: `${RetsListingAgentUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => RetsListingAgentUploadInputDto }) 
    input: RetsListingAgentUploadInputDto,

    @GraphQLBodyContext() selection: RetsListingAgentUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingAgentUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [RetsListingAgentUploadDeleteOutput], { name:  `${RetsListingAgentUploadDeleteDto.metaname}`, description: `${RetsListingAgentUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingAgentUploadDeleteInputDto] }) 
    input: RetsListingAgentUploadDeleteInputDto | RetsListingAgentUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: RetsListingAgentUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingAgentUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [RetsListingAgentCreateOutputDto], {
    name:  `${RetsListingAgentCreateDto.metaname}`, 
    description: `${RetsListingAgentCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingAgentCreateInputDto] }) 
    input: RetsListingAgentCreateInputDto | RetsListingAgentCreateInputDto[],

    @GraphQLBodyContext() selection: RetsListingAgentCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingAgentCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingAgentCreateInputDto>(input, RetsListingAgentCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => RetsListingAgentFindOutputDto, {
    name: RetsListingAgentFindDto.metaname,
    description: RetsListingAgentFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => RetsListingAgentFindInputDto}) 
    filter: RetsListingAgentFindInputDto,

    @GraphQLBodyContext() selection: RetsListingAgentFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingAgentFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => RetsListingAgentEntity, {
    name: RetsListingAgentFindOneByIdDto.metaname, 
    description: RetsListingAgentFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingAgentFindOneByIdInputDto }) 
    input: RetsListingAgentFindOneByIdInputDto,

    @GraphQLBodyContext() selection: RetsListingAgentEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingAgentEntity> {
    await this.validation.validateArrayInput<RetsListingAgentFindOneByIdInputDto>([input], RetsListingAgentFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => RetsListingAgentUpdateOutputDto, {
    name: RetsListingAgentUpdateDto.metaname, 
    description: RetsListingAgentUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => RetsListingAgentUpdateInputDto}) 
    input: RetsListingAgentUpdateInputDto,

    @GraphQLBodyContext() selection: RetsListingAgentUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAgentUpdateOutputDto> {
    await this.validation.validateArrayInput<RetsListingAgentUpdateInputSetsDto>([input.sets], RetsListingAgentUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => RetsListingAgentSoftDeleteOutputDto, {
    name: RetsListingAgentSoftDeleteDto.metaname, 
    description: RetsListingAgentSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingAgentSoftDeleteInputDto }) 
    input: RetsListingAgentSoftDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingAgentSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAgentSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => RetsListingAgentDeleteOutputDto, {
    name: RetsListingAgentDeleteDto.metaname, 
    description: RetsListingAgentDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingAgentDeleteInputDto }) 
    input: RetsListingAgentDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingAgentDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAgentDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => RetsListingAgentRestoreOutputDto, {
    name: RetsListingAgentRestoreDto.metaname,
    description: RetsListingAgentRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingAgentRestoreInputDto }) 
    input: RetsListingAgentRestoreInputDto,
    
    @GraphQLBodyContext() selection: RetsListingAgentRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAgentRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [RetsListingAgentUpsertOutputDto], {
    name:  `${RetsListingAgentUpsertDto.metaname}`, 
    description: `${RetsListingAgentUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [RetsListingAgentUpsertInputDto]}) 
    input: RetsListingAgentUpsertInputDto | RetsListingAgentUpsertInputDto[],
    
    @GraphQLBodyContext() selection: RetsListingAgentUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAgentUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingAgentUpsertInputDto>(input, RetsListingAgentUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => RetsListingAgentSoftRemoveOutputDto, {
    name: RetsListingAgentSoftRemoveDto.metaname, 
    description: RetsListingAgentSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingAgentSoftRemoveInputDto }) 
    input: RetsListingAgentSoftRemoveInputDto,

    @GraphQLBodyContext() selection: RetsListingAgentSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAgentSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => RetsListingAgentRemoveOutputDto, {
    name: RetsListingAgentRemoveDto.metaname, 
    description: RetsListingAgentRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingAgentRemoveInputDto }) 
    input: RetsListingAgentRemoveInputDto,
    
    @GraphQLBodyContext() selection: RetsListingAgentRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAgentRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => RetsListingAgentRecoverOutputDto, {
    name: RetsListingAgentRecoverDto.metaname,
    description: RetsListingAgentRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingAgentRecoverInputDto }) 
    input: RetsListingAgentRecoverInputDto,

    @GraphQLBodyContext() selection: RetsListingAgentRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAgentRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }


}