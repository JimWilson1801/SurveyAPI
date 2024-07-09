import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Survey } from './survey.entity';
import { User } from './user.entity';
import { UsersModule } from './users/users.module';
import { SurveysModule } from './surveys/surveys.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'mysql-231391b9-dinhit1801-3fbc.g.aivencloud.com',
    port: 22590,
    username: 'avnadmin',
    password: 'AVNS_I2gPfzsT4nLoIGwTAHV',
    database: 'defaultdb',
    entities: [User,Survey],
    synchronize: true,
  }), UsersModule, SurveysModule,],
})
export class AppModule {}
