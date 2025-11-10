import { BadRequestException, INestApplication, Injectable } from '@nestjs/common';
import { ConfService } from './conf/conf.service';
import { ConfStaticService } from './conf/conf.static.service';
import { LogService } from './log/log.service';
import argon2 from 'argon2';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';
import helmet from 'helmet';
import expressCompression from 'compression';
import { DataValidationPipe } from './data-validation/data.validation.pipe';
import killPort from 'kill-port';
import cookieParser from 'cookie-parser';
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata';
import { LogStaticService } from './log/log.static.service';
import { CliOptions, EntryModule, FileMetadata } from './library.app.type';
import fs from 'fs-extra';
import path, { join } from "path";
import mimeTypes from 'mime-types';

@Injectable()
export class LibraryAppService {
    constructor(
        public readonly confService: ConfService,
        public readonly logService: LogService
    ){
        this.logService.setContext(LibraryAppService.name);
    }
    /**
     * Encodes a string to base64.
     *
     * @param {string} str - The string to encode.
     * @return {Promise<string>} The encoded base64 string.
     */
    public static async base64Enc(str: string | number): Promise<string>{
        return Buffer.from(new String(str)).toString('base64') as string;
    }
    /**
     * Decodes a base64 string to ASCII.
     *
     * @param {sring} base64 - The base64 string to decode.
     * @return {Promise<string>} The decoded ASCII string.
     */
    public static async base64Dec(base64: string): Promise<string>{
        return Buffer.from(new String(base64), 'base64').toString('utf8') as string;
    }
    /**
     * Hashes the input string using argon2 algorithm and returns the base64 encoded hash.
     *
     * @param {string} str - The string to be hashed.
     * @return {Promise<string>} The base64 encoded hash of the input string.
     */
    public static async getHash(str: string): Promise<string>{
        try{
            if(str){
                const hash = await argon2.hash(str, { 
                  type: argon2.argon2id,   
                  timeCost: 3, // from 1 to 10
                  memoryCost: 4096, // from 1,024 KB (1 MB) to 8,192 KB (8 MB) or more
                  parallelism: 1, // from 1 (single-threaded) or a small number (e.g., 2 or 4) for parallel processing
                });
                const base64 = await LibraryAppService.base64Enc(hash);
                return base64;
            }
            throw new BadRequestException('String not found for hashing.');
        } catch (err){
            throw new BadRequestException(`Error hashing your string. Veryfy your string and try again. ${err}`);
        }
    }
    /**
     * A function to match a hash with the input by decoding the hash and verifying it.
     *
     * @param {string} hash - The base64 hash to match.
     * @param {string} input - The input string to match with the hash.
     * @return {Promise<boolean>} A boolean indicating if the hash matches the input.
     */
    public static async matchHash(hash: string, input: string): Promise<boolean>{
        try{
            const argon = await LibraryAppService.base64Dec(hash);
            return await argon2.verify(argon, input);
        } catch (err) {
            return false;
        }
        return false;
    }
    /**
     * Formats the given number of bytes into a human-readable string representation.
     *
     * @param {number} bytes - The number of bytes to format.
     * @return {string} The formatted string representation of the bytes, either in MB or GB.
     */
    public static formatBytes(bytes: number): string {
        const byte = ConfStaticService.conf.oneByteSize;
        const megabytes = bytes / (byte * byte);
        if (megabytes >= byte) {
          const gigabytes = megabytes / byte;
          return `${gigabytes.toFixed(2)} GB`;
        }
        return `${megabytes.toFixed(2)} MB`;
    }
    /**
     * Masks an email address by replacing all characters except the first one of the
     * local part with asterisks.
     *
     * @param {string} email - The email address to mask.
     * @return {string} The masked email address.
     */
    public static maskEmail(email: string): string {
        const [name, domain] = email.split('@');
        const maskedName = name[0] + '*'.repeat(name.length - 1);
        return `${maskedName}@${domain}`;
    }
    /**
     * Masks a mobile number by replacing all characters except the first two and last three with asterisks.
     *
     * @param {string} mobileNumber - The mobile number to mask.
     * @return {string} The masked mobile number.
     */
    public static maskMobileNumber(mobileNumber: string): string {
        return mobileNumber.slice(0, 2) + '*'.repeat(mobileNumber.length - 5) + mobileNumber.slice(-3);
    }
    /**
     * A method to filter keys from an object based on another object.
     * Returns a new object with only the keys present in the reference object.
     *
     * @param {T} input - The object to filter keys from.
     * @param {any} reference - The object to filter keys with.
     * @return {Promise<Partial<T>>} A new object with only the keys present in the reference object.
     */
    public static async filterInputAsReference<T extends object>(input: any, reference: T): Promise<Partial<T>> {
        return Object.keys(input).reduce((acc, key) => {
            if (key in reference) {
                acc[key as keyof T] = input[key as keyof T];
            }
            return acc;
        }, {} as Partial<T>);
    }
    /**
     * Reads file metadata from the given file path.
     *
     * @param {string} filePath - The path to the file
     * @return {Promise<FileMetadata>} A promise with file metadata
     */
    public static async getFileMetadata(filePath: string): Promise<FileMetadata> {
        const stats = fs.statSync(filePath);
        const { base, name, ext } = path.parse(filePath);
        const mimeType = mimeTypes.lookup(filePath) || 'unknown';
        const encoding = mimeTypes.charset(mimeType) || 'utf-8'; 
        
        const resp: FileMetadata = {
            filename: base, // File name with extension
            name: name, // File name without extension
            extension: ext, // File extension
            size: stats.size, // File size in bytes
            created: stats.birthtime, // File creation date
            modified: stats.mtime, // Last modified date
            mimetype: mimeType, // Get mimetype based on extension
            encoding: encoding, // Encoding inferred from mime type
        };

        return resp;
    }
    /**
     * A function to initialize a NestFastifyApplication with specified parameters.
     *
     * @param {AM} appModule - The module to create the application with.
     * @param {string} app - The app name to set required configurations.
     */
    public formatTime(seconds: number): string {
        const minute = 60;
        const hour = 60 * minute;
        const day = 24 * hour;
        const year = 365.25 * day; // Account for leap years (average days per year)
        const month = year / 12; // Exact average month duration in seconds
    
        if (seconds >= year) {
            const years = Math.floor(seconds / year);
            const remainingSeconds = seconds % year;
            const months = Math.floor(remainingSeconds / month);
            return `${years} years${months > 0 ? `, ${months} months` : ''}`;
        } else if (seconds >= month) {
            const months = Math.floor(seconds / month);
            const remainingSeconds = seconds % month;
            const days = Math.floor(remainingSeconds / day);
            return `${months} months${days > 0 ? `, ${days} days` : ''}`;
        } else if (seconds >= day) {
            const days = Math.floor(seconds / day);
            const remainingSeconds = seconds % day;
            const hours = Math.floor(remainingSeconds / hour);
            return `${days} days${hours > 0 ? `, ${hours} hours` : ''}`;
        } else if (seconds >= hour) {
            const hours = Math.floor(seconds / hour);
            const remainingSeconds = seconds % hour;
            const minutes = Math.floor(remainingSeconds / minute);
            return `${hours} hours${minutes > 0 ? `, ${minutes} minutes` : ''}`;
        } else if (seconds >= minute) {
            const minutes = Math.floor(seconds / minute);
            const remainingSeconds = seconds % minute;
            return `${minutes} minutes${remainingSeconds > 0 ? `, ${remainingSeconds} seconds` : ''}`;
        } else {
            return `${seconds} seconds`;
        }
    }
    /** Helper: attach SIGTERM/SIGINT handlers once */
    private static bindProcessSignals(closeFn: () => Promise<void> | void, log: LogService) {
        const shutdown = async (signal: string) => {
        try {
                log.warn({ signal }, 'Shutdown signal received');
                await closeFn();
                log.info('Resources closed gracefully');
            } catch (err) {
                log.error({ err }, 'Error during shutdown');
            } finally {
                process.exit(0);
            }
        };
        process.once('SIGINT', () => shutdown('SIGINT'));
        process.once('SIGTERM', () => shutdown('SIGTERM'));
    }
    
