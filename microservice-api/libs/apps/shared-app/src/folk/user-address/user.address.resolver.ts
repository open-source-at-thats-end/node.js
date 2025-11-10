import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { UserAddressService } from './user.address.service';
import { UserAddressEntity } from './entities/user.address.entity';
import { UserAddressFactory } from './user.address.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { UserAddressUploadOutputDto, UserAddressUploadDto, UserAddressUploadInputDto, UserAddressUploadDeleteOutputDto, UserAddressUploadDeleteDto, UserAddressUploadDeleteInputDto, UserAddressCreateDto, UserAddressCreateInputDto, UserAddressCreateOutputDto, UserAddressDeleteDto, UserAddressDeleteInputDto, UserAddressDeleteOutputDto, UserAddressFindDto, UserAddressFindInputDto, UserAddressFindOneByIdDto, UserAddressFindOneByIdInputDto, UserAddressFindOutputDto, UserAddressFindOutputRowsDto, UserAddressRecoverDto, UserAddressRecoverInputDto, UserAddressRecoverOutputDto, UserAddressRemoveDto, UserAddressRemoveInputDto, UserAddressRemoveOutputDto, UserAddressRestoreDto, UserAddressRestoreInputDto, UserAddressRestoreOutputDto, UserAddressSoftDeleteDto, UserAddressSoftDeleteInputDto, UserAddressSoftDeleteInputWhereDto, UserAddressSoftDeleteOutputDto, UserAddressSoftRemoveDto, UserAddressSoftRemoveInputDto, UserAddressSoftRemoveOutputDto, UserAddressUpdateDto, UserAddressUpdateInputDto, UserAddressUpdateInputSetsDto, UserAddressUpdateOutputDto, UserAddressUpsertDto, UserAddressUpsertInputDto, UserAddressUpsertOutputDto } from './dto/user.address.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => UserAddressEntity)
export class UserAddressResolver
{
  constructor(
    protected readonly factory: UserAddressFactory,
    protected readonly service: UserAddressService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [UserAddressUploadOutput], { name:  `${UserAddressUploadDto.metaname}`, description: `${UserAddressUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserAddressUploadInputDto }) 
    input: UserAddressUploadInputDto,

    @GraphQLBodyContext() selection: UserAddressUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserAddressUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [UserAddressUploadDeleteOutput], { name:  `${UserAddressUploadDeleteDto.metaname}`, description: `${UserAddressUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserAddressUploadDeleteInputDto] }) 
    input: UserAddressUploadDeleteInputDto | UserAddressUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserAddressUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserAddressUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserAddressCreateOutputDto], {
    name:  `${UserAddressCreateDto.metaname}`, 
    description: `${UserAddressCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserAddressCreateInputDto] }) 
    input: UserAddressCreateInputDto | UserAddressCreateInputDto[],

    @GraphQLBodyContext() selection: UserAddressCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserAddressCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserAddressCreateInputDto>(input, UserAddressCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserAddressFindOutputDto, {
    name: UserAddressFindDto.metaname,
    description: UserAddressFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserAddressFindInputDto}) 
    filter: UserAddressFindInputDto,

    @GraphQLBodyContext() selection: UserAddressFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserAddressFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserAddressEntity, {
    name: UserAddressFindOneByIdDto.metaname, 
    description: UserAddressFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserAddressFindOneByIdInputDto }) 
    input: UserAddressFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserAddressEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserAddressEntity> {
    await this.validation.validateArrayInput<UserAddressFindOneByIdInputDto>([input], UserAddressFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserAddressUpdateOutputDto, {
    name: UserAddressUpdateDto.metaname, 
    description: UserAddressUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserAddressUpdateInputDto}) 
    input: UserAddressUpdateInputDto,

    @GraphQLBodyContext() selection: UserAddressUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAddressUpdateOutputDto> {
    await this.validation.validateArrayInput<UserAddressUpdateInputSetsDto>([input.sets], UserAddressUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserAddressSoftDeleteOutputDto, {
    name: UserAddressSoftDeleteDto.metaname, 
    description: UserAddressSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserAddressSoftDeleteInputDto }) 
    input: UserAddressSoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserAddressSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAddressSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserAddressDeleteOutputDto, {
    name: UserAddressDeleteDto.metaname, 
    description: UserAddressDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserAddressDeleteInputDto }) 
    input: UserAddressDeleteInputDto,

    @GraphQLBodyContext() selection: UserAddressDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAddressDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserAddressRestoreOutputDto, {
    name: UserAddressRestoreDto.metaname,
    description: UserAddressRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserAddressRestoreInputDto }) 
    input: UserAddressRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserAddressRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAddressRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserAddressUpsertOutputDto], {
    name:  `${UserAddressUpsertDto.metaname}`, 
    description: `${UserAddressUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserAddressUpsertInputDto]}) 
    input: UserAddressUpsertInputDto | UserAddressUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserAddressUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAddressUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserAddressUpsertInputDto>(input, UserAddressUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserAddressSoftRemoveOutputDto, {
    name: UserAddressSoftRemoveDto.metaname, 
    description: UserAddressSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserAddressSoftRemoveInputDto }) 
    input: UserAddressSoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserAddressSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAddressSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserAddressRemoveOutputDto, {
    name: UserAddressRemoveDto.metaname, 
    description: UserAddressRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserAddressRemoveInputDto }) 
    input: UserAddressRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserAddressRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAddressRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserAddressRecoverOutputDto, {
    name: UserAddressRecoverDto.metaname,
    description: UserAddressRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserAddressRecoverInputDto }) 
    input: UserAddressRecoverInputDto,

    @GraphQLBodyContext() selection: UserAddressRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserAddressRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: UserAddressEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<UserAddressEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }

}