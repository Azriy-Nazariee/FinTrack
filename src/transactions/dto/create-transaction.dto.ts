import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column } from "typeorm";

export class CreateTransactionDto {
    @IsNotEmpty()
    transactionId: string;

    @IsNotEmpty()
    userId: string;

    @IsNotEmpty()
    categoryId: string;

    @IsNumber()
    amount: number;

    @IsString()
    type: string;

    @IsDate()
    date: Date;

    @IsString()
    dateString: string;

    @IsString()
    description: string;
}