import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { FaqCategoryService } from './category.service';
import { FaqCategoryEntity } from './entities/category.entity';
import { FaqCategoryFactory } from './category.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { FaqCategoryUploadOutputDto, FaqCategoryUploadDto, FaqCategoryUploadInputDto, FaqCategoryUploadDeleteOutputDto, FaqCategoryUploadDeleteDto, FaqCategoryUploadDeleteInputDto, FaqCategoryCreateDto, FaqCategoryCreateInputDto, FaqCategoryCreateOutputDto, FaqCategoryDeleteDto, FaqCategoryDeleteInputDto, FaqCategoryDeleteOutputDto, FaqCategoryFindDto, FaqCategoryFindInputDto, FaqCategoryFindOneByIdDto, FaqCategoryFindOneByIdInputDto, FaqCategoryFindOutputDto, FaqCategoryFindOutputRowsDto, FaqCategoryRecoverDto, FaqCategoryRecoverInputDto, FaqCategoryRecoverOutputDto, FaqCategoryRemoveDto, FaqCategoryRemoveInputDto, FaqCategoryRemoveOutputDto, FaqCategoryRestoreDto, FaqCategoryRestoreInputDto, FaqCategoryRestoreOutputDto, FaqCategorySoftDeleteDto, FaqCategorySoftDeleteInputDto, FaqCategorySoftDeleteInputWhereDto, FaqCategorySoftDeleteOutputDto, FaqCategorySoftRemoveDto, FaqCategorySoftRemoveInputDto, FaqCategorySoftRemoveOutputDto, FaqCategoryUpdateDto, FaqCategoryUpdateInputDto, FaqCategoryUpdateInputSetsDto, FaqCategoryUpdateOutputDto, FaqCategoryUpsertDto, FaqCategoryUpsertInputDto, FaqCategoryUpsertOutputDto } from './dto/category.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => FaqCategoryEntity)
export class FaqCategoryResolver
{
  constructor(
    protected readonly factory: FaqCategoryFactory,
    protected readonly service: FaqCategoryService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [FaqCategoryUploadOutput], { name:  `${FaqCategoryUploadDto.metaname}`, description: `${FaqCategoryUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => FaqCategoryUploadInputDto }) 
    input: FaqCategoryUploadInputDto,

    @GraphQLBodyContext() selection: FaqCategoryUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<FaqCategoryUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [FaqCategoryUploadDeleteOutput], { name:  `${FaqCategoryUploadDeleteDto.metaname}`, description: `${FaqCategoryUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [FaqCategoryUploadDeleteInputDto] }) 
    input: FaqCategoryUploadDeleteInputDto | FaqCategoryUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: FaqCategoryUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<FaqCategoryUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [FaqCategoryCreateOutputDto], {
    name:  `${FaqCategoryCreateDto.metaname}`, 
    description: `${FaqCategoryCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [FaqCategoryCreateInputDto] }) 
    input: FaqCategoryCreateInputDto | FaqCategoryCreateInputDto[],

    @GraphQLBodyContext() selection: FaqCategoryCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<FaqCategoryCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<FaqCategoryCreateInputDto>(input, FaqCategoryCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => FaqCategoryFindOutputDto, {
    name: FaqCategoryFindDto.metaname,
    description: FaqCategoryFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => FaqCategoryFindInputDto}) 
    filter: FaqCategoryFindInputDto,

    @GraphQLBodyContext() selection: FaqCategoryFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<FaqCategoryFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => FaqCategoryEntity, {
    name: FaqCategoryFindOneByIdDto.metaname, 
    description: FaqCategoryFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => FaqCategoryFindOneByIdInputDto }) 
    input: FaqCategoryFindOneByIdInputDto,

    @GraphQLBodyContext() selection: FaqCategoryEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<FaqCategoryEntity> {
    await this.validation.validateArrayInput<FaqCategoryFindOneByIdInputDto>([input], FaqCategoryFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => FaqCategoryUpdateOutputDto, {
    name: FaqCategoryUpdateDto.metaname, 
    description: FaqCategoryUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => FaqCategoryUpdateInputDto}) 
    input: FaqCategoryUpdateInputDto,

    @GraphQLBodyContext() selection: FaqCategoryUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqCategoryUpdateOutputDto> {
    await this.validation.validateArrayInput<FaqCategoryUpdateInputSetsDto>([input.sets], FaqCategoryUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => FaqCategorySoftDeleteOutputDto, {
    name: FaqCategorySoftDeleteDto.metaname, 
    description: FaqCategorySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => FaqCategorySoftDeleteInputDto }) 
    input: FaqCategorySoftDeleteInputDto,

    @GraphQLBodyContext() selection: FaqCategorySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqCategorySoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => FaqCategoryDeleteOutputDto, {
    name: FaqCategoryDeleteDto.metaname, 
    description: FaqCategoryDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => FaqCategoryDeleteInputDto }) 
    input: FaqCategoryDeleteInputDto,

    @GraphQLBodyContext() selection: FaqCategoryDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqCategoryDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => FaqCategoryRestoreOutputDto, {
    name: FaqCategoryRestoreDto.metaname,
    description: FaqCategoryRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => FaqCategoryRestoreInputDto }) 
    input: FaqCategoryRestoreInputDto,
    
    @GraphQLBodyContext() selection: FaqCategoryRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqCategoryRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [FaqCategoryUpsertOutputDto], {
    name:  `${FaqCategoryUpsertDto.metaname}`, 
    description: `${FaqCategoryUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [FaqCategoryUpsertInputDto]}) 
    input: FaqCategoryUpsertInputDto | FaqCategoryUpsertInputDto[],
    
    @GraphQLBodyContext() selection: FaqCategoryUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqCategoryUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<FaqCategoryUpsertInputDto>(input, FaqCategoryUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => FaqCategorySoftRemoveOutputDto, {
    name: FaqCategorySoftRemoveDto.metaname, 
    description: FaqCategorySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => FaqCategorySoftRemoveInputDto }) 
    input: FaqCategorySoftRemoveInputDto,

    @GraphQLBodyContext() selection: FaqCategorySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqCategorySoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => FaqCategoryRemoveOutputDto, {
    name: FaqCategoryRemoveDto.metaname, 
    description: FaqCategoryRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => FaqCategoryRemoveInputDto }) 
    input: FaqCategoryRemoveInputDto,
    
    @GraphQLBodyContext() selection: FaqCategoryRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqCategoryRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => FaqCategoryRecoverOutputDto, {
    name: FaqCategoryRecoverDto.metaname,
    description: FaqCategoryRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => FaqCategoryRecoverInputDto }) 
    input: FaqCategoryRecoverInputDto,

    @GraphQLBodyContext() selection: FaqCategoryRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqCategoryRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: FaqCategoryEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<FaqCategoryEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}