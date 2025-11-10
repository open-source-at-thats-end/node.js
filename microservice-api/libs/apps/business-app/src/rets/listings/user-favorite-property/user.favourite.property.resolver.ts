import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { UserFavouritePropertyService } from './user.favourite.property.service';
import { UserFavouritePropertyEntity } from './entities/user.favourite.property.entity';
import { UserFavouritePropertyFactory } from './user.favourite.property.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { UserFavouritePropertyCreateDto, UserFavouritePropertyCreateInputDto, UserFavouritePropertyCreateOutputDto, UserFavouritePropertyDeleteDto, UserFavouritePropertyDeleteInputDto, UserFavouritePropertyDeleteOutputDto, UserFavouritePropertyFindDto, UserFavouritePropertyFindInputDto, UserFavouritePropertyFindOneByIdDto, UserFavouritePropertyFindOneByIdInputDto, UserFavouritePropertyFindOutputDto, UserFavouritePropertyFindOutputRowsDto, UserFavouritePropertyRecoverDto, UserFavouritePropertyRecoverInputDto, UserFavouritePropertyRecoverOutputDto, UserFavouritePropertyRemoveDto, UserFavouritePropertyRemoveInputDto, UserFavouritePropertyRemoveOutputDto, UserFavouritePropertyRestoreDto, UserFavouritePropertyRestoreInputDto, UserFavouritePropertyRestoreOutputDto, UserFavouritePropertySoftDeleteDto, UserFavouritePropertySoftDeleteInputDto, UserFavouritePropertySoftDeleteInputWhereDto, UserFavouritePropertySoftDeleteOutputDto, UserFavouritePropertySoftRemoveDto, UserFavouritePropertySoftRemoveInputDto, UserFavouritePropertySoftRemoveOutputDto, UserFavouritePropertyUpdateDto, UserFavouritePropertyUpdateInputDto, UserFavouritePropertyUpdateInputSetsDto, UserFavouritePropertyUpdateOutputDto, UserFavouritePropertyUploadDeleteDto, UserFavouritePropertyUploadDeleteInputDto, UserFavouritePropertyUploadDeleteOutputDto, UserFavouritePropertyUploadDto, UserFavouritePropertyUploadInputDto, UserFavouritePropertyUploadOutputDto, UserFavouritePropertyUpsertDto, UserFavouritePropertyUpsertInputDto, UserFavouritePropertyUpsertOutputDto } from './dto/user.favourite.property.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';

