import { Injectable } from '@nestjs/common';
import { SkillRepository } from 'src/skill/repositories/skill.repository';
import { Skill } from '../schemas/skill.schema';

@Injectable()
export class SkillService {
  constructor(private readonly skillRepository: SkillRepository) {}

  async getAll(): Promise<Skill[]> {
    return this.skillRepository.getAll();
  }

  async getById(skillId: string): Promise<Skill> {
    // return await this.skillRepository.getById(skillId);
    return new Promise(async (resolve, reject) => {
      try {
        const skill = await this.skillRepository.getById(skillId);
        resolve(skill);
      } catch (error) {
        reject(error);
      }
    });
  }
}
