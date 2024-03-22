import { Module } from '@nestjs/common';
import { BookmarkslistController } from './bookmarkslist.controller';
import { BookmarkslistService } from './bookmarkslist.service';

@Module({
  controllers: [BookmarkslistController],
  providers: [BookmarkslistService]
})
export class BookmarkslistModule {}
