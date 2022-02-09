import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: 'bigint',
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
    })
    email: string;

    @Column({
        default: '',
        nullable: false,
    })
    password: string;
}
