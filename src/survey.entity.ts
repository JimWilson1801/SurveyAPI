import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class Survey {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty()
    @Column({ length: 255 })
    sendEmail: string;

    @ApiProperty()
    @Column({ length: 255 })
    replyEmail: string;

    @ApiProperty()
    @Column({ length: 255 })
    question1: string;

    @ApiProperty()
    @Column('int')
    question2: number;

    @ApiProperty()
    @Column({ length: 255, nullable: true })
    question3: string;

    @ApiProperty()
    @Column({ length: 255, nullable: true })
    reply: string;
}
