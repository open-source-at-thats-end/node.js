import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { LeadFollowupStatusService } from './followup.status.service';
import { LeadFollowupStatusEntity } from './entities/followup.status.entity';
import { LeadFollowupStatusFactory } from './followup.status.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { LeadFollowupStatusUploadOutputDto, LeadFollowupStatusUploadDto, LeadFollowupStatusUploadInputDto, LeadFollowupStatusUploadDeleteOutputDto, LeadFollowupStatusUploadDeleteDto, LeadFollowupStatusUploadDeleteInputDto, LeadFollowupStatusCreateDto, LeadFollowupStatusCreateInputDto, LeadFollowupStatusCreateOutputDto, LeadFollowupStatusDeleteDto, LeadFollowupStatusDeleteInputDto, LeadFollowupStatusDeleteOutputDto, LeadFollowupStatusFindDto, LeadFollowupStatusFindInputDto, LeadFollowupStatusFindOneByIdDto, LeadFollowupStatusFindOneByIdInputDto, LeadFollowupStatusFindOutputDto, LeadFollowupStatusFindOutputRowsDto, LeadFollowupStatusRecoverDto, LeadFollowupStatusRecoverInputDto, LeadFollowupStatusRecoverOutputDto, LeadFollowupStatusRemoveDto, LeadFollowupStatusRemoveInputDto, LeadFollowupStatusRemoveOutputDto, LeadFollowupStatusRestoreDto, LeadFollowupStatusRestoreInputDto, LeadFollowupStatusRestoreOutputDto, LeadFollowupStatusSoftDeleteDto, LeadFollowupStatusSoftDeleteInputDto, LeadFollowupStatusSoftDeleteInputWhereDto, LeadFollowupStatusSoftDeleteOutputDto, LeadFollowupStatusSoftRemoveDto, LeadFollowupStatusSoftRemoveInputDto, LeadFollowupStatusSoftRemoveOutputDto, LeadFollowupStatusUpdateDto, LeadFollowupStatusUpdateInputDto, LeadFollowupStatusUpdateInputSetsDto, LeadFollowupStatusUpdateOutputDto, LeadFollowupStatusUpsertDto, LeadFollowupStatusUpsertInputDto, LeadFollowupStatusUpsertOutputDto } from './dto/followup.status.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => LeadFollowupStatusEntity)
export class LeadFollowupStatusResolver
{
  constructor(
    protected readonly factory: LeadFollowupStatusFactory,
    protected readonly service: LeadFollowupStatusService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [LeadFollowupStatusUploadOutput], { name:  `${LeadFollowupStatusUploadDto.metaname}`, description: `${LeadFollowupStatusUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => LeadFollowupStatusUploadInputDto }) 
    input: LeadFollowupStatusUploadInputDto,

    @GraphQLBodyContext() selection: LeadFollowupStatusUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadFollowupStatusUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [LeadFollowupStatusUploadDeleteOutput], { name:  `${LeadFollowupStatusUploadDeleteDto.metaname}`, description: `${LeadFollowupStatusUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [LeadFollowupStatusUploadDeleteInputDto] }) 
    input: LeadFollowupStatusUploadDeleteInputDto | LeadFollowupStatusUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: LeadFollowupStatusUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadFollowupStatusUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [LeadFollowupStatusCreateOutputDto], {
    name:  `${LeadFollowupStatusCreateDto.metaname}`, 
    description: `${LeadFollowupStatusCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [LeadFollowupStatusCreateInputDto] }) 
    input: LeadFollowupStatusCreateInputDto | LeadFollowupStatusCreateInputDto[],

    @GraphQLBodyContext() selection: LeadFollowupStatusCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadFollowupStatusCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<LeadFollowupStatusCreateInputDto>(input, LeadFollowupStatusCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => LeadFollowupStatusFindOutputDto, {
    name: LeadFollowupStatusFindDto.metaname,
    description: LeadFollowupStatusFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => LeadFollowupStatusFindInputDto}) 
    filter: LeadFollowupStatusFindInputDto,

    @GraphQLBodyContext() selection: LeadFollowupStatusFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<LeadFollowupStatusFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => LeadFollowupStatusEntity, {
    name: LeadFollowupStatusFindOneByIdDto.metaname, 
    description: LeadFollowupStatusFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupStatusFindOneByIdInputDto }) 
    input: LeadFollowupStatusFindOneByIdInputDto,

    @GraphQLBodyContext() selection: LeadFollowupStatusEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<LeadFollowupStatusEntity> {
    await this.validation.validateArrayInput<LeadFollowupStatusFindOneByIdInputDto>([input], LeadFollowupStatusFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => LeadFollowupStatusUpdateOutputDto, {
    name: LeadFollowupStatusUpdateDto.metaname, 
    description: LeadFollowupStatusUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => LeadFollowupStatusUpdateInputDto}) 
    input: LeadFollowupStatusUpdateInputDto,

    @GraphQLBodyContext() selection: LeadFollowupStatusUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupStatusUpdateOutputDto> {
    await this.validation.validateArrayInput<LeadFollowupStatusUpdateInputSetsDto>([input.sets], LeadFollowupStatusUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => LeadFollowupStatusSoftDeleteOutputDto, {
    name: LeadFollowupStatusSoftDeleteDto.metaname, 
    description: LeadFollowupStatusSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupStatusSoftDeleteInputDto }) 
    input: LeadFollowupStatusSoftDeleteInputDto,

    @GraphQLBodyContext() selection: LeadFollowupStatusSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupStatusSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => LeadFollowupStatusDeleteOutputDto, {
    name: LeadFollowupStatusDeleteDto.metaname, 
    description: LeadFollowupStatusDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupStatusDeleteInputDto }) 
    input: LeadFollowupStatusDeleteInputDto,

    @GraphQLBodyContext() selection: LeadFollowupStatusDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupStatusDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => LeadFollowupStatusRestoreOutputDto, {
    name: LeadFollowupStatusRestoreDto.metaname,
    description: LeadFollowupStatusRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupStatusRestoreInputDto }) 
    input: LeadFollowupStatusRestoreInputDto,
    
    @GraphQLBodyContext() selection: LeadFollowupStatusRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupStatusRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [LeadFollowupStatusUpsertOutputDto], {
    name:  `${LeadFollowupStatusUpsertDto.metaname}`, 
    description: `${LeadFollowupStatusUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [LeadFollowupStatusUpsertInputDto]}) 
    input: LeadFollowupStatusUpsertInputDto | LeadFollowupStatusUpsertInputDto[],
    
    @GraphQLBodyContext() selection: LeadFollowupStatusUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupStatusUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<LeadFollowupStatusUpsertInputDto>(input, LeadFollowupStatusUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => LeadFollowupStatusSoftRemoveOutputDto, {
    name: LeadFollowupStatusSoftRemoveDto.metaname, 
    description: LeadFollowupStatusSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupStatusSoftRemoveInputDto }) 
    input: LeadFollowupStatusSoftRemoveInputDto,

    @GraphQLBodyContext() selection: LeadFollowupStatusSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupStatusSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => LeadFollowupStatusRemoveOutputDto, {
    name: LeadFollowupStatusRemoveDto.metaname, 
    description: LeadFollowupStatusRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupStatusRemoveInputDto }) 
    input: LeadFollowupStatusRemoveInputDto,
    
    @GraphQLBodyContext() selection: LeadFollowupStatusRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupStatusRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => LeadFollowupStatusRecoverOutputDto, {
    name: LeadFollowupStatusRecoverDto.metaname,
    description: LeadFollowupStatusRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupStatusRecoverInputDto }) 
    input: LeadFollowupStatusRecoverInputDto,

    @GraphQLBodyContext() selection: LeadFollowupStatusRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupStatusRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: LeadFollowupStatusEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<LeadFollowupStatusEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}