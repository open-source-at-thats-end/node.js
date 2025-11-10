import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { RetsListingVirtualToursService } from './virtual.tours.service';
import { RetsListingVirtualToursEntity } from './entities/virtual.tours.entity';
import { RetsListingVirtualToursFactory } from './virtual.tours.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { RetsListingVirtualToursCreateDto, RetsListingVirtualToursCreateInputDto, RetsListingVirtualToursCreateOutputDto, RetsListingVirtualToursDeleteDto, RetsListingVirtualToursDeleteInputDto, RetsListingVirtualToursDeleteOutputDto, RetsListingVirtualToursFindDto, RetsListingVirtualToursFindInputDto, RetsListingVirtualToursFindOneByIdDto, RetsListingVirtualToursFindOneByIdInputDto, RetsListingVirtualToursFindOutputDto, RetsListingVirtualToursFindOutputRowsDto, RetsListingVirtualToursRecoverDto, RetsListingVirtualToursRecoverInputDto, RetsListingVirtualToursRecoverOutputDto, RetsListingVirtualToursRemoveDto, RetsListingVirtualToursRemoveInputDto, RetsListingVirtualToursRemoveOutputDto, RetsListingVirtualToursRestoreDto, RetsListingVirtualToursRestoreInputDto, RetsListingVirtualToursRestoreOutputDto, RetsListingVirtualToursSoftDeleteDto, RetsListingVirtualToursSoftDeleteInputDto, RetsListingVirtualToursSoftDeleteInputWhereDto, RetsListingVirtualToursSoftDeleteOutputDto, RetsListingVirtualToursSoftRemoveDto, RetsListingVirtualToursSoftRemoveInputDto, RetsListingVirtualToursSoftRemoveOutputDto, RetsListingVirtualToursUpdateDto, RetsListingVirtualToursUpdateInputDto, RetsListingVirtualToursUpdateInputSetsDto, RetsListingVirtualToursUpdateOutputDto, RetsListingVirtualToursUploadDeleteDto, RetsListingVirtualToursUploadDeleteInputDto, RetsListingVirtualToursUploadDeleteOutputDto, RetsListingVirtualToursUploadDto, RetsListingVirtualToursUploadInputDto, RetsListingVirtualToursUploadOutputDto, RetsListingVirtualToursUpsertDto, RetsListingVirtualToursUpsertInputDto, RetsListingVirtualToursUpsertOutputDto } from './dto/virtual.tours.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => RetsListingVirtualToursEntity)
export class RetsListingVirtualToursResolver
{
  constructor(
    protected readonly factory: RetsListingVirtualToursFactory,
    protected readonly service: RetsListingVirtualToursService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [RetsListingVirtualToursUploadOutput], { name:  `${RetsListingVirtualToursUploadDto.metaname}`, description: `${RetsListingVirtualToursUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => RetsListingVirtualToursUploadInputDto }) 
    input: RetsListingVirtualToursUploadInputDto,

    @GraphQLBodyContext() selection: RetsListingVirtualToursUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingVirtualToursUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [RetsListingVirtualToursUploadDeleteOutput], { name:  `${RetsListingVirtualToursUploadDeleteDto.metaname}`, description: `${RetsListingVirtualToursUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingVirtualToursUploadDeleteInputDto] }) 
    input: RetsListingVirtualToursUploadDeleteInputDto | RetsListingVirtualToursUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: RetsListingVirtualToursUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingVirtualToursUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [RetsListingVirtualToursCreateOutputDto], {
    name:  `${RetsListingVirtualToursCreateDto.metaname}`, 
    description: `${RetsListingVirtualToursCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingVirtualToursCreateInputDto] }) 
    input: RetsListingVirtualToursCreateInputDto | RetsListingVirtualToursCreateInputDto[],

    @GraphQLBodyContext() selection: RetsListingVirtualToursCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingVirtualToursCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingVirtualToursCreateInputDto>(input, RetsListingVirtualToursCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => RetsListingVirtualToursFindOutputDto, {
    name: RetsListingVirtualToursFindDto.metaname,
    description: RetsListingVirtualToursFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => RetsListingVirtualToursFindInputDto}) 
    filter: RetsListingVirtualToursFindInputDto,

    @GraphQLBodyContext() selection: RetsListingVirtualToursFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingVirtualToursFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => RetsListingVirtualToursEntity, {
    name: RetsListingVirtualToursFindOneByIdDto.metaname, 
    description: RetsListingVirtualToursFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingVirtualToursFindOneByIdInputDto }) 
    input: RetsListingVirtualToursFindOneByIdInputDto,

    @GraphQLBodyContext() selection: RetsListingVirtualToursEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingVirtualToursEntity> {
    await this.validation.validateArrayInput<RetsListingVirtualToursFindOneByIdInputDto>([input], RetsListingVirtualToursFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => RetsListingVirtualToursUpdateOutputDto, {
    name: RetsListingVirtualToursUpdateDto.metaname, 
    description: RetsListingVirtualToursUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => RetsListingVirtualToursUpdateInputDto}) 
    input: RetsListingVirtualToursUpdateInputDto,

    @GraphQLBodyContext() selection: RetsListingVirtualToursUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingVirtualToursUpdateOutputDto> {
    await this.validation.validateArrayInput<RetsListingVirtualToursUpdateInputSetsDto>([input.sets], RetsListingVirtualToursUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => RetsListingVirtualToursSoftDeleteOutputDto, {
    name: RetsListingVirtualToursSoftDeleteDto.metaname, 
    description: RetsListingVirtualToursSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingVirtualToursSoftDeleteInputDto }) 
    input: RetsListingVirtualToursSoftDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingVirtualToursSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingVirtualToursSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => RetsListingVirtualToursDeleteOutputDto, {
    name: RetsListingVirtualToursDeleteDto.metaname, 
    description: RetsListingVirtualToursDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingVirtualToursDeleteInputDto }) 
    input: RetsListingVirtualToursDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingVirtualToursDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingVirtualToursDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => RetsListingVirtualToursRestoreOutputDto, {
    name: RetsListingVirtualToursRestoreDto.metaname,
    description: RetsListingVirtualToursRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingVirtualToursRestoreInputDto }) 
    input: RetsListingVirtualToursRestoreInputDto,
    
    @GraphQLBodyContext() selection: RetsListingVirtualToursRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingVirtualToursRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [RetsListingVirtualToursUpsertOutputDto], {
    name:  `${RetsListingVirtualToursUpsertDto.metaname}`, 
    description: `${RetsListingVirtualToursUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [RetsListingVirtualToursUpsertInputDto]}) 
    input: RetsListingVirtualToursUpsertInputDto | RetsListingVirtualToursUpsertInputDto[],
    
