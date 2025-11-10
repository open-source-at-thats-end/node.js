import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { LeadPotentialService } from './potential.service';
import { LeadPotentialEntity } from './entities/potential.entity';
import { LeadPotentialFactory } from './potential.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { LeadPotentialUploadOutputDto, LeadPotentialUploadDto, LeadPotentialUploadInputDto, LeadPotentialUploadDeleteOutputDto, LeadPotentialUploadDeleteDto, LeadPotentialUploadDeleteInputDto, LeadPotentialCreateDto, LeadPotentialCreateInputDto, LeadPotentialCreateOutputDto, LeadPotentialDeleteDto, LeadPotentialDeleteInputDto, LeadPotentialDeleteOutputDto, LeadPotentialFindDto, LeadPotentialFindInputDto, LeadPotentialFindOneByIdDto, LeadPotentialFindOneByIdInputDto, LeadPotentialFindOutputDto, LeadPotentialFindOutputRowsDto, LeadPotentialRecoverDto, LeadPotentialRecoverInputDto, LeadPotentialRecoverOutputDto, LeadPotentialRemoveDto, LeadPotentialRemoveInputDto, LeadPotentialRemoveOutputDto, LeadPotentialRestoreDto, LeadPotentialRestoreInputDto, LeadPotentialRestoreOutputDto, LeadPotentialSoftDeleteDto, LeadPotentialSoftDeleteInputDto, LeadPotentialSoftDeleteInputWhereDto, LeadPotentialSoftDeleteOutputDto, LeadPotentialSoftRemoveDto, LeadPotentialSoftRemoveInputDto, LeadPotentialSoftRemoveOutputDto, LeadPotentialUpdateDto, LeadPotentialUpdateInputDto, LeadPotentialUpdateInputSetsDto, LeadPotentialUpdateOutputDto, LeadPotentialUpsertDto, LeadPotentialUpsertInputDto, LeadPotentialUpsertOutputDto } from './dto/potential.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => LeadPotentialEntity)
export class LeadPotentialResolver
{
  constructor(
    protected readonly factory: LeadPotentialFactory,
    protected readonly service: LeadPotentialService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [LeadPotentialUploadOutput], { name:  `${LeadPotentialUploadDto.metaname}`, description: `${LeadPotentialUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => LeadPotentialUploadInputDto }) 
    input: LeadPotentialUploadInputDto,

    @GraphQLBodyContext() selection: LeadPotentialUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadPotentialUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [LeadPotentialUploadDeleteOutput], { name:  `${LeadPotentialUploadDeleteDto.metaname}`, description: `${LeadPotentialUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [LeadPotentialUploadDeleteInputDto] }) 
    input: LeadPotentialUploadDeleteInputDto | LeadPotentialUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: LeadPotentialUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadPotentialUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [LeadPotentialCreateOutputDto], {
    name:  `${LeadPotentialCreateDto.metaname}`, 
    description: `${LeadPotentialCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [LeadPotentialCreateInputDto] }) 
    input: LeadPotentialCreateInputDto | LeadPotentialCreateInputDto[],

    @GraphQLBodyContext() selection: LeadPotentialCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadPotentialCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<LeadPotentialCreateInputDto>(input, LeadPotentialCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => LeadPotentialFindOutputDto, {
    name: LeadPotentialFindDto.metaname,
    description: LeadPotentialFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => LeadPotentialFindInputDto}) 
    filter: LeadPotentialFindInputDto,

    @GraphQLBodyContext() selection: LeadPotentialFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<LeadPotentialFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => LeadPotentialEntity, {
    name: LeadPotentialFindOneByIdDto.metaname, 
    description: LeadPotentialFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => LeadPotentialFindOneByIdInputDto }) 
    input: LeadPotentialFindOneByIdInputDto,

    @GraphQLBodyContext() selection: LeadPotentialEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<LeadPotentialEntity> {
    await this.validation.validateArrayInput<LeadPotentialFindOneByIdInputDto>([input], LeadPotentialFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => LeadPotentialUpdateOutputDto, {
    name: LeadPotentialUpdateDto.metaname, 
    description: LeadPotentialUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => LeadPotentialUpdateInputDto}) 
    input: LeadPotentialUpdateInputDto,

    @GraphQLBodyContext() selection: LeadPotentialUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadPotentialUpdateOutputDto> {
    await this.validation.validateArrayInput<LeadPotentialUpdateInputSetsDto>([input.sets], LeadPotentialUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => LeadPotentialSoftDeleteOutputDto, {
    name: LeadPotentialSoftDeleteDto.metaname, 
    description: LeadPotentialSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => LeadPotentialSoftDeleteInputDto }) 
    input: LeadPotentialSoftDeleteInputDto,

    @GraphQLBodyContext() selection: LeadPotentialSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadPotentialSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => LeadPotentialDeleteOutputDto, {
    name: LeadPotentialDeleteDto.metaname, 
    description: LeadPotentialDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => LeadPotentialDeleteInputDto }) 
    input: LeadPotentialDeleteInputDto,

    @GraphQLBodyContext() selection: LeadPotentialDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadPotentialDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => LeadPotentialRestoreOutputDto, {
    name: LeadPotentialRestoreDto.metaname,
    description: LeadPotentialRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => LeadPotentialRestoreInputDto }) 
    input: LeadPotentialRestoreInputDto,
    
    @GraphQLBodyContext() selection: LeadPotentialRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadPotentialRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [LeadPotentialUpsertOutputDto], {
    name:  `${LeadPotentialUpsertDto.metaname}`, 
    description: `${LeadPotentialUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [LeadPotentialUpsertInputDto]}) 
    input: LeadPotentialUpsertInputDto | LeadPotentialUpsertInputDto[],
    
    @GraphQLBodyContext() selection: LeadPotentialUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadPotentialUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<LeadPotentialUpsertInputDto>(input, LeadPotentialUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => LeadPotentialSoftRemoveOutputDto, {
    name: LeadPotentialSoftRemoveDto.metaname, 
    description: LeadPotentialSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => LeadPotentialSoftRemoveInputDto }) 
    input: LeadPotentialSoftRemoveInputDto,

    @GraphQLBodyContext() selection: LeadPotentialSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadPotentialSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => LeadPotentialRemoveOutputDto, {
    name: LeadPotentialRemoveDto.metaname, 
    description: LeadPotentialRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => LeadPotentialRemoveInputDto }) 
    input: LeadPotentialRemoveInputDto,
    
    @GraphQLBodyContext() selection: LeadPotentialRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadPotentialRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => LeadPotentialRecoverOutputDto, {
    name: LeadPotentialRecoverDto.metaname,
    description: LeadPotentialRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => LeadPotentialRecoverInputDto }) 
    input: LeadPotentialRecoverInputDto,

    @GraphQLBodyContext() selection: LeadPotentialRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadPotentialRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: LeadPotentialEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<LeadPotentialEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}