import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { ThirdPartyPlatformService } from './third.party.platform.service';
import { ThirdPartyPlatformEntity } from './entities/third.party.platform.entity';
import { ThirdPartyPlatformFactory } from './third.party.platform.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { ThirdPartyPlatformUploadOutputDto, ThirdPartyPlatformUploadDto, ThirdPartyPlatformUploadInputDto, ThirdPartyPlatformUploadDeleteOutputDto, ThirdPartyPlatformUploadDeleteDto, ThirdPartyPlatformUploadDeleteInputDto, ThirdPartyPlatformCreateDto, ThirdPartyPlatformCreateInputDto, ThirdPartyPlatformCreateOutputDto, ThirdPartyPlatformDeleteDto, ThirdPartyPlatformDeleteInputDto, ThirdPartyPlatformDeleteOutputDto, ThirdPartyPlatformFindDto, ThirdPartyPlatformFindInputDto, ThirdPartyPlatformFindOneByIdDto, ThirdPartyPlatformFindOneByIdInputDto, ThirdPartyPlatformFindOutputDto, ThirdPartyPlatformFindOutputRowsDto, ThirdPartyPlatformRecoverDto, ThirdPartyPlatformRecoverInputDto, ThirdPartyPlatformRecoverOutputDto, ThirdPartyPlatformRemoveDto, ThirdPartyPlatformRemoveInputDto, ThirdPartyPlatformRemoveOutputDto, ThirdPartyPlatformRestoreDto, ThirdPartyPlatformRestoreInputDto, ThirdPartyPlatformRestoreOutputDto, ThirdPartyPlatformSoftDeleteDto, ThirdPartyPlatformSoftDeleteInputDto, ThirdPartyPlatformSoftDeleteInputWhereDto, ThirdPartyPlatformSoftDeleteOutputDto, ThirdPartyPlatformSoftRemoveDto, ThirdPartyPlatformSoftRemoveInputDto, ThirdPartyPlatformSoftRemoveOutputDto, ThirdPartyPlatformUpdateDto, ThirdPartyPlatformUpdateInputDto, ThirdPartyPlatformUpdateInputSetsDto, ThirdPartyPlatformUpdateOutputDto, ThirdPartyPlatformUpsertDto, ThirdPartyPlatformUpsertInputDto, ThirdPartyPlatformUpsertOutputDto } from './dto/third.party.platform.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => ThirdPartyPlatformEntity)
export class ThirdPartyPlatformResolver
{
  constructor(
    protected readonly factory: ThirdPartyPlatformFactory,
    protected readonly service: ThirdPartyPlatformService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [ThirdPartyPlatformUploadOutput], { name:  `${ThirdPartyPlatformUploadDto.metaname}`, description: `${ThirdPartyPlatformUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => ThirdPartyPlatformUploadInputDto }) 
    input: ThirdPartyPlatformUploadInputDto,

    @GraphQLBodyContext() selection: ThirdPartyPlatformUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ThirdPartyPlatformUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [ThirdPartyPlatformUploadDeleteOutput], { name:  `${ThirdPartyPlatformUploadDeleteDto.metaname}`, description: `${ThirdPartyPlatformUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [ThirdPartyPlatformUploadDeleteInputDto] }) 
    input: ThirdPartyPlatformUploadDeleteInputDto | ThirdPartyPlatformUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: ThirdPartyPlatformUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ThirdPartyPlatformUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [ThirdPartyPlatformCreateOutputDto], {
    name:  `${ThirdPartyPlatformCreateDto.metaname}`, 
    description: `${ThirdPartyPlatformCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [ThirdPartyPlatformCreateInputDto] }) 
    input: ThirdPartyPlatformCreateInputDto | ThirdPartyPlatformCreateInputDto[],

    @GraphQLBodyContext() selection: ThirdPartyPlatformCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ThirdPartyPlatformCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ThirdPartyPlatformCreateInputDto>(input, ThirdPartyPlatformCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => ThirdPartyPlatformFindOutputDto, {
    name: ThirdPartyPlatformFindDto.metaname,
    description: ThirdPartyPlatformFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => ThirdPartyPlatformFindInputDto}) 
    filter: ThirdPartyPlatformFindInputDto,

    @GraphQLBodyContext() selection: ThirdPartyPlatformFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<ThirdPartyPlatformFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => ThirdPartyPlatformEntity, {
    name: ThirdPartyPlatformFindOneByIdDto.metaname, 
    description: ThirdPartyPlatformFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => ThirdPartyPlatformFindOneByIdInputDto }) 
    input: ThirdPartyPlatformFindOneByIdInputDto,

    @GraphQLBodyContext() selection: ThirdPartyPlatformEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<ThirdPartyPlatformEntity> {
    await this.validation.validateArrayInput<ThirdPartyPlatformFindOneByIdInputDto>([input], ThirdPartyPlatformFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => ThirdPartyPlatformUpdateOutputDto, {
    name: ThirdPartyPlatformUpdateDto.metaname, 
    description: ThirdPartyPlatformUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => ThirdPartyPlatformUpdateInputDto}) 
    input: ThirdPartyPlatformUpdateInputDto,

    @GraphQLBodyContext() selection: ThirdPartyPlatformUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ThirdPartyPlatformUpdateOutputDto> {
    await this.validation.validateArrayInput<ThirdPartyPlatformUpdateInputSetsDto>([input.sets], ThirdPartyPlatformUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => ThirdPartyPlatformSoftDeleteOutputDto, {
    name: ThirdPartyPlatformSoftDeleteDto.metaname, 
    description: ThirdPartyPlatformSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => ThirdPartyPlatformSoftDeleteInputDto }) 
    input: ThirdPartyPlatformSoftDeleteInputDto,

    @GraphQLBodyContext() selection: ThirdPartyPlatformSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ThirdPartyPlatformSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => ThirdPartyPlatformDeleteOutputDto, {
    name: ThirdPartyPlatformDeleteDto.metaname, 
    description: ThirdPartyPlatformDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => ThirdPartyPlatformDeleteInputDto }) 
    input: ThirdPartyPlatformDeleteInputDto,

    @GraphQLBodyContext() selection: ThirdPartyPlatformDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ThirdPartyPlatformDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => ThirdPartyPlatformRestoreOutputDto, {
    name: ThirdPartyPlatformRestoreDto.metaname,
    description: ThirdPartyPlatformRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => ThirdPartyPlatformRestoreInputDto }) 
    input: ThirdPartyPlatformRestoreInputDto,
    
    @GraphQLBodyContext() selection: ThirdPartyPlatformRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ThirdPartyPlatformRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [ThirdPartyPlatformUpsertOutputDto], {
    name:  `${ThirdPartyPlatformUpsertDto.metaname}`, 
    description: `${ThirdPartyPlatformUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [ThirdPartyPlatformUpsertInputDto]}) 
    input: ThirdPartyPlatformUpsertInputDto | ThirdPartyPlatformUpsertInputDto[],
    
    @GraphQLBodyContext() selection: ThirdPartyPlatformUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ThirdPartyPlatformUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ThirdPartyPlatformUpsertInputDto>(input, ThirdPartyPlatformUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => ThirdPartyPlatformSoftRemoveOutputDto, {
    name: ThirdPartyPlatformSoftRemoveDto.metaname, 
    description: ThirdPartyPlatformSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => ThirdPartyPlatformSoftRemoveInputDto }) 
    input: ThirdPartyPlatformSoftRemoveInputDto,

    @GraphQLBodyContext() selection: ThirdPartyPlatformSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ThirdPartyPlatformSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => ThirdPartyPlatformRemoveOutputDto, {
    name: ThirdPartyPlatformRemoveDto.metaname, 
    description: ThirdPartyPlatformRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => ThirdPartyPlatformRemoveInputDto }) 
    input: ThirdPartyPlatformRemoveInputDto,
    
