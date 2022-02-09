import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User as UserEntity } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { SerializedUser, User } from 'src/users/types';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    private users: User[] = [];

    getUsers(): SerializedUser[] {
        return this.users.map((user) => new SerializedUser(user));
    }

    getUserByUsername(username: string): User {
        return this.users.find((user) => user.username === username);
    }

    getUserById(id: number): User {
        return this.users.find((user) => user.id === id);
    }

    createUser(createUserDto: CreateUserDto) {
        const password = encodePassword(createUserDto.password);
        const newUser = this.userRepository.create({
            ...createUserDto,
            password,
        });
        return this.userRepository.save(newUser);
    }

    // in this case we will search by username but we can do it by email
    findUserByUsername(username: string): Promise<UserEntity | undefined> {
        return this.userRepository.findOne({ username });
    }
}
