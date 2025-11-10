import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { SettingCategoryService } from './category.service';
import { SettingCategoryEntity } from './entities/category.entity';
import { SettingCategoryFactory } from './category.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { SettingCategoryUploadOutputDto, SettingCategoryUploadDto, SettingCategoryUploadInputDto, SettingCategoryUploadDeleteOutputDto, SettingCategoryUploadDeleteDto, SettingCategoryUploadDeleteInputDto, SettingCategoryCreateDto, SettingCategoryCreateInputDto, SettingCategoryCreateOutputDto, SettingCategoryDeleteDto, SettingCategoryDeleteInputDto, SettingCategoryDeleteOutputDto, SettingCategoryFindDto, SettingCategoryFindInputDto, SettingCategoryFindOneByIdDto, SettingCategoryFindOneByIdInputDto, SettingCategoryFindOutputDto, SettingCategoryFindOutputRowsDto, SettingCategoryRecoverDto, SettingCategoryRecoverInputDto, SettingCategoryRecoverOutputDto, SettingCategoryRemoveDto, SettingCategoryRemoveInputDto, SettingCategoryRemoveOutputDto, SettingCategoryRestoreDto, SettingCategoryRestoreInputDto, SettingCategoryRestoreOutputDto, SettingCategorySoftDeleteDto, SettingCategorySoftDeleteInputDto, SettingCategorySoftDeleteInputWhereDto, SettingCategorySoftDeleteOutputDto, SettingCategorySoftRemoveDto, SettingCategorySoftRemoveInputDto, SettingCategorySoftRemoveOutputDto, SettingCategoryUpdateDto, SettingCategoryUpdateInputDto, SettingCategoryUpdateInputSetsDto, SettingCategoryUpdateOutputDto, SettingCategoryUpsertDto, SettingCategoryUpsertInputDto, SettingCategoryUpsertOutputDto } from './dto/category.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => SettingCategoryEntity)
export class SettingCategoryResolver
{
  constructor(
    protected readonly factory: SettingCategoryFactory,
    protected readonly service: SettingCategoryService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [SettingCategoryUploadOutput], { name:  `${SettingCategoryUploadDto.metaname}`, description: `${SettingCategoryUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => SettingCategoryUploadInputDto }) 
    input: SettingCategoryUploadInputDto,

    @GraphQLBodyContext() selection: SettingCategoryUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SettingCategoryUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [SettingCategoryUploadDeleteOutput], { name:  `${SettingCategoryUploadDeleteDto.metaname}`, description: `${SettingCategoryUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [SettingCategoryUploadDeleteInputDto] }) 
    input: SettingCategoryUploadDeleteInputDto | SettingCategoryUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: SettingCategoryUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SettingCategoryUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [SettingCategoryCreateOutputDto], {
    name:  `${SettingCategoryCreateDto.metaname}`, 
    description: `${SettingCategoryCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [SettingCategoryCreateInputDto] }) 
    input: SettingCategoryCreateInputDto | SettingCategoryCreateInputDto[],

    @GraphQLBodyContext() selection: SettingCategoryCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SettingCategoryCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<SettingCategoryCreateInputDto>(input, SettingCategoryCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => SettingCategoryFindOutputDto, {
    name: SettingCategoryFindDto.metaname,
    description: SettingCategoryFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => SettingCategoryFindInputDto}) 
    filter: SettingCategoryFindInputDto,

    @GraphQLBodyContext() selection: SettingCategoryFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<SettingCategoryFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => SettingCategoryEntity, {
    name: SettingCategoryFindOneByIdDto.metaname, 
    description: SettingCategoryFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => SettingCategoryFindOneByIdInputDto }) 
    input: SettingCategoryFindOneByIdInputDto,

    @GraphQLBodyContext() selection: SettingCategoryEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<SettingCategoryEntity> {
    await this.validation.validateArrayInput<SettingCategoryFindOneByIdInputDto>([input], SettingCategoryFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => SettingCategoryUpdateOutputDto, {
    name: SettingCategoryUpdateDto.metaname, 
    description: SettingCategoryUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => SettingCategoryUpdateInputDto}) 
    input: SettingCategoryUpdateInputDto,

    @GraphQLBodyContext() selection: SettingCategoryUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingCategoryUpdateOutputDto> {
    await this.validation.validateArrayInput<SettingCategoryUpdateInputSetsDto>([input.sets], SettingCategoryUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => SettingCategorySoftDeleteOutputDto, {
    name: SettingCategorySoftDeleteDto.metaname, 
    description: SettingCategorySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => SettingCategorySoftDeleteInputDto }) 
    input: SettingCategorySoftDeleteInputDto,

    @GraphQLBodyContext() selection: SettingCategorySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingCategorySoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => SettingCategoryDeleteOutputDto, {
    name: SettingCategoryDeleteDto.metaname, 
    description: SettingCategoryDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => SettingCategoryDeleteInputDto }) 
    input: SettingCategoryDeleteInputDto,

    @GraphQLBodyContext() selection: SettingCategoryDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingCategoryDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => SettingCategoryRestoreOutputDto, {
    name: SettingCategoryRestoreDto.metaname,
    description: SettingCategoryRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => SettingCategoryRestoreInputDto }) 
    input: SettingCategoryRestoreInputDto,
    
    @GraphQLBodyContext() selection: SettingCategoryRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingCategoryRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [SettingCategoryUpsertOutputDto], {
    name:  `${SettingCategoryUpsertDto.metaname}`, 
    description: `${SettingCategoryUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [SettingCategoryUpsertInputDto]}) 
    input: SettingCategoryUpsertInputDto | SettingCategoryUpsertInputDto[],
    
    @GraphQLBodyContext() selection: SettingCategoryUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingCategoryUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<SettingCategoryUpsertInputDto>(input, SettingCategoryUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => SettingCategorySoftRemoveOutputDto, {
    name: SettingCategorySoftRemoveDto.metaname, 
    description: SettingCategorySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => SettingCategorySoftRemoveInputDto }) 
    input: SettingCategorySoftRemoveInputDto,

    @GraphQLBodyContext() selection: SettingCategorySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingCategorySoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => SettingCategoryRemoveOutputDto, {
    name: SettingCategoryRemoveDto.metaname, 
    description: SettingCategoryRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => SettingCategoryRemoveInputDto }) 
    input: SettingCategoryRemoveInputDto,
    
    @GraphQLBodyContext() selection: SettingCategoryRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingCategoryRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => SettingCategoryRecoverOutputDto, {
    name: SettingCategoryRecoverDto.metaname,
    description: SettingCategoryRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => SettingCategoryRecoverInputDto }) 
    input: SettingCategoryRecoverInputDto,

    @GraphQLBodyContext() selection: SettingCategoryRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingCategoryRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: SettingCategoryEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<SettingCategoryEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }

}