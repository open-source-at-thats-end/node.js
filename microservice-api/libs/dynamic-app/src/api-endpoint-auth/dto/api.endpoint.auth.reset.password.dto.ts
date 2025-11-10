import { Directive, Field, InputType, ObjectType } from "@nestjs/graphql";
import { DateTime } from "@libs/library-app";
import { ApiEndpointAuthDto } from "./api.endpoint.auth.dto";
import { ApiEndpointAuthEntityMeta as meta } from "../entities/api.endpoint.auth.entity";

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ INPUT DTO ██████████████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

@InputType()
export class GraphResetPasswordInputDto extends ApiEndpointAuthDto {
    @Field(() => String, {nullable: false, description: meta.username.desc})
    declare username: string;

    @Field(() => String, {nullable: false, description: `${meta.identify.desc} ${meta.identify.validation?.matchRegExMsg}`})
    declare identify: string;

    @Field(() => String, {nullable: false, description: meta.jwt_refresh_token.desc})
    declare jwt_refresh_token: string;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ OUTPUT DTO █████████████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

@ObjectType()
@Directive('@shareable')
export class GraphResetPasswordOutputDto extends ApiEndpointAuthDto {
    @Field(() => String, {nullable: true, description: meta.username.desc})
    declare username?: string;

    @Field(() => String, {nullable: true, description: meta.email.desc})
    declare email?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    declare created?: Date;

    @Field(() => DateTime, {nullable: true, description: meta.updated.desc})
    declare updated?: Date;
}
