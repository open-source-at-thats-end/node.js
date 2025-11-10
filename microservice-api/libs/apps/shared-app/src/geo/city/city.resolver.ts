import { Resolver, Query, Mutation, Args, Int, Context, Info, ResolveReference, Parent } from '@nestjs/graphql';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';
import { CityFactory } from './city.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { CityUploadOutputDto, CityUploadDto, CityUploadInputDto, CityUploadDeleteOutputDto, CityUploadDeleteDto, CityUploadDeleteInputDto, CityCreateDto, CityCreateInputDto, CityCreateOutputDto, CityDeleteDto, CityDeleteInputDto, CityDeleteOutputDto, CityFindDto, CityFindInputDto, CityFindOneByIdDto, CityFindOneByIdInputDto, CityFindOutputDto, CityFindOutputRowsDto, CityRecoverDto, CityRecoverInputDto, CityRecoverOutputDto, CityRemoveDto, CityRemoveInputDto, CityRemoveOutputDto, CityRestoreDto, CityRestoreInputDto, CityRestoreOutputDto, CitySoftDeleteDto, CitySoftDeleteInputDto, CitySoftDeleteInputWhereDto, CitySoftDeleteOutputDto, CitySoftRemoveDto, CitySoftRemoveInputDto, CitySoftRemoveOutputDto, CityUpdateDto, CityUpdateInputDto, CityUpdateInputSetsDto, CityUpdateOutputDto, CityUpsertDto, CityUpsertInputDto, CityUpsertOutputDto } from './dto/city.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => CityEntity)
export class CityResolver
{
  constructor(
    protected readonly factory: CityFactory,
    protected readonly service: CityService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [CityUploadOutput], { name:  `${CityUploadDto.metaname}`, description: `${CityUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => CityUploadInputDto }) 
    input: CityUploadInputDto,

    @GraphQLBodyContext() selection: CityUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CityUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [CityUploadDeleteOutput], { name:  `${CityUploadDeleteDto.metaname}`, description: `${CityUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [CityUploadDeleteInputDto] }) 
    input: CityUploadDeleteInputDto | CityUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: CityUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CityUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [CityCreateOutputDto], {
    name:  `${CityCreateDto.metaname}`, 
    description: `${CityCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [CityCreateInputDto] }) 
    input: CityCreateInputDto | CityCreateInputDto[],

    @GraphQLBodyContext() selection: CityCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<CityCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<CityCreateInputDto>(input, CityCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => CityFindOutputDto, {
    name: CityFindDto.metaname,
    description: CityFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => CityFindInputDto}) 
    filter: CityFindInputDto,

    @GraphQLBodyContext() selection: CityFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<CityFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => CityEntity, {
    name: CityFindOneByIdDto.metaname, 
    description: CityFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => CityFindOneByIdInputDto }) 
    input: CityFindOneByIdInputDto,

    @GraphQLBodyContext() selection: CityEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<CityEntity> {
    await this.validation.validateArrayInput<CityFindOneByIdInputDto>([input], CityFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => CityUpdateOutputDto, {
    name: CityUpdateDto.metaname, 
    description: CityUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => CityUpdateInputDto}) 
    input: CityUpdateInputDto,

    @GraphQLBodyContext() selection: CityUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CityUpdateOutputDto> {
    await this.validation.validateArrayInput<CityUpdateInputSetsDto>([input.sets], CityUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => CitySoftDeleteOutputDto, {
    name: CitySoftDeleteDto.metaname, 
    description: CitySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => CitySoftDeleteInputDto }) 
    input: CitySoftDeleteInputDto,

    @GraphQLBodyContext() selection: CitySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CitySoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => CityDeleteOutputDto, {
    name: CityDeleteDto.metaname, 
    description: CityDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => CityDeleteInputDto }) 
    input: CityDeleteInputDto,

    @GraphQLBodyContext() selection: CityDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CityDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => CityRestoreOutputDto, {
    name: CityRestoreDto.metaname,
    description: CityRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => CityRestoreInputDto }) 
    input: CityRestoreInputDto,
    
    @GraphQLBodyContext() selection: CityRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CityRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [CityUpsertOutputDto], {
    name:  `${CityUpsertDto.metaname}`, 
    description: `${CityUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [CityUpsertInputDto]}) 
    input: CityUpsertInputDto | CityUpsertInputDto[],
    
    @GraphQLBodyContext() selection: CityUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CityUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<CityUpsertInputDto>(input, CityUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => CitySoftRemoveOutputDto, {
    name: CitySoftRemoveDto.metaname, 
    description: CitySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => CitySoftRemoveInputDto }) 
    input: CitySoftRemoveInputDto,

    @GraphQLBodyContext() selection: CitySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CitySoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => CityRemoveOutputDto, {
    name: CityRemoveDto.metaname, 
    description: CityRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => CityRemoveInputDto }) 
    input: CityRemoveInputDto,
    
    @GraphQLBodyContext() selection: CityRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CityRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => CityRecoverOutputDto, {
    name: CityRecoverDto.metaname,
    description: CityRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => CityRecoverInputDto }) 
    input: CityRecoverInputDto,

    @GraphQLBodyContext() selection: CityRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<CityRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: CityEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<CityEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}