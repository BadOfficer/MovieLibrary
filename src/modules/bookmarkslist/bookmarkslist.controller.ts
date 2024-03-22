import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { BookmarkslistService } from './bookmarkslist.service';
import { BookmarkslistDTO } from './DTO';
import { JwtAuthGuard } from 'src/guards/jwt-guard';

@Controller('bookmarkslist')
export class BookmarkslistController {
    constructor(private readonly bookmarksService: BookmarkslistService) {}

    @UseGuards(JwtAuthGuard)
    @Post("create")
    createAsset(@Body() assetDTO: BookmarkslistDTO, @Req() request) {
        const user = request.user
        return this.bookmarksService.createAsset(user, assetDTO)
    }
}
