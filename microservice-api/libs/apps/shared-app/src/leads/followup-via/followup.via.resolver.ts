import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { LeadFollowupViaService } from './followup.via.service';
import { LeadFollowupViaEntity } from './entities/followup.via.entity';
import { LeadFollowupViaFactory } from './followup.via.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { LeadFollowupViaUploadOutputDto, LeadFollowupViaUploadDto, LeadFollowupViaUploadInputDto, LeadFollowupViaUploadDeleteOutputDto, LeadFollowupViaUploadDeleteDto, LeadFollowupViaUploadDeleteInputDto, LeadFollowupViaCreateDto, LeadFollowupViaCreateInputDto, LeadFollowupViaCreateOutputDto, LeadFollowupViaDeleteDto, LeadFollowupViaDeleteInputDto, LeadFollowupViaDeleteOutputDto, LeadFollowupViaFindDto, LeadFollowupViaFindInputDto, LeadFollowupViaFindOneByIdDto, LeadFollowupViaFindOneByIdInputDto, LeadFollowupViaFindOutputDto, LeadFollowupViaFindOutputRowsDto, LeadFollowupViaRecoverDto, LeadFollowupViaRecoverInputDto, LeadFollowupViaRecoverOutputDto, LeadFollowupViaRemoveDto, LeadFollowupViaRemoveInputDto, LeadFollowupViaRemoveOutputDto, LeadFollowupViaRestoreDto, LeadFollowupViaRestoreInputDto, LeadFollowupViaRestoreOutputDto, LeadFollowupViaSoftDeleteDto, LeadFollowupViaSoftDeleteInputDto, LeadFollowupViaSoftDeleteInputWhereDto, LeadFollowupViaSoftDeleteOutputDto, LeadFollowupViaSoftRemoveDto, LeadFollowupViaSoftRemoveInputDto, LeadFollowupViaSoftRemoveOutputDto, LeadFollowupViaUpdateDto, LeadFollowupViaUpdateInputDto, LeadFollowupViaUpdateInputSetsDto, LeadFollowupViaUpdateOutputDto, LeadFollowupViaUpsertDto, LeadFollowupViaUpsertInputDto, LeadFollowupViaUpsertOutputDto } from './dto/followup.via.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => LeadFollowupViaEntity)
export class LeadFollowupViaResolver
{
  constructor(
    protected readonly factory: LeadFollowupViaFactory,
    protected readonly service: LeadFollowupViaService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [LeadFollowupViaUploadOutput], { name:  `${LeadFollowupViaUploadDto.metaname}`, description: `${LeadFollowupViaUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => LeadFollowupViaUploadInputDto }) 
    input: LeadFollowupViaUploadInputDto,

    @GraphQLBodyContext() selection: LeadFollowupViaUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadFollowupViaUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [LeadFollowupViaUploadDeleteOutput], { name:  `${LeadFollowupViaUploadDeleteDto.metaname}`, description: `${LeadFollowupViaUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [LeadFollowupViaUploadDeleteInputDto] }) 
    input: LeadFollowupViaUploadDeleteInputDto | LeadFollowupViaUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: LeadFollowupViaUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadFollowupViaUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [LeadFollowupViaCreateOutputDto], {
    name:  `${LeadFollowupViaCreateDto.metaname}`, 
    description: `${LeadFollowupViaCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [LeadFollowupViaCreateInputDto] }) 
    input: LeadFollowupViaCreateInputDto | LeadFollowupViaCreateInputDto[],

    @GraphQLBodyContext() selection: LeadFollowupViaCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<LeadFollowupViaCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<LeadFollowupViaCreateInputDto>(input, LeadFollowupViaCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => LeadFollowupViaFindOutputDto, {
    name: LeadFollowupViaFindDto.metaname,
    description: LeadFollowupViaFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => LeadFollowupViaFindInputDto}) 
    filter: LeadFollowupViaFindInputDto,

    @GraphQLBodyContext() selection: LeadFollowupViaFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<LeadFollowupViaFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => LeadFollowupViaEntity, {
    name: LeadFollowupViaFindOneByIdDto.metaname, 
    description: LeadFollowupViaFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupViaFindOneByIdInputDto }) 
    input: LeadFollowupViaFindOneByIdInputDto,

    @GraphQLBodyContext() selection: LeadFollowupViaEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<LeadFollowupViaEntity> {
    await this.validation.validateArrayInput<LeadFollowupViaFindOneByIdInputDto>([input], LeadFollowupViaFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => LeadFollowupViaUpdateOutputDto, {
    name: LeadFollowupViaUpdateDto.metaname, 
    description: LeadFollowupViaUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => LeadFollowupViaUpdateInputDto}) 
    input: LeadFollowupViaUpdateInputDto,

    @GraphQLBodyContext() selection: LeadFollowupViaUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupViaUpdateOutputDto> {
    await this.validation.validateArrayInput<LeadFollowupViaUpdateInputSetsDto>([input.sets], LeadFollowupViaUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => LeadFollowupViaSoftDeleteOutputDto, {
    name: LeadFollowupViaSoftDeleteDto.metaname, 
    description: LeadFollowupViaSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupViaSoftDeleteInputDto }) 
    input: LeadFollowupViaSoftDeleteInputDto,

    @GraphQLBodyContext() selection: LeadFollowupViaSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupViaSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => LeadFollowupViaDeleteOutputDto, {
    name: LeadFollowupViaDeleteDto.metaname, 
    description: LeadFollowupViaDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupViaDeleteInputDto }) 
    input: LeadFollowupViaDeleteInputDto,

    @GraphQLBodyContext() selection: LeadFollowupViaDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupViaDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => LeadFollowupViaRestoreOutputDto, {
    name: LeadFollowupViaRestoreDto.metaname,
    description: LeadFollowupViaRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupViaRestoreInputDto }) 
    input: LeadFollowupViaRestoreInputDto,
    
    @GraphQLBodyContext() selection: LeadFollowupViaRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupViaRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [LeadFollowupViaUpsertOutputDto], {
    name:  `${LeadFollowupViaUpsertDto.metaname}`, 
    description: `${LeadFollowupViaUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [LeadFollowupViaUpsertInputDto]}) 
    input: LeadFollowupViaUpsertInputDto | LeadFollowupViaUpsertInputDto[],
    
    @GraphQLBodyContext() selection: LeadFollowupViaUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupViaUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<LeadFollowupViaUpsertInputDto>(input, LeadFollowupViaUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => LeadFollowupViaSoftRemoveOutputDto, {
    name: LeadFollowupViaSoftRemoveDto.metaname, 
    description: LeadFollowupViaSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupViaSoftRemoveInputDto }) 
    input: LeadFollowupViaSoftRemoveInputDto,

    @GraphQLBodyContext() selection: LeadFollowupViaSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupViaSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => LeadFollowupViaRemoveOutputDto, {
    name: LeadFollowupViaRemoveDto.metaname, 
    description: LeadFollowupViaRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupViaRemoveInputDto }) 
    input: LeadFollowupViaRemoveInputDto,
    
    @GraphQLBodyContext() selection: LeadFollowupViaRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupViaRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => LeadFollowupViaRecoverOutputDto, {
    name: LeadFollowupViaRecoverDto.metaname,
    description: LeadFollowupViaRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => LeadFollowupViaRecoverInputDto }) 
    input: LeadFollowupViaRecoverInputDto,

    @GraphQLBodyContext() selection: LeadFollowupViaRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<LeadFollowupViaRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: LeadFollowupViaEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<LeadFollowupViaEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}