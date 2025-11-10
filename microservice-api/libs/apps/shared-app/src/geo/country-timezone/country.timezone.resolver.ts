import { Resolver, Query, Mutation, Args, Int, Context, Info, ResolveReference, Parent } from '@nestjs/graphql';
import { CountryTimezoneService } from './country.timezone.service';
import { CountryTimezoneEntity } from './entities/country.timezone.entity';
import { CountryTimezoneFactory } from './country.timezone.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { CountryTimezoneUploadOutputDto, CountryTimezoneUploadDto, CountryTimezoneUploadInputDto, CountryTimezoneUploadDeleteOutputDto, CountryTimezoneUploadDeleteDto, CountryTimezoneUploadDeleteInputDto, CountryTimezoneCreateDto, CountryTimezoneCreateInputDto, CountryTimezoneCreateOutputDto, CountryTimezoneDeleteDto, CountryTimezoneDeleteInputDto, CountryTimezoneDeleteOutputDto, CountryTimezoneFindDto, CountryTimezoneFindInputDto, CountryTimezoneFindOneByIdDto, CountryTimezoneFindOneByIdInputDto, CountryTimezoneFindOutputDto, CountryTimezoneFindOutputRowsDto, CountryTimezoneRecoverDto, CountryTimezoneRecoverInputDto, CountryTimezoneRecoverOutputDto, CountryTimezoneRemoveDto, CountryTimezoneRemoveInputDto, CountryTimezoneRemoveOutputDto, CountryTimezoneRestoreDto, CountryTimezoneRestoreInputDto, CountryTimezoneRestoreOutputDto, CountryTimezoneSoftDeleteDto, CountryTimezoneSoftDeleteInputDto, CountryTimezoneSoftDeleteInputWhereDto, CountryTimezoneSoftDeleteOutputDto, CountryTimezoneSoftRemoveDto, CountryTimezoneSoftRemoveInputDto, CountryTimezoneSoftRemoveOutputDto, CountryTimezoneUpdateDto, CountryTimezoneUpdateInputDto, CountryTimezoneUpdateInputSetsDto, CountryTimezoneUpdateOutputDto, CountryTimezoneUpsertDto, CountryTimezoneUpsertInputDto, CountryTimezoneUpsertOutputDto } from './dto/country.timezone.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => CountryTimezoneEntity)
export class CountryTimezoneResolver
{
  constructor(
    protected readonly factory: CountryTimezoneFactory,
    protected readonly service: CountryTimezoneService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [CountryTimezoneUploadOutput], { name:  `${CountryTimezoneUploadDto.metaname}`, description: `${CountryTimezoneUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => CountryTimezoneUploadInputDto }) 
    input: CountryTimezoneUploadInputDto,

    @GraphQLBodyContext() selection: CountryTimezoneUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CountryTimezoneUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [CountryTimezoneUploadDeleteOutput], { name:  `${CountryTimezoneUploadDeleteDto.metaname}`, description: `${CountryTimezoneUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [CountryTimezoneUploadDeleteInputDto] }) 
    input: CountryTimezoneUploadDeleteInputDto | CountryTimezoneUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: CountryTimezoneUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CountryTimezoneUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [CountryTimezoneCreateOutputDto], {
    name:  `${CountryTimezoneCreateDto.metaname}`, 
    description: `${CountryTimezoneCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [CountryTimezoneCreateInputDto] }) 
    input: CountryTimezoneCreateInputDto | CountryTimezoneCreateInputDto[],

    @GraphQLBodyContext() selection: CountryTimezoneCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CountryTimezoneCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<CountryTimezoneCreateInputDto>(input, CountryTimezoneCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => CountryTimezoneFindOutputDto, {
    name: CountryTimezoneFindDto.metaname,
    description: CountryTimezoneFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => CountryTimezoneFindInputDto}) 
    filter: CountryTimezoneFindInputDto,

    @GraphQLBodyContext() selection: CountryTimezoneFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<CountryTimezoneFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => CountryTimezoneEntity, {
    name: CountryTimezoneFindOneByIdDto.metaname, 
    description: CountryTimezoneFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => CountryTimezoneFindOneByIdInputDto }) 
    input: CountryTimezoneFindOneByIdInputDto,

    @GraphQLBodyContext() selection: CountryTimezoneEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<CountryTimezoneEntity> {
    await this.validation.validateArrayInput<CountryTimezoneFindOneByIdInputDto>([input], CountryTimezoneFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => CountryTimezoneUpdateOutputDto, {
    name: CountryTimezoneUpdateDto.metaname, 
    description: CountryTimezoneUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => CountryTimezoneUpdateInputDto}) 
    input: CountryTimezoneUpdateInputDto,

    @GraphQLBodyContext() selection: CountryTimezoneUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountryTimezoneUpdateOutputDto> {
    await this.validation.validateArrayInput<CountryTimezoneUpdateInputSetsDto>([input.sets], CountryTimezoneUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => CountryTimezoneSoftDeleteOutputDto, {
    name: CountryTimezoneSoftDeleteDto.metaname, 
    description: CountryTimezoneSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => CountryTimezoneSoftDeleteInputDto }) 
    input: CountryTimezoneSoftDeleteInputDto,

    @GraphQLBodyContext() selection: CountryTimezoneSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountryTimezoneSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => CountryTimezoneDeleteOutputDto, {
    name: CountryTimezoneDeleteDto.metaname, 
    description: CountryTimezoneDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => CountryTimezoneDeleteInputDto }) 
    input: CountryTimezoneDeleteInputDto,

    @GraphQLBodyContext() selection: CountryTimezoneDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountryTimezoneDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => CountryTimezoneRestoreOutputDto, {
    name: CountryTimezoneRestoreDto.metaname,
    description: CountryTimezoneRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => CountryTimezoneRestoreInputDto }) 
    input: CountryTimezoneRestoreInputDto,
    
    @GraphQLBodyContext() selection: CountryTimezoneRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountryTimezoneRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [CountryTimezoneUpsertOutputDto], {
    name:  `${CountryTimezoneUpsertDto.metaname}`, 
    description: `${CountryTimezoneUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [CountryTimezoneUpsertInputDto]}) 
    input: CountryTimezoneUpsertInputDto | CountryTimezoneUpsertInputDto[],
    
    @GraphQLBodyContext() selection: CountryTimezoneUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountryTimezoneUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<CountryTimezoneUpsertInputDto>(input, CountryTimezoneUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => CountryTimezoneSoftRemoveOutputDto, {
    name: CountryTimezoneSoftRemoveDto.metaname, 
    description: CountryTimezoneSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => CountryTimezoneSoftRemoveInputDto }) 
    input: CountryTimezoneSoftRemoveInputDto,

    @GraphQLBodyContext() selection: CountryTimezoneSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountryTimezoneSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => CountryTimezoneRemoveOutputDto, {
    name: CountryTimezoneRemoveDto.metaname, 
    description: CountryTimezoneRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => CountryTimezoneRemoveInputDto }) 
    input: CountryTimezoneRemoveInputDto,
    
    @GraphQLBodyContext() selection: CountryTimezoneRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountryTimezoneRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => CountryTimezoneRecoverOutputDto, {
    name: CountryTimezoneRecoverDto.metaname,
    description: CountryTimezoneRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => CountryTimezoneRecoverInputDto }) 
    input: CountryTimezoneRecoverInputDto,

    @GraphQLBodyContext() selection: CountryTimezoneRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountryTimezoneRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: CountryTimezoneEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<CountryTimezoneEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}