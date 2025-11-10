import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cnfpub from './conf.public';
import * as cnfpvt from './conf.private';
import { format, getDate, getYear } from 'date-fns';
import path, { join } from 'path';

@Injectable()
export class ConfService extends ConfigService{
/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ GENERAL CONFIG █████████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 **/

    private readonly _cwd = process.cwd();
    get cwd(): string {
        return this._cwd;
    }


     
/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ PRIVATE CONFIG █████████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 **/

    get today(): Date {
        return new Date();
    }
    get statefulAuthorizationHeaderName(): string {
        return cnfpvt.CONFPR_STATEFUL_AUTHORIZATION_HEADER_NAME;
    }
    get reqHeaderKeyStatefulUser(): string {
        return cnfpvt.CONFPR_REQ_HEADER_KEY_STATEFUL_USER;
    }
    get jwtAuthPayloadName(): string {
        return cnfpvt.CONFPR_JWT_AUTH_PAYLOAD_NAME;
    }
    get localStorageDir(): string{
        return cnfpvt.CONFPR_LOCAL_STORAGE_DIR;
    }
    get localStorageDirPath(): string {
        return path.join(this.cwd, this.localStorageDir, this.env);
    }
    get applicationLocalStorageFile(): string {
        return cnfpvt.CONFPR_APPLICATION_LOCAL_STORAGE_FILE;
    }
    get applicationLocalStorageFilePath(): string {
        return path.join(this.localStorageDirPath, this.applicationLocalStorageFile);
    }
    get thumbnailFilePrefix(): string {
        return cnfpvt.CONFPR_THUMBNAIL_FILE_PREFIX;
    }
    get microservicesRootDir(): string {
        return cnfpvt.CONFPR_MICROSERVICES_ROOT_DIR;
    }
    get microservicesRootDirPath(): string {
        return path.join(this.cwd, this.microservicesRootDir);
    }

    


/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ JWT AUTH CONFIG ████████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 **/

    get publicEndPoint(): string[] {
        return cnfpvt.AUTHCONF_PUBLIC_END_POINT;
    }
    get reqHeaderKeyApiUser(): string {
        return cnfpvt.AUTHCONF_REQ_HEADER_KEY_API_USER;
    }
    get reqHeaderKeyAuth(): string {
        return cnfpvt.AUTHCONF_REQ_HEADER_KEY_AUTH;
    }
    get reqHeaderKeyCookie(): string {
        return cnfpvt.AUTHCONF_REQ_HEADER_KEY_COOKIE;
    }
    get reqHeaderKeySession(): string {
        return cnfpvt.AUTHCONF_REQ_HEADER_KEY_SESSION;
    }
    get reqHeaderKeySessionStore(): string {
        return cnfpvt.AUTHCONF_REQ_HEADER_KEY_SESSION_STORE;
    }
    get reqHeaderKeyPreflight(): string {
        return cnfpvt.AUTHCONF_REQ_HEADER_KEY_PREFLIGHT;
    }



/**
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 * █ PUBLIC CONFIG ██████████████████████████████████████████████████████████████████████████████████████████████████
 * ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████
 **/

    get env() : string {
        return this.get<string>(cnfpub.CONFPUKEY_NODE_ENV) ?? cnfpub.CONFPUVAL_NODE_ENV_PRODUCTION;
    }
    get thisMicroserviceName(): string {
        return 'app';
    }
    /**
     * Returns a boolean indicating whether the current environment is the test environment.
     *
     * @return {boolean} True if the environment is the test environment, false otherwise.
     */
    get isTestEnv(): boolean {
        return this.env === cnfpub.CONFPUVAL_NODE_ENV_TEST;
    }
    
    /**
     * Returns a boolean indicating whether the current environment is the development environment.
     *
     * @return {boolean} True if the environment is the development environment, false otherwise.
     */
    get isDevelopmentEnv(): boolean {
        return this.env === cnfpub.CONFPUVAL_NODE_ENV_DEVELOPMENT;
    }
    
