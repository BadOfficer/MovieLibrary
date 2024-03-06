import { IsString } from "class-validator";

export class CreateUserDTO{
    @IsString()
    firstName: string

    @IsString()
    lastName: string

    @IsString()
    password: string

    @IsString()
    email: string
}