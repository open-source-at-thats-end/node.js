import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { BusinessPrimaryCategoryService } from './primary.category.service';
import { BusinessPrimaryCategoryEntity } from './entities/primary.category.entity';
import { BusinessPrimaryCategoryFactory } from './primary.category.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { BusinessPrimaryCategoryUploadOutputDto, BusinessPrimaryCategoryUploadDto, BusinessPrimaryCategoryUploadInputDto, BusinessPrimaryCategoryUploadDeleteOutputDto, BusinessPrimaryCategoryUploadDeleteDto, BusinessPrimaryCategoryUploadDeleteInputDto, BusinessPrimaryCategoryCreateDto, BusinessPrimaryCategoryCreateInputDto, BusinessPrimaryCategoryCreateOutputDto, BusinessPrimaryCategoryDeleteDto, BusinessPrimaryCategoryDeleteInputDto, BusinessPrimaryCategoryDeleteOutputDto, BusinessPrimaryCategoryFindDto, BusinessPrimaryCategoryFindInputDto, BusinessPrimaryCategoryFindOneByIdDto, BusinessPrimaryCategoryFindOneByIdInputDto, BusinessPrimaryCategoryFindOutputDto, BusinessPrimaryCategoryFindOutputRowsDto, BusinessPrimaryCategoryRecoverDto, BusinessPrimaryCategoryRecoverInputDto, BusinessPrimaryCategoryRecoverOutputDto, BusinessPrimaryCategoryRemoveDto, BusinessPrimaryCategoryRemoveInputDto, BusinessPrimaryCategoryRemoveOutputDto, BusinessPrimaryCategoryRestoreDto, BusinessPrimaryCategoryRestoreInputDto, BusinessPrimaryCategoryRestoreOutputDto, BusinessPrimaryCategorySoftDeleteDto, BusinessPrimaryCategorySoftDeleteInputDto, BusinessPrimaryCategorySoftDeleteInputWhereDto, BusinessPrimaryCategorySoftDeleteOutputDto, BusinessPrimaryCategorySoftRemoveDto, BusinessPrimaryCategorySoftRemoveInputDto, BusinessPrimaryCategorySoftRemoveOutputDto, BusinessPrimaryCategoryUpdateDto, BusinessPrimaryCategoryUpdateInputDto, BusinessPrimaryCategoryUpdateInputSetsDto, BusinessPrimaryCategoryUpdateOutputDto, BusinessPrimaryCategoryUpsertDto, BusinessPrimaryCategoryUpsertInputDto, BusinessPrimaryCategoryUpsertOutputDto } from './dto/primary.category.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => BusinessPrimaryCategoryEntity)
export class BusinessPrimaryCategoryResolver
{
  constructor(
    protected readonly factory: BusinessPrimaryCategoryFactory,
    protected readonly service: BusinessPrimaryCategoryService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [BusinessPrimaryCategoryUploadOutput], { name:  `${BusinessPrimaryCategoryUploadDto.metaname}`, description: `${BusinessPrimaryCategoryUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => BusinessPrimaryCategoryUploadInputDto }) 
    input: BusinessPrimaryCategoryUploadInputDto,

    @GraphQLBodyContext() selection: BusinessPrimaryCategoryUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<BusinessPrimaryCategoryUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [BusinessPrimaryCategoryUploadDeleteOutput], { name:  `${BusinessPrimaryCategoryUploadDeleteDto.metaname}`, description: `${BusinessPrimaryCategoryUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [BusinessPrimaryCategoryUploadDeleteInputDto] }) 
    input: BusinessPrimaryCategoryUploadDeleteInputDto | BusinessPrimaryCategoryUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: BusinessPrimaryCategoryUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<BusinessPrimaryCategoryUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [BusinessPrimaryCategoryCreateOutputDto], {
    name:  `${BusinessPrimaryCategoryCreateDto.metaname}`, 
    description: `${BusinessPrimaryCategoryCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [BusinessPrimaryCategoryCreateInputDto] }) 
    input: BusinessPrimaryCategoryCreateInputDto | BusinessPrimaryCategoryCreateInputDto[],

    @GraphQLBodyContext() selection: BusinessPrimaryCategoryCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<BusinessPrimaryCategoryCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<BusinessPrimaryCategoryCreateInputDto>(input, BusinessPrimaryCategoryCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => BusinessPrimaryCategoryFindOutputDto, {
    name: BusinessPrimaryCategoryFindDto.metaname,
    description: BusinessPrimaryCategoryFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => BusinessPrimaryCategoryFindInputDto}) 
    filter: BusinessPrimaryCategoryFindInputDto,

    @GraphQLBodyContext() selection: BusinessPrimaryCategoryFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<BusinessPrimaryCategoryFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => BusinessPrimaryCategoryEntity, {
    name: BusinessPrimaryCategoryFindOneByIdDto.metaname, 
    description: BusinessPrimaryCategoryFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessPrimaryCategoryFindOneByIdInputDto }) 
    input: BusinessPrimaryCategoryFindOneByIdInputDto,

    @GraphQLBodyContext() selection: BusinessPrimaryCategoryEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<BusinessPrimaryCategoryEntity> {
    await this.validation.validateArrayInput<BusinessPrimaryCategoryFindOneByIdInputDto>([input], BusinessPrimaryCategoryFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => BusinessPrimaryCategoryUpdateOutputDto, {
    name: BusinessPrimaryCategoryUpdateDto.metaname, 
    description: BusinessPrimaryCategoryUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => BusinessPrimaryCategoryUpdateInputDto}) 
    input: BusinessPrimaryCategoryUpdateInputDto,

    @GraphQLBodyContext() selection: BusinessPrimaryCategoryUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessPrimaryCategoryUpdateOutputDto> {
    await this.validation.validateArrayInput<BusinessPrimaryCategoryUpdateInputSetsDto>([input.sets], BusinessPrimaryCategoryUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => BusinessPrimaryCategorySoftDeleteOutputDto, {
    name: BusinessPrimaryCategorySoftDeleteDto.metaname, 
    description: BusinessPrimaryCategorySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessPrimaryCategorySoftDeleteInputDto }) 
    input: BusinessPrimaryCategorySoftDeleteInputDto,

    @GraphQLBodyContext() selection: BusinessPrimaryCategorySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessPrimaryCategorySoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => BusinessPrimaryCategoryDeleteOutputDto, {
    name: BusinessPrimaryCategoryDeleteDto.metaname, 
    description: BusinessPrimaryCategoryDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessPrimaryCategoryDeleteInputDto }) 
    input: BusinessPrimaryCategoryDeleteInputDto,

    @GraphQLBodyContext() selection: BusinessPrimaryCategoryDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessPrimaryCategoryDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => BusinessPrimaryCategoryRestoreOutputDto, {
    name: BusinessPrimaryCategoryRestoreDto.metaname,
    description: BusinessPrimaryCategoryRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessPrimaryCategoryRestoreInputDto }) 
    input: BusinessPrimaryCategoryRestoreInputDto,
    
    @GraphQLBodyContext() selection: BusinessPrimaryCategoryRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessPrimaryCategoryRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [BusinessPrimaryCategoryUpsertOutputDto], {
    name:  `${BusinessPrimaryCategoryUpsertDto.metaname}`, 
    description: `${BusinessPrimaryCategoryUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [BusinessPrimaryCategoryUpsertInputDto]}) 
    input: BusinessPrimaryCategoryUpsertInputDto | BusinessPrimaryCategoryUpsertInputDto[],
    
    @GraphQLBodyContext() selection: BusinessPrimaryCategoryUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessPrimaryCategoryUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<BusinessPrimaryCategoryUpsertInputDto>(input, BusinessPrimaryCategoryUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => BusinessPrimaryCategorySoftRemoveOutputDto, {
    name: BusinessPrimaryCategorySoftRemoveDto.metaname, 
    description: BusinessPrimaryCategorySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessPrimaryCategorySoftRemoveInputDto }) 
    input: BusinessPrimaryCategorySoftRemoveInputDto,

    @GraphQLBodyContext() selection: BusinessPrimaryCategorySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessPrimaryCategorySoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => BusinessPrimaryCategoryRemoveOutputDto, {
    name: BusinessPrimaryCategoryRemoveDto.metaname, 
    description: BusinessPrimaryCategoryRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessPrimaryCategoryRemoveInputDto }) 
    input: BusinessPrimaryCategoryRemoveInputDto,
    
    @GraphQLBodyContext() selection: BusinessPrimaryCategoryRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessPrimaryCategoryRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => BusinessPrimaryCategoryRecoverOutputDto, {
    name: BusinessPrimaryCategoryRecoverDto.metaname,
    description: BusinessPrimaryCategoryRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessPrimaryCategoryRecoverInputDto }) 
    input: BusinessPrimaryCategoryRecoverInputDto,

    @GraphQLBodyContext() selection: BusinessPrimaryCategoryRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessPrimaryCategoryRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: BusinessPrimaryCategoryEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<BusinessPrimaryCategoryEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}