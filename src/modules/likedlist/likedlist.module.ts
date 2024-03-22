import { Module } from '@nestjs/common';
import { LikedlistController } from './likedlist.controller';
import { LikedlistService } from './likedlist.service';

@Module({
  controllers: [LikedlistController],
  providers: [LikedlistService]
})
export class LikedlistModule {}
