import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { CountryService } from './country.service';
import { CountryEntity } from './entities/country.entity';
import { CountryFactory } from './country.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { CountryUploadOutputDto, CountryUploadDto, CountryUploadInputDto, CountryUploadDeleteOutputDto, CountryUploadDeleteDto, CountryUploadDeleteInputDto, CountryCreateDto, CountryCreateInputDto, CountryCreateOutputDto, CountryDeleteDto, CountryDeleteInputDto, CountryDeleteOutputDto, CountryFindDto, CountryFindInputDto, CountryFindOneByIdDto, CountryFindOneByIdInputDto, CountryFindOutputDto, CountryFindOutputRowsDto, CountryRecoverDto, CountryRecoverInputDto, CountryRecoverOutputDto, CountryRemoveDto, CountryRemoveInputDto, CountryRemoveOutputDto, CountryRestoreDto, CountryRestoreInputDto, CountryRestoreOutputDto, CountrySoftDeleteDto, CountrySoftDeleteInputDto, CountrySoftDeleteInputWhereDto, CountrySoftDeleteOutputDto, CountrySoftRemoveDto, CountrySoftRemoveInputDto, CountrySoftRemoveOutputDto, CountryUpdateDto, CountryUpdateInputDto, CountryUpdateInputSetsDto, CountryUpdateOutputDto, CountryUpsertDto, CountryUpsertInputDto, CountryUpsertOutputDto } from './dto/country.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => CountryEntity)
export class CountryResolver
{
  constructor(
    protected readonly factory: CountryFactory,
    protected readonly service: CountryService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [CountryUploadOutput], { name:  `${CountryUploadDto.metaname}`, description: `${CountryUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => CountryUploadInputDto }) 
    input: CountryUploadInputDto,

    @GraphQLBodyContext() selection: CountryUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CountryUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [CountryUploadDeleteOutput], { name:  `${CountryUploadDeleteDto.metaname}`, description: `${CountryUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [CountryUploadDeleteInputDto] }) 
    input: CountryUploadDeleteInputDto | CountryUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: CountryUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CountryUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [CountryCreateOutputDto], {
    name:  `${CountryCreateDto.metaname}`, 
    description: `${CountryCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [CountryCreateInputDto] }) 
    input: CountryCreateInputDto | CountryCreateInputDto[],

    @GraphQLBodyContext() selection: CountryCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CountryCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<CountryCreateInputDto>(input, CountryCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => CountryFindOutputDto, {
    name: CountryFindDto.metaname,
    description: CountryFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => CountryFindInputDto}) 
    filter: CountryFindInputDto,

    @GraphQLBodyContext() selection: CountryFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<CountryFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => CountryEntity, {
    name: CountryFindOneByIdDto.metaname, 
    description: CountryFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => CountryFindOneByIdInputDto }) 
    input: CountryFindOneByIdInputDto,

    @GraphQLBodyContext() selection: CountryEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<CountryEntity> {
    await this.validation.validateArrayInput<CountryFindOneByIdInputDto>([input], CountryFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => CountryUpdateOutputDto, {
    name: CountryUpdateDto.metaname, 
    description: CountryUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => CountryUpdateInputDto}) 
    input: CountryUpdateInputDto,

    @GraphQLBodyContext() selection: CountryUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountryUpdateOutputDto> {
    await this.validation.validateArrayInput<CountryUpdateInputSetsDto>([input.sets], CountryUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => CountrySoftDeleteOutputDto, {
    name: CountrySoftDeleteDto.metaname, 
    description: CountrySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => CountrySoftDeleteInputDto }) 
    input: CountrySoftDeleteInputDto,

    @GraphQLBodyContext() selection: CountrySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountrySoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => CountryDeleteOutputDto, {
    name: CountryDeleteDto.metaname, 
    description: CountryDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => CountryDeleteInputDto }) 
    input: CountryDeleteInputDto,

    @GraphQLBodyContext() selection: CountryDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountryDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => CountryRestoreOutputDto, {
    name: CountryRestoreDto.metaname,
    description: CountryRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => CountryRestoreInputDto }) 
    input: CountryRestoreInputDto,
    
    @GraphQLBodyContext() selection: CountryRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountryRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [CountryUpsertOutputDto], {
    name:  `${CountryUpsertDto.metaname}`, 
    description: `${CountryUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [CountryUpsertInputDto]}) 
    input: CountryUpsertInputDto | CountryUpsertInputDto[],
    
    @GraphQLBodyContext() selection: CountryUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountryUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<CountryUpsertInputDto>(input, CountryUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => CountrySoftRemoveOutputDto, {
    name: CountrySoftRemoveDto.metaname, 
    description: CountrySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => CountrySoftRemoveInputDto }) 
    input: CountrySoftRemoveInputDto,

    @GraphQLBodyContext() selection: CountrySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountrySoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => CountryRemoveOutputDto, {
    name: CountryRemoveDto.metaname, 
    description: CountryRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => CountryRemoveInputDto }) 
    input: CountryRemoveInputDto,
    
    @GraphQLBodyContext() selection: CountryRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountryRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => CountryRecoverOutputDto, {
    name: CountryRecoverDto.metaname,
    description: CountryRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => CountryRecoverInputDto }) 
    input: CountryRecoverInputDto,

    @GraphQLBodyContext() selection: CountryRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CountryRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: CountryEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<CountryEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}