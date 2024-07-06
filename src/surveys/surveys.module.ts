import { Module } from '@nestjs/common';
import { SurveysController } from './surveys.controller';
import { SurveysService } from './surveys.service';
import { Survey } from 'src/survey.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Survey])],
  controllers: [SurveysController],
  providers: [SurveysService]
})
export class SurveysModule {}
