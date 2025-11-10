import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { BusinessUploadOutputDto, BusinessUploadDto, BusinessUploadInputDto, BusinessUploadDeleteOutputDto, BusinessUploadDeleteDto, BusinessUploadDeleteInputDto, BusinessCreateDto, BusinessCreateInputDto, BusinessCreateOutputDto, BusinessDeleteDto, BusinessDeleteInputDto, BusinessDeleteOutputDto, BusinessFindDto, BusinessFindInputDto, BusinessFindOneByIdDto, BusinessFindOneByIdInputDto, BusinessFindOutputDto, BusinessFindOutputRowsDto, BusinessRecoverDto, BusinessRecoverInputDto, BusinessRecoverOutputDto, BusinessRemoveDto, BusinessRemoveInputDto, BusinessRemoveOutputDto, BusinessRestoreDto, BusinessRestoreInputDto, BusinessRestoreOutputDto, BusinessSoftDeleteDto, BusinessSoftDeleteInputDto, BusinessSoftDeleteInputWhereDto, BusinessSoftDeleteOutputDto, BusinessSoftRemoveDto, BusinessSoftRemoveInputDto, BusinessSoftRemoveOutputDto, BusinessUpdateDto, BusinessUpdateInputDto, BusinessUpdateInputSetsDto, BusinessUpdateOutputDto, BusinessUpsertDto, BusinessUpsertInputDto, BusinessUpsertOutputDto } from './dto/business.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';
import { BusinessEntity } from './entities/business.entity';
import { BusinessFactory } from './business.factory';
import { BusinessService } from './business.service';


@Resolver(() => BusinessEntity)
export class BusinessResolver
{
  constructor(
    protected readonly factory: BusinessFactory,
    protected readonly service: BusinessService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [BusinessUploadOutput], { name:  `${BusinessUploadDto.metaname}`, description: `${BusinessUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => BusinessUploadInputDto }) 
    input: BusinessUploadInputDto,

    @GraphQLBodyContext() selection: BusinessUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<BusinessUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [BusinessUploadDeleteOutput], { name:  `${BusinessUploadDeleteDto.metaname}`, description: `${BusinessUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [BusinessUploadDeleteInputDto] }) 
    input: BusinessUploadDeleteInputDto | BusinessUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: BusinessUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<BusinessUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [BusinessCreateOutputDto], {
    name:  `${BusinessCreateDto.metaname}`, 
    description: `${BusinessCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [BusinessCreateInputDto] }) 
    input: BusinessCreateInputDto | BusinessCreateInputDto[],

    @GraphQLBodyContext() selection: BusinessCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<BusinessCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<BusinessCreateInputDto>(input, BusinessCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => BusinessFindOutputDto, {
    name: BusinessFindDto.metaname,
    description: BusinessFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => BusinessFindInputDto}) 
    filter: BusinessFindInputDto,

    @GraphQLBodyContext() selection: BusinessFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<BusinessFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => BusinessEntity, {
    name: BusinessFindOneByIdDto.metaname, 
    description: BusinessFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessFindOneByIdInputDto }) 
    input: BusinessFindOneByIdInputDto,

    @GraphQLBodyContext() selection: BusinessEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<BusinessEntity> {
    await this.validation.validateArrayInput<BusinessFindOneByIdInputDto>([input], BusinessFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => BusinessUpdateOutputDto, {
    name: BusinessUpdateDto.metaname, 
    description: BusinessUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => BusinessUpdateInputDto}) 
    input: BusinessUpdateInputDto,

    @GraphQLBodyContext() selection: BusinessUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessUpdateOutputDto> {
    await this.validation.validateArrayInput<BusinessUpdateInputSetsDto>([input.sets], BusinessUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => BusinessSoftDeleteOutputDto, {
    name: BusinessSoftDeleteDto.metaname, 
    description: BusinessSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessSoftDeleteInputDto }) 
    input: BusinessSoftDeleteInputDto,

    @GraphQLBodyContext() selection: BusinessSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => BusinessDeleteOutputDto, {
    name: BusinessDeleteDto.metaname, 
    description: BusinessDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessDeleteInputDto }) 
    input: BusinessDeleteInputDto,

    @GraphQLBodyContext() selection: BusinessDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => BusinessRestoreOutputDto, {
    name: BusinessRestoreDto.metaname,
    description: BusinessRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessRestoreInputDto }) 
    input: BusinessRestoreInputDto,
    
    @GraphQLBodyContext() selection: BusinessRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [BusinessUpsertOutputDto], {
    name:  `${BusinessUpsertDto.metaname}`, 
    description: `${BusinessUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [BusinessUpsertInputDto]}) 
    input: BusinessUpsertInputDto | BusinessUpsertInputDto[],
    
    @GraphQLBodyContext() selection: BusinessUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<BusinessUpsertInputDto>(input, BusinessUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => BusinessSoftRemoveOutputDto, {
    name: BusinessSoftRemoveDto.metaname, 
    description: BusinessSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessSoftRemoveInputDto }) 
    input: BusinessSoftRemoveInputDto,

    @GraphQLBodyContext() selection: BusinessSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => BusinessRemoveOutputDto, {
    name: BusinessRemoveDto.metaname, 
    description: BusinessRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessRemoveInputDto }) 
    input: BusinessRemoveInputDto,
    
    @GraphQLBodyContext() selection: BusinessRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => BusinessRecoverOutputDto, {
    name: BusinessRecoverDto.metaname,
    description: BusinessRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => BusinessRecoverInputDto }) 
    input: BusinessRecoverInputDto,

    @GraphQLBodyContext() selection: BusinessRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<BusinessRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: BusinessEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<BusinessEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}