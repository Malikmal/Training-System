import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ActivityCreateDto } from '../dto/activity.create.dto';
import { Activity } from '../schemas/activity.schema';
import { ActivityService } from '../services/activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  async index(): Promise<Activity[]> {
    return this.activityService.getAll();
  }

  @Post()
  async create(
    @Body() activityCreateDto: ActivityCreateDto,
  ): Promise<Activity> {
    return this.activityService.create(activityCreateDto);
  }

  @Put(':id')
  async updateUsingPut(
    @Param('id') activityId: string,
    @Body() activityCreateDto: ActivityCreateDto,
  ): Promise<Activity> {
    return this.activityService.update(activityId, activityCreateDto);
  }

  @Patch(':id')
  async updateUsingPatch(
    @Param('id') activityId: string,
    @Body() activityCreateDto: ActivityCreateDto,
  ): Promise<Activity> {
    return this.activityService.update(activityId, activityCreateDto);
  }

  @Delete(':id')
  async delete(@Param('id') activityId: string): Promise<Activity> {
    return this.activityService.delete(activityId);
  }
}
