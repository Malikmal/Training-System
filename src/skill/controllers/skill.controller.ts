import { Controller, Get } from '@nestjs/common';
import { SkillService } from 'src/skill/services/skill.service';
import { Skill } from '../schemas/skill.schema';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Get()
  async index(): Promise<Skill[]> {
    return this.skillService.getAll();
  }
}
