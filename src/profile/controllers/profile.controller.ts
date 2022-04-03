import { Controller, Get, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { Profile } from '../schemas/profile.schema';
import { ProfileService } from '../services/profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(LocalAuthGuard)
  @Get()
  async index(): Promise<Profile[]> {
    return this.profileService.getAll();
  }
}