    @GraphQLBodyContext() selection: RetsListingVirtualToursUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingVirtualToursUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingVirtualToursUpsertInputDto>(input, RetsListingVirtualToursUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => RetsListingVirtualToursSoftRemoveOutputDto, {
    name: RetsListingVirtualToursSoftRemoveDto.metaname, 
    description: RetsListingVirtualToursSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingVirtualToursSoftRemoveInputDto }) 
    input: RetsListingVirtualToursSoftRemoveInputDto,

    @GraphQLBodyContext() selection: RetsListingVirtualToursSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingVirtualToursSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => RetsListingVirtualToursRemoveOutputDto, {
    name: RetsListingVirtualToursRemoveDto.metaname, 
    description: RetsListingVirtualToursRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingVirtualToursRemoveInputDto }) 
    input: RetsListingVirtualToursRemoveInputDto,
    
    @GraphQLBodyContext() selection: RetsListingVirtualToursRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingVirtualToursRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => RetsListingVirtualToursRecoverOutputDto, {
    name: RetsListingVirtualToursRecoverDto.metaname,
    description: RetsListingVirtualToursRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingVirtualToursRecoverInputDto }) 
    input: RetsListingVirtualToursRecoverInputDto,

    @GraphQLBodyContext() selection: RetsListingVirtualToursRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingVirtualToursRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }


}