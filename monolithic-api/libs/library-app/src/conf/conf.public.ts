// Environment
export const CONFPUKEY_NODE_ENV: string = 'NODE_ENV';
    export const CONFPUVAL_NODE_ENV_PRODUCTION: string = 'production';
    export const CONFPUVAL_NODE_ENV_DEVELOPMENT: string = 'development';
    export const CONFPUVAL_NODE_ENV_TEST: string = 'test';


// General
export const CONFPUKEY_TZ: string = 'TZ';
    export const CONFPUVAL_TZ = 'Asia/Calcutta';

export const CONFPUKEY_PROJECT_NAME: string = 'PROJECT_NAME';
    export const CONFPUVAL_PROJECT_NAME: string = 'Enterprise Application: Gateway-Microservice Architecture';
export const CONFPUKEY_APP_LISTEN_HOST: string = 'APP_LISTEN_HOST';
    export const CONFPUVAL_APP_LISTEN_HOST: string = 'localhost';
export const CONFPUKEY_APP_HOST_DOMAIN: string = 'APP_HOST_DOMAIN';
    export const CONFPUVAL_APP_HOST_DOMAIN: string = 'http://localhost:20061';
export const CONFPUKEY_APP_HOST_CDN_DOMAIN: string = 'APP_HOST_CDN_DOMAIN';
    export const CONFPUVAL_APP_HOST_CDN_DOMAIN: string = 'http://localhost:20098';
export const CONFPUKEY_APP_HOST_WEB_DOMAIN: string = 'APP_HOST_WEB_DOMAIN';
    export const CONFPUVAL_APP_HOST_WEB_DOMAIN: string = 'http://localhost:20080';
export const CONFPUKEY_APP_HOST_AI_DOMAIN: string = 'APP_HOST_AI_DOMAIN';
    export const CONFPUVAL_APP_HOST_AI_DOMAIN: string = 'http://localhost:20093';
export const CONFPUKEY_APP_HOST_BACKOFFICE_WEB_DOMAIN: string = 'APP_HOST_BACKOFFICE_WEB_DOMAIN';
    export const CONFPUVAL_APP_HOST_BACKOFFICE_WEB_DOMAIN: string = 'http://localhost:20080';
export const CONFPUKEY_APP_LOCAL_WEB_DOMAIN: string = 'APP_LOCAL_WEB_DOMAIN';
    export const CONFPUVAL_APP_LOCAL_WEB_DOMAIN: string = 'localhost';
export const CONFPUKEY_APP_LOCAL_WEB_PORT: string = 'APP_LOCAL_WEB_PORT';
    export const CONFPUVAL_APP_LOCAL_WEB_PORT: string = '20080';
export const CONFPUKEY_APP_LOCAL_BACKOFFICE_WEB_DOMAIN: string = 'APP_LOCAL_BACKOFFICE_WEB_DOMAIN';
    export const CONFPUVAL_APP_LOCAL_BACKOFFICE_WEB_DOMAIN: string = 'localhost';
export const CONFPUKEY_APP_LOCAL_BACKOFFICE_WEB_PORT: string = 'APP_LOCAL_BACKOFFICE_WEB_PORT';
    export const CONFPUVAL_APP_LOCAL_BACKOFFICE_WEB_PORT: string = '20080';


export const CONFPUKEY_ENAABLE_APOLLO_SERVER_INTROSPECTION: string = 'ENAABLE_APOLLO_SERVER_INTROSPECTION';
    export const CONFPUVAL_ENAABLE_APOLLO_SERVER_INTROSPECTION: boolean = false;


export const CONFPUKEY_GRAPHQL_ROOT_SLUG: string = 'GRAPHQL_ROOT_SLUG';
    export const CONFPUVAL_GRAPHQL_ROOT_SLUG: string = 'graphql';
export const CONFPUKEY_GRAPHQL_SCHEMA_DIR: string = 'GRAPHQL_SCHEMA_DIR';
    export const CONFPUVAL_GRAPHQL_SCHEMA_DIR: string = '/graphql/schema';

