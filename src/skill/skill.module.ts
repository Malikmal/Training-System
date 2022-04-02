import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Skill, SkillSchema } from './schemas/skill.schema';
import { SkillService } from './services/skill/skill.service';
import { SkillRepository } from './repositories/skill.repository';
import { SkillController } from './controllers/skill/skill.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Skill.name,
        schema: SkillSchema,
      },
    ]),
  ],
  providers: [SkillService, SkillRepository],
  controllers: [SkillController],
})
export class SkillModule {}
