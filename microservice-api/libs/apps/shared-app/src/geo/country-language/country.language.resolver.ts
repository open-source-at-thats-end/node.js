 import { Resolver, Query, Mutation, Args, Int, Context, Info, ResolveReference, Parent } from '@nestjs/graphql';
 import { CountryLanguageService } from './country.language.service';
 import { CountryLanguageEntity } from './entities/country.language.entity';
 import { CountryLanguageFactory } from './country.language.factory';
 import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
 import { CountryLanguageUploadOutputDto, CountryLanguageUploadDto, CountryLanguageUploadInputDto, CountryLanguageUploadDeleteOutputDto, CountryLanguageUploadDeleteDto, CountryLanguageUploadDeleteInputDto, CountryLanguageCreateDto, CountryLanguageCreateInputDto, CountryLanguageCreateOutputDto, CountryLanguageDeleteDto, CountryLanguageDeleteInputDto, CountryLanguageDeleteOutputDto, CountryLanguageFindDto, CountryLanguageFindInputDto, CountryLanguageFindOneByIdDto, CountryLanguageFindOneByIdInputDto, CountryLanguageFindOutputDto, CountryLanguageFindOutputRowsDto, CountryLanguageRecoverDto, CountryLanguageRecoverInputDto, CountryLanguageRecoverOutputDto, CountryLanguageRemoveDto, CountryLanguageRemoveInputDto, CountryLanguageRemoveOutputDto, CountryLanguageRestoreDto, CountryLanguageRestoreInputDto, CountryLanguageRestoreOutputDto, CountryLanguageSoftDeleteDto, CountryLanguageSoftDeleteInputDto, CountryLanguageSoftDeleteInputWhereDto, CountryLanguageSoftDeleteOutputDto, CountryLanguageSoftRemoveDto, CountryLanguageSoftRemoveInputDto, CountryLanguageSoftRemoveOutputDto, CountryLanguageUpdateDto, CountryLanguageUpdateInputDto, CountryLanguageUpdateInputSetsDto, CountryLanguageUpdateOutputDto, CountryLanguageUpsertDto, CountryLanguageUpsertInputDto, CountryLanguageUpsertOutputDto } from './dto/country.language.dto';
 import { GraphQLResolveInfo } from 'graphql';
 import { GraphQLUpload } from 'graphql-upload-ts';
 import { Upload } from '@libs/library-app';
 
 @Resolver(() => CountryLanguageEntity)
 export class CountryLanguageResolver
 {
   constructor(
     protected readonly factory: CountryLanguageFactory,
     protected readonly service: CountryLanguageService,
     private readonly validation: DataValidationPipe
   ) {
   }
 
   // ████ upload() ██████████████████████████████████████
 
   //@Mutation(() => [CountryLanguageUploadOutput], { name:  `${CountryLanguageUploadDto.metaname}`, description: `${CountryLanguageUploadDto.metadesc}` })
   public async upload(
     @Context() ctx: any,
 
     @Args('attachment',{type: () => [GraphQLUpload]})
     attachment: Upload | Upload[],
 
     @Args('input', { type: () => CountryLanguageUploadInputDto }) 
     input: CountryLanguageUploadInputDto,
 
     @GraphQLBodyContext() selection: CountryLanguageUploadOutputDto,
     @Info() info: GraphQLResolveInfo 
   ): Promise<CountryLanguageUploadOutputDto[]> {
     return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
   }
 
   // ████ uploadDelete() ████████████████████████████████
 
   //@Mutation(() => [CountryLanguageUploadDeleteOutput], { name:  `${CountryLanguageUploadDeleteDto.metaname}`, description: `${CountryLanguageUploadDeleteDto.metadesc}` })
   public async uploadDelete(
     @Context() ctx: any,
 
     @Args('input', { type: () => [CountryLanguageUploadDeleteInputDto] }) 
     input: CountryLanguageUploadDeleteInputDto | CountryLanguageUploadDeleteInputDto[],
 
     @GraphQLBodyContext() selection: CountryLanguageUploadDeleteOutputDto,
     @Info() info: GraphQLResolveInfo 
   ): Promise<CountryLanguageUploadDeleteOutputDto[]> {
     return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
   }
 
   // ████ create() ██████████████████████████████████████
 
   @Mutation(() => [CountryLanguageCreateOutputDto], {
     name:  `${CountryLanguageCreateDto.metaname}`, 
     description: `${CountryLanguageCreateDto.metadesc}`
   })
   async create(
     @Context() ctx: any,
 
     @Args('input', { type: () => [CountryLanguageCreateInputDto] }) 
     input: CountryLanguageCreateInputDto | CountryLanguageCreateInputDto[],
 
     @GraphQLBodyContext() selection: CountryLanguageCreateOutputDto,
     @Info() info: GraphQLResolveInfo 
   ): Promise<CountryLanguageCreateOutputDto[]> {
     // perform validation for multiple array input 
     // this is because a GlobalValidationPipe do not validate array by default
     // if you suspect single entry is also not validating remove condition iat below
     if(Array.isArray(input)){
       await this.validation.validateArrayInput<CountryLanguageCreateInputDto>(input, CountryLanguageCreateInputDto);
     }
     return this.factory.createEngine.create(input, selection, info, ctx);
   }
 
   // ████ find() ██████████████████████████████████████
 
   @Query(() => CountryLanguageFindOutputDto, {
     name: CountryLanguageFindDto.metaname,
     description: CountryLanguageFindDto.metadesc
   })
   find(
     @Context() ctx: any,
 
     @Args('filter', {type:() => CountryLanguageFindInputDto}) 
     filter: CountryLanguageFindInputDto,
 
     @GraphQLBodyContext() selection: CountryLanguageFindOutputDto,
     @Info() info: GraphQLResolveInfo
   ):Promise<CountryLanguageFindOutputDto> {
     return this.factory.findEngine.find(filter, selection, info, ctx);
   }
 
   // ████ findOneById() ██████████████████████████████████████
 
   @Query(() => CountryLanguageEntity, {
     name: CountryLanguageFindOneByIdDto.metaname, 
     description: CountryLanguageFindOneByIdDto.metaname
   })
   async findOneById(
     @Context() ctx: any,
 
     @Args('input', { type: () => CountryLanguageFindOneByIdInputDto }) 
     input: CountryLanguageFindOneByIdInputDto,
 
     @GraphQLBodyContext() selection: CountryLanguageEntity,
     @Info() info: GraphQLResolveInfo
   ):Promise<CountryLanguageEntity> {
     await this.validation.validateArrayInput<CountryLanguageFindOneByIdInputDto>([input], CountryLanguageFindOneByIdInputDto);
     return this.factory.findEngine.findOneById(input, selection, info, ctx);
   }
 
   // ████ update() ██████████████████████████████████████
 
   @Mutation(() => CountryLanguageUpdateOutputDto, {
     name: CountryLanguageUpdateDto.metaname, 
     description: CountryLanguageUpdateDto.metadesc
   })
   async update(
     @Context() ctx: any,
 
     @Args('input',{ type: () => CountryLanguageUpdateInputDto}) 
     input: CountryLanguageUpdateInputDto,
 
     @GraphQLBodyContext() selection: CountryLanguageUpdateOutputDto,
     @Info() info: GraphQLResolveInfo
   ): Promise<CountryLanguageUpdateOutputDto> {
     await this.validation.validateArrayInput<CountryLanguageUpdateInputSetsDto>([input.sets], CountryLanguageUpdateInputSetsDto);
     return this.factory.updateEngine.update(input, selection, info, ctx);
   }
 
   // ████ softDelete() ██████████████████████████████████████
 
   @Mutation(() => CountryLanguageSoftDeleteOutputDto, {
     name: CountryLanguageSoftDeleteDto.metaname, 
     description: CountryLanguageSoftDeleteDto.metadesc
   })
   async softDelete(
     @Context() ctx: any,
 
     @Args('input', { type: () => CountryLanguageSoftDeleteInputDto }) 
     input: CountryLanguageSoftDeleteInputDto,
 
     @GraphQLBodyContext() selection: CountryLanguageSoftDeleteOutputDto,
     @Info() info: GraphQLResolveInfo
   ): Promise<CountryLanguageSoftDeleteOutputDto> {
     return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
   }
 
   // ████ delete() ██████████████████████████████████████
 
   @Mutation(() => CountryLanguageDeleteOutputDto, {
     name: CountryLanguageDeleteDto.metaname, 
     description: CountryLanguageDeleteDto.metadesc
   })
   async delete(
     @Context() ctx: any,
 
     @Args('input', { type: () => CountryLanguageDeleteInputDto }) 
     input: CountryLanguageDeleteInputDto,
 
     @GraphQLBodyContext() selection: CountryLanguageDeleteOutputDto,
     @Info() info: GraphQLResolveInfo
   ): Promise<CountryLanguageDeleteOutputDto> {
     return this.factory.deleteEngine.delete(input, selection, info, ctx);
   }
 
   // ████ restore() ██████████████████████████████████████
 
   @Mutation(() => CountryLanguageRestoreOutputDto, {
     name: CountryLanguageRestoreDto.metaname,
     description: CountryLanguageRestoreDto.metadesc
   })
   restore(
     @Context() ctx: any,
 
     @Args('input', { type: () => CountryLanguageRestoreInputDto }) 
     input: CountryLanguageRestoreInputDto,
     
     @GraphQLBodyContext() selection: CountryLanguageRestoreOutputDto,
     @Info() info: GraphQLResolveInfo
   ): Promise<CountryLanguageRestoreOutputDto>{
     return this.factory.deleteEngine.restore(input, selection, info, ctx);
   }
 
   // ████ upsert() ██████████████████████████████████████
 
   @Mutation(() => [CountryLanguageUpsertOutputDto], {
     name:  `${CountryLanguageUpsertDto.metaname}`, 
     description: `${CountryLanguageUpsertDto.metadesc}`,
   })
   async upsert(
     @Context() ctx: any,
 
     @Args('input',{ type: () => [CountryLanguageUpsertInputDto]}) 
     input: CountryLanguageUpsertInputDto | CountryLanguageUpsertInputDto[],
     
     @GraphQLBodyContext() selection: CountryLanguageUpsertOutputDto,
     @Info() info: GraphQLResolveInfo
   ): Promise<CountryLanguageUpsertOutputDto[]> {
     if(Array.isArray(input)){
       await this.validation.validateArrayInput<CountryLanguageUpsertInputDto>(input, CountryLanguageUpsertInputDto);
     }
     return this.factory.upsertEngine.upsert(input, selection, info, ctx);
   }
 
   // ████ softRemove() ██████████████████████████████████████
 
   @Mutation(() => CountryLanguageSoftRemoveOutputDto, {
     name: CountryLanguageSoftRemoveDto.metaname, 
     description: CountryLanguageSoftRemoveDto.metadesc
   })
   async softRemove(
     @Context() ctx: any,
 
     @Args('input', { type: () => CountryLanguageSoftRemoveInputDto }) 
     input: CountryLanguageSoftRemoveInputDto,
 
     @GraphQLBodyContext() selection: CountryLanguageSoftRemoveOutputDto,
     @Info() info: GraphQLResolveInfo
   ): Promise<CountryLanguageSoftRemoveOutputDto> {
     return this.factory.removeEngine.softRemove(input, selection, info, ctx);
   }
 
   // ████ remove() ██████████████████████████████████████
 
   @Mutation(() => CountryLanguageRemoveOutputDto, {
     name: CountryLanguageRemoveDto.metaname, 
     description: CountryLanguageRemoveDto.metadesc
   })
   async remove(
     @Context() ctx: any,
 
     @Args('input', { type: () => CountryLanguageRemoveInputDto }) 
     input: CountryLanguageRemoveInputDto,
     
     @GraphQLBodyContext() selection: CountryLanguageRemoveOutputDto,
     @Info() info: GraphQLResolveInfo
   ): Promise<CountryLanguageRemoveOutputDto> {
     return this.factory.removeEngine.remove(input, selection, info, ctx);
   }
 
   // ████ recover() ██████████████████████████████████████
 
   @Mutation(() => CountryLanguageRecoverOutputDto, {
     name: CountryLanguageRecoverDto.metaname,
     description: CountryLanguageRemoveDto.metadesc
   })
   async recover(
     @Context() ctx: any,
 
     @Args('input', { type: () => CountryLanguageRecoverInputDto }) 
     input: CountryLanguageRecoverInputDto,
 
     @GraphQLBodyContext() selection: CountryLanguageRecoverOutputDto,
     @Info() info: GraphQLResolveInfo
   ): Promise<CountryLanguageRecoverOutputDto>{
     return this.factory.removeEngine.recover(input, selection, info, ctx);
   }
 
 
   // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████
 
   @ResolveReference()
   async resolveReference(
     @Parent() entity: CountryLanguageEntity,
     @Context() ctx: any,
     @Info() info: GraphQLResolveInfo,
   ):Promise<CountryLanguageEntity | null> {
     return await this.factory.findEngine.resolveReference(entity, info, ctx);
   }
 }