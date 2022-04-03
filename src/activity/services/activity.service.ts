import { Injectable } from '@nestjs/common';
import { ActivityCreateDto } from '../dto/activity.create.dto';
import { ActivityRepository } from '../repositories/activity.repository';
import { Activity } from '../schemas/activity.schema';

@Injectable()
export class ActivityService {
  constructor(private readonly activityRepository: ActivityRepository) {}

  async getAll(): Promise<Activity[]> {
    return this.activityRepository.getAll();
  }

  async create(activityCreateDto: ActivityCreateDto): Promise<any> {
    return activityCreateDto;
    // return this.activityRepository.create({ ...activityCreateDto });
  }

  async update(
    activityId: string,
    activityCreateDto: ActivityCreateDto,
  ): Promise<Activity> {
    const activity = await this.activityRepository.getById(activityId);
    return this.activityRepository.update(activity, activityCreateDto);
  }

  async delete(activityId: string) {
    const activity = await this.activityRepository.getById(activityId);
    return this.activityRepository.delete(activity);
  }
}
