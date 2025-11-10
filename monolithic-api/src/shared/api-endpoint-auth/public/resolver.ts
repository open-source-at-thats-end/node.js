import { Query, Resolver } from "@nestjs/graphql";
import { ApiEndpointAuthEntity } from "./entity";
import { ApiEndpointAuthPublicService } from "./service";
import { now } from 'lodash';

@Resolver(() => ApiEndpointAuthEntity)
export class ApiEndpointAuthPublicResolver {
  constructor(private readonly service: ApiEndpointAuthPublicService) {}

  @Query(() => String, {
    name: 'HelloGraph',
    description: 'Testing query' 
  })
  hello(): string {

    const result = new Date(now())
    return `Hello API user, this is the enterprise application, and you are using Graphql API service. Have a nice day! ${result}`;
  }
}