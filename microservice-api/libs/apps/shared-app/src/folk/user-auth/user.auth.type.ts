export interface RecoverForgotPasswordTokenType {
    auth_id: number;
    auth_hash: string;
    otp: string;
    otp_hash: string;
    expiry: Date;
    expiry_hash: string;
    token: string;
}