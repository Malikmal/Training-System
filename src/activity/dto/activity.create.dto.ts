import { Skill } from 'src/skill/schemas/skill.schema';
import { User } from 'src/user/schemas/user.schema';

export class ActivityCreateDto {
  skill_id: Skill;
  skill_name: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  participants: User[];
}
