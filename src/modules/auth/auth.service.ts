import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDTO } from '../users/DTO';
import { AppErrors } from 'src/common/constants/errors';
import { LoginUserDTO } from './DTO';
import * as bcrypt from "bcrypt"
import { AuthUserResponse } from './response';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService,
                private readonly tokenService: TokenService) {}

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
        const userData = {
            firstName: existUser.first_name,
            lastName: existUser.last_name,
            email: existUser.email
        }
        const token = await this.tokenService.generateJwtToken(userData)
        const user = await this.userService.publicUser(dto.email)
        return {token, ...user}
    }
}
