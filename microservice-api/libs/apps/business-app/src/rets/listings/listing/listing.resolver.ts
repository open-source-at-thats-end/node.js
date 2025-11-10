import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { RetsListingService } from './listing.service';
import { RetsListingEntity } from './entities/listing.entity';
import { RetsListingFactory } from './listing.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { RetsListingCreateDto, RetsListingCreateInputDto, RetsListingCreateOutputDto, RetsListingDeleteDto, RetsListingDeleteInputDto, RetsListingDeleteOutputDto, RetsListingFindDto,RetsListingFindInputDto, RetsListingFindOneByIdDto, RetsListingFindOneByIdInputDto, RetsListingFindOutputDto, RetsListingFindOutputRowsDto, RetsListingRecoverDto, RetsListingRecoverInputDto, RetsListingRecoverOutputDto, RetsListingRemoveDto, RetsListingRemoveInputDto, RetsListingRemoveOutputDto, RetsListingRestoreDto, RetsListingRestoreInputDto, RetsListingRestoreOutputDto, RetsListingSoftDeleteDto, RetsListingSoftDeleteInputDto, RetsListingSoftDeleteInputWhereDto, RetsListingSoftDeleteOutputDto, RetsListingSoftRemoveDto, RetsListingSoftRemoveInputDto, RetsListingSoftRemoveOutputDto, RetsListingUpdateDto, RetsListingUpdateInputDto, RetsListingUpdateInputSetsDto, RetsListingUpdateOutputDto, RetsListingUploadDeleteDto, RetsListingUploadDeleteInputDto, RetsListingUploadDeleteOutputDto, RetsListingUploadDto, RetsListingUploadInputDto, RetsListingUploadOutputDto, RetsListingUpsertDto, RetsListingUpsertInputDto, RetsListingUpsertOutputDto } from './dto/listing.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => RetsListingEntity)
export class RetsListingResolver
{
  constructor(
    protected readonly factory: RetsListingFactory,
    protected readonly service: RetsListingService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [RetsListingUploadOutput], { name:  `${RetsListingUploadDto.metaname}`, description: `${RetsListingUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => RetsListingUploadInputDto }) 
    input: RetsListingUploadInputDto,

    @GraphQLBodyContext() selection: RetsListingUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [RetsListingUploadDeleteOutput], { name:  `${RetsListingUploadDeleteDto.metaname}`, description: `${RetsListingUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingUploadDeleteInputDto] }) 
    input: RetsListingUploadDeleteInputDto | RetsListingUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: RetsListingUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [RetsListingCreateOutputDto], {
    name:  `${RetsListingCreateDto.metaname}`, 
    description: `${RetsListingCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingCreateInputDto] }) 
    input: RetsListingCreateInputDto | RetsListingCreateInputDto[],

    @GraphQLBodyContext() selection: RetsListingCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingCreateInputDto>(input, RetsListingCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => RetsListingFindOutputDto, {
    name: RetsListingFindDto.metaname,
    description: RetsListingFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => RetsListingFindInputDto}) 
    filter: RetsListingFindInputDto,

    @GraphQLBodyContext() selection: RetsListingFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => RetsListingEntity, {
    name: RetsListingFindOneByIdDto.metaname, 
    description: RetsListingFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingFindOneByIdInputDto }) 
    input: RetsListingFindOneByIdInputDto,

    @GraphQLBodyContext() selection: RetsListingEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingEntity> {
    await this.validation.validateArrayInput<RetsListingFindOneByIdInputDto>([input], RetsListingFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => RetsListingUpdateOutputDto, {
    name: RetsListingUpdateDto.metaname, 
    description: RetsListingUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => RetsListingUpdateInputDto}) 
    input: RetsListingUpdateInputDto,

    @GraphQLBodyContext() selection: RetsListingUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingUpdateOutputDto> {
    await this.validation.validateArrayInput<RetsListingUpdateInputSetsDto>([input.sets], RetsListingUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => RetsListingSoftDeleteOutputDto, {
    name: RetsListingSoftDeleteDto.metaname, 
    description: RetsListingSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingSoftDeleteInputDto }) 
    input: RetsListingSoftDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => RetsListingDeleteOutputDto, {
    name: RetsListingDeleteDto.metaname, 
    description:RetsListingDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingDeleteInputDto }) 
    input: RetsListingDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => RetsListingRestoreOutputDto, {
    name: RetsListingRestoreDto.metaname,
    description: RetsListingRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingRestoreInputDto }) 
    input: RetsListingRestoreInputDto,
    
    @GraphQLBodyContext() selection: RetsListingRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [RetsListingUpsertOutputDto], {
    name:  `${RetsListingUpsertDto.metaname}`, 
    description: `${RetsListingUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [RetsListingUpsertInputDto]}) 
    input: RetsListingUpsertInputDto | RetsListingUpsertInputDto[],
    
    @GraphQLBodyContext() selection: RetsListingUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingUpsertInputDto>(input, RetsListingUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => RetsListingSoftRemoveOutputDto, {
    name: RetsListingSoftRemoveDto.metaname, 
    description: RetsListingSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingSoftRemoveInputDto }) 
    input: RetsListingSoftRemoveInputDto,

    @GraphQLBodyContext() selection: RetsListingSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => RetsListingRemoveOutputDto, {
    name: RetsListingRemoveDto.metaname, 
    description: RetsListingRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingRemoveInputDto }) 
    input: RetsListingRemoveInputDto,
    
    @GraphQLBodyContext() selection: RetsListingRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => RetsListingRecoverOutputDto, {
    name: RetsListingRecoverDto.metaname,
    description: RetsListingRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingRecoverInputDto }) 
    input: RetsListingRecoverInputDto,

    @GraphQLBodyContext() selection: RetsListingRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }


}