import { Module } from '@nestjs/common';
import { BookmarkslistController } from './bookmarkslist.controller';
import { BookmarkslistService } from './bookmarkslist.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Bookmarkslist } from './models/bookmarkslist.model';

@Module({
  imports: [SequelizeModule.forFeature([Bookmarkslist])],
  controllers: [BookmarkslistController],
  providers: [BookmarkslistService]
})
export class BookmarkslistModule {}
