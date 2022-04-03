import { Controller, Get, UseGuards } from '@nestjs/common';
import { SkillService } from 'src/skill/services/skill.service';
import { Skill } from '../schemas/skill.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @UseGuards(AuthGuard('basic'))
  @Get()
  async index(): Promise<Skill[]> {
    return this.skillService.getAll();
  }
}
