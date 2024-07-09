import { User } from './user.entity';
export declare class Survey {
    id: string;
    sendUser: User;
    replyUser: User;
    question1: string;
    question2: number;
    question3: string;
    reply: string;
}
