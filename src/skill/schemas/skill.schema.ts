import { Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

export type SkillDocument = Skill & Document;

export class Skill {
  // @Prop({
  //   required: true,
  // })
  // id: string;

  @Prop({
    required: true,
  })
  skill_name: string;

  //   @Prop({
  //     required: true,
  //   })
  //   title: string;

  //   @Prop({
  //     required: true,
  //   })
  //   description: string;

  //   @Prop({
  //     required: true,
  //   })
  //   startDate: string;

  //   @Prop({
  //     required: true,
  //   })
  //   endDate: string;

  //   @Prop({
  //     required: true,
  //     type: [
  //       {
  //         type: mongoose.Schema.Types.ObjectId,
  //         ref: User.name,
  //       },
  //     ],
  //   })
  //   participants: User[];
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
