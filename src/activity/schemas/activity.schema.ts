import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Skill } from 'src/skill/schemas/skill.schema';
import { User } from 'src/user/schemas/user.schema';

export type ActivityDocument = Activity & Document;

export class Activity {
  @Prop({
    required: true,
  })
  id: string;

  @Prop({
    required: true,
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Skill.name,
      },
    ],
  })
  skill_id: Skill;

  @Prop({
    required: true,
  })
  skill_name: string;

  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  description: string;

  @Prop({
    required: true,
    type: Date,
  })
  start_date: string;

  @Prop({
    required: true,
    type: Date,
  })
  end_date: string;

  @Prop({
    required: true,
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User.name,
      },
    ],
  })
  participants: User[];
}
export const ActivitySchema = SchemaFactory.createForClass(Activity);
