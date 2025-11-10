import { Directive, Field, InputType, ObjectType, PartialType } from "@nestjs/graphql";
import { DateTime } from "@libs/library-app";
import { ApiEndpointAuthDto } from "./api.endpoint.auth.dto";
import { ApiEndpointAuthEntityMeta as meta } from "../entities/api.endpoint.auth.entity";
import { Exclude } from "class-transformer";

export class GraphSignupEntityDto extends PartialType(ApiEndpointAuthDto) {
    static metaname: string = `GraphSignup`;
    static metadesc: string = `Signup to get access to the application data.`;
}
/**
 * █████████████████████████████████████████████████████████████
 * █ INPUT DTO █████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

@InputType()
export class GraphSignupInputDto extends GraphSignupEntityDto {
    @Field(() => String, {nullable: false, description: meta.username.desc})
    declare username: string;

    @Field(() => String, {nullable: false, description: `${meta.identify.desc} ${meta.identify.validation?.matchRegExMsg}`})
    declare identify: string;

    @Field(() => String, {nullable: false, description: meta.email.desc})
    declare email: string;
}

/**
 * █████████████████████████████████████████████████████████████
 * █ OUTPUT DTO ████████████████████████████████████████████████
 * █████████████████████████████████████████████████████████████
**/

@ObjectType()
@Directive('@shareable')
export class GraphSignupOutputDto extends GraphSignupEntityDto {
    @Field(() => String, {nullable: true, description: meta.username.desc})
    declare username?: string;

    @Field(() => String, {nullable: true, description: meta.email.desc})
    declare email?: string;

    @Field(() => String, {nullable: true, description: meta.identify.desc})
    declare jwt_access_token?: string;

    @Field(() => String, {nullable: true, description: meta.jwt_refresh_token.desc})
    declare jwt_refresh_token?: string;

    @Field(() => DateTime, {nullable: true, description: meta.created.desc})
    declare created?: Date;
}
