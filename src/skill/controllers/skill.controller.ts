import { Controller, Get, UseGuards } from '@nestjs/common';
import { SkillService } from 'src/skill/services/skill.service';
import { Skill } from '../schemas/skill.schema';
import { BasicAuthGuard } from 'src/auth/guards/basic-auth.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @UseGuards(BasicAuthGuard, JwtAuthGuard)
  @Get()
  async index(): Promise<Skill[]> {
    return this.skillService.getAll();
  }
}
