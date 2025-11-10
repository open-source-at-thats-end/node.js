import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfService } from "../conf/conf.service";
import { LibraryAppService } from "../library.app.service";
import { LogService } from "../log/log.service";
import { OTPType } from "./otp.type";

@Injectable()
export class OtpService {
    private otpDefLength: number = 6;

    constructor(
        private readonly confService: ConfService,
        private readonly logService: LogService
    ) {
        this.logService.setContext(OtpService.name);
    }
    public async hashOtp(otp: string | number): Promise<string> {
        return await LibraryAppService.getHash(String(otp));
    }
    public async validateOtp(optInput: any, otpHash: any, otpExpiry: Date | null): Promise<boolean> {
        // make sure all values are provided to check otp
        if((optInput === undefined || optInput === null) || (otpHash === undefined || otpHash === null) || (otpExpiry === undefined || otpExpiry === null)) {
            throw new BadRequestException(`OTP verification failed, please try again.`);    
        }

        // first check the expiry date
        if(new Date(otpExpiry) > new Date()) {
            // now check the hash
            const otpMatch = await LibraryAppService.matchHash(String(otpHash), String(optInput));
            if(otpMatch === true) {
                return true;
            }
            throw new BadRequestException(`OTP does not match.`);
        }
        throw new BadRequestException(`OTP is expired.`);
    }
    // Generate a numeric OTP of a given length
    public async generateNumberOtp(length: number): Promise<number> {
        // Ensure length is not less than 1, set default
        if (!length || length < 1)
            length = this.otpDefLength;

        // Calculate the minimum and maximum values for the given length
        const min = Math.pow(10, length - 1); // E.g., for length 6, min = 100000
        const max = Math.pow(10, length) - 1; // E.g., for length 6, max = 999999

        // Generate a random number between min and max
        const otp = Math.floor(Math.random() * (max - min + 1)) + min;

        return otp;
    }

    // Generate an alphanumeric OTP of a given length
    public async generateAlphaNumericOtp(length: number): Promise<string> {
        // Ensure length is not less than 1, set default
        if (!length || length < 1)
            length = this.otpDefLength;

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Alphanumeric characters
        let otp = '';
        for (let i = 0; i < length; i++) {
            otp += chars.charAt(Math.floor(Math.random() * chars.length)); // Pick random character
        }
        return otp;
    }
}