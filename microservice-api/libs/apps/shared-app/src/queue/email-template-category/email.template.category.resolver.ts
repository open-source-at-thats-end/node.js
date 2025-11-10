import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { EmailTemplateCategoryService } from './email.template.category.service';
import { EmailTemplateCategoryEntity } from './entities/email.template.category.entity';
import { EmailTemplateCategoryFactory } from './email.template.category.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { EmailTemplateCategoryUploadOutputDto, EmailTemplateCategoryUploadDto, EmailTemplateCategoryUploadInputDto, EmailTemplateCategoryUploadDeleteOutputDto, EmailTemplateCategoryUploadDeleteDto, EmailTemplateCategoryUploadDeleteInputDto, EmailTemplateCategoryCreateDto, EmailTemplateCategoryCreateInputDto, EmailTemplateCategoryCreateOutputDto, EmailTemplateCategoryDeleteDto, EmailTemplateCategoryDeleteInputDto, EmailTemplateCategoryDeleteOutputDto, EmailTemplateCategoryFindDto, EmailTemplateCategoryFindInputDto, EmailTemplateCategoryFindOneByIdDto, EmailTemplateCategoryFindOneByIdInputDto, EmailTemplateCategoryFindOutputDto, EmailTemplateCategoryFindOutputRowsDto, EmailTemplateCategoryRecoverDto, EmailTemplateCategoryRecoverInputDto, EmailTemplateCategoryRecoverOutputDto, EmailTemplateCategoryRemoveDto, EmailTemplateCategoryRemoveInputDto, EmailTemplateCategoryRemoveOutputDto, EmailTemplateCategoryRestoreDto, EmailTemplateCategoryRestoreInputDto, EmailTemplateCategoryRestoreOutputDto, EmailTemplateCategorySoftDeleteDto, EmailTemplateCategorySoftDeleteInputDto, EmailTemplateCategorySoftDeleteInputWhereDto, EmailTemplateCategorySoftDeleteOutputDto, EmailTemplateCategorySoftRemoveDto, EmailTemplateCategorySoftRemoveInputDto, EmailTemplateCategorySoftRemoveOutputDto, EmailTemplateCategoryUpdateDto, EmailTemplateCategoryUpdateInputDto, EmailTemplateCategoryUpdateInputSetsDto, EmailTemplateCategoryUpdateOutputDto, EmailTemplateCategoryUpsertDto, EmailTemplateCategoryUpsertInputDto, EmailTemplateCategoryUpsertOutputDto } from './dto/email.template.category.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => EmailTemplateCategoryEntity)
export class EmailTemplateCategoryResolver
{
  constructor(
    protected readonly factory: EmailTemplateCategoryFactory,
    protected readonly service: EmailTemplateCategoryService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [EmailTemplateCategoryUploadOutput], { name:  `${EmailTemplateCategoryUploadDto.metaname}`, description: `${EmailTemplateCategoryUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => EmailTemplateCategoryUploadInputDto }) 
    input: EmailTemplateCategoryUploadInputDto,

    @GraphQLBodyContext() selection: EmailTemplateCategoryUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<EmailTemplateCategoryUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [EmailTemplateCategoryUploadDeleteOutput], { name:  `${EmailTemplateCategoryUploadDeleteDto.metaname}`, description: `${EmailTemplateCategoryUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [EmailTemplateCategoryUploadDeleteInputDto] }) 
    input: EmailTemplateCategoryUploadDeleteInputDto | EmailTemplateCategoryUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: EmailTemplateCategoryUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<EmailTemplateCategoryUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [EmailTemplateCategoryCreateOutputDto], {
    name:  `${EmailTemplateCategoryCreateDto.metaname}`, 
    description: `${EmailTemplateCategoryCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [EmailTemplateCategoryCreateInputDto] }) 
    input: EmailTemplateCategoryCreateInputDto | EmailTemplateCategoryCreateInputDto[],

    @GraphQLBodyContext() selection: EmailTemplateCategoryCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<EmailTemplateCategoryCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<EmailTemplateCategoryCreateInputDto>(input, EmailTemplateCategoryCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => EmailTemplateCategoryFindOutputDto, {
    name: EmailTemplateCategoryFindDto.metaname,
    description: EmailTemplateCategoryFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => EmailTemplateCategoryFindInputDto}) 
    filter: EmailTemplateCategoryFindInputDto,

    @GraphQLBodyContext() selection: EmailTemplateCategoryFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<EmailTemplateCategoryFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => EmailTemplateCategoryEntity, {
    name: EmailTemplateCategoryFindOneByIdDto.metaname, 
    description: EmailTemplateCategoryFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => EmailTemplateCategoryFindOneByIdInputDto }) 
    input: EmailTemplateCategoryFindOneByIdInputDto,

    @GraphQLBodyContext() selection: EmailTemplateCategoryEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<EmailTemplateCategoryEntity> {
    await this.validation.validateArrayInput<EmailTemplateCategoryFindOneByIdInputDto>([input], EmailTemplateCategoryFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => EmailTemplateCategoryUpdateOutputDto, {
    name: EmailTemplateCategoryUpdateDto.metaname, 
    description: EmailTemplateCategoryUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => EmailTemplateCategoryUpdateInputDto}) 
    input: EmailTemplateCategoryUpdateInputDto,

    @GraphQLBodyContext() selection: EmailTemplateCategoryUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateCategoryUpdateOutputDto> {
    await this.validation.validateArrayInput<EmailTemplateCategoryUpdateInputSetsDto>([input.sets], EmailTemplateCategoryUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => EmailTemplateCategorySoftDeleteOutputDto, {
    name: EmailTemplateCategorySoftDeleteDto.metaname, 
    description: EmailTemplateCategorySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => EmailTemplateCategorySoftDeleteInputDto }) 
    input: EmailTemplateCategorySoftDeleteInputDto,

    @GraphQLBodyContext() selection: EmailTemplateCategorySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateCategorySoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => EmailTemplateCategoryDeleteOutputDto, {
    name: EmailTemplateCategoryDeleteDto.metaname, 
    description: EmailTemplateCategoryDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => EmailTemplateCategoryDeleteInputDto }) 
    input: EmailTemplateCategoryDeleteInputDto,

    @GraphQLBodyContext() selection: EmailTemplateCategoryDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateCategoryDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => EmailTemplateCategoryRestoreOutputDto, {
    name: EmailTemplateCategoryRestoreDto.metaname,
    description: EmailTemplateCategoryRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => EmailTemplateCategoryRestoreInputDto }) 
    input: EmailTemplateCategoryRestoreInputDto,
    
    @GraphQLBodyContext() selection: EmailTemplateCategoryRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateCategoryRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [EmailTemplateCategoryUpsertOutputDto], {
    name:  `${EmailTemplateCategoryUpsertDto.metaname}`, 
    description: `${EmailTemplateCategoryUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [EmailTemplateCategoryUpsertInputDto]}) 
    input: EmailTemplateCategoryUpsertInputDto | EmailTemplateCategoryUpsertInputDto[],
    
    @GraphQLBodyContext() selection: EmailTemplateCategoryUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateCategoryUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<EmailTemplateCategoryUpsertInputDto>(input, EmailTemplateCategoryUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => EmailTemplateCategorySoftRemoveOutputDto, {
    name: EmailTemplateCategorySoftRemoveDto.metaname, 
    description: EmailTemplateCategorySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => EmailTemplateCategorySoftRemoveInputDto }) 
    input: EmailTemplateCategorySoftRemoveInputDto,

    @GraphQLBodyContext() selection: EmailTemplateCategorySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateCategorySoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => EmailTemplateCategoryRemoveOutputDto, {
    name: EmailTemplateCategoryRemoveDto.metaname, 
    description: EmailTemplateCategoryRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => EmailTemplateCategoryRemoveInputDto }) 
    input: EmailTemplateCategoryRemoveInputDto,
    
    @GraphQLBodyContext() selection: EmailTemplateCategoryRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateCategoryRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => EmailTemplateCategoryRecoverOutputDto, {
    name: EmailTemplateCategoryRecoverDto.metaname,
    description: EmailTemplateCategoryRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => EmailTemplateCategoryRecoverInputDto }) 
    input: EmailTemplateCategoryRecoverInputDto,

    @GraphQLBodyContext() selection: EmailTemplateCategoryRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateCategoryRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: EmailTemplateCategoryEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<EmailTemplateCategoryEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}