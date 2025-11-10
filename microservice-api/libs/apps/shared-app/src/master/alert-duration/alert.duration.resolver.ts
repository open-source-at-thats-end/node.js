import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { AlertDurationService } from './alert.duration.service';
import { AlertDurationEntity } from './entities/alert.duration.entity';
import { AlertDurationFactory } from './alert.duration.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { AlertDurationUploadOutputDto, AlertDurationUploadDto, AlertDurationUploadInputDto, AlertDurationUploadDeleteOutputDto, AlertDurationUploadDeleteDto, AlertDurationUploadDeleteInputDto, AlertDurationCreateDto, AlertDurationCreateInputDto, AlertDurationCreateOutputDto, AlertDurationDeleteDto, AlertDurationDeleteInputDto, AlertDurationDeleteOutputDto, AlertDurationFindDto, AlertDurationFindInputDto, AlertDurationFindOneByIdDto, AlertDurationFindOneByIdInputDto, AlertDurationFindOutputDto, AlertDurationFindOutputRowsDto, AlertDurationRecoverDto, AlertDurationRecoverInputDto, AlertDurationRecoverOutputDto, AlertDurationRemoveDto, AlertDurationRemoveInputDto, AlertDurationRemoveOutputDto, AlertDurationRestoreDto, AlertDurationRestoreInputDto, AlertDurationRestoreOutputDto, AlertDurationSoftDeleteDto, AlertDurationSoftDeleteInputDto, AlertDurationSoftDeleteInputWhereDto, AlertDurationSoftDeleteOutputDto, AlertDurationSoftRemoveDto, AlertDurationSoftRemoveInputDto, AlertDurationSoftRemoveOutputDto, AlertDurationUpdateDto, AlertDurationUpdateInputDto, AlertDurationUpdateInputSetsDto, AlertDurationUpdateOutputDto, AlertDurationUpsertDto, AlertDurationUpsertInputDto, AlertDurationUpsertOutputDto } from './dto/alert.duration.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => AlertDurationEntity)
export class AlertDurationResolver
{
  constructor(
    protected readonly factory: AlertDurationFactory,
    protected readonly service: AlertDurationService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [AlertDurationUploadOutput], { name:  `${AlertDurationUploadDto.metaname}`, description: `${AlertDurationUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => AlertDurationUploadInputDto }) 
    input: AlertDurationUploadInputDto,

    @GraphQLBodyContext() selection: AlertDurationUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AlertDurationUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [AlertDurationUploadDeleteOutput], { name:  `${AlertDurationUploadDeleteDto.metaname}`, description: `${AlertDurationUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [AlertDurationUploadDeleteInputDto] }) 
    input: AlertDurationUploadDeleteInputDto | AlertDurationUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: AlertDurationUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AlertDurationUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [AlertDurationCreateOutputDto], {
    name:  `${AlertDurationCreateDto.metaname}`, 
    description: `${AlertDurationCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [AlertDurationCreateInputDto] }) 
    input: AlertDurationCreateInputDto | AlertDurationCreateInputDto[],

    @GraphQLBodyContext() selection: AlertDurationCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<AlertDurationCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<AlertDurationCreateInputDto>(input, AlertDurationCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => AlertDurationFindOutputDto, {
    name: AlertDurationFindDto.metaname,
    description: AlertDurationFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => AlertDurationFindInputDto}) 
    filter: AlertDurationFindInputDto,

    @GraphQLBodyContext() selection: AlertDurationFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<AlertDurationFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => AlertDurationEntity, {
    name: AlertDurationFindOneByIdDto.metaname, 
    description: AlertDurationFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => AlertDurationFindOneByIdInputDto }) 
    input: AlertDurationFindOneByIdInputDto,

    @GraphQLBodyContext() selection: AlertDurationEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<AlertDurationEntity> {
    await this.validation.validateArrayInput<AlertDurationFindOneByIdInputDto>([input], AlertDurationFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => AlertDurationUpdateOutputDto, {
    name: AlertDurationUpdateDto.metaname, 
    description: AlertDurationUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => AlertDurationUpdateInputDto}) 
    input: AlertDurationUpdateInputDto,

    @GraphQLBodyContext() selection: AlertDurationUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AlertDurationUpdateOutputDto> {
    await this.validation.validateArrayInput<AlertDurationUpdateInputSetsDto>([input.sets], AlertDurationUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => AlertDurationSoftDeleteOutputDto, {
    name: AlertDurationSoftDeleteDto.metaname, 
    description: AlertDurationSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => AlertDurationSoftDeleteInputDto }) 
    input: AlertDurationSoftDeleteInputDto,

    @GraphQLBodyContext() selection: AlertDurationSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AlertDurationSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => AlertDurationDeleteOutputDto, {
    name: AlertDurationDeleteDto.metaname, 
    description: AlertDurationDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => AlertDurationDeleteInputDto }) 
    input: AlertDurationDeleteInputDto,

    @GraphQLBodyContext() selection: AlertDurationDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AlertDurationDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => AlertDurationRestoreOutputDto, {
    name: AlertDurationRestoreDto.metaname,
    description: AlertDurationRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => AlertDurationRestoreInputDto }) 
    input: AlertDurationRestoreInputDto,
    
    @GraphQLBodyContext() selection: AlertDurationRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AlertDurationRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [AlertDurationUpsertOutputDto], {
    name:  `${AlertDurationUpsertDto.metaname}`, 
    description: `${AlertDurationUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [AlertDurationUpsertInputDto]}) 
    input: AlertDurationUpsertInputDto | AlertDurationUpsertInputDto[],
    
    @GraphQLBodyContext() selection: AlertDurationUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AlertDurationUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<AlertDurationUpsertInputDto>(input, AlertDurationUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => AlertDurationSoftRemoveOutputDto, {
    name: AlertDurationSoftRemoveDto.metaname, 
    description: AlertDurationSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => AlertDurationSoftRemoveInputDto }) 
    input: AlertDurationSoftRemoveInputDto,

    @GraphQLBodyContext() selection: AlertDurationSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AlertDurationSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => AlertDurationRemoveOutputDto, {
    name: AlertDurationRemoveDto.metaname, 
    description: AlertDurationRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => AlertDurationRemoveInputDto }) 
    input: AlertDurationRemoveInputDto,
    
    @GraphQLBodyContext() selection: AlertDurationRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AlertDurationRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => AlertDurationRecoverOutputDto, {
    name: AlertDurationRecoverDto.metaname,
    description: AlertDurationRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => AlertDurationRecoverInputDto }) 
    input: AlertDurationRecoverInputDto,

    @GraphQLBodyContext() selection: AlertDurationRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<AlertDurationRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }

 
  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference( 
    @Parent() entity: AlertDurationEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<AlertDurationEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
} 