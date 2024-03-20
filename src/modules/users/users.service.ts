import { BadRequestException, Injectable } from '@nestjs/common'; 
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import * as bcrypt from "bcrypt"
import { CreateUserDTO } from './DTO';
import { AppErrors } from 'src/common/constants/errors';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private readonly userRepository: typeof User) {

    }

    async hashPassword(password) {
        return bcrypt.hash(password, 10)
    }

    async createUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
        dto.password = await this.hashPassword(dto.password)
        const newUser = {
            first_name: dto.first_name,
            last_name: dto.last_name,
            password: dto.password,
            email: dto.email
        }
        await this.userRepository.create(newUser)
        return dto
    }

    async findUserByEmail(email: string) {
        return this.userRepository.findOne({where: { email }})
    }
}
