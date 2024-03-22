import { IsString } from "class-validator"

export class LikedlistDTO {
    @IsString()
    name: string

    @IsString()
    assetId: string
}