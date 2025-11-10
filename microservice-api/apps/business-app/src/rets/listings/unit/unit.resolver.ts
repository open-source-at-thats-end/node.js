import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { RetsListingUnitService } from './unit.service';
import { RetsListingUnitEntity } from './entities/unit.entity';
import { RetsListingUnitFactory } from './unit.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { RetsListingUnitCreateDto, RetsListingUnitCreateInputDto, RetsListingUnitCreateOutputDto, RetsListingUnitDeleteDto, RetsListingUnitDeleteInputDto, RetsListingUnitDeleteOutputDto, RetsListingUnitFindDto, RetsListingUnitFindInputDto, RetsListingUnitFindOneByIdDto, RetsListingUnitFindOneByIdInputDto, RetsListingUnitFindOutputDto, RetsListingUnitFindOutputRowsDto, RetsListingUnitRecoverDto, RetsListingUnitRecoverInputDto, RetsListingUnitRecoverOutputDto, RetsListingUnitRemoveDto, RetsListingUnitRemoveInputDto, RetsListingUnitRemoveOutputDto, RetsListingUnitRestoreDto, RetsListingUnitRestoreInputDto, RetsListingUnitRestoreOutputDto, RetsListingUnitSoftDeleteDto, RetsListingUnitSoftDeleteInputDto, RetsListingUnitSoftDeleteInputWhereDto, RetsListingUnitSoftDeleteOutputDto, RetsListingUnitSoftRemoveDto, RetsListingUnitSoftRemoveInputDto, RetsListingUnitSoftRemoveOutputDto, RetsListingUnitUpdateDto, RetsListingUnitUpdateInputDto, RetsListingUnitUpdateInputSetsDto, RetsListingUnitUpdateOutputDto, RetsListingUnitUploadDeleteDto, RetsListingUnitUploadDeleteInputDto, RetsListingUnitUploadDeleteOutputDto, RetsListingUnitUploadDto, RetsListingUnitUploadInputDto, RetsListingUnitUploadOutputDto, RetsListingUnitUpsertDto, RetsListingUnitUpsertInputDto, RetsListingUnitUpsertOutputDto } from './dto/unit.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => RetsListingUnitEntity)
export class RetsListingUnitResolver
{
  constructor(
    protected readonly factory: RetsListingUnitFactory,
    protected readonly service: RetsListingUnitService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [RetsListingUnitUploadOutput], { name:  `${RetsListingUnitUploadDto.metaname}`, description: `${RetsListingUnitUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => RetsListingUnitUploadInputDto }) 
    input: RetsListingUnitUploadInputDto,

    @GraphQLBodyContext() selection: RetsListingUnitUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingUnitUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [RetsListingUnitUploadDeleteOutput], { name:  `${RetsListingUnitUploadDeleteDto.metaname}`, description: `${RetsListingUnitUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingUnitUploadDeleteInputDto] }) 
    input: RetsListingUnitUploadDeleteInputDto | RetsListingUnitUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: RetsListingUnitUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingUnitUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [RetsListingUnitCreateOutputDto], {
    name:  `${RetsListingUnitCreateDto.metaname}`, 
    description: `${RetsListingUnitCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingUnitCreateInputDto] }) 
    input: RetsListingUnitCreateInputDto | RetsListingUnitCreateInputDto[],

    @GraphQLBodyContext() selection: RetsListingUnitCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingUnitCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingUnitCreateInputDto>(input, RetsListingUnitCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => RetsListingUnitFindOutputDto, {
    name: RetsListingUnitFindDto.metaname,
    description: RetsListingUnitFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => RetsListingUnitFindInputDto}) 
    filter: RetsListingUnitFindInputDto,

    @GraphQLBodyContext() selection: RetsListingUnitFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingUnitFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => RetsListingUnitEntity, {
    name: RetsListingUnitFindOneByIdDto.metaname, 
    description: RetsListingUnitFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingUnitFindOneByIdInputDto }) 
    input: RetsListingUnitFindOneByIdInputDto,

    @GraphQLBodyContext() selection: RetsListingUnitEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingUnitEntity> {
    await this.validation.validateArrayInput<RetsListingUnitFindOneByIdInputDto>([input], RetsListingUnitFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => RetsListingUnitUpdateOutputDto, {
    name: RetsListingUnitUpdateDto.metaname, 
    description: RetsListingUnitUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => RetsListingUnitUpdateInputDto}) 
    input: RetsListingUnitUpdateInputDto,

    @GraphQLBodyContext() selection: RetsListingUnitUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingUnitUpdateOutputDto> {
    await this.validation.validateArrayInput<RetsListingUnitUpdateInputSetsDto>([input.sets], RetsListingUnitUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => RetsListingUnitSoftDeleteOutputDto, {
    name: RetsListingUnitSoftDeleteDto.metaname, 
    description: RetsListingUnitSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingUnitSoftDeleteInputDto }) 
    input: RetsListingUnitSoftDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingUnitSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingUnitSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => RetsListingUnitDeleteOutputDto, {
    name: RetsListingUnitDeleteDto.metaname, 
    description: RetsListingUnitDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingUnitDeleteInputDto }) 
    input: RetsListingUnitDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingUnitDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingUnitDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => RetsListingUnitRestoreOutputDto, {
    name: RetsListingUnitRestoreDto.metaname,
    description: RetsListingUnitRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingUnitRestoreInputDto }) 
    input: RetsListingUnitRestoreInputDto,
    
    @GraphQLBodyContext() selection: RetsListingUnitRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingUnitRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [RetsListingUnitUpsertOutputDto], {
    name:  `${RetsListingUnitUpsertDto.metaname}`, 
    description: `${RetsListingUnitUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [RetsListingUnitUpsertInputDto]}) 
    input: RetsListingUnitUpsertInputDto | RetsListingUnitUpsertInputDto[],
    
    @GraphQLBodyContext() selection: RetsListingUnitUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingUnitUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingUnitUpsertInputDto>(input, RetsListingUnitUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => RetsListingUnitSoftRemoveOutputDto, {
    name: RetsListingUnitSoftRemoveDto.metaname, 
    description: RetsListingUnitSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingUnitSoftRemoveInputDto }) 
    input: RetsListingUnitSoftRemoveInputDto,

    @GraphQLBodyContext() selection: RetsListingUnitSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingUnitSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => RetsListingUnitRemoveOutputDto, {
    name: RetsListingUnitRemoveDto.metaname, 
    description: RetsListingUnitRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingUnitRemoveInputDto }) 
    input: RetsListingUnitRemoveInputDto,
    
    @GraphQLBodyContext() selection: RetsListingUnitRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingUnitRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => RetsListingUnitRecoverOutputDto, {
    name: RetsListingUnitRecoverDto.metaname,
    description: RetsListingUnitRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingUnitRecoverInputDto }) 
    input: RetsListingUnitRecoverInputDto,

    @GraphQLBodyContext() selection: RetsListingUnitRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingUnitRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }


}