export const CONFPUKEY_PASSWORD_LIFE_SPAN_DAYS: string = 'PASSWORD_LIFE_SPAN_DAYS';
    export const CONFPUVAL_PASSWORD_LIFE_SPAN_DAYS: number = 365;
export const CONFPUKEY_PASSWORD_RESET_WARNING_DAYS: string = 'PASSWORD_RESET_WARNING_DAYS';
    export const CONFPUVAL_PASSWORD_RESET_WARNING_DAYS: number = 180;
export const CONFPUKEY_SIGNIN_OTP_EXPIRE_MINUTES: string = 'SIGNIN_OTP_EXPIRE_MINUTES';
    export const CONFPUVAL_SIGNIN_OTP_EXPIRE_MINUTES: number = 10;
export const CONFPUKEY_FORGOT_PASSWORD_LINK_EXPIRE_HOURS: string = 'FORGOT_PASSWORD_LINK_EXPIRE_HOURS';
    export const CONFPUVAL_FORGOT_PASSWORD_LINK_EXPIRE_HOURS: number = 2;
export const CONFPUKEY_FORGOT_PASSWORD_LINK_SEND_TO_RECOVERY_EMAIL: string = 'FORGOT_PASSWORD_LINK_SEND_TO_RECOVERY_EMAIL';
    export const CONFPUVAL_FORGOT_PASSWORD_LINK_SEND_TO_RECOVERY_EMAIL: boolean = false;

export const CONFPUKEY_LANGUAGE_CODE: string = 'LANGUAGE_CODE';
    export const CONFPUVAL_LANGUAGE_CODE: string = 'en-us';


export const CONFPUKEY_COMMON_SECRET: string = 'COMMON_SECRET';
    export const CONFPUVAL_COMMON_SECRET: string = `B0F2F8B7CF2734283655BFA9FDD73`;
export const CONFPUKEY_COMMON_SALT: string = 'COMMON_SALT';
    export const CONFPUVAL_COMMON_SALT: string = `C7AFA29CAB98`;
export const CONFPUKEY_COMMON_IV: string = 'COMMON_IV';
    export const CONFPUVAL_COMMON_IV: string = `64A9A`;

    
// static storage specification
export const CONFPUKEY_ONE_BYTE_SIZE: string = 'ONE_BYTE_SIZE'; // onlyDef
    export const CONFPUVAL_ONE_BYTE_SIZE: number = 1024; // onlyDef
export const CONFPUKEY_MAX_FILE_SIZE: string = 'MAX_FILE_SIZE';
    export const CONFPUVAL_MAX_FILE_SIZE: number = 20 * CONFPUVAL_ONE_BYTE_SIZE * CONFPUVAL_ONE_BYTE_SIZE; // 20 MB provided in bytes
export const CONFPUKEY_MAX_FILES: string = 'MAX_FILES';
    export const CONFPUVAL_MAX_FILES: number = 10;
export const CONFPUKEY_LOG_DIR: string = 'LOG_DIR';
    export const CONFPUVAL_LOG_DIR: string = '/log/pino';
export const CONFPUKEY_UPLOAD_DIR: string = 'UPLOAD_DIR';
    export const CONFPUVAL_UPLOAD_DIR: string = '/assets/upload';
export const CONFPUKEY_TMP_DIR: string = 'TMP_DIR';
    export const CONFPUVAL_TMP_DIR: string = '/assets/tmp';
export const CONFPUKEY_IMAGE_DIR: string = 'IMAGE_DIR';
    export const CONFPUVAL_IMAGE_DIR: string = '/assets/image';




// stateful data storage
export const CONFPUKEY_COOKIE_SECRET: string = 'COOKIE_SECRET';
    export const CONFPUVAL_COOKIE_SECRET: string = `/BXCHJN7+FX+DwPHQky6tc9HT2qU786pyPx6K/Dtddp9QsaZO4aL+g==`;
