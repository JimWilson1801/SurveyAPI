import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @Column({ length: 255 })
    username: string;

    @ApiProperty()
    @Column({ length: 255 })
    password: string;

    @ApiProperty()
    @Column({ length: 255 })
    email: string;
    
    @ApiProperty()
    @Column({ default: false })
    isAdmin: boolean;
}