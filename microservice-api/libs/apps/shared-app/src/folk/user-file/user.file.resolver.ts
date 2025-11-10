import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { UserFileService } from './user.file.service';
import { UserFileEntity } from './entities/user.file.entity';
import { GraphQLBodyContext, DataValidationPipe, Upload } from '@libs/library-app';
import { UserFileCreateDto, UserFileCreateInputDto, UserFileCreateOutputDto, UserFileDeleteDto, UserFileDeleteInputDto, UserFileDeleteOutputDto, UserFileFindDto, UserFileFindInputDto, UserFileFindOneByIdDto, UserFileFindOneByIdInputDto, UserFileFindOutputDto, UserFileFindOutputRowsDto, UserFileRecordPositionDto, UserFileRecordPositionInputDto, UserFileRecordPositionOutputDto, UserFileRecoverDto, UserFileRecoverInputDto, UserFileRecoverOutputDto, UserFileRemoveDto, UserFileRemoveInputDto, UserFileRemoveOutputDto, UserFileRestoreDto, UserFileRestoreInputDto, UserFileRestoreOutputDto, UserFileSoftDeleteDto, UserFileSoftDeleteInputDto, UserFileSoftDeleteInputWhereDto, UserFileSoftDeleteOutputDto, UserFileSoftRemoveDto, UserFileSoftRemoveInputDto, UserFileSoftRemoveOutputDto, UserFileUpdateDto, UserFileUpdateInputDto, UserFileUpdateInputSetsDto, UserFileUpdateOutputDto, UserFileUploadDeleteDto, UserFileUploadDeleteInputDto, UserFileUploadDeleteOutputDto, UserFileUploadDto, UserFileUploadInputDto, UserFileUploadOutputDto, UserFileUpsertDto, UserFileUpsertInputDto, UserFileUpsertOutputDto } from './dto/user.file.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';

@Resolver(() => UserFileEntity)
export class UserFileResolver
{
  constructor(
    protected readonly service: UserFileService,
    private readonly validationPipe: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  @Mutation(() => [UserFileUploadOutputDto], { name:  `${UserFileUploadDto.metaname}`, description: `${UserFileUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserFileUploadInputDto }) 
    input: UserFileUploadInputDto,

    @GraphQLBodyContext() selection: UserFileUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserFileUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  @Mutation(() => [UserFileUploadDeleteOutputDto], { name:  `${UserFileUploadDeleteDto.metaname}`, description: `${UserFileUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserFileUploadDeleteInputDto] }) 
    input: UserFileUploadDeleteInputDto | UserFileUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserFileUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserFileUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserFileCreateOutputDto], {
    name:  `${UserFileCreateDto.metaname}`, 
    description: `${UserFileCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserFileCreateInputDto] }) 
    input: UserFileCreateInputDto | UserFileCreateInputDto[],

    @GraphQLBodyContext() selection: UserFileCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserFileCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validationPipe.validateArrayInput<UserFileCreateInputDto>(input, UserFileCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserFileFindOutputDto, {
    name: UserFileFindDto.metaname,
    description: UserFileFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserFileFindInputDto}) 
    filter: UserFileFindInputDto,

    @GraphQLBodyContext() selection: UserFileFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserFileFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserFileEntity, {
    name: UserFileFindOneByIdDto.metaname, 
    description: UserFileFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserFileFindOneByIdInputDto }) 
    input: UserFileFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserFileEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserFileEntity> {
    await this.validationPipe.validateArrayInput<UserFileFindOneByIdInputDto>([input], UserFileFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserFileUpdateOutputDto, {
    name: UserFileUpdateDto.metaname, 
    description: UserFileUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserFileUpdateInputDto}) 
    input: UserFileUpdateInputDto,

    @GraphQLBodyContext() selection: UserFileUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFileUpdateOutputDto> {
    await this.validationPipe.validateArrayInput<UserFileUpdateInputSetsDto>([input.sets], UserFileUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserFileSoftDeleteOutputDto, {
    name: UserFileSoftDeleteDto.metaname, 
    description: UserFileSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserFileSoftDeleteInputDto }) 
    input: UserFileSoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserFileSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFileSoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserFileDeleteOutputDto, {
    name: UserFileDeleteDto.metaname, 
    description: UserFileDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserFileDeleteInputDto }) 
    input: UserFileDeleteInputDto,

    @GraphQLBodyContext() selection: UserFileDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFileDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserFileRestoreOutputDto, {
    name: UserFileRestoreDto.metaname,
    description: UserFileRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserFileRestoreInputDto }) 
    input: UserFileRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserFileRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFileRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserFileUpsertOutputDto], {
    name:  `${UserFileUpsertDto.metaname}`, 
    description: `${UserFileUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserFileUpsertInputDto]}) 
    input: UserFileUpsertInputDto | UserFileUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserFileUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFileUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validationPipe.validateArrayInput<UserFileUpsertInputDto>(input, UserFileUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserFileSoftRemoveOutputDto, {
    name: UserFileSoftRemoveDto.metaname, 
    description: UserFileSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserFileSoftRemoveInputDto }) 
    input: UserFileSoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserFileSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFileSoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserFileRemoveOutputDto, {
    name: UserFileRemoveDto.metaname, 
    description: UserFileRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserFileRemoveInputDto }) 
    input: UserFileRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserFileRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFileRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserFileRecoverOutputDto, {
    name: UserFileRecoverDto.metaname,
    description: UserFileRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserFileRecoverInputDto }) 
    input: UserFileRecoverInputDto,

    @GraphQLBodyContext() selection: UserFileRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFileRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }

  // ████ record_position() ██████████████████████████████████████
  @Mutation(() => UserFileRecordPositionOutputDto, {
    name: UserFileRecordPositionDto.metaname,
    description: UserFileRecordPositionDto.metadesc
  })
  async recordPosition(
    @Context() ctx: any,

    @Args('input', { type: () => UserFileRecordPositionInputDto }) 
    input: UserFileRecordPositionInputDto,

    @GraphQLBodyContext() selection: UserFileRecordPositionOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFileRecordPositionOutputDto>{
    return this.service.recordPositionEngine.recordPosition(input, selection, info, ctx);
  }

  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  // TODO: SUPERGRAPH_FOREIGN_RELATION step 2 - add resolveReference()
  @ResolveReference()
  async resolveReference(
    @Parent() entity: UserFileEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<UserFileEntity | null> {
    return await this.service.findEngine.resolveReference(entity, info, ctx);
  }
}