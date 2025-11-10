import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { RetsListingRoomService } from './room.service';
import { RetsListingRoomEntity } from './entities/room.entity';
import { RetsListingRoomFactory } from './room.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { RetsListingRoomCreateDto, RetsListingRoomCreateInputDto, RetsListingRoomCreateOutputDto, RetsListingRoomDeleteDto, RetsListingRoomDeleteInputDto, RetsListingRoomDeleteOutputDto, RetsListingRoomFindDto, RetsListingRoomFindInputDto, RetsListingRoomFindOneByIdDto, RetsListingRoomFindOneByIdInputDto, RetsListingRoomFindOutputDto, RetsListingRoomFindOutputRowsDto, RetsListingRoomRecoverDto, RetsListingRoomRecoverInputDto, RetsListingRoomRecoverOutputDto, RetsListingRoomRemoveDto, RetsListingRoomRemoveInputDto, RetsListingRoomRemoveOutputDto, RetsListingRoomRestoreDto, RetsListingRoomRestoreInputDto, RetsListingRoomRestoreOutputDto, RetsListingRoomSoftDeleteDto, RetsListingRoomSoftDeleteInputDto, RetsListingRoomSoftDeleteInputWhereDto, RetsListingRoomSoftDeleteOutputDto, RetsListingRoomSoftRemoveDto, RetsListingRoomSoftRemoveInputDto, RetsListingRoomSoftRemoveOutputDto, RetsListingRoomUpdateDto, RetsListingRoomUpdateInputDto, RetsListingRoomUpdateInputSetsDto, RetsListingRoomUpdateOutputDto, RetsListingRoomUploadDeleteDto, RetsListingRoomUploadDeleteInputDto, RetsListingRoomUploadDeleteOutputDto, RetsListingRoomUploadDto, RetsListingRoomUploadInputDto, RetsListingRoomUploadOutputDto, RetsListingRoomUpsertDto, RetsListingRoomUpsertInputDto, RetsListingRoomUpsertOutputDto } from './dto/room.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => RetsListingRoomEntity)
export class RetsListingRoomResolver
{
  constructor(
    protected readonly factory: RetsListingRoomFactory,
    protected readonly service: RetsListingRoomService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [RetsListingRoomUploadOutput], { name:  `${RetsListingRoomUploadDto.metaname}`, description: `${RetsListingRoomUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => RetsListingRoomUploadInputDto }) 
    input: RetsListingRoomUploadInputDto,

    @GraphQLBodyContext() selection: RetsListingRoomUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingRoomUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [RetsListingRoomUploadDeleteOutput], { name:  `${RetsListingRoomUploadDeleteDto.metaname}`, description: `${RetsListingRoomUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingRoomUploadDeleteInputDto] }) 
    input: RetsListingRoomUploadDeleteInputDto | RetsListingRoomUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: RetsListingRoomUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingRoomUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [RetsListingRoomCreateOutputDto], {
    name:  `${RetsListingRoomCreateDto.metaname}`, 
    description: `${RetsListingRoomCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingRoomCreateInputDto] }) 
    input: RetsListingRoomCreateInputDto | RetsListingRoomCreateInputDto[],

    @GraphQLBodyContext() selection: RetsListingRoomCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingRoomCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingRoomCreateInputDto>(input, RetsListingRoomCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => RetsListingRoomFindOutputDto, {
    name: RetsListingRoomFindDto.metaname,
    description: RetsListingRoomFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => RetsListingRoomFindInputDto}) 
    filter: RetsListingRoomFindInputDto,

    @GraphQLBodyContext() selection: RetsListingRoomFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingRoomFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => RetsListingRoomEntity, {
    name: RetsListingRoomFindOneByIdDto.metaname, 
    description: RetsListingRoomFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingRoomFindOneByIdInputDto }) 
    input: RetsListingRoomFindOneByIdInputDto,

    @GraphQLBodyContext() selection: RetsListingRoomEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingRoomEntity> {
    await this.validation.validateArrayInput<RetsListingRoomFindOneByIdInputDto>([input], RetsListingRoomFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => RetsListingRoomUpdateOutputDto, {
    name: RetsListingRoomUpdateDto.metaname, 
    description: RetsListingRoomUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => RetsListingRoomUpdateInputDto}) 
    input: RetsListingRoomUpdateInputDto,

    @GraphQLBodyContext() selection: RetsListingRoomUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingRoomUpdateOutputDto> {
    await this.validation.validateArrayInput<RetsListingRoomUpdateInputSetsDto>([input.sets], RetsListingRoomUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => RetsListingRoomSoftDeleteOutputDto, {
    name: RetsListingRoomSoftDeleteDto.metaname, 
    description: RetsListingRoomSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingRoomSoftDeleteInputDto }) 
    input: RetsListingRoomSoftDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingRoomSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingRoomSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => RetsListingRoomDeleteOutputDto, {
    name: RetsListingRoomDeleteDto.metaname, 
    description: RetsListingRoomDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingRoomDeleteInputDto }) 
    input: RetsListingRoomDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingRoomDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingRoomDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => RetsListingRoomRestoreOutputDto, {
    name: RetsListingRoomRestoreDto.metaname,
    description: RetsListingRoomRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingRoomRestoreInputDto }) 
    input: RetsListingRoomRestoreInputDto,
    
    @GraphQLBodyContext() selection: RetsListingRoomRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingRoomRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [RetsListingRoomUpsertOutputDto], {
    name:  `${RetsListingRoomUpsertDto.metaname}`, 
    description: `${RetsListingRoomUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [RetsListingRoomUpsertInputDto]}) 
    input: RetsListingRoomUpsertInputDto | RetsListingRoomUpsertInputDto[],
    
    @GraphQLBodyContext() selection: RetsListingRoomUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingRoomUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingRoomUpsertInputDto>(input, RetsListingRoomUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => RetsListingRoomSoftRemoveOutputDto, {
    name: RetsListingRoomSoftRemoveDto.metaname, 
    description: RetsListingRoomSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingRoomSoftRemoveInputDto }) 
    input: RetsListingRoomSoftRemoveInputDto,

    @GraphQLBodyContext() selection: RetsListingRoomSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingRoomSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => RetsListingRoomRemoveOutputDto, {
    name: RetsListingRoomRemoveDto.metaname, 
    description: RetsListingRoomRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingRoomRemoveInputDto }) 
    input: RetsListingRoomRemoveInputDto,
    
    @GraphQLBodyContext() selection: RetsListingRoomRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingRoomRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => RetsListingRoomRecoverOutputDto, {
    name: RetsListingRoomRecoverDto.metaname,
    description: RetsListingRoomRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingRoomRecoverInputDto }) 
    input: RetsListingRoomRecoverInputDto,

    @GraphQLBodyContext() selection: RetsListingRoomRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingRoomRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }


}