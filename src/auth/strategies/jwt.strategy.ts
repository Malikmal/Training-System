import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/services/user.service';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtConstant } from '../constant';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromUrlQueryParameter('token'),
      ignoreExpiration: false,
      secretOrKey: JwtConstant.secret,
    });
  }

  //   validate(validationPayload: { username: string; sub: string }) {
  //     return this.userService.getByUsername(validationPayload.username);
  //   }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      username: payload.username,
    };
  }
}
