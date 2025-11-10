import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { BusinessSecondaryCategoryService } from './secondary.category.service';
import { BusinessSecondaryCategoryEntity } from './entities/secondary.category.entity';
import { BusinessSecondaryCategoryFactory } from './secondary.category.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { BusinessSecondaryCategoryUploadOutputDto, BusinessSecondaryCategoryUploadDto, BusinessSecondaryCategoryUploadInputDto, BusinessSecondaryCategoryUploadDeleteOutputDto, BusinessSecondaryCategoryUploadDeleteDto, BusinessSecondaryCategoryUploadDeleteInputDto, BusinessSecondaryCategoryCreateDto, BusinessSecondaryCategoryCreateInputDto, BusinessSecondaryCategoryCreateOutputDto, BusinessSecondaryCategoryDeleteDto, BusinessSecondaryCategoryDeleteInputDto, BusinessSecondaryCategoryDeleteOutputDto, BusinessSecondaryCategoryFindDto, BusinessSecondaryCategoryFindInputDto, BusinessSecondaryCategoryFindOneByIdDto, BusinessSecondaryCategoryFindOneByIdInputDto, BusinessSecondaryCategoryFindOutputDto, BusinessSecondaryCategoryFindOutputRowsDto, BusinessSecondaryCategoryRecoverDto, BusinessSecondaryCategoryRecoverInputDto, BusinessSecondaryCategoryRecoverOutputDto, BusinessSecondaryCategoryRemoveDto, BusinessSecondaryCategoryRemoveInputDto, BusinessSecondaryCategoryRemoveOutputDto, BusinessSecondaryCategoryRestoreDto, BusinessSecondaryCategoryRestoreInputDto, BusinessSecondaryCategoryRestoreOutputDto, BusinessSecondaryCategorySoftDeleteDto, BusinessSecondaryCategorySoftDeleteInputDto, BusinessSecondaryCategorySoftDeleteInputWhereDto, BusinessSecondaryCategorySoftDeleteOutputDto, BusinessSecondaryCategorySoftRemoveDto, BusinessSecondaryCategorySoftRemoveInputDto, BusinessSecondaryCategorySoftRemoveOutputDto, BusinessSecondaryCategoryUpdateDto, BusinessSecondaryCategoryUpdateInputDto, BusinessSecondaryCategoryUpdateInputSetsDto, BusinessSecondaryCategoryUpdateOutputDto, BusinessSecondaryCategoryUpsertDto, BusinessSecondaryCategoryUpsertInputDto, BusinessSecondaryCategoryUpsertOutputDto } from './dto/secondary.category.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => BusinessSecondaryCategoryEntity)
export class BusinessSecondaryCategoryResolver
{
  constructor(
    protected readonly factory: BusinessSecondaryCategoryFactory,
    protected readonly service: BusinessSecondaryCategoryService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [BusinessSecondaryCategoryUploadOutput], { name:  `${BusinessSecondaryCategoryUploadDto.metaname}`, description: `${BusinessSecondaryCategoryUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => BusinessSecondaryCategoryUploadInputDto }) 
    input: BusinessSecondaryCategoryUploadInputDto,

    @GraphQLBodyContext() selection: BusinessSecondaryCategoryUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<BusinessSecondaryCategoryUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [BusinessSecondaryCategoryUploadDeleteOutput], { name:  `${BusinessSecondaryCategoryUploadDeleteDto.metaname}`, description: `${BusinessSecondaryCategoryUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [BusinessSecondaryCategoryUploadDeleteInputDto] }) 
    input: BusinessSecondaryCategoryUploadDeleteInputDto | BusinessSecondaryCategoryUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: BusinessSecondaryCategoryUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<BusinessSecondaryCategoryUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [BusinessSecondaryCategoryCreateOutputDto], {
    name:  `${BusinessSecondaryCategoryCreateDto.metaname}`, 
    description: `${BusinessSecondaryCategoryCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [BusinessSecondaryCategoryCreateInputDto] }) 
    input: BusinessSecondaryCategoryCreateInputDto | BusinessSecondaryCategoryCreateInputDto[],

    @GraphQLBodyContext() selection: BusinessSecondaryCategoryCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<BusinessSecondaryCategoryCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<BusinessSecondaryCategoryCreateInputDto>(input, BusinessSecondaryCategoryCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => BusinessSecondaryCategoryFindOutputDto, {
    name: BusinessSecondaryCategoryFindDto.metaname,
    description: BusinessSecondaryCategoryFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => BusinessSecondaryCategoryFindInputDto}) 
    filter: BusinessSecondaryCategoryFindInputDto,

    @GraphQLBodyContext() selection: BusinessSecondaryCategoryFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<BusinessSecondaryCategoryFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => BusinessSecondaryCategoryEntity, {
    name: BusinessSecondaryCategoryFindOneByIdDto.metaname, 
    description: BusinessSecondaryCategoryFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessSecondaryCategoryFindOneByIdInputDto }) 
    input: BusinessSecondaryCategoryFindOneByIdInputDto,

    @GraphQLBodyContext() selection: BusinessSecondaryCategoryEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<BusinessSecondaryCategoryEntity> {
    await this.validation.validateArrayInput<BusinessSecondaryCategoryFindOneByIdInputDto>([input], BusinessSecondaryCategoryFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => BusinessSecondaryCategoryUpdateOutputDto, {
    name: BusinessSecondaryCategoryUpdateDto.metaname, 
    description: BusinessSecondaryCategoryUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => BusinessSecondaryCategoryUpdateInputDto}) 
    input: BusinessSecondaryCategoryUpdateInputDto,

    @GraphQLBodyContext() selection: BusinessSecondaryCategoryUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessSecondaryCategoryUpdateOutputDto> {
    await this.validation.validateArrayInput<BusinessSecondaryCategoryUpdateInputSetsDto>([input.sets], BusinessSecondaryCategoryUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => BusinessSecondaryCategorySoftDeleteOutputDto, {
    name: BusinessSecondaryCategorySoftDeleteDto.metaname, 
    description: BusinessSecondaryCategorySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessSecondaryCategorySoftDeleteInputDto }) 
    input: BusinessSecondaryCategorySoftDeleteInputDto,

    @GraphQLBodyContext() selection: BusinessSecondaryCategorySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessSecondaryCategorySoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => BusinessSecondaryCategoryDeleteOutputDto, {
    name: BusinessSecondaryCategoryDeleteDto.metaname, 
    description: BusinessSecondaryCategoryDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessSecondaryCategoryDeleteInputDto }) 
    input: BusinessSecondaryCategoryDeleteInputDto,

    @GraphQLBodyContext() selection: BusinessSecondaryCategoryDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessSecondaryCategoryDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => BusinessSecondaryCategoryRestoreOutputDto, {
    name: BusinessSecondaryCategoryRestoreDto.metaname,
    description: BusinessSecondaryCategoryRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessSecondaryCategoryRestoreInputDto }) 
    input: BusinessSecondaryCategoryRestoreInputDto,
    
    @GraphQLBodyContext() selection: BusinessSecondaryCategoryRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessSecondaryCategoryRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [BusinessSecondaryCategoryUpsertOutputDto], {
    name:  `${BusinessSecondaryCategoryUpsertDto.metaname}`, 
    description: `${BusinessSecondaryCategoryUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [BusinessSecondaryCategoryUpsertInputDto]}) 
    input: BusinessSecondaryCategoryUpsertInputDto | BusinessSecondaryCategoryUpsertInputDto[],
    
    @GraphQLBodyContext() selection: BusinessSecondaryCategoryUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessSecondaryCategoryUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<BusinessSecondaryCategoryUpsertInputDto>(input, BusinessSecondaryCategoryUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => BusinessSecondaryCategorySoftRemoveOutputDto, {
    name: BusinessSecondaryCategorySoftRemoveDto.metaname, 
    description: BusinessSecondaryCategorySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessSecondaryCategorySoftRemoveInputDto }) 
    input: BusinessSecondaryCategorySoftRemoveInputDto,

    @GraphQLBodyContext() selection: BusinessSecondaryCategorySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessSecondaryCategorySoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => BusinessSecondaryCategoryRemoveOutputDto, {
    name: BusinessSecondaryCategoryRemoveDto.metaname, 
    description: BusinessSecondaryCategoryRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessSecondaryCategoryRemoveInputDto }) 
    input: BusinessSecondaryCategoryRemoveInputDto,
    
    @GraphQLBodyContext() selection: BusinessSecondaryCategoryRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessSecondaryCategoryRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => BusinessSecondaryCategoryRecoverOutputDto, {
    name: BusinessSecondaryCategoryRecoverDto.metaname,
    description: BusinessSecondaryCategoryRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessSecondaryCategoryRecoverInputDto }) 
    input: BusinessSecondaryCategoryRecoverInputDto,

    @GraphQLBodyContext() selection: BusinessSecondaryCategoryRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessSecondaryCategoryRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: BusinessSecondaryCategoryEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<BusinessSecondaryCategoryEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}