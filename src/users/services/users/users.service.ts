import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: 1,
            username: 'irion1',
            password: 'irion1',
        },
        {
            id: 2,
            username: 'irion2',
            password: 'irion2',
        },
        {
            id: 3,
            username: 'irion3',
            password: 'irion3',
        },
        {
            id: 4,
            username: 'irion4',
            password: 'irion4',
        },
    ];

    getUsers(): SerializedUser[] {
        return this.users.map((user) => new SerializedUser(user));
    }

    getUserByUsername(username: string): User {
        return this.users.find((user) => user.username === username);
    }

    getUserById(id: number): User {
        return this.users.find((user) => user.id === id);
    }
}
