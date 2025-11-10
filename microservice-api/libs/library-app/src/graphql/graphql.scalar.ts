import { ASTNode, GraphQLScalarType, Kind, ValueNode } from "graphql";
import { DateTimeTransformerFilter } from "../crud/crud.validation"
import { BadRequestException } from "@nestjs/common";

// TODO: this scaler is not working, need to fix it by checing in laptop
export const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'A date-time string. Such as `07 Apr 2024 10:10:00 am`, compliant with the date-time format.',
  parseValue(value: any) {
    // value from the user (request)
    return DateTimeTransformerFilter(value);
  },
  serialize(value: any) {
    // value sent to the user (response)
    return DateTimeTransformerFilter(value);
  },
  parseLiteral(ast: ASTNode) {
    let t, v='Unknown Date Time';
    switch (ast.kind) {
      case Kind.INT:
      case Kind.STRING:
          t = DateTimeTransformerFilter(ast.value);
          v = ast.value;
        break;
      default:
    }
    if(t instanceof Date && !isNaN(t.getTime())) {
      return t
    }
    throw new BadRequestException(`Value is not a valid date or time: ${v}`);
  }
});