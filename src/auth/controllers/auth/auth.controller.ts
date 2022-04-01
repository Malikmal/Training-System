import { Body, Controller, Get, Post, Req } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    // return 'login';
    return {
      username,
      password,
    };
  }

  @Get('logout')
  async logout() {
    return 'logout';
  }

  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('profile') profile: string,
  ) {
    // return 'register';
    return {
      name,
      email,
      username,
      password,
      profile,
    };
  }
}
