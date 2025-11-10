import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { WebPageHierarchyService } from './hierarchy.service';
import { WebPageHierarchyEntity } from './entities/page.hierarchy.entity';
import { WebPageHierarchyFactory } from './hierarchy.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { WebPageHierarchyUploadOutputDto, WebPageHierarchyUploadDto, WebPageHierarchyUploadInputDto, WebPageHierarchyUploadDeleteOutputDto, WebPageHierarchyUploadDeleteDto, WebPageHierarchyUploadDeleteInputDto, WebPageHierarchyCreateDto, WebPageHierarchyCreateInputDto, WebPageHierarchyCreateOutputDto, WebPageHierarchyDeleteDto, WebPageHierarchyDeleteInputDto, WebPageHierarchyDeleteOutputDto, WebPageHierarchyFindDto, WebPageHierarchyFindInputDto, WebPageHierarchyFindOneByIdDto, WebPageHierarchyFindOneByIdInputDto, WebPageHierarchyFindOutputDto, WebPageHierarchyFindOutputRowsDto, WebPageHierarchyRecoverDto, WebPageHierarchyRecoverInputDto, WebPageHierarchyRecoverOutputDto, WebPageHierarchyRemoveDto, WebPageHierarchyRemoveInputDto, WebPageHierarchyRemoveOutputDto, WebPageHierarchyRestoreDto, WebPageHierarchyRestoreInputDto, WebPageHierarchyRestoreOutputDto, WebPageHierarchySoftDeleteDto, WebPageHierarchySoftDeleteInputDto, WebPageHierarchySoftDeleteInputWhereDto, WebPageHierarchySoftDeleteOutputDto, WebPageHierarchySoftRemoveDto, WebPageHierarchySoftRemoveInputDto, WebPageHierarchySoftRemoveOutputDto, WebPageHierarchyUpdateDto, WebPageHierarchyUpdateInputDto, WebPageHierarchyUpdateInputSetsDto, WebPageHierarchyUpdateOutputDto, WebPageHierarchyUpsertDto, WebPageHierarchyUpsertInputDto, WebPageHierarchyUpsertOutputDto } from './dto/hierarchy.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => WebPageHierarchyEntity)
export class WebPageHierarchyResolver
{
  constructor(
    protected readonly factory: WebPageHierarchyFactory,
    protected readonly service: WebPageHierarchyService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [WebPageHierarchyUploadOutput], { name:  `${WebPageHierarchyUploadDto.metaname}`, description: `${WebPageHierarchyUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => WebPageHierarchyUploadInputDto }) 
    input: WebPageHierarchyUploadInputDto,

    @GraphQLBodyContext() selection: WebPageHierarchyUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WebPageHierarchyUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [WebPageHierarchyUploadDeleteOutput], { name:  `${WebPageHierarchyUploadDeleteDto.metaname}`, description: `${WebPageHierarchyUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [WebPageHierarchyUploadDeleteInputDto] }) 
    input: WebPageHierarchyUploadDeleteInputDto | WebPageHierarchyUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: WebPageHierarchyUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WebPageHierarchyUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [WebPageHierarchyCreateOutputDto], {
    name:  `${WebPageHierarchyCreateDto.metaname}`, 
    description: `${WebPageHierarchyCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [WebPageHierarchyCreateInputDto] }) 
    input: WebPageHierarchyCreateInputDto | WebPageHierarchyCreateInputDto[],

    @GraphQLBodyContext() selection: WebPageHierarchyCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<WebPageHierarchyCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<WebPageHierarchyCreateInputDto>(input, WebPageHierarchyCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => WebPageHierarchyFindOutputDto, {
    name: WebPageHierarchyFindDto.metaname,
    description: WebPageHierarchyFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => WebPageHierarchyFindInputDto}) 
    filter: WebPageHierarchyFindInputDto,

    @GraphQLBodyContext() selection: WebPageHierarchyFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<WebPageHierarchyFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => WebPageHierarchyEntity, {
    name: WebPageHierarchyFindOneByIdDto.metaname, 
    description: WebPageHierarchyFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => WebPageHierarchyFindOneByIdInputDto }) 
    input: WebPageHierarchyFindOneByIdInputDto,

    @GraphQLBodyContext() selection: WebPageHierarchyEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<WebPageHierarchyEntity> {
    await this.validation.validateArrayInput<WebPageHierarchyFindOneByIdInputDto>([input], WebPageHierarchyFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => WebPageHierarchyUpdateOutputDto, {
    name: WebPageHierarchyUpdateDto.metaname, 
    description: WebPageHierarchyUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => WebPageHierarchyUpdateInputDto}) 
    input: WebPageHierarchyUpdateInputDto,

    @GraphQLBodyContext() selection: WebPageHierarchyUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageHierarchyUpdateOutputDto> {
    await this.validation.validateArrayInput<WebPageHierarchyUpdateInputSetsDto>([input.sets], WebPageHierarchyUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => WebPageHierarchySoftDeleteOutputDto, {
    name: WebPageHierarchySoftDeleteDto.metaname, 
    description: WebPageHierarchySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => WebPageHierarchySoftDeleteInputDto }) 
    input: WebPageHierarchySoftDeleteInputDto,

    @GraphQLBodyContext() selection: WebPageHierarchySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageHierarchySoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => WebPageHierarchyDeleteOutputDto, {
    name: WebPageHierarchyDeleteDto.metaname, 
    description: WebPageHierarchyDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => WebPageHierarchyDeleteInputDto }) 
    input: WebPageHierarchyDeleteInputDto,

    @GraphQLBodyContext() selection: WebPageHierarchyDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageHierarchyDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => WebPageHierarchyRestoreOutputDto, {
    name: WebPageHierarchyRestoreDto.metaname,
    description: WebPageHierarchyRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => WebPageHierarchyRestoreInputDto }) 
    input: WebPageHierarchyRestoreInputDto,
    
    @GraphQLBodyContext() selection: WebPageHierarchyRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageHierarchyRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [WebPageHierarchyUpsertOutputDto], {
    name:  `${WebPageHierarchyUpsertDto.metaname}`, 
    description: `${WebPageHierarchyUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [WebPageHierarchyUpsertInputDto]}) 
    input: WebPageHierarchyUpsertInputDto | WebPageHierarchyUpsertInputDto[],
    
    @GraphQLBodyContext() selection: WebPageHierarchyUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageHierarchyUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<WebPageHierarchyUpsertInputDto>(input, WebPageHierarchyUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => WebPageHierarchySoftRemoveOutputDto, {
    name: WebPageHierarchySoftRemoveDto.metaname, 
    description: WebPageHierarchySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => WebPageHierarchySoftRemoveInputDto }) 
    input: WebPageHierarchySoftRemoveInputDto,

    @GraphQLBodyContext() selection: WebPageHierarchySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageHierarchySoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => WebPageHierarchyRemoveOutputDto, {
    name: WebPageHierarchyRemoveDto.metaname, 
    description: WebPageHierarchyRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => WebPageHierarchyRemoveInputDto }) 
    input: WebPageHierarchyRemoveInputDto,
    
    @GraphQLBodyContext() selection: WebPageHierarchyRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageHierarchyRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => WebPageHierarchyRecoverOutputDto, {
    name: WebPageHierarchyRecoverDto.metaname,
    description: WebPageHierarchyRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => WebPageHierarchyRecoverInputDto }) 
    input: WebPageHierarchyRecoverInputDto,

    @GraphQLBodyContext() selection: WebPageHierarchyRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<WebPageHierarchyRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: WebPageHierarchyEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<WebPageHierarchyEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}