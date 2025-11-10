import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { RetsMlsProviderService } from './mls.provider.service';
import { RetsMlsProviderEntity } from './entities/mls.provider.entity';
import { RetsMlsProviderFactory } from './mls.provider.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { RetsMlsProviderCreateDto, RetsMlsProviderCreateInputDto, RetsMlsProviderCreateOutputDto, RetsMlsProviderDeleteDto, RetsMlsProviderDeleteInputDto, RetsMlsProviderDeleteOutputDto, RetsMlsProviderFindDto, RetsMlsProviderFindInputDto, RetsMlsProviderFindOneByIdDto, RetsMlsProviderFindOneByIdInputDto, RetsMlsProviderFindOutputDto, RetsMlsProviderFindOutputRowsDto, RetsMlsProviderRecoverDto, RetsMlsProviderRecoverInputDto, RetsMlsProviderRecoverOutputDto, RetsMlsProviderRemoveDto, RetsMlsProviderRemoveInputDto, RetsMlsProviderRemoveOutputDto, RetsMlsProviderRestoreDto, RetsMlsProviderRestoreInputDto, RetsMlsProviderRestoreOutputDto, RetsMlsProviderSoftDeleteDto, RetsMlsProviderSoftDeleteInputDto, RetsMlsProviderSoftDeleteInputWhereDto, RetsMlsProviderSoftDeleteOutputDto, RetsMlsProviderSoftRemoveDto, RetsMlsProviderSoftRemoveInputDto, RetsMlsProviderSoftRemoveOutputDto, RetsMlsProviderUpdateDto, RetsMlsProviderUpdateInputDto, RetsMlsProviderUpdateInputSetsDto, RetsMlsProviderUpdateOutputDto, RetsMlsProviderUploadDeleteDto, RetsMlsProviderUploadDeleteInputDto, RetsMlsProviderUploadDeleteOutputDto, RetsMlsProviderUploadDto, RetsMlsProviderUploadInputDto, RetsMlsProviderUploadOutputDto, RetsMlsProviderUpsertDto, RetsMlsProviderUpsertInputDto, RetsMlsProviderUpsertOutputDto } from './dto/mls.provider.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => RetsMlsProviderEntity)
export class RetsMlsProviderResolver
{
  constructor(
    protected readonly factory: RetsMlsProviderFactory,
    protected readonly service: RetsMlsProviderService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [RetsMlsProviderUploadOutput], { name:  `${RetsMlsProviderUploadDto.metaname}`, description: `${RetsMlsProviderUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => RetsMlsProviderUploadInputDto }) 
    input: RetsMlsProviderUploadInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsMlsProviderUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [RetsMlsProviderUploadDeleteOutput], { name:  `${RetsMlsProviderUploadDeleteDto.metaname}`, description: `${RetsMlsProviderUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsMlsProviderUploadDeleteInputDto] }) 
    input: RetsMlsProviderUploadDeleteInputDto | RetsMlsProviderUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: RetsMlsProviderUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsMlsProviderUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [RetsMlsProviderCreateOutputDto], {
    name:  `${RetsMlsProviderCreateDto.metaname}`, 
    description: `${RetsMlsProviderCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [RetsMlsProviderCreateInputDto] }) 
    input: RetsMlsProviderCreateInputDto | RetsMlsProviderCreateInputDto[],

    @GraphQLBodyContext() selection: RetsMlsProviderCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<RetsMlsProviderCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsMlsProviderCreateInputDto>(input, RetsMlsProviderCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => RetsMlsProviderFindOutputDto, {
    name: RetsMlsProviderFindDto.metaname,
    description: RetsMlsProviderFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => RetsMlsProviderFindInputDto}) 
    filter: RetsMlsProviderFindInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsMlsProviderFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => RetsMlsProviderEntity, {
    name: RetsMlsProviderFindOneByIdDto.metaname, 
    description: RetsMlsProviderFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => RetsMlsProviderFindOneByIdInputDto }) 
    input: RetsMlsProviderFindOneByIdInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<RetsMlsProviderEntity> {
    await this.validation.validateArrayInput<RetsMlsProviderFindOneByIdInputDto>([input], RetsMlsProviderFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => RetsMlsProviderUpdateOutputDto, {
    name: RetsMlsProviderUpdateDto.metaname, 
    description: RetsMlsProviderUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => RetsMlsProviderUpdateInputDto}) 
    input: RetsMlsProviderUpdateInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderUpdateOutputDto> {
    await this.validation.validateArrayInput<RetsMlsProviderUpdateInputSetsDto>([input.sets], RetsMlsProviderUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => RetsMlsProviderSoftDeleteOutputDto, {
    name: RetsMlsProviderSoftDeleteDto.metaname, 
    description: RetsMlsProviderSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsMlsProviderSoftDeleteInputDto }) 
    input: RetsMlsProviderSoftDeleteInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => RetsMlsProviderDeleteOutputDto, {
    name: RetsMlsProviderDeleteDto.metaname, 
    description: RetsMlsProviderDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => RetsMlsProviderDeleteInputDto }) 
    input: RetsMlsProviderDeleteInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => RetsMlsProviderRestoreOutputDto, {
    name: RetsMlsProviderRestoreDto.metaname,
    description: RetsMlsProviderRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => RetsMlsProviderRestoreInputDto }) 
    input: RetsMlsProviderRestoreInputDto,
    
    @GraphQLBodyContext() selection: RetsMlsProviderRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [RetsMlsProviderUpsertOutputDto], {
    name:  `${RetsMlsProviderUpsertDto.metaname}`, 
    description: `${RetsMlsProviderUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [RetsMlsProviderUpsertInputDto]}) 
    input: RetsMlsProviderUpsertInputDto | RetsMlsProviderUpsertInputDto[],
    
    @GraphQLBodyContext() selection: RetsMlsProviderUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<RetsMlsProviderUpsertInputDto>(input, RetsMlsProviderUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => RetsMlsProviderSoftRemoveOutputDto, {
    name: RetsMlsProviderSoftRemoveDto.metaname, 
    description: RetsMlsProviderSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsMlsProviderSoftRemoveInputDto }) 
    input: RetsMlsProviderSoftRemoveInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => RetsMlsProviderRemoveOutputDto, {
    name: RetsMlsProviderRemoveDto.metaname, 
    description: RetsMlsProviderRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => RetsMlsProviderRemoveInputDto }) 
    input: RetsMlsProviderRemoveInputDto,
    
    @GraphQLBodyContext() selection: RetsMlsProviderRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => RetsMlsProviderRecoverOutputDto, {
    name: RetsMlsProviderRecoverDto.metaname,
    description: RetsMlsProviderRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => RetsMlsProviderRecoverInputDto }) 
    input: RetsMlsProviderRecoverInputDto,

    @GraphQLBodyContext() selection: RetsMlsProviderRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<RetsMlsProviderRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }


}