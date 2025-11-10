import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { ProcessedSearchByZipcodeService } from './search.by.zipcode.service';
import { ProcessedSearchByZipcodeEntity } from './entities/search.by.zipcode.entity';
import { ProcessedSearchByZipcodeFactory } from './search.by.zipcode.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { ProcessedSearchByZipcodeCreateDto, ProcessedSearchByZipcodeCreateInputDto, ProcessedSearchByZipcodeCreateOutputDto, ProcessedSearchByZipcodeDeleteDto, ProcessedSearchByZipcodeDeleteInputDto, ProcessedSearchByZipcodeDeleteOutputDto, ProcessedSearchByZipcodeFindDto, ProcessedSearchByZipcodeFindInputDto, ProcessedSearchByZipcodeFindOneByIdDto, ProcessedSearchByZipcodeFindOneByIdInputDto, ProcessedSearchByZipcodeFindOutputDto, ProcessedSearchByZipcodeFindOutputRowsDto, ProcessedSearchByZipcodeRecoverDto, ProcessedSearchByZipcodeRecoverInputDto, ProcessedSearchByZipcodeRecoverOutputDto, ProcessedSearchByZipcodeRemoveDto, ProcessedSearchByZipcodeRemoveInputDto, ProcessedSearchByZipcodeRemoveOutputDto, ProcessedSearchByZipcodeRestoreDto, ProcessedSearchByZipcodeRestoreInputDto, ProcessedSearchByZipcodeRestoreOutputDto, ProcessedSearchByZipcodeSoftDeleteDto, ProcessedSearchByZipcodeSoftDeleteInputDto, ProcessedSearchByZipcodeSoftDeleteInputWhereDto, ProcessedSearchByZipcodeSoftDeleteOutputDto, ProcessedSearchByZipcodeSoftRemoveDto, ProcessedSearchByZipcodeSoftRemoveInputDto, ProcessedSearchByZipcodeSoftRemoveOutputDto, ProcessedSearchByZipcodeUpdateDto, ProcessedSearchByZipcodeUpdateInputDto, ProcessedSearchByZipcodeUpdateInputSetsDto, ProcessedSearchByZipcodeUpdateOutputDto, ProcessedSearchByZipcodeUploadDeleteDto, ProcessedSearchByZipcodeUploadDeleteInputDto, ProcessedSearchByZipcodeUploadDeleteOutputDto, ProcessedSearchByZipcodeUploadDto, ProcessedSearchByZipcodeUploadInputDto, ProcessedSearchByZipcodeUploadOutputDto, ProcessedSearchByZipcodeUpsertDto, ProcessedSearchByZipcodeUpsertInputDto, ProcessedSearchByZipcodeUpsertOutputDto } from './dto/search.by.zipcode.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => ProcessedSearchByZipcodeEntity)
export class ProcessedSearchByZipcodeResolver
{
  constructor(
    protected readonly factory: ProcessedSearchByZipcodeFactory,
    protected readonly service: ProcessedSearchByZipcodeService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [ProcessedSearchByZipcodeUploadOutput], { name:  `${ProcessedSearchByZipcodeUploadDto.metaname}`, description: `${ProcessedSearchByZipcodeUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => ProcessedSearchByZipcodeUploadInputDto }) 
    input: ProcessedSearchByZipcodeUploadInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByZipcodeUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByZipcodeUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [ProcessedSearchByZipcodeUploadDeleteOutput], { name:  `${ProcessedSearchByZipcodeUploadDeleteDto.metaname}`, description: `${ProcessedSearchByZipcodeUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchByZipcodeUploadDeleteInputDto] }) 
    input: ProcessedSearchByZipcodeUploadDeleteInputDto | ProcessedSearchByZipcodeUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchByZipcodeUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByZipcodeUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchByZipcodeCreateOutputDto], {
    name:  `${ProcessedSearchByZipcodeCreateDto.metaname}`, 
    description: `${ProcessedSearchByZipcodeCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [ProcessedSearchByZipcodeCreateInputDto] }) 
    input: ProcessedSearchByZipcodeCreateInputDto | ProcessedSearchByZipcodeCreateInputDto[],

    @GraphQLBodyContext() selection: ProcessedSearchByZipcodeCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<ProcessedSearchByZipcodeCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchByZipcodeCreateInputDto>(input, ProcessedSearchByZipcodeCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => ProcessedSearchByZipcodeFindOutputDto, {
    name: ProcessedSearchByZipcodeFindDto.metaname,
    description: ProcessedSearchByZipcodeFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => ProcessedSearchByZipcodeFindInputDto}) 
    filter: ProcessedSearchByZipcodeFindInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByZipcodeFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchByZipcodeFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => ProcessedSearchByZipcodeEntity, {
    name: ProcessedSearchByZipcodeFindOneByIdDto.metaname, 
    description: ProcessedSearchByZipcodeFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByZipcodeFindOneByIdInputDto }) 
    input: ProcessedSearchByZipcodeFindOneByIdInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByZipcodeEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<ProcessedSearchByZipcodeEntity> {
    await this.validation.validateArrayInput<ProcessedSearchByZipcodeFindOneByIdInputDto>([input], ProcessedSearchByZipcodeFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByZipcodeUpdateOutputDto, {
    name: ProcessedSearchByZipcodeUpdateDto.metaname, 
    description: ProcessedSearchByZipcodeUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => ProcessedSearchByZipcodeUpdateInputDto}) 
    input: ProcessedSearchByZipcodeUpdateInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByZipcodeUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByZipcodeUpdateOutputDto> {
    await this.validation.validateArrayInput<ProcessedSearchByZipcodeUpdateInputSetsDto>([input.sets], ProcessedSearchByZipcodeUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByZipcodeSoftDeleteOutputDto, {
    name: ProcessedSearchByZipcodeSoftDeleteDto.metaname, 
    description: ProcessedSearchByZipcodeSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByZipcodeSoftDeleteInputDto }) 
    input: ProcessedSearchByZipcodeSoftDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByZipcodeSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByZipcodeSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByZipcodeDeleteOutputDto, {
    name: ProcessedSearchByZipcodeDeleteDto.metaname, 
    description: ProcessedSearchByZipcodeDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByZipcodeDeleteInputDto }) 
    input: ProcessedSearchByZipcodeDeleteInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByZipcodeDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByZipcodeDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByZipcodeRestoreOutputDto, {
    name: ProcessedSearchByZipcodeRestoreDto.metaname,
    description: ProcessedSearchByZipcodeRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByZipcodeRestoreInputDto }) 
    input: ProcessedSearchByZipcodeRestoreInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchByZipcodeRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByZipcodeRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [ProcessedSearchByZipcodeUpsertOutputDto], {
    name:  `${ProcessedSearchByZipcodeUpsertDto.metaname}`, 
    description: `${ProcessedSearchByZipcodeUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [ProcessedSearchByZipcodeUpsertInputDto]}) 
    input: ProcessedSearchByZipcodeUpsertInputDto | ProcessedSearchByZipcodeUpsertInputDto[],
    
    @GraphQLBodyContext() selection: ProcessedSearchByZipcodeUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByZipcodeUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<ProcessedSearchByZipcodeUpsertInputDto>(input, ProcessedSearchByZipcodeUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByZipcodeSoftRemoveOutputDto, {
    name: ProcessedSearchByZipcodeSoftRemoveDto.metaname, 
    description: ProcessedSearchByZipcodeSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByZipcodeSoftRemoveInputDto }) 
    input: ProcessedSearchByZipcodeSoftRemoveInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByZipcodeSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByZipcodeSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByZipcodeRemoveOutputDto, {
    name: ProcessedSearchByZipcodeRemoveDto.metaname, 
    description: ProcessedSearchByZipcodeRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByZipcodeRemoveInputDto }) 
    input: ProcessedSearchByZipcodeRemoveInputDto,
    
    @GraphQLBodyContext() selection: ProcessedSearchByZipcodeRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByZipcodeRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => ProcessedSearchByZipcodeRecoverOutputDto, {
    name: ProcessedSearchByZipcodeRecoverDto.metaname,
    description: ProcessedSearchByZipcodeRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => ProcessedSearchByZipcodeRecoverInputDto }) 
    input: ProcessedSearchByZipcodeRecoverInputDto,

    @GraphQLBodyContext() selection: ProcessedSearchByZipcodeRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<ProcessedSearchByZipcodeRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }



}