import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Bookmarkslist } from './models/bookmarkslist.model';

@Injectable()
export class BookmarkslistService {
    constructor(@InjectModel(Bookmarkslist) private readonly bookmarkslistRepository: typeof Bookmarkslist) {}

    async createAsset(user, dto) {
        const bookmarkslist = {
            user: user.id,
            name: dto.name,
        }
        await this.bookmarkslistRepository.create(bookmarkslist)
        return bookmarkslist
    }
}
