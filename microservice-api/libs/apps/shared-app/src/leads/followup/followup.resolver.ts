import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { LeadFollowupService } from './followup.service';
import { LeadFollowupEntity } from './entities/lead.followup.entity';
import { LeadFollowupFactory } from './followup.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { LeadFollowupUploadOutputDto, LeadFollowupUploadDto, LeadFollowupUploadInputDto, LeadFollowupUploadDeleteOutputDto, LeadFollowupUploadDeleteDto, LeadFollowupUploadDeleteInputDto, LeadFollowupCreateDto, LeadFollowupCreateInputDto, LeadFollowupCreateOutputDto, LeadFollowupDeleteDto, LeadFollowupDeleteInputDto, LeadFollowupDeleteOutputDto, LeadFollowupFindDto, LeadFollowupFindInputDto, LeadFollowupFindOneByIdDto, LeadFollowupFindOneByIdInputDto, LeadFollowupFindOutputDto, LeadFollowupFindOutputRowsDto, LeadFollowupRecoverDto, LeadFollowupRecoverInputDto, LeadFollowupRecoverOutputDto, LeadFollowupRemoveDto, LeadFollowupRemoveInputDto, LeadFollowupRemoveOutputDto, LeadFollowupRestoreDto, LeadFollowupRestoreInputDto, LeadFollowupRestoreOutputDto, LeadFollowupSoftDeleteDto, LeadFollowupSoftDeleteInputDto, LeadFollowupSoftDeleteInputWhereDto, LeadFollowupSoftDeleteOutputDto, LeadFollowupSoftRemoveDto, LeadFollowupSoftRemoveInputDto, LeadFollowupSoftRemoveOutputDto, LeadFollowupUpdateDto, LeadFollowupUpdateInputDto, LeadFollowupUpdateInputSetsDto, LeadFollowupUpdateOutputDto, LeadFollowupUpsertDto, LeadFollowupUpsertInputDto, LeadFollowupUpsertOutputDto } from './dto/followup.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => LeadFollowupEntity)
export class LeadFollowupResolver
{
  constructor(
    protected readonly factory: LeadFollowupFactory,
    protected readonly service: LeadFollowupService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [LeadFollowupUploadOutput], { name:  `${LeadFollowupUploadDto.metaname}`, description: `${LeadFollowupUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => LeadFollowupUploadInputDto }) 
    input: LeadFollowupUploadInputDto,

    @GraphQLBodyContext() selection: LeadFollowupUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadFollowupUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [LeadFollowupUploadDeleteOutput], { name:  `${LeadFollowupUploadDeleteDto.metaname}`, description: `${LeadFollowupUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [LeadFollowupUploadDeleteInputDto] }) 
    input: LeadFollowupUploadDeleteInputDto | LeadFollowupUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: LeadFollowupUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadFollowupUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [LeadFollowupCreateOutputDto], {
    name:  `${LeadFollowupCreateDto.metaname}`, 
    description: `${LeadFollowupCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [LeadFollowupCreateInputDto] }) 
    input: LeadFollowupCreateInputDto | LeadFollowupCreateInputDto[],

    @GraphQLBodyContext() selection: LeadFollowupCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadFollowupCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<LeadFollowupCreateInputDto>(input, LeadFollowupCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => LeadFollowupFindOutputDto, {
    name: LeadFollowupFindDto.metaname,
    description: LeadFollowupFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => LeadFollowupFindInputDto}) 
    filter: LeadFollowupFindInputDto,

    @GraphQLBodyContext() selection: LeadFollowupFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<LeadFollowupFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => LeadFollowupEntity, {
    name: LeadFollowupFindOneByIdDto.metaname, 
    description: LeadFollowupFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupFindOneByIdInputDto }) 
    input: LeadFollowupFindOneByIdInputDto,

    @GraphQLBodyContext() selection: LeadFollowupEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<LeadFollowupEntity> {
    await this.validation.validateArrayInput<LeadFollowupFindOneByIdInputDto>([input], LeadFollowupFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => LeadFollowupUpdateOutputDto, {
    name: LeadFollowupUpdateDto.metaname, 
    description: LeadFollowupUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => LeadFollowupUpdateInputDto}) 
    input: LeadFollowupUpdateInputDto,

    @GraphQLBodyContext() selection: LeadFollowupUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupUpdateOutputDto> {
    await this.validation.validateArrayInput<LeadFollowupUpdateInputSetsDto>([input.sets], LeadFollowupUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => LeadFollowupSoftDeleteOutputDto, {
    name: LeadFollowupSoftDeleteDto.metaname, 
    description: LeadFollowupSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupSoftDeleteInputDto }) 
    input: LeadFollowupSoftDeleteInputDto,

    @GraphQLBodyContext() selection: LeadFollowupSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => LeadFollowupDeleteOutputDto, {
    name: LeadFollowupDeleteDto.metaname, 
    description: LeadFollowupDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupDeleteInputDto }) 
    input: LeadFollowupDeleteInputDto,

    @GraphQLBodyContext() selection: LeadFollowupDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => LeadFollowupRestoreOutputDto, {
    name: LeadFollowupRestoreDto.metaname,
    description: LeadFollowupRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupRestoreInputDto }) 
    input: LeadFollowupRestoreInputDto,
    
    @GraphQLBodyContext() selection: LeadFollowupRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [LeadFollowupUpsertOutputDto], {
    name:  `${LeadFollowupUpsertDto.metaname}`, 
    description: `${LeadFollowupUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [LeadFollowupUpsertInputDto]}) 
    input: LeadFollowupUpsertInputDto | LeadFollowupUpsertInputDto[],
    
    @GraphQLBodyContext() selection: LeadFollowupUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<LeadFollowupUpsertInputDto>(input, LeadFollowupUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => LeadFollowupSoftRemoveOutputDto, {
    name: LeadFollowupSoftRemoveDto.metaname, 
    description: LeadFollowupSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupSoftRemoveInputDto }) 
    input: LeadFollowupSoftRemoveInputDto,

    @GraphQLBodyContext() selection: LeadFollowupSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => LeadFollowupRemoveOutputDto, {
    name: LeadFollowupRemoveDto.metaname, 
    description: LeadFollowupRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupRemoveInputDto }) 
    input: LeadFollowupRemoveInputDto,
    
    @GraphQLBodyContext() selection: LeadFollowupRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => LeadFollowupRecoverOutputDto, {
    name: LeadFollowupRecoverDto.metaname,
    description: LeadFollowupRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupRecoverInputDto }) 
    input: LeadFollowupRecoverInputDto,

    @GraphQLBodyContext() selection: LeadFollowupRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: LeadFollowupEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<LeadFollowupEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}