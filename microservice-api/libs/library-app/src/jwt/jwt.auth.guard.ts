import { createParamDecorator, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfService } from "../conf/conf.service";
import { LogService } from "../log/log.service";
import { ApiEndpointAuthJwtService } from "./api.endpoint.auth.jwt.service";
import { JWTAuthGuardApiEnpointAuthUserPayload, JWTTokenPayload } from "./api.endpoint.auth.jwt.provider";
import { GqlExecutionContext, GraphQLExecutionContext } from "@nestjs/graphql";
import { LogStaticService } from "../log/log.static.service";
import { UserAuthenticationJwtService } from "./user.auth.jwt.service";
import { JWTTokenUserDataType, JWTUserAuthTokenPayload } from "./user.auth.jwt.provider";


@Injectable()
export class JwtAuthGuard{
    private readonly gqlIntrospectionReqName: string = 'IntrospectionQuery';
    constructor(
        private readonly apiEndpointAuthJwt: ApiEndpointAuthJwtService,
        private readonly userAuthJwt: UserAuthenticationJwtService,
        private readonly confService: ConfService,
        private readonly logService: LogService
    ){

    }    
    /**
     * Checks if the given query/request is a public endpoint.
     * Public enpoints will be excluded from JWT authentication.
     *
     * @param {object} query - The query object to check.
     * @param {string} query.query - The query string to check against the public endpoints.
     * @return {boolean} - Returns true if the query is a public endpoint, false otherwise.
     */
    private isPublicEndPoint({ query }: any): boolean{
        const pubEp = this.confService.publicEndPoint;
        return pubEp.some(action => query?.includes(action))
    }
    /**
     * Checks if the given operation name is the introspection query.
     * GraphQL send request at every second to update sanbox schema.
     * IntrospectionQuery request no need to autheticate so we can ignore it
     *
     * @param {object} options - The options object.
     * @param {string} options.operationName - The name of the operation to check.
     * @return {boolean} Returns true if the operation name is the introspection query, false otherwise.
     */
    private isIntrospectionQuery({ operationName }: any): boolean{
        return operationName === this.gqlIntrospectionReqName;
    }
    /**
     * Checks if the given body should be authenticated.
     * We have mix of requests such as public endpoint, GQL IntrospectionQuery and other as needed
     *
     * @param {any} body - The body object to check.
     * @return {void} This function does not return a value.
     */
    private shouldAuthenticate(body: any): boolean{
        return !this.isIntrospectionQuery(body) && !this.isPublicEndPoint(body)
    }
    async GraphQLStatefulUserAuthData({req, res}: any): Promise<JWTTokenUserDataType | null>{
        const bearer = req?.headers?.statefulauthorization;
        if(bearer && bearer?.startsWith('Bearer ')) {
            const [type, token] = bearer.split(' ') ?? [];
            if(type === 'Bearer'){
                try{
                    const authPayload = await this.userAuthJwt.getAuthTokePayload(token) as any as JWTUserAuthTokenPayload;

                    if(authPayload.type === this.confService.jwtAuthPayloadName){
                        const statefulguard: JWTTokenUserDataType = {
                            email: authPayload.email,
                            sub: authPayload.sub, // UserEntity : id
                            au: authPayload.au, // UserAuthenticationEntity : id
                            udvc: authPayload.udvc, // UserDeviceEntity : id
                            sess: authPayload.sess, // SessionEntity : id
                            group: authPayload.au // TODO: need to add group id when group table will be added
                        };
                        return statefulguard
                    }
                } catch (err: any) {
                    // we don't have to do anything at this time because API is running in stess less mode
                    // process is simple, just check the stess ful data and if found set to request and pass to downstream microservice
                }
            }
        }
        return null;
    }
    async GraphQLEndPointAuthGuard({req, res}: any): Promise<any>{
        try{
            // if required for  authetication for the request as per policy
            if (this.shouldAuthenticate(req.body)){
                const bearer = req.headers.authorization;
                if(bearer && bearer.startsWith('Bearer ')) {
                    const [type, token] = bearer.split(' ') ?? [];

                    if(type === 'Bearer'){
                        const accessPayload = await this.apiEndpointAuthJwt.getAccessTokePayload(token) as any as JWTTokenPayload;

                        // 💡 We're assigning the payload to the request object here
                        // so we can access in our route handlers
                        
                        // check if token type if access token
                        if(accessPayload.type === this.confService.jwtAccessTokenPayloadName) {
                            // below return type has connection with suergraph to pass header to subgraph
                            // so, make usre what you set here need to adjust there
                            // library-app/src/gql-apollo/supergraph/gql.apollo.supergraph.config.ts => buildService()    
                            const guard: JWTAuthGuardApiEnpointAuthUserPayload = {
                                id: accessPayload.sub,
                                role: accessPayload.role
                            };

                            // check if there is stateful user data in token, is so then just pass to downstream microservice, we are not checking authentication
                            const statefuluserdata = await this.GraphQLStatefulUserAuthData({req, res});

                            return { statefuluser: statefuluserdata, apiuser: guard, req, res };
                        } 
                        // it is possible that user use refresh token accidently, so notify about it
                        else if (accessPayload.type === this.confService.jwtRefreshTokenPayloadName){
                            throw new UnauthorizedException(`Authentication require access token, used refresh token.`);
                        }
                        // as there is not valid token type found, it's considered to be corrupted as per application logic
                        throw new UnauthorizedException('Corrupted access token, authentication failed.');
                    }
                    // EXTRA SECURITY: (actually not in use) token is not brarer token which we must required
                    throw new UnauthorizedException(`Anonymous token, use valid bearer access token.`);
                }
                // check that token must be barer token not any other
                throw new UnauthorizedException(`Bearer JWT_TOKEN not found.`);
            }
        } catch (err: any){
            this.logService.error(err, err.message);
            throw new UnauthorizedException(`Api Authentication Failed: ${this.logService.redactSensitive(err.message)}`);
        }
    }
    static async CurrentApiUser(_data: any, ctx: GraphQLExecutionContext): Promise<any>{
        try{
            const headers = ctx.getArgs()[2].req.headers;
            if(headers.apiuser){
              const apiuser: JWTAuthGuardApiEnpointAuthUserPayload = JSON.parse(headers.apiuser);
              const tmp = await ApiEndpointAuthJwtService.decSubId(apiuser.id as string);
              apiuser.id = parseInt(tmp, 10);
              return apiuser;
            }
        } catch (err: any){
            // simply log the error, do not throw any exceptation
            LogStaticService.log.error(err, err.message);
        }
        // data not fond return null as this will be used as decorator
        return null;
    }
    static async CurrectStatefulAuthUser(_data: any, ctx: GraphQLExecutionContext): Promise<any>{
        try{
            const headers = ctx.getArgs()[2].req.headers;
            if(headers.statefuluser){
                const authPayload: JWTTokenUserDataType = JSON.parse(headers.statefuluser);
                if(authPayload.sub && authPayload.sub !== undefined){
                    const statefuluser: JWTTokenUserDataType = await {
                        email: authPayload.email,
                        sub: parseInt(await UserAuthenticationJwtService.descData(authPayload.sub), 10),
                        au: parseInt(await UserAuthenticationJwtService.descData(authPayload.au), 10),
                        udvc: parseInt(await UserAuthenticationJwtService.descData(authPayload.udvc), 10),
                        sess: parseInt(await UserAuthenticationJwtService.descData(authPayload.sess), 10),
                        uajwt: headers?.statefulauthorization,
                        group: parseInt(await UserAuthenticationJwtService.descData(authPayload.au), 10), // TODO: need to add group id when group table will be added
                    };
                    return statefuluser;
                }
            }
        } catch (err: any){
            // simply log the error, do not throw any exceptation
            LogStaticService.log.error(err, err.message);
        }
        // data not fond return null as this will be used as decorator
        return null;
    }
    async WebsoketAuthGuard(client: any): Promise<any> {
    try {

      // 1) Manual Origin Validation (dynamic)
      const origin = client.handshake?.headers?.origin;
      const allowedOrigins = [
        this.confService.appLocalWebHostDomain,
        this.confService.appHostWebDomain,
      ]

      if (!allowedOrigins.includes(origin)) {
        this.logService.warn(`🚫 Blocked WebSocket connection from unallowed origin: ${origin}`);
        client.disconnect(true);
        throw new UnauthorizedException(`🚫 Blocked WebSocket connection from unallowed origin: ${origin}`);
      }

      const normalize = (v?: string) => !v ? '' : v.startsWith('Bearer ') ? v.split(' ')[1] : v;

      const accessRaw = client.handshake.auth?.token ?? client.handshake.headers?.authorization ?? '';
      const accessToken = normalize(accessRaw);
      if (!accessToken) 
        throw new UnauthorizedException('Bearer JWT_TOKEN not found.');

      // 1) Verify ACCESS token (stateless)
      const accessPayload = await this.apiEndpointAuthJwt.getAccessTokePayload(accessToken) as any as JWTTokenPayload;
      if (accessPayload.type !== this.confService.jwtAccessTokenPayloadName) {
        if (accessPayload.type === this.confService.jwtRefreshTokenPayloadName) {
          throw new UnauthorizedException('Authentication require access token, used refresh token.');
        }
        throw new UnauthorizedException('Corrupted access token, authentication failed.');
      }

      const now = Math.floor(Date.now() / 1000);
      if (typeof accessPayload.exp !== 'number' || accessPayload.exp <= now) {
        throw new UnauthorizedException('Access token expired.');
      }

      const apiuser: JWTAuthGuardApiEnpointAuthUserPayload = {
        id: accessPayload.sub,
        role: accessPayload.role,
      };

      // 2) OPTIONAL stateful token: validate only if present
      const statefulRaw = client.handshake.auth?.stateful ?? client.handshake.headers?.statefulauthorization ?? '';
      const statefulToken = normalize(statefulRaw);

      let statefuluser: any = null;
      if (statefulToken) {
        const state: any = await this.userAuthJwt.getAuthTokePayload(statefulToken);
        if (typeof state.exp !== 'number' || state.exp <= now) {
          throw new UnauthorizedException('Stateful token expired.');
        }
        // optional: extract/decrypt session id if you embed it
        let sessionId: number | undefined;
        if (state?.sess) {
          try {
            sessionId = parseInt(await UserAuthenticationJwtService.descData(state.sess), 10);
            client.data.sessionId = sessionId;
          } catch {}
        }

        statefuluser = { sub: state.sub, group: state.group, au: state.au };
        client.data.userId = statefuluser.au;
        client.data.groupId = statefuluser.group
        //client.data.role = accessPayload.role;
      }
      return { statefuluser, apiuser };
    } catch (err: any) {
      this.logService.error(err, err.message);
      throw new UnauthorizedException(`Api Authentication Failed: ${this.logService.redactSensitive(err.message)}`);
    }
  }
}

//global Decorator to get api user info from access token
export const CurrentApiUser = createParamDecorator(
  async (_data: any, context: ExecutionContext) => {
    const gqlCtx = GqlExecutionContext.create(context);
    return await JwtAuthGuard.CurrentApiUser(_data, gqlCtx);
  },
);

export const CurrectStatefulAuthUser = createParamDecorator(
  async (_data: any, context: ExecutionContext) => {
    const gqlCtx = GqlExecutionContext.create(context);
    return await JwtAuthGuard.CurrectStatefulAuthUser(_data, gqlCtx);
  },
);