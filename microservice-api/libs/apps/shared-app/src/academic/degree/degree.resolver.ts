import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { AcademicDegreeService } from './degree.service';
import { AcademicDegreeEntity } from './entities/degree.entity';
import { AcademicDegreeFactory } from './degree.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { AcademicDegreeUploadOutputDto, AcademicDegreeUploadDto, AcademicDegreeUploadInputDto, AcademicDegreeUploadDeleteOutputDto, AcademicDegreeUploadDeleteDto, AcademicDegreeUploadDeleteInputDto, AcademicDegreeCreateDto, AcademicDegreeCreateInputDto, AcademicDegreeCreateOutputDto, AcademicDegreeDeleteDto, AcademicDegreeDeleteInputDto, AcademicDegreeDeleteOutputDto, AcademicDegreeFindDto, AcademicDegreeFindInputDto, AcademicDegreeFindOneByIdDto, AcademicDegreeFindOneByIdInputDto, AcademicDegreeFindOutputDto, AcademicDegreeFindOutputRowsDto, AcademicDegreeRecoverDto, AcademicDegreeRecoverInputDto, AcademicDegreeRecoverOutputDto, AcademicDegreeRemoveDto, AcademicDegreeRemoveInputDto, AcademicDegreeRemoveOutputDto, AcademicDegreeRestoreDto, AcademicDegreeRestoreInputDto, AcademicDegreeRestoreOutputDto, AcademicDegreeSoftDeleteDto, AcademicDegreeSoftDeleteInputDto, AcademicDegreeSoftDeleteInputWhereDto, AcademicDegreeSoftDeleteOutputDto, AcademicDegreeSoftRemoveDto, AcademicDegreeSoftRemoveInputDto, AcademicDegreeSoftRemoveOutputDto, AcademicDegreeUpdateDto, AcademicDegreeUpdateInputDto, AcademicDegreeUpdateInputSetsDto, AcademicDegreeUpdateOutputDto, AcademicDegreeUpsertDto, AcademicDegreeUpsertInputDto, AcademicDegreeUpsertOutputDto } from './dto/degree.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => AcademicDegreeEntity)
export class AcademicDegreeResolver
{
  constructor(
    protected readonly factory: AcademicDegreeFactory,
    protected readonly service: AcademicDegreeService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [AcademicDegreeUploadOutput], { name:  `${AcademicDegreeUploadDto.metaname}`, description: `${AcademicDegreeUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => AcademicDegreeUploadInputDto }) 
    input: AcademicDegreeUploadInputDto,

    @GraphQLBodyContext() selection: AcademicDegreeUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AcademicDegreeUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [AcademicDegreeUploadDeleteOutput], { name:  `${AcademicDegreeUploadDeleteDto.metaname}`, description: `${AcademicDegreeUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [AcademicDegreeUploadDeleteInputDto] }) 
    input: AcademicDegreeUploadDeleteInputDto | AcademicDegreeUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: AcademicDegreeUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AcademicDegreeUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [AcademicDegreeCreateOutputDto], {
    name:  `${AcademicDegreeCreateDto.metaname}`, 
    description: `${AcademicDegreeCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [AcademicDegreeCreateInputDto] }) 
    input: AcademicDegreeCreateInputDto | AcademicDegreeCreateInputDto[],

    @GraphQLBodyContext() selection: AcademicDegreeCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AcademicDegreeCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<AcademicDegreeCreateInputDto>(input, AcademicDegreeCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => AcademicDegreeFindOutputDto, {
    name: AcademicDegreeFindDto.metaname,
    description: AcademicDegreeFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => AcademicDegreeFindInputDto}) 
    filter: AcademicDegreeFindInputDto,

    @GraphQLBodyContext() selection: AcademicDegreeFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<AcademicDegreeFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => AcademicDegreeEntity, {
    name: AcademicDegreeFindOneByIdDto.metaname, 
    description: AcademicDegreeFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => AcademicDegreeFindOneByIdInputDto }) 
    input: AcademicDegreeFindOneByIdInputDto,

    @GraphQLBodyContext() selection: AcademicDegreeEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<AcademicDegreeEntity> {
    await this.validation.validateArrayInput<AcademicDegreeFindOneByIdInputDto>([input], AcademicDegreeFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => AcademicDegreeUpdateOutputDto, {
    name: AcademicDegreeUpdateDto.metaname, 
    description: AcademicDegreeUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => AcademicDegreeUpdateInputDto}) 
    input: AcademicDegreeUpdateInputDto,

    @GraphQLBodyContext() selection: AcademicDegreeUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicDegreeUpdateOutputDto> {
    await this.validation.validateArrayInput<AcademicDegreeUpdateInputSetsDto>([input.sets], AcademicDegreeUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => AcademicDegreeSoftDeleteOutputDto, {
    name: AcademicDegreeSoftDeleteDto.metaname, 
    description: AcademicDegreeSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => AcademicDegreeSoftDeleteInputDto }) 
    input: AcademicDegreeSoftDeleteInputDto,

    @GraphQLBodyContext() selection: AcademicDegreeSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicDegreeSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => AcademicDegreeDeleteOutputDto, {
    name: AcademicDegreeDeleteDto.metaname, 
    description: AcademicDegreeDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => AcademicDegreeDeleteInputDto }) 
    input: AcademicDegreeDeleteInputDto,

    @GraphQLBodyContext() selection: AcademicDegreeDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicDegreeDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => AcademicDegreeRestoreOutputDto, {
    name: AcademicDegreeRestoreDto.metaname,
    description: AcademicDegreeRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => AcademicDegreeRestoreInputDto }) 
    input: AcademicDegreeRestoreInputDto,
    
    @GraphQLBodyContext() selection: AcademicDegreeRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicDegreeRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [AcademicDegreeUpsertOutputDto], {
    name:  `${AcademicDegreeUpsertDto.metaname}`, 
    description: `${AcademicDegreeUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [AcademicDegreeUpsertInputDto]}) 
    input: AcademicDegreeUpsertInputDto | AcademicDegreeUpsertInputDto[],
    
    @GraphQLBodyContext() selection: AcademicDegreeUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicDegreeUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<AcademicDegreeUpsertInputDto>(input, AcademicDegreeUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => AcademicDegreeSoftRemoveOutputDto, {
    name: AcademicDegreeSoftRemoveDto.metaname, 
    description: AcademicDegreeSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => AcademicDegreeSoftRemoveInputDto }) 
    input: AcademicDegreeSoftRemoveInputDto,

    @GraphQLBodyContext() selection: AcademicDegreeSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicDegreeSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => AcademicDegreeRemoveOutputDto, {
    name: AcademicDegreeRemoveDto.metaname, 
    description: AcademicDegreeRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => AcademicDegreeRemoveInputDto }) 
    input: AcademicDegreeRemoveInputDto,
    
    @GraphQLBodyContext() selection: AcademicDegreeRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicDegreeRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => AcademicDegreeRecoverOutputDto, {
    name: AcademicDegreeRecoverDto.metaname,
    description: AcademicDegreeRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => AcademicDegreeRecoverInputDto }) 
    input: AcademicDegreeRecoverInputDto,

    @GraphQLBodyContext() selection: AcademicDegreeRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AcademicDegreeRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }
   
  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: AcademicDegreeEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<AcademicDegreeEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}