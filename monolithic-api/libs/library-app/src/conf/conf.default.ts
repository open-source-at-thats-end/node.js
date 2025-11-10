// this file must be same with .env, g.CONFPUig.constant.ts, g.CONFPUig.validation.ts and g.CONFPUig.default.ts
// add those CONFPUigurations which required some process to set default or dependent on other environment or process variables
// it is possible that CONFPUiges defined are not availabe in .env and validation, those are defined directly here to have
import path from "path";
import * as cnfpub from './conf.public';

export const confDefault = () => ({
    // Environment


    // General
    COMMON_SECRET: process.env.COMMON_SECRET ?? cnfpub.CONFPUVAL_COMMON_SECRET,
    COMMON_SALT: process.env.COMMON_SALT ?? cnfpub.CONFPUVAL_COMMON_SALT,
    COMMON_IV: process.env.COMMON_IV ?? cnfpub.CONFPUVAL_COMMON_IV,

    // static storage specification 
    ONE_BYTE_SIZE: process.env.ONE_BYTE_SIZE ?? cnfpub.CONFPUVAL_ONE_BYTE_SIZE,

    
    // stateful data storage
    
    
    // Database


    // Microservice


    // JWT (make sure when you change below 2 token you must change in /libs/global-app/g-CONFPUig/g.CONFPUig.default.ts)
    JWT_ISSUER: process.env.JWT_ISSUER ?? process.env.APP_NAME,


    // SMTP Variables



    // Data format


    // Pagination  
});