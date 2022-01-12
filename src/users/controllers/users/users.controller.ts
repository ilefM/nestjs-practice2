import {
    ClassSerializerInterceptor,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Inject,
    //NotFoundException,
    Param,
    ParseIntPipe,
    UseFilters,
    UseInterceptors,
} from '@nestjs/common';
import { UserNotFoundException } from 'src/users/exceptions/UserNotFound.exception';
import { HttpExceptionFiler } from 'src/users/filters/HttpException.filter';
import { UsersService } from 'src/users/services/users/users.service';
import { SerializedUser } from 'src/users/types';

@Controller('users')
export class UsersController {
    constructor(
        @Inject('USER_SERVICE') private readonly userService: UsersService,
    ) {}

    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    getUsers() {
        return this.userService.getUsers();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get('username/:username') // added 'username/' to distinct this function from the next one
    getUserByUsername(@Param('username') username: string) {
        const user = this.userService.getUserByUsername(username);
        if (user) return new SerializedUser(user);
        // To exclude the password
        else throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    }

    // @UseInterceptors(ClassSerializerInterceptor)
    // @Get('id/:id')
    // getUserbyId(@Param('id', ParseIntPipe) id: number): SerializedUser {
    //     const user = this.userService.getUserById(id);
    //     if (user) return new SerializedUser(user);
    //     // Unlike the previous function this one have a custom exception handler
    //     // the exception is called in the class UserNotFoundException
    //     else throw new UserNotFoundException('user was not found');
    //     // nestjs exception found in the doc
    //     // else throw new NotFoundException();
    // }

    @UseInterceptors(ClassSerializerInterceptor)
    @UseFilters(HttpExceptionFiler)
    @Get('id/:id')
    getUserbyId(@Param('id', ParseIntPipe) id: number): SerializedUser {
        const user = this.userService.getUserById(id);
        if (user) return new SerializedUser(user);
        else throw new UserNotFoundException();
        // by adding the filter we can control how the reponse
        // of the exception is sent
    }
}
