import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

class BulkSmsRestWebhookRespSubmission {
    @ApiPropertyOptional({ type: String, nullable: true })
    id?: string;

    @ApiPropertyOptional({ type: Date, nullable: true })
    date?: Date;
}

class BulkSmsRestWebhookRespStatus {
    @ApiPropertyOptional({ type: String, nullable: true })
    id?: string;

    @ApiPropertyOptional({ type: String, nullable: true })
    type?: string;
}

export class BulkSmsRestWebhookRespDto {
    @ApiProperty()
    @IsNumber()
    id!: number;

    @ApiProperty({ enum: ['RECEIVED', 'SENT'] })
    type!: 'RECEIVED' | 'SENT';

    @ApiPropertyOptional({ type: Number, nullable: true })
    from?: number;

    @ApiPropertyOptional({ type: Number, nullable: true })
    to?: number;

    @ApiPropertyOptional({ type: String, nullable: true })
    body?: string;

    @ApiPropertyOptional({ type: String, nullable: true })
    encoding?: string;

    @ApiPropertyOptional({ type: Number, nullable: true })
    protocolId?: number;

    @ApiPropertyOptional({ type: Number, nullable: true })
    messageClass?: number;

    @ApiPropertyOptional({ type: Number, nullable: true })
    numberOfParts?: number;

    @ApiPropertyOptional({ type: Number, nullable: true })
    creditCost?: number;

    @ApiPropertyOptional({ type: () => BulkSmsRestWebhookRespSubmission, nullable: true })
    submission?: BulkSmsRestWebhookRespSubmission;

    @ApiPropertyOptional({ type: () => BulkSmsRestWebhookRespStatus, nullable: true })
    status?: BulkSmsRestWebhookRespStatus;

    @ApiPropertyOptional({ type: String, nullable: true })
    relatedSentMessageId?: string | null;

    @ApiPropertyOptional({ type: String, nullable: true })
    userSuppliedId?: string | null;
}