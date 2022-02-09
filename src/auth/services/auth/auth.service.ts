import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @Inject('USER_SERVICE') private readonly userService: UsersService,
    ) {}

    async validateUser(username: string, password: string) {
        console.log('validateUser');
        const userDB = await this.userService.findUserByUsername(username);
        console.log(password);
        console.log(userDB.password);
        if (userDB) {
            const matched = comparePasswords(password, userDB.password);
            if (matched) {
                console.log('user validation success');
                return userDB;
            } else {
                console.log('passwords doesnt match');
            }
        }
        console.log('user validation failed');
        return null;
    }
}
