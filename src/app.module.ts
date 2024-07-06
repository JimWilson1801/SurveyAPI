import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './survey.entity';
import { User } from './user.entity';
import { UsersModule } from './users/users.module';
import { SurveysModule } from './surveys/surveys.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'surveydb',
    entities: [User,Survey],
    synchronize: true,
  }), UsersModule, SurveysModule,],
})
export class AppModule {}
