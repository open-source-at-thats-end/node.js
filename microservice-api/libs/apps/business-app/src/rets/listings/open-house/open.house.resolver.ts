import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { RetsListingOpenHouseService } from './open.house.service';
import { RetsListingOpenHouseEntity } from './entities/open.house.entity';
import { RetsListingOpenHouseFactory } from './open.house.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { RetsListingOpenHouseCreateDto, RetsListingOpenHouseCreateInputDto, RetsListingOpenHouseCreateOutputDto, RetsListingOpenHouseDeleteDto, RetsListingOpenHouseDeleteInputDto, RetsListingOpenHouseDeleteOutputDto, RetsListingOpenHouseFindDto, RetsListingOpenHouseFindInputDto, RetsListingOpenHouseFindOneByIdDto, RetsListingOpenHouseFindOneByIdInputDto, RetsListingOpenHouseFindOutputDto, RetsListingOpenHouseFindOutputRowsDto, RetsListingOpenHouseRecoverDto, RetsListingOpenHouseRecoverInputDto, RetsListingOpenHouseRecoverOutputDto, RetsListingOpenHouseRemoveDto, RetsListingOpenHouseRemoveInputDto, RetsListingOpenHouseRemoveOutputDto, RetsListingOpenHouseRestoreDto, RetsListingOpenHouseRestoreInputDto, RetsListingOpenHouseRestoreOutputDto, RetsListingOpenHouseSoftDeleteDto, RetsListingOpenHouseSoftDeleteInputDto, RetsListingOpenHouseSoftDeleteInputWhereDto, RetsListingOpenHouseSoftDeleteOutputDto, RetsListingOpenHouseSoftRemoveDto, RetsListingOpenHouseSoftRemoveInputDto, RetsListingOpenHouseSoftRemoveOutputDto, RetsListingOpenHouseUpdateDto, RetsListingOpenHouseUpdateInputDto, RetsListingOpenHouseUpdateInputSetsDto, RetsListingOpenHouseUpdateOutputDto, RetsListingOpenHouseUploadDeleteDto, RetsListingOpenHouseUploadDeleteInputDto, RetsListingOpenHouseUploadDeleteOutputDto, RetsListingOpenHouseUploadDto, RetsListingOpenHouseUploadInputDto, RetsListingOpenHouseUploadOutputDto, RetsListingOpenHouseUpsertDto, RetsListingOpenHouseUpsertInputDto, RetsListingOpenHouseUpsertOutputDto } from './dto/open.house.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => RetsListingOpenHouseEntity)
export class RetsListingOpenHouseResolver
{
  constructor(
    protected readonly factory: RetsListingOpenHouseFactory,
    protected readonly service: RetsListingOpenHouseService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [RetsListingOpenHouseUploadOutput], { name:  `${RetsListingOpenHouseUploadDto.metaname}`, description: `${RetsListingOpenHouseUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => RetsListingOpenHouseUploadInputDto }) 
    input: RetsListingOpenHouseUploadInputDto,

    @GraphQLBodyContext() selection: RetsListingOpenHouseUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingOpenHouseUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [RetsListingOpenHouseUploadDeleteOutput], { name:  `${RetsListingOpenHouseUploadDeleteDto.metaname}`, description: `${RetsListingOpenHouseUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingOpenHouseUploadDeleteInputDto] }) 
    input: RetsListingOpenHouseUploadDeleteInputDto | RetsListingOpenHouseUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: RetsListingOpenHouseUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingOpenHouseUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [RetsListingOpenHouseCreateOutputDto], {
    name:  `${RetsListingOpenHouseCreateDto.metaname}`, 
    description: `${RetsListingOpenHouseCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingOpenHouseCreateInputDto] }) 
    input: RetsListingOpenHouseCreateInputDto | RetsListingOpenHouseCreateInputDto[],

    @GraphQLBodyContext() selection: RetsListingOpenHouseCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingOpenHouseCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingOpenHouseCreateInputDto>(input, RetsListingOpenHouseCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => RetsListingOpenHouseFindOutputDto, {
    name: RetsListingOpenHouseFindDto.metaname,
    description: RetsListingOpenHouseFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => RetsListingOpenHouseFindInputDto}) 
    filter: RetsListingOpenHouseFindInputDto,

    @GraphQLBodyContext() selection: RetsListingOpenHouseFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingOpenHouseFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => RetsListingOpenHouseEntity, {
    name: RetsListingOpenHouseFindOneByIdDto.metaname, 
    description: RetsListingOpenHouseFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingOpenHouseFindOneByIdInputDto }) 
    input: RetsListingOpenHouseFindOneByIdInputDto,

    @GraphQLBodyContext() selection: RetsListingOpenHouseEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingOpenHouseEntity> {
    await this.validation.validateArrayInput<RetsListingOpenHouseFindOneByIdInputDto>([input], RetsListingOpenHouseFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => RetsListingOpenHouseUpdateOutputDto, {
    name: RetsListingOpenHouseUpdateDto.metaname, 
    description: RetsListingOpenHouseUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => RetsListingOpenHouseUpdateInputDto}) 
    input: RetsListingOpenHouseUpdateInputDto,

    @GraphQLBodyContext() selection: RetsListingOpenHouseUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOpenHouseUpdateOutputDto> {
    await this.validation.validateArrayInput<RetsListingOpenHouseUpdateInputSetsDto>([input.sets], RetsListingOpenHouseUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => RetsListingOpenHouseSoftDeleteOutputDto, {
    name: RetsListingOpenHouseSoftDeleteDto.metaname, 
    description: RetsListingOpenHouseSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingOpenHouseSoftDeleteInputDto }) 
    input: RetsListingOpenHouseSoftDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingOpenHouseSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOpenHouseSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => RetsListingOpenHouseDeleteOutputDto, {
    name: RetsListingOpenHouseDeleteDto.metaname, 
    description: RetsListingOpenHouseDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingOpenHouseDeleteInputDto }) 
    input: RetsListingOpenHouseDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingOpenHouseDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOpenHouseDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => RetsListingOpenHouseRestoreOutputDto, {
    name: RetsListingOpenHouseRestoreDto.metaname,
    description: RetsListingOpenHouseRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingOpenHouseRestoreInputDto }) 
    input: RetsListingOpenHouseRestoreInputDto,
    
    @GraphQLBodyContext() selection: RetsListingOpenHouseRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOpenHouseRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [RetsListingOpenHouseUpsertOutputDto], {
    name:  `${RetsListingOpenHouseUpsertDto.metaname}`, 
    description: `${RetsListingOpenHouseUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [RetsListingOpenHouseUpsertInputDto]}) 
    input: RetsListingOpenHouseUpsertInputDto | RetsListingOpenHouseUpsertInputDto[],
    
