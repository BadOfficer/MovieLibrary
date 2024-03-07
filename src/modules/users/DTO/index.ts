import { IsString } from "class-validator";

export class CreateUserDTO{
    @IsString()
    first_name: string

    @IsString()
    last_name: string

    @IsString()
    password: string

    @IsString()
    email: string
}