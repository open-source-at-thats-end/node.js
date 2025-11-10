export interface SendEmailAttachmentInputType{
    filename: string;
    contentType: string;
    path: string;
}
export interface VariableType{
    [key: string] : any
}
export interface SendEmailWithTemplateFile{
    filePath: string;
    fileVar: VariableType;
}
export interface SendEmailWithTemplateContent{
    content: string;
    contentVar?: VariableType;
}
export interface SendEmailInputTypeBase {
    from: string;
    to: string | string[];
    subject: string;

    sender?: string | undefined;
    cc?: string | string[];
    bcc?: string | string[];
    replyTo?: string | string[];
    attachments?: SendEmailAttachmentInputType[];
}
// Union types for body or template any one must be present
export type SendEmailInputType =
    | (SendEmailInputTypeBase & { template: SendEmailWithTemplateFile; body?: never })
    | (SendEmailInputTypeBase & { body: SendEmailWithTemplateContent; template?: never });

export interface Mailer{
    send(input: SendEmailInputType): Promise<any>;
}