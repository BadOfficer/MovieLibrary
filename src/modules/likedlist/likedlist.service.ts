import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Likedlist } from './models/likedlist.model';

@Injectable()
export class LikedlistService {
    constructor(@InjectModel(Likedlist) private readonly likedlistRepository: typeof Likedlist) {}

    async createAsset (user, dto) {
        const likedlist = {
            user: user.id,
            name: dto.name,
        }

        await this.likedlistRepository.create(likedlist)
        return likedlist
    }
}
