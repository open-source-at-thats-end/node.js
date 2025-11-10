import { ArrayMinSize, ArrayNotEmpty, equals, IsInt, IsNotEmpty, registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

export function IsNumberOrNumberArray(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'isNumberOrNumberArray',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    if (typeof value === 'number') {
                        return Number.isInteger(value);
                    } else if (Array.isArray(value)) {
                        return value.length > 0 && value.every(val => Number.isInteger(val));
                    }
                    return false;
                },
                defaultMessage(args: ValidationArguments) {
                    return 'Input should be a number or an array of numbers with at least one element.';
                },
            },
        });
    };
}

export class NumberOrNumberArray {
    @IsNumberOrNumberArray({
        message: "Please enter a numeric id or an array of numeric ids as input."
    })
    input!: number | number[];
}
export class NumberArrayOnly {
    @IsInt({
        each: true, 
        always: true,
        message: "Please enter numeric id(s) as an input."
    })
    @ArrayNotEmpty({
        message: "Required at least 1 numeric id to process further."
    })
    input!: number | number[];
}

export function isNumberArray(input: any): input is number[] {
    const check = input.every((item: any) => typeof item === 'number');
    return Array.isArray(input) && check;
}


// match 2 fields values
export const IsSameAs = <T>(property: keyof T, options?: ValidationOptions) =>
  (object: any, propertyName: string) =>
    registerDecorator({
      target: object.constructor,
      propertyName,
      options,
      constraints: [property],
      validator: IsSameAsConstraint,
});

/**
 * @usage
 * @IsSameAs<DtoClass>('password_or_your_filed_name')
 * confirmPassword_or_your_field_name: string; 
 **/
@ValidatorConstraint({ name: 'IsSameAs' })
export class IsSameAsConstraint implements ValidatorConstraintInterface {
  validate(value: any, args?: ValidationArguments): boolean {
    const [propertyNameToCompare] = args?.constraints || [];
    const propertyValue = (args?.object as any)[propertyNameToCompare];
    return equals(value, propertyValue);
}
defaultMessage(args?: ValidationArguments): string {
    const [propertyNameToCompare] = args?.constraints || [];
    return `${args?.property} does not match the ${propertyNameToCompare}`;
  }
}