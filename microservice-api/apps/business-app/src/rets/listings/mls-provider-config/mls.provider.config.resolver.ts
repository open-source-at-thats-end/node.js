import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { RetsMlsProviderConfigService } from './mls.provider.config.service';
import { RetsMlsProviderConfigEntity } from './entities/mls.provider.config.entity';
import { RetsMlsProviderConfigFactory } from './mls.provider.config.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { RetsMlsProviderConfigCreateDto, RetsMlsProviderConfigCreateInputDto, RetsMlsProviderConfigCreateOutputDto, RetsMlsProviderConfigDeleteDto, RetsMlsProviderConfigDeleteInputDto, RetsMlsProviderConfigDeleteOutputDto, RetsMlsProviderConfigFindDto, RetsMlsProviderConfigFindInputDto, RetsMlsProviderConfigFindOneByIdDto, RetsMlsProviderConfigFindOneByIdInputDto, RetsMlsProviderConfigFindOutputDto, RetsMlsProviderConfigFindOutputRowsDto, RetsMlsProviderConfigRecoverDto, RetsMlsProviderConfigRecoverInputDto, RetsMlsProviderConfigRecoverOutputDto, RetsMlsProviderConfigRemoveDto, RetsMlsProviderConfigRemoveInputDto, RetsMlsProviderConfigRemoveOutputDto, RetsMlsProviderConfigRestoreDto, RetsMlsProviderConfigRestoreInputDto, RetsMlsProviderConfigRestoreOutputDto, RetsMlsProviderConfigSoftDeleteDto, RetsMlsProviderConfigSoftDeleteInputDto, RetsMlsProviderConfigSoftDeleteInputWhereDto, RetsMlsProviderConfigSoftDeleteOutputDto, RetsMlsProviderConfigSoftRemoveDto, RetsMlsProviderConfigSoftRemoveInputDto, RetsMlsProviderConfigSoftRemoveOutputDto, RetsMlsProviderConfigUpdateDto, RetsMlsProviderConfigUpdateInputDto, RetsMlsProviderConfigUpdateInputSetsDto, RetsMlsProviderConfigUpdateOutputDto, RetsMlsProviderConfigUploadDeleteDto, RetsMlsProviderConfigUploadDeleteInputDto, RetsMlsProviderConfigUploadDeleteOutputDto, RetsMlsProviderConfigUploadDto, RetsMlsProviderConfigUploadInputDto, RetsMlsProviderConfigUploadOutputDto, RetsMlsProviderConfigUpsertDto, RetsMlsProviderConfigUpsertInputDto, RetsMlsProviderConfigUpsertOutputDto } from './dto/mls.provider.config.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => RetsMlsProviderConfigEntity)
export class RetsMlsProviderConfigResolver
{
  constructor(
    protected readonly factory: RetsMlsProviderConfigFactory,
    protected readonly service: RetsMlsProviderConfigService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [RetsMlsProviderConfigUploadOutput], { name:  `${RetsMlsProviderConfigUploadDto.metaname}`, description: `${RetsMlsProviderConfigUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => RetsMlsProviderConfigUploadInputDto }) 
    input: RetsMlsProviderConfigUploadInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderConfigUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsMlsProviderConfigUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [RetsMlsProviderConfigUploadDeleteOutput], { name:  `${RetsMlsProviderConfigUploadDeleteDto.metaname}`, description: `${RetsMlsProviderConfigUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsMlsProviderConfigUploadDeleteInputDto] }) 
    input: RetsMlsProviderConfigUploadDeleteInputDto | RetsMlsProviderConfigUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: RetsMlsProviderConfigUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsMlsProviderConfigUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [RetsMlsProviderConfigCreateOutputDto], {
    name:  `${RetsMlsProviderConfigCreateDto.metaname}`, 
    description: `${RetsMlsProviderConfigCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsMlsProviderConfigCreateInputDto] }) 
    input: RetsMlsProviderConfigCreateInputDto | RetsMlsProviderConfigCreateInputDto[],

    @GraphQLBodyContext() selection: RetsMlsProviderConfigCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsMlsProviderConfigCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsMlsProviderConfigCreateInputDto>(input, RetsMlsProviderConfigCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => RetsMlsProviderConfigFindOutputDto, {
    name: RetsMlsProviderConfigFindDto.metaname,
    description: RetsMlsProviderConfigFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => RetsMlsProviderConfigFindInputDto}) 
    filter: RetsMlsProviderConfigFindInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderConfigFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsMlsProviderConfigFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => RetsMlsProviderConfigEntity, {
    name: RetsMlsProviderConfigFindOneByIdDto.metaname, 
    description: RetsMlsProviderConfigFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => RetsMlsProviderConfigFindOneByIdInputDto }) 
    input: RetsMlsProviderConfigFindOneByIdInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderConfigEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsMlsProviderConfigEntity> {
    await this.validation.validateArrayInput<RetsMlsProviderConfigFindOneByIdInputDto>([input], RetsMlsProviderConfigFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => RetsMlsProviderConfigUpdateOutputDto, {
    name: RetsMlsProviderConfigUpdateDto.metaname, 
    description: RetsMlsProviderConfigUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => RetsMlsProviderConfigUpdateInputDto}) 
    input: RetsMlsProviderConfigUpdateInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderConfigUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderConfigUpdateOutputDto> {
    await this.validation.validateArrayInput<RetsMlsProviderConfigUpdateInputSetsDto>([input.sets], RetsMlsProviderConfigUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => RetsMlsProviderConfigSoftDeleteOutputDto, {
    name: RetsMlsProviderConfigSoftDeleteDto.metaname, 
    description: RetsMlsProviderConfigSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsMlsProviderConfigSoftDeleteInputDto }) 
    input: RetsMlsProviderConfigSoftDeleteInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderConfigSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderConfigSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => RetsMlsProviderConfigDeleteOutputDto, {
    name: RetsMlsProviderConfigDeleteDto.metaname, 
    description: RetsMlsProviderConfigDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsMlsProviderConfigDeleteInputDto }) 
    input: RetsMlsProviderConfigDeleteInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderConfigDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderConfigDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => RetsMlsProviderConfigRestoreOutputDto, {
    name: RetsMlsProviderConfigRestoreDto.metaname,
    description: RetsMlsProviderConfigRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => RetsMlsProviderConfigRestoreInputDto }) 
    input: RetsMlsProviderConfigRestoreInputDto,
    
    @GraphQLBodyContext() selection: RetsMlsProviderConfigRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderConfigRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [RetsMlsProviderConfigUpsertOutputDto], {
    name:  `${RetsMlsProviderConfigUpsertDto.metaname}`, 
    description: `${RetsMlsProviderConfigUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [RetsMlsProviderConfigUpsertInputDto]}) 
    input: RetsMlsProviderConfigUpsertInputDto | RetsMlsProviderConfigUpsertInputDto[],
    
    @GraphQLBodyContext() selection: RetsMlsProviderConfigUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderConfigUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsMlsProviderConfigUpsertInputDto>(input, RetsMlsProviderConfigUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => RetsMlsProviderConfigSoftRemoveOutputDto, {
    name: RetsMlsProviderConfigSoftRemoveDto.metaname, 
    description: RetsMlsProviderConfigSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsMlsProviderConfigSoftRemoveInputDto }) 
    input: RetsMlsProviderConfigSoftRemoveInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderConfigSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderConfigSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => RetsMlsProviderConfigRemoveOutputDto, {
    name: RetsMlsProviderConfigRemoveDto.metaname, 
    description: RetsMlsProviderConfigRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsMlsProviderConfigRemoveInputDto }) 
    input: RetsMlsProviderConfigRemoveInputDto,
    
    @GraphQLBodyContext() selection: RetsMlsProviderConfigRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderConfigRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => RetsMlsProviderConfigRecoverOutputDto, {
    name: RetsMlsProviderConfigRecoverDto.metaname,
    description: RetsMlsProviderConfigRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => RetsMlsProviderConfigRecoverInputDto }) 
    input: RetsMlsProviderConfigRecoverInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderConfigRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderConfigRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }


 

}