export const CONFPUKEY_SESSION_SECRET: string = 'SESSION_SECRET';
    export const CONFPUVAL_SESSION_SECRET: string = `B169A0B0325C2B3312E17833798827`;
export const CONFPUKEY_SESSION_SALT: string = 'SESSION_SALT';
    export const CONFPUVAL_SESSION_SALT: string = `B90DBFA`;
export const CONFPUKEY_SESSION_IV: string = 'SESSION_IV';
    export const CONFPUVAL_SESSION_IV: string = `04DC6A72E874DA272`;


// Database
export const CONFPUKEY_MYSQL_HOST : string = 'MYSQL_HOST';
export const CONFPUKEY_MYSQL_PORT: string = 'MYSQL_PORT';
export const CONFPUKEY_MYSQL_USER: string = 'MYSQL_USER';
export const CONFPUKEY_MYSQL_PASS: string = 'MYSQL_PASS';
export const CONFPUKEY_MYSQL_DBNAME: string = 'MYSQL_DBNAME';
export const CONFPUKEY_MYSQL_LOGGING: string = 'MYSQL_LOGGING';
export const CONFPUKEY_MYSQL_DATABASE_TYPE: string = 'MYSQL_DATABASE_TYPE';
    export const CONFPUVAL_MYSQL_DATABASE_TYPE_MYSQL: 'mysql' = 'mysql';
    export const CONFPUVAL_MYSQL_DATABASE_TYPE_MARIADB: 'mariadb' = 'mariadb';

export const CONFPUKEY_REDIS_HOST: string = 'REDIS_HOST';
export const CONFPUKEY_REDIS_PORT: string = 'REDIS_PORT';
export const CONFPUKEY_REDIS_LOGGING: string = 'REDIS_LOGGING';

export const CONFPUKEY_BETTER_SQLITE3_DATA_SOURCE: string = 'BETTER_SQLITE3_DATA_SOURCE';
    export const CONFPUVAL_BETTER_SQLITE3_DATA_SOURCE: string = '/data-source/better.sqlite3.sql';

// Microservice
export const CONFPUKEY_APP_NAME: string = 'APP_NAME';
    export const CONFPUVAL_APP_NAME: string = 'app';
export const CONFPUKEY_APP_HTTP_PORT_EXPRESS: string = 'APP_HTTP_PORT_EXPRESS';
    export const CONFPUVAL_APP_HTTP_PORT_EXPRESS: number = 4300;
export const CONFPUKEY_APP_HTTP_PORT_FASTIFY: string = 'APP_HTTP_PORT_FASTIFY';
    export const CONFPUVAL_APP_HTTP_PORT_FASTIFY: number = 5300;
export const CONFPUKEY_APP_GRPC_PORT: string = 'APP_GRPC_PORT';
    export const CONFPUVAL_APP_GRPC_PORT: number = 7300;
export const CONFPUKEY_APP_WEBSOCKET_PORT: string = 'APP_WEBSOCKET_PORT';
    export const CONFPUVAL_APP_WEBSOCKET_PORT: number = 2300;
export const CONFPUKEY_APP_DEBUG_PORT: string = 'APP_DEBUG_PORT';
    export const CONFPUVAL_APP_DEBUG_PORT: number = 6300;

// REST end point
export const CONFPUKEY_REST_APP_NAME: string = 'REST_APP_NAME';
    export const CONFPUVAL_REST_APP_NAME: string = 'rest-app';
export const CONFPUKEY_REST_ROOT_SLUG = 'REST_ROOT_SLUG';
    export const CONFPUVAL_REST_ROOT_SLUG = 'rest';
export const CONFPUKEY_REST_SWAGGER_DOC_SLUG = 'REST_SWAGGER_DOC_SLUG';
    export const CONFPUVAL_REST_SWAGGER_DOC_SLUG = 'swagger';
export const CONFPUKEY_REST_CDN_URL = 'REST_CDN_URL';
    export const CONFPUVAL_REST_CDN_URL = '/rest/cdn';

