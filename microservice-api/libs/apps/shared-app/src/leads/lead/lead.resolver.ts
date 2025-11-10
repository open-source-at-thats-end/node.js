import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { LeadService } from './lead.service';
import { LeadEntity } from './entities/lead.entity';
import { LeadFactory } from './lead.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { LeadUploadOutputDto, LeadUploadDto, LeadUploadInputDto, LeadUploadDeleteOutputDto, LeadUploadDeleteDto, LeadUploadDeleteInputDto, LeadCreateDto, LeadCreateInputDto, LeadCreateOutputDto, LeadDeleteDto, LeadDeleteInputDto, LeadDeleteOutputDto, LeadFindDto, LeadFindInputDto, LeadFindOneByIdDto, LeadFindOneByIdInputDto, LeadFindOutputDto, LeadFindOutputRowsDto, LeadRecoverDto, LeadRecoverInputDto, LeadRecoverOutputDto, LeadRemoveDto, LeadRemoveInputDto, LeadRemoveOutputDto, LeadRestoreDto, LeadRestoreInputDto, LeadRestoreOutputDto, LeadSoftDeleteDto, LeadSoftDeleteInputDto, LeadSoftDeleteInputWhereDto, LeadSoftDeleteOutputDto, LeadSoftRemoveDto, LeadSoftRemoveInputDto, LeadSoftRemoveOutputDto, LeadUpdateDto, LeadUpdateInputDto, LeadUpdateInputSetsDto, LeadUpdateOutputDto, LeadUpsertDto, LeadUpsertInputDto, LeadUpsertOutputDto } from './dto/lead.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => LeadEntity)
export class LeadResolver
{
  constructor(
    protected readonly factory: LeadFactory,
    protected readonly service: LeadService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [LeadUploadOutput], { name:  `${LeadUploadDto.metaname}`, description: `${LeadUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => LeadUploadInputDto }) 
    input: LeadUploadInputDto,

    @GraphQLBodyContext() selection: LeadUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [LeadUploadDeleteOutput], { name:  `${LeadUploadDeleteDto.metaname}`, description: `${LeadUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [LeadUploadDeleteInputDto] }) 
    input: LeadUploadDeleteInputDto | LeadUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: LeadUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [LeadCreateOutputDto], {
    name:  `${LeadCreateDto.metaname}`, 
    description: `${LeadCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [LeadCreateInputDto] }) 
    input: LeadCreateInputDto | LeadCreateInputDto[],

    @GraphQLBodyContext() selection: LeadCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<LeadCreateInputDto>(input, LeadCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => LeadFindOutputDto, {
    name: LeadFindDto.metaname,
    description: LeadFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => LeadFindInputDto}) 
    filter: LeadFindInputDto,

    @GraphQLBodyContext() selection: LeadFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<LeadFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => LeadEntity, {
    name: LeadFindOneByIdDto.metaname, 
    description: LeadFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFindOneByIdInputDto }) 
    input: LeadFindOneByIdInputDto,

    @GraphQLBodyContext() selection: LeadEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<LeadEntity> {
    await this.validation.validateArrayInput<LeadFindOneByIdInputDto>([input], LeadFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => LeadUpdateOutputDto, {
    name: LeadUpdateDto.metaname, 
    description: LeadUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => LeadUpdateInputDto}) 
    input: LeadUpdateInputDto,

    @GraphQLBodyContext() selection: LeadUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadUpdateOutputDto> {
    await this.validation.validateArrayInput<LeadUpdateInputSetsDto>([input.sets], LeadUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => LeadSoftDeleteOutputDto, {
    name: LeadSoftDeleteDto.metaname, 
    description: LeadSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => LeadSoftDeleteInputDto }) 
    input: LeadSoftDeleteInputDto,

    @GraphQLBodyContext() selection: LeadSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => LeadDeleteOutputDto, {
    name: LeadDeleteDto.metaname, 
    description: LeadDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => LeadDeleteInputDto }) 
    input: LeadDeleteInputDto,

    @GraphQLBodyContext() selection: LeadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => LeadRestoreOutputDto, {
    name: LeadRestoreDto.metaname,
    description: LeadRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => LeadRestoreInputDto }) 
    input: LeadRestoreInputDto,
    
    @GraphQLBodyContext() selection: LeadRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [LeadUpsertOutputDto], {
    name:  `${LeadUpsertDto.metaname}`, 
    description: `${LeadUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [LeadUpsertInputDto]}) 
    input: LeadUpsertInputDto | LeadUpsertInputDto[],
    
    @GraphQLBodyContext() selection: LeadUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<LeadUpsertInputDto>(input, LeadUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => LeadSoftRemoveOutputDto, {
    name: LeadSoftRemoveDto.metaname, 
    description: LeadSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => LeadSoftRemoveInputDto }) 
    input: LeadSoftRemoveInputDto,

    @GraphQLBodyContext() selection: LeadSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => LeadRemoveOutputDto, {
    name: LeadRemoveDto.metaname, 
    description: LeadRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => LeadRemoveInputDto }) 
    input: LeadRemoveInputDto,
    
    @GraphQLBodyContext() selection: LeadRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => LeadRecoverOutputDto, {
    name: LeadRecoverDto.metaname,
    description: LeadRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => LeadRecoverInputDto }) 
    input: LeadRecoverInputDto,

    @GraphQLBodyContext() selection: LeadRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: LeadEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<LeadEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}