import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { MeasurementCategoryService } from './category.service';
import { MeasurementCategoryEntity } from './entities/measurement.category.entity';
import { MeasurementCategoryFactory } from './category.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { MeasurementCategoryUploadOutputDto, MeasurementCategoryUploadDto, MeasurementCategoryUploadInputDto, MeasurementCategoryUploadDeleteOutputDto, MeasurementCategoryUploadDeleteDto, MeasurementCategoryUploadDeleteInputDto, MeasurementCategoryCreateDto, MeasurementCategoryCreateInputDto, MeasurementCategoryCreateOutputDto, MeasurementCategoryDeleteDto, MeasurementCategoryDeleteInputDto, MeasurementCategoryDeleteOutputDto, MeasurementCategoryFindDto, MeasurementCategoryFindInputDto, MeasurementCategoryFindOneByIdDto, MeasurementCategoryFindOneByIdInputDto, MeasurementCategoryFindOutputDto, MeasurementCategoryFindOutputRowsDto, MeasurementCategoryRecoverDto, MeasurementCategoryRecoverInputDto, MeasurementCategoryRecoverOutputDto, MeasurementCategoryRemoveDto, MeasurementCategoryRemoveInputDto, MeasurementCategoryRemoveOutputDto, MeasurementCategoryRestoreDto, MeasurementCategoryRestoreInputDto, MeasurementCategoryRestoreOutputDto, MeasurementCategorySoftDeleteDto, MeasurementCategorySoftDeleteInputDto, MeasurementCategorySoftDeleteInputWhereDto, MeasurementCategorySoftDeleteOutputDto, MeasurementCategorySoftRemoveDto, MeasurementCategorySoftRemoveInputDto, MeasurementCategorySoftRemoveOutputDto, MeasurementCategoryUpdateDto, MeasurementCategoryUpdateInputDto, MeasurementCategoryUpdateInputSetsDto, MeasurementCategoryUpdateOutputDto, MeasurementCategoryUpsertDto, MeasurementCategoryUpsertInputDto, MeasurementCategoryUpsertOutputDto } from './dto/category.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => MeasurementCategoryEntity)
export class MeasurementCategoryResolver
{
  constructor(
    protected readonly factory: MeasurementCategoryFactory,
    protected readonly service: MeasurementCategoryService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [MeasurementCategoryUploadOutput], { name:  `${MeasurementCategoryUploadDto.metaname}`, description: `${MeasurementCategoryUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => MeasurementCategoryUploadInputDto }) 
    input: MeasurementCategoryUploadInputDto,

    @GraphQLBodyContext() selection: MeasurementCategoryUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<MeasurementCategoryUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [MeasurementCategoryUploadDeleteOutput], { name:  `${MeasurementCategoryUploadDeleteDto.metaname}`, description: `${MeasurementCategoryUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [MeasurementCategoryUploadDeleteInputDto] }) 
    input: MeasurementCategoryUploadDeleteInputDto | MeasurementCategoryUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: MeasurementCategoryUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<MeasurementCategoryUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [MeasurementCategoryCreateOutputDto], {
    name:  `${MeasurementCategoryCreateDto.metaname}`, 
    description: `${MeasurementCategoryCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [MeasurementCategoryCreateInputDto] }) 
    input: MeasurementCategoryCreateInputDto | MeasurementCategoryCreateInputDto[],

    @GraphQLBodyContext() selection: MeasurementCategoryCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<MeasurementCategoryCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<MeasurementCategoryCreateInputDto>(input, MeasurementCategoryCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => MeasurementCategoryFindOutputDto, {
    name: MeasurementCategoryFindDto.metaname,
    description: MeasurementCategoryFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => MeasurementCategoryFindInputDto}) 
    filter: MeasurementCategoryFindInputDto,

    @GraphQLBodyContext() selection: MeasurementCategoryFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<MeasurementCategoryFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => MeasurementCategoryEntity, {
    name: MeasurementCategoryFindOneByIdDto.metaname, 
    description: MeasurementCategoryFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => MeasurementCategoryFindOneByIdInputDto }) 
    input: MeasurementCategoryFindOneByIdInputDto,

    @GraphQLBodyContext() selection: MeasurementCategoryEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<MeasurementCategoryEntity> {
    await this.validation.validateArrayInput<MeasurementCategoryFindOneByIdInputDto>([input], MeasurementCategoryFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => MeasurementCategoryUpdateOutputDto, {
    name: MeasurementCategoryUpdateDto.metaname, 
    description: MeasurementCategoryUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => MeasurementCategoryUpdateInputDto}) 
    input: MeasurementCategoryUpdateInputDto,

    @GraphQLBodyContext() selection: MeasurementCategoryUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementCategoryUpdateOutputDto> {
    await this.validation.validateArrayInput<MeasurementCategoryUpdateInputSetsDto>([input.sets], MeasurementCategoryUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => MeasurementCategorySoftDeleteOutputDto, {
    name: MeasurementCategorySoftDeleteDto.metaname, 
    description: MeasurementCategorySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => MeasurementCategorySoftDeleteInputDto }) 
    input: MeasurementCategorySoftDeleteInputDto,

    @GraphQLBodyContext() selection: MeasurementCategorySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementCategorySoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => MeasurementCategoryDeleteOutputDto, {
    name: MeasurementCategoryDeleteDto.metaname, 
    description: MeasurementCategoryDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => MeasurementCategoryDeleteInputDto }) 
    input: MeasurementCategoryDeleteInputDto,

    @GraphQLBodyContext() selection: MeasurementCategoryDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementCategoryDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => MeasurementCategoryRestoreOutputDto, {
    name: MeasurementCategoryRestoreDto.metaname,
    description: MeasurementCategoryRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => MeasurementCategoryRestoreInputDto }) 
    input: MeasurementCategoryRestoreInputDto,
    
    @GraphQLBodyContext() selection: MeasurementCategoryRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementCategoryRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [MeasurementCategoryUpsertOutputDto], {
    name:  `${MeasurementCategoryUpsertDto.metaname}`, 
    description: `${MeasurementCategoryUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [MeasurementCategoryUpsertInputDto]}) 
    input: MeasurementCategoryUpsertInputDto | MeasurementCategoryUpsertInputDto[],
    
    @GraphQLBodyContext() selection: MeasurementCategoryUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementCategoryUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<MeasurementCategoryUpsertInputDto>(input, MeasurementCategoryUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => MeasurementCategorySoftRemoveOutputDto, {
    name: MeasurementCategorySoftRemoveDto.metaname, 
    description: MeasurementCategorySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => MeasurementCategorySoftRemoveInputDto }) 
    input: MeasurementCategorySoftRemoveInputDto,

    @GraphQLBodyContext() selection: MeasurementCategorySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementCategorySoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => MeasurementCategoryRemoveOutputDto, {
    name: MeasurementCategoryRemoveDto.metaname, 
    description: MeasurementCategoryRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => MeasurementCategoryRemoveInputDto }) 
    input: MeasurementCategoryRemoveInputDto,
    
    @GraphQLBodyContext() selection: MeasurementCategoryRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementCategoryRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => MeasurementCategoryRecoverOutputDto, {
    name: MeasurementCategoryRecoverDto.metaname,
    description: MeasurementCategoryRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => MeasurementCategoryRecoverInputDto }) 
    input: MeasurementCategoryRecoverInputDto,

    @GraphQLBodyContext() selection: MeasurementCategoryRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementCategoryRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: MeasurementCategoryEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<MeasurementCategoryEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}