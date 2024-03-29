import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateUserDTO {
    @ApiProperty()
    @IsString()
    first_name: string

    @ApiProperty()
    @IsString()
    last_name: string

    @ApiProperty()
    @IsString()
    password: string

    @ApiProperty()
    @IsString()
    email: string
}

export class UpdateUserDTO {

    @ApiProperty()
    @IsString()
    first_name: string

    @ApiProperty()
    @IsString()
    last_name: string

    @ApiProperty()
    @IsString()
    email: string
}