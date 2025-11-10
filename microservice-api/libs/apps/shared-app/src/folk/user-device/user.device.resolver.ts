import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { UserDeviceService } from './user.device.service';
import { UserDeviceEntity } from './entities/user.device.entity';
import { UserDeviceFactory } from './user.device.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { UserDeviceUploadOutputDto, UserDeviceUploadDto, UserDeviceUploadInputDto, UserDeviceUploadDeleteOutputDto, UserDeviceUploadDeleteDto, UserDeviceUploadDeleteInputDto, UserDeviceCreateDto, UserDeviceCreateInputDto, UserDeviceCreateOutputDto, UserDeviceDeleteDto, UserDeviceDeleteInputDto, UserDeviceDeleteOutputDto, UserDeviceFindDto, UserDeviceFindInputDto, UserDeviceFindOneByIdDto, UserDeviceFindOneByIdInputDto, UserDeviceFindOutputDto, UserDeviceFindOutputRowsDto, UserDeviceRecoverDto, UserDeviceRecoverInputDto, UserDeviceRecoverOutputDto, UserDeviceRemoveDto, UserDeviceRemoveInputDto, UserDeviceRemoveOutputDto, UserDeviceRestoreDto, UserDeviceRestoreInputDto, UserDeviceRestoreOutputDto, UserDeviceSoftDeleteDto, UserDeviceSoftDeleteInputDto, UserDeviceSoftDeleteInputWhereDto, UserDeviceSoftDeleteOutputDto, UserDeviceSoftRemoveDto, UserDeviceSoftRemoveInputDto, UserDeviceSoftRemoveOutputDto, UserDeviceUpdateDto, UserDeviceUpdateInputDto, UserDeviceUpdateInputSetsDto, UserDeviceUpdateOutputDto, UserDeviceUpsertDto, UserDeviceUpsertInputDto, UserDeviceUpsertOutputDto } from './dto/user.device.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => UserDeviceEntity)
export class UserDeviceResolver
{
  constructor(
    protected readonly factory: UserDeviceFactory,
    protected readonly service: UserDeviceService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [UserDeviceUploadOutput], { name:  `${UserDeviceUploadDto.metaname}`, description: `${UserDeviceUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserDeviceUploadInputDto }) 
    input: UserDeviceUploadInputDto,

    @GraphQLBodyContext() selection: UserDeviceUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserDeviceUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [UserDeviceUploadDeleteOutput], { name:  `${UserDeviceUploadDeleteDto.metaname}`, description: `${UserDeviceUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserDeviceUploadDeleteInputDto] }) 
    input: UserDeviceUploadDeleteInputDto | UserDeviceUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserDeviceUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserDeviceUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserDeviceCreateOutputDto], {
    name:  `${UserDeviceCreateDto.metaname}`, 
    description: `${UserDeviceCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserDeviceCreateInputDto] }) 
    input: UserDeviceCreateInputDto | UserDeviceCreateInputDto[],

    @GraphQLBodyContext() selection: UserDeviceCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserDeviceCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserDeviceCreateInputDto>(input, UserDeviceCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserDeviceFindOutputDto, {
    name: UserDeviceFindDto.metaname,
    description: UserDeviceFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserDeviceFindInputDto}) 
    filter: UserDeviceFindInputDto,

    @GraphQLBodyContext() selection: UserDeviceFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserDeviceFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserDeviceEntity, {
    name: UserDeviceFindOneByIdDto.metaname, 
    description: UserDeviceFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserDeviceFindOneByIdInputDto }) 
    input: UserDeviceFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserDeviceEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserDeviceEntity> {
    await this.validation.validateArrayInput<UserDeviceFindOneByIdInputDto>([input], UserDeviceFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserDeviceUpdateOutputDto, {
    name: UserDeviceUpdateDto.metaname, 
    description: UserDeviceUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserDeviceUpdateInputDto}) 
    input: UserDeviceUpdateInputDto,

    @GraphQLBodyContext() selection: UserDeviceUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserDeviceUpdateOutputDto> {
    await this.validation.validateArrayInput<UserDeviceUpdateInputSetsDto>([input.sets], UserDeviceUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserDeviceSoftDeleteOutputDto, {
    name: UserDeviceSoftDeleteDto.metaname, 
    description: UserDeviceSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserDeviceSoftDeleteInputDto }) 
    input: UserDeviceSoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserDeviceSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserDeviceSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserDeviceDeleteOutputDto, {
    name: UserDeviceDeleteDto.metaname, 
    description: UserDeviceDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserDeviceDeleteInputDto }) 
    input: UserDeviceDeleteInputDto,

    @GraphQLBodyContext() selection: UserDeviceDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserDeviceDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserDeviceRestoreOutputDto, {
    name: UserDeviceRestoreDto.metaname,
    description: UserDeviceRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserDeviceRestoreInputDto }) 
    input: UserDeviceRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserDeviceRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserDeviceRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserDeviceUpsertOutputDto], {
    name:  `${UserDeviceUpsertDto.metaname}`, 
    description: `${UserDeviceUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserDeviceUpsertInputDto]}) 
    input: UserDeviceUpsertInputDto | UserDeviceUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserDeviceUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserDeviceUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserDeviceUpsertInputDto>(input, UserDeviceUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserDeviceSoftRemoveOutputDto, {
    name: UserDeviceSoftRemoveDto.metaname, 
    description: UserDeviceSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserDeviceSoftRemoveInputDto }) 
    input: UserDeviceSoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserDeviceSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserDeviceSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserDeviceRemoveOutputDto, {
    name: UserDeviceRemoveDto.metaname, 
    description: UserDeviceRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserDeviceRemoveInputDto }) 
    input: UserDeviceRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserDeviceRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserDeviceRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserDeviceRecoverOutputDto, {
    name: UserDeviceRecoverDto.metaname,
    description: UserDeviceRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserDeviceRecoverInputDto }) 
    input: UserDeviceRecoverInputDto,

    @GraphQLBodyContext() selection: UserDeviceRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserDeviceRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: UserDeviceEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<UserDeviceEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}