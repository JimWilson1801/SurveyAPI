import { AuthService } from './auth.service';
import { LoginDto } from "./LoginDTO";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(LoginDto: LoginDto): Promise<any>;
}
