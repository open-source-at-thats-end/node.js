import * as Joi from 'joi';
import * as cnfpub from './conf.public';

export const confValidationSchema = Joi.object({
    // Environment
    NODE_ENV: Joi.string().valid(cnfpub.CONFPUVAL_NODE_ENV_PRODUCTION, cnfpub.CONFPUVAL_NODE_ENV_DEVELOPMENT, cnfpub.CONFPUVAL_NODE_ENV_TEST).default(cnfpub.CONFPUVAL_NODE_ENV_PRODUCTION),


    // General
    TZ: Joi.string().required().default(cnfpub.CONFPUVAL_TZ),
    PROJECT_NAME: Joi.string().required().default(cnfpub.CONFPUVAL_PROJECT_NAME),
    APP_HOST_DOMAIN: Joi.string().required().default(cnfpub.CONFPUVAL_APP_HOST_DOMAIN),
    APP_HOST_CDN_DOMAIN: Joi.string().required().default(cnfpub.CONFPUKEY_APP_HOST_CDN_DOMAIN),
    APP_HOST_WEB_DOMAIN: Joi.string().required().default(cnfpub.CONFPUVAL_APP_HOST_WEB_DOMAIN),
    APP_HOST_AI_DOMAIN: Joi.string().required().default(cnfpub.CONFPUVAL_APP_HOST_AI_DOMAIN),
    APP_HOST_BACKOFFICE_WEB_DOMAIN: Joi.string().required().default(cnfpub.CONFPUVAL_APP_HOST_BACKOFFICE_WEB_DOMAIN),
    APP_LOCAL_WEB_DOMAIN: Joi.string().required().default(cnfpub.CONFPUVAL_APP_LOCAL_WEB_DOMAIN),
    APP_LOCAL_WEB_PORT: Joi.string().required().default(cnfpub.CONFPUVAL_APP_LOCAL_WEB_PORT),
    APP_LOCAL_BACKOFFICE_WEB_DOMAIN: Joi.string().required().default(cnfpub.CONFPUVAL_APP_LOCAL_BACKOFFICE_WEB_DOMAIN),
    APP_LOCAL_BACKOFFICE_WEB_PORT: Joi.string().required().default(cnfpub.CONFPUVAL_APP_LOCAL_BACKOFFICE_WEB_PORT),
    APP_LISTEN_HOST: Joi.string().required().default(cnfpub.CONFPUVAL_APP_LISTEN_HOST),
    DISABLE_SUPERGRAPH_PLAYGROUND: Joi.boolean().required().default(cnfpub.CONFPUVAL_DISABLE_SUPERGRAPH_PLAYGROUND),
    DISABLE_SUBGRAPH_PLAYGROUND: Joi.boolean().required().default(cnfpub.CONFPUVAL_DISABLE_SUBGRAPH_PLAYGROUND),
    ENAABLE_APOLLO_SERVER_INTROSPECTION: Joi.boolean().required().default(cnfpub.CONFPUVAL_ENAABLE_APOLLO_SERVER_INTROSPECTION),
    GRAPHQL_ROOT_SLUG: Joi.string().required().default(cnfpub.CONFPUVAL_GRAPHQL_ROOT_SLUG),
    GRAPHQL_SCHEMA_DIR: Joi.string().required().default(cnfpub.CONFPUVAL_GRAPHQL_SCHEMA_DIR),
    PASSWORD_LIFE_SPAN_DAYS: Joi.number().required().default(cnfpub.CONFPUVAL_PASSWORD_LIFE_SPAN_DAYS),
    PASSWORD_RESET_WARNING_DAYS: Joi.number().required().default(cnfpub.CONFPUVAL_PASSWORD_RESET_WARNING_DAYS),
    SIGNIN_OTP_EXPIRE_MINUTES: Joi.number().required().default(cnfpub.CONFPUVAL_SIGNIN_OTP_EXPIRE_MINUTES),
    FORGOT_PASSWORD_LINK_EXPIRE_HOURS: Joi.number().required().default(cnfpub.CONFPUVAL_FORGOT_PASSWORD_LINK_EXPIRE_HOURS),
    FORGOT_PASSWORD_LINK_SEND_TO_RECOVERY_EMAIL: Joi.boolean().required().default(cnfpub.CONFPUVAL_FORGOT_PASSWORD_LINK_SEND_TO_RECOVERY_EMAIL),
    LANGUAGE_CODE: Joi.string().required().default(cnfpub.CONFPUVAL_LANGUAGE_CODE),
    
    // static storage specification
    ONE_BYTE_SIZE: Joi.number().optional().allow(null).default(cnfpub.CONFPUVAL_ONE_BYTE_SIZE),
    MAX_FILE_SIZE: Joi.number().required().default(cnfpub.CONFPUVAL_MAX_FILE_SIZE),
    MAX_FILES: Joi.number().required().default(cnfpub.CONFPUVAL_MAX_FILES),
    LOG_DIR: Joi.string().required().default(cnfpub.CONFPUVAL_LOG_DIR),
    UPLOAD_DIR: Joi.string().required().default(cnfpub.CONFPUVAL_UPLOAD_DIR),
    TMP_DIR: Joi.string().required().default(cnfpub.CONFPUVAL_TMP_DIR),
    IMAGE_DIR: Joi.string().required().default(cnfpub.CONFPUVAL_IMAGE_DIR),
    

    // stateful data storage
    COOKIE_SECRET: Joi.string().required().default(cnfpub.CONFPUVAL_COOKIE_SECRET),
    SESSION_SECRET: Joi.string().required().default(cnfpub.CONFPUVAL_SESSION_SECRET),
    SESSION_SALT: Joi.string().required().default(cnfpub.CONFPUVAL_SESSION_SALT),
    SESSION_IV: Joi.string().required().default(cnfpub.CONFPUVAL_SESSION_IV),
    
    // Database
    MYSQL_HOST: Joi.string().required(),
    MYSQL_PORT: Joi.number().required(),
    MYSQL_USER: Joi.string().required(),
    MYSQL_PASS: Joi.string().required(),
    MYSQL_DBNAME: Joi.string().required(),
    MYSQL_LOGGING: Joi.boolean().required().default(false),
    MYSQL_DATABASE_TYPE: Joi.string().valid(cnfpub.CONFPUVAL_MYSQL_DATABASE_TYPE_MYSQL,cnfpub.CONFPUVAL_MYSQL_DATABASE_TYPE_MARIADB).required().default(cnfpub.CONFPUVAL_MYSQL_DATABASE_TYPE_MYSQL),
    
    REDIS_HOST: Joi.string().optional().allow(''),
    REDIS_PORT: Joi.number().optional().allow(''),
    REDIS_LOGGING: Joi.boolean().required().default(false),

    BETTER_SQLITE3_DATA_SOURCE: Joi.string().required().default(cnfpub.CONFPUVAL_BETTER_SQLITE3_DATA_SOURCE),

    // Microservice
    APP_NAME: Joi.string().required().default(cnfpub.CONFPUVAL_APP_NAME),
    APP_HTTP_PORT_EXPRESS: Joi.number().required().default(cnfpub.CONFPUVAL_APP_HTTP_PORT_EXPRESS),
    APP_HTTP_PORT_FASTIFY: Joi.number().required().default(cnfpub.CONFPUVAL_APP_HTTP_PORT_FASTIFY),
    APP_GRPC_PORT: Joi.number().required().default(cnfpub.CONFPUVAL_APP_GRPC_PORT),
    APP_WEBSOCKET_PORT: Joi.number().required().default(cnfpub.CONFPUVAL_APP_WEBSOCKET_PORT),
    APP_DEBUG_PORT: Joi.number().required().default(cnfpub.CONFPUVAL_APP_DEBUG_PORT),

    SHARED_APP_NAME: Joi.string().required().default(cnfpub.CONFPUVAL_SHARED_APP_NAME),
    SHARED_APP_HTTP_PORT_EXPRESS: Joi.number().required().default(cnfpub.CONFPUVAL_SHARED_APP_HTTP_PORT_EXPRESS),
    SHARED_APP_HTTP_PORT_FASTIFY: Joi.number().required().default(cnfpub.CONFPUVAL_SHARED_APP_HTTP_PORT_FASTIFY),
    SHARED_APP_GRPC_PORT: Joi.number().required().default(cnfpub.CONFPUVAL_SHARED_APP_GRPC_PORT),
    SHARED_APP_WEBSOCKET_PORT: Joi.number().required().default(cnfpub.CONFPUVAL_SHARED_APP_WEBSOCKET_PORT),
    SHARED_APP_DEBUG_PORT: Joi.number().required().default(cnfpub.CONFPUVAL_SHARED_APP_DEBUG_PORT),

    BUSINESS_APP_NAME: Joi.string().required().default(cnfpub.CONFPUVAL_BUSINESS_APP_NAME),
    BUSINESS_APP_HTTP_PORT_EXPRESS: Joi.number().required().default(cnfpub.CONFPUVAL_BUSINESS_APP_HTTP_PORT_EXPRESS),
    BUSINESS_APP_HTTP_PORT_FASTIFY: Joi.number().required().default(cnfpub.CONFPUVAL_BUSINESS_APP_HTTP_PORT_FASTIFY),
    BUSINESS_APP_GRPC_PORT: Joi.number().required().default(cnfpub.CONFPUVAL_BUSINESS_APP_GRPC_PORT),
    BUSINESS_APP_WEBSOCKET_PORT: Joi.number().required().default(cnfpub.CONFPUVAL_BUSINESS_APP_WEBSOCKET_PORT),
    BUSINESS_APP_DEBUG_PORT: Joi.number().required().default(cnfpub.CONFPUVAL_BUSINESS_APP_DEBUG_PORT),

    // REST end point
    REST_APP_NAME: Joi.string().required().default(cnfpub.CONFPUVAL_REST_APP_NAME),
    REST_ROOT_SLUG: Joi.string().required().default(cnfpub.CONFPUVAL_REST_ROOT_SLUG),
    REST_SWAGGER_DOC_SLUG: Joi.string().required().default(cnfpub.CONFPUVAL_REST_SWAGGER_DOC_SLUG),
    REST_CDN_URL: Joi.string().required().default(cnfpub.CONFPUVAL_REST_CDN_URL),

    // JWT
    JWT_ACCESSTOKEN_SECRET: Joi.string().required().default(cnfpub.CONFPUVAL_JWT_ACCESSTOKEN_SECRET),
    JWT_REFRESHTOKEN_SECRET: Joi.string().required().default(cnfpub.CONFPUVAL_JWT_REFRESHTOKEN_SECRET),
    JWT_ISSUER: Joi.string().optional().allow(cnfpub.CONFPUVAL_JWT_ISSUER),
    JWT_AUDIENCE: Joi.string().optional().allow(cnfpub.CONFPUVAL_JWT_AUDIENCE),
    JWT_ACCESSTOKEN_PAYLOAD_NAME: Joi.string().required().default(cnfpub.CONFPUVAL_JWT_ACCESSTOKEN_PAYLOAD_NAME),
    JWT_REFRESHTOKEN_PAYLOAD_NAME: Joi.string().required().default(cnfpub.CONFPUVAL_JWT_REFRESHTOKEN_PAYLOAD_NAME),
    JWT_ACCESSTOKEN_EXPIRES_IN: Joi.string().required().default(cnfpub.CONFPUVAL_JWT_ACCESSTOKEN_EXPIRES_IN),
    JWT_REFRESHTOKEN_EXPIRES_IN: Joi.string().required().default(cnfpub.CONFPUVAL_JWT_REFRESHTOKEN_EXPIRES_IN),

    // SMTP Variables
    SMTP_SERVICE: Joi.string().required().default(cnfpub.CONFPUVAL_SMTP_SERVICE),
    SMTP_HOST: Joi.string().required().default(cnfpub.CONFPUVAL_SMTP_HOST),
    SMTP_PORT: Joi.number().required().default(cnfpub.CONFPUVAL_SMTP_PORT),
    SMTP_SECURE: Joi.boolean().required().default(cnfpub.CONFPUVAL_SMTP_SECURE),
    SMTP_USER: Joi.string().required().default(cnfpub.CONFPUVAL_SMTP_USER),
    SMTP_PASS: Joi.string().required().default(cnfpub.CONFPUVAL_SMTP_PASS),
    SMTP_FROM_EMAIL: Joi.string().required().default(cnfpub.CONFPUVAL_SMTP_FROM_EMAIL),
    

    // Data format
    FORMAT_DATE_TIME: Joi.string().required().default(cnfpub.CONFPUVAL_FORMAT_DATE_TIME),
    FORMAT_DATE: Joi.string().required().default(cnfpub.CONFPUVAL_FORMAT_DATE),
    FORMAT_TIME: Joi.string().required().default(cnfpub.CONFPUVAL_FORMAT_TIME),

    // Pagination
    NUM_OF_RECORDS_PER_PAGE: Joi.number().required().default(cnfpub.CONFPUVAL_NUM_OF_RECORDS_PER_PAGE),

    // image processing
    IMG_THUMB_WIDTH: Joi.number().required().default(cnfpub.CONFPUVAL_IMG_THUMB_WIDTH),
    IMG_THUMB_HEIGHT: Joi.number().required().default(cnfpub.CONFPUVAL_IMG_THUMB_HEIGHT),
    IMG_THUMB_FILE_EXTENSION: Joi.string().required().default(cnfpub.CONFPUVAL_IMG_THUMB_FILE_EXTENSION),

    // npm Package
    
   
    // database entity 
    ENTITY_PREFIX: Joi.string().required().default(cnfpub.CONFPUVAL_ENTITY_PREFIX),


    

    // ----------------------------------------
    // PROJECT SPECIFICATION (third-party-apis)
    // ----------------------------------------

    // self-graphql-microservice http://APP_LISTEN_HOST:APP_HTTP_PORT_EXPRESS/GRAPHQL_ROOT_SLUG
    SGQLMICROSER_USERNAME: Joi.string().required().default(cnfpub.CONFPUVAL_SGQLMICROSER_USERNAME),
    SGQLMICROSER_IDENTIFY: Joi.string().required().default(cnfpub.CONFPUVAL_SGQLMICROSER_IDENTIFY),
    
    // self-ai-app-graphql-api
    SAIAPPGQLAPI_USERNAME: Joi.string().required().default(cnfpub.CONFPUVAL_SAIAPPGQLAPI_USERNAME),
    SAIAPPGQLAPI_IDENTIFY: Joi.string().required().default(cnfpub.CONFPUVAL_SAIAPPGQLAPI_IDENTIFY),
    

    // bulksms.com: https://www.bulksms.com/developer/json/v1/#section/Overview
    BULKSMS_BASE_URL: Joi.string().required().default(cnfpub.CONFPUVAL_BULKSMS_BASE_URL),
    BULKSMS_TOKEN_ID: Joi.string().required().default(cnfpub.CONFPUVAL_BULKSMS_TOKEN_ID),
    BULKSMS_TOKEN_SECRET: Joi.string().required().default(cnfpub.CONFPUVAL_BULKSMS_TOKEN_SECRET),
    BULKSMS_AUTH_HEADER_NAME: Joi.string().required().default(cnfpub.CONFPUVAL_BULKSMS_AUTH_HEADER_NAME),
    BULKSMS_AUTH_TYPE: Joi.string().required().default(cnfpub.CONFPUVAL_BULKSMS_AUTH_TYPE),
});