import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { RegionService } from './region.service';
import { RegionEntity } from './entities/region.entity';
import { RegionFactory } from './region.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { RegionUploadOutputDto, RegionUploadDto, RegionUploadInputDto, RegionUploadDeleteOutputDto, RegionUploadDeleteDto, RegionUploadDeleteInputDto, RegionCreateDto, RegionCreateInputDto, RegionCreateOutputDto, RegionDeleteDto, RegionDeleteInputDto, RegionDeleteOutputDto, RegionFindDto, RegionFindInputDto, RegionFindOneByIdDto, RegionFindOneByIdInputDto, RegionFindOutputDto, RegionFindOutputRowsDto, RegionRecoverDto, RegionRecoverInputDto, RegionRecoverOutputDto, RegionRemoveDto, RegionRemoveInputDto, RegionRemoveOutputDto, RegionRestoreDto, RegionRestoreInputDto, RegionRestoreOutputDto, RegionSoftDeleteDto, RegionSoftDeleteInputDto, RegionSoftDeleteInputWhereDto, RegionSoftDeleteOutputDto, RegionSoftRemoveDto, RegionSoftRemoveInputDto, RegionSoftRemoveOutputDto, RegionUpdateDto, RegionUpdateInputDto, RegionUpdateInputSetsDto, RegionUpdateOutputDto, RegionUpsertDto, RegionUpsertInputDto, RegionUpsertOutputDto } from './dto/region.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => RegionEntity)
export class RegionResolver
{
  constructor(
    protected readonly factory: RegionFactory,
    protected readonly service: RegionService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [RegionUploadOutput], { name:  `${RegionUploadDto.metaname}`, description: `${RegionUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => RegionUploadInputDto }) 
    input: RegionUploadInputDto,

    @GraphQLBodyContext() selection: RegionUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RegionUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [RegionUploadDeleteOutput], { name:  `${RegionUploadDeleteDto.metaname}`, description: `${RegionUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [RegionUploadDeleteInputDto] }) 
    input: RegionUploadDeleteInputDto | RegionUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: RegionUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RegionUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [RegionCreateOutputDto], {
    name:  `${RegionCreateDto.metaname}`, 
    description: `${RegionCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [RegionCreateInputDto] }) 
    input: RegionCreateInputDto | RegionCreateInputDto[],

    @GraphQLBodyContext() selection: RegionCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RegionCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RegionCreateInputDto>(input, RegionCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => RegionFindOutputDto, {
    name: RegionFindDto.metaname,
    description: RegionFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => RegionFindInputDto}) 
    filter: RegionFindInputDto,

    @GraphQLBodyContext() selection: RegionFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<RegionFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => RegionEntity, {
    name: RegionFindOneByIdDto.metaname, 
    description: RegionFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => RegionFindOneByIdInputDto }) 
    input: RegionFindOneByIdInputDto,

    @GraphQLBodyContext() selection: RegionEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<RegionEntity> {
    await this.validation.validateArrayInput<RegionFindOneByIdInputDto>([input], RegionFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => RegionUpdateOutputDto, {
    name: RegionUpdateDto.metaname, 
    description: RegionUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => RegionUpdateInputDto}) 
    input: RegionUpdateInputDto,

    @GraphQLBodyContext() selection: RegionUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RegionUpdateOutputDto> {
    await this.validation.validateArrayInput<RegionUpdateInputSetsDto>([input.sets], RegionUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => RegionSoftDeleteOutputDto, {
    name: RegionSoftDeleteDto.metaname, 
    description: RegionSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => RegionSoftDeleteInputDto }) 
    input: RegionSoftDeleteInputDto,

    @GraphQLBodyContext() selection: RegionSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RegionSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => RegionDeleteOutputDto, {
    name: RegionDeleteDto.metaname, 
    description: RegionDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => RegionDeleteInputDto }) 
    input: RegionDeleteInputDto,

    @GraphQLBodyContext() selection: RegionDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RegionDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => RegionRestoreOutputDto, {
    name: RegionRestoreDto.metaname,
    description: RegionRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => RegionRestoreInputDto }) 
    input: RegionRestoreInputDto,
    
    @GraphQLBodyContext() selection: RegionRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RegionRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [RegionUpsertOutputDto], {
    name:  `${RegionUpsertDto.metaname}`, 
    description: `${RegionUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [RegionUpsertInputDto]}) 
    input: RegionUpsertInputDto | RegionUpsertInputDto[],
    
    @GraphQLBodyContext() selection: RegionUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RegionUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RegionUpsertInputDto>(input, RegionUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => RegionSoftRemoveOutputDto, {
    name: RegionSoftRemoveDto.metaname, 
    description: RegionSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => RegionSoftRemoveInputDto }) 
    input: RegionSoftRemoveInputDto,

    @GraphQLBodyContext() selection: RegionSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RegionSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => RegionRemoveOutputDto, {
    name: RegionRemoveDto.metaname, 
    description: RegionRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => RegionRemoveInputDto }) 
    input: RegionRemoveInputDto,
    
    @GraphQLBodyContext() selection: RegionRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RegionRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => RegionRecoverOutputDto, {
    name: RegionRecoverDto.metaname,
    description: RegionRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => RegionRecoverInputDto }) 
    input: RegionRecoverInputDto,

    @GraphQLBodyContext() selection: RegionRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RegionRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: RegionEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<RegionEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}