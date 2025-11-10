import { Resolver, Query, Mutation, Args, Int, Info, Context, ResolveReference, Parent } from '@nestjs/graphql';
import { EmailTemplateService } from './email.template.service';
import { EmailTemplateEntity } from './entities/email.template.entity';
import { EmailTemplateFactory } from './email.template.factory';
import { GraphQLBodyContext, DataValidationPipe } from '@libs/library-app';
import { EmailTemplateUploadOutputDto, EmailTemplateUploadDto, EmailTemplateUploadInputDto, EmailTemplateUploadDeleteOutputDto, EmailTemplateUploadDeleteDto, EmailTemplateUploadDeleteInputDto, EmailTemplateCreateDto, EmailTemplateCreateInputDto, EmailTemplateCreateOutputDto, EmailTemplateDeleteDto, EmailTemplateDeleteInputDto, EmailTemplateDeleteOutputDto, EmailTemplateFindDto, EmailTemplateFindInputDto, EmailTemplateFindOneByIdDto, EmailTemplateFindOneByIdInputDto, EmailTemplateFindOutputDto, EmailTemplateFindOutputRowsDto, EmailTemplateRecoverDto, EmailTemplateRecoverInputDto, EmailTemplateRecoverOutputDto, EmailTemplateRemoveDto, EmailTemplateRemoveInputDto, EmailTemplateRemoveOutputDto, EmailTemplateRestoreDto, EmailTemplateRestoreInputDto, EmailTemplateRestoreOutputDto, EmailTemplateSoftDeleteDto, EmailTemplateSoftDeleteInputDto, EmailTemplateSoftDeleteInputWhereDto, EmailTemplateSoftDeleteOutputDto, EmailTemplateSoftRemoveDto, EmailTemplateSoftRemoveInputDto, EmailTemplateSoftRemoveOutputDto, EmailTemplateUpdateDto, EmailTemplateUpdateInputDto, EmailTemplateUpdateInputSetsDto, EmailTemplateUpdateOutputDto, EmailTemplateUpsertDto, EmailTemplateUpsertInputDto, EmailTemplateUpsertOutputDto } from './dto/email.template.dto';
import { GraphQLResolveInfo } from 'graphql';
import { GraphQLUpload } from 'graphql-upload-ts';
import { Upload } from '@libs/library-app';


@Resolver(() => EmailTemplateEntity)
export class EmailTemplateResolver
{
  constructor(
    protected readonly factory: EmailTemplateFactory,
    protected readonly service: EmailTemplateService,
    private readonly validation: DataValidationPipe
  ) {
  }

  // ████ upload() ██████████████████████████████████████

