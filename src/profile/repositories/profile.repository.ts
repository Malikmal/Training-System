import { Profile, ProfileDocument } from '../schemas/profile.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

export class ProfileRepository {
  constructor(
    @InjectModel(Profile.name) private profileModel: Model<ProfileDocument>,
  ) {}

  async getAll(): Promise<Profile[]> {
    return this.profileModel.find();
  }
}
