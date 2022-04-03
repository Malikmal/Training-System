import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Activity, ActivityDocument } from '../schemas/activity.schema';
import { Model } from 'mongoose';
import { ActivityCreateDto } from '../dto/activity.create.dto';

@Injectable()
export class ActivityRepository {
  constructor(
    @InjectModel(Activity.name) private activityModel: Model<ActivityDocument>,
  ) {}

  async getAll(): Promise<Activity[]> {
    return this.activityModel.find({});
  }

  async getById(id: string): Promise<Activity> {
    return this.activityModel.findOne({ id });
  }

  async create(activity: Activity): Promise<Activity> {
    const newActivity = new this.activityModel(activity);
    return newActivity;
    return newActivity.save();
  }

  async update(
    oldActivity: Activity,
    newActivity: Partial<Activity>,
  ): Promise<Activity> {
    return this.activityModel.findOneAndUpdate(newActivity, oldActivity);
  }

  async delete(activity: Activity): Promise<Activity> {
    return this.activityModel.findOneAndDelete(activity);
  }
}
