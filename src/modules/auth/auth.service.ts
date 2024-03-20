import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDTO } from '../users/DTO';
import { AppErrors } from 'src/common/constants/errors';
import { LoginUserDTO } from './DTO';
import * as bcrypt from "bcrypt"
import { AuthUserResponse } from './response';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService) {}

    async registerUser (dto: CreateUserDTO): Promise <CreateUserDTO> {
        const existUser = await this.userService.findUserByEmail(dto.email)
        if(existUser) throw new BadRequestException(AppErrors.USER_EXIST)

        return this.userService.createUser(dto)
    }

    async loginUser(dto: LoginUserDTO): Promise<AuthUserResponse> {
        const existUser = await this.userService.findUserByEmail(dto.email)
        if(!existUser) throw new BadRequestException(AppErrors.USER_NOT_EXIST)
        const validatePassword = await bcrypt.compare(dto.password, existUser.password)
        if(!validatePassword) throw new BadRequestException(AppErrors.USER_WRONG_DATA)
        return existUser
    }
}
