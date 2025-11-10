import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { SettingPreferenceService } from './preference.service';
import { SettingPreferenceEntity } from './entities/preference.entity';
import { SettingPreferenceFactory } from './preference.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { SettingPreferenceUploadOutputDto, SettingPreferenceUploadDto, SettingPreferenceUploadInputDto, SettingPreferenceUploadDeleteOutputDto, SettingPreferenceUploadDeleteDto, SettingPreferenceUploadDeleteInputDto, SettingPreferenceCreateDto, SettingPreferenceCreateInputDto, SettingPreferenceCreateOutputDto, SettingPreferenceDeleteDto, SettingPreferenceDeleteInputDto, SettingPreferenceDeleteOutputDto, SettingPreferenceFindDto, SettingPreferenceFindInputDto, SettingPreferenceFindOneByIdDto, SettingPreferenceFindOneByIdInputDto, SettingPreferenceFindOutputDto, SettingPreferenceFindOutputRowsDto, SettingPreferenceRecoverDto, SettingPreferenceRecoverInputDto, SettingPreferenceRecoverOutputDto, SettingPreferenceRemoveDto, SettingPreferenceRemoveInputDto, SettingPreferenceRemoveOutputDto, SettingPreferenceRestoreDto, SettingPreferenceRestoreInputDto, SettingPreferenceRestoreOutputDto, SettingPreferenceSoftDeleteDto, SettingPreferenceSoftDeleteInputDto, SettingPreferenceSoftDeleteInputWhereDto, SettingPreferenceSoftDeleteOutputDto, SettingPreferenceSoftRemoveDto, SettingPreferenceSoftRemoveInputDto, SettingPreferenceSoftRemoveOutputDto, SettingPreferenceUpdateDto, SettingPreferenceUpdateInputDto, SettingPreferenceUpdateInputSetsDto, SettingPreferenceUpdateOutputDto, SettingPreferenceUpsertDto, SettingPreferenceUpsertInputDto, SettingPreferenceUpsertOutputDto, SettingPreferenceJsonInputDto, SettingPreferenceJsonDto } from './dto/preference.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';
import { GraphQLJSON } from 'graphql-scalars';
import { SettingPreferenceType } from './preference.type';


