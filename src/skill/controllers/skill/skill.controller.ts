import { Controller, Get } from '@nestjs/common';
import { SkillService } from 'src/skill/services/skill/skill.service';

@Controller('skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Get()
  index() {
    return this.skillService.getAll();
  }
}
