import { Injectable } from '@nestjs/common';
import { ProfileRepository } from '../repositories/profile.repository';
import { Profile } from '../schemas/profile.schema';

@Injectable()
export class ProfileService {
  constructor(private readonly profileRepository: ProfileRepository) {}

  async getAll(): Promise<Profile[]> {
    return this.profileRepository.getAll();
  }
}
