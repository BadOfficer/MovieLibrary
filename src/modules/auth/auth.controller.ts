import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO } from '../users/DTO';
import { LoginUserDTO } from './DTO';
import { AuthUserResponse } from './response';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("register")
    register(@Body() dto: CreateUserDTO): Promise<CreateUserDTO> {
        return this.authService.registerUser(dto)
    }

    @Post("login")
    login(@Body() dto: LoginUserDTO): Promise<AuthUserResponse> {
        return this.authService.loginUser(dto)
    }
}
