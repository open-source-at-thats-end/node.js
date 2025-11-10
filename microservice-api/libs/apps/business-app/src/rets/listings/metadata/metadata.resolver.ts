import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { RetsListingMetadataService } from './metadata.service';
import { RetsListingMetadataEntity } from './entities/metadata.entity';
import { RetsListingMetadataFactory } from './metadata.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { RetsListingMetadataCreateDto, RetsListingMetadataCreateInputDto, RetsListingMetadataCreateOutputDto, RetsListingMetadataDeleteDto, RetsListingMetadataDeleteInputDto, RetsListingMetadataDeleteOutputDto, RetsListingMetadataFindDto, RetsListingMetadataFindInputDto, RetsListingMetadataFindOneByIdDto, RetsListingMetadataFindOneByIdInputDto, RetsListingMetadataFindOutputDto, RetsListingMetadataFindOutputRowsDto, RetsListingMetadataRecoverDto, RetsListingMetadataRecoverInputDto, RetsListingMetadataRecoverOutputDto, RetsListingMetadataRemoveDto, RetsListingMetadataRemoveInputDto, RetsListingMetadataRemoveOutputDto, RetsListingMetadataRestoreDto, RetsListingMetadataRestoreInputDto, RetsListingMetadataRestoreOutputDto, RetsListingMetadataSoftDeleteDto, RetsListingMetadataSoftDeleteInputDto, RetsListingMetadataSoftDeleteInputWhereDto, RetsListingMetadataSoftDeleteOutputDto, RetsListingMetadataSoftRemoveDto, RetsListingMetadataSoftRemoveInputDto, RetsListingMetadataSoftRemoveOutputDto, RetsListingMetadataUpdateDto, RetsListingMetadataUpdateInputDto, RetsListingMetadataUpdateInputSetsDto, RetsListingMetadataUpdateOutputDto, RetsListingMetadataUploadDeleteDto, RetsListingMetadataUploadDeleteInputDto, RetsListingMetadataUploadDeleteOutputDto, RetsListingMetadataUploadDto, RetsListingMetadataUploadInputDto, RetsListingMetadataUploadOutputDto, RetsListingMetadataUpsertDto, RetsListingMetadataUpsertInputDto, RetsListingMetadataUpsertOutputDto } from './dto/metadata.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => RetsListingMetadataEntity)
export class RetsListingMetadataResolver
{
  constructor(
    protected readonly factory: RetsListingMetadataFactory,
    protected readonly service: RetsListingMetadataService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [RetsListingMetadataUploadOutput], { name:  `${RetsListingMetadataUploadDto.metaname}`, description: `${RetsListingMetadataUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => RetsListingMetadataUploadInputDto }) 
    input: RetsListingMetadataUploadInputDto,

    @GraphQLBodyContext() selection: RetsListingMetadataUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingMetadataUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [RetsListingMetadataUploadDeleteOutput], { name:  `${RetsListingMetadataUploadDeleteDto.metaname}`, description: `${RetsListingMetadataUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingMetadataUploadDeleteInputDto] }) 
    input: RetsListingMetadataUploadDeleteInputDto | RetsListingMetadataUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: RetsListingMetadataUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingMetadataUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [RetsListingMetadataCreateOutputDto], {
    name:  `${RetsListingMetadataCreateDto.metaname}`, 
    description: `${RetsListingMetadataCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingMetadataCreateInputDto] }) 
    input: RetsListingMetadataCreateInputDto | RetsListingMetadataCreateInputDto[],

    @GraphQLBodyContext() selection: RetsListingMetadataCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingMetadataCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingMetadataCreateInputDto>(input, RetsListingMetadataCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => RetsListingMetadataFindOutputDto, {
    name: RetsListingMetadataFindDto.metaname,
    description: RetsListingMetadataFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => RetsListingMetadataFindInputDto}) 
    filter: RetsListingMetadataFindInputDto,

    @GraphQLBodyContext() selection: RetsListingMetadataFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingMetadataFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => RetsListingMetadataEntity, {
    name: RetsListingMetadataFindOneByIdDto.metaname, 
    description: RetsListingMetadataFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingMetadataFindOneByIdInputDto }) 
    input: RetsListingMetadataFindOneByIdInputDto,

    @GraphQLBodyContext() selection: RetsListingMetadataEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingMetadataEntity> {
    await this.validation.validateArrayInput<RetsListingMetadataFindOneByIdInputDto>([input], RetsListingMetadataFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => RetsListingMetadataUpdateOutputDto, {
    name: RetsListingMetadataUpdateDto.metaname, 
    description: RetsListingMetadataUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => RetsListingMetadataUpdateInputDto}) 
    input: RetsListingMetadataUpdateInputDto,

    @GraphQLBodyContext() selection: RetsListingMetadataUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingMetadataUpdateOutputDto> {
    await this.validation.validateArrayInput<RetsListingMetadataUpdateInputSetsDto>([input.sets], RetsListingMetadataUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => RetsListingMetadataSoftDeleteOutputDto, {
    name: RetsListingMetadataSoftDeleteDto.metaname, 
    description: RetsListingMetadataSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingMetadataSoftDeleteInputDto }) 
    input: RetsListingMetadataSoftDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingMetadataSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingMetadataSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => RetsListingMetadataDeleteOutputDto, {
    name: RetsListingMetadataDeleteDto.metaname, 
    description: RetsListingMetadataDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingMetadataDeleteInputDto }) 
    input: RetsListingMetadataDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingMetadataDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingMetadataDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => RetsListingMetadataRestoreOutputDto, {
    name: RetsListingMetadataRestoreDto.metaname,
    description: RetsListingMetadataRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingMetadataRestoreInputDto }) 
    input: RetsListingMetadataRestoreInputDto,
    
    @GraphQLBodyContext() selection: RetsListingMetadataRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingMetadataRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [RetsListingMetadataUpsertOutputDto], {
    name:  `${RetsListingMetadataUpsertDto.metaname}`, 
    description: `${RetsListingMetadataUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [RetsListingMetadataUpsertInputDto]}) 
    input: RetsListingMetadataUpsertInputDto | RetsListingMetadataUpsertInputDto[],
    
    @GraphQLBodyContext() selection: RetsListingMetadataUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingMetadataUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingMetadataUpsertInputDto>(input, RetsListingMetadataUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => RetsListingMetadataSoftRemoveOutputDto, {
    name: RetsListingMetadataSoftRemoveDto.metaname, 
    description: RetsListingMetadataSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingMetadataSoftRemoveInputDto }) 
    input: RetsListingMetadataSoftRemoveInputDto,

    @GraphQLBodyContext() selection: RetsListingMetadataSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingMetadataSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => RetsListingMetadataRemoveOutputDto, {
    name: RetsListingMetadataRemoveDto.metaname, 
    description: RetsListingMetadataRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingMetadataRemoveInputDto }) 
    input: RetsListingMetadataRemoveInputDto,
    
    @GraphQLBodyContext() selection: RetsListingMetadataRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingMetadataRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => RetsListingMetadataRecoverOutputDto, {
    name: RetsListingMetadataRecoverDto.metaname,
    description: RetsListingMetadataRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingMetadataRecoverInputDto }) 
    input: RetsListingMetadataRecoverInputDto,

    @GraphQLBodyContext() selection: RetsListingMetadataRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingMetadataRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }


}