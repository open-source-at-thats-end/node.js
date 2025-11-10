import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { IdentityCardTypeService } from './identity.card.type.service';
import { IdentityCardTypeEntity } from './entities/identity.card.type.entity';
import { IdentityCardTypeFactory } from './identity.card.type.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { IdentityCardTypeUploadOutputDto, IdentityCardTypeUploadDto, IdentityCardTypeUploadInputDto, IdentityCardTypeUploadDeleteOutputDto, IdentityCardTypeUploadDeleteDto, IdentityCardTypeUploadDeleteInputDto, IdentityCardTypeCreateDto, IdentityCardTypeCreateInputDto, IdentityCardTypeCreateOutputDto, IdentityCardTypeDeleteDto, IdentityCardTypeDeleteInputDto, IdentityCardTypeDeleteOutputDto, IdentityCardTypeFindDto, IdentityCardTypeFindInputDto, IdentityCardTypeFindOneByIdDto, IdentityCardTypeFindOneByIdInputDto, IdentityCardTypeFindOutputDto, IdentityCardTypeFindOutputRowsDto, IdentityCardTypeRecoverDto, IdentityCardTypeRecoverInputDto, IdentityCardTypeRecoverOutputDto, IdentityCardTypeRemoveDto, IdentityCardTypeRemoveInputDto, IdentityCardTypeRemoveOutputDto, IdentityCardTypeRestoreDto, IdentityCardTypeRestoreInputDto, IdentityCardTypeRestoreOutputDto, IdentityCardTypeSoftDeleteDto, IdentityCardTypeSoftDeleteInputDto, IdentityCardTypeSoftDeleteInputWhereDto, IdentityCardTypeSoftDeleteOutputDto, IdentityCardTypeSoftRemoveDto, IdentityCardTypeSoftRemoveInputDto, IdentityCardTypeSoftRemoveOutputDto, IdentityCardTypeUpdateDto, IdentityCardTypeUpdateInputDto, IdentityCardTypeUpdateInputSetsDto, IdentityCardTypeUpdateOutputDto, IdentityCardTypeUpsertDto, IdentityCardTypeUpsertInputDto, IdentityCardTypeUpsertOutputDto } from './dto/identity.card.type.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => IdentityCardTypeEntity)
export class IdentityCardTypeResolver
{
  constructor(
    protected readonly factory: IdentityCardTypeFactory,
    protected readonly service: IdentityCardTypeService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [IdentityCardTypeUploadOutput], { name:  `${IdentityCardTypeUploadDto.metaname}`, description: `${IdentityCardTypeUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => IdentityCardTypeUploadInputDto }) 
    input: IdentityCardTypeUploadInputDto,

    @GraphQLBodyContext() selection: IdentityCardTypeUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<IdentityCardTypeUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [IdentityCardTypeUploadDeleteOutput], { name:  `${IdentityCardTypeUploadDeleteDto.metaname}`, description: `${IdentityCardTypeUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [IdentityCardTypeUploadDeleteInputDto] }) 
    input: IdentityCardTypeUploadDeleteInputDto | IdentityCardTypeUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: IdentityCardTypeUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<IdentityCardTypeUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [IdentityCardTypeCreateOutputDto], {
    name:  `${IdentityCardTypeCreateDto.metaname}`, 
    description: `${IdentityCardTypeCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [IdentityCardTypeCreateInputDto] }) 
    input: IdentityCardTypeCreateInputDto | IdentityCardTypeCreateInputDto[],

    @GraphQLBodyContext() selection: IdentityCardTypeCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<IdentityCardTypeCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<IdentityCardTypeCreateInputDto>(input, IdentityCardTypeCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => IdentityCardTypeFindOutputDto, {
    name: IdentityCardTypeFindDto.metaname,
    description: IdentityCardTypeFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => IdentityCardTypeFindInputDto}) 
    filter: IdentityCardTypeFindInputDto,

    @GraphQLBodyContext() selection: IdentityCardTypeFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<IdentityCardTypeFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => IdentityCardTypeEntity, {
    name: IdentityCardTypeFindOneByIdDto.metaname, 
    description: IdentityCardTypeFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => IdentityCardTypeFindOneByIdInputDto }) 
    input: IdentityCardTypeFindOneByIdInputDto,

    @GraphQLBodyContext() selection: IdentityCardTypeEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<IdentityCardTypeEntity> {
    await this.validation.validateArrayInput<IdentityCardTypeFindOneByIdInputDto>([input], IdentityCardTypeFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => IdentityCardTypeUpdateOutputDto, {
    name: IdentityCardTypeUpdateDto.metaname, 
    description: IdentityCardTypeUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => IdentityCardTypeUpdateInputDto}) 
    input: IdentityCardTypeUpdateInputDto,

    @GraphQLBodyContext() selection: IdentityCardTypeUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<IdentityCardTypeUpdateOutputDto> {
    await this.validation.validateArrayInput<IdentityCardTypeUpdateInputSetsDto>([input.sets], IdentityCardTypeUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => IdentityCardTypeSoftDeleteOutputDto, {
    name: IdentityCardTypeSoftDeleteDto.metaname, 
    description: IdentityCardTypeSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => IdentityCardTypeSoftDeleteInputDto }) 
    input: IdentityCardTypeSoftDeleteInputDto,

    @GraphQLBodyContext() selection: IdentityCardTypeSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<IdentityCardTypeSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => IdentityCardTypeDeleteOutputDto, {
    name: IdentityCardTypeDeleteDto.metaname, 
    description: IdentityCardTypeDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => IdentityCardTypeDeleteInputDto }) 
    input: IdentityCardTypeDeleteInputDto,

    @GraphQLBodyContext() selection: IdentityCardTypeDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<IdentityCardTypeDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => IdentityCardTypeRestoreOutputDto, {
    name: IdentityCardTypeRestoreDto.metaname,
    description: IdentityCardTypeRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => IdentityCardTypeRestoreInputDto }) 
    input: IdentityCardTypeRestoreInputDto,
    
    @GraphQLBodyContext() selection: IdentityCardTypeRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<IdentityCardTypeRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [IdentityCardTypeUpsertOutputDto], {
    name:  `${IdentityCardTypeUpsertDto.metaname}`, 
    description: `${IdentityCardTypeUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [IdentityCardTypeUpsertInputDto]}) 
    input: IdentityCardTypeUpsertInputDto | IdentityCardTypeUpsertInputDto[],
    
    @GraphQLBodyContext() selection: IdentityCardTypeUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<IdentityCardTypeUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<IdentityCardTypeUpsertInputDto>(input, IdentityCardTypeUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => IdentityCardTypeSoftRemoveOutputDto, {
    name: IdentityCardTypeSoftRemoveDto.metaname, 
    description: IdentityCardTypeSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => IdentityCardTypeSoftRemoveInputDto }) 
    input: IdentityCardTypeSoftRemoveInputDto,

    @GraphQLBodyContext() selection: IdentityCardTypeSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<IdentityCardTypeSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => IdentityCardTypeRemoveOutputDto, {
    name: IdentityCardTypeRemoveDto.metaname, 
    description: IdentityCardTypeRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => IdentityCardTypeRemoveInputDto }) 
    input: IdentityCardTypeRemoveInputDto,
    
    @GraphQLBodyContext() selection: IdentityCardTypeRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<IdentityCardTypeRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => IdentityCardTypeRecoverOutputDto, {
    name: IdentityCardTypeRecoverDto.metaname,
    description: IdentityCardTypeRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => IdentityCardTypeRecoverInputDto }) 
    input: IdentityCardTypeRecoverInputDto,

    @GraphQLBodyContext() selection: IdentityCardTypeRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<IdentityCardTypeRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: IdentityCardTypeEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<IdentityCardTypeEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }

}