  //@Mutation(() => [EmailTemplateUploadOutput], { name:  `${EmailTemplateUploadDto.metaname}`, description: `${EmailTemplateUploadDto.metadesc}` })
  public async upload(
    @Context() ctx: any,

    @Args('attachment',{type: () => [GraphQLUpload]})
    attachment: Upload | Upload[],

    @Args('input', { type: () => EmailTemplateUploadInputDto }) 
    input: EmailTemplateUploadInputDto,

    @GraphQLBodyContext() selection: EmailTemplateUploadOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<EmailTemplateUploadOutputDto[]> {
    return await this.factory.uploadEngine.upload(attachment, input, selection, info, ctx);
  }

  // ████ uploadDelete() ████████████████████████████████

  //@Mutation(() => [EmailTemplateUploadDeleteOutput], { name:  `${EmailTemplateUploadDeleteDto.metaname}`, description: `${EmailTemplateUploadDeleteDto.metadesc}` })
  public async uploadDelete(
    @Context() ctx: any,

    @Args('input', { type: () => [EmailTemplateUploadDeleteInputDto] }) 
    input: EmailTemplateUploadDeleteInputDto | EmailTemplateUploadDeleteInputDto[],

    @GraphQLBodyContext() selection: EmailTemplateUploadDeleteOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<EmailTemplateUploadDeleteOutputDto[]> {
    return await this.factory.uploadEngine.uploadDelete(input, selection, info, ctx);
  }

  // ████ create() ██████████████████████████████████████

  @Mutation(() => [EmailTemplateCreateOutputDto], {
    name:  `${EmailTemplateCreateDto.metaname}`, 
    description: `${EmailTemplateCreateDto.metadesc}`
  })
  async create(
    @Context() ctx: any,

    @Args('input', { type: () => [EmailTemplateCreateInputDto] }) 
    input: EmailTemplateCreateInputDto | EmailTemplateCreateInputDto[],

    @GraphQLBodyContext() selection: EmailTemplateCreateOutputDto,
    @Info() info: GraphQLResolveInfo 
  ): Promise<EmailTemplateCreateOutputDto[]> {
    // perform validation for multiple array input 
    // this is because a GlobalValidationPipe do not validate array by default
    // if you suspect single entry is also not validating remove condition iat below
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<EmailTemplateCreateInputDto>(input, EmailTemplateCreateInputDto);
    }
    return this.factory.createEngine.create(input, selection, info, ctx);
  }

  // ████ find() ██████████████████████████████████████

  @Query(() => EmailTemplateFindOutputDto, {
    name: EmailTemplateFindDto.metaname,
    description: EmailTemplateFindDto.metadesc
  })
  find(
    @Context() ctx: any,

    @Args('filter', {type:() => EmailTemplateFindInputDto}) 
    filter: EmailTemplateFindInputDto,

    @GraphQLBodyContext() selection: EmailTemplateFindOutputDto,
    @Info() info: GraphQLResolveInfo
  ):Promise<EmailTemplateFindOutputDto> {
    return this.factory.findEngine.find(filter, selection, info, ctx);
  }

  // ████ findOneById() ██████████████████████████████████████

  @Query(() => EmailTemplateEntity, {
    name: EmailTemplateFindOneByIdDto.metaname, 
    description: EmailTemplateFindOneByIdDto.metaname
  })
  async findOneById(
    @Context() ctx: any,

    @Args('input', { type: () => EmailTemplateFindOneByIdInputDto }) 
    input: EmailTemplateFindOneByIdInputDto,

    @GraphQLBodyContext() selection: EmailTemplateEntity,
    @Info() info: GraphQLResolveInfo
  ):Promise<EmailTemplateEntity> {
    await this.validation.validateArrayInput<EmailTemplateFindOneByIdInputDto>([input], EmailTemplateFindOneByIdInputDto);
    return this.factory.findEngine.findOneById(input, selection, info, ctx);
  }

  // ████ update() ██████████████████████████████████████

  @Mutation(() => EmailTemplateUpdateOutputDto, {
    name: EmailTemplateUpdateDto.metaname, 
    description: EmailTemplateUpdateDto.metadesc
  })
  async update(
    @Context() ctx: any,

    @Args('input',{ type: () => EmailTemplateUpdateInputDto}) 
    input: EmailTemplateUpdateInputDto,

    @GraphQLBodyContext() selection: EmailTemplateUpdateOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateUpdateOutputDto> {
    await this.validation.validateArrayInput<EmailTemplateUpdateInputSetsDto>([input.sets], EmailTemplateUpdateInputSetsDto);
    return this.factory.updateEngine.update(input, selection, info, ctx);
  }

  // ████ softDelete() ██████████████████████████████████████

  @Mutation(() => EmailTemplateSoftDeleteOutputDto, {
    name: EmailTemplateSoftDeleteDto.metaname, 
    description: EmailTemplateSoftDeleteDto.metadesc
  })
  async softDelete(
    @Context() ctx: any,

    @Args('input', { type: () => EmailTemplateSoftDeleteInputDto }) 
    input: EmailTemplateSoftDeleteInputDto,

    @GraphQLBodyContext() selection: EmailTemplateSoftDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateSoftDeleteOutputDto> {
    return this.factory.deleteEngine.softDelete(input, selection, info, ctx);
  }

  // ████ delete() ██████████████████████████████████████

  @Mutation(() => EmailTemplateDeleteOutputDto, {
    name: EmailTemplateDeleteDto.metaname, 
    description: EmailTemplateDeleteDto.metadesc
  })
  async delete(
    @Context() ctx: any,

    @Args('input', { type: () => EmailTemplateDeleteInputDto }) 
    input: EmailTemplateDeleteInputDto,

    @GraphQLBodyContext() selection: EmailTemplateDeleteOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateDeleteOutputDto> {
    return this.factory.deleteEngine.delete(input, selection, info, ctx);
  }

  // ████ restore() ██████████████████████████████████████

  @Mutation(() => EmailTemplateRestoreOutputDto, {
    name: EmailTemplateRestoreDto.metaname,
    description: EmailTemplateRestoreDto.metadesc
  })
  restore(
    @Context() ctx: any,

    @Args('input', { type: () => EmailTemplateRestoreInputDto }) 
    input: EmailTemplateRestoreInputDto,
    
    @GraphQLBodyContext() selection: EmailTemplateRestoreOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateRestoreOutputDto>{
    return this.factory.deleteEngine.restore(input, selection, info, ctx);
  }

  // ████ upsert() ██████████████████████████████████████

  @Mutation(() => [EmailTemplateUpsertOutputDto], {
    name:  `${EmailTemplateUpsertDto.metaname}`, 
    description: `${EmailTemplateUpsertDto.metadesc}`,
  })
  async upsert(
    @Context() ctx: any,

    @Args('input',{ type: () => [EmailTemplateUpsertInputDto]}) 
    input: EmailTemplateUpsertInputDto | EmailTemplateUpsertInputDto[],
    
    @GraphQLBodyContext() selection: EmailTemplateUpsertOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateUpsertOutputDto[]> {
    if(Array.isArray(input)){
      await this.validation.validateArrayInput<EmailTemplateUpsertInputDto>(input, EmailTemplateUpsertInputDto);
    }
    return this.factory.upsertEngine.upsert(input, selection, info, ctx);
  }

  // ████ softRemove() ██████████████████████████████████████

  @Mutation(() => EmailTemplateSoftRemoveOutputDto, {
    name: EmailTemplateSoftRemoveDto.metaname, 
    description: EmailTemplateSoftRemoveDto.metadesc
  })
  async softRemove(
    @Context() ctx: any,

    @Args('input', { type: () => EmailTemplateSoftRemoveInputDto }) 
    input: EmailTemplateSoftRemoveInputDto,

    @GraphQLBodyContext() selection: EmailTemplateSoftRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateSoftRemoveOutputDto> {
    return this.factory.removeEngine.softRemove(input, selection, info, ctx);
  }

  // ████ remove() ██████████████████████████████████████

  @Mutation(() => EmailTemplateRemoveOutputDto, {
    name: EmailTemplateRemoveDto.metaname, 
    description: EmailTemplateRemoveDto.metadesc
  })
  async remove(
    @Context() ctx: any,

    @Args('input', { type: () => EmailTemplateRemoveInputDto }) 
    input: EmailTemplateRemoveInputDto,
    
    @GraphQLBodyContext() selection: EmailTemplateRemoveOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateRemoveOutputDto> {
    return this.factory.removeEngine.remove(input, selection, info, ctx);
  }

  // ████ recover() ██████████████████████████████████████

  @Mutation(() => EmailTemplateRecoverOutputDto, {
    name: EmailTemplateRecoverDto.metaname,
    description: EmailTemplateRemoveDto.metadesc
  })
  async recover(
    @Context() ctx: any,

    @Args('input', { type: () => EmailTemplateRecoverInputDto }) 
    input: EmailTemplateRecoverInputDto,

    @GraphQLBodyContext() selection: EmailTemplateRecoverOutputDto,
    @Info() info: GraphQLResolveInfo
  ): Promise<EmailTemplateRecoverOutputDto>{
    return this.factory.removeEngine.recover(input, selection, info, ctx);
  }


  // ████ SUPERGRAPH_FOREIGN_RELATION ██████████████████████████████████████

  @ResolveReference()
  async resolveReference(
    @Parent() entity: EmailTemplateEntity,
    @Context() ctx: any,
    @Info() info: GraphQLResolveInfo,
  ):Promise<EmailTemplateEntity | null> {
    return await this.factory.findEngine.resolveReference(entity, info, ctx);
  }
}