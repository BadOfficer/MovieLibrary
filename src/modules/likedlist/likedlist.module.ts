import { Module } from '@nestjs/common';
import { LikedlistController } from './likedlist.controller';
import { LikedlistService } from './likedlist.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Likedlist } from './models/likedlist.model';

@Module({
  imports: [SequelizeModule.forFeature([Likedlist])],
  controllers: [LikedlistController],
  providers: [LikedlistService]
})
export class LikedlistModule {}
