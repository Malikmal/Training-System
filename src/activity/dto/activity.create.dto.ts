export class ActivityCreateDto {
  skill: string; //skill_ids
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  participants: string[]; //user_ids
}
