import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { WorkStatusService } from './work.status.service';
import { WorkStatusEntity } from './entities/work.status.entity';
import { WorkStatusFactory } from './work.status.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { WorkStatusUploadOutputDto, WorkStatusUploadDto, WorkStatusUploadInputDto, WorkStatusUploadDeleteOutputDto, WorkStatusUploadDeleteDto, WorkStatusUploadDeleteInputDto, WorkStatusCreateDto, WorkStatusCreateInputDto, WorkStatusCreateOutputDto, WorkStatusDeleteDto, WorkStatusDeleteInputDto, WorkStatusDeleteOutputDto, WorkStatusFindDto, WorkStatusFindInputDto, WorkStatusFindOneByIdDto, WorkStatusFindOneByIdInputDto, WorkStatusFindOutputDto, WorkStatusFindOutputRowsDto, WorkStatusRecoverDto, WorkStatusRecoverInputDto, WorkStatusRecoverOutputDto, WorkStatusRemoveDto, WorkStatusRemoveInputDto, WorkStatusRemoveOutputDto, WorkStatusRestoreDto, WorkStatusRestoreInputDto, WorkStatusRestoreOutputDto, WorkStatusSoftDeleteDto, WorkStatusSoftDeleteInputDto, WorkStatusSoftDeleteInputWhereDto, WorkStatusSoftDeleteOutputDto, WorkStatusSoftRemoveDto, WorkStatusSoftRemoveInputDto, WorkStatusSoftRemoveOutputDto, WorkStatusUpdateDto, WorkStatusUpdateInputDto, WorkStatusUpdateInputSetsDto, WorkStatusUpdateOutputDto, WorkStatusUpsertDto, WorkStatusUpsertInputDto, WorkStatusUpsertOutputDto } from './dto/work.status.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => WorkStatusEntity)
export class WorkStatusResolver
{
  constructor(
    protected readonly factory: WorkStatusFactory,
    protected readonly service: WorkStatusService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [WorkStatusUploadOutput], { name:  `${WorkStatusUploadDto.metaname}`, description: `${WorkStatusUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => WorkStatusUploadInputDto }) 
    input: WorkStatusUploadInputDto,

    @GraphQLBodyContext() selection: WorkStatusUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WorkStatusUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [WorkStatusUploadDeleteOutput], { name:  `${WorkStatusUploadDeleteDto.metaname}`, description: `${WorkStatusUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [WorkStatusUploadDeleteInputDto] }) 
    input: WorkStatusUploadDeleteInputDto | WorkStatusUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: WorkStatusUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WorkStatusUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [WorkStatusCreateOutputDto], {
    name:  `${WorkStatusCreateDto.metaname}`, 
    description: `${WorkStatusCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [WorkStatusCreateInputDto] }) 
    input: WorkStatusCreateInputDto | WorkStatusCreateInputDto[],

    @GraphQLBodyContext() selection: WorkStatusCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WorkStatusCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<WorkStatusCreateInputDto>(input, WorkStatusCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => WorkStatusFindOutputDto, {
    name: WorkStatusFindDto.metaname,
    description: WorkStatusFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => WorkStatusFindInputDto}) 
    filter: WorkStatusFindInputDto,

    @GraphQLBodyContext() selection: WorkStatusFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<WorkStatusFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => WorkStatusEntity, {
    name: WorkStatusFindOneByIdDto.metaname, 
    description: WorkStatusFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => WorkStatusFindOneByIdInputDto }) 
    input: WorkStatusFindOneByIdInputDto,

    @GraphQLBodyContext() selection: WorkStatusEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<WorkStatusEntity> {
    await this.validation.validateArrayInput<WorkStatusFindOneByIdInputDto>([input], WorkStatusFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => WorkStatusUpdateOutputDto, {
    name: WorkStatusUpdateDto.metaname, 
    description: WorkStatusUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => WorkStatusUpdateInputDto}) 
    input: WorkStatusUpdateInputDto,

    @GraphQLBodyContext() selection: WorkStatusUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WorkStatusUpdateOutputDto> {
    await this.validation.validateArrayInput<WorkStatusUpdateInputSetsDto>([input.sets], WorkStatusUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => WorkStatusSoftDeleteOutputDto, {
    name: WorkStatusSoftDeleteDto.metaname, 
    description: WorkStatusSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => WorkStatusSoftDeleteInputDto }) 
    input: WorkStatusSoftDeleteInputDto,

    @GraphQLBodyContext() selection: WorkStatusSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WorkStatusSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => WorkStatusDeleteOutputDto, {
    name: WorkStatusDeleteDto.metaname, 
    description: WorkStatusDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => WorkStatusDeleteInputDto }) 
    input: WorkStatusDeleteInputDto,

    @GraphQLBodyContext() selection: WorkStatusDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WorkStatusDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => WorkStatusRestoreOutputDto, {
    name: WorkStatusRestoreDto.metaname,
    description: WorkStatusRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => WorkStatusRestoreInputDto }) 
    input: WorkStatusRestoreInputDto,
    
    @GraphQLBodyContext() selection: WorkStatusRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WorkStatusRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [WorkStatusUpsertOutputDto], {
    name:  `${WorkStatusUpsertDto.metaname}`, 
    description: `${WorkStatusUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [WorkStatusUpsertInputDto]}) 
    input: WorkStatusUpsertInputDto | WorkStatusUpsertInputDto[],
    
    @GraphQLBodyContext() selection: WorkStatusUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WorkStatusUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<WorkStatusUpsertInputDto>(input, WorkStatusUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => WorkStatusSoftRemoveOutputDto, {
    name: WorkStatusSoftRemoveDto.metaname, 
    description: WorkStatusSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => WorkStatusSoftRemoveInputDto }) 
    input: WorkStatusSoftRemoveInputDto,

    @GraphQLBodyContext() selection: WorkStatusSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WorkStatusSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => WorkStatusRemoveOutputDto, {
    name: WorkStatusRemoveDto.metaname, 
    description: WorkStatusRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => WorkStatusRemoveInputDto }) 
    input: WorkStatusRemoveInputDto,
    
    @GraphQLBodyContext() selection: WorkStatusRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WorkStatusRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => WorkStatusRecoverOutputDto, {
    name: WorkStatusRecoverDto.metaname,
    description: WorkStatusRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => WorkStatusRecoverInputDto }) 
    input: WorkStatusRecoverInputDto,

    @GraphQLBodyContext() selection: WorkStatusRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WorkStatusRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: WorkStatusEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<WorkStatusEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}