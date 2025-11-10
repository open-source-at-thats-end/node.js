import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { RetsListingPhotosService } from './photos.service';
import { RetsListingPhotosEntity } from './entities/photos.entity';
import { RetsListingPhotosFactory } from './photos.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { RetsListingPhotosCreateDto, RetsListingPhotosCreateInputDto, RetsListingPhotosCreateOutputDto, RetsListingPhotosDeleteDto, RetsListingPhotosDeleteInputDto, RetsListingPhotosDeleteOutputDto, RetsListingPhotosFindDto, RetsListingPhotosFindInputDto, RetsListingPhotosFindOneByIdDto, RetsListingPhotosFindOneByIdInputDto, RetsListingPhotosFindOutputDto, RetsListingPhotosFindOutputRowsDto, RetsListingPhotosRecoverDto, RetsListingPhotosRecoverInputDto, RetsListingPhotosRecoverOutputDto, RetsListingPhotosRemoveDto, RetsListingPhotosRemoveInputDto, RetsListingPhotosRemoveOutputDto, RetsListingPhotosRestoreDto, RetsListingPhotosRestoreInputDto, RetsListingPhotosRestoreOutputDto, RetsListingPhotosSoftDeleteDto, RetsListingPhotosSoftDeleteInputDto, RetsListingPhotosSoftDeleteInputWhereDto, RetsListingPhotosSoftDeleteOutputDto, RetsListingPhotosSoftRemoveDto, RetsListingPhotosSoftRemoveInputDto, RetsListingPhotosSoftRemoveOutputDto, RetsListingPhotosUpdateDto, RetsListingPhotosUpdateInputDto, RetsListingPhotosUpdateInputSetsDto, RetsListingPhotosUpdateOutputDto, RetsListingPhotosUploadDeleteDto, RetsListingPhotosUploadDeleteInputDto, RetsListingPhotosUploadDeleteOutputDto, RetsListingPhotosUploadDto, RetsListingPhotosUploadInputDto, RetsListingPhotosUploadOutputDto, RetsListingPhotosUpsertDto, RetsListingPhotosUpsertInputDto, RetsListingPhotosUpsertOutputDto } from './dto/photos.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => RetsListingPhotosEntity)
export class RetsListingPhotosResolver
{
  constructor(
    protected readonly factory: RetsListingPhotosFactory,
    protected readonly service: RetsListingPhotosService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [RetsListingPhotosUploadOutput], { name:  `${RetsListingPhotosUploadDto.metaname}`, description: `${RetsListingPhotosUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => RetsListingPhotosUploadInputDto }) 
    input: RetsListingPhotosUploadInputDto,

    @GraphQLBodyContext() selection: RetsListingPhotosUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingPhotosUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [RetsListingPhotosUploadDeleteOutput], { name:  `${RetsListingPhotosUploadDeleteDto.metaname}`, description: `${RetsListingPhotosUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingPhotosUploadDeleteInputDto] }) 
    input: RetsListingPhotosUploadDeleteInputDto | RetsListingPhotosUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: RetsListingPhotosUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingPhotosUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [RetsListingPhotosCreateOutputDto], {
    name:  `${RetsListingPhotosCreateDto.metaname}`, 
    description: `${RetsListingPhotosCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingPhotosCreateInputDto] }) 
    input: RetsListingPhotosCreateInputDto | RetsListingPhotosCreateInputDto[],

    @GraphQLBodyContext() selection: RetsListingPhotosCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingPhotosCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingPhotosCreateInputDto>(input, RetsListingPhotosCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => RetsListingPhotosFindOutputDto, {
    name: RetsListingPhotosFindDto.metaname,
    description: RetsListingPhotosFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => RetsListingPhotosFindInputDto}) 
    filter: RetsListingPhotosFindInputDto,

    @GraphQLBodyContext() selection: RetsListingPhotosFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingPhotosFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => RetsListingPhotosEntity, {
    name: RetsListingPhotosFindOneByIdDto.metaname, 
    description: RetsListingPhotosFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingPhotosFindOneByIdInputDto }) 
    input: RetsListingPhotosFindOneByIdInputDto,

    @GraphQLBodyContext() selection: RetsListingPhotosEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingPhotosEntity> {
    await this.validation.validateArrayInput<RetsListingPhotosFindOneByIdInputDto>([input], RetsListingPhotosFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => RetsListingPhotosUpdateOutputDto, {
    name: RetsListingPhotosUpdateDto.metaname, 
    description: RetsListingPhotosUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => RetsListingPhotosUpdateInputDto}) 
    input: RetsListingPhotosUpdateInputDto,

    @GraphQLBodyContext() selection: RetsListingPhotosUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingPhotosUpdateOutputDto> {
    await this.validation.validateArrayInput<RetsListingPhotosUpdateInputSetsDto>([input.sets], RetsListingPhotosUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => RetsListingPhotosSoftDeleteOutputDto, {
    name: RetsListingPhotosSoftDeleteDto.metaname, 
    description: RetsListingPhotosSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingPhotosSoftDeleteInputDto }) 
    input: RetsListingPhotosSoftDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingPhotosSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingPhotosSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => RetsListingPhotosDeleteOutputDto, {
    name: RetsListingPhotosDeleteDto.metaname, 
    description: RetsListingPhotosDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingPhotosDeleteInputDto }) 
    input: RetsListingPhotosDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingPhotosDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingPhotosDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => RetsListingPhotosRestoreOutputDto, {
    name: RetsListingPhotosRestoreDto.metaname,
    description: RetsListingPhotosRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingPhotosRestoreInputDto }) 
    input: RetsListingPhotosRestoreInputDto,
    
    @GraphQLBodyContext() selection: RetsListingPhotosRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingPhotosRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [RetsListingPhotosUpsertOutputDto], {
    name:  `${RetsListingPhotosUpsertDto.metaname}`, 
    description: `${RetsListingPhotosUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [RetsListingPhotosUpsertInputDto]}) 
    input: RetsListingPhotosUpsertInputDto | RetsListingPhotosUpsertInputDto[],
    
    @GraphQLBodyContext() selection: RetsListingPhotosUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingPhotosUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingPhotosUpsertInputDto>(input, RetsListingPhotosUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => RetsListingPhotosSoftRemoveOutputDto, {
    name: RetsListingPhotosSoftRemoveDto.metaname, 
    description: RetsListingPhotosSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingPhotosSoftRemoveInputDto }) 
    input: RetsListingPhotosSoftRemoveInputDto,

    @GraphQLBodyContext() selection: RetsListingPhotosSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingPhotosSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => RetsListingPhotosRemoveOutputDto, {
    name: RetsListingPhotosRemoveDto.metaname, 
    description: RetsListingPhotosRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingPhotosRemoveInputDto }) 
    input: RetsListingPhotosRemoveInputDto,
    
    @GraphQLBodyContext() selection: RetsListingPhotosRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingPhotosRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => RetsListingPhotosRecoverOutputDto, {
    name: RetsListingPhotosRecoverDto.metaname,
    description: RetsListingPhotosRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingPhotosRecoverInputDto }) 
    input: RetsListingPhotosRecoverInputDto,

    @GraphQLBodyContext() selection: RetsListingPhotosRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingPhotosRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }



}