    /**
     * Returns a boolean indicating whether the current environment is the production environment.
     *
     * @return {boolean} True if the environment is the production environment, false otherwise.
     */
    get isProductionEnv(): boolean {
        return this.env === cnfpub.CONFPUVAL_NODE_ENV_PRODUCTION;
    }
    get tz(): string | undefined{
        return this.get<string>(cnfpub.CONFPUKEY_TZ);
    }
    get projectName(): string | undefined{
        return this.get<string>(cnfpub.CONFPUKEY_PROJECT_NAME);
    }
    get appListenHost(): string{
        return this.get<string>(cnfpub.CONFPUKEY_APP_LISTEN_HOST) ?? cnfpub.CONFPUVAL_APP_LISTEN_HOST;
    }
    get appHostDomain(): string{
        return this.get<string>(cnfpub.CONFPUKEY_APP_HOST_DOMAIN) ?? cnfpub.CONFPUVAL_APP_HOST_DOMAIN;
    }
    get appHostCdnDomain(): string{
        return this.get<string>(cnfpub.CONFPUKEY_APP_HOST_CDN_DOMAIN) ?? cnfpub.CONFPUVAL_APP_HOST_CDN_DOMAIN;
    }
    get appHostWebDomain(): string{
        return this.get<string>(cnfpub.CONFPUKEY_APP_HOST_WEB_DOMAIN) ?? cnfpub.CONFPUVAL_APP_HOST_WEB_DOMAIN;
    }
    get appHostAiDomain(): string{
        return this.get<string>(cnfpub.CONFPUKEY_APP_HOST_AI_DOMAIN) ?? cnfpub.CONFPUVAL_APP_HOST_AI_DOMAIN;
    }
    get appHostBackofficeWebDomain(): string{
        return this.get<string>(cnfpub.CONFPUKEY_APP_HOST_BACKOFFICE_WEB_DOMAIN) ?? cnfpub.CONFPUVAL_APP_HOST_BACKOFFICE_WEB_DOMAIN;
    }
    get appLocalWebDomain(): string{
        return this.get<string>(cnfpub.CONFPUKEY_APP_LOCAL_WEB_DOMAIN) ?? cnfpub.CONFPUVAL_APP_LOCAL_WEB_DOMAIN;
    }
    get appLocalWebPort(): string{
        return this.get<string>(cnfpub.CONFPUKEY_APP_LOCAL_WEB_PORT) ?? cnfpub.CONFPUVAL_APP_LOCAL_WEB_PORT;
    }
    get appLocalBackofficeWebDomain(): string{
        return this.get<string>(cnfpub.CONFPUKEY_APP_LOCAL_BACKOFFICE_WEB_DOMAIN) ?? cnfpub.CONFPUVAL_APP_LOCAL_BACKOFFICE_WEB_DOMAIN;
    }
    get appLocalBackofficePort(): string{
        return this.get<string>(cnfpub.CONFPUKEY_APP_LOCAL_BACKOFFICE_WEB_PORT) ?? cnfpub.CONFPUVAL_APP_LOCAL_BACKOFFICE_WEB_PORT;
    }
    get appLocalWebHostDomain(): string{
        return `http://${this.appLocalWebDomain}:${this.appLocalWebPort}`;
    }
    get appLocalBackOfficeWebHostDomain(): string{
        return `http://${this.appLocalBackofficeWebDomain}:${this.appLocalBackofficePort}`;
    }
    get maxFileSize(): number{
        return this.get<number>(cnfpub.CONFPUKEY_MAX_FILE_SIZE) ?? cnfpub.CONFPUVAL_MAX_FILE_SIZE;
    }
    get maxFiles(): number{
        return this.get<number>(cnfpub.CONFPUKEY_MAX_FILES) ?? cnfpub.CONFPUVAL_MAX_FILES;
    }
    get logDir(): string{
        return this.get<string>(cnfpub.CONFPUKEY_LOG_DIR) ?? cnfpub.CONFPUVAL_LOG_DIR;
    }
    
    /**
     * Returns the path to the log directory based on the current working directory,
     * log directory, environment, and today's date.
     *
     * @return {string} The path to the log directory.
     */
    get logDirPath(): string {
        return path.join(this.cwd, this.logDir, this.env, `${getYear(this.today)}`, `${format(this.today, 'MMM')}`, `${getDate(this.today)}`);
    }
    get uploadDir(): string {
        return this.get<string>(cnfpub.CONFPUKEY_UPLOAD_DIR) ?? cnfpub.CONFPUVAL_UPLOAD_DIR;
    }
    
    /**
     * Returns the path to the upload directory based on the current working directory and the upload directory.
     *
     * @return {string} The path to the upload directory.
     */
    get uploadDirPath(): string {
        return path.join(this.cwd, this.uploadDir);
    }
    get tmpDir(): string {
        return this.get<string>(cnfpub.CONFPUKEY_TMP_DIR) ?? cnfpub.CONFPUVAL_TMP_DIR;
    }
    