@Resolver(() => SettingPreferenceEntity)
export class SettingPreferenceResolver
{
  constructor(
    protected readonly service: SettingPreferenceService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [SettingPreferenceUploadOutput], { name:  `${SettingPreferenceUploadDto.metaname}`, description: `${SettingPreferenceUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => SettingPreferenceUploadInputDto }) 
    input: SettingPreferenceUploadInputDto,

    @GraphQLBodyContext() selection: SettingPreferenceUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SettingPreferenceUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [SettingPreferenceUploadDeleteOutput], { name:  `${SettingPreferenceUploadDeleteDto.metaname}`, description: `${SettingPreferenceUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [SettingPreferenceUploadDeleteInputDto] }) 
    input: SettingPreferenceUploadDeleteInputDto | SettingPreferenceUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: SettingPreferenceUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SettingPreferenceUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [SettingPreferenceCreateOutputDto], {
    name:  `${SettingPreferenceCreateDto.metaname}`, 
    description: `${SettingPreferenceCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [SettingPreferenceCreateInputDto] }) 
    input: SettingPreferenceCreateInputDto | SettingPreferenceCreateInputDto[],

    @GraphQLBodyContext() selection: SettingPreferenceCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SettingPreferenceCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<SettingPreferenceCreateInputDto>(input, SettingPreferenceCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => SettingPreferenceFindOutputDto, {
    name: SettingPreferenceFindDto.metaname,
    description: SettingPreferenceFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => SettingPreferenceFindInputDto}) 
    filter: SettingPreferenceFindInputDto,

    @GraphQLBodyContext() selection: SettingPreferenceFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<SettingPreferenceFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => SettingPreferenceEntity, {
    name: SettingPreferenceFindOneByIdDto.metaname, 
    description: SettingPreferenceFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => SettingPreferenceFindOneByIdInputDto }) 
    input: SettingPreferenceFindOneByIdInputDto,

    @GraphQLBodyContext() selection: SettingPreferenceEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<SettingPreferenceEntity> {
    await this.validation.validateArrayInput<SettingPreferenceFindOneByIdInputDto>([input], SettingPreferenceFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => SettingPreferenceUpdateOutputDto, {
    name: SettingPreferenceUpdateDto.metaname, 
    description: SettingPreferenceUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => SettingPreferenceUpdateInputDto}) 
    input: SettingPreferenceUpdateInputDto,

    @GraphQLBodyContext() selection: SettingPreferenceUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingPreferenceUpdateOutputDto> {
    await this.validation.validateArrayInput<SettingPreferenceUpdateInputSetsDto>([input.sets], SettingPreferenceUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => SettingPreferenceSoftDeleteOutputDto, {
    name: SettingPreferenceSoftDeleteDto.metaname, 
    description: SettingPreferenceSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => SettingPreferenceSoftDeleteInputDto }) 
    input: SettingPreferenceSoftDeleteInputDto,

    @GraphQLBodyContext() selection: SettingPreferenceSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingPreferenceSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => SettingPreferenceDeleteOutputDto, {
    name: SettingPreferenceDeleteDto.metaname, 
    description: SettingPreferenceDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => SettingPreferenceDeleteInputDto }) 
    input: SettingPreferenceDeleteInputDto,

    @GraphQLBodyContext() selection: SettingPreferenceDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingPreferenceDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => SettingPreferenceRestoreOutputDto, {
    name: SettingPreferenceRestoreDto.metaname,
    description: SettingPreferenceRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => SettingPreferenceRestoreInputDto }) 
    input: SettingPreferenceRestoreInputDto,
    
    @GraphQLBodyContext() selection: SettingPreferenceRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingPreferenceRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [SettingPreferenceUpsertOutputDto], {
    name:  `${SettingPreferenceUpsertDto.metaname}`, 
    description: `${SettingPreferenceUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [SettingPreferenceUpsertInputDto]}) 
    input: SettingPreferenceUpsertInputDto | SettingPreferenceUpsertInputDto[],
    
    @GraphQLBodyContext() selection: SettingPreferenceUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingPreferenceUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<SettingPreferenceUpsertInputDto>(input, SettingPreferenceUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => SettingPreferenceSoftRemoveOutputDto, {
    name: SettingPreferenceSoftRemoveDto.metaname, 
    description: SettingPreferenceSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => SettingPreferenceSoftRemoveInputDto }) 
    input: SettingPreferenceSoftRemoveInputDto,

    @GraphQLBodyContext() selection: SettingPreferenceSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingPreferenceSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => SettingPreferenceRemoveOutputDto, {
    name: SettingPreferenceRemoveDto.metaname, 
    description: SettingPreferenceRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => SettingPreferenceRemoveInputDto }) 
    input: SettingPreferenceRemoveInputDto,
    
    @GraphQLBodyContext() selection: SettingPreferenceRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingPreferenceRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => SettingPreferenceRecoverOutputDto, {
    name: SettingPreferenceRecoverDto.metaname,
    description: SettingPreferenceRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => SettingPreferenceRecoverInputDto }) 
    input: SettingPreferenceRecoverInputDto,

    @GraphQLBodyContext() selection: SettingPreferenceRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingPreferenceRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }

  // ████ settingPreferenceJson() ██████████████████████████████████████

  @Query(() => GraphQLJSON, {
    name: SettingPreferenceJsonDto.metaname,
    description: SettingPreferenceJsonDto.metadesc
  })
  async settingPreferenceJson(
    @Context() ctx: any,

    @Args('input', {type:() => SettingPreferenceJsonInputDto}) 
    input: SettingPreferenceJsonInputDto,

    @GraphQLBodyContext() selection: any,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingPreferenceType> {
    const resp = await this.service.settingPreferenceJson(input);
    return resp;
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: SettingPreferenceEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<SettingPreferenceEntity | null> {
    return await this.service.findEngine.resolveReference(entity, info, ctx);
  }

}