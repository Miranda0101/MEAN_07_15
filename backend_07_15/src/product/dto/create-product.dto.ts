/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Transform } from "class-transformer";
import { IsString, IsNumber } from "class-validator";

export class CreateProductDto {
    @IsString()
    productName: string;

    @IsNumber()
    quantity: number;

    @IsString({each: true})
    tag: string[];

    // @Transform(({ value })=>{parseInt(value, 10)})
    // price: number;
    constructor(){
        // default values
    }

    sort(){}
}
