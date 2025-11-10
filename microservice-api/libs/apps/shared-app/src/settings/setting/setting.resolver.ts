import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { SettingService } from './setting.service';
import { SettingEntity } from './entities/setting.entity';
import { SettingFactory } from './setting.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { SettingUploadOutputDto, SettingUploadDto, SettingUploadInputDto, SettingUploadDeleteOutputDto, SettingUploadDeleteDto, SettingUploadDeleteInputDto, SettingCreateDto, SettingCreateInputDto, SettingCreateOutputDto, SettingDeleteDto, SettingDeleteInputDto, SettingDeleteOutputDto, SettingFindDto, SettingFindInputDto, SettingFindOneByIdDto, SettingFindOneByIdInputDto, SettingFindOutputDto, SettingFindOutputRowsDto, SettingRecoverDto, SettingRecoverInputDto, SettingRecoverOutputDto, SettingRemoveDto, SettingRemoveInputDto, SettingRemoveOutputDto, SettingRestoreDto, SettingRestoreInputDto, SettingRestoreOutputDto, SettingSoftDeleteDto, SettingSoftDeleteInputDto, SettingSoftDeleteInputWhereDto, SettingSoftDeleteOutputDto, SettingSoftRemoveDto, SettingSoftRemoveInputDto, SettingSoftRemoveOutputDto, SettingUpdateDto, SettingUpdateInputDto, SettingUpdateInputSetsDto, SettingUpdateOutputDto, SettingUpsertDto, SettingUpsertInputDto, SettingUpsertOutputDto, SettingJsonDto, SettingJsonInputDto, SettingJsonFromLocalStorageDto } from './dto/setting.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';
import { GraphQLJSON } from 'graphql-scalars';
import { SettingType } from './setting.type';


@Resolver(() => SettingEntity)
export class SettingResolver
{
  constructor(
    protected readonly service: SettingService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [SettingUploadOutput], { name:  `${SettingUploadDto.metaname}`, description: `${SettingUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => SettingUploadInputDto }) 
    input: SettingUploadInputDto,

    @GraphQLBodyContext() selection: SettingUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SettingUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [SettingUploadDeleteOutput], { name:  `${SettingUploadDeleteDto.metaname}`, description: `${SettingUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [SettingUploadDeleteInputDto] }) 
    input: SettingUploadDeleteInputDto | SettingUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: SettingUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SettingUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [SettingCreateOutputDto], {
    name:  `${SettingCreateDto.metaname}`, 
    description: `${SettingCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [SettingCreateInputDto] }) 
    input: SettingCreateInputDto | SettingCreateInputDto[],

    @GraphQLBodyContext() selection: SettingCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SettingCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<SettingCreateInputDto>(input, SettingCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => SettingFindOutputDto, {
    name: SettingFindDto.metaname,
    description: SettingFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => SettingFindInputDto}) 
    filter: SettingFindInputDto,

    @GraphQLBodyContext() selection: SettingFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<SettingFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => SettingEntity, {
    name: SettingFindOneByIdDto.metaname, 
    description: SettingFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => SettingFindOneByIdInputDto }) 
    input: SettingFindOneByIdInputDto,

    @GraphQLBodyContext() selection: SettingEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<SettingEntity> {
    await this.validation.validateArrayInput<SettingFindOneByIdInputDto>([input], SettingFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => SettingUpdateOutputDto, {
    name: SettingUpdateDto.metaname, 
    description: SettingUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => SettingUpdateInputDto}) 
    input: SettingUpdateInputDto,

    @GraphQLBodyContext() selection: SettingUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingUpdateOutputDto> {
    await this.validation.validateArrayInput<SettingUpdateInputSetsDto>([input.sets], SettingUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => SettingSoftDeleteOutputDto, {
    name: SettingSoftDeleteDto.metaname, 
    description: SettingSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => SettingSoftDeleteInputDto }) 
    input: SettingSoftDeleteInputDto,

    @GraphQLBodyContext() selection: SettingSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => SettingDeleteOutputDto, {
    name: SettingDeleteDto.metaname, 
    description: SettingDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => SettingDeleteInputDto }) 
    input: SettingDeleteInputDto,

    @GraphQLBodyContext() selection: SettingDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => SettingRestoreOutputDto, {
    name: SettingRestoreDto.metaname,
    description: SettingRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => SettingRestoreInputDto }) 
    input: SettingRestoreInputDto,
    
    @GraphQLBodyContext() selection: SettingRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [SettingUpsertOutputDto], {
    name:  `${SettingUpsertDto.metaname}`, 
    description: `${SettingUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [SettingUpsertInputDto]}) 
    input: SettingUpsertInputDto | SettingUpsertInputDto[],
    
    @GraphQLBodyContext() selection: SettingUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<SettingUpsertInputDto>(input, SettingUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => SettingSoftRemoveOutputDto, {
    name: SettingSoftRemoveDto.metaname, 
    description: SettingSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => SettingSoftRemoveInputDto }) 
    input: SettingSoftRemoveInputDto,

    @GraphQLBodyContext() selection: SettingSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => SettingRemoveOutputDto, {
    name: SettingRemoveDto.metaname, 
    description: SettingRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => SettingRemoveInputDto }) 
    input: SettingRemoveInputDto,
    
    @GraphQLBodyContext() selection: SettingRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => SettingRecoverOutputDto, {
    name: SettingRecoverDto.metaname,
    description: SettingRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => SettingRecoverInputDto }) 
    input: SettingRecoverInputDto,

    @GraphQLBodyContext() selection: SettingRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }

  // ████ settingJson() ██████████████████████████████████████

  
  @Query(() => GraphQLJSON, {
    name: SettingJsonDto.metaname,
    description: SettingJsonDto.metadesc
  })
  async settingJson(
    @Context() ctx: any,

    @Args('input', {type:() => SettingJsonInputDto}) 
    input: SettingJsonInputDto,

    @GraphQLBodyContext() selection: any,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingType> {
    const resp = await this.service.settingJson(input);
    return resp;
  }

  // ████ settingJsonFromLocalStorage() ██████████████████████████████████████

  
  @Query(() => GraphQLJSON, {
    name: SettingJsonFromLocalStorageDto.metaname,
    description: SettingJsonFromLocalStorageDto.metadesc
  })
  async settingJsonFromLocalStorage(
    @Context() ctx: any,

    @Args('input', {type:() => SettingJsonInputDto}) 
    input: SettingJsonInputDto,

    @GraphQLBodyContext() selection: any,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingType> {
    const resp = await this.service.settingJsonFromLocalStorage(input);
    return resp;
  }
  

  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: SettingEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<SettingEntity | null> {
    return await this.service.findEngine.resolveReference(entity, info, ctx);
  }

}