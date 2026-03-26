import { PartialType } from '@nestjs/mapped-types';
import { CreateBudgetDto } from './create-budget.dto';
import { IsNotEmpty, IsNumber, IsEnum } from 'class-validator';

export class UpdateBudgetDto extends PartialType(CreateBudgetDto) {

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
