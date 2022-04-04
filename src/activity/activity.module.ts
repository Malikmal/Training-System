import { Module } from '@nestjs/common';
import { ActivityService } from './services/activity.service';
import { ActivityController } from './controllers/activity.controller';
import { ActivityRepository } from './repositories/activity.repository';
import { Activity, ActivitySchema } from './schemas/activity.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillModule } from 'src/skill/skill.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    UserModule,
    SkillModule,
    MongooseModule.forFeature([
      {
        name: Activity.name,
        schema: ActivitySchema,
      },
    ]),
  ],
  providers: [ActivityService, ActivityRepository],
  controllers: [ActivityController],
})
export class ActivityModule {}
