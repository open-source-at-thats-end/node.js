import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { DeviceService } from './device.service';
import { DeviceEntity } from './entities/device.entity';
import { DeviceFactory } from './device.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { DeviceUploadOutputDto, DeviceUploadDto, DeviceUploadInputDto, DeviceUploadDeleteOutputDto, DeviceUploadDeleteDto, DeviceUploadDeleteInputDto, DeviceCreateDto, DeviceCreateInputDto, DeviceCreateOutputDto, DeviceDeleteDto, DeviceDeleteInputDto, DeviceDeleteOutputDto, DeviceFindDto, DeviceFindInputDto, DeviceFindOneByIdDto, DeviceFindOneByIdInputDto, DeviceFindOutputDto, DeviceFindOutputRowsDto, DeviceRecoverDto, DeviceRecoverInputDto, DeviceRecoverOutputDto, DeviceRemoveDto, DeviceRemoveInputDto, DeviceRemoveOutputDto, DeviceRestoreDto, DeviceRestoreInputDto, DeviceRestoreOutputDto, DeviceSoftDeleteDto, DeviceSoftDeleteInputDto, DeviceSoftDeleteInputWhereDto, DeviceSoftDeleteOutputDto, DeviceSoftRemoveDto, DeviceSoftRemoveInputDto, DeviceSoftRemoveOutputDto, DeviceUpdateDto, DeviceUpdateInputDto, DeviceUpdateInputSetsDto, DeviceUpdateOutputDto, DeviceUpsertDto, DeviceUpsertInputDto, DeviceUpsertOutputDto } from './dto/device.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => DeviceEntity)
export class DeviceResolver
{
  constructor(
    protected readonly factory: DeviceFactory,
    protected readonly service: DeviceService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [DeviceUploadOutput], { name:  `${DeviceUploadDto.metaname}`, description: `${DeviceUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => DeviceUploadInputDto }) 
    input: DeviceUploadInputDto,

    @GraphQLBodyContext() selection: DeviceUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<DeviceUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [DeviceUploadDeleteOutput], { name:  `${DeviceUploadDeleteDto.metaname}`, description: `${DeviceUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [DeviceUploadDeleteInputDto] }) 
    input: DeviceUploadDeleteInputDto | DeviceUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: DeviceUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<DeviceUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [DeviceCreateOutputDto], {
    name:  `${DeviceCreateDto.metaname}`, 
    description: `${DeviceCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [DeviceCreateInputDto] }) 
    input: DeviceCreateInputDto | DeviceCreateInputDto[],

    @GraphQLBodyContext() selection: DeviceCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<DeviceCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<DeviceCreateInputDto>(input, DeviceCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => DeviceFindOutputDto, {
    name: DeviceFindDto.metaname,
    description: DeviceFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => DeviceFindInputDto}) 
    filter: DeviceFindInputDto,

    @GraphQLBodyContext() selection: DeviceFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<DeviceFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => DeviceEntity, {
    name: DeviceFindOneByIdDto.metaname, 
    description: DeviceFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => DeviceFindOneByIdInputDto }) 
    input: DeviceFindOneByIdInputDto,

    @GraphQLBodyContext() selection: DeviceEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<DeviceEntity> {
    await this.validation.validateArrayInput<DeviceFindOneByIdInputDto>([input], DeviceFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => DeviceUpdateOutputDto, {
    name: DeviceUpdateDto.metaname, 
    description: DeviceUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => DeviceUpdateInputDto}) 
    input: DeviceUpdateInputDto,

    @GraphQLBodyContext() selection: DeviceUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<DeviceUpdateOutputDto> {
    await this.validation.validateArrayInput<DeviceUpdateInputSetsDto>([input.sets], DeviceUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => DeviceSoftDeleteOutputDto, {
    name: DeviceSoftDeleteDto.metaname, 
    description: DeviceSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => DeviceSoftDeleteInputDto }) 
    input: DeviceSoftDeleteInputDto,

    @GraphQLBodyContext() selection: DeviceSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<DeviceSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => DeviceDeleteOutputDto, {
    name: DeviceDeleteDto.metaname, 
    description: DeviceDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => DeviceDeleteInputDto }) 
    input: DeviceDeleteInputDto,

    @GraphQLBodyContext() selection: DeviceDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<DeviceDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => DeviceRestoreOutputDto, {
    name: DeviceRestoreDto.metaname,
    description: DeviceRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => DeviceRestoreInputDto }) 
    input: DeviceRestoreInputDto,
    
    @GraphQLBodyContext() selection: DeviceRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<DeviceRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [DeviceUpsertOutputDto], {
    name:  `${DeviceUpsertDto.metaname}`, 
    description: `${DeviceUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [DeviceUpsertInputDto]}) 
    input: DeviceUpsertInputDto | DeviceUpsertInputDto[],
    
    @GraphQLBodyContext() selection: DeviceUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<DeviceUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<DeviceUpsertInputDto>(input, DeviceUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => DeviceSoftRemoveOutputDto, {
    name: DeviceSoftRemoveDto.metaname, 
    description: DeviceSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => DeviceSoftRemoveInputDto }) 
    input: DeviceSoftRemoveInputDto,

    @GraphQLBodyContext() selection: DeviceSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<DeviceSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => DeviceRemoveOutputDto, {
    name: DeviceRemoveDto.metaname, 
    description: DeviceRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => DeviceRemoveInputDto }) 
    input: DeviceRemoveInputDto,
    
    @GraphQLBodyContext() selection: DeviceRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<DeviceRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => DeviceRecoverOutputDto, {
    name: DeviceRecoverDto.metaname,
    description: DeviceRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => DeviceRecoverInputDto }) 
    input: DeviceRecoverInputDto,

    @GraphQLBodyContext() selection: DeviceRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<DeviceRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: DeviceEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<DeviceEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}