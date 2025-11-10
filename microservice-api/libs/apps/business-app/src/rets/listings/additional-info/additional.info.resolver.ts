import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { RetsListingAdditionalInfoService } from './additional.info.service';
import { RetsListingAdditionalInfoEntity } from './entities/additional.info.entity';
import { RetsListingAdditionalInfoFactory } from './additional.info.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { RetsListingAdditionalInfoCreateDto, RetsListingAdditionalInfoCreateInputDto, RetsListingAdditionalInfoCreateOutputDto, RetsListingAdditionalInfoDeleteDto, RetsListingAdditionalInfoDeleteInputDto, RetsListingAdditionalInfoDeleteOutputDto, RetsListingAdditionalInfoFindDto,RetsListingAdditionalInfoFindInputDto, RetsListingAdditionalInfoFindOneByIdDto, RetsListingAdditionalInfoFindOneByIdInputDto, RetsListingAdditionalInfoFindOutputDto, RetsListingAdditionalInfoFindOutputRowsDto, RetsListingAdditionalInfoRecoverDto, RetsListingAdditionalInfoRecoverInputDto, RetsListingAdditionalInfoRecoverOutputDto, RetsListingAdditionalInfoRemoveDto, RetsListingAdditionalInfoRemoveInputDto, RetsListingAdditionalInfoRemoveOutputDto, RetsListingAdditionalInfoRestoreDto, RetsListingAdditionalInfoRestoreInputDto, RetsListingAdditionalInfoRestoreOutputDto, RetsListingAdditionalInfoSoftDeleteDto, RetsListingAdditionalInfoSoftDeleteInputDto, RetsListingAdditionalInfoSoftDeleteInputWhereDto, RetsListingAdditionalInfoSoftDeleteOutputDto, RetsListingAdditionalInfoSoftRemoveDto, RetsListingAdditionalInfoSoftRemoveInputDto, RetsListingAdditionalInfoSoftRemoveOutputDto, RetsListingAdditionalInfoUpdateDto, RetsListingAdditionalInfoUpdateInputDto, RetsListingAdditionalInfoUpdateInputSetsDto, RetsListingAdditionalInfoUpdateOutputDto, RetsListingAdditionalInfoUploadDeleteDto, RetsListingAdditionalInfoUploadDeleteInputDto, RetsListingAdditionalInfoUploadDeleteOutputDto, RetsListingAdditionalInfoUploadDto, RetsListingAdditionalInfoUploadInputDto, RetsListingAdditionalInfoUploadOutputDto, RetsListingAdditionalInfoUpsertDto, RetsListingAdditionalInfoUpsertInputDto, RetsListingAdditionalInfoUpsertOutputDto } from './dto/additional.info.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => RetsListingAdditionalInfoEntity)
export class RetsListingAdditionalInfoResolver
{
  constructor(
    protected readonly factory: RetsListingAdditionalInfoFactory,
    protected readonly service: RetsListingAdditionalInfoService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [RetsListingAdditionalInfoUploadOutput], { name:  `${RetsListingAdditionalInfoUploadDto.metaname}`, description: `${RetsListingAdditionalInfoUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => RetsListingAdditionalInfoUploadInputDto }) 
    input: RetsListingAdditionalInfoUploadInputDto,

    @GraphQLBodyContext() selection: RetsListingAdditionalInfoUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingAdditionalInfoUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [RetsListingAdditionalInfoUploadDeleteOutput], { name:  `${RetsListingAdditionalInfoUploadDeleteDto.metaname}`, description: `${RetsListingAdditionalInfoUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingAdditionalInfoUploadDeleteInputDto] }) 
    input: RetsListingAdditionalInfoUploadDeleteInputDto | RetsListingAdditionalInfoUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: RetsListingAdditionalInfoUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingAdditionalInfoUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [RetsListingAdditionalInfoCreateOutputDto], {
    name:  `${RetsListingAdditionalInfoCreateDto.metaname}`, 
    description: `${RetsListingAdditionalInfoCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingAdditionalInfoCreateInputDto] }) 
    input: RetsListingAdditionalInfoCreateInputDto | RetsListingAdditionalInfoCreateInputDto[],

    @GraphQLBodyContext() selection: RetsListingAdditionalInfoCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingAdditionalInfoCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingAdditionalInfoCreateInputDto>(input, RetsListingAdditionalInfoCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => RetsListingAdditionalInfoFindOutputDto, {
    name: RetsListingAdditionalInfoFindDto.metaname,
    description: RetsListingAdditionalInfoFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => RetsListingAdditionalInfoFindInputDto}) 
    filter: RetsListingAdditionalInfoFindInputDto,

    @GraphQLBodyContext() selection: RetsListingAdditionalInfoFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingAdditionalInfoFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => RetsListingAdditionalInfoEntity, {
    name: RetsListingAdditionalInfoFindOneByIdDto.metaname, 
    description: RetsListingAdditionalInfoFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingAdditionalInfoFindOneByIdInputDto }) 
    input: RetsListingAdditionalInfoFindOneByIdInputDto,

    @GraphQLBodyContext() selection: RetsListingAdditionalInfoEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingAdditionalInfoEntity> {
    await this.validation.validateArrayInput<RetsListingAdditionalInfoFindOneByIdInputDto>([input], RetsListingAdditionalInfoFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => RetsListingAdditionalInfoUpdateOutputDto, {
    name: RetsListingAdditionalInfoUpdateDto.metaname, 
    description: RetsListingAdditionalInfoUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => RetsListingAdditionalInfoUpdateInputDto}) 
    input: RetsListingAdditionalInfoUpdateInputDto,

    @GraphQLBodyContext() selection: RetsListingAdditionalInfoUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAdditionalInfoUpdateOutputDto> {
    await this.validation.validateArrayInput<RetsListingAdditionalInfoUpdateInputSetsDto>([input.sets], RetsListingAdditionalInfoUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => RetsListingAdditionalInfoSoftDeleteOutputDto, {
    name: RetsListingAdditionalInfoSoftDeleteDto.metaname, 
    description: RetsListingAdditionalInfoSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingAdditionalInfoSoftDeleteInputDto }) 
    input: RetsListingAdditionalInfoSoftDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingAdditionalInfoSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAdditionalInfoSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => RetsListingAdditionalInfoDeleteOutputDto, {
    name: RetsListingAdditionalInfoDeleteDto.metaname, 
    description:RetsListingAdditionalInfoDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingAdditionalInfoDeleteInputDto }) 
    input: RetsListingAdditionalInfoDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingAdditionalInfoDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAdditionalInfoDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => RetsListingAdditionalInfoRestoreOutputDto, {
    name: RetsListingAdditionalInfoRestoreDto.metaname,
    description: RetsListingAdditionalInfoRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingAdditionalInfoRestoreInputDto }) 
    input: RetsListingAdditionalInfoRestoreInputDto,
    
    @GraphQLBodyContext() selection: RetsListingAdditionalInfoRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAdditionalInfoRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [RetsListingAdditionalInfoUpsertOutputDto], {
    name:  `${RetsListingAdditionalInfoUpsertDto.metaname}`, 
    description: `${RetsListingAdditionalInfoUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [RetsListingAdditionalInfoUpsertInputDto]}) 
    input: RetsListingAdditionalInfoUpsertInputDto | RetsListingAdditionalInfoUpsertInputDto[],
    
