import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { QueueSmsService } from './sms.service';
import { QueueSmsEntity } from './entities/sms.entity';
import { QueueSmsFactory } from './sms.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { QueueSmsCreateDto, QueueSmsCreateInputDto, QueueSmsCreateOutputDto, QueueSmsDeleteDto, QueueSmsDeleteInputDto, QueueSmsDeleteOutputDto, QueueSmsFindDto, QueueSmsFindInputDto, QueueSmsFindOneByIdDto, QueueSmsFindOneByIdInputDto, QueueSmsFindOutputDto, QueueSmsFindOutputRowsDto, QueueSmsRecoverDto, QueueSmsRecoverInputDto, QueueSmsRecoverOutputDto, QueueSmsRemoveDto, QueueSmsRemoveInputDto, QueueSmsRemoveOutputDto, QueueSmsRestoreDto, QueueSmsRestoreInputDto, QueueSmsRestoreOutputDto, QueueSmsSoftDeleteDto, QueueSmsSoftDeleteInputDto, QueueSmsSoftDeleteInputWhereDto, QueueSmsSoftDeleteOutputDto, QueueSmsSoftRemoveDto, QueueSmsSoftRemoveInputDto, QueueSmsSoftRemoveOutputDto, QueueSmsUpdateDto, QueueSmsUpdateInputDto, QueueSmsUpdateInputSetsDto, QueueSmsUpdateOutputDto, QueueSmsUpsertDto, QueueSmsUpsertInputDto, QueueSmsUpsertOutputDto } from './dto/sms.dto';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => QueueSmsEntity)
export class QueueSmsResolver
{
  constructor(
    protected readonly service: QueueSmsService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [QueueSmsCreateOutputDto], {
    name:  `${QueueSmsCreateDto.metaname}`, 
    description: `${QueueSmsCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [QueueSmsCreateInputDto] }) 
    input: QueueSmsCreateInputDto | QueueSmsCreateInputDto[],

    @GraphQLBodyContext() selection: QueueSmsCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<QueueSmsCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)) {
      await this.validation.validateArrayInput<QueueSmsCreateInputDto>(input, QueueSmsCreateInputDto);
    }

    // make sure input has valid data for SMS sending
    const vinput = await this.service.checkRequiredDataToCreateQueue(input);
    
    return await this.service.createEngine.create(vinput, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => QueueSmsFindOutputDto, {
    name: QueueSmsFindDto.metaname,
    description: QueueSmsFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => QueueSmsFindInputDto}) 
    filter: QueueSmsFindInputDto,

    @GraphQLBodyContext() selection: QueueSmsFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<QueueSmsFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => QueueSmsEntity, {
    name: QueueSmsFindOneByIdDto.metaname, 
    description: QueueSmsFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => QueueSmsFindOneByIdInputDto }) 
    input: QueueSmsFindOneByIdInputDto,

    @GraphQLBodyContext() selection: QueueSmsEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<QueueSmsEntity> {
    await this.validation.validateArrayInput<QueueSmsFindOneByIdInputDto>([input], QueueSmsFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => QueueSmsUpdateOutputDto, {
    name: QueueSmsUpdateDto.metaname, 
    description: QueueSmsUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => QueueSmsUpdateInputDto}) 
    input: QueueSmsUpdateInputDto,

    @GraphQLBodyContext() selection: QueueSmsUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueSmsUpdateOutputDto> {
    await this.validation.validateArrayInput<QueueSmsUpdateInputSetsDto>([input.sets], QueueSmsUpdateInputSetsDto);
    const resp = await this.service.updateEngine.update(input, selection, info, ctx);
    return resp;
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => QueueSmsSoftDeleteOutputDto, {
    name: QueueSmsSoftDeleteDto.metaname, 
    description: QueueSmsSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => QueueSmsSoftDeleteInputDto }) 
    input: QueueSmsSoftDeleteInputDto,

    @GraphQLBodyContext() selection: QueueSmsSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueSmsSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => QueueSmsDeleteOutputDto, {
    name: QueueSmsDeleteDto.metaname, 
    description: QueueSmsDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => QueueSmsDeleteInputDto }) 
    input: QueueSmsDeleteInputDto,

    @GraphQLBodyContext() selection: QueueSmsDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueSmsDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => QueueSmsRestoreOutputDto, {
    name: QueueSmsRestoreDto.metaname,
    description: QueueSmsRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => QueueSmsRestoreInputDto }) 
    input: QueueSmsRestoreInputDto,
    
    @GraphQLBodyContext() selection: QueueSmsRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueSmsRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [QueueSmsUpsertOutputDto], {
    name:  `${QueueSmsUpsertDto.metaname}`, 
    description: `${QueueSmsUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [QueueSmsUpsertInputDto]}) 
    input: QueueSmsUpsertInputDto | QueueSmsUpsertInputDto[],
    
    @GraphQLBodyContext() selection: QueueSmsUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueSmsUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<QueueSmsUpsertInputDto>(input, QueueSmsUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => QueueSmsSoftRemoveOutputDto, {
    name: QueueSmsSoftRemoveDto.metaname, 
    description: QueueSmsSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => QueueSmsSoftRemoveInputDto }) 
    input: QueueSmsSoftRemoveInputDto,

    @GraphQLBodyContext() selection: QueueSmsSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueSmsSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => QueueSmsRemoveOutputDto, {
    name: QueueSmsRemoveDto.metaname, 
    description: QueueSmsRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => QueueSmsRemoveInputDto }) 
    input: QueueSmsRemoveInputDto,
    
    @GraphQLBodyContext() selection: QueueSmsRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueSmsRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => QueueSmsRecoverOutputDto, {
    name: QueueSmsRecoverDto.metaname,
    description: QueueSmsRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => QueueSmsRecoverInputDto }) 
    input: QueueSmsRecoverInputDto,

    @GraphQLBodyContext() selection: QueueSmsRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueSmsRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }
   
  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: QueueSmsEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<QueueSmsEntity | null> {
    return await this.service.findEngine.resolveReference(entity, info, ctx);
  }
}