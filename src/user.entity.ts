import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 255 })
    username: string;

    @Column({ length: 255 })
    password: string;

    @Column({ length: 255 })
    email: string;

    @Column({ default: false })
    isAdmin: boolean;
}