    @GraphQLBodyContext() selection: RetsListingOpenHouseUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOpenHouseUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingOpenHouseUpsertInputDto>(input, RetsListingOpenHouseUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => RetsListingOpenHouseSoftRemoveOutputDto, {
    name: RetsListingOpenHouseSoftRemoveDto.metaname, 
    description: RetsListingOpenHouseSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingOpenHouseSoftRemoveInputDto }) 
    input: RetsListingOpenHouseSoftRemoveInputDto,

    @GraphQLBodyContext() selection: RetsListingOpenHouseSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOpenHouseSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => RetsListingOpenHouseRemoveOutputDto, {
    name: RetsListingOpenHouseRemoveDto.metaname, 
    description: RetsListingOpenHouseRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingOpenHouseRemoveInputDto }) 
    input: RetsListingOpenHouseRemoveInputDto,
    
    @GraphQLBodyContext() selection: RetsListingOpenHouseRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOpenHouseRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => RetsListingOpenHouseRecoverOutputDto, {
    name: RetsListingOpenHouseRecoverDto.metaname,
    description: RetsListingOpenHouseRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingOpenHouseRecoverInputDto }) 
    input: RetsListingOpenHouseRecoverInputDto,

    @GraphQLBodyContext() selection: RetsListingOpenHouseRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOpenHouseRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }


}