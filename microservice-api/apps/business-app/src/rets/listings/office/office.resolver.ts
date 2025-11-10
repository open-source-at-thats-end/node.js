import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { RetsListingOfficeService } from './office.service';
import { RetsListingOfficeEntity } from './entities/office.entity';
import { RetsListingOfficeFactory } from './office.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { RetsListingOfficeCreateDto, RetsListingOfficeCreateInputDto, RetsListingOfficeCreateOutputDto, RetsListingOfficeDeleteDto, RetsListingOfficeDeleteInputDto, RetsListingOfficeDeleteOutputDto, RetsListingOfficeFindDto, RetsListingOfficeFindInputDto, RetsListingOfficeFindOneByIdDto, RetsListingOfficeFindOneByIdInputDto, RetsListingOfficeFindOutputDto, RetsListingOfficeFindOutputRowsDto, RetsListingOfficeRecoverDto, RetsListingOfficeRecoverInputDto, RetsListingOfficeRecoverOutputDto, RetsListingOfficeRemoveDto, RetsListingOfficeRemoveInputDto, RetsListingOfficeRemoveOutputDto, RetsListingOfficeRestoreDto, RetsListingOfficeRestoreInputDto, RetsListingOfficeRestoreOutputDto, RetsListingOfficeSoftDeleteDto, RetsListingOfficeSoftDeleteInputDto, RetsListingOfficeSoftDeleteInputWhereDto, RetsListingOfficeSoftDeleteOutputDto, RetsListingOfficeSoftRemoveDto, RetsListingOfficeSoftRemoveInputDto, RetsListingOfficeSoftRemoveOutputDto, RetsListingOfficeUpdateDto, RetsListingOfficeUpdateInputDto, RetsListingOfficeUpdateInputSetsDto, RetsListingOfficeUpdateOutputDto, RetsListingOfficeUploadDeleteDto, RetsListingOfficeUploadDeleteInputDto, RetsListingOfficeUploadDeleteOutputDto, RetsListingOfficeUploadDto, RetsListingOfficeUploadInputDto, RetsListingOfficeUploadOutputDto, RetsListingOfficeUpsertDto, RetsListingOfficeUpsertInputDto, RetsListingOfficeUpsertOutputDto } from './dto/office.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => RetsListingOfficeEntity)
export class RetsListingOfficeResolver
{
  constructor(
    protected readonly factory: RetsListingOfficeFactory,
    protected readonly service: RetsListingOfficeService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [RetsListingOfficeUploadOutput], { name:  `${RetsListingOfficeUploadDto.metaname}`, description: `${RetsListingOfficeUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => RetsListingOfficeUploadInputDto }) 
    input: RetsListingOfficeUploadInputDto,

    @GraphQLBodyContext() selection: RetsListingOfficeUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingOfficeUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [RetsListingOfficeUploadDeleteOutput], { name:  `${RetsListingOfficeUploadDeleteDto.metaname}`, description: `${RetsListingOfficeUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingOfficeUploadDeleteInputDto] }) 
    input: RetsListingOfficeUploadDeleteInputDto | RetsListingOfficeUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: RetsListingOfficeUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingOfficeUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [RetsListingOfficeCreateOutputDto], {
    name:  `${RetsListingOfficeCreateDto.metaname}`, 
    description: `${RetsListingOfficeCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsListingOfficeCreateInputDto] }) 
    input: RetsListingOfficeCreateInputDto | RetsListingOfficeCreateInputDto[],

    @GraphQLBodyContext() selection: RetsListingOfficeCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsListingOfficeCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingOfficeCreateInputDto>(input, RetsListingOfficeCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => RetsListingOfficeFindOutputDto, {
    name: RetsListingOfficeFindDto.metaname,
    description: RetsListingOfficeFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => RetsListingOfficeFindInputDto}) 
    filter: RetsListingOfficeFindInputDto,

    @GraphQLBodyContext() selection: RetsListingOfficeFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingOfficeFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => RetsListingOfficeEntity, {
    name: RetsListingOfficeFindOneByIdDto.metaname, 
    description: RetsListingOfficeFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingOfficeFindOneByIdInputDto }) 
    input: RetsListingOfficeFindOneByIdInputDto,

    @GraphQLBodyContext() selection: RetsListingOfficeEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsListingOfficeEntity> {
    await this.validation.validateArrayInput<RetsListingOfficeFindOneByIdInputDto>([input], RetsListingOfficeFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => RetsListingOfficeUpdateOutputDto, {
    name: RetsListingOfficeUpdateDto.metaname, 
    description: RetsListingOfficeUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => RetsListingOfficeUpdateInputDto}) 
    input: RetsListingOfficeUpdateInputDto,

    @GraphQLBodyContext() selection: RetsListingOfficeUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOfficeUpdateOutputDto> {
    await this.validation.validateArrayInput<RetsListingOfficeUpdateInputSetsDto>([input.sets], RetsListingOfficeUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => RetsListingOfficeSoftDeleteOutputDto, {
    name: RetsListingOfficeSoftDeleteDto.metaname, 
    description: RetsListingOfficeSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingOfficeSoftDeleteInputDto }) 
    input: RetsListingOfficeSoftDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingOfficeSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOfficeSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => RetsListingOfficeDeleteOutputDto, {
    name: RetsListingOfficeDeleteDto.metaname, 
    description: RetsListingOfficeDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingOfficeDeleteInputDto }) 
    input: RetsListingOfficeDeleteInputDto,

    @GraphQLBodyContext() selection: RetsListingOfficeDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOfficeDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => RetsListingOfficeRestoreOutputDto, {
    name: RetsListingOfficeRestoreDto.metaname,
    description: RetsListingOfficeRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingOfficeRestoreInputDto }) 
    input: RetsListingOfficeRestoreInputDto,
    
    @GraphQLBodyContext() selection: RetsListingOfficeRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOfficeRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [RetsListingOfficeUpsertOutputDto], {
    name:  `${RetsListingOfficeUpsertDto.metaname}`, 
    description: `${RetsListingOfficeUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [RetsListingOfficeUpsertInputDto]}) 
    input: RetsListingOfficeUpsertInputDto | RetsListingOfficeUpsertInputDto[],
    
    @GraphQLBodyContext() selection: RetsListingOfficeUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOfficeUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsListingOfficeUpsertInputDto>(input, RetsListingOfficeUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => RetsListingOfficeSoftRemoveOutputDto, {
    name: RetsListingOfficeSoftRemoveDto.metaname, 
    description: RetsListingOfficeSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingOfficeSoftRemoveInputDto }) 
    input: RetsListingOfficeSoftRemoveInputDto,

    @GraphQLBodyContext() selection: RetsListingOfficeSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOfficeSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => RetsListingOfficeRemoveOutputDto, {
    name: RetsListingOfficeRemoveDto.metaname, 
    description: RetsListingOfficeRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingOfficeRemoveInputDto }) 
    input: RetsListingOfficeRemoveInputDto,
    
    @GraphQLBodyContext() selection: RetsListingOfficeRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOfficeRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => RetsListingOfficeRecoverOutputDto, {
    name: RetsListingOfficeRecoverDto.metaname,
    description: RetsListingOfficeRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => RetsListingOfficeRecoverInputDto }) 
    input: RetsListingOfficeRecoverInputDto,

    @GraphQLBodyContext() selection: RetsListingOfficeRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsListingOfficeRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }



}