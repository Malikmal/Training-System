import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/services/user.service';
import { AuthRegisterDto } from '../dto/auth.register.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validate(username: string, password: string) {
    const user = await this.userService.getByUsername(username);

    if (!user) {
      return null;
    }

    const passwordIsValid = password === user.password;
    return passwordIsValid ? user : null;
  }

  async login(user: User): Promise<any> {
    const payload = { username: user.username, sub: user.id };

    // return {
    //   token: this.jwtService.sign(payload),
    //   profile: user.profile,
    // };
    return this.jwtService.sign(payload);
  }

  async logout() {
    // TODO remove generated token
    // return 'success logout';
  }

  async register(authRegisterDto: AuthRegisterDto) {
    // return authRegisterDto;
    const user = await this.userService.create({
      ...authRegisterDto,
    });

    const payload = {
      username: user.username,
      sub: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
