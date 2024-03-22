import { IsString } from "class-validator"

export class BookmarkslistDTO {
    @IsString()
    name: string
}