    /** Nice-to-have: human name for logs */
    private static getModuleName(m: any) {
        if (typeof m?.then === 'function') return 'Promise<EntryModule>';
        if (typeof m === 'function') return m.name || 'AnonymousModule';
        return 'DynamicModule';
    }
    public parseUsaPersonName(fullName: string | null): {
        fname: string | null;
        mname: string | null;
        lname: string | null;
      } {
        if (!fullName) return { fname: null, mname: null, lname: null };
      
        // Normalize whitespace & trim
        let raw = fullName.replace(/\s+/g, ' ').trim();
      
        // Strip a trailing country marker (e.g., ", USA") or stray commas at end
        raw = raw.replace(/,\s*(usa|u\.s\.a\.)$/i, '').replace(/,+\s*$/, '');
      
        // Common honorifics/prefixes to drop
        const PREFIXES = new Set([
          'mr', 'mrs', 'ms', 'miss', 'mx', 'dr', 'prof', 'sir', 'madam', 'rev', 'fr', 'sr', 'br', 'sra', 'sra.', 'sr.', 'sra',
        ]);
      
        // Suffixes to drop from end (not returned; add if you later want to keep them)
        const SUFFIXES = new Set([
          'jr', 'sr', 'ii', 'iii', 'iv', 'v', 'phd', 'ph.d', 'md', 'm.d', 'esq', 'esquire', 'jd', 'j.d', 'dds', 'd.o', 'do',
        ]);
      
        // Particles that can belong to the surname (kept with last name)
        const PARTICLES = new Set([
          'da', 'de', 'del', 'della', 'di', 'du', 'la', 'le', 'van', 'von', 'der', 'den', 'ter', 'ten', 'te',
          'st', 'st.', 'saint', 'dos', 'das', 'de la', 'de los', 'de las', 'van der', 'von der'
        ]);
      
        // Helpers
        const cleanToken = (t: string) =>
          t.replace(/^\p{Zs}+|\p{Zs}+$/gu, '')
           .replace(/\.+$/g, '') // drop trailing dots: "R." -> "R"
           .replace(/['’]+/g, "'"); // normalize apostrophes
        const toKey = (t: string) => cleanToken(t).toLowerCase();
      
        // Handle comma form: "Last, First Middle"
        if (raw.includes(',')) {
          const [left, right] = raw.split(',', 2).map(s => s.trim()).filter(Boolean);
          if (left && right) {
            // Remove prefixes from right side (e.g., "Dr John R")
            const rightTokens = right.split(' ').map(cleanToken).filter(Boolean);
            while (rightTokens.length && PREFIXES.has(toKey(rightTokens[0]))) rightTokens.shift();
      
            // Remove suffix tokens at the end
            while (rightTokens.length && SUFFIXES.has(toKey(rightTokens[rightTokens.length - 1])))
              rightTokens.pop();
      
            const lastTokens = left.split(' ').map(cleanToken).filter(Boolean);
            if (lastTokens.length === 0 || rightTokens.length === 0) {
              return { fname: null, mname: null, lname: raw || null };
            }
            const fname = rightTokens[0] || null;
            const mname = rightTokens.slice(1).join(' ') || null;
            const lname = lastTokens.join(' ') || null;
            return { fname, mname, lname };
          }
        }
      
        // Space-separated form
        let tokens = raw.split(' ').map(cleanToken).filter(Boolean);
        if (tokens.length === 0) return { fname: null, mname: null, lname: null };
      
        // Drop leading honorifics
        while (tokens.length && PREFIXES.has(toKey(tokens[0]))) tokens.shift();
      
        // Drop trailing suffixes
        while (tokens.length && SUFFIXES.has(toKey(tokens[tokens.length - 1]))) tokens.pop();
      
        // After stripping, handle 1- and 2-token cases quickly
        if (tokens.length === 1) {
          return { fname: tokens[0] || null, mname: null, lname: null };
        }
        if (tokens.length === 2) {
          return { fname: tokens[0] || null, mname: null, lname: tokens[1] || null };
        }
      
        // 3+ tokens: detect multi-word surname with particles
        // Start with the last token as surname; pull in preceding particles (incl. multi-word like "de la", "van der")
        const lower = tokens.map(toKey);
        const surnameParts: string[] = [tokens[tokens.length - 1]];
        let i = tokens.length - 2;
      
        const isParticle = (idx: number) => {
          const one = lower[idx];
          if (PARTICLES.has(one)) return true;
      
          // Check multi-word combos (two-token particles)
          if (idx > 0) {
            const two = `${lower[idx - 1]} ${lower[idx]}`;
            if (PARTICLES.has(two)) return 'two' as const;
          }
          return false;
        };
      
        while (i >= 0) {
          const part = isParticle(i);
          if (part === true) {
            surnameParts.unshift(tokens[i]);
            i -= 1;
          } else if (part === 'two') {
            surnameParts.unshift(tokens[i - 1], tokens[i]);
            i -= 2;
          } else {
            break;
          }
        }
      
        const lname = surnameParts.join(' ') || null;
        const fname = tokens[0] || null;
        const mname = tokens.slice(1, i + 1).join(' ') || null; // tokens between first and last-block
      
        return { fname, mname, lname };
    }
      
    public parseUsaAddress(fullAddress: string | null): {
        address: string | null;   // street only
        city: string | null;
        state: string | null;
        zipcode: string | null;
      } {
        if (!fullAddress) {
          return { address: null, city: null, state: null, zipcode: null };
        }
      
        const raw = fullAddress.replace(/\s+/g, ' ').trim();
      
        // Pattern: "Street, City, ST [ZIP]" (ZIP optional), optional trailing ", USA"
        const m = raw.match(/^(.+?),\s*([^,]+),\s*([A-Za-z]{2})(?:\s+(\d{5}(?:-\d{4})?))?(?:,.*)?$/);
        if (m) {
          return {
            address: m[1] || null,
            city: m[2] || null,
            state: (m[3] || '').toUpperCase() || null,
            zipcode: m[4] || null
          };
        }
      
        // Fallback splitter if regex didn't match
        const parts = raw.split(',').map(s => s.trim()).filter(Boolean);
        if (parts.length >= 3) {
          const street = parts[0];
          const city = parts[1];
          const stateZip = parts.slice(2).join(' '); // join any extra pieces
          const m2 = stateZip.match(/^([A-Za-z]{2})\s*(\d{5}(?:-\d{4})?)?/);
          return {
            address: street || null,
            city: city || null,
            state: m2?.[1] ? m2[1].toUpperCase() : null,
            zipcode: m2?.[2] || null
          };
        }
      
        return { address: raw || null, city: null, state: null, zipcode: null };
    }
    public determineNameType(name: string | null): 'person' | 'organization' | 'uncertain' {
      // ----- inline dictionaries -----
      const HONORIFICS = new Set([
        'mr','mrs','ms','miss','mx','dr','prof','rev','fr','sir','lady','madam','pastor','rabbi','imam','capt','col','gen'
      ]);
      const PERSON_SUFFIX = new Set(['jr','sr','ii','iii','iv','v']);
      const LEGAL_SUFFIX = new Set([
        'inc','inc.','llc','l.l.c.','ltd','ltd.','plc','plc.','corp','corp.','co','co.','company','pc','p.c.','pa','p.a.',
        'llp','l.l.p.','pllc','p.l.l.c.','gmbh','sarl','sàrl','srl','spa','b.v.','bv','n.v.','nv','oy','ab','as','kk'
      ]);
      // general org-ish words
      const ORG_KEYWORDS = new Set([
        'group','team','partners','associates','association','foundation','trust','capital','ventures','holdings','studio',
        'design','salon','bar','grill','cafe','restaurant','pizza','bank','university','college','school','academy',
        'hospital','clinic','laboratory','ministries','church','temple','mosque','synagogue','library','museum',
        'realty','realestate','real','estate','realtors','brokerage','insurance','law','attorneys','planners','services',
        'department','bureau','agency','ministry','office','city','county','state','government','company'
      ]);
      // stronger “business noun” when it appears (esp. as last token)
      const ORG_BUSINESS_NOUNS = new Set([
        'group','team','partners','associates','realty','brokerage','company','holdings','ventures','capital','foundation'
      ]);
      const COMMON_FIRST = new Set([
        'mary','patricia','jennifer','linda','elizabeth','barbara','susan','jessica','sarah','karen','nancy','lisa','margaret',
        'john','james','robert','michael','william','david','richard','joseph','thomas','charles','christopher','daniel',
        'matthew','anthony','mark','paul','steven','andrew','joshua','kevin','brian','ryan','alexander','benjamin','samuel',
        'patrick','julia','emma','olivia','ava','isabella','sophia','amelia','mia'
      ]);
    
      // ----- inline helpers -----
      const tokenize = (s: string): string[] =>
        s.split(/[\s,;]+/).map(t => t.replace(/^\W+|\W+$/g, '')).filter(Boolean);
      const containsAnyToken = (tokensLower: string[], dict: Set<string>) =>
        tokensLower.some(t => dict.has(t));
      const startsWithToken = (tokensLower: string[], dict: Set<string>) =>
        tokensLower.length > 0 && dict.has(tokensLower[0]);
      const endsWithToken = (tokensLower: string[], dict: Set<string>) =>
        tokensLower.length > 0 && dict.has(tokensLower[tokensLower.length - 1]);
      const containsPhrase = (sLower: string, phrases: string[]) =>
        phrases.some(p => sLower.includes(p));
      const isTitleCase = (t: string) => /^[A-Z][a-z]+(?:[-'][A-Z][a-z]+)*$/.test(t);
      const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
      const hasSurnameParticles = (tokensLower: string[]): boolean => {
        const singles = new Set(['da','de','del','della','di','du','la','le','van','von','der','den','st','saint','dos','das']);
        const doubles = new Set(['de la','de los','de las','van der','von der']);
        for (let i = 0; i < tokensLower.length; i++) {
          if (singles.has(tokensLower[i])) return true;
          if (i > 0 && doubles.has(`${tokensLower[i-1]} ${tokensLower[i]}`)) return true;
        }
        return false;
      };
    
      // ----- main logic -----
      if (!name || !name.trim()) return 'uncertain';
    
      const raw = name.trim();
      const lower = raw.toLowerCase();
      const tokens = tokenize(raw);
      const ltokens = tokens.map(t => t.toLowerCase());
    
      let personScore = 0;
      let orgScore = 0;
    
      // Hard signals
      if (containsAnyToken(ltokens, LEGAL_SUFFIX)) orgScore += 4;
      if (/[&+/]/.test(raw)) orgScore += 2;
      if (/^the\s+/i.test(raw)) orgScore += 2;
      if (containsPhrase(lower, ['city of','county of','state of','department','bureau','agency','ministry','office of']))
        orgScore += 3;
      if (/\b(www\.|\.com\b|\.org\b|\.net\b|@)\b/i.test(raw)) orgScore += 3;
    
      if (startsWithToken(ltokens, HONORIFICS)) personScore += 2;
      if (endsWithToken(ltokens, PERSON_SUFFIX)) personScore += 2;
    
      // "Last, First M." pattern
      if (/,/.test(raw)) {
        const [a,b] = raw.split(',',2).map(s => s.trim());
        if (a && b && wordCount(b) <= 3) personScore += 3;
      }
    
      // Keyword buckets / shapes
      const hasOrgKw = containsAnyToken(ltokens, ORG_KEYWORDS) || lower.includes('real estate');
      if (hasOrgKw) orgScore += 3; // boost to outweigh simple two-Token person bias
    
      // Stronger boost if last token is a business noun (e.g., "... Group", "... Team", "... Realty")
      if (tokens.length >= 2 && ORG_BUSINESS_NOUNS.has(ltokens[ltokens.length - 1])) {
        orgScore += 2;
      }
    
      if (tokens.filter(t => /^[A-Z]{2,}$/.test(t)).length >= 2) orgScore += 2; // many ALL-CAPS
      if (/\d/.test(raw)) orgScore += 2;                                       // digits in name
      if (tokens.length === 2) personScore += 1;
      if (tokens.length === 3) personScore += 1;
      if (tokens.length >= 4) orgScore += 1;
      if (tokens.some(t => /^[A-Z]\.?$/.test(t))) personScore += 1;
      if (ltokens.some(t => COMMON_FIRST.has(t))) personScore += 2;
      if (hasSurnameParticles(ltokens)) personScore += 1;
      if (raw.includes('-') && tokens.length <= 3) personScore += 1;
    
      // Decision
      if (orgScore >= 4 && orgScore >= personScore + 1) return 'organization';
      if (personScore >= 4 && personScore >= orgScore + 1) return 'person';
      if (orgScore - personScore >= 2) return 'organization';
      if (personScore - orgScore >= 2) return 'person';
    
      // Tie-breakers (only apply 2-TitleCase rule when NO org keyword present)
      if (!hasOrgKw && tokens.length === 2 && tokens.every(isTitleCase)) return 'person';
      if (/\b(inc\.?|llc|llp|corp\.?|plc|gmbh|sarl|sàrl|srl)\b/i.test(raw)) return 'organization';
    
      return 'uncertain';
    }
    
    /** Parse CLI flags; recognizes --dry-run and returns remaining args */
    private static parseCliFlags(argv: string[]): { dryRun: boolean; args: string[] } {
        const args = [...argv.slice(2)]; // drop node + script
        let dryRun = false;
        const remaining: string[] = [];
        for (let i = 0; i < args.length; i++) {
        const a = args[i];
        if (a === '--dry-run') {
            dryRun = true;
            continue;
        }
        remaining.push(a);
        }
        return { dryRun, args: remaining };
    }
     /**
     * A function to initialize HTTP NestExpressApplication with specified parameters.
     *
     * @param {AM} appModule - The module to create the application with.
     */
    public static async httpBootstrap(appModule: EntryModule) {
        const httpApp = await NestFactory.create<NestExpressApplication>(appModule, {  
            bufferLogs: true 
        });
      
        // get global service
        const confService = httpApp.get(ConfService);
        const logService = httpApp.get(LogService);
      
        // set static service for config and log
        ConfStaticService.initialize(confService);
        LogStaticService.initialize(logService);
      
        
        httpApp.enableShutdownHooks();
        this.bindProcessSignals(() => httpApp.close(), logService);

        
        await httpApp.listen(confService.appLocalWebPort);
        console.log(`APP IS RUNNING ON: http://localhost:`+confService.appLocalWebPort);

        return httpApp;        
      }
      /**
        * Worker/bootstrap with NO HTTP server. Great for scrapers, cron, queues.
        */
    public static async workerBootstrap(appModule: EntryModule) {
        const ctx = await NestFactory.createApplicationContext(appModule, {
            bufferLogs: true,
        });

        const confService = ctx.get(ConfService);
        const logService = ctx.get(LogService);

        ConfStaticService.initialize(confService);
        LogStaticService.initialize(logService);

        // graceful shutdown
        // (providers implementing OnModuleDestroy will run on ctx.close())
        this.bindProcessSignals(() => ctx.close(), logService);

        logService.info(`Worker started (no HTTP): ${this.getModuleName(appModule)}`);
        return ctx;
    }
    /**
    * CLI bootstrap: start DI, run a task, then shut down.
    * @param task  A function that receives the Nest application context and returns a Promise.
    */
    public static async cliBootstrap(appModule: EntryModule, task: (ctx: INestApplication, opts: CliOptions) => Promise<void>, ) {
        const ctx = await NestFactory.createApplicationContext(appModule, { bufferLogs: true });
        const conf = ctx.get(ConfService); const log = ctx.get(LogService);
        ConfStaticService.initialize(conf); LogStaticService.initialize(log);
    
        const { dryRun, args } = this.parseCliFlags(process.argv);
    
        try {
          if (dryRun) log.warn('[DRY RUN] Side-effects will be skipped.');
          await task(ctx as INestApplication, { dryRun, args });
          log.info('CLI task completed');
        } catch (err) {
          log.error({ err }, 'CLI task failed');
          process.exitCode = 1;
        } finally {
          await ctx.close().catch(() => {});
        }
    }
}
