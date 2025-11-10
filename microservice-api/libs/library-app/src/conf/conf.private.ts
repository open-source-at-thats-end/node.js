export interface AllowedFilesType {
    validFileFormat: string[];
    validFileFormatMsg: string;
    validMimeType: string[];
  }
export const AllowedFiles: AllowedFilesType = {
    validFileFormat: ['jpeg', 'jpg', 'png', 'svg', 'gif', 'doc', 'docx', 'pdf', 'xsl', 'xslx', 'odt', 'ods', 'txt', 'csv', 'json', 'xml', 'number', 'ppt', 'pptx', 'keynote', 'zip', 'rar', '7z', 'mp4', 'mkv', 'avi', 'mov', 'wmv', 'flv', 'mp3', 'wav', 'ogg', 'apk', 'ipa', 'exe'],
    validFileFormatMsg: `Only jpeg, jpg, png, svg, gif, doc, docx, pdf, xls, xlsx, odt, ods, txt, csv, json, xml, number, ppt, pptx, keynote, zip, rar, 7z, mp4, mkv, avi, mov, wmv, flv, mp3, wav, ogg, apk, ipa, and exe files are allowed.`,
    validMimeType: [
        'image/jpeg',         // jpeg, jpg
        'image/jpg',         // jpeg, jpg
        'image/png',          // png
        'image/svg+xml',      // svg
        'image/gif',          // gif
        'application/msword', // doc
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // docx
        'application/pdf',    // pdf
        'application/vnd.ms-excel', // xls
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // xlsx
        'application/vnd.oasis.opendocument.text', // odt
        'application/vnd.oasis.opendocument.spreadsheet', // ods
        'text/plain',         // txt
        'text/csv',           // csv
        'application/json',   // json
        'application/xml',    // xml
        'application/octet-stream', // number (generic binary file)
        'application/vnd.ms-powerpoint', // ppt
        'application/vnd.openxmlformats-officedocument.presentationml.presentation', // pptx
        'application/vnd.apple.keynote', // keynote
        'application/zip',    // zip
        'application/x-rar-compressed', // rar
        'application/x-7z-compressed',  // 7z
        'video/mp4',          // mp4
        'video/x-matroska',   // mkv
        'video/x-msvideo',    // avi
        'video/quicktime',    // mov
        'video/x-ms-wmv',     // wmv
        'video/x-flv',        // flv
        'audio/mpeg',         // mp3
        'audio/wav',          // wav
        'audio/ogg',          // ogg
        'application/vnd.android.package-archive', // apk
        'application/vnd.iphone', // ipa
        'application/x-msdownload' // exe
    ],
};

export const CONFPR_TODAY: Date = new Date();

export const CONFPR_STATEFUL_AUTHORIZATION_HEADER_NAME: string = 'statefulauthorization';
export const CONFPR_REQ_HEADER_KEY_STATEFUL_USER:string = "statefuluser"; // api end point user info
export const CONFPR_JWT_AUTH_PAYLOAD_NAME: string = 'auth';
export const CONFPR_LOCAL_STORAGE_DIR: string = '/local-storage';
export const CONFPR_APPLICATION_LOCAL_STORAGE_FILE: string = 'als.txt';
export const CONFPR_THUMBNAIL_FILE_PREFIX: string = 'thumbnail.';
export const CONFPR_MICROSERVICES_ROOT_DIR: string = 'apps';

export const AUTHCONF_PUBLIC_END_POINT: string[] = ['HelloGraph', "GraphLogin","GraphResetPassword","GraphRefreshJWT"]; // "GraphSignup", "GraphWhoAmI"
export const AUTHCONF_REQ_HEADER_KEY_API_USER:string = "apiuser"; // api end point user info
export const AUTHCONF_REQ_HEADER_KEY_AUTH:string = "authorization";
export const AUTHCONF_REQ_HEADER_KEY_COOKIE:string = "cookies";
export const AUTHCONF_REQ_HEADER_KEY_SESSION:string = "session";
export const AUTHCONF_REQ_HEADER_KEY_SESSION_STORE:string = "sessionStore";
export const AUTHCONF_REQ_HEADER_KEY_PREFLIGHT:string = "apollo-require-preflight";



