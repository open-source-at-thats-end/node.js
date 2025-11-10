import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { QueueWhatsappService } from './whatsapp.service';
import { QueueWhatsappEntity } from './entities/whatsapp.entity';
import { QueueWhatsappFactory } from './whatsapp.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { QueueWhatsappCreateDto, QueueWhatsappCreateInputDto, QueueWhatsappCreateOutputDto, QueueWhatsappDeleteDto, QueueWhatsappDeleteInputDto, QueueWhatsappDeleteOutputDto, QueueWhatsappFindDto, QueueWhatsappFindInputDto, QueueWhatsappFindOneByIdDto, QueueWhatsappFindOneByIdInputDto, QueueWhatsappFindOutputDto, QueueWhatsappFindOutputRowsDto, QueueWhatsappRecoverDto, QueueWhatsappRecoverInputDto, QueueWhatsappRecoverOutputDto, QueueWhatsappRemoveDto, QueueWhatsappRemoveInputDto, QueueWhatsappRemoveOutputDto, QueueWhatsappRestoreDto, QueueWhatsappRestoreInputDto, QueueWhatsappRestoreOutputDto, QueueWhatsappSoftDeleteDto, QueueWhatsappSoftDeleteInputDto, QueueWhatsappSoftDeleteInputWhereDto, QueueWhatsappSoftDeleteOutputDto, QueueWhatsappSoftRemoveDto, QueueWhatsappSoftRemoveInputDto, QueueWhatsappSoftRemoveOutputDto, QueueWhatsappUpdateDto, QueueWhatsappUpdateInputDto, QueueWhatsappUpdateInputSetsDto, QueueWhatsappUpdateOutputDto, QueueWhatsappUpsertDto, QueueWhatsappUpsertInputDto, QueueWhatsappUpsertOutputDto } from './dto/whatsapp.dto';
import { GraphQLResolveInfo } from 'graphql';

@Resolver(() => QueueWhatsappEntity)
export class QueueWhatsappResolver
{
  constructor(
    protected readonly service: QueueWhatsappService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [QueueWhatsappCreateOutputDto], {
    name:  `${QueueWhatsappCreateDto.metaname}`, 
    description: `${QueueWhatsappCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [QueueWhatsappCreateInputDto] }) 
    input: QueueWhatsappCreateInputDto | QueueWhatsappCreateInputDto[],

    @GraphQLBodyContext() selection: QueueWhatsappCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<QueueWhatsappCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)) {
      await this.validation.validateArrayInput<QueueWhatsappCreateInputDto>(input, QueueWhatsappCreateInputDto);
    }
    return await this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => QueueWhatsappFindOutputDto, {
    name: QueueWhatsappFindDto.metaname,
    description: QueueWhatsappFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => QueueWhatsappFindInputDto}) 
    filter: QueueWhatsappFindInputDto,

    @GraphQLBodyContext() selection: QueueWhatsappFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<QueueWhatsappFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => QueueWhatsappEntity, {
    name: QueueWhatsappFindOneByIdDto.metaname, 
    description: QueueWhatsappFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => QueueWhatsappFindOneByIdInputDto }) 
    input: QueueWhatsappFindOneByIdInputDto,

    @GraphQLBodyContext() selection: QueueWhatsappEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<QueueWhatsappEntity> {
    await this.validation.validateArrayInput<QueueWhatsappFindOneByIdInputDto>([input], QueueWhatsappFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => QueueWhatsappUpdateOutputDto, {
    name: QueueWhatsappUpdateDto.metaname, 
    description: QueueWhatsappUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => QueueWhatsappUpdateInputDto}) 
    input: QueueWhatsappUpdateInputDto,

    @GraphQLBodyContext() selection: QueueWhatsappUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueWhatsappUpdateOutputDto> {
    await this.validation.validateArrayInput<QueueWhatsappUpdateInputSetsDto>([input.sets], QueueWhatsappUpdateInputSetsDto);
    const resp = await this.service.updateEngine.update(input, selection, info, ctx);
    return resp;
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => QueueWhatsappSoftDeleteOutputDto, {
    name: QueueWhatsappSoftDeleteDto.metaname, 
    description: QueueWhatsappSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => QueueWhatsappSoftDeleteInputDto }) 
    input: QueueWhatsappSoftDeleteInputDto,

    @GraphQLBodyContext() selection: QueueWhatsappSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueWhatsappSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => QueueWhatsappDeleteOutputDto, {
    name: QueueWhatsappDeleteDto.metaname, 
    description: QueueWhatsappDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => QueueWhatsappDeleteInputDto }) 
    input: QueueWhatsappDeleteInputDto,

    @GraphQLBodyContext() selection: QueueWhatsappDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueWhatsappDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => QueueWhatsappRestoreOutputDto, {
    name: QueueWhatsappRestoreDto.metaname,
    description: QueueWhatsappRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => QueueWhatsappRestoreInputDto }) 
    input: QueueWhatsappRestoreInputDto,
    
    @GraphQLBodyContext() selection: QueueWhatsappRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueWhatsappRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [QueueWhatsappUpsertOutputDto], {
    name:  `${QueueWhatsappUpsertDto.metaname}`, 
    description: `${QueueWhatsappUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [QueueWhatsappUpsertInputDto]}) 
    input: QueueWhatsappUpsertInputDto | QueueWhatsappUpsertInputDto[],
    
    @GraphQLBodyContext() selection: QueueWhatsappUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueWhatsappUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<QueueWhatsappUpsertInputDto>(input, QueueWhatsappUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => QueueWhatsappSoftRemoveOutputDto, {
    name: QueueWhatsappSoftRemoveDto.metaname, 
    description: QueueWhatsappSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => QueueWhatsappSoftRemoveInputDto }) 
    input: QueueWhatsappSoftRemoveInputDto,

    @GraphQLBodyContext() selection: QueueWhatsappSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueWhatsappSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => QueueWhatsappRemoveOutputDto, {
    name: QueueWhatsappRemoveDto.metaname, 
    description: QueueWhatsappRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => QueueWhatsappRemoveInputDto }) 
    input: QueueWhatsappRemoveInputDto,
    
    @GraphQLBodyContext() selection: QueueWhatsappRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueWhatsappRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => QueueWhatsappRecoverOutputDto, {
    name: QueueWhatsappRecoverDto.metaname,
    description: QueueWhatsappRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => QueueWhatsappRecoverInputDto }) 
    input: QueueWhatsappRecoverInputDto,

    @GraphQLBodyContext() selection: QueueWhatsappRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<QueueWhatsappRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }
   
  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: QueueWhatsappEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<QueueWhatsappEntity> {
    // set selection fields from GraphQLResolveInfo as per user selection. Perform any customisation here for selection set
    const selection = await this.service.findEngine._getSelectionFromGraphQLResolveInfo(info);
    selection.id = true; // also set id field to selection set as without id relation will not be 100% accurate

    // set input to find by id
    const input = {id: entity.id as number}

    // request find by id from database
    const resp = await this.service.findEngine.findOneById(input, selection, info, ctx);
    return resp;
  }
}