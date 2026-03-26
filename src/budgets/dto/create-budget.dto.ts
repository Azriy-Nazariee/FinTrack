import { IsNotEmpty, IsNumber, IsEnum } from 'class-validator';

export class CreateBudgetDto {

    @IsNotEmpty()
    @IsNumber()
    userId: number;

    @IsEnum(['income', 'expense'])
    limitAmount: number;

    @IsNumber()
    month: number;

    @IsNumber()
    year: number;
}
