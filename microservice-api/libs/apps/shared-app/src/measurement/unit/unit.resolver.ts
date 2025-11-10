import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { MeasurementUnitService } from './unit.service';
import { MeasurementUnitEntity } from './entities/unit.entity';
import { MeasurementUnitFactory } from './unit.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { MeasurementUnitUploadOutputDto, MeasurementUnitUploadDto, MeasurementUnitUploadInputDto, MeasurementUnitUploadDeleteOutputDto, MeasurementUnitUploadDeleteDto, MeasurementUnitUploadDeleteInputDto, MeasurementUnitCreateDto, MeasurementUnitCreateInputDto, MeasurementUnitCreateOutputDto, MeasurementUnitDeleteDto, MeasurementUnitDeleteInputDto, MeasurementUnitDeleteOutputDto, MeasurementUnitFindDto, MeasurementUnitFindInputDto, MeasurementUnitFindOneByIdDto, MeasurementUnitFindOneByIdInputDto, MeasurementUnitFindOutputDto, MeasurementUnitFindOutputRowsDto, MeasurementUnitRecoverDto, MeasurementUnitRecoverInputDto, MeasurementUnitRecoverOutputDto, MeasurementUnitRemoveDto, MeasurementUnitRemoveInputDto, MeasurementUnitRemoveOutputDto, MeasurementUnitRestoreDto, MeasurementUnitRestoreInputDto, MeasurementUnitRestoreOutputDto, MeasurementUnitSoftDeleteDto, MeasurementUnitSoftDeleteInputDto, MeasurementUnitSoftDeleteInputWhereDto, MeasurementUnitSoftDeleteOutputDto, MeasurementUnitSoftRemoveDto, MeasurementUnitSoftRemoveInputDto, MeasurementUnitSoftRemoveOutputDto, MeasurementUnitUpdateDto, MeasurementUnitUpdateInputDto, MeasurementUnitUpdateInputSetsDto, MeasurementUnitUpdateOutputDto, MeasurementUnitUpsertDto, MeasurementUnitUpsertInputDto, MeasurementUnitUpsertOutputDto } from './dto/unit.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => MeasurementUnitEntity)
export class MeasurementUnitResolver
{
  constructor(
    protected readonly factory: MeasurementUnitFactory,
    protected readonly service: MeasurementUnitService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [MeasurementUnitUploadOutput], { name:  `${MeasurementUnitUploadDto.metaname}`, description: `${MeasurementUnitUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => MeasurementUnitUploadInputDto }) 
    input: MeasurementUnitUploadInputDto,

    @GraphQLBodyContext() selection: MeasurementUnitUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<MeasurementUnitUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [MeasurementUnitUploadDeleteOutput], { name:  `${MeasurementUnitUploadDeleteDto.metaname}`, description: `${MeasurementUnitUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [MeasurementUnitUploadDeleteInputDto] }) 
    input: MeasurementUnitUploadDeleteInputDto | MeasurementUnitUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: MeasurementUnitUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<MeasurementUnitUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [MeasurementUnitCreateOutputDto], {
    name:  `${MeasurementUnitCreateDto.metaname}`, 
    description: `${MeasurementUnitCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [MeasurementUnitCreateInputDto] }) 
    input: MeasurementUnitCreateInputDto | MeasurementUnitCreateInputDto[],

    @GraphQLBodyContext() selection: MeasurementUnitCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<MeasurementUnitCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<MeasurementUnitCreateInputDto>(input, MeasurementUnitCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => MeasurementUnitFindOutputDto, {
    name: MeasurementUnitFindDto.metaname,
    description: MeasurementUnitFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => MeasurementUnitFindInputDto}) 
    filter: MeasurementUnitFindInputDto,

    @GraphQLBodyContext() selection: MeasurementUnitFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<MeasurementUnitFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => MeasurementUnitEntity, {
    name: MeasurementUnitFindOneByIdDto.metaname, 
    description: MeasurementUnitFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => MeasurementUnitFindOneByIdInputDto }) 
    input: MeasurementUnitFindOneByIdInputDto,

    @GraphQLBodyContext() selection: MeasurementUnitEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<MeasurementUnitEntity> {
    await this.validation.validateArrayInput<MeasurementUnitFindOneByIdInputDto>([input], MeasurementUnitFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => MeasurementUnitUpdateOutputDto, {
    name: MeasurementUnitUpdateDto.metaname, 
    description: MeasurementUnitUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => MeasurementUnitUpdateInputDto}) 
    input: MeasurementUnitUpdateInputDto,

    @GraphQLBodyContext() selection: MeasurementUnitUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementUnitUpdateOutputDto> {
    await this.validation.validateArrayInput<MeasurementUnitUpdateInputSetsDto>([input.sets], MeasurementUnitUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => MeasurementUnitSoftDeleteOutputDto, {
    name: MeasurementUnitSoftDeleteDto.metaname, 
    description: MeasurementUnitSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => MeasurementUnitSoftDeleteInputDto }) 
    input: MeasurementUnitSoftDeleteInputDto,

    @GraphQLBodyContext() selection: MeasurementUnitSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementUnitSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => MeasurementUnitDeleteOutputDto, {
    name: MeasurementUnitDeleteDto.metaname, 
    description: MeasurementUnitDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => MeasurementUnitDeleteInputDto }) 
    input: MeasurementUnitDeleteInputDto,

    @GraphQLBodyContext() selection: MeasurementUnitDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementUnitDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => MeasurementUnitRestoreOutputDto, {
    name: MeasurementUnitRestoreDto.metaname,
    description: MeasurementUnitRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => MeasurementUnitRestoreInputDto }) 
    input: MeasurementUnitRestoreInputDto,
    
    @GraphQLBodyContext() selection: MeasurementUnitRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementUnitRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [MeasurementUnitUpsertOutputDto], {
    name:  `${MeasurementUnitUpsertDto.metaname}`, 
    description: `${MeasurementUnitUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [MeasurementUnitUpsertInputDto]}) 
    input: MeasurementUnitUpsertInputDto | MeasurementUnitUpsertInputDto[],
    
    @GraphQLBodyContext() selection: MeasurementUnitUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementUnitUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<MeasurementUnitUpsertInputDto>(input, MeasurementUnitUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => MeasurementUnitSoftRemoveOutputDto, {
    name: MeasurementUnitSoftRemoveDto.metaname, 
    description: MeasurementUnitSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => MeasurementUnitSoftRemoveInputDto }) 
    input: MeasurementUnitSoftRemoveInputDto,

    @GraphQLBodyContext() selection: MeasurementUnitSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementUnitSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => MeasurementUnitRemoveOutputDto, {
    name: MeasurementUnitRemoveDto.metaname, 
    description: MeasurementUnitRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => MeasurementUnitRemoveInputDto }) 
    input: MeasurementUnitRemoveInputDto,
    
    @GraphQLBodyContext() selection: MeasurementUnitRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementUnitRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => MeasurementUnitRecoverOutputDto, {
    name: MeasurementUnitRecoverDto.metaname,
    description: MeasurementUnitRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => MeasurementUnitRecoverInputDto }) 
    input: MeasurementUnitRecoverInputDto,

    @GraphQLBodyContext() selection: MeasurementUnitRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<MeasurementUnitRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: MeasurementUnitEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<MeasurementUnitEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}