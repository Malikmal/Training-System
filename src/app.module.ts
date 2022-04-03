import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillModule } from './skill/skill.module';
import { ProfileModule } from './profile/profile.module';
import { ConfigModule } from '@nestjs/config';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [
    // MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    // MongooseModule.forRoot(
    //   'mongodb+srv://<username>:<password>@cluster0.qpxlx.mongodb.net/<database>?retryWrites=true&w=majority',
    // ),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_HOST, {
      user: process.env.DB_USERNAME,
      pass: process.env.DB_PASSWORD,
      dbName: 'myFirstDatabase',
      w: 'majority',
      retryWrites: true,
    }),
    UserModule,
    AuthModule,
    SkillModule,
    ProfileModule,
    ActivityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
