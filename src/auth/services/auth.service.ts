import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/services/user.service';
import { AuthRegisterDto } from '../dto/auth.register.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(username: string, password: string) {
    return { username, password };
  }

  async logout() {
    return 'success logout';
  }

  async register(authRegisterDto: AuthRegisterDto) {
    // return authRegisterDto;
    return this.userService.create({
      id: uuidv4(),
      ...authRegisterDto,
    });
  }
}
