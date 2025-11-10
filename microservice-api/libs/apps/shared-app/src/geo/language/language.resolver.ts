import { Resolver, Query, Mutation, Args, Int, Context, Info, ResolveReference, Parent } from '@nestjs/graphql';
import { LanguageService } from './language.service';
import { LanguageEntity } from './entities/language.entity';
import { LanguageFactory } from './language.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { LanguageUploadOutputDto, LanguageUploadDto, LanguageUploadInputDto, LanguageUploadDeleteOutputDto, LanguageUploadDeleteDto, LanguageUploadDeleteInputDto, LanguageCreateDto, LanguageCreateInputDto, LanguageCreateOutputDto, LanguageDeleteDto, LanguageDeleteInputDto, LanguageDeleteOutputDto, LanguageFindDto, LanguageFindInputDto, LanguageFindOneByIdDto, LanguageFindOneByIdInputDto, LanguageFindOutputDto, LanguageFindOutputRowsDto, LanguageRecoverDto, LanguageRecoverInputDto, LanguageRecoverOutputDto, LanguageRemoveDto, LanguageRemoveInputDto, LanguageRemoveOutputDto, LanguageRestoreDto, LanguageRestoreInputDto, LanguageRestoreOutputDto, LanguageSoftDeleteDto, LanguageSoftDeleteInputDto, LanguageSoftDeleteInputWhereDto, LanguageSoftDeleteOutputDto, LanguageSoftRemoveDto, LanguageSoftRemoveInputDto, LanguageSoftRemoveOutputDto, LanguageUpdateDto, LanguageUpdateInputDto, LanguageUpdateInputSetsDto, LanguageUpdateOutputDto, LanguageUpsertDto, LanguageUpsertInputDto, LanguageUpsertOutputDto } from './dto/language.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => LanguageEntity)
export class LanguageResolver
{
  constructor(
    protected readonly factory: LanguageFactory,
    protected readonly service: LanguageService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [LanguageUploadOutput], { name:  `${LanguageUploadDto.metaname}`, description: `${LanguageUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => LanguageUploadInputDto }) 
    input: LanguageUploadInputDto,

    @GraphQLBodyContext() selection: LanguageUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LanguageUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [LanguageUploadDeleteOutput], { name:  `${LanguageUploadDeleteDto.metaname}`, description: `${LanguageUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [LanguageUploadDeleteInputDto] }) 
    input: LanguageUploadDeleteInputDto | LanguageUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: LanguageUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LanguageUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [LanguageCreateOutputDto], {
    name:  `${LanguageCreateDto.metaname}`, 
    description: `${LanguageCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [LanguageCreateInputDto] }) 
    input: LanguageCreateInputDto | LanguageCreateInputDto[],

    @GraphQLBodyContext() selection: LanguageCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LanguageCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<LanguageCreateInputDto>(input, LanguageCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => LanguageFindOutputDto, {
    name: LanguageFindDto.metaname,
    description: LanguageFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => LanguageFindInputDto}) 
    filter: LanguageFindInputDto,

    @GraphQLBodyContext() selection: LanguageFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<LanguageFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => LanguageEntity, {
    name: LanguageFindOneByIdDto.metaname, 
    description: LanguageFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => LanguageFindOneByIdInputDto }) 
    input: LanguageFindOneByIdInputDto,

    @GraphQLBodyContext() selection: LanguageEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<LanguageEntity> {
    await this.validation.validateArrayInput<LanguageFindOneByIdInputDto>([input], LanguageFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => LanguageUpdateOutputDto, {
    name: LanguageUpdateDto.metaname, 
    description: LanguageUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => LanguageUpdateInputDto}) 
    input: LanguageUpdateInputDto,

    @GraphQLBodyContext() selection: LanguageUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LanguageUpdateOutputDto> {
    await this.validation.validateArrayInput<LanguageUpdateInputSetsDto>([input.sets], LanguageUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => LanguageSoftDeleteOutputDto, {
    name: LanguageSoftDeleteDto.metaname, 
    description: LanguageSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => LanguageSoftDeleteInputDto }) 
    input: LanguageSoftDeleteInputDto,

    @GraphQLBodyContext() selection: LanguageSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LanguageSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => LanguageDeleteOutputDto, {
    name: LanguageDeleteDto.metaname, 
    description: LanguageDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => LanguageDeleteInputDto }) 
    input: LanguageDeleteInputDto,

    @GraphQLBodyContext() selection: LanguageDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LanguageDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => LanguageRestoreOutputDto, {
    name: LanguageRestoreDto.metaname,
    description: LanguageRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => LanguageRestoreInputDto }) 
    input: LanguageRestoreInputDto,
    
    @GraphQLBodyContext() selection: LanguageRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LanguageRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [LanguageUpsertOutputDto], {
    name:  `${LanguageUpsertDto.metaname}`, 
    description: `${LanguageUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [LanguageUpsertInputDto]}) 
    input: LanguageUpsertInputDto | LanguageUpsertInputDto[],
    
    @GraphQLBodyContext() selection: LanguageUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LanguageUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<LanguageUpsertInputDto>(input, LanguageUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => LanguageSoftRemoveOutputDto, {
    name: LanguageSoftRemoveDto.metaname, 
    description: LanguageSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => LanguageSoftRemoveInputDto }) 
    input: LanguageSoftRemoveInputDto,

    @GraphQLBodyContext() selection: LanguageSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LanguageSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => LanguageRemoveOutputDto, {
    name: LanguageRemoveDto.metaname, 
    description: LanguageRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => LanguageRemoveInputDto }) 
    input: LanguageRemoveInputDto,
    
    @GraphQLBodyContext() selection: LanguageRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LanguageRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => LanguageRecoverOutputDto, {
    name: LanguageRecoverDto.metaname,
    description: LanguageRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => LanguageRecoverInputDto }) 
    input: LanguageRecoverInputDto,

    @GraphQLBodyContext() selection: LanguageRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LanguageRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: LanguageEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<LanguageEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}