import { LogService } from "./log.service";

export class LogStaticService{
    private static instance: LogService;
    
    static initialize(logService: LogService) {
        if (!LogStaticService.instance) {
            LogStaticService.instance = logService;
        }
    }
    static get log(): LogService {
        if (!LogStaticService.instance) {
          throw new Error('LogService not initialized');
        }
        return LogStaticService.instance;
    }
  }