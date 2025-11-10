import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { QueueTypeService } from './type.service';
import { QueueTypeEntity } from './entities/type.entity';
import { QueueTypeFactory } from './type.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { QueueTypeUploadOutputDto, QueueTypeUploadDto, QueueTypeUploadInputDto, QueueTypeUploadDeleteOutputDto, QueueTypeUploadDeleteDto, QueueTypeUploadDeleteInputDto, QueueTypeCreateDto, QueueTypeCreateInputDto, QueueTypeCreateOutputDto, QueueTypeDeleteDto, QueueTypeDeleteInputDto, QueueTypeDeleteOutputDto, QueueTypeFindDto, QueueTypeFindInputDto, QueueTypeFindOneByIdDto, QueueTypeFindOneByIdInputDto, QueueTypeFindOutputDto, QueueTypeFindOutputRowsDto, QueueTypeRecoverDto, QueueTypeRecoverInputDto, QueueTypeRecoverOutputDto, QueueTypeRemoveDto, QueueTypeRemoveInputDto, QueueTypeRemoveOutputDto, QueueTypeRestoreDto, QueueTypeRestoreInputDto, QueueTypeRestoreOutputDto, QueueTypeSoftDeleteDto, QueueTypeSoftDeleteInputDto, QueueTypeSoftDeleteInputWhereDto, QueueTypeSoftDeleteOutputDto, QueueTypeSoftRemoveDto, QueueTypeSoftRemoveInputDto, QueueTypeSoftRemoveOutputDto, QueueTypeUpdateDto, QueueTypeUpdateInputDto, QueueTypeUpdateInputSetsDto, QueueTypeUpdateOutputDto, QueueTypeUpsertDto, QueueTypeUpsertInputDto, QueueTypeUpsertOutputDto } from './dto/type.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => QueueTypeEntity)
export class QueueTypeResolver
{
  constructor(
    protected readonly factory: QueueTypeFactory,
    protected readonly service: QueueTypeService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [QueueTypeUploadOutput], { name:  `${QueueTypeUploadDto.metaname}`, description: `${QueueTypeUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => QueueTypeUploadInputDto }) 
    input: QueueTypeUploadInputDto,

    @GraphQLBodyContext() selection: QueueTypeUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<QueueTypeUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [QueueTypeUploadDeleteOutput], { name:  `${QueueTypeUploadDeleteDto.metaname}`, description: `${QueueTypeUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [QueueTypeUploadDeleteInputDto] }) 
    input: QueueTypeUploadDeleteInputDto | QueueTypeUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: QueueTypeUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<QueueTypeUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [QueueTypeCreateOutputDto], {
    name:  `${QueueTypeCreateDto.metaname}`, 
    description: `${QueueTypeCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [QueueTypeCreateInputDto] }) 
    input: QueueTypeCreateInputDto | QueueTypeCreateInputDto[],

    @GraphQLBodyContext() selection: QueueTypeCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<QueueTypeCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<QueueTypeCreateInputDto>(input, QueueTypeCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => QueueTypeFindOutputDto, {
    name: QueueTypeFindDto.metaname,
    description: QueueTypeFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => QueueTypeFindInputDto}) 
    filter: QueueTypeFindInputDto,

    @GraphQLBodyContext() selection: QueueTypeFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<QueueTypeFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => QueueTypeEntity, {
    name: QueueTypeFindOneByIdDto.metaname, 
    description: QueueTypeFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => QueueTypeFindOneByIdInputDto }) 
    input: QueueTypeFindOneByIdInputDto,

    @GraphQLBodyContext() selection: QueueTypeEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<QueueTypeEntity> {
    await this.validation.validateArrayInput<QueueTypeFindOneByIdInputDto>([input], QueueTypeFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => QueueTypeUpdateOutputDto, {
    name: QueueTypeUpdateDto.metaname, 
    description: QueueTypeUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => QueueTypeUpdateInputDto}) 
    input: QueueTypeUpdateInputDto,

    @GraphQLBodyContext() selection: QueueTypeUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueTypeUpdateOutputDto> {
    await this.validation.validateArrayInput<QueueTypeUpdateInputSetsDto>([input.sets], QueueTypeUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => QueueTypeSoftDeleteOutputDto, {
    name: QueueTypeSoftDeleteDto.metaname, 
    description: QueueTypeSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => QueueTypeSoftDeleteInputDto }) 
    input: QueueTypeSoftDeleteInputDto,

    @GraphQLBodyContext() selection: QueueTypeSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueTypeSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => QueueTypeDeleteOutputDto, {
    name: QueueTypeDeleteDto.metaname, 
    description: QueueTypeDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => QueueTypeDeleteInputDto }) 
    input: QueueTypeDeleteInputDto,

    @GraphQLBodyContext() selection: QueueTypeDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueTypeDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => QueueTypeRestoreOutputDto, {
    name: QueueTypeRestoreDto.metaname,
    description: QueueTypeRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => QueueTypeRestoreInputDto }) 
    input: QueueTypeRestoreInputDto,
    
    @GraphQLBodyContext() selection: QueueTypeRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueTypeRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [QueueTypeUpsertOutputDto], {
    name:  `${QueueTypeUpsertDto.metaname}`, 
    description: `${QueueTypeUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [QueueTypeUpsertInputDto]}) 
    input: QueueTypeUpsertInputDto | QueueTypeUpsertInputDto[],
    
    @GraphQLBodyContext() selection: QueueTypeUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueTypeUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<QueueTypeUpsertInputDto>(input, QueueTypeUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => QueueTypeSoftRemoveOutputDto, {
    name: QueueTypeSoftRemoveDto.metaname, 
    description: QueueTypeSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => QueueTypeSoftRemoveInputDto }) 
    input: QueueTypeSoftRemoveInputDto,

    @GraphQLBodyContext() selection: QueueTypeSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueTypeSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => QueueTypeRemoveOutputDto, {
    name: QueueTypeRemoveDto.metaname, 
    description: QueueTypeRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => QueueTypeRemoveInputDto }) 
    input: QueueTypeRemoveInputDto,
    
    @GraphQLBodyContext() selection: QueueTypeRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueTypeRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => QueueTypeRecoverOutputDto, {
    name: QueueTypeRecoverDto.metaname,
    description: QueueTypeRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => QueueTypeRecoverInputDto }) 
    input: QueueTypeRecoverInputDto,

    @GraphQLBodyContext() selection: QueueTypeRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueTypeRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: QueueTypeEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<QueueTypeEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }

}