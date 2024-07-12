import { UsersService } from '../users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    login(username: string, pass: string): Promise<any>;
}
