import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { StaticDataValueService } from './value.service';
import { StaticDataValueEntity } from './entities/value.entity';
import { StaticDataValueFactory } from './value.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { StaticDataValueUploadOutputDto, StaticDataValueUploadDto, StaticDataValueUploadInputDto, StaticDataValueUploadDeleteOutputDto, StaticDataValueUploadDeleteDto, StaticDataValueUploadDeleteInputDto, StaticDataValueCreateDto, StaticDataValueCreateInputDto, StaticDataValueCreateOutputDto, StaticDataValueDeleteDto, StaticDataValueDeleteInputDto, StaticDataValueDeleteOutputDto, StaticDataValueFindDto, StaticDataValueFindInputDto, StaticDataValueFindOneByIdDto, StaticDataValueFindOneByIdInputDto, StaticDataValueFindOutputDto, StaticDataValueFindOutputRowsDto, StaticDataValueRecoverDto, StaticDataValueRecoverInputDto, StaticDataValueRecoverOutputDto, StaticDataValueRemoveDto, StaticDataValueRemoveInputDto, StaticDataValueRemoveOutputDto, StaticDataValueRestoreDto, StaticDataValueRestoreInputDto, StaticDataValueRestoreOutputDto, StaticDataValueSoftDeleteDto, StaticDataValueSoftDeleteInputDto, StaticDataValueSoftDeleteInputWhereDto, StaticDataValueSoftDeleteOutputDto, StaticDataValueSoftRemoveDto, StaticDataValueSoftRemoveInputDto, StaticDataValueSoftRemoveOutputDto, StaticDataValueUpdateDto, StaticDataValueUpdateInputDto, StaticDataValueUpdateInputSetsDto, StaticDataValueUpdateOutputDto, StaticDataValueUpsertDto, StaticDataValueUpsertInputDto, StaticDataValueUpsertOutputDto } from './dto/value.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => StaticDataValueEntity)
export class StaticDataValueResolver
{
  constructor(
    protected readonly service: StaticDataValueService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [StaticDataValueUploadOutput], { name:  `${StaticDataValueUploadDto.metaname}`, description: `${StaticDataValueUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => StaticDataValueUploadInputDto }) 
    input: StaticDataValueUploadInputDto,

    @GraphQLBodyContext() selection: StaticDataValueUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<StaticDataValueUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [StaticDataValueUploadDeleteOutput], { name:  `${StaticDataValueUploadDeleteDto.metaname}`, description: `${StaticDataValueUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [StaticDataValueUploadDeleteInputDto] }) 
    input: StaticDataValueUploadDeleteInputDto | StaticDataValueUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: StaticDataValueUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<StaticDataValueUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [StaticDataValueCreateOutputDto], {
    name:  `${StaticDataValueCreateDto.metaname}`, 
    description: `${StaticDataValueCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [StaticDataValueCreateInputDto] }) 
    input: StaticDataValueCreateInputDto | StaticDataValueCreateInputDto[],

    @GraphQLBodyContext() selection: StaticDataValueCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<StaticDataValueCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<StaticDataValueCreateInputDto>(input, StaticDataValueCreateInputDto);
    }
    const resp = this.service.create(input, selection, info, ctx);
    return resp ;
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => StaticDataValueFindOutputDto, {
    name: StaticDataValueFindDto.metaname,
    description: StaticDataValueFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => StaticDataValueFindInputDto}) 
    filter: StaticDataValueFindInputDto,

    @GraphQLBodyContext() selection: StaticDataValueFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<StaticDataValueFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => StaticDataValueEntity, {
    name: StaticDataValueFindOneByIdDto.metaname, 
    description: StaticDataValueFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => StaticDataValueFindOneByIdInputDto }) 
    input: StaticDataValueFindOneByIdInputDto,

    @GraphQLBodyContext() selection: StaticDataValueEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<StaticDataValueEntity> {
    await this.validation.validateArrayInput<StaticDataValueFindOneByIdInputDto>([input], StaticDataValueFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => StaticDataValueUpdateOutputDto, {
    name: StaticDataValueUpdateDto.metaname, 
    description: StaticDataValueUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => StaticDataValueUpdateInputDto}) 
    input: StaticDataValueUpdateInputDto,

    @GraphQLBodyContext() selection: StaticDataValueUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataValueUpdateOutputDto> {
    await this.validation.validateArrayInput<StaticDataValueUpdateInputSetsDto>([input.sets], StaticDataValueUpdateInputSetsDto);
    return this.service.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => StaticDataValueSoftDeleteOutputDto, {
    name: StaticDataValueSoftDeleteDto.metaname, 
    description: StaticDataValueSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => StaticDataValueSoftDeleteInputDto }) 
    input: StaticDataValueSoftDeleteInputDto,

    @GraphQLBodyContext() selection: StaticDataValueSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataValueSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => StaticDataValueDeleteOutputDto, {
    name: StaticDataValueDeleteDto.metaname, 
    description: StaticDataValueDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => StaticDataValueDeleteInputDto }) 
    input: StaticDataValueDeleteInputDto,

    @GraphQLBodyContext() selection: StaticDataValueDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataValueDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => StaticDataValueRestoreOutputDto, {
    name: StaticDataValueRestoreDto.metaname,
    description: StaticDataValueRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => StaticDataValueRestoreInputDto }) 
    input: StaticDataValueRestoreInputDto,
    
    @GraphQLBodyContext() selection: StaticDataValueRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataValueRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [StaticDataValueUpsertOutputDto], {
    name:  `${StaticDataValueUpsertDto.metaname}`, 
    description: `${StaticDataValueUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [StaticDataValueUpsertInputDto]}) 
    input: StaticDataValueUpsertInputDto | StaticDataValueUpsertInputDto[],
    
    @GraphQLBodyContext() selection: StaticDataValueUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataValueUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<StaticDataValueUpsertInputDto>(input, StaticDataValueUpsertInputDto);
    }
    return this.service.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => StaticDataValueSoftRemoveOutputDto, {
    name: StaticDataValueSoftRemoveDto.metaname, 
    description: StaticDataValueSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => StaticDataValueSoftRemoveInputDto }) 
    input: StaticDataValueSoftRemoveInputDto,

    @GraphQLBodyContext() selection: StaticDataValueSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataValueSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => StaticDataValueRemoveOutputDto, {
    name: StaticDataValueRemoveDto.metaname, 
    description: StaticDataValueRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => StaticDataValueRemoveInputDto }) 
    input: StaticDataValueRemoveInputDto,
    
    @GraphQLBodyContext() selection: StaticDataValueRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataValueRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => StaticDataValueRecoverOutputDto, {
    name: StaticDataValueRecoverDto.metaname,
    description: StaticDataValueRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => StaticDataValueRecoverInputDto }) 
    input: StaticDataValueRecoverInputDto,

    @GraphQLBodyContext() selection: StaticDataValueRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StaticDataValueRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: StaticDataValueEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<StaticDataValueEntity | null> {
    return await this.service.findEngine.resolveReference(entity, info, ctx);
  }

}