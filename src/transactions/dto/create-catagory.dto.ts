import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
    
    @IsNotEmpty()
    catagoryId: number;

    @IsNotEmpty()
    userId: number;
    
    @IsNotEmpty()
    @IsString()
    name: string;
}