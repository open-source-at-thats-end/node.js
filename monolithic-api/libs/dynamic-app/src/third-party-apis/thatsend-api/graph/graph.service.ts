import { InjectGraphQLClient } from "@golevelup/nestjs-graphql-request";
import { ApplicationLocalStorageService, ConfService, LogService } from "@libs/library-app";
import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { gql, GraphQLClient } from "graphql-request";

@Injectable()
export class GraphService {
    constructor(
        @InjectGraphQLClient() 
        public readonly gqlClient: GraphQLClient,
        private readonly appLocalStorage: ApplicationLocalStorageService,

        private readonly conf: ConfService,
        private readonly log: LogService,
        
    ) {}

    public async setAuthorizationHeader(): Promise<any> {

        const localStorage: any = await this.appLocalStorage.get(GraphService.name);

        let header = {
            'Authorization': `Bearer `,
        };

        if(localStorage && localStorage !== null && localStorage?.GraphSignin?.jwt_access_token){
            header = {
                'Authorization': `Bearer ${localStorage.GraphSignin.jwt_access_token}`,
            };
        } 
        return header;
    }
    public async setStatefulAuthorizationHeader(): Promise<any | null> {
        // this method reqired implementation code, local storage canot be used for stateful authorization as there are many users with multiple request
        return null;
        const header = {
            'statefulauthorization': `Bearer `,
        };
        return header;
    }
    public async setApolloRequirePreflightHeader(): Promise<any> {
        const header = {
            'apollo-require-preflight': 'true',
        };
        return header;
    }
    public async graphHello(): Promise<any> {
        const query = gql`
            query HelloGraph {
                HelloGraph
            }`;  

        try{
            const resp = await this.gqlClient.request(query);
            return resp;
        } catch (err: any) {
            throw new BadRequestException(`GraphHello error. ${this.log.redactSensitive(err.message)}`);
        }
    }
    public async graphSignup(): Promise<any> {

    }
    public async graphSignin(): Promise<any> {
        // set graphql query/mutation
        const mutation = gql`
            mutation GraphSignin($input: GraphLoginInput!) {
                GraphSignin(input: $input) {
                    id
                    email
                    username
                    jwt_access_token
                    jwt_refresh_token
                }
            }`;  

        // set variable for graphql request
        const variables: any = {
            input: {
                username: "admin",//this.conf.thatsendApiUsername,
                identify: "admin"//this.conf.thatsendApiPass,
            }
        };

        // set any header here and pass to the request
        const headers = {};

        // request the call
        try{
            const resp: any = await this.gqlClient.request<any, any>(mutation, variables); // headers
            
            if(resp && resp.GraphSignin && resp.GraphSignin.jwt_access_token) {
                await this.appLocalStorage.set(GraphService.name, resp);
                return resp.GraphSignin;
            }
            throw new NotFoundException(`GraphSignin error, username not found.`);
        } catch (err: any) {
            throw new BadRequestException(`GraphSignin error. ${this.log.redactSensitive(err.message)}`);
        }
    }
    public async graphWhoAmI(): Promise<any> {

        // set graphql query/mutation
        const query = gql`
            query GraphWhoAmI {
                GraphWhoAmI {
                    username
                    email
                    jwt_access_token
                    jwt_refresh_token
                    created
                }
            }`;

        // set variable for graphql request
        const variables: any = {};

        // set any header here and pass to the request
        let headers = {};
        headers = { ...headers, ...await this.setAuthorizationHeader() };

        try{
            const resp: any = await this.gqlClient.request<any, any>(query, variables, headers);
            if(resp.GraphWhoAmI){
                return resp.GraphWhoAmI;
            }
            throw new NotFoundException(`GraphWhoAmI error, username not found.`);
        } catch (err: any) {
            // check if error due to JWT expired
            if(await this.checkAndRenewJwt(err.message) === true) {
                return await this.graphWhoAmI();
            }

            const msg = `WhoAmI - error. ${this.log.redactSensitive(err.message)}`;
            this.log.error(msg);
            throw new BadRequestException(msg);
        }
    }
    public async graphSignout(): Promise<any> {

    }
    public async graphRefreshJWT(): Promise<any> {
        const localStorage: any = await this.appLocalStorage.get(GraphService.name);

        if(localStorage && localStorage.GraphSignin && localStorage.GraphSignin.jwt_refresh_token) {

            const mutation = gql`
            mutation GraphRefreshJWT($jwtRefreshToken: String!) {
                GraphRefreshJWT(jwtRefreshToken: $jwtRefreshToken) {
                    id
                    email
                    username
                    jwt_access_token
                    jwt_refresh_token
                }
            }`;  

            const variables: any = {
                jwtRefreshToken: localStorage.GraphSignin.jwt_refresh_token,
            };

            const headers = {};

            try{
                const resp: any = await this.gqlClient.request<any, any>(mutation, variables); // headers
                if(resp && resp.GraphRefreshJWT && resp.GraphRefreshJWT.jwt_access_token) {
                    
                    let ls: any = {
                        GraphSignin: resp.GraphRefreshJWT
                    };
                    
                    await this.appLocalStorage.set(GraphService.name, ls);
                    return resp.GraphRefreshJWT;
                }
                throw new NotFoundException(`Refresh faild, invalid refresh JWT.`);
            } catch (err: any) {
                this.log.error(`GraphRefreshJWT error. ${this.log.redactSensitive(err.message)}`);
            }
        }

        // as refresh failed need to perform connect
        return await this.connect(); 
    }
    public async graphResetPassword(): Promise<any> {

    }
    public async connect(): Promise<any> {
        try{
            const resp: any = await this.graphSignin();  
            return resp;
        } catch (err: any) {
            throw new BadRequestException(`Graph connect error. ${this.log.redactSensitive(err.message)}`);
        }
    }

    public async refeshTokes(): Promise<any> {
        try{
            const resp: any = await this.graphRefreshJWT();
            return resp;    
        } catch (err: any) {
            throw new BadRequestException(`Graph refesh tokes error. ${this.log.redactSensitive(err.message)}`);
        }
    }
    public async checkAndRenewJwt(emsg: string): Promise<boolean> {
        if(emsg.includes('Context creation failed') !== false) {
            const resp: any = await this.refeshTokes();
            if(resp.GraphSignin?.jwt_access_token) 
                return true;
        }
        return false;
    }

}