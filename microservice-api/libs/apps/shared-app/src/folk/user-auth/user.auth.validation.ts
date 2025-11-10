import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({ name: 'IdentifyOrOtp', async: false })
export class IdentifyOrOtpFieldRequired implements ValidatorConstraintInterface {
  validate(_: any, args: ValidationArguments) {
    const object = args.object as any;
    return !!(object.identify || object.otp);
  }

  defaultMessage(args: ValidationArguments) {
    return `At least one of the following fields must be provided: identify or otp.`;
  }
}