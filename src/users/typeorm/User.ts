import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    id: number;

    @Column({
        default: '',
        nullable: false,
    })
    username: string;

    @Column({
        default: '',
        nullable: false,
        name: 'email_address',
    })
    emailAddress: string;

    @Column({
        default: '',
        nullable: false,
    })
    password: string;
}
