import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class RegisterDto {

    @IsEmail()
    email: string;

    @IsString()
    fullName: string;

    @IsString()
    @MinLength(8)
    password: string;

    @IsString()
    address: string;

    @IsString()
    phoneNumber: string;

    @IsString()
    occupation: string;

    @IsNumber()
    monthlyIncome: number;
}
