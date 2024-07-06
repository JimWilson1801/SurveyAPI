import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Survey } from 'src/survey.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SurveysService extends TypeOrmCrudService<Survey> {
    constructor (@InjectRepository(Survey) repo: Repository<Survey>){
        super(repo)
    }
}