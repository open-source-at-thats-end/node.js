import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { CrawlerLeadService } from './lead.service';
import { CrawlerLeadEntity } from './entities/lead.entity';
import { CrawlerLeadFactory } from './lead.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { CrawlerLeadUploadOutputDto, CrawlerLeadUploadDto, CrawlerLeadUploadInputDto, CrawlerLeadUploadDeleteOutputDto, CrawlerLeadUploadDeleteDto, CrawlerLeadUploadDeleteInputDto, CrawlerLeadCreateDto, CrawlerLeadCreateInputDto, CrawlerLeadCreateOutputDto, CrawlerLeadDeleteDto, CrawlerLeadDeleteInputDto, CrawlerLeadDeleteOutputDto, CrawlerLeadFindDto, CrawlerLeadFindInputDto, CrawlerLeadFindOneByIdDto, CrawlerLeadFindOneByIdInputDto, CrawlerLeadFindOutputDto, CrawlerLeadFindOutputRowsDto, CrawlerLeadRecoverDto, CrawlerLeadRecoverInputDto, CrawlerLeadRecoverOutputDto, CrawlerLeadRemoveDto, CrawlerLeadRemoveInputDto, CrawlerLeadRemoveOutputDto, CrawlerLeadRestoreDto, CrawlerLeadRestoreInputDto, CrawlerLeadRestoreOutputDto, CrawlerLeadSoftDeleteDto, CrawlerLeadSoftDeleteInputDto, CrawlerLeadSoftDeleteInputWhereDto, CrawlerLeadSoftDeleteOutputDto, CrawlerLeadSoftRemoveDto, CrawlerLeadSoftRemoveInputDto, CrawlerLeadSoftRemoveOutputDto, CrawlerLeadUpdateDto, CrawlerLeadUpdateInputDto, CrawlerLeadUpdateInputSetsDto, CrawlerLeadUpdateOutputDto, CrawlerLeadUpsertDto, CrawlerLeadUpsertInputDto, CrawlerLeadUpsertOutputDto } from './dto/lead.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => CrawlerLeadEntity)
export class CrawlerLeadResolver
{
  constructor(
    protected readonly factory: CrawlerLeadFactory,
    protected readonly service: CrawlerLeadService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [CrawlerLeadUploadOutput], { name:  `${CrawlerLeadUploadDto.metaname}`, description: `${CrawlerLeadUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => CrawlerLeadUploadInputDto }) 
    input: CrawlerLeadUploadInputDto,

    @GraphQLBodyContext() selection: CrawlerLeadUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CrawlerLeadUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [CrawlerLeadUploadDeleteOutput], { name:  `${CrawlerLeadUploadDeleteDto.metaname}`, description: `${CrawlerLeadUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [CrawlerLeadUploadDeleteInputDto] }) 
    input: CrawlerLeadUploadDeleteInputDto | CrawlerLeadUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: CrawlerLeadUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CrawlerLeadUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [CrawlerLeadCreateOutputDto], {
    name:  `${CrawlerLeadCreateDto.metaname}`, 
    description: `${CrawlerLeadCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [CrawlerLeadCreateInputDto] }) 
    input: CrawlerLeadCreateInputDto | CrawlerLeadCreateInputDto[],

    @GraphQLBodyContext() selection: CrawlerLeadCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CrawlerLeadCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<CrawlerLeadCreateInputDto>(input, CrawlerLeadCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => CrawlerLeadFindOutputDto, {
    name: CrawlerLeadFindDto.metaname,
    description: CrawlerLeadFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => CrawlerLeadFindInputDto}) 
    filter: CrawlerLeadFindInputDto,

    @GraphQLBodyContext() selection: CrawlerLeadFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<CrawlerLeadFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => CrawlerLeadEntity, {
    name: CrawlerLeadFindOneByIdDto.metaname, 
    description: CrawlerLeadFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => CrawlerLeadFindOneByIdInputDto }) 
    input: CrawlerLeadFindOneByIdInputDto,

    @GraphQLBodyContext() selection: CrawlerLeadEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<CrawlerLeadEntity> {
    await this.validation.validateArrayInput<CrawlerLeadFindOneByIdInputDto>([input], CrawlerLeadFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => CrawlerLeadUpdateOutputDto, {
    name: CrawlerLeadUpdateDto.metaname, 
    description: CrawlerLeadUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => CrawlerLeadUpdateInputDto}) 
    input: CrawlerLeadUpdateInputDto,

    @GraphQLBodyContext() selection: CrawlerLeadUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerLeadUpdateOutputDto> {
    await this.validation.validateArrayInput<CrawlerLeadUpdateInputSetsDto>([input.sets], CrawlerLeadUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => CrawlerLeadSoftDeleteOutputDto, {
    name: CrawlerLeadSoftDeleteDto.metaname, 
    description: CrawlerLeadSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => CrawlerLeadSoftDeleteInputDto }) 
    input: CrawlerLeadSoftDeleteInputDto,

    @GraphQLBodyContext() selection: CrawlerLeadSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerLeadSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => CrawlerLeadDeleteOutputDto, {
    name: CrawlerLeadDeleteDto.metaname, 
    description: CrawlerLeadDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => CrawlerLeadDeleteInputDto }) 
    input: CrawlerLeadDeleteInputDto,

    @GraphQLBodyContext() selection: CrawlerLeadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerLeadDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => CrawlerLeadRestoreOutputDto, {
    name: CrawlerLeadRestoreDto.metaname,
    description: CrawlerLeadRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => CrawlerLeadRestoreInputDto }) 
    input: CrawlerLeadRestoreInputDto,
    
    @GraphQLBodyContext() selection: CrawlerLeadRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerLeadRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [CrawlerLeadUpsertOutputDto], {
    name:  `${CrawlerLeadUpsertDto.metaname}`, 
    description: `${CrawlerLeadUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [CrawlerLeadUpsertInputDto]}) 
    input: CrawlerLeadUpsertInputDto | CrawlerLeadUpsertInputDto[],
    
    @GraphQLBodyContext() selection: CrawlerLeadUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerLeadUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<CrawlerLeadUpsertInputDto>(input, CrawlerLeadUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => CrawlerLeadSoftRemoveOutputDto, {
    name: CrawlerLeadSoftRemoveDto.metaname, 
    description: CrawlerLeadSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => CrawlerLeadSoftRemoveInputDto }) 
    input: CrawlerLeadSoftRemoveInputDto,

    @GraphQLBodyContext() selection: CrawlerLeadSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerLeadSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => CrawlerLeadRemoveOutputDto, {
    name: CrawlerLeadRemoveDto.metaname, 
    description: CrawlerLeadRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => CrawlerLeadRemoveInputDto }) 
    input: CrawlerLeadRemoveInputDto,
    
    @GraphQLBodyContext() selection: CrawlerLeadRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerLeadRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => CrawlerLeadRecoverOutputDto, {
    name: CrawlerLeadRecoverDto.metaname,
    description: CrawlerLeadRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => CrawlerLeadRecoverInputDto }) 
    input: CrawlerLeadRecoverInputDto,

    @GraphQLBodyContext() selection: CrawlerLeadRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CrawlerLeadRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: CrawlerLeadEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<CrawlerLeadEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}