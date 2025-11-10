import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, ValidationPipe, ValidationPipeOptions, Type } from '@nestjs/common';
import { validate, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { LogService } from '../log/log.service';
import { ConfService } from '../conf/conf.service';
import { NumberOrNumberArray } from './data.validation.type';

@Injectable()
export class DataValidationPipe extends ValidationPipe implements PipeTransform<any> {
  constructor(
    private readonly confService: ConfService,
    private readonly logService: LogService
  ) {
    const defaultOptions: ValidationPipeOptions = {
      whitelist: true,
      transform: true,
      forbidUnknownValues: true,
      stopAtFirstError: false,
      exceptionFactory: (errors: ValidationError[]) => {
        this.GlobalValidationPipeException(errors, logService);
      },
    }
    super(defaultOptions);
  }
  
  
  async transform(values: any, metatype: ArgumentMetadata) {
    return await super.transform(values, metatype);
  }
  /**
   * 
   * THIS FUNCTION IS USED AT BOOTSTRAP DO NOT CHANGE WITHOUT UNDERSTANDING
   * APPLICATION MIGHT CRASH
   * 
   * Filters validation errors and throws a BadRequestException with a formatted error message.
   * This function make sure that error is passed in errors.message parameter from errors.constraints
   * This makes end users to understand and capture the error message easely
   * 
   * In any condition, client implementation need to check for 2 parameters to get error message in response
   * errors.message 
   * errors.extensions.originalError.message (this is an array of validation message(s))
   *
   * @param {ValidationError[]} errors - An array of validation errors.
   * @param {LogService} logService - The logging service.
   * @return {void}
   */
  GlobalValidationPipeException(errors: ValidationError[], logService: LogService): void {
    logService.error(errors);
    
    if(errors.length === 0) return;

    // create error message for end client
    const getErorMessage = (field: string, value: any, msg: any) => {
      let eMsg: string = '';

      // creating meaningful error message using string concat to make it easy to understand
      eMsg += `Invalid [`; 
      eMsg += `${field}`;

      (
        (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') || 
        (typeof value === 'object' && Object.keys(value).length > 0) ||
        (Array.isArray(value) && value.length > 0)
      ) 
      ? eMsg += `: ${value}` 
      : '';

      eMsg += `]: `; 
      eMsg += `${msg}`; 

      return eMsg; //`Invalid [${field}${(value &&  != undefined) ? `: ${value}` : ''}]: ${msg}`;
    }
    
    let outMessage: string[] = [];
    errors.map((error, i) => {
        let tmpMessage: any = '';
        if(typeof error.constraints === 'object'){
            tmpMessage = Object.values(error.constraints);
            tmpMessage.map((msg: string, j: number) => {
                tmpMessage[j] = getErorMessage(error.property, error.value, msg); //`Invalid [${error.property}: ${error.value}]: ${msg}`;
            });
        } else {
          tmpMessage = getErorMessage(error.property, error.value, error.constraints); //`Invalid [${error.property}: ${error.value}]: ${error.constraints}`;
        }
        outMessage = [...outMessage, ...tmpMessage];
    })
    const message = outMessage.join(' | ');
    throw new BadRequestException(logService.redactSensitive(message));
  }
  async validateArrayInput<T>(input: T[], validationClass: Type<T>): Promise<boolean> {
    let forException: any[] = []; 
    for(let i = 0; i < input.length; i++){
      const toInstance: any = plainToInstance(validationClass, input[i]);
      const errors = await validate(toInstance);
      if (errors.length > 0) {
        // pass user input record number to validator exceptation, so error can be pointed to correct record in input
        // errors[0] = {...errors[0], ...{record: i+1}};
        forException = [...forException, ...errors];
      }
    }
    if(forException.length > 0){
      this.GlobalValidationPipeException(forException, this.logService);
    }
    return true;
  }
  async validateIDIsNumberOrNumberArray<T>(input: number | number[]): Promise<boolean> {
    const check = new NumberOrNumberArray();
    check.input = input;
    return this.validateArrayInput<NumberOrNumberArray>([check], NumberOrNumberArray);
  }
  getValidationArgumentMetaData(validationClass: Type<any>): ArgumentMetadata {
    const meta: ArgumentMetadata = {
      type: 'body',
      metatype: validationClass,
      data: 'input',
    }
    return meta;
  }

  // below are for trial purpose
  async transformCustom(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidateCustom(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
  private toValidateCustom(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}