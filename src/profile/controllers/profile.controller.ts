import { Controller, Get } from '@nestjs/common';
import { Profile } from '../schemas/profile.schema';
import { ProfileService } from '../services/profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  async index(): Promise<Profile[]> {
    return this.profileService.getAll();
  }
}
