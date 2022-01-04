import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            username: 'irion1',
            password: 'irion1',
        },
        {
            username: 'irion2',
            password: 'irion2',
        },
        {
            username: 'irion3',
            password: 'irion3',
        },
        {
            username: 'irion4',
            password: 'irion4',
        },
    ];

    getUsers() {
        return this.users.map((user) => new SerializedUser(user));
    }

    getUserByUsername(username: string) {
        return this.users.find((user) => user.username === username);
    }
}
