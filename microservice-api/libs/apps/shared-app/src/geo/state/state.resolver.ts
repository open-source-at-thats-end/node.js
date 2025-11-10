import { Resolver, Query, Mutation, Args, Int, Context, Info, ResolveReference, GqlExecutionContext, Parent } from '@nestjs/graphql';
import { StateService } from './state.service';
import { StateEntity } from './entities/state.entity';
import { StateFactory } from './state.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { StateUploadOutputDto, StateUploadDto, StateUploadInputDto, StateUploadDeleteOutputDto, StateUploadDeleteDto, StateUploadDeleteInputDto, StateCreateDto, StateCreateInputDto, StateCreateOutputDto, StateDeleteDto, StateDeleteInputDto, StateDeleteOutputDto, StateFindDto, StateFindInputDto, StateFindOneByIdDto, StateFindOneByIdInputDto, StateFindOutputDto, StateFindOutputRowsDto, StateRecoverDto, StateRecoverInputDto, StateRecoverOutputDto, StateRemoveDto, StateRemoveInputDto, StateRemoveOutputDto, StateRestoreDto, StateRestoreInputDto, StateRestoreOutputDto, StateSoftDeleteDto, StateSoftDeleteInputDto, StateSoftDeleteInputWhereDto, StateSoftDeleteOutputDto, StateSoftRemoveDto, StateSoftRemoveInputDto, StateSoftRemoveOutputDto, StateUpdateDto, StateUpdateInputDto, StateUpdateInputSetsDto, StateUpdateOutputDto, StateUpsertDto, StateUpsertInputDto, StateUpsertOutputDto } from './dto/state.dto';
import { GraphQLResolveInfo } from 'graphql';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => StateEntity)
export class StateResolver
{
  constructor(
    protected readonly factory: StateFactory,
    protected readonly service: StateService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [StateUploadOutput], { name:  `${StateUploadDto.metaname}`, description: `${StateUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => StateUploadInputDto }) 
    input: StateUploadInputDto,

    @GraphQLBodyContext() selection: StateUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<StateUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [StateUploadDeleteOutput], { name:  `${StateUploadDeleteDto.metaname}`, description: `${StateUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [StateUploadDeleteInputDto] }) 
    input: StateUploadDeleteInputDto | StateUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: StateUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<StateUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [StateCreateOutputDto], {
    name:  `${StateCreateDto.metaname}`, 
    description: `${StateCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [StateCreateInputDto] }) 
    input: StateCreateInputDto | StateCreateInputDto[],

    @GraphQLBodyContext() selection: StateCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<StateCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<StateCreateInputDto>(input, StateCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => StateFindOutputDto, {
    name: StateFindDto.metaname,
    description: StateFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => StateFindInputDto}) 
    filter: StateFindInputDto,

    @GraphQLBodyContext() selection: StateFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<StateFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => StateEntity, {
    name: StateFindOneByIdDto.metaname, 
    description: StateFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => StateFindOneByIdInputDto }) 
    input: StateFindOneByIdInputDto,

    @GraphQLBodyContext() selection: StateEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<StateEntity> {
    await this.validation.validateArrayInput<StateFindOneByIdInputDto>([input], StateFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => StateUpdateOutputDto, {
    name: StateUpdateDto.metaname, 
    description: StateUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => StateUpdateInputDto}) 
    input: StateUpdateInputDto,

    @GraphQLBodyContext() selection: StateUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StateUpdateOutputDto> {
    await this.validation.validateArrayInput<StateUpdateInputSetsDto>([input.sets], StateUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => StateSoftDeleteOutputDto, {
    name: StateSoftDeleteDto.metaname, 
    description: StateSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => StateSoftDeleteInputDto }) 
    input: StateSoftDeleteInputDto,

    @GraphQLBodyContext() selection: StateSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StateSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => StateDeleteOutputDto, {
    name: StateDeleteDto.metaname, 
    description: StateDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => StateDeleteInputDto }) 
    input: StateDeleteInputDto,

    @GraphQLBodyContext() selection: StateDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StateDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => StateRestoreOutputDto, {
    name: StateRestoreDto.metaname,
    description: StateRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => StateRestoreInputDto }) 
    input: StateRestoreInputDto,
    
    @GraphQLBodyContext() selection: StateRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StateRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [StateUpsertOutputDto], {
    name:  `${StateUpsertDto.metaname}`, 
    description: `${StateUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [StateUpsertInputDto]}) 
    input: StateUpsertInputDto | StateUpsertInputDto[],
    
    @GraphQLBodyContext() selection: StateUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StateUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<StateUpsertInputDto>(input, StateUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => StateSoftRemoveOutputDto, {
    name: StateSoftRemoveDto.metaname, 
    description: StateSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => StateSoftRemoveInputDto }) 
    input: StateSoftRemoveInputDto,

    @GraphQLBodyContext() selection: StateSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StateSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => StateRemoveOutputDto, {
    name: StateRemoveDto.metaname, 
    description: StateRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => StateRemoveInputDto }) 
    input: StateRemoveInputDto,
    
    @GraphQLBodyContext() selection: StateRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StateRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => StateRecoverOutputDto, {
    name: StateRecoverDto.metaname,
    description: StateRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => StateRecoverInputDto }) 
    input: StateRecoverInputDto,

    @GraphQLBodyContext() selection: StateRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<StateRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }

  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: StateEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<StateEntity | null> {
    const resp = await this.factory.findEngine.resolveReference(entity, info, ctx);
    return resp;
  }
}