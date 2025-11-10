import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { SettingTypeService } from './type.service';
import { SettingTypeEntity } from './entities/type.entity';
import { SettingTypeFactory } from './type.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { SettingTypeUploadOutputDto, SettingTypeUploadDto, SettingTypeUploadInputDto, SettingTypeUploadDeleteOutputDto, SettingTypeUploadDeleteDto, SettingTypeUploadDeleteInputDto, SettingTypeCreateDto, SettingTypeCreateInputDto, SettingTypeCreateOutputDto, SettingTypeDeleteDto, SettingTypeDeleteInputDto, SettingTypeDeleteOutputDto, SettingTypeFindDto, SettingTypeFindInputDto, SettingTypeFindOneByIdDto, SettingTypeFindOneByIdInputDto, SettingTypeFindOutputDto, SettingTypeFindOutputRowsDto, SettingTypeRecoverDto, SettingTypeRecoverInputDto, SettingTypeRecoverOutputDto, SettingTypeRemoveDto, SettingTypeRemoveInputDto, SettingTypeRemoveOutputDto, SettingTypeRestoreDto, SettingTypeRestoreInputDto, SettingTypeRestoreOutputDto, SettingTypeSoftDeleteDto, SettingTypeSoftDeleteInputDto, SettingTypeSoftDeleteInputWhereDto, SettingTypeSoftDeleteOutputDto, SettingTypeSoftRemoveDto, SettingTypeSoftRemoveInputDto, SettingTypeSoftRemoveOutputDto, SettingTypeUpdateDto, SettingTypeUpdateInputDto, SettingTypeUpdateInputSetsDto, SettingTypeUpdateOutputDto, SettingTypeUpsertDto, SettingTypeUpsertInputDto, SettingTypeUpsertOutputDto } from './dto/type.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => SettingTypeEntity)
export class SettingTypeResolver
{
  constructor(
    protected readonly factory: SettingTypeFactory,
    protected readonly service: SettingTypeService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [SettingTypeUploadOutput], { name:  `${SettingTypeUploadDto.metaname}`, description: `${SettingTypeUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => SettingTypeUploadInputDto }) 
    input: SettingTypeUploadInputDto,

    @GraphQLBodyContext() selection: SettingTypeUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SettingTypeUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [SettingTypeUploadDeleteOutput], { name:  `${SettingTypeUploadDeleteDto.metaname}`, description: `${SettingTypeUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [SettingTypeUploadDeleteInputDto] }) 
    input: SettingTypeUploadDeleteInputDto | SettingTypeUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: SettingTypeUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SettingTypeUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [SettingTypeCreateOutputDto], {
    name:  `${SettingTypeCreateDto.metaname}`, 
    description: `${SettingTypeCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [SettingTypeCreateInputDto] }) 
    input: SettingTypeCreateInputDto | SettingTypeCreateInputDto[],

    @GraphQLBodyContext() selection: SettingTypeCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<SettingTypeCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<SettingTypeCreateInputDto>(input, SettingTypeCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => SettingTypeFindOutputDto, {
    name: SettingTypeFindDto.metaname,
    description: SettingTypeFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => SettingTypeFindInputDto}) 
    filter: SettingTypeFindInputDto,

    @GraphQLBodyContext() selection: SettingTypeFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<SettingTypeFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => SettingTypeEntity, {
    name: SettingTypeFindOneByIdDto.metaname, 
    description: SettingTypeFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => SettingTypeFindOneByIdInputDto }) 
    input: SettingTypeFindOneByIdInputDto,

    @GraphQLBodyContext() selection: SettingTypeEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<SettingTypeEntity> {
    await this.validation.validateArrayInput<SettingTypeFindOneByIdInputDto>([input], SettingTypeFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => SettingTypeUpdateOutputDto, {
    name: SettingTypeUpdateDto.metaname, 
    description: SettingTypeUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => SettingTypeUpdateInputDto}) 
    input: SettingTypeUpdateInputDto,

    @GraphQLBodyContext() selection: SettingTypeUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingTypeUpdateOutputDto> {
    await this.validation.validateArrayInput<SettingTypeUpdateInputSetsDto>([input.sets], SettingTypeUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => SettingTypeSoftDeleteOutputDto, {
    name: SettingTypeSoftDeleteDto.metaname, 
    description: SettingTypeSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => SettingTypeSoftDeleteInputDto }) 
    input: SettingTypeSoftDeleteInputDto,

    @GraphQLBodyContext() selection: SettingTypeSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingTypeSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => SettingTypeDeleteOutputDto, {
    name: SettingTypeDeleteDto.metaname, 
    description: SettingTypeDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => SettingTypeDeleteInputDto }) 
    input: SettingTypeDeleteInputDto,

    @GraphQLBodyContext() selection: SettingTypeDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingTypeDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => SettingTypeRestoreOutputDto, {
    name: SettingTypeRestoreDto.metaname,
    description: SettingTypeRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => SettingTypeRestoreInputDto }) 
    input: SettingTypeRestoreInputDto,
    
    @GraphQLBodyContext() selection: SettingTypeRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingTypeRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [SettingTypeUpsertOutputDto], {
    name:  `${SettingTypeUpsertDto.metaname}`, 
    description: `${SettingTypeUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [SettingTypeUpsertInputDto]}) 
    input: SettingTypeUpsertInputDto | SettingTypeUpsertInputDto[],
    
    @GraphQLBodyContext() selection: SettingTypeUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingTypeUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<SettingTypeUpsertInputDto>(input, SettingTypeUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => SettingTypeSoftRemoveOutputDto, {
    name: SettingTypeSoftRemoveDto.metaname, 
    description: SettingTypeSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => SettingTypeSoftRemoveInputDto }) 
    input: SettingTypeSoftRemoveInputDto,

    @GraphQLBodyContext() selection: SettingTypeSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingTypeSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => SettingTypeRemoveOutputDto, {
    name: SettingTypeRemoveDto.metaname, 
    description: SettingTypeRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => SettingTypeRemoveInputDto }) 
    input: SettingTypeRemoveInputDto,
    
    @GraphQLBodyContext() selection: SettingTypeRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingTypeRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => SettingTypeRecoverOutputDto, {
    name: SettingTypeRecoverDto.metaname,
    description: SettingTypeRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => SettingTypeRecoverInputDto }) 
    input: SettingTypeRecoverInputDto,

    @GraphQLBodyContext() selection: SettingTypeRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<SettingTypeRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: SettingTypeEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<SettingTypeEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }

}