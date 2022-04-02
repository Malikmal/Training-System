import { Injectable } from '@nestjs/common';
import { SkillRepository } from 'src/skill/repositories/skill.repository';

@Injectable()
export class SkillService {
  constructor(private readonly skillRepository: SkillRepository) {}

  async getAll() {
    return this.skillRepository.getAll();
  }
}
