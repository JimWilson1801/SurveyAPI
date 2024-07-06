import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Survey {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, { nullable: true })
    sendUser: User;

    @ManyToOne(() => User, { nullable: true })
    replyUser: User;

    @Column({ length: 255 })
    question1: string;

    @Column('int')
    question2: number;

    @Column({ length: 255, nullable: true })
    question3: string;

    @Column({ length: 255, nullable: true })
    reply: string;
}
