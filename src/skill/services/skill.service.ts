import { Injectable } from '@nestjs/common';
import { SkillRepository } from 'src/skill/repositories/skill.repository';
import { Skill } from '../schemas/skill.schema';

@Injectable()
export class SkillService {
  constructor(private readonly skillRepository: SkillRepository) {}

  async getAll(): Promise<Skill[]> {
    return this.skillRepository.getAll();
  }
}