// JWT
export const CONFPUKEY_JWT_ACCESSTOKEN_SECRET: string = 'JWT_ACCESSTOKEN_SECRET';
    export const CONFPUVAL_JWT_ACCESSTOKEN_SECRET: string = `K6DHEe+i9HseLL77VPzxix8J0Ho/PSALQ==`;
export const CONFPUKEY_JWT_REFRESHTOKEN_SECRET: string = 'JWT_REFRESHTOKEN_SECRET';
    export const CONFPUVAL_JWT_REFRESHTOKEN_SECRET: string = `yS/q5A0fiE7S8mqHGg8hj/AtOMwAm5hPxL0zC4yBC/7n43F+PMmOaWBpJ0qg==`;
export const CONFPUKEY_JWT_ISSUER: string = 'JWT_ISSUER';
    export const CONFPUVAL_JWT_ISSUER: string = 'THASEND';
export const CONFPUKEY_JWT_AUDIENCE: string = 'JWT_AUDIENCE';
    export const CONFPUVAL_JWT_AUDIENCE: string = 'Application';
export const CONFPUKEY_JWT_ACCESSTOKEN_PAYLOAD_NAME: string = 'JWT_ACCESSTOKEN_PAYLOAD_NAME';
    export const CONFPUVAL_JWT_ACCESSTOKEN_PAYLOAD_NAME: string = 'access_token';
export const CONFPUKEY_JWT_REFRESHTOKEN_PAYLOAD_NAME: string = 'JWT_REFRESHTOKEN_PAYLOAD_NAME';
    export const CONFPUVAL_JWT_REFRESHTOKEN_PAYLOAD_NAME: string = 'refresh_token';
export const CONFPUKEY_JWT_ACCESSTOKEN_EXPIRES_IN: string = 'JWT_ACCESSTOKEN_EXPIRES_IN';
    export const CONFPUVAL_JWT_ACCESSTOKEN_EXPIRES_IN: string = '1d';
export const CONFPUKEY_JWT_REFRESHTOKEN_EXPIRES_IN: string = 'JWT_REFRESHTOKEN_EXPIRES_IN';
    export const CONFPUVAL_JWT_REFRESHTOKEN_EXPIRES_IN: string = '7d';


// SMTP Variables
export const CONFPUKEY_SMTP_SERVICE: string = 'SMTP_SERVICE';
    export const CONFPUVAL_SMTP_SERVICE: string = '';
export const CONFPUKEY_SMTP_HOST: string = 'SMTP_HOST';
    export const CONFPUVAL_SMTP_HOST: string = 'smtp.gmail.com';
export const CONFPUKEY_SMTP_PORT: string = 'SMTP_PORT';
    export const CONFPUVAL_SMTP_PORT: number = 465;
export const CONFPUKEY_SMTP_SECURE: string = 'SMTP_SECURE';
    export const CONFPUVAL_SMTP_SECURE: boolean = true;
export const CONFPUKEY_SMTP_USER: string = 'SMTP_USER';
    export const CONFPUVAL_SMTP_USER: string = 'smtpuser';
export const CONFPUKEY_SMTP_PASS: string = 'SMTP_PASS';
    export const CONFPUVAL_SMTP_PASS: string = 'smtppassword';
export const CONFPUKEY_SMTP_FROM_EMAIL: string = 'SMTP_FROM_EMAIL';
    export const CONFPUVAL_SMTP_FROM_EMAIL: string = 'from@gmail.com';

// Data format
export const CONFPUKEY_FORMAT_DATE_TIME: string = 'FORMAT_DATE_TIME';
    export const CONFPUVAL_FORMAT_DATE_TIME: string = 'd MMM yyyy hh:mm:ss aaa';
export const CONFPUKEY_FORMAT_DATE: string = 'FORMAT_DATE';
    export const CONFPUVAL_FORMAT_DATE: string = 'd MMM yyyy';
