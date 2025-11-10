export type ZillowCrawlerScrapedRow = {
    u_fname?: string | null;
    u_lname?: string | null;
    u_mname?: string | null;
    u_primary_mobile?: string | null;
    u_whatsapp?: string | null;
    u_whatsapp_cc?: string | null;
    u_primary_email?: string | null;
    u_primary_mobile_cc?: string | null;
    u_connsrc_id?: string | null;
  
    uaddr_address?: string | null;
    uaddr_state?: string | null;
    uaddr_city?: string | null;
    uaddr_country?: string | null;
    uaddr_postal_zip_code?: string | null;
  
    upinfo_website_url?: string | null;
    upinfo_facebook_profile?: string | null;
    upinfo_linkedin_profile?: string | null;
    upinfo_x_profile?: string | null;
    upinfo_instagram_profile?: string | null;
    upinfo_tiktok_profile?: string | null;
    upinfo_youtube_profile?: string | null;
    upinfo_pinterest_profile?: string | null;
  
    ucorp_company_name?: string | null;
    ucorp_email?: string | null;
    ucorp_mobile?: string | null;
    ucorp_mobile_cc?: string | null;
    ucorp_address?: string | null;
    ucorp_city?: string | null;
    ucorp_state?: string | null;
    ucorp_country?: string | null;
    ucorp_postal_zip_code?: string | null;

    busns_connsrc_id?: string | null;
    busns_name?: string | null;
    busns_address?: string | null;
    busns_country?: string | null;
    busns_state?: string | null;
    busns_city?: string | null;
    busns_zipcode?: string | null;
    busns_toll_free_number?: string | null;
    busns_mobile?: string | null;
    busns_mobile_cc?: string | null;
    busns_email?: string | null;
    busns_website_url?: string | null;
    busns_linkedin_profile?: string | null;
    busns_facebook_profile?: string | null;
    busns_instagram_profile?: string | null;
    busns_youtube_profile?: string | null;
    busns_x_profile?: string | null;
    busns_tiktok_profile?: string | null;
    busns_pinterest_profile?: string | null;
    
    lead_initial_findings: string | null;
    lead_created: string; // ISO datetime now
    lead_determined_as: string;
  
    // etc
    crawler_stage: string;   // static zillow
  };
  