import 'reflect-metadata';

// Define a constant for storing metadata key
const ENTITY_UPLOAD_FIELD_META_KEY = Symbol('ENTITY_UPLOAD_FIELD_META_KEY');

// Define meta data struvture
export interface UploadFieldMetadataType {
/**
 * in some cases need to specify completely different path for upload directory
 * upload_root is used for that
 * this will be prefix of the upload_dir and new path will be generated
 * if undefined then it will use entity's default uploaddir
 **/
upload_root?: string;
/**
 * where to save the file for given field
 * pass the absolute path from root of app
 * if any dynamic path is required then set the variable with field name and pass the path
 * a path prefix will be added automatically: /assets/upload/targate-app
 * so, need to set the required path after the targate-app directory
 * 
 * simple example: upload any thing in /user directory
 * upload_dir: /user
 * 
 * only 1 typeof variable allowed:
 * {{ref_id}}
 * 
 * variable pattern example: upload everything in /user/user-id-1 directory
 * define a variable using {{ }} you need to enter the field name which is present in the entity and id is the only unique identifier must be used
 * only ref_id is allowed as a variable
 * upload_dir: /user/{{ref_id}}
 * 
 * too much complex situation is not possible
 * only 1 level of dynamic path is supported
 * that means you can enter as many as static paths as you want but dynamic path will be only one
 * 
 * example: this is possible
 * upload_dir: /user/profile/photo/{{ref_id}}
 * upload_dir: /user/{{ref_id}}/profile/photo/
 * 
 * example: this is not possible as 2 dynamic paths are not supported
 * upload_dir: /user/{{ref_id}}/role/{{role_ref_id}}/profile/photo
 * 
 **/
upload_dir: string;

/**
 * file access URL of uploaded file
 * this will be processed during data fetching process and will be generated automatically using set logic of module
 * this is a virtual field which will be used to save access path 
**/
access_url_field: any;

/**
 * valid file format as per mime type and file extension
 * 
 * example:
 * valid_file_format: ['jpg', 'png', 'jpeg', 'svg', 'gif'] 
 * valid_file_format: ['doc', 'docx', 'pdf', 'xsl', 'xslx', 'odt', 'ods', 'txt', 'csv', 'json', 'xml', 'number']
 * valid_file_format: ['ppt', 'pptx', 'keynote']
 * valid_file_format: ['zip', 'rar', '7z']
 * valid_file_format: ['mp4', 'mkv', 'avi', 'mov', 'wmv', 'flv']
 * valid_file_format: ['mp3', 'wav', 'ogg']
 * valid_file_format: ['apk', 'ipa', 'exe']
 * 
 **/
valid_file_format: string[];


valid_mime_type: string[];

/**
 * max file size in bytes
 * 
 * example:
 * (20 * 1024) = 20 kb
 * (20 * 1024 * 1024) = 20 mb
 * (20 * 1024 * 1024 * 1024) = 20 gb
 * 
 **/
max_file_size: number; 

/**
 * if upload file is refering with entity primary key (id) then set to 1 which is required for proper processing, if ref_id is id in such case this should be set to 1 only
 * if upload file is refering with foreign key (ref_id) then you can set 1 or more then 1 count, but here entity default crud operation should be disabled as all create and delete operation should be performed by upload action only
 * 
 * max number of file(s) allowd for specific field at a time
 * this can be decided manually as per allowed size of 1 file
 * such as if 1 file is 10mb then req_max_count should be small number like 3 or 5 to upload at a time
 * for multiple attachment need to make a call multiple time and upload multiple files
 * 
 * default need to set as 1.
 * Default 1 file is allowed to upload for 1 field
 * 
 * in case of multiple file upload is needed to set the value
 * 
 * this is limit apply to one request
 * example:
 * if a product have multiple images then req_max_count: 5
 * in this case to save images file name there will be 5 fields or seperate tables with foreign key relation
 * if you have speerate table and you want to upload 50 images, you need to make 10 api calls each has 5 images
 * so, this limitation is highely depends on max_file_size for single file to manage annonying errors and do not make post data heavy
 * 
 **/
req_max_count: number;

/**
 * field `id` which is primary key, need to set this field name.
 * if your primary key name is other then id, set accordingly.
 * exclude the prefix of firld name if any in database
 * in case of multiple file upload is needed to set the value
 * 
 * example:
 * if a product have multiple images then ref_id_field: 'product_id'
 * in this case to save images file name there will be 5 fields or seperate tables with foreign key relation
 * in case of seperate table we need to set the foreign key field name here
 * 
 * based on this field ref_id will be saved in this field
 * so, req_max_count is more then 1, there will be a seperate table to save attachments and this required to set the foreign key
 * 
 *
 **/
ref_id_field: string;

/**
 * in case of multiple file update it is possible the ref_id is belongs to different entity
 * in this case relation field name of the parent entity
 * 
 * for example:
 * product has multiple images and there is a product_image entity
 * so, ref_relation: 'fkey_product' on product_image entity
 * make sure the relation is set in your entity
 * 
 * this is the @ManyToOne relation field name of the entity
 * relation can be vrey so use as per requirement
**/
ref_relation_field?: string;

}

export interface UploadFieldMeta{
  propertyKey: string,
  data: UploadFieldMetadataType
}

// Create the custom decorator
export function UploadField(data: UploadFieldMetadataType): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    // Get existing metadata or initialize an empty array
    const existingMeta = Reflect.getMetadata(ENTITY_UPLOAD_FIELD_META_KEY, target) || [];

    // Add the new field's metadata
    existingMeta.push({
      propertyKey,
      data,
    });

    // Set the updated metadata back on the target object
    Reflect.defineMetadata(ENTITY_UPLOAD_FIELD_META_KEY, existingMeta, target);
  };
}

// Helper function to retrieve metadata for an entity
export async function getEntityUploadFieldMetadata(target: Object): Promise<UploadFieldMeta[]> {
  return await Reflect.getMetadata(ENTITY_UPLOAD_FIELD_META_KEY, target) || [];
}