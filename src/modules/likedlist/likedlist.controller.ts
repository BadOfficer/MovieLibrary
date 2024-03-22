import { Body, Controller, Delete, Get, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { LikedlistService } from './likedlist.service';
import { LikedlistDTO } from './DTO';
import { JwtAuthGuard } from 'src/guards/jwt-guard';

@Controller('likedlist')
export class LikedlistController {
    constructor(private readonly likedlistService: LikedlistService) {}

    @UseGuards(JwtAuthGuard)
    @Post("create")
    createAsset (@Body() assetDTO: LikedlistDTO, @Req() request) {
        const user = request.user
        return this.likedlistService.createAsset(user, assetDTO)
    }

    @Get("get-all")
    getAllAssets() {
        return
    }

    @Patch("update") 
    updateAsset() {
        return
    }
 
    @Delete()
    deleteAsset(@Query("id") id: string) {

    }
}
