import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtConstant } from './constant';
import { BasicStrategya } from './strategies/basic.strategy';

@Module({
  imports: [
    UserModule,
    PassportModule, //.register({ defaultStrategy: 'local' }),
    JwtModule.register({
      secret: JwtConstant.secret,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, BasicStrategya],
  controllers: [AuthController],
})
export class AuthModule {}
