import { ConfService, LogService } from "@libs/library-app";
import { BadRequestException, Injectable } from "@nestjs/common";
import { GraphService } from "../graph/graph.service";
import { gql } from "graphql-request";
import { ZillowCrawlerScrapedRow } from "./crawler.lead.type";

@Injectable()
export class CrawlerLeadService {

    constructor(
        private readonly conf: ConfService,
        private readonly log: LogService,
        private readonly graphService: GraphService
    ) {
        this.log.setContext(CrawlerLeadService.name);
    }

    public async zillowCrawlerLeadUpsert(rows: ZillowCrawlerScrapedRow[]): Promise<any> {
        const mutation = gql`
            mutation CrawlerLeadUpsert($input: [CrawlerLeadUpsertInput!]!) {
                CrawlerLeadUpsert(input: $input) {
                    u_fname
                    u_lname
                    u_mname
                    u_primary_mobile
                    u_whatsapp
                    u_whatsapp_cc
                    u_primary_email
                    u_primary_mobile_cc
                    u_connsrc_id
                
                    uaddr_address
                    uaddr_state
                    uaddr_city
                    uaddr_country
                    uaddr_postal_zip_code
                
                    upinfo_website_url
                    upinfo_facebook_profile
                    upinfo_linkedin_profile
                    upinfo_x_profile
                    upinfo_instagram_profile
                    upinfo_tiktok_profile
                    upinfo_youtube_profile
                    upinfo_pinterest_profile
                
                    ucorp_company_name
                    ucorp_email
                    ucorp_mobile
                    ucorp_mobile_cc
                    ucorp_address
                    ucorp_city
                    ucorp_state
                    ucorp_country
                    ucorp_postal_zip_code

                    busns_connsrc_id
                    busns_name
                    busns_address
                    busns_city
                    busns_state
                    busns_country
                    busns_zipcode
                    busns_toll_free_number
                    busns_mobile
                    busns_mobile_cc
                    busns_email
                    busns_website_url
                    busns_linkedin_profile
                    busns_facebook_profile
                    busns_instagram_profile
                    busns_youtube_profile
                    busns_x_profile
                    busns_tiktok_profile
                    busns_pinterest_profile
                    
                    lead_initial_findings
                    lead_created
                    lead_determined_as
                
                    crawler_stage
                }
            }`;  //54

        const variables: any = {
            input: rows
        };

        let headers = {};
        headers = { ...headers, ...await this.graphService.setAuthorizationHeader() };

        try{
            const resp: any = await this.graphService.gqlClient.request<any, any>(mutation, variables, headers);
            if(resp && Array.isArray(resp.CrawlerLeadUpsert) && resp.CrawlerLeadUpsert.length > 0) {
                return resp.CrawlerLeadUpsert;
            }
            throw new BadRequestException(`Failed to upsert data.`);
        } catch (err: any) {

            // check if error due to JWT expired
            if(await this.graphService.checkAndRenewJwt(err.message) === true) {
                return await this.zillowCrawlerLeadUpsert(rows);
            }

            const msg = `CrawlerLeadUpsert error. ${this.log.redactSensitive(err.message)}`;
            this.log.error(msg);
            throw new BadRequestException(msg);
        }
    }
}