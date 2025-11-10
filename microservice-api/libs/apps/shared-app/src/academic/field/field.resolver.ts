import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { AcademicFieldService } from './field.service';
import { AcademicFieldEntity } from './entities/field.entity';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { AcademicFieldUploadOutputDto, AcademicFieldUploadDto, AcademicFieldUploadInputDto, AcademicFieldUploadDeleteOutputDto, AcademicFieldUploadDeleteDto, AcademicFieldUploadDeleteInputDto, AcademicFieldCreateDto, AcademicFieldCreateInputDto, AcademicFieldCreateOutputDto, AcademicFieldDeleteDto, AcademicFieldDeleteInputDto, AcademicFieldDeleteOutputDto, AcademicFieldFindDto, AcademicFieldFindInputDto, AcademicFieldFindOneByIdDto, AcademicFieldFindOneByIdInputDto, AcademicFieldFindOutputDto, AcademicFieldFindOutputRowsDto, AcademicFieldRecoverDto, AcademicFieldRecoverInputDto, AcademicFieldRecoverOutputDto, AcademicFieldRemoveDto, AcademicFieldRemoveInputDto, AcademicFieldRemoveOutputDto, AcademicFieldRestoreDto, AcademicFieldRestoreInputDto, AcademicFieldRestoreOutputDto, AcademicFieldSoftDeleteDto, AcademicFieldSoftDeleteInputDto, AcademicFieldSoftDeleteInputWhereDto, AcademicFieldSoftDeleteOutputDto, AcademicFieldSoftRemoveDto, AcademicFieldSoftRemoveInputDto, AcademicFieldSoftRemoveOutputDto, AcademicFieldUpdateDto, AcademicFieldUpdateInputDto, AcademicFieldUpdateInputSetsDto, AcademicFieldUpdateOutputDto, AcademicFieldUpsertDto, AcademicFieldUpsertInputDto, AcademicFieldUpsertOutputDto } from './dto/field.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';
import { AcademicFieldFactory } from './field.factory';


@Resolver(() => AcademicFieldEntity)
export class AcademicFieldResolver
{
  constructor(
    protected readonly factory: AcademicFieldFactory, // TODO: NE: 2
    protected readonly service: AcademicFieldService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [AcademicFieldUploadOutput], { name:  `${AcademicFieldUploadDto.metaname}`, description: `${AcademicFieldUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => AcademicFieldUploadInputDto }) 
    input: AcademicFieldUploadInputDto,

    @GraphQLBodyContext() selection: AcademicFieldUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AcademicFieldUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [AcademicFieldUploadDeleteOutput], { name:  `${AcademicFieldUploadDeleteDto.metaname}`, description: `${AcademicFieldUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [AcademicFieldUploadDeleteInputDto] }) 
    input: AcademicFieldUploadDeleteInputDto | AcademicFieldUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: AcademicFieldUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AcademicFieldUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [AcademicFieldCreateOutputDto], {
    name:  `${AcademicFieldCreateDto.metaname}`, 
    description: `${AcademicFieldCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [AcademicFieldCreateInputDto] }) 
    input: AcademicFieldCreateInputDto | AcademicFieldCreateInputDto[],

    @GraphQLBodyContext() selection: AcademicFieldCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AcademicFieldCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<AcademicFieldCreateInputDto>(input, AcademicFieldCreateInputDto);
    }
    //return this.factory.createEngine.create(input, selection, info, ctx);
    return this.factory.createEngine.create(input, selection, info, ctx); // TODO: NE: 3
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => AcademicFieldFindOutputDto, {
    name: AcademicFieldFindDto.metaname,
    description: AcademicFieldFindDto.metadesc
  })
  async find(
    @Context() ctx: any,

    @Args('filter', {type:() => AcademicFieldFindInputDto}) 
    filter: AcademicFieldFindInputDto,

    @GraphQLBodyContext() selection: AcademicFieldFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<AcademicFieldFindOutputDto> {
    return await this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => AcademicFieldEntity, {
    name: AcademicFieldFindOneByIdDto.metaname, 
    description: AcademicFieldFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => AcademicFieldFindOneByIdInputDto }) 
    input: AcademicFieldFindOneByIdInputDto,

    @GraphQLBodyContext() selection: AcademicFieldEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<AcademicFieldEntity> {
    await this.validation.validateArrayInput<AcademicFieldFindOneByIdInputDto>([input], AcademicFieldFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => AcademicFieldUpdateOutputDto, {
    name: AcademicFieldUpdateDto.metaname, 
    description: AcademicFieldUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => AcademicFieldUpdateInputDto}) 
    input: AcademicFieldUpdateInputDto,

    @GraphQLBodyContext() selection: AcademicFieldUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicFieldUpdateOutputDto> {
    await this.validation.validateArrayInput<AcademicFieldUpdateInputSetsDto>([input.sets], AcademicFieldUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => AcademicFieldSoftDeleteOutputDto, {
    name: AcademicFieldSoftDeleteDto.metaname, 
    description: AcademicFieldSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => AcademicFieldSoftDeleteInputDto }) 
    input: AcademicFieldSoftDeleteInputDto,

    @GraphQLBodyContext() selection: AcademicFieldSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicFieldSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => AcademicFieldDeleteOutputDto, {
    name: AcademicFieldDeleteDto.metaname, 
    description: AcademicFieldDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => AcademicFieldDeleteInputDto }) 
    input: AcademicFieldDeleteInputDto,

    @GraphQLBodyContext() selection: AcademicFieldDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicFieldDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => AcademicFieldRestoreOutputDto, {
    name: AcademicFieldRestoreDto.metaname,
    description: AcademicFieldRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => AcademicFieldRestoreInputDto }) 
    input: AcademicFieldRestoreInputDto,
    
    @GraphQLBodyContext() selection: AcademicFieldRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicFieldRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [AcademicFieldUpsertOutputDto], {
    name:  `${AcademicFieldUpsertDto.metaname}`, 
    description: `${AcademicFieldUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [AcademicFieldUpsertInputDto]}) 
    input: AcademicFieldUpsertInputDto | AcademicFieldUpsertInputDto[],
    
    @GraphQLBodyContext() selection: AcademicFieldUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicFieldUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<AcademicFieldUpsertInputDto>(input, AcademicFieldUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => AcademicFieldSoftRemoveOutputDto, {
    name: AcademicFieldSoftRemoveDto.metaname, 
    description: AcademicFieldSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => AcademicFieldSoftRemoveInputDto }) 
    input: AcademicFieldSoftRemoveInputDto,

    @GraphQLBodyContext() selection: AcademicFieldSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicFieldSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => AcademicFieldRemoveOutputDto, {
    name: AcademicFieldRemoveDto.metaname, 
    description: AcademicFieldRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => AcademicFieldRemoveInputDto }) 
    input: AcademicFieldRemoveInputDto,
    
    @GraphQLBodyContext() selection: AcademicFieldRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicFieldRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => AcademicFieldRecoverOutputDto, {
    name: AcademicFieldRecoverDto.metaname,
    description: AcademicFieldRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => AcademicFieldRecoverInputDto }) 
    input: AcademicFieldRecoverInputDto,

    @GraphQLBodyContext() selection: AcademicFieldRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicFieldRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: AcademicFieldEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<AcademicFieldEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }

}