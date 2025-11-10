import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { ProcessedSearchByAddressService } from './search.by.address.service';
import { ProcessedSearchByAddressEntity } from './entities/search.by.address.entity';
import { ProcessedSearchByAddressFactory } from './search.by.address.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { ProcessedSearchByAddressCreateDto, ProcessedSearchByAddressCreateInputDto, ProcessedSearchByAddressCreateOutputDto, ProcessedSearchByAddressDeleteDto, ProcessedSearchByAddressDeleteInputDto, ProcessedSearchByAddressDeleteOutputDto, ProcessedSearchByAddressFindDto, ProcessedSearchByAddressFindInputDto, ProcessedSearchByAddressFindOneByIdDto, ProcessedSearchByAddressFindOneByIdInputDto, ProcessedSearchByAddressFindOutputDto, ProcessedSearchByAddressFindOutputRowsDto, ProcessedSearchByAddressRecoverDto, ProcessedSearchByAddressRecoverInputDto, ProcessedSearchByAddressRecoverOutputDto, ProcessedSearchByAddressRemoveDto, ProcessedSearchByAddressRemoveInputDto, ProcessedSearchByAddressRemoveOutputDto, ProcessedSearchByAddressRestoreDto, ProcessedSearchByAddressRestoreInputDto, ProcessedSearchByAddressRestoreOutputDto, ProcessedSearchByAddressSoftDeleteDto, ProcessedSearchByAddressSoftDeleteInputDto, ProcessedSearchByAddressSoftDeleteInputWhereDto, ProcessedSearchByAddressSoftDeleteOutputDto, ProcessedSearchByAddressSoftRemoveDto, ProcessedSearchByAddressSoftRemoveInputDto, ProcessedSearchByAddressSoftRemoveOutputDto, ProcessedSearchByAddressUpdateDto, ProcessedSearchByAddressUpdateInputDto, ProcessedSearchByAddressUpdateInputSetsDto, ProcessedSearchByAddressUpdateOutputDto, ProcessedSearchByAddressUploadDeleteDto, ProcessedSearchByAddressUploadDeleteInputDto, ProcessedSearchByAddressUploadDeleteOutputDto, ProcessedSearchByAddressUploadDto, ProcessedSearchByAddressUploadInputDto, ProcessedSearchByAddressUploadOutputDto, ProcessedSearchByAddressUpsertDto, ProcessedSearchByAddressUpsertInputDto, ProcessedSearchByAddressUpsertOutputDto } from './dto/search.by.address.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => ProcessedSearchByAddressEntity)
export class ProcessedSearchByAddressResolver
{
  constructor(
    protected readonly factory: ProcessedSearchByAddressFactory,
    protected readonly service: ProcessedSearchByAddressService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [ProcessedSearchByAddressUploadOutput], { name:  `${ProcessedSearchByAddressUploadDto.metaname}`, description: `${ProcessedSearchByAddressUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => ProcessedSearchByAddressUploadInputDto }) 
    input: ProcessedSearchByAddressUploadInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByAddressUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByAddressUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [ProcessedSearchByAddressUploadDeleteOutput], { name:  `${ProcessedSearchByAddressUploadDeleteDto.metaname}`, description: `${ProcessedSearchByAddressUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchByAddressUploadDeleteInputDto] }) 
    input: ProcessedSearchByAddressUploadDeleteInputDto | ProcessedSearchByAddressUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchByAddressUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByAddressUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchByAddressCreateOutputDto], {
    name:  `${ProcessedSearchByAddressCreateDto.metaname}`, 
    description: `${ProcessedSearchByAddressCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchByAddressCreateInputDto] }) 
    input: ProcessedSearchByAddressCreateInputDto | ProcessedSearchByAddressCreateInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchByAddressCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByAddressCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchByAddressCreateInputDto>(input, ProcessedSearchByAddressCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => ProcessedSearchByAddressFindOutputDto, {
    name: ProcessedSearchByAddressFindDto.metaname,
    description: ProcessedSearchByAddressFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => ProcessedSearchByAddressFindInputDto}) 
    filter: ProcessedSearchByAddressFindInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByAddressFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchByAddressFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => ProcessedSearchByAddressEntity, {
    name: ProcessedSearchByAddressFindOneByIdDto.metaname, 
    description: ProcessedSearchByAddressFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByAddressFindOneByIdInputDto }) 
    input: ProcessedSearchByAddressFindOneByIdInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByAddressEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchByAddressEntity> {
    await this.validation.validateArrayInput<ProcessedSearchByAddressFindOneByIdInputDto>([input], ProcessedSearchByAddressFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByAddressUpdateOutputDto, {
    name: ProcessedSearchByAddressUpdateDto.metaname, 
    description: ProcessedSearchByAddressUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => ProcessedSearchByAddressUpdateInputDto}) 
    input: ProcessedSearchByAddressUpdateInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByAddressUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByAddressUpdateOutputDto> {
    await this.validation.validateArrayInput<ProcessedSearchByAddressUpdateInputSetsDto>([input.sets], ProcessedSearchByAddressUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByAddressSoftDeleteOutputDto, {
    name: ProcessedSearchByAddressSoftDeleteDto.metaname, 
    description: ProcessedSearchByAddressSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByAddressSoftDeleteInputDto }) 
    input: ProcessedSearchByAddressSoftDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByAddressSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByAddressSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByAddressDeleteOutputDto, {
    name: ProcessedSearchByAddressDeleteDto.metaname, 
    description: ProcessedSearchByAddressDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByAddressDeleteInputDto }) 
    input: ProcessedSearchByAddressDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByAddressDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByAddressDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByAddressRestoreOutputDto, {
    name: ProcessedSearchByAddressRestoreDto.metaname,
    description: ProcessedSearchByAddressRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByAddressRestoreInputDto }) 
    input: ProcessedSearchByAddressRestoreInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchByAddressRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByAddressRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchByAddressUpsertOutputDto], {
    name:  `${ProcessedSearchByAddressUpsertDto.metaname}`, 
    description: `${ProcessedSearchByAddressUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [ProcessedSearchByAddressUpsertInputDto]}) 
    input: ProcessedSearchByAddressUpsertInputDto | ProcessedSearchByAddressUpsertInputDto[],
    
    @GraphQLBodyContext() selection: ProcessedSearchByAddressUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByAddressUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchByAddressUpsertInputDto>(input, ProcessedSearchByAddressUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByAddressSoftRemoveOutputDto, {
    name: ProcessedSearchByAddressSoftRemoveDto.metaname, 
    description: ProcessedSearchByAddressSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByAddressSoftRemoveInputDto }) 
    input: ProcessedSearchByAddressSoftRemoveInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByAddressSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByAddressSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByAddressRemoveOutputDto, {
    name: ProcessedSearchByAddressRemoveDto.metaname, 
    description: ProcessedSearchByAddressRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByAddressRemoveInputDto }) 
    input: ProcessedSearchByAddressRemoveInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchByAddressRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByAddressRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByAddressRecoverOutputDto, {
    name: ProcessedSearchByAddressRecoverDto.metaname,
    description: ProcessedSearchByAddressRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByAddressRecoverInputDto }) 
    input: ProcessedSearchByAddressRecoverInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByAddressRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByAddressRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }



}