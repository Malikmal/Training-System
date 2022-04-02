import { InjectModel } from '@nestjs/mongoose';
import { Skill, SkillDocument } from '../schemas/skill.schema';
import { Model } from 'mongoose';

export class SkillRepository {
  constructor(
    @InjectModel(Skill.name) private skillModel: Model<SkillDocument>,
  ) {}

  async getAll(): Promise<Skill[]> {
    return this.skillModel.find();
  }
}
