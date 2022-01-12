import { Exclude } from 'class-transformer';

export interface User {
    id: number;
    username: string;
    password: string;
}

export class SerializedUser {
    id: number;

    username: string;

    @Exclude() //Exclude the password from the returned object (SerializedUser)
    password: string;

    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial);
    }
}
