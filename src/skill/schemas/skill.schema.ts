import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type SkillDocument = Skill & Document;

export class Skill {
  @Prop({
    required: true,
  })
  id: string;

  @Prop({
    required: true,
  })
  skill_name: string;
}

export const SkillSchema = SchemaFactory.createForClass(Skill);
