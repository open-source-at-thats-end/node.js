export interface BulkSmsReqFrom {
    type: string, //'REPLIABLE', 
}
export interface BulkSmsReqTo {
    type: string, //'GROUP', 
    name: string,
}
export type BulkSmsTo = string | string[] | BulkSmsReqTo;

export type BulkSmsFrom = string | BulkSmsReqFrom;

export interface BulkSmsReqType {
    userSuppliedId: string;
    to: BulkSmsTo;
    /**
     * max body/message characters length: 156
    **/
    body: string;
    from?: BulkSmsFrom;
    encoding?: string; // "TEXT" "UNICODE" "BINARY"
    
}

export interface BulkSmsRespType{
    id: string,
    type: string, // "SENT" "RECEIVED",
    from: string,
    to: string,
    body: string,
    encoding: string,
    protocolId: number,
    messageClass: number,
    numberOfParts: number,
    creditCost: number,
    submission: {
        id: string,
        date: Date
    },
    status: {
        id: string,
        type: string, // "ACCEPTED" "SCHEDULED" "SENT" "DELIVERED" "UNKNOWN" "FAILED"
        subtype: string, // "EXPIRED" "HANDSET_ERROR" "BLOCKED" "NOT_SENT"
    },
    relatedSentMessageId: string,
    userSuppliedId: string
}