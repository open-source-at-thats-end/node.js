import { ConfService } from "./conf.service";

export class ConfStaticService{
    private static instance: ConfService;
    
    static initialize(confService: ConfService) {
        if (!ConfStaticService.instance) {
            ConfStaticService.instance = confService;
        }
    }
    static get conf(): ConfService {
        if (!ConfStaticService.instance) {
          throw new Error('ConfService not initialized');
        }
        return ConfStaticService.instance;
    }
  }