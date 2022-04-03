import { Controller, Get, UseGuards } from '@nestjs/common';
import { BasicAuthGuard } from 'src/auth/guards/basic-auth.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Profile } from '../schemas/profile.schema';
import { ProfileService } from '../services/profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(BasicAuthGuard, JwtAuthGuard)
  @Get()
  async index(): Promise<Profile[]> {
    return this.profileService.getAll();
  }
}
