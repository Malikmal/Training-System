import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthRegisterDto } from 'src/auth/dto/auth.register.dto';
import { AuthService } from 'src/auth/services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    // return 'login';
    // return {
    //   username,
    //   password,
    // };
    return this.authService.login(username, password);
  }

  @Get('logout')
  async logout() {
    // return 'logout';
    return this.authService.logout();
  }

  @Post('register')
  async register(
    // @Body('name') name: string,
    // @Body('email') email: string,
    // @Body('username') username: string,
    // @Body('password') password: string,
    // @Body('profile') profile: string,
    @Body() authRegisterDto: AuthRegisterDto,
  ) {
    // return 'register';
    // return {
    //   name,
    //   email,
    //   username,
    //   password,
    //   profile,
    // };
    // return authRegisterDto;
    return this.authService.register(authRegisterDto);
  }
}
