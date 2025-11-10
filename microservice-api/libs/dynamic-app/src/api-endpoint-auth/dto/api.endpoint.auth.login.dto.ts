import { Directive, Field, InputType, ObjectType } from "@nestjs/graphql";
import { ApiEndpointAuthDto } from "./api.endpoint.auth.dto";
import { ApiEndpointAuthEntityMeta as meta } from "../entities/api.endpoint.auth.entity";
/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ INPUT DTO ██████████████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

@InputType()
export class GraphLoginInputDto extends ApiEndpointAuthDto {
    @Field(() => String, { nullable: false, description: meta.username.desc })
    declare username: string;

    @Field(() => String, {nullable: false, description: meta.identify.desc})
    declare identify: string;
}

/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ OUTPUT DTO █████████████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
**/

@ObjectType()
@Directive('@shareable')
export class GraphLoginOutputDto extends ApiEndpointAuthDto {
    @Field(() => String, {nullable: true, description: meta.username.desc})
    declare username?: string;

    @Field(() => String, {nullable: true, description: meta.email.desc})
    declare email?: string;

    @Field(() => String, {nullable: true, description: meta.jwt_access_token.desc})
    declare jwt_access_token?: string; 

    @Field(() => String, {nullable: true, description: meta.jwt_refresh_token.desc})
    declare jwt_refresh_token?: string;
}