export const CONFPUKEY_FORMAT_TIME: string = 'FORMAT_TIME';
    export const CONFPUVAL_FORMAT_TIME: string = 'hh:mm:ss aaa';

// Pagination
export const CONFPUKEY_NUM_OF_RECORDS_PER_PAGE: string = 'NUM_OF_RECORDS_PER_PAGE';
    export const CONFPUVAL_NUM_OF_RECORDS_PER_PAGE: number = 25;

// image processing
export const CONFPUKEY_IMG_THUMB_WIDTH: string = 'IMG_THUMB_WIDTH';
    export const CONFPUVAL_IMG_THUMB_WIDTH: number = 200;
export const CONFPUKEY_IMG_THUMB_HEIGHT: string = 'IMG_THUMB_HEIGHT';
    export const CONFPUVAL_IMG_THUMB_HEIGHT: number = 150;
export const CONFPUKEY_IMG_THUMB_FILE_EXTENSION: string = 'IMG_THUMB_FILE_EXTENSION';
    export const CONFPUVAL_IMG_THUMB_FILE_EXTENSION: string = '.jpeg';

// npm Package
export const CONFPUKEY_PACKAGE_APOLLO_SERVER_INCLUDE_STACKTRACE_IN_ERROR_RESPONSES: string = 'PACKAGE_APOLLO_SERVER_INCLUDE_STACKTRACE_IN_ERROR_RESPONSES';


// database entity 
export const CONFPUKEY_ENTITY_PREFIX = 'ENTITY_PREFIX';
    export const CONFPUVAL_ENTITY_PREFIX = 'x_';


// ----------------------------------------
// PROJECT SPECIFICATION (third-party-apis)
// ----------------------------------------

// self-graphql-microservice http://APP_LISTEN_HOST:APP_HTTP_PORT_EXPRESS/GRAPHQL_ROOT_SLUG
export const CONFPUKEY_SGQLMICROSER_USERNAME: string = 'SGQLMICROSER_USERNAME';
    export const CONFPUVAL_SGQLMICROSER_USERNAME: string = 'self-rest-app';
export const CONFPUKEY_SGQLMICROSER_IDENTIFY: string = 'SGQLMICROSER_IDENTIFY';
    export const CONFPUVAL_SGQLMICROSER_IDENTIFY: string = 'xxx';

// self-ai-app-graphql-api
export const CONFPUKEY_SAIAPPGQLAPI_USERNAME: string = 'SAIAPPGQLAPI_USERNAME';
    export const CONFPUVAL_SAIAPPGQLAPI_USERNAME: string = 'self-ai-app';
export const CONFPUKEY_SAIAPPGQLAPI_IDENTIFY: string = 'SAIAPPGQLAPI_IDENTIFY';
    export const CONFPUVAL_SAIAPPGQLAPI_IDENTIFY: string = 'xxx';



// bulksms.com: https://www.bulksms.com/developer/json/v1/#section/Overview
export const CONFPUKEY_BULKSMS_BASE_URL: string = 'BULKSMS_BASE_URL';
    export const CONFPUVAL_BULKSMS_BASE_URL: string = 'https://api.bulksms.com/v1/';
export const CONFPUKEY_BULKSMS_TOKEN_ID: string = 'BULKSMS_TOKEN_ID';
    export const CONFPUVAL_BULKSMS_TOKEN_ID: string = '';
export const CONFPUKEY_BULKSMS_TOKEN_SECRET: string = 'BULKSMS_TOKEN_SECRET';
    export const CONFPUVAL_BULKSMS_TOKEN_SECRET: string = '';
export const CONFPUKEY_BULKSMS_AUTH_HEADER_NAME: string = 'BULKSMS_AUTH_HEADER_NAME';
    export const CONFPUVAL_BULKSMS_AUTH_HEADER_NAME: string = 'Authorization';
export const CONFPUKEY_BULKSMS_AUTH_TYPE: string = 'BULKSMS_AUTH_TYPE';
    export const CONFPUVAL_BULKSMS_AUTH_TYPE: string = 'Basic';