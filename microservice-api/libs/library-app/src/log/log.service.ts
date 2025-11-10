import { Inject, Injectable } from '@nestjs/common';
import { symbol } from 'joi';
import { Params, PARAMS_PROVIDER_TOKEN, PinoLogger } from 'nestjs-pino';
import { CONFPUVAL_ENAABLE_APOLLO_SERVER_INTROSPECTION, CONFPUVAL_NODE_ENV_PRODUCTION, CONFPUVAL_NODE_ENV_TEST } from '../conf/conf.public';

@Injectable()
export class LogService extends PinoLogger {
    private readonly redactSymbole: string = '[REDACTED]';
    
    constructor(@Inject(PARAMS_PROVIDER_TOKEN) params: Params) {
      // try to avoide use of config service here it might cause circular DI
        super(params);
    }

    /**
     * Replaces all occurrences of a sensitive information with a specified redacted string.
     * String is start with given specified. 
     * This method work with patten that anything wich contain _ in word it's from database
     *
     * @param {string} str - The input string containing sensitive information.
     * @param {string} redact - The string to be replaced with the redacted string.
     * @return {string} The input string with all occurrences of the sensitive information redacted.
     */
    redactSensitive(redact: string, regex?: RegExp) {
      // apply recudtion in production mode only
      if(process.env.NODE_ENV === CONFPUVAL_NODE_ENV_PRODUCTION){
        regex = regex ? regex : /\w+_\w+/g; // reduct if word has charactar _  Matches the underscore character.
        //regex = regex ? regex : /^te_\w*_\w+/g; // reduct if word has charactar _ underscore but start with te_
        const replacedString = redact.replace(regex, this.redactSymbole);
        return replacedString;
      }
      return redact;
    }

    // trying to replace all word with [REDACTED] whcih are _ based, in provided object.
    /*
    redactSensitiveInfo(obj: any, sensitiveWords = /\w+_\w+/g  ) {//   /(?:\w+_\w+|_\w+|\w+_)/g
        const redactedValue = '[REDACTED]';
      
        function redactObject(obj: any) {
          if (typeof obj !== 'object' || obj === null) {
            return obj;
          }
      
          const redactedObj = Array.isArray(obj) ? [...obj] : { ...obj };
          for (const key in obj) {
            const value = obj[key];
            if (typeof value === 'string') {
              //redactedObj[key] = sensitiveWords.reduce((acc: any, word: any) => acc.replace(new RegExp(`\\b${word}\\b`, 'g'), redactedValue), value);
              
              // trying below, above is working
              redactedObj[key] = value.replace(sensitiveWords, '[REDACTED]'); 
            } else {
              redactedObj[key] = redactObject(value);
            }
          }
          return redactedObj;
        }
      
        return redactObject(Object.assign({}, obj));
    }
    */
}
