import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthRegisterDto } from 'src/auth/dto/auth.register.dto';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { AuthService } from 'src/auth/services/auth.service';
import { BasicAuthGuard } from '../guards/basic-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Res() res) {
    const token = await this.authService.login(req.user);
    return res.status(200).send({
      token,
      profile: req.user.profile,
    });
  }

  @Get('logout')
  async logout(@Res() res) {
    await this.authService.logout();
    return res.status(200).send({
      message: 'logout success',
    });
  }

  // @UseGuards(LocalAuthGuard)
  @Post('register')
  async register(@Body() authRegisterDto: AuthRegisterDto, @Res() res) {
    await this.authService.register(authRegisterDto);
    return res.status(200).send({
      message: 'create success',
    });
  }
}
