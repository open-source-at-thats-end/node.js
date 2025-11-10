import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { CrawlerScheduleService } from './schedule.service';
import { CrawlerScheduleEntity } from './entities/schedule.entity';
import { CrawlerScheduleFactory } from './schedule.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { CrawlerScheduleUploadOutputDto, CrawlerScheduleUploadDto, CrawlerScheduleUploadInputDto, CrawlerScheduleUploadDeleteOutputDto, CrawlerScheduleUploadDeleteDto, CrawlerScheduleUploadDeleteInputDto, CrawlerScheduleCreateDto, CrawlerScheduleCreateInputDto, CrawlerScheduleCreateOutputDto, CrawlerScheduleDeleteDto, CrawlerScheduleDeleteInputDto, CrawlerScheduleDeleteOutputDto, CrawlerScheduleFindDto, CrawlerScheduleFindInputDto, CrawlerScheduleFindOneByIdDto, CrawlerScheduleFindOneByIdInputDto, CrawlerScheduleFindOutputDto, CrawlerScheduleFindOutputRowsDto, CrawlerScheduleRecoverDto, CrawlerScheduleRecoverInputDto, CrawlerScheduleRecoverOutputDto, CrawlerScheduleRemoveDto, CrawlerScheduleRemoveInputDto, CrawlerScheduleRemoveOutputDto, CrawlerScheduleRestoreDto, CrawlerScheduleRestoreInputDto, CrawlerScheduleRestoreOutputDto, CrawlerScheduleSoftDeleteDto, CrawlerScheduleSoftDeleteInputDto, CrawlerScheduleSoftDeleteInputWhereDto, CrawlerScheduleSoftDeleteOutputDto, CrawlerScheduleSoftRemoveDto, CrawlerScheduleSoftRemoveInputDto, CrawlerScheduleSoftRemoveOutputDto, CrawlerScheduleUpdateDto, CrawlerScheduleUpdateInputDto, CrawlerScheduleUpdateInputSetsDto, CrawlerScheduleUpdateOutputDto, CrawlerScheduleUpsertDto, CrawlerScheduleUpsertInputDto, CrawlerScheduleUpsertOutputDto } from './dto/schedule.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => CrawlerScheduleEntity)
export class CrawlerScheduleResolver
{
  constructor(
    protected readonly factory: CrawlerScheduleFactory,
    protected readonly service: CrawlerScheduleService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [CrawlerScheduleUploadOutput], { name:  `${CrawlerScheduleUploadDto.metaname}`, description: `${CrawlerScheduleUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => CrawlerScheduleUploadInputDto }) 
    input: CrawlerScheduleUploadInputDto,

    @GraphQLBodyContext() selection: CrawlerScheduleUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CrawlerScheduleUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [CrawlerScheduleUploadDeleteOutput], { name:  `${CrawlerScheduleUploadDeleteDto.metaname}`, description: `${CrawlerScheduleUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [CrawlerScheduleUploadDeleteInputDto] }) 
    input: CrawlerScheduleUploadDeleteInputDto | CrawlerScheduleUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: CrawlerScheduleUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CrawlerScheduleUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [CrawlerScheduleCreateOutputDto], {
    name:  `${CrawlerScheduleCreateDto.metaname}`, 
    description: `${CrawlerScheduleCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [CrawlerScheduleCreateInputDto] }) 
    input: CrawlerScheduleCreateInputDto | CrawlerScheduleCreateInputDto[],

    @GraphQLBodyContext() selection: CrawlerScheduleCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CrawlerScheduleCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<CrawlerScheduleCreateInputDto>(input, CrawlerScheduleCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => CrawlerScheduleFindOutputDto, {
    name: CrawlerScheduleFindDto.metaname,
    description: CrawlerScheduleFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => CrawlerScheduleFindInputDto}) 
    filter: CrawlerScheduleFindInputDto,

    @GraphQLBodyContext() selection: CrawlerScheduleFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<CrawlerScheduleFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => CrawlerScheduleEntity, {
    name: CrawlerScheduleFindOneByIdDto.metaname, 
    description: CrawlerScheduleFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => CrawlerScheduleFindOneByIdInputDto }) 
    input: CrawlerScheduleFindOneByIdInputDto,

    @GraphQLBodyContext() selection: CrawlerScheduleEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<CrawlerScheduleEntity> {
    await this.validation.validateArrayInput<CrawlerScheduleFindOneByIdInputDto>([input], CrawlerScheduleFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => CrawlerScheduleUpdateOutputDto, {
    name: CrawlerScheduleUpdateDto.metaname, 
    description: CrawlerScheduleUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => CrawlerScheduleUpdateInputDto}) 
    input: CrawlerScheduleUpdateInputDto,

    @GraphQLBodyContext() selection: CrawlerScheduleUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerScheduleUpdateOutputDto> {
    await this.validation.validateArrayInput<CrawlerScheduleUpdateInputSetsDto>([input.sets], CrawlerScheduleUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => CrawlerScheduleSoftDeleteOutputDto, {
    name: CrawlerScheduleSoftDeleteDto.metaname, 
    description: CrawlerScheduleSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => CrawlerScheduleSoftDeleteInputDto }) 
    input: CrawlerScheduleSoftDeleteInputDto,

    @GraphQLBodyContext() selection: CrawlerScheduleSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerScheduleSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => CrawlerScheduleDeleteOutputDto, {
    name: CrawlerScheduleDeleteDto.metaname, 
    description: CrawlerScheduleDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => CrawlerScheduleDeleteInputDto }) 
    input: CrawlerScheduleDeleteInputDto,

    @GraphQLBodyContext() selection: CrawlerScheduleDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerScheduleDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => CrawlerScheduleRestoreOutputDto, {
    name: CrawlerScheduleRestoreDto.metaname,
    description: CrawlerScheduleRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => CrawlerScheduleRestoreInputDto }) 
    input: CrawlerScheduleRestoreInputDto,
    
    @GraphQLBodyContext() selection: CrawlerScheduleRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerScheduleRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [CrawlerScheduleUpsertOutputDto], {
    name:  `${CrawlerScheduleUpsertDto.metaname}`, 
    description: `${CrawlerScheduleUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [CrawlerScheduleUpsertInputDto]}) 
    input: CrawlerScheduleUpsertInputDto | CrawlerScheduleUpsertInputDto[],
    
    @GraphQLBodyContext() selection: CrawlerScheduleUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerScheduleUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<CrawlerScheduleUpsertInputDto>(input, CrawlerScheduleUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => CrawlerScheduleSoftRemoveOutputDto, {
    name: CrawlerScheduleSoftRemoveDto.metaname, 
    description: CrawlerScheduleSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => CrawlerScheduleSoftRemoveInputDto }) 
    input: CrawlerScheduleSoftRemoveInputDto,

    @GraphQLBodyContext() selection: CrawlerScheduleSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerScheduleSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => CrawlerScheduleRemoveOutputDto, {
    name: CrawlerScheduleRemoveDto.metaname, 
    description: CrawlerScheduleRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => CrawlerScheduleRemoveInputDto }) 
    input: CrawlerScheduleRemoveInputDto,
    
    @GraphQLBodyContext() selection: CrawlerScheduleRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerScheduleRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => CrawlerScheduleRecoverOutputDto, {
    name: CrawlerScheduleRecoverDto.metaname,
    description: CrawlerScheduleRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => CrawlerScheduleRecoverInputDto }) 
    input: CrawlerScheduleRecoverInputDto,

    @GraphQLBodyContext() selection: CrawlerScheduleRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerScheduleRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }
   
  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: CrawlerScheduleEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<CrawlerScheduleEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}