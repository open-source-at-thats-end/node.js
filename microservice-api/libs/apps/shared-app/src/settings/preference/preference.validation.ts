import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments, registerDecorator, ValidationOptions } from "class-validator";
import { SettingPreferenceJsonInputDto } from "./dto/preference.dto";
import { SettingTypeEnum } from "../type/type.enum";

@ValidatorConstraint({ name: 'RequiredForRecordBasedSettingType', async: false })
export class RequiredForRecordBasedSettingType implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments): boolean {
    const input = args.object as SettingPreferenceJsonInputDto;
    
    // set type array which required record id
    const requiredType = [SettingTypeEnum.USER_SETTINGS]; 

    if (requiredType.includes(input.setting_type)) {
      return (value !== undefined && value !== null && value !== '' && value !== 0) || (Array.isArray(value) && value.length > 0);
    }
    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `For the selected setting type, record_id is required.`;
  }
}

// custom decorator
export function ValidateRequiredForRecordBasedSettingType(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: RequiredForRecordBasedSettingType,
    });
  };
}
