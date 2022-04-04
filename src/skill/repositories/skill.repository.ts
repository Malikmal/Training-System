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

  async getById(skillId: string): Promise<Skill> {
    // return this.skillModel.findOne({ kill_id: skillId });
    return new Promise(async (resolve, reject) => {
      try {
        const skill = await this.skillModel.findOne({ kill_id: skillId });
        resolve(skill);
      } catch (error) {
        reject(error);
      }
    });
  }
}