    @GraphQLBodyContext() selection: ThirdPartyPlatformRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ThirdPartyPlatformRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => ThirdPartyPlatformRecoverOutputDto, {
    name: ThirdPartyPlatformRecoverDto.metaname,
    description: ThirdPartyPlatformRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => ThirdPartyPlatformRecoverInputDto }) 
    input: ThirdPartyPlatformRecoverInputDto,

    @GraphQLBodyContext() selection: ThirdPartyPlatformRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ThirdPartyPlatformRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }

  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████
// TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  
  @ResolveReference()
  async resolveReference(
    @Parent() entity: ThirdPartyPlatformEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<ThirdPartyPlatformEntity | null> {
    const resp = await this.factory.findEngine.resolveReference(entity, info, ctx);
    return resp;
  }

  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  /*@ResolveReference()
  async resolveReference(
    @Parent() entity: ThirdPartyPlatformEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<ThirdPartyPlatformEntity> {
    // set selection fields from GraphQLResolveInfo as per user selection. Perform any customisation here for selection set
    const selection = await this.factory.findEngine._getSelectionFromGraphQLResolveInfo(info);
    selection.id = true; // also set id field to selection set as without id relation will not be 100% accurate

    // set input to find by id
    const input = {id: entity.id as number}

    // request find by id from database
    const resp = await this.factory.findEngine.findOneById(input, selection, info, ctx);
    return resp;
  }*/

}