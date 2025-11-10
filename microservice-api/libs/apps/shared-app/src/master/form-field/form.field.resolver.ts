import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { FormFieldService } from './form.field.service';
import { FormFieldEntity } from './entities/form.field.entity';
import { FormFieldFactory } from './form.field.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { FormFieldUploadOutputDto, FormFieldUploadDto, FormFieldUploadInputDto, FormFieldUploadDeleteOutputDto, FormFieldUploadDeleteDto, FormFieldUploadDeleteInputDto, FormFieldCreateDto, FormFieldCreateInputDto, FormFieldCreateOutputDto, FormFieldDeleteDto, FormFieldDeleteInputDto, FormFieldDeleteOutputDto, FormFieldFindDto, FormFieldFindInputDto, FormFieldFindOneByIdDto, FormFieldFindOneByIdInputDto, FormFieldFindOutputDto, FormFieldFindOutputRowsDto, FormFieldRecoverDto, FormFieldRecoverInputDto, FormFieldRecoverOutputDto, FormFieldRemoveDto, FormFieldRemoveInputDto, FormFieldRemoveOutputDto, FormFieldRestoreDto, FormFieldRestoreInputDto, FormFieldRestoreOutputDto, FormFieldSoftDeleteDto, FormFieldSoftDeleteInputDto, FormFieldSoftDeleteInputWhereDto, FormFieldSoftDeleteOutputDto, FormFieldSoftRemoveDto, FormFieldSoftRemoveInputDto, FormFieldSoftRemoveOutputDto, FormFieldUpdateDto, FormFieldUpdateInputDto, FormFieldUpdateInputSetsDto, FormFieldUpdateOutputDto, FormFieldUpsertDto, FormFieldUpsertInputDto, FormFieldUpsertOutputDto } from './dto/form.field.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => FormFieldEntity)
export class FormFieldResolver
{
  constructor(
    protected readonly factory: FormFieldFactory,
    protected readonly service: FormFieldService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [FormFieldUploadOutput], { name:  `${FormFieldUploadDto.metaname}`, description: `${FormFieldUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => FormFieldUploadInputDto }) 
    input: FormFieldUploadInputDto,

    @GraphQLBodyContext() selection: FormFieldUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<FormFieldUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [FormFieldUploadDeleteOutput], { name:  `${FormFieldUploadDeleteDto.metaname}`, description: `${FormFieldUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [FormFieldUploadDeleteInputDto] }) 
    input: FormFieldUploadDeleteInputDto | FormFieldUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: FormFieldUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<FormFieldUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [FormFieldCreateOutputDto], {
    name:  `${FormFieldCreateDto.metaname}`, 
    description: `${FormFieldCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [FormFieldCreateInputDto] }) 
    input: FormFieldCreateInputDto | FormFieldCreateInputDto[],

    @GraphQLBodyContext() selection: FormFieldCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<FormFieldCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<FormFieldCreateInputDto>(input, FormFieldCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => FormFieldFindOutputDto, {
    name: FormFieldFindDto.metaname,
    description: FormFieldFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => FormFieldFindInputDto}) 
    filter: FormFieldFindInputDto,

    @GraphQLBodyContext() selection: FormFieldFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<FormFieldFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => FormFieldEntity, {
    name: FormFieldFindOneByIdDto.metaname, 
    description: FormFieldFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => FormFieldFindOneByIdInputDto }) 
    input: FormFieldFindOneByIdInputDto,

    @GraphQLBodyContext() selection: FormFieldEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<FormFieldEntity> {
    await this.validation.validateArrayInput<FormFieldFindOneByIdInputDto>([input], FormFieldFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => FormFieldUpdateOutputDto, {
    name: FormFieldUpdateDto.metaname, 
    description: FormFieldUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => FormFieldUpdateInputDto}) 
    input: FormFieldUpdateInputDto,

    @GraphQLBodyContext() selection: FormFieldUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FormFieldUpdateOutputDto> {
    await this.validation.validateArrayInput<FormFieldUpdateInputSetsDto>([input.sets], FormFieldUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => FormFieldSoftDeleteOutputDto, {
    name: FormFieldSoftDeleteDto.metaname, 
    description: FormFieldSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => FormFieldSoftDeleteInputDto }) 
    input: FormFieldSoftDeleteInputDto,

    @GraphQLBodyContext() selection: FormFieldSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FormFieldSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => FormFieldDeleteOutputDto, {
    name: FormFieldDeleteDto.metaname, 
    description: FormFieldDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => FormFieldDeleteInputDto }) 
    input: FormFieldDeleteInputDto,

    @GraphQLBodyContext() selection: FormFieldDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FormFieldDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => FormFieldRestoreOutputDto, {
    name: FormFieldRestoreDto.metaname,
    description: FormFieldRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => FormFieldRestoreInputDto }) 
    input: FormFieldRestoreInputDto,
    
    @GraphQLBodyContext() selection: FormFieldRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FormFieldRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [FormFieldUpsertOutputDto], {
    name:  `${FormFieldUpsertDto.metaname}`, 
    description: `${FormFieldUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [FormFieldUpsertInputDto]}) 
    input: FormFieldUpsertInputDto | FormFieldUpsertInputDto[],
    
    @GraphQLBodyContext() selection: FormFieldUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FormFieldUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<FormFieldUpsertInputDto>(input, FormFieldUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => FormFieldSoftRemoveOutputDto, {
    name: FormFieldSoftRemoveDto.metaname, 
    description: FormFieldSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => FormFieldSoftRemoveInputDto }) 
    input: FormFieldSoftRemoveInputDto,

    @GraphQLBodyContext() selection: FormFieldSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FormFieldSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => FormFieldRemoveOutputDto, {
    name: FormFieldRemoveDto.metaname, 
    description: FormFieldRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => FormFieldRemoveInputDto }) 
    input: FormFieldRemoveInputDto,
    
    @GraphQLBodyContext() selection: FormFieldRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FormFieldRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => FormFieldRecoverOutputDto, {
    name: FormFieldRecoverDto.metaname,
    description: FormFieldRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => FormFieldRecoverInputDto }) 
    input: FormFieldRecoverInputDto,

    @GraphQLBodyContext() selection: FormFieldRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<FormFieldRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: FormFieldEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<FormFieldEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }

}