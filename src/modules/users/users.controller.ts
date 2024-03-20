import { Body, Controller, Post} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './DTO';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post("create-user")
    createUsers(@Body() dto: CreateUserDTO) {
        return this.usersService.createUser(dto)
    }
}
