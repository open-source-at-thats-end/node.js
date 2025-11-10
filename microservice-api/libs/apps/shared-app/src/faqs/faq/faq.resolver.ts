import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { FaqService } from './faq.service';
import { FaqEntity } from './entities/faq.entity';
import { FaqFactory } from './faq.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { FaqUploadOutputDto, FaqUploadDto, FaqUploadInputDto, FaqUploadDeleteOutputDto, FaqUploadDeleteDto, FaqUploadDeleteInputDto, FaqCreateDto, FaqCreateInputDto, FaqCreateOutputDto, FaqDeleteDto, FaqDeleteInputDto, FaqDeleteOutputDto, FaqFindDto, FaqFindInputDto, FaqFindOneByIdDto, FaqFindOneByIdInputDto, FaqFindOutputDto, FaqFindOutputRowsDto, FaqRecoverDto, FaqRecoverInputDto, FaqRecoverOutputDto, FaqRemoveDto, FaqRemoveInputDto, FaqRemoveOutputDto, FaqRestoreDto, FaqRestoreInputDto, FaqRestoreOutputDto, FaqSoftDeleteDto, FaqSoftDeleteInputDto, FaqSoftDeleteInputWhereDto, FaqSoftDeleteOutputDto, FaqSoftRemoveDto, FaqSoftRemoveInputDto, FaqSoftRemoveOutputDto, FaqUpdateDto, FaqUpdateInputDto, FaqUpdateInputSetsDto, FaqUpdateOutputDto, FaqUpsertDto, FaqUpsertInputDto, FaqUpsertOutputDto } from './dto/faq.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => FaqEntity)
export class FaqResolver
{
  constructor(
    protected readonly factory: FaqFactory,
    protected readonly service: FaqService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [FaqUploadOutput], { name:  `${FaqUploadDto.metaname}`, description: `${FaqUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => FaqUploadInputDto }) 
    input: FaqUploadInputDto,

    @GraphQLBodyContext() selection: FaqUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<FaqUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [FaqUploadDeleteOutput], { name:  `${FaqUploadDeleteDto.metaname}`, description: `${FaqUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [FaqUploadDeleteInputDto] }) 
    input: FaqUploadDeleteInputDto | FaqUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: FaqUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<FaqUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [FaqCreateOutputDto], {
    name:  `${FaqCreateDto.metaname}`, 
    description: `${FaqCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [FaqCreateInputDto] }) 
    input: FaqCreateInputDto | FaqCreateInputDto[],

    @GraphQLBodyContext() selection: FaqCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<FaqCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<FaqCreateInputDto>(input, FaqCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => FaqFindOutputDto, {
    name: FaqFindDto.metaname,
    description: FaqFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => FaqFindInputDto}) 
    filter: FaqFindInputDto,

    @GraphQLBodyContext() selection: FaqFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<FaqFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => FaqEntity, {
    name: FaqFindOneByIdDto.metaname, 
    description: FaqFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => FaqFindOneByIdInputDto }) 
    input: FaqFindOneByIdInputDto,

    @GraphQLBodyContext() selection: FaqEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<FaqEntity> {
    await this.validation.validateArrayInput<FaqFindOneByIdInputDto>([input], FaqFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => FaqUpdateOutputDto, {
    name: FaqUpdateDto.metaname, 
    description: FaqUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => FaqUpdateInputDto}) 
    input: FaqUpdateInputDto,

    @GraphQLBodyContext() selection: FaqUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqUpdateOutputDto> {
    await this.validation.validateArrayInput<FaqUpdateInputSetsDto>([input.sets], FaqUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => FaqSoftDeleteOutputDto, {
    name: FaqSoftDeleteDto.metaname, 
    description: FaqSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => FaqSoftDeleteInputDto }) 
    input: FaqSoftDeleteInputDto,

    @GraphQLBodyContext() selection: FaqSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => FaqDeleteOutputDto, {
    name: FaqDeleteDto.metaname, 
    description: FaqDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => FaqDeleteInputDto }) 
    input: FaqDeleteInputDto,

    @GraphQLBodyContext() selection: FaqDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => FaqRestoreOutputDto, {
    name: FaqRestoreDto.metaname,
    description: FaqRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => FaqRestoreInputDto }) 
    input: FaqRestoreInputDto,
    
    @GraphQLBodyContext() selection: FaqRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [FaqUpsertOutputDto], {
    name:  `${FaqUpsertDto.metaname}`, 
    description: `${FaqUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [FaqUpsertInputDto]}) 
    input: FaqUpsertInputDto | FaqUpsertInputDto[],
    
    @GraphQLBodyContext() selection: FaqUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<FaqUpsertInputDto>(input, FaqUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => FaqSoftRemoveOutputDto, {
    name: FaqSoftRemoveDto.metaname, 
    description: FaqSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => FaqSoftRemoveInputDto }) 
    input: FaqSoftRemoveInputDto,

    @GraphQLBodyContext() selection: FaqSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => FaqRemoveOutputDto, {
    name: FaqRemoveDto.metaname, 
    description: FaqRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => FaqRemoveInputDto }) 
    input: FaqRemoveInputDto,
    
    @GraphQLBodyContext() selection: FaqRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => FaqRecoverOutputDto, {
    name: FaqRecoverDto.metaname,
    description: FaqRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => FaqRecoverInputDto }) 
    input: FaqRecoverInputDto,

    @GraphQLBodyContext() selection: FaqRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FaqRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: FaqEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<FaqEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}