import { Injectable, Logger } from '@nestjs/common';
import { ActivityCreateDto } from '../dto/activity.create.dto';
import { ActivityRepository } from '../repositories/activity.repository';
import { Activity } from '../schemas/activity.schema';
import { v4 as uuidv4 } from 'uuid';
import { json } from 'stream/consumers';
import { SkillService } from 'src/skill/services/skill.service';
import { UserService } from 'src/user/services/user.service';
@Injectable()
export class ActivityService {
  constructor(
    private readonly activityRepository: ActivityRepository,
    private readonly skillService: SkillService,
    private readonly userService: UserService,
  ) {}

  async getAll(): Promise<Activity[]> {
    return this.activityRepository.getAll();
  }

  async create(activityCreateDto: ActivityCreateDto): Promise<any> {
    // return activityCreateDto;
    const { skill, participants, ...activity } = activityCreateDto;
    // return JSON.stringify({ skill, participants, activity });
    const skillObject = await this.skillService
      .getById(skill)
      .then((skill) => JSON.stringify(skill))
      .then((skill) => JSON.parse(skill));

    return this.activityRepository.create({
      id: uuidv4(),
      skill_id: skillObject.id,
      skill_name: skillObject.skill_name,
      ...activity,
      participants: participants,
    });
  }

  async update(
    activityId: string,
    activityCreateDto: ActivityCreateDto,
  ): Promise<Activity> {
    const activity = await this.activityRepository.getById(activityId);
    return activity;
    // return this.activityRepository.update(activity, activityCreateDto);
  }

  async delete(activityId: string) {
    const activity = await this.activityRepository.getById(activityId);
    return this.activityRepository.delete(activity);
  }
}