@Resolver(() => UserFavouritePropertyEntity)
export class UserFavouritePropertyResolver
{
  constructor(
    protected readonly factory: UserFavouritePropertyFactory,
    protected readonly service: UserFavouritePropertyService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [UserFavouritePropertyUploadOutput], { name:  `${UserFavouritePropertyUploadDto.metaname}`, description: `${UserFavouritePropertyUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => UserFavouritePropertyUploadInputDto }) 
    input: UserFavouritePropertyUploadInputDto,

    @GraphQLBodyContext() selection: UserFavouritePropertyUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserFavouritePropertyUploadOutputDto[]> {
    return await this.service.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [UserFavouritePropertyUploadDeleteOutput], { name:  `${UserFavouritePropertyUploadDeleteDto.metaname}`, description: `${UserFavouritePropertyUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [UserFavouritePropertyUploadDeleteInputDto] }) 
    input: UserFavouritePropertyUploadDeleteInputDto | UserFavouritePropertyUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: UserFavouritePropertyUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserFavouritePropertyUploadDeleteOutputDto[]> {
    return await this.service.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [UserFavouritePropertyCreateOutputDto], {
    name:  `${UserFavouritePropertyCreateDto.metaname}`, 
    description: `${UserFavouritePropertyCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [UserFavouritePropertyCreateInputDto] }) 
    input: UserFavouritePropertyCreateInputDto | UserFavouritePropertyCreateInputDto[],

    @GraphQLBodyContext() selection: UserFavouritePropertyCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<UserFavouritePropertyCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserFavouritePropertyCreateInputDto>(input, UserFavouritePropertyCreateInputDto);
    }
    return this.service.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => UserFavouritePropertyFindOutputDto, {
    name: UserFavouritePropertyFindDto.metaname,
    description: UserFavouritePropertyFindDto.metadesc
  })

  find(
    @Context() ctx: any,

    @Args('filter', {type:() => UserFavouritePropertyFindInputDto}) 
    filter: UserFavouritePropertyFindInputDto,

    @GraphQLBodyContext() selection: UserFavouritePropertyFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserFavouritePropertyFindOutputDto> {
    return this.service.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => UserFavouritePropertyEntity, {
    name: UserFavouritePropertyFindOneByIdDto.metaname, 
    description: UserFavouritePropertyFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavouritePropertyFindOneByIdInputDto }) 
    input: UserFavouritePropertyFindOneByIdInputDto,

    @GraphQLBodyContext() selection: UserFavouritePropertyEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<UserFavouritePropertyEntity> {
    await this.validation.validateArrayInput<UserFavouritePropertyFindOneByIdInputDto>([input], UserFavouritePropertyFindOneByIdInputDto);
    return this.service.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => UserFavouritePropertyUpdateOutputDto, {
    name: UserFavouritePropertyUpdateDto.metaname, 
    description: UserFavouritePropertyUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => UserFavouritePropertyUpdateInputDto}) 
    input: UserFavouritePropertyUpdateInputDto,

    @GraphQLBodyContext() selection: UserFavouritePropertyUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavouritePropertyUpdateOutputDto> {
    await this.validation.validateArrayInput<UserFavouritePropertyUpdateInputSetsDto>([input.sets], UserFavouritePropertyUpdateInputSetsDto);
    return this.service.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => UserFavouritePropertySoftDeleteOutputDto, {
    name: UserFavouritePropertySoftDeleteDto.metaname, 
    description: UserFavouritePropertySoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavouritePropertySoftDeleteInputDto }) 
    input: UserFavouritePropertySoftDeleteInputDto,

    @GraphQLBodyContext() selection: UserFavouritePropertySoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavouritePropertySoftDeleteOutputDto> {
    return this.service.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => UserFavouritePropertyDeleteOutputDto, {
    name: UserFavouritePropertyDeleteDto.metaname, 
    description: UserFavouritePropertyDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavouritePropertyDeleteInputDto }) 
    input: UserFavouritePropertyDeleteInputDto,

    @GraphQLBodyContext() selection: UserFavouritePropertyDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavouritePropertyDeleteOutputDto> {
    return this.service.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => UserFavouritePropertyRestoreOutputDto, {
    name: UserFavouritePropertyRestoreDto.metaname,
    description: UserFavouritePropertyRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavouritePropertyRestoreInputDto }) 
    input: UserFavouritePropertyRestoreInputDto,
    
    @GraphQLBodyContext() selection: UserFavouritePropertyRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavouritePropertyRestoreOutputDto>{
    return this.service.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [UserFavouritePropertyUpsertOutputDto], {
    name:  `${UserFavouritePropertyUpsertDto.metaname}`, 
    description: `${UserFavouritePropertyUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [UserFavouritePropertyUpsertInputDto]}) 
    input: UserFavouritePropertyUpsertInputDto | UserFavouritePropertyUpsertInputDto[],
    
    @GraphQLBodyContext() selection: UserFavouritePropertyUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavouritePropertyUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<UserFavouritePropertyUpsertInputDto>(input, UserFavouritePropertyUpsertInputDto);
    }
    return this.service.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => UserFavouritePropertySoftRemoveOutputDto, {
    name: UserFavouritePropertySoftRemoveDto.metaname, 
    description: UserFavouritePropertySoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavouritePropertySoftRemoveInputDto }) 
    input: UserFavouritePropertySoftRemoveInputDto,

    @GraphQLBodyContext() selection: UserFavouritePropertySoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavouritePropertySoftRemoveOutputDto> {
    return this.service.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => UserFavouritePropertyRemoveOutputDto, {
    name: UserFavouritePropertyRemoveDto.metaname, 
    description: UserFavouritePropertyRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavouritePropertyRemoveInputDto }) 
    input: UserFavouritePropertyRemoveInputDto,
    
    @GraphQLBodyContext() selection: UserFavouritePropertyRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavouritePropertyRemoveOutputDto> {
    return this.service.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => UserFavouritePropertyRecoverOutputDto, {
    name: UserFavouritePropertyRecoverDto.metaname,
    description: UserFavouritePropertyRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => UserFavouritePropertyRecoverInputDto }) 
    input: UserFavouritePropertyRecoverInputDto,

    @GraphQLBodyContext() selection: UserFavouritePropertyRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<UserFavouritePropertyRecoverOutputDto>{
    return this.service.removeEngine.recover(input, selection, info, ctx);
  }


}