    @GraphQLBodyContext() selection: RetsListingAdditionalInfoUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAdditionalInfoUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingAdditionalInfoUpsertInputDto>(input, RetsListingAdditionalInfoUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => RetsListingAdditionalInfoSoftRemoveOutputDto, {
    name: RetsListingAdditionalInfoSoftRemoveDto.metaname, 
    description: RetsListingAdditionalInfoSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingAdditionalInfoSoftRemoveInputDto }) 
    input: RetsListingAdditionalInfoSoftRemoveInputDto,

    @GraphQLBodyContext() selection: RetsListingAdditionalInfoSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAdditionalInfoSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => RetsListingAdditionalInfoRemoveOutputDto, {
    name: RetsListingAdditionalInfoRemoveDto.metaname, 
    description: RetsListingAdditionalInfoRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingAdditionalInfoRemoveInputDto }) 
    input: RetsListingAdditionalInfoRemoveInputDto,
    
    @GraphQLBodyContext() selection: RetsListingAdditionalInfoRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAdditionalInfoRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => RetsListingAdditionalInfoRecoverOutputDto, {
    name: RetsListingAdditionalInfoRecoverDto.metaname,
    description: RetsListingAdditionalInfoRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingAdditionalInfoRecoverInputDto }) 
    input: RetsListingAdditionalInfoRecoverInputDto,

    @GraphQLBodyContext() selection: RetsListingAdditionalInfoRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingAdditionalInfoRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }


}