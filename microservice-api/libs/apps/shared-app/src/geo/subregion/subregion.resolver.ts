import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { SubregionService } from './subregion.service';
import { SubregionEntity } from './entities/subregion.entity';
import { SubregionFactory } from './subregion.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { SubregionUploadOutputDto, SubregionUploadDto, SubregionUploadInputDto, SubregionUploadDeleteOutputDto, SubregionUploadDeleteDto, SubregionUploadDeleteInputDto, SubregionCreateDto, SubregionCreateInputDto, SubregionCreateOutputDto, SubregionDeleteDto, SubregionDeleteInputDto, SubregionDeleteOutputDto, SubregionFindDto, SubregionFindInputDto, SubregionFindOneByIdDto, SubregionFindOneByIdInputDto, SubregionFindOutputDto, SubregionFindOutputRowsDto, SubregionRecoverDto, SubregionRecoverInputDto, SubregionRecoverOutputDto, SubregionRemoveDto, SubregionRemoveInputDto, SubregionRemoveOutputDto, SubregionRestoreDto, SubregionRestoreInputDto, SubregionRestoreOutputDto, SubregionSoftDeleteDto, SubregionSoftDeleteInputDto, SubregionSoftDeleteInputWhereDto, SubregionSoftDeleteOutputDto, SubregionSoftRemoveDto, SubregionSoftRemoveInputDto, SubregionSoftRemoveOutputDto, SubregionUpdateDto, SubregionUpdateInputDto, SubregionUpdateInputSetsDto, SubregionUpdateOutputDto, SubregionUpsertDto, SubregionUpsertInputDto, SubregionUpsertOutputDto } from './dto/subregion.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => SubregionEntity)
export class SubregionResolver
{
  constructor(
    protected readonly factory: SubregionFactory,
    protected readonly service: SubregionService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [SubregionUploadOutput], { name:  `${SubregionUploadDto.metaname}`, description: `${SubregionUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => SubregionUploadInputDto }) 
    input: SubregionUploadInputDto,

    @GraphQLBodyContext() selection: SubregionUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SubregionUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [SubregionUploadDeleteOutput], { name:  `${SubregionUploadDeleteDto.metaname}`, description: `${SubregionUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [SubregionUploadDeleteInputDto] }) 
    input: SubregionUploadDeleteInputDto | SubregionUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: SubregionUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SubregionUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [SubregionCreateOutputDto], {
    name:  `${SubregionCreateDto.metaname}`, 
    description: `${SubregionCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [SubregionCreateInputDto] }) 
    input: SubregionCreateInputDto | SubregionCreateInputDto[],

    @GraphQLBodyContext() selection: SubregionCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SubregionCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<SubregionCreateInputDto>(input, SubregionCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => SubregionFindOutputDto, {
    name: SubregionFindDto.metaname,
    description: SubregionFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => SubregionFindInputDto}) 
    filter: SubregionFindInputDto,

    @GraphQLBodyContext() selection: SubregionFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<SubregionFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => SubregionEntity, {
    name: SubregionFindOneByIdDto.metaname, 
    description: SubregionFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => SubregionFindOneByIdInputDto }) 
    input: SubregionFindOneByIdInputDto,

    @GraphQLBodyContext() selection: SubregionEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<SubregionEntity> {
    await this.validation.validateArrayInput<SubregionFindOneByIdInputDto>([input], SubregionFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => SubregionUpdateOutputDto, {
    name: SubregionUpdateDto.metaname, 
    description: SubregionUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => SubregionUpdateInputDto}) 
    input: SubregionUpdateInputDto,

    @GraphQLBodyContext() selection: SubregionUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SubregionUpdateOutputDto> {
    await this.validation.validateArrayInput<SubregionUpdateInputSetsDto>([input.sets], SubregionUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => SubregionSoftDeleteOutputDto, {
    name: SubregionSoftDeleteDto.metaname, 
    description: SubregionSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => SubregionSoftDeleteInputDto }) 
    input: SubregionSoftDeleteInputDto,

    @GraphQLBodyContext() selection: SubregionSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SubregionSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => SubregionDeleteOutputDto, {
    name: SubregionDeleteDto.metaname, 
    description: SubregionDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => SubregionDeleteInputDto }) 
    input: SubregionDeleteInputDto,

    @GraphQLBodyContext() selection: SubregionDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SubregionDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => SubregionRestoreOutputDto, {
    name: SubregionRestoreDto.metaname,
    description: SubregionRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => SubregionRestoreInputDto }) 
    input: SubregionRestoreInputDto,
    
    @GraphQLBodyContext() selection: SubregionRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SubregionRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [SubregionUpsertOutputDto], {
    name:  `${SubregionUpsertDto.metaname}`, 
    description: `${SubregionUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [SubregionUpsertInputDto]}) 
    input: SubregionUpsertInputDto | SubregionUpsertInputDto[],
    
    @GraphQLBodyContext() selection: SubregionUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SubregionUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<SubregionUpsertInputDto>(input, SubregionUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => SubregionSoftRemoveOutputDto, {
    name: SubregionSoftRemoveDto.metaname, 
    description: SubregionSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => SubregionSoftRemoveInputDto }) 
    input: SubregionSoftRemoveInputDto,

    @GraphQLBodyContext() selection: SubregionSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SubregionSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => SubregionRemoveOutputDto, {
    name: SubregionRemoveDto.metaname, 
    description: SubregionRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => SubregionRemoveInputDto }) 
    input: SubregionRemoveInputDto,
    
    @GraphQLBodyContext() selection: SubregionRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SubregionRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => SubregionRecoverOutputDto, {
    name: SubregionRecoverDto.metaname,
    description: SubregionRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => SubregionRecoverInputDto }) 
    input: SubregionRecoverInputDto,

    @GraphQLBodyContext() selection: SubregionRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SubregionRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: SubregionEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<SubregionEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}