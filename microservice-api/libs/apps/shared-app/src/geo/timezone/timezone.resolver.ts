import { Resolver, Query, Mutation, Args, Int, Context, Info, ResolveReference, Parent } from '@nestjs/graphql';
import { TimezoneService } from './timezone.service';
import { TimezoneEntity } from './entities/timezone.entity';
import { TimezoneFactory } from './timezone.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { TimezoneUploadOutputDto, TimezoneUploadDto, TimezoneUploadInputDto, TimezoneUploadDeleteOutputDto, TimezoneUploadDeleteDto, TimezoneUploadDeleteInputDto, TimezoneCreateDto, TimezoneCreateInputDto, TimezoneCreateOutputDto, TimezoneDeleteDto, TimezoneDeleteInputDto, TimezoneDeleteOutputDto, TimezoneFindDto, TimezoneFindInputDto, TimezoneFindOneByIdDto, TimezoneFindOneByIdInputDto, TimezoneFindOutputDto, TimezoneFindOutputRowsDto, TimezoneRecoverDto, TimezoneRecoverInputDto, TimezoneRecoverOutputDto, TimezoneRemoveDto, TimezoneRemoveInputDto, TimezoneRemoveOutputDto, TimezoneRestoreDto, TimezoneRestoreInputDto, TimezoneRestoreOutputDto, TimezoneSoftDeleteDto, TimezoneSoftDeleteInputDto, TimezoneSoftDeleteInputWhereDto, TimezoneSoftDeleteOutputDto, TimezoneSoftRemoveDto, TimezoneSoftRemoveInputDto, TimezoneSoftRemoveOutputDto, TimezoneUpdateDto, TimezoneUpdateInputDto, TimezoneUpdateInputSetsDto, TimezoneUpdateOutputDto, TimezoneUpsertDto, TimezoneUpsertInputDto, TimezoneUpsertOutputDto } from './dto/timezone.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => TimezoneEntity)
export class TimezoneResolver
{
  constructor(
    protected readonly factory: TimezoneFactory,
    protected readonly service: TimezoneService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [TimezoneUploadOutput], { name:  `${TimezoneUploadDto.metaname}`, description: `${TimezoneUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => TimezoneUploadInputDto }) 
    input: TimezoneUploadInputDto,

    @GraphQLBodyContext() selection: TimezoneUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<TimezoneUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [TimezoneUploadDeleteOutput], { name:  `${TimezoneUploadDeleteDto.metaname}`, description: `${TimezoneUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [TimezoneUploadDeleteInputDto] }) 
    input: TimezoneUploadDeleteInputDto | TimezoneUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: TimezoneUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<TimezoneUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [TimezoneCreateOutputDto], {
    name:  `${TimezoneCreateDto.metaname}`, 
    description: `${TimezoneCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [TimezoneCreateInputDto] }) 
    input: TimezoneCreateInputDto | TimezoneCreateInputDto[],

    @GraphQLBodyContext() selection: TimezoneCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<TimezoneCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<TimezoneCreateInputDto>(input, TimezoneCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => TimezoneFindOutputDto, {
    name: TimezoneFindDto.metaname,
    description: TimezoneFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => TimezoneFindInputDto}) 
    filter: TimezoneFindInputDto,

    @GraphQLBodyContext() selection: TimezoneFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<TimezoneFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => TimezoneEntity, {
    name: TimezoneFindOneByIdDto.metaname, 
    description: TimezoneFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => TimezoneFindOneByIdInputDto }) 
    input: TimezoneFindOneByIdInputDto,

    @GraphQLBodyContext() selection: TimezoneEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<TimezoneEntity> {
    await this.validation.validateArrayInput<TimezoneFindOneByIdInputDto>([input], TimezoneFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => TimezoneUpdateOutputDto, {
    name: TimezoneUpdateDto.metaname, 
    description: TimezoneUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => TimezoneUpdateInputDto}) 
    input: TimezoneUpdateInputDto,

    @GraphQLBodyContext() selection: TimezoneUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<TimezoneUpdateOutputDto> {
    await this.validation.validateArrayInput<TimezoneUpdateInputSetsDto>([input.sets], TimezoneUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => TimezoneSoftDeleteOutputDto, {
    name: TimezoneSoftDeleteDto.metaname, 
    description: TimezoneSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => TimezoneSoftDeleteInputDto }) 
    input: TimezoneSoftDeleteInputDto,

    @GraphQLBodyContext() selection: TimezoneSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<TimezoneSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => TimezoneDeleteOutputDto, {
    name: TimezoneDeleteDto.metaname, 
    description: TimezoneDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => TimezoneDeleteInputDto }) 
    input: TimezoneDeleteInputDto,

    @GraphQLBodyContext() selection: TimezoneDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<TimezoneDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => TimezoneRestoreOutputDto, {
    name: TimezoneRestoreDto.metaname,
    description: TimezoneRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => TimezoneRestoreInputDto }) 
    input: TimezoneRestoreInputDto,
    
    @GraphQLBodyContext() selection: TimezoneRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<TimezoneRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [TimezoneUpsertOutputDto], {
    name:  `${TimezoneUpsertDto.metaname}`, 
    description: `${TimezoneUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [TimezoneUpsertInputDto]}) 
    input: TimezoneUpsertInputDto | TimezoneUpsertInputDto[],
    
    @GraphQLBodyContext() selection: TimezoneUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<TimezoneUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<TimezoneUpsertInputDto>(input, TimezoneUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => TimezoneSoftRemoveOutputDto, {
    name: TimezoneSoftRemoveDto.metaname, 
    description: TimezoneSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => TimezoneSoftRemoveInputDto }) 
    input: TimezoneSoftRemoveInputDto,

    @GraphQLBodyContext() selection: TimezoneSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<TimezoneSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => TimezoneRemoveOutputDto, {
    name: TimezoneRemoveDto.metaname, 
    description: TimezoneRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => TimezoneRemoveInputDto }) 
    input: TimezoneRemoveInputDto,
    
    @GraphQLBodyContext() selection: TimezoneRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<TimezoneRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => TimezoneRecoverOutputDto, {
    name: TimezoneRecoverDto.metaname,
    description: TimezoneRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => TimezoneRecoverInputDto }) 
    input: TimezoneRecoverInputDto,

    @GraphQLBodyContext() selection: TimezoneRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<TimezoneRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: TimezoneEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<TimezoneEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}