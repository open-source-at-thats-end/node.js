import { Module } from "@nestjs/common";
import { AggregatorService } from "./aggregator.service";

@Module({
    imports: [],
    providers: [AggregatorService],
    exports: [AggregatorService],
})
export class AggregatorModule {

}