    /**
     * Returns the path to the temporary directory by joining the current working directory with the temporary directory name.
     *
     * @return {string} The path to the temporary directory.
     */
    get tmpDirPath(): string {
        return path.join(this.cwd, this.tmpDir);
    }
    get imageDir(): string {
        return this.get<string>(cnfpub.CONFPUKEY_IMAGE_DIR) ?? cnfpub.CONFPUVAL_IMAGE_DIR;
    }
    
    /**
     * Returns the path to the image directory by joining the current working directory with the image directory name.
     *
     * @return {string} The path to the image directory.
     */
    get imageDirPath(): string {
        return path.join(this.cwd, this.imageDir);
    }
    get commonSecret(): string {
        return this.get<string>(cnfpub.CONFPUKEY_COMMON_SECRET) ?? cnfpub.CONFPUVAL_COMMON_SECRET;
    }
    get commonSalt(): string {
        return this.get<string>(cnfpub.CONFPUKEY_COMMON_SALT) ?? cnfpub.CONFPUVAL_COMMON_SALT;
    }
    get commonIv(): string {
        return this.get<string>(cnfpub.CONFPUKEY_COMMON_IV) ?? cnfpub.CONFPUVAL_COMMON_IV;
    }
    
    /**
     * Retrieves the value of `oneByteSize` from the configuration.
     * If the value is not present in the configuration, it returns the default value `cnfpub.CONFPUVAL_ONE_BYTE_SIZE`.
     *
     * @return {number} The value of `oneByteSize` or the default value.
     */
    get oneByteSize(): number {
        return this.get<number>(cnfpub.CONFPUKEY_ONE_BYTE_SIZE) ?? cnfpub.CONFPUVAL_ONE_BYTE_SIZE;
    }
    get cookieSecret(): string | undefined{
        return this.get<string>(cnfpub.CONFPUKEY_COOKIE_SECRET);
    }
    get sessionSecret(): string | undefined{
        return this.get<string>(cnfpub.CONFPUKEY_SESSION_SECRET);
    }
    get sessionSalt(): string | undefined{
        return this.get<string>(cnfpub.CONFPUKEY_SESSION_SALT);
    }
    get sessionIv(): string | undefined{
        return this.get<string>(cnfpub.CONFPUKEY_SESSION_IV);
    }
    get mysqlHost(): string | undefined {    
        return this.get<string>(cnfpub.CONFPUKEY_MYSQL_HOST);
    }
    get mysqlPort(): number | undefined {
        return this.get<number>(cnfpub.CONFPUKEY_MYSQL_PORT);
    }
    get mysqlUser(): string | undefined {
        return this.get<string>(cnfpub.CONFPUKEY_MYSQL_USER) ?? cnfpub.CONFPUKEY_MYSQL_USER;
    }
    get mysqlPass(): string | undefined {
        return this.get<string>(cnfpub.CONFPUKEY_MYSQL_PASS);
    }       
    get mysqlDBname(): string | undefined {
        return this.get<string>(cnfpub.CONFPUKEY_MYSQL_DBNAME);
    }
    get mysqlLogging(): boolean | undefined {
        return this.get<boolean>(cnfpub.CONFPUKEY_MYSQL_LOGGING);
    }
    get mysqlDatabaseType(): string {
        return this.get<string>(cnfpub.CONFPUKEY_MYSQL_DATABASE_TYPE) ?? cnfpub.CONFPUVAL_MYSQL_DATABASE_TYPE_MYSQL;
    }
    get redisHost(): string | undefined {
        return this.get<string>(cnfpub.CONFPUKEY_REDIS_HOST);
    }
    get redisPort(): number | undefined {
        return this.get<number>(cnfpub.CONFPUKEY_REDIS_PORT);
    }
    get redisLogging(): boolean | undefined {
        return this.get<boolean>(cnfpub.CONFPUKEY_REDIS_LOGGING);
    }
    get betterSqlite3DataSource(): string | undefined {
        return this.get<string>(cnfpub.CONFPUKEY_BETTER_SQLITE3_DATA_SOURCE) ?? cnfpub.CONFPUVAL_BETTER_SQLITE3_DATA_SOURCE;
    }
    get appName(): string {
        return this.get<string>(cnfpub.CONFPUKEY_APP_NAME) ?? cnfpub.CONFPUVAL_APP_NAME;
    }
    get appRootDir(): string {
        return this.appName;
    }
    get appRootDirPath(): string {
        return path.join(this.microservicesRootDirPath, this.appRootDir);
    }
    get appHttpPortExpress(): number {
        return this.get<number>(cnfpub.CONFPUKEY_APP_HTTP_PORT_EXPRESS) ?? cnfpub.CONFPUVAL_APP_HTTP_PORT_EXPRESS;    
    }
    get appHttpPortFastify(): number {
        return this.get<number>(cnfpub.CONFPUKEY_APP_HTTP_PORT_FASTIFY) ?? cnfpub.CONFPUVAL_APP_HTTP_PORT_FASTIFY;
    }
    get appGrpcPort(): number {
        return this.get<number>(cnfpub.CONFPUKEY_APP_GRPC_PORT) ?? cnfpub.CONFPUVAL_APP_GRPC_PORT;
    }
    get appWebsocketPort(): number {
        return this.get<number>(cnfpub.CONFPUKEY_APP_WEBSOCKET_PORT) ?? cnfpub.CONFPUVAL_APP_WEBSOCKET_PORT;
    }
    get appDebugPort(): number {
        return this.get<number>(cnfpub.CONFPUKEY_APP_DEBUG_PORT) ?? cnfpub.CONFPUVAL_APP_DEBUG_PORT;
    }
    get appBaseUrl(): string {
        return `http://${this.appListenHost}:${this.appHttpPortExpress}/${this.graphqlRootSlug}`;
    }
    get restAppName(): string {
        return this.get<string>(cnfpub.CONFPUKEY_REST_APP_NAME) ?? cnfpub.CONFPUVAL_REST_APP_NAME;
    }
    get restAppRootDir(): string {
        return this.restAppName;
    }
    get restAppRootDirPath(): string {
        return path.join(this.microservicesRootDirPath, this.restAppRootDir);
    }
    get restRootSlug(): string {    
        return this.get<string>(cnfpub.CONFPUKEY_REST_ROOT_SLUG) ?? cnfpub.CONFPUVAL_REST_ROOT_SLUG;
    }
    get restRootAbsUrl(): string {    
        return path.join(`/`, this.restRootSlug);
    }
    get restSwaggerDocSlug(): string {
        return this.get<string>(cnfpub.CONFPUKEY_REST_SWAGGER_DOC_SLUG) ?? cnfpub.CONFPUVAL_REST_SWAGGER_DOC_SLUG;
    }
    get restSwaggerDocAbsUrl(): string {
        return path.join(`/`, this.restSwaggerDocSlug);
    }
    get restCdnUrl(): string {
        return this.get<string>(cnfpub.CONFPUKEY_REST_CDN_URL) ?? cnfpub.CONFPUVAL_REST_CDN_URL;
    }
    get jwtAccessTokenSecret(): string {
        return this.get<string>(cnfpub.CONFPUKEY_JWT_ACCESSTOKEN_SECRET) ?? cnfpub.CONFPUVAL_JWT_ACCESSTOKEN_SECRET;
    }
    get jwtRefreshTokenSecret(): string {
        return this.get<string>(cnfpub.CONFPUKEY_JWT_REFRESHTOKEN_SECRET) ?? cnfpub.CONFPUVAL_JWT_REFRESHTOKEN_SECRET;
    }
    get jwtIssuer(): string {
        return this.get<string>(cnfpub.CONFPUKEY_JWT_ISSUER) ?? cnfpub.CONFPUVAL_JWT_ISSUER;
    }
    get jwtAudience(): string {
        return this.get<string>(cnfpub.CONFPUKEY_JWT_AUDIENCE) ?? cnfpub.CONFPUVAL_JWT_AUDIENCE;
    }
    get jwtAccessTokenPayloadName(): string {
        return this.get<string>(cnfpub.CONFPUKEY_JWT_ACCESSTOKEN_PAYLOAD_NAME) ?? cnfpub.CONFPUVAL_JWT_ACCESSTOKEN_PAYLOAD_NAME;
    }
    get jwtRefreshTokenPayloadName(): string {
        return this.get<string>(cnfpub.CONFPUKEY_JWT_REFRESHTOKEN_PAYLOAD_NAME) ?? cnfpub.CONFPUVAL_JWT_REFRESHTOKEN_PAYLOAD_NAME;
    }
    get jwtAccessTokenExpiresIn(): string {
        return this.get<string>(cnfpub.CONFPUKEY_JWT_ACCESSTOKEN_EXPIRES_IN) ?? cnfpub.CONFPUVAL_JWT_ACCESSTOKEN_EXPIRES_IN;
    }
    get jwtRefreshTokenExpiresIn(): string {
        return this.get<string>(cnfpub.CONFPUKEY_JWT_REFRESHTOKEN_EXPIRES_IN) ?? cnfpub.CONFPUVAL_JWT_REFRESHTOKEN_EXPIRES_IN;
    }
    get smtpService(): string {
        return this.get<string>(cnfpub.CONFPUKEY_SMTP_SERVICE) ?? cnfpub.CONFPUVAL_SMTP_SERVICE;
    }
    get smtpHost(): string {
        return this.get<string>(cnfpub.CONFPUKEY_SMTP_HOST) ?? cnfpub.CONFPUVAL_SMTP_HOST;
    }
    get smtpPort(): number {
        return this.get<number>(cnfpub.CONFPUKEY_SMTP_PORT) ?? cnfpub.CONFPUVAL_SMTP_PORT;
    }
    get smtpSecure(): boolean {
        return this.get<boolean>(cnfpub.CONFPUKEY_SMTP_SECURE) ?? cnfpub.CONFPUVAL_SMTP_SECURE;
    }
    get smtpUser(): string {
        return this.get<string>(cnfpub.CONFPUKEY_SMTP_USER) ?? cnfpub.CONFPUVAL_SMTP_USER;
    }
    get smtpPass(): string {
        return this.get<string>(cnfpub.CONFPUKEY_SMTP_PASS) ?? cnfpub.CONFPUVAL_SMTP_PASS;
    }
    get smtpFromEmail(): string {
        return this.get<string>(cnfpub.CONFPUKEY_SMTP_FROM_EMAIL) ?? cnfpub.CONFPUVAL_SMTP_FROM_EMAIL;
    }
    get formatDateTime(): string {
        return this.get<string>(cnfpub.CONFPUKEY_FORMAT_DATE_TIME) ?? cnfpub.CONFPUVAL_FORMAT_DATE_TIME;
    }
    get formatDate(): string {
        return this.get<string>(cnfpub.CONFPUKEY_FORMAT_DATE) ?? cnfpub.CONFPUVAL_FORMAT_DATE;
    }
    get formatTime(): string {
        return this.get<string>(cnfpub.CONFPUKEY_FORMAT_TIME) ?? cnfpub.CONFPUVAL_FORMAT_TIME;
    }
    get numOfRecordsPerPage(): number {
        return this.get<number>(cnfpub.CONFPUKEY_NUM_OF_RECORDS_PER_PAGE) ?? cnfpub.CONFPUVAL_NUM_OF_RECORDS_PER_PAGE;
    }
    get entityPrefix(): string {
        return this.get<string>(cnfpub.CONFPUKEY_ENTITY_PREFIX) ?? cnfpub.CONFPUVAL_ENTITY_PREFIX;
    }
    get enableApolloServerIntrospection(): boolean{
        return this.get<boolean>(cnfpub.CONFPUKEY_ENAABLE_APOLLO_SERVER_INTROSPECTION) ?? cnfpub.CONFPUVAL_ENAABLE_APOLLO_SERVER_INTROSPECTION;
    }
    get graphqlRootSlug(): string {
        return this.get<string>(cnfpub.CONFPUKEY_GRAPHQL_ROOT_SLUG) ?? cnfpub.CONFPUVAL_GRAPHQL_ROOT_SLUG;
    }
    get graphqlSchemaDir(): string {
        return this.get<string>(cnfpub.CONFPUKEY_GRAPHQL_SCHEMA_DIR) ?? cnfpub.CONFPUVAL_GRAPHQL_SCHEMA_DIR;
    }
    get currentGraphqlSchemaFile(): string {
        return path.join(this.cwd, this.graphqlSchemaDir, `${this.env}.gql`);
    }
    get passwordLifeSpanDays(): number {
        return this.get<number>(cnfpub.CONFPUKEY_PASSWORD_LIFE_SPAN_DAYS) ?? cnfpub.CONFPUVAL_PASSWORD_LIFE_SPAN_DAYS;
    }
    get passwordResetWarningDays(): number {
        return this.get<number>(cnfpub.CONFPUKEY_PASSWORD_RESET_WARNING_DAYS) ?? cnfpub.CONFPUVAL_PASSWORD_RESET_WARNING_DAYS;
    }
    get signinOtpExpireMinutes(): number {
        return this.get<number>(cnfpub.CONFPUKEY_SIGNIN_OTP_EXPIRE_MINUTES) ?? cnfpub.CONFPUVAL_SIGNIN_OTP_EXPIRE_MINUTES;
    }
    get forgotPasswordLinkExpireHours(): number {
        return this.get<number>(cnfpub.CONFPUKEY_FORGOT_PASSWORD_LINK_EXPIRE_HOURS) ?? cnfpub.CONFPUVAL_FORGOT_PASSWORD_LINK_EXPIRE_HOURS;
    }
    get forgotPasswordLinkSendToRecoveryEmail(): boolean {
        return this.get<boolean>(cnfpub.CONFPUKEY_FORGOT_PASSWORD_LINK_SEND_TO_RECOVERY_EMAIL) ?? cnfpub.CONFPUVAL_FORGOT_PASSWORD_LINK_SEND_TO_RECOVERY_EMAIL;
    }
    get imgThumbWidth(): number {
        return this.get<number>(cnfpub.CONFPUKEY_IMG_THUMB_WIDTH) ?? cnfpub.CONFPUVAL_IMG_THUMB_WIDTH;
    }
    get imgThumbHeight(): number {
        return this.get<number>(cnfpub.CONFPUKEY_IMG_THUMB_HEIGHT) ?? cnfpub.CONFPUVAL_IMG_THUMB_HEIGHT;
    }
    get imgThumbFileExtension(): string {
        return this.get<string>(cnfpub.CONFPUKEY_IMG_THUMB_FILE_EXTENSION) ?? cnfpub.CONFPUVAL_IMG_THUMB_FILE_EXTENSION;
    }

    get languageCode(): string {
        return this.get<string>(cnfpub.CONFPUKEY_LANGUAGE_CODE) ?? cnfpub.CONFPUVAL_LANGUAGE_CODE;
    }

    


    // ----------------------------------------
    // PROJECT SPECIFICATION (third-party-apis)
    // ----------------------------------------

    get sgqlmicroserUsername(): string {
        return this.get<string>(cnfpub.CONFPUKEY_SGQLMICROSER_USERNAME) ?? cnfpub.CONFPUVAL_SGQLMICROSER_USERNAME;
    }
    get sgqlmicroserIdentify(): string {
        return this.get<string>(cnfpub.CONFPUKEY_SGQLMICROSER_IDENTIFY) ?? cnfpub.CONFPUVAL_SGQLMICROSER_IDENTIFY;
    }

    get saiappgqlUsername(): string {
        return this.get<string>(cnfpub.CONFPUKEY_SAIAPPGQLAPI_USERNAME) ?? cnfpub.CONFPUVAL_SAIAPPGQLAPI_USERNAME;
    }
    get saiappgqlIdentify(): string {
        return this.get<string>(cnfpub.CONFPUKEY_SAIAPPGQLAPI_IDENTIFY) ?? cnfpub.CONFPUVAL_SAIAPPGQLAPI_IDENTIFY;
    }

    get bulkSmsBaseUrl(): string {
        return this.get<string>(cnfpub.CONFPUKEY_BULKSMS_BASE_URL) ?? cnfpub.CONFPUVAL_BULKSMS_BASE_URL;
    }
    get bulkSmsTokenId(): string {
        return this.get<string>(cnfpub.CONFPUKEY_BULKSMS_TOKEN_ID) ?? cnfpub.CONFPUVAL_BULKSMS_TOKEN_ID;
    }
    get bulkSmsTokenSecret(): string {
        return this.get<string>(cnfpub.CONFPUKEY_BULKSMS_TOKEN_SECRET) ?? cnfpub.CONFPUVAL_BULKSMS_TOKEN_SECRET;
    }
    get bulkSmsAuthHeaderName(): string {
        return this.get<string>(cnfpub.CONFPUKEY_BULKSMS_AUTH_HEADER_NAME) ?? cnfpub.CONFPUVAL_BULKSMS_AUTH_HEADER_NAME;
    }
    get bulkSmsAuthType(): string {
        return this.get<string>(cnfpub.CONFPUKEY_BULKSMS_AUTH_TYPE) ?? cnfpub.CONFPUVAL_BULKSMS_AUTH_TYPE;
    }
}