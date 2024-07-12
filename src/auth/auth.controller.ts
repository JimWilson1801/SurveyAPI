import { Controller, Request, Post, UseGuards, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import {LoginDto} from "./LoginDTO"

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() LoginDto: LoginDto) {
    const user = await this.authService.login(LoginDto.username, LoginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }

}

