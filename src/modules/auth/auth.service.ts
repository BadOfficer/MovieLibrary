import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDTO } from '../users/DTO';
import { AppErrors } from 'src/common/constants/errors';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    async registerUsers (dto: CreateUserDTO): Promise <CreateUserDTO> {
        const existUser = await this.userService.findUserByEmail(dto.email)
        if(existUser) throw new BadRequestException(AppErrors.USER_EXIST)

        return this.userService.createUser(dto)
    }
}
