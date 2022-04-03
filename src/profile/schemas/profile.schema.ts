import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProfileDocument = Profile & Document;

export class Profile {
  @Prop({
    required: true,
  })
  id: string;

  @Prop({
    required: true,
  })
  profile_name: string;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
