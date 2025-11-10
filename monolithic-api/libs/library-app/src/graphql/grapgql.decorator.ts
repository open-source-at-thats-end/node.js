import 'reflect-metadata';
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

// ████████████████████████████████████████████████████
function getFields(fieldNodes: any[], key: string = ''): Record<string, any> {
    const fields: Record<string, any> = {}; // Use Record for type safety
  
    fieldNodes.forEach((node: any) => {
      const fieldName = node.name.value;
  
      if (node.selectionSet && node.selectionSet.selections) {
        // Nested field with selection set
        fields[fieldName] = getFields(node.selectionSet.selections, fieldName);
      } else {
        // Leaf field (no nested selection set)
        fields[fieldName] = true; // Or specific value based on your needs
      }
    });
    return fields;
}

  /**
   * omit  __typename if end client request through graphql end point
   * this is required as we need to pass selection in sql query and __typename is not a database filed and it cause an error
   * 
   * @param obj graphql response object
   * @returns new object without __typename
   */
export function omit__typename<T extends Record<string, any>>(obj: T): T {
  // omit  __typename if end client request through graphql end point
  const omitTypename = (key:any, value:any) => (key === '__typename' ? undefined : value)
  const newPayload = JSON.parse(JSON.stringify(obj), omitTypename)

  return newPayload;
}
export const GraphQLBodyContext = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
      const ctx = GqlExecutionContext.create(context);
      
      // const co = ctx.getContext()
      // const bq = co.req.body.query
      // const queryObject = JSON.parse(bq);
  
      const info = ctx.getInfo();
      const fieldNodes = info.fieldNodes[0].selectionSet?.selections;
      if(fieldNodes && fieldNodes !== undefined){
        const fields = getFields(fieldNodes);
      
        // omit  __typename if end client request through graphql end point
        //const omitTypename = (key:any, value:any) => (key === '__typename' ? undefined : value)
        //const newPayload = JSON.parse(JSON.stringify(fields), omitTypename)
        const newPayload = omit__typename(fields)

        return newPayload;
      }
      return null;
    },
);

// ████████████████████████████████████████████████████
// Define a constant for storing metadata key
const RESOLVE_FIELD_RELATION_META_KEY = Symbol('RESOLVE_FIELD_RELATION_META_KEY');

export interface ResolveGraphFieldRelationMetadataType {
  /**
   * field original data type
   **/
  type: any;
}
// Define meta data struvture
export interface ResolveGraphFieldRelationDataType {
  /**
   * primary key fields of tragated remote entity (microservice)
   **/
  primaryKey: string,
  
  /**
   * foreign key fields of current entity which is relate to remote entity  (microservice) primary key
   **/
  foreignKey: string,

  // ALL BELOW ARE NOT IN USE FOR NOW. NO EFFECT ATALL

  /**
   * if any nested relation which is relate to current entity field but in remote its nested
   **/
  nestedRelation?: JSON,
  relationType?: 'isManyToOne' | 'isOneToMany' | 'isOneToOne' | 'isManyToMany'
}
export interface ResolveGraphFieldRelationMeta{
  propertyKey: string | symbol,
  data: ResolveGraphFieldRelationDataType
}

export interface ResolveGraphFieldRelationSetMeta extends ResolveGraphFieldRelationMeta {
  propertyMeta: ResolveGraphFieldRelationMetadataType
}
// Create the custom decorator
export function ResolveGraphFieldRelation(type: () => Function,  data: ResolveGraphFieldRelationDataType): PropertyDecorator {
  return (target: Object, propertyKey: string | symbol) => {
    // Get existing metadata or initialize an empty array
    const existingMeta = Reflect.getMetadata(RESOLVE_FIELD_RELATION_META_KEY, target) || [];

    const propertyMeta: ResolveGraphFieldRelationMetadataType = {
      type: type(),
    };

    // Add the new field's metadata
    existingMeta.push({
      propertyKey,
      data,
      propertyMeta,
    });

    // Set the updated metadata back on the target object
    Reflect.defineMetadata(RESOLVE_FIELD_RELATION_META_KEY, existingMeta, target);
  };
}

// Helper function to retrieve metadata for an entity
export async function getEntityResolveGraphFieldRelationMetadata(target: Object): Promise<ResolveGraphFieldRelationSetMeta[]> {
  return await Reflect.getMetadata(RESOLVE_FIELD_RELATION_META_KEY